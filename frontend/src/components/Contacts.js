import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { serviceId,templateId,privKey } from './Util/Connections';



export default function Contacts(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm(serviceId, templateId, form.current, privKey)
        .then((result) => {
            alert("Message succesfully sent!");
        }, (error) => {
            console.log(error);
        });
    };
     
    return(
        <section id="contact">
            <h1 className='mainHeaders'>Contact Information</h1>

            <form ref={form} onSubmit={sendEmail}>
                
                <label className='form_label' style={{gridRow:1}}>Your Name:</label>
                <input type="text" name="user_name" />
                

                
                <label className='form_label'>Email:</label>
                <input  type="email" name="user_email" />
                

                
                <label className='form_label'>Message:</label>
                <textarea name="message" />
                

                <button className='form-btn' type="submit">
                Send Email
                </button>
                
            </form>
            
        </section>
    );
}