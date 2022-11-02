import React, { useState } from 'react'

const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState({contactUsName: '', contactUsEmail: '', contactUsComments: ''})
    const [formErrors, setFormErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const regex_email= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const regex_name= /^[^ 0-9]+\s[^ 0-9]+$/i

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})

        let error = ""

        switch(e.target.type) {
            case 'text':
                if(!e.target.value) {
                    error = "You must enter a name"
                } else if(!regex_name.test(e.target.value)) {
                    e.target.classList.add('error')
                    error = "Please enter a valid name"
                } else {
                    e.target.classList.remove('error')
                }
                break;

            case 'email':
                if(!e.target.value) {
                    error = "You must enter an e-mail address"
                } else if(!regex_email.test(e.target.value)) {
                    e.target.classList.add('error')
                    error = "Your e-mail must be valid (eg. username@domain.com)"

                } else {
                    e.target.classList.remove('error')
                }
                break;

            case 'textarea':
                if(!e.target.value) {
                    error = "You must enter a comment"
                } else if(e.target.value.length < 5) {
                    e.target.classList.add('error')
                    error = "Your comment must be atleast 5 letters"
                } else {
                    e.target.classList.remove('error')
                }
                break;
        }

        document.getElementById(`errorMessage-${e.target.type}`).innerText = error
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }

    const validate = (values) => {
        const errors = {}        

        if(!values.contactUsName) {
            errors.contactUsName = "You must enter a name"
        }
        else if(!regex_name.test(values.contactUsName)) {
            errors.contactUsName = "Please enter a valid name"
        }

        if(!values.contactUsEmail) {
            errors.contactUsEmail = "You must enter an e-mail address"
        }
        else if(!regex_email.test(values.contactUsEmail)) {
            errors.contactUsEmail = "Your e-mail must be valid (eg. username@domain.com)"
        }
            
        if(!values.contactUsComments) {
            errors.contactUsComments = "You must enter a comment"
        }
        else if(values.contactUsComments.length < 5) {
            errors.contactUsComments = "Your comment must be atleast 5 letters"
        }

        if(Object.keys(errors).length === 0)
            setSubmitted(true)
        else
            setSubmitted(false)


        return errors;
    }


  return (
    <section className="contact-us">
        <div className="container">
            {
                submitted ?
                (<div className="d-flex justify-content-center align-items-center">
                    <div>Thank you for your comment!</div>
                </div>)
                :
                (
                    <>
                        <h2>Come in Contact with Us</h2>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="grid">
                                <div className="contactUsName">
                                    <input id="contactUsName" className="" type="text" placeholder="Your Name eg. John Doe" value={contactForm.name} onChange={handleChange} />
                                    <div id="errorMessage-text" className="errorMessage">{formErrors.contactUsName}</div>    
                                </div>
                                <div className="contactUsEmail">
                                    <input id="contactUsEmail" className="" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} />
                                    <div id="errorMessage-email" className="errorMessage">{formErrors.contactUsEmail}</div>
                                </div>
                                <div className="contactUsComments">
                                    <textarea id="contactUsComments" className="" form="contactUsForm" placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
                                    <div id="errorMessage-textarea" className="errorMessage">{formErrors.contactUsComments}</div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-theme">
                                <div className="btn-box-left"></div>
                                Post Comments
                                <div className="btn-box-right"></div>
                            </button>                
                        </form>
                    </>
                )
            }
        </div>
    </section>
  )
}

export default ContactFormSection