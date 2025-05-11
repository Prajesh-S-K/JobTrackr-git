import React, { useEffect, useState } from 'react'
import { getJobs } from '../3_firebase/3.1_config'
import JobCard from '../4_components/4.2_JobCard'

export default function Dashboard() {
  const [jobs, setJobs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [sortOption, setSortOption] = useState('Newest')

  useEffect(() => {
    const unsubscribe = getJobs((jobList) => {
      setJobs(jobList)
    })
    return () => unsubscribe()
  }, [])

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = `${job.company} ${job.title} ${job.status}`.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All' || job.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Sort jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortOption) {
      case 'Newest':
        return new Date(b.date?.toDate?.() || 0) - new Date(a.date?.toDate?.() || 0)
      case 'Oldest':
        return new Date(a.date?.toDate?.() || 0) - new Date(b.date?.toDate?.() || 0)
      case 'Company':
        return a.company.localeCompare(b.company)
      case 'Title':
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">📄 My Job Applications</h1>

      {/* 🔍 Search + Filter + Sort Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full md:w-1/4 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All Statuses</option>
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full md:w-1/4 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
        >
          <option value="Newest">Date: Newest First</option>
          <option value="Oldest">Date: Oldest First</option>
          <option value="Company">Company: A → Z</option>
          <option value="Title">Job Title: A → Z</option>
        </select>
      </div>

      {/* 🔄 Clear Filters */}
      <div className="text-right mb-6">
        <button
          onClick={() => {
            setSearchTerm('')
            setStatusFilter('All')
            setSortOption('Newest')
          }}
          className="text-sm text-blue-600 hover:underline"
        >
          🔄 Clear Filters
        </button>
      </div>

      {/* 📋 Job Cards */}
      {sortedJobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  )
}
