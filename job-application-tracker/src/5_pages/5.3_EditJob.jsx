// src/5_pages/5.3_EditJob.jsx

import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { db, updateJob } from '../3_firebase/3.1_config'
import { doc, getDoc } from 'firebase/firestore'
import JobForm from '../4_components/4.3_JobForm'

export default function EditJob() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [initialData, setInitialData] = useState(null)

  useEffect(() => {
    const fetchJob = async () => {
      const docRef = doc(db, 'jobs', id)
      const snapshot = await getDoc(docRef)
      if (snapshot.exists()) {
        setInitialData(snapshot.data())
      } else {
        alert('Job not found')
        navigate('/')
      }
    }
    fetchJob()
  }, [id, navigate])

  const handleUpdate = async (formData) => {
    try {
      await updateJob(id, formData)
      alert('✅ Job updated!')
      navigate('/')
    } catch (error) {
      alert('❌ Error updating job.')
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">✏️ Edit Job</h1>
      {initialData ? (
        <JobForm onSubmit={handleUpdate} initialData={initialData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
