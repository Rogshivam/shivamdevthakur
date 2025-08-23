import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const skills = {
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'CSS', 'HTML', 'JavaScript'],
  Backend: ['Node.js', 'PHP', 'Prisma'],
  Database: ['MongoDB', 'MySQL', 'PostgreSQL'],
  Programming: ['C', 'C++', 'Python'],
  Tools: ['Postman', 'Linux'],
  DevOps: ['Docker', 'Jenkins', 'YAML', 'Kubernetes', 'CI/CD', 'DevOps'],
};

const Icon = ({ name }) => {
  const icons = {
    mail: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4C4 3.448 4.448 3 5 3h14c0.552 0 1 0.448 1 1v16c0 0.552-0.448 1-1 1H5c-0.552 0-1-0.448-1-1V4zM8.004 10.5H6V18h2.004v-7.5zM7 9.5c0.672 0 1.004-0.5 1.004-1.004S7.672 7.5 7 7.5 6 8.004 6 8.496c0 0.504 0.328 1.004 1.004 1.004zM18 18h-2v-3.5c0-1.432-1.038-1.5-1.5-1.5-0.672 0-1.5 0.5-1.5 1.5V18h-2v-7.5h2v1.063c0.308-0.623 1.212-1.063 2-1.063 1.544 0 3 1.045 3 3.5V18z" />
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 30 30">
        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63V24.0c-0.487,0-1.3,0-1.5,0-0.82,0-1.55-0.35-1.9-1.0-0.39-0.73-0.46-1.84-1.43-2.53-0.29-0.23-0.07-0.49,0.26-0.45 0.62,0.17,1.12,0.6,1.6,1.22 0.48,0.63,0.7,0.77,1.59,0.77 0.43,0,1.08-0.03,1.69-0.12 0.33-0.83,0.9-1.6,1.59-1.96-4.0-0.41-5.9-2.4-5.9-5.1 0-1.16,0.5-2.29,1.34-3.23C9.05,10.65,8.71,8.73,9.43,8c1.8,0,2.89,1.17,3.15,1.48C13.48,9.17,14.46,9,15.5,9c1.04,0,2.02,0.17,2.92,0.48C18.67,9.17,19.76,8,21.56,8c0.73,0.73,0.38,2.66,0.1,3.59 0.84,0.95,1.33,2.07,1.33,3.23 0,2.7-1.9,4.68-5.89,5.1C18.2,20.49,19,22.1,19,23.31v2.73C23.64,24.68,27,20.24,27,15 27,8.37,21.63,3,15,3z"></path>
      </svg>
    ),
  };
  return icons[name] || null;
};

const ContactItem = ({ icon, label, href }) => (
  <div className="flex items-center space-x-3">
    <Icon name={icon} />
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300">
      {label}
    </a>
  </div>
);

const Input = ({ id, type = 'text', ...props }) => (
  <input
    id={id}
    type={type}
    {...props}
    className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
  />
);

const TextArea = ({ id, ...props }) => (
  <textarea
    id={id}
    {...props}
    className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
  />
);

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-7 text-center">
        <motion.img
          src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1747996179/wkxus9cr05i2ncsvtb5d.jpg"
          alt="Shivam Kumar"
          className="mx-auto h-40 w-40 sm:h-56 sm:w-56 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
        />
        <h1 className="mt-6 text-3xl sm:text-4xl font-bold">
          Hi, I'm Shivam Kumar
          <span className="block text-blue-600 dark:text-blue-400">Full Stack Developer</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          I build modern, responsive web applications that combine performance with clean design.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View Projects
          </Link>
          <Link to="/contact" className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30">
            Contact Me
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold">🎓 Education</h3>
            <p>B.Tech in Computer Science – Maharshi Dayanand University (2023 – Present)</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">📍 Location</h3>
            <p>Haryana, India</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">🛠 Skills</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(skills).map(([category, list]) => (
                <div key={category} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {list.map(skill => (
                      <span key={skill} className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-white rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <div className="space-y-3 mt-3">
              <ContactItem icon="mail" label="shivamdevthakur@gmail.com" href="mailto:shivamdevthakur@gmail.com" />
              <ContactItem icon="linkedin" label="LinkedIn Profile" href="https://www.linkedin.com/in/shivam-kumar-5b112b316" />
              <ContactItem icon="github" label="GitHub Profile" href="https://github.com/Rogshivam" />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
            <TextArea id="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Your Message" required />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-green-600 text-sm">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-600 text-sm">Failed to send message. Try again.</p>}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;
