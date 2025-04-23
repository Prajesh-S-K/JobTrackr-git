// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMakLLPzQElTw8jfUO-sDIVHFZ858_bzI",
  authDomain: "jobtrackr-d05d7.firebaseapp.com",
  projectId: "jobtrackr-d05d7",
  storageBucket: "jobtrackr-d05d7.firebasestorage.app",
  messagingSenderId: "1005417995644",
  appId: "1:1005417995644:web:ab84ffc4f50c39dba958f9"
};

// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const jobsCollection = collection(db, 'jobs')


/* --------------------------------------------
   🔁 CRUD FUNCTIONS
--------------------------------------------- */

// ✅ Add Job
const addJob = async (jobData) => {
  try {
    const docRef = await addDoc(jobsCollection, {
      ...jobData,
      date: new Date(), // 🔹 store the current date/time
    })
    return docRef.id
  } catch (error) {
    console.error("❌ Error adding job:", error)
    throw error
  }
}

// ✅ Get Jobs (real-time listener)
const getJobs = (callback) => {
  return onSnapshot(jobsCollection, (snapshot) => {
    const jobs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    callback(jobs)
  })
}

// ✅ Update Job
const updateJob = async (id, updatedData) => {
  try {
    const jobRef = doc(db, 'jobs', id)
    await updateDoc(jobRef, updatedData)
  } catch (error) {
    console.error("❌ Error updating job:", error)
    throw error
  }
}

// ✅ Delete Job
const deleteJob = async (id) => {
  try {
    const jobRef = doc(db, 'jobs', id)
    await deleteDoc(jobRef)
  } catch (error) {
    console.error("❌ Error deleting job:", error)
    throw error
  }
}

export {
  db,
  addJob,
  getJobs,
  updateJob,
  deleteJob
}