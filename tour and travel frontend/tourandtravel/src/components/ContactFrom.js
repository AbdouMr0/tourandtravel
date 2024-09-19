import './ContactFormStyles.css'
import React, { useState } from 'react';
import axios from 'axios'
function ContactForm(){
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await axios.post('http://127.0.0.1:8000/tourandtravel/contact/', {
                name,
                email,
                subject,
                message,
            });
            console.log(response.data);
            // Handle success (reset form, show message, etc.)
            setSent(true)
        } catch (error) {
            alert("There was an error submitting the form!", error);
        } finally{
            setLoading(false)
        }
    };
    return (
        <div className='form-container'>
            <h1>Send a message to us for more information.</h1>
            {sent ? (
                <p>You have sent your message successfully!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Subject" 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                        required 
                    />
                    <textarea 
                        placeholder="Message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Sending ....' : 'Send'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;