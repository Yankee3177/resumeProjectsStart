import React, { useRef } from 'react';
import emailjs, { sendForm } from '@emailjs/browser';



export default function Contacts(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_tppmjit', 'template_xeig8dh', form.current, 'DEz_VYqvBePW81Ay2')
        .then((result) => {
            alert("Message succesfully sent!");
        }, (error) => {
            console.log(error);
        });
    };
    
        //emailjs.sendForm('service_tppmjit', 'template_xeig8dh', form.current, 'DEz_VYqvBePW81Ay2')
 
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
                

                <button className='btn' type="submit">
                Send Email
                </button>
                
            </form>
            
        </section>
    );
}