import React, { useEffect, useState } from 'react'

export default function JobForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    status: 'Applied',
    city: '',
    province: '',
    jobLink: '',
    notes: ''
  })

  // Populate form when initialData changes (Edit Mode)
  useEffect(() => {
    if (initialData) {
      setFormData({ ...formData, ...initialData })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company Name"
        required
        className="input"
      />
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Job Title"
        required
        className="input"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="input"
      >
        <option>Applied</option>
        <option>Interviewing</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        required
        className="input"
      />
      <input
        name="province"
        value={formData.province}
        onChange={handleChange}
        placeholder="Province"
        required
        className="input"
      />
      <input
        name="jobLink"
        value={formData.jobLink}
        onChange={handleChange}
        placeholder="Job Posting URL"
        className="input"
      />
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Additional Notes"
        className="input h-24"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save Job
      </button>
    </form>
  )
}
