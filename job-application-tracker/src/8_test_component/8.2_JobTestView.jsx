import React, { useEffect, useState } from 'react'
import { addJob, getJobs } from '../3_firebase/3.1_config'

// Helper to calculate how many days have passed
const calculateDaysAgo = (timestamp) => {
  if (!timestamp) return 'Unknown'

  const now = new Date()
  const jobDate = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  const diff = Math.floor((now - jobDate) / (1000 * 60 * 60 * 24))
  return diff
}


export default function JobTestView() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const unsubscribe = getJobs((jobList) => {
      setJobs(jobList)
    })
    return () => unsubscribe() // clean up listener
  }, [])

  const handleAddTestJob = async () => {
    const dummyJob = {
      company: 'TestCo',
      title: 'Junior Developer',
      status: 'Applied',
      city: 'Toronto',
      province: 'ON',
      jobLink: 'https://example.com',
      notes: 'Test job added by Prajesh'
    }
    await addJob(dummyJob)
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧪 Firebase Job Test View</h1>
      <button
        onClick={handleAddTestJob}
        className="mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        ➕ Add Test Job
      </button>

      {jobs.length === 0 && <p>No jobs yet. Add one!</p>}

      {jobs.map((job) => (
        <div key={job.id} className="bg-white shadow-md rounded p-4 mb-4 border">
          <h2 className="text-xl font-semibold">{job.company} – {job.title}</h2>
          <p>Status: {job.status}</p>
          <p>📍 {job.city}, {job.province}</p>
          <p>🗓️ Applied on: {job.date?.toDate().toLocaleDateString()}</p>
          <p>⏳ {job.date ? `${calculateDaysAgo(job.date)} days ago` : 'N/A'}</p>
          <a href={job.jobLink} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            View Job Posting
          </a>
          <p className="mt-2 text-sm text-gray-600">Notes: {job.notes}</p>
        </div>
      ))}
    </div>
  )
}
