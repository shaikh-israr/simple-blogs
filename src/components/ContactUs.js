import React, {useState} from 'react'
import '../App.css'
import { TextField, Button } from '@material-ui/core'
function ContactUs() {
    const [formData, setFormData] = useState({})

    const updateInput = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
      }
      const handleSubmit = event => {
        event.preventDefault()
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      }

    return (
        <div className="App">
            <div className="App-header">
                <form onSubmit={handleSubmit}>
                    <h1>Contact Us</h1>
                    <TextField
                    type="text"
                    name="name"
                    label="Name"
                    onChange={updateInput}
                    value={formData.name || ''}
                    />
                    <br />
                    <TextField
                    type="email"
                    name="email"
                    label="Email"
                    onChange={updateInput}
                    value={formData.email || ''}
                    />
                    <br />
                    <TextField
                    type="text"
                    label="message"
                    onChange={updateInput}
                    value={formData.message || ''}
                    />
                    <br />
                    <br />
                    <Button size="medium" variant="contained" color="primary" type="submit">Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
