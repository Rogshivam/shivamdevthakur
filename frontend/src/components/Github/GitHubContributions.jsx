'use client'

import { useState, useEffect } from 'react'

export default function GithubContributionGraph() {
    const [contributionData, setContributionData] = useState(null)
    const [selectedYear, setSelectedYear] = useState(2025)
    const [isLoading, setIsLoading] = useState(false)

    const getContribution = async (year) => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://github-contributions-api.jogruber.de/v4/Rogshivam?y=${year}`)
            const data = await response.json()
            setContributionData(data)
        } catch (error) {
            console.error('Error fetching contributions:', error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getContribution(selectedYear)
    }, [selectedYear])

    const getColorClass = (level) => {
        switch (level) {
            case 1: return 'bg-blue-500'
            case 2: return 'bg-blue-700'
            case 3: return 'bg-blue-800'
            case 4: return 'bg-blue-950'
            default: return 'bg-[#2D2D2D]'
        }
    }

    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const generateGrid = (monthIndex) => {
        const firstDayOfMonth = new Date(selectedYear, monthIndex, 1).getDay()
        const daysInMonth = new Date(selectedYear, monthIndex + 1, 0).getDate()
        const totalCells = 42
        const emptyDaysBefore = firstDayOfMonth

        return Array.from({ length: totalCells }, (_, index) => {
            const dayOfMonth = index - emptyDaysBefore + 1
            return dayOfMonth > 0 && dayOfMonth <= daysInMonth ? dayOfMonth : null
        })
    }

    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-6">
            
            {/* Graph Card */}
            <div className="rounded-2xl border border-blue-600 text-white bg-gray-100 dark:bg-gray-900 p-6 flex-1 min-w-0">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Github&apos;s Stats</h2>

                {isLoading ? (
                    <div className="text-center text-white">Loading contributions...</div>
                ) : (
                    <div className="relative">
                        {/* Scrollable months */}
                        
                        <div className="flex overflow-x-auto scrollbar-thin custom-scroll scrollbar-thumb-blue-600 scrollbar-track-transparent pb-4 hide-scrollbar snap-x snap-mandatory">
                            {months.map((month, monthIndex) => (
                                <div 
                                    key={monthIndex} 
                                    className="min-w-[80px] sm:min-w-[110px] snap-start"
                                >
                                    <div className="text-center text-xs text-gray-400 mb-1 gap-2">{month}</div>
                                    <div className="grid grid-cols-7 gap-[2px]">
                                        {generateGrid(monthIndex).map((day, index) => {
                                            const contributionDay = contributionData?.contributions.find(contrib => {
                                                const contribDate = new Date(contrib.date)
                                                return contribDate.getDate() === day && contribDate.getMonth() === monthIndex
                                            })
                                            return (
                                                <div
                                                    key={index}
                                                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm ${contributionDay ? getColorClass(contributionDay.level) : 'bg-[#2D2D2D]'}`}
                                                    title={day ? (contributionDay ? `${contributionDay.count} contributions on ${formatDate(contributionDay.date)}` : '') : ''}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap items-center justify-between mt-4 text-xs sm:text-sm text-gray-400 gap-2">
                            <span>{contributionData?.total?.[selectedYear.toString()] || 0} contributions in {selectedYear}</span>
                            <div className="flex items-center gap-1">
                                <span>Less</span>
                                <div className="w-3 h-3 bg-blue-400 rounded-sm" />
                                <div className="w-3 h-3 bg-blue-500 rounded-sm" />
                                <div className="w-3 h-3 bg-blue-700 rounded-sm" />
                                <div className="w-3 h-3 bg-blue-800 rounded-sm" />
                                <div className="w-3 h-3 bg-blue-950 rounded-sm" />
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Year Tabs */}
            <div className="flex md:flex-col flex-row gap-2 justify-center md:justify-start">
                {[2025, 2024, 2023].map((year) => (
                    <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-4 py-2 rounded-lg text-white ${selectedYear === year ? 'bg-blue-600' : 'bg-[#2D2D2D]'} hover:bg-blue-950`}
                    >
                        {year}
                    </button>
                ))}
            </div>
         
            <style jsx>{`
                .custom-scroll::-webkit-scrollbar {
                    height: 4px;
                }
                .custom-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scroll::-webkit-scrollbar-thumb {
                    background: #2563eb;
                    border-radius: 10px;
                }
            `}</style>

        </div>
    )
}
