import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteJob } from '../3_firebase/3.1_config'

// 🔢 Helper to calculate how many days ago the job was applied
const calculateDaysAgo = (timestamp) => {
  if (!timestamp) return 'N/A'
  const now = new Date()
  const jobDate = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  const diff = Math.floor((now - jobDate) / (1000 * 60 * 60 * 24))
  return diff
}

// 🎨 Helper to return a styled status badge
const getStatusBadge = (status) => {
  const base = 'inline-block px-2 py-1 text-xs font-semibold rounded'

  switch (status) {
    case 'Applied':
      return <span className={`${base} bg-gray-200 text-gray-800`}>Applied</span>
    case 'Interviewing':
      return <span className={`${base} bg-blue-100 text-blue-800`}>Interviewing</span>
    case 'Offer':
      return <span className={`${base} bg-green-100 text-green-800`}>Offer</span>
    case 'Rejected':
      return <span className={`${base} bg-red-100 text-red-800`}>Rejected</span>
    default:
      return <span className={`${base} bg-gray-100 text-gray-700`}>{status}</span>
  }
}

export default function JobCard({ job }) {
  const navigate = useNavigate()

  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this job?')
    if (confirm) {
      await deleteJob(job.id)
    }
  }

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition border">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold">{job.company} – {job.title}</h2>
        {getStatusBadge(job.status)}
      </div>

      <p className="text-sm text-gray-600 mb-1">📍 {job.city}, {job.province}</p>
      <p className="text-sm text-gray-600 mb-1">🗓️ {job.date?.toDate ? job.date.toDate().toLocaleDateString() : 'N/A'}</p>
      <p className="text-sm text-gray-600 mb-2">⏳ {calculateDaysAgo(job.date)} days ago</p>

      {job.jobLink && (
        <a
          href={job.jobLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm underline"
        >
          🔗 View Posting
        </a>
      )}

      {job.notes && (
        <p className="text-sm mt-2 text-gray-700">{job.notes}</p>
      )}

      <div className="flex justify-end gap-4 mt-4">
        <button onClick={() => navigate(`/edit/${job.id}`)} className="text-blue-600 hover:underline">✏️ Edit</button>
        <button onClick={handleDelete} className="text-red-600 hover:underline">🗑️ Delete</button>
      </div>
    </div>
  )
}
