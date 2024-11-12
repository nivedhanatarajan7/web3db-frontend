'use client';
import React, { useState } from 'react'

const Form = () => {

    const[form, setForm] = useState({data: ''});
    const[submitting, setSubmitting] = useState(false)

    const handleChange = (e) => {
        setForm({...form, data: e.target.value})
        console.log(form.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitting(true)
        console.log("Submitted")

        // Insert API Post

        setSubmitting(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Enter Data:</label>
                    <input 
                        type="text"
                        value={form.data}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <button type='submit' disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>

            </form>
            
        </div>
    )
}

export default Form