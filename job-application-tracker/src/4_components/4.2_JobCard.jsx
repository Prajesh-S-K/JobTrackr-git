import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteJob } from '../3_firebase/3.1_config'
import StatusBadge from './4.7_StatusBadge' // ✅ import added

const calculateDaysAgo = (timestamp) => {
  if (!timestamp) return 'N/A'
  const now = new Date()
  const jobDate = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  const diff = Math.floor((now - jobDate) / (1000 * 60 * 60 * 24))
  return diff
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
    <div className="bg-black text-white p-4 rounded border border-white shadow-lg hover:shadow-xl transition">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold text-yellow-400">
          {job.company} – {job.title}
        </h2>
        <StatusBadge status={job.status} />
      </div>

      <p className="text-sm text-gray-300 mb-1">📍 {job.city}, {job.province}</p>
      <p className="text-sm text-gray-300 mb-1">🗓️ {job.date?.toDate ? job.date.toDate().toLocaleDateString() : 'N/A'}</p>
      <p className="text-sm text-gray-300 mb-2">⏳ {calculateDaysAgo(job.date)} days ago</p>

      {job.jobLink && (
        <a
          href={job.jobLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm underline"
        >
          🔗 View Posting
        </a>
      )}

      {job.notes && (
        <p className="text-sm mt-2 text-gray-200">{job.notes}</p>
      )}

      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={() => navigate(`/edit/${job.id}`)}
          className="text-yellow-300 hover:underline"
        >
          ✏️ Edit
        </button>
        <button
          onClick={handleDelete}
          className="text-red-400 hover:underline"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  )
}
