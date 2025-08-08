import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
      } else {
        console.error('Server returned error:', await response.text());
        setStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-12"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Feel free to reach out to me for collaborations, freelance work, or just a tech chat.
              </p>
            </div>
            <div className="space-y-3">
              <ContactItem icon="mail" label="shivamdevthakur@gmail.com" href="mailto:shivamdevthakur@gmail.com" />
              <ContactItem
                icon="linkedin"
                label="in/shivam-kumar-5b112b316"
                href="https://www.linkedin.com/in/shivam-kumar-5b112b316"
              />
              <ContactItem icon="github" label="github.com/Rogshivam" href="https://github.com/Rogshivam"/>
              <ResumeDownload />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" text="Name" />
              <Input id="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email" text="Email" />
              <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="message" text="Message" />
              <TextArea id="message" rows={4} value={formData.message} onChange={handleChange} required />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-600 text-white px-4 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <StatusMessage success text="Message sent successfully!" />}
            {status === 'error' && <StatusMessage text="Failed to send message. Please try again." />}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

const ContactItem = ({ icon, label, href }) => (
  <div className="flex items-center space-x-3">
    <Icon name={icon} />
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300">
      {label}
    </a>
  </div>
);

const ResumeDownload = () => (
  <a
    href="https://drive.google.com/file/d/1A4FnDAQeEGMFl9EN2kEyThgEWqn-r7Jh/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  >
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    Download Resume
  </a>
);

const Label = ({ htmlFor, text }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
    {text}
  </label>
);

const Input = ({ id, type = 'text', value, onChange, required }) => (
  <input
    type={type}
    id={id}
    value={value}
    onChange={onChange}
    required={required}
    className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
  />
);

const TextArea = ({ id, value, onChange, required, rows }) => (
  <textarea
    id={id}
    value={value}
    onChange={onChange}
    required={required}
    rows={rows}
    className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
  />
);

const StatusMessage = ({ text, success }) => (
  <p className={`text-center text-sm ${success ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
    {text}
  </p>
);

const Icon = ({ name }) => {
  const icons = {
    mail: (
      <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4C4 3.448 4.448 3 5 3h14c0.552 0 1 0.448 1 1v16c0 0.552-0.448 1-1 1H5c-0.552 0-1-0.448-1-1V4zM8.004 10.5H6V18h2.004v-7.5zM7 9.5c0.672 0 1.004-0.5 1.004-1.004S7.672 7.5 7 7.5 6 8.004 6 8.496c0 0.504 0.328 1.004 1.004 1.004zM18 18h-2v-3.5c0-1.432-1.038-1.5-1.5-1.5-0.672 0-1.5 0.5-1.5 1.5V18h-2v-7.5h2v1.063c0.308-0.623 1.212-1.063 2-1.063 1.544 0 3 1.045 3 3.5V18z" />
      </svg>
    ),
    github:(
      <svg className="w-5 h-6 text-gray-600 dark:text-gray-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
      </svg>
    )
  };
  return icons[name] || null;
};
