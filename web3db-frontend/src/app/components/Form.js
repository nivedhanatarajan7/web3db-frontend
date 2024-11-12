'use client';
import React, { useState } from 'react'
import './Form.css'

const Form = () => {

    const[form, setForm] = useState({data: ''});
    const[submitting, setSubmitting] = useState(false)

    const handleChange = (e) => {
        setForm({...form, data: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitting(true)
        console.log("Submitted")

        // Insert API Post

        setSubmitting(false)
    }

    return (
        <div className='medical-form-container'>
            <form onSubmit={handleSubmit}>
                <label className='medical-form-container'>Enter Data:</label>
                <div>
                    
                    <textarea
                        className='medical-text-area'
                        type="text"
                        rows={4}
                        cols={50}
                        value={form.data}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='medical-form-container'>
                    <button type='submit' disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>

            </form>
            
        </div>
    )
}

export default Form