// src/5_pages/5.1_Dashboard.jsx

import React, { useEffect, useState } from 'react'
import { getJobs } from '../3_firebase/3.1_config'
import JobCard from '../4_components/4.2_JobCard'

export default function Dashboard() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const unsubscribe = getJobs((jobList) => {
      setJobs(jobList)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">📄 My Job Applications</h1>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs yet. Click "Add Job" to start tracking!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  )
}
