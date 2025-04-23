// src/8_test/8.1_FirebaseTest.jsx
import React, { useEffect } from 'react'
import { db, collection, getDocs } from '../3_firebase/3.1_config'

export default function FirebaseTest() {
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'jobs'))
        const jobs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        console.log('%c✅ Firebase test successful:', 'color: green; font-size: 14px')
        console.log(jobs)
      } catch (error) {
        console.error('❌ Firebase Error:', error)
      }
    }

    fetchJobs()
  }, [])

  return <div>🔍 Firebase test component running. Check console.</div>
}
