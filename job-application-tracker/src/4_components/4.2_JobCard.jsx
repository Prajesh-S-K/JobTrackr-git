import React from 'react'

// Helper to calculate days
const calculateDaysAgo = (timestamp) => {
  if (!timestamp) return 'N/A'
  const now = new Date()
  const jobDate = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  const diff = Math.floor((now - jobDate) / (1000 * 60 * 60 * 24))
  return diff
}

export default function JobCard({ job }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{job.company} – {job.title}</h2>
      <p>Status: {job.status}</p>
      <p>📍 {job.city}, {job.province}</p>
      <p>🗓️ {job.date?.toDate ? job.date.toDate().toLocaleDateString() : 'Date not set'}</p>
      <p>⏳ {calculateDaysAgo(job.date)} days ago</p>
      <a href={job.jobLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        View Job Posting
      </a>
      <p className="text-sm text-gray-600 mt-2">{job.notes}</p>
    </div>
  )
}
