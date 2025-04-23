const calculateDaysAgo = (timestamp) => {
    const now = new Date()
    const jobDate = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    const diff = Math.floor((now - jobDate) / (1000 * 60 * 60 * 24))
    return diff
  }
  
//<p>📅 Applied on: {job.date.toDate().toLocaleDateString()}</p>
//<p>⏳ {calculateDaysAgo(job.date)} days ago</p>
