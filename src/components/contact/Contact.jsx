import React from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

import './contact.css';
import { second } from '@/app/fonts';

const Contact = () => {
    const formRef = React.useRef();
    const textRef = React.useRef();
    const [focus, setFocus] = React.useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('service_ttmmwda', 'template_vwj89gi', form.current, 'Ae9_zqRZKzMwltn9s')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    };



    return (

        <section className='contact' id='contact'>
            <div className='contact-container'>
                <h1 className={second.className + ' contact-me'}>Contact me</h1>
                <form ref={formRef} onSubmit={sendEmail} className='contact-form'>
                    <div className='user-data'>
                        <div className='input-group'>
                            {focus !== "user_name" ? <label>Name</label> : null}
                            <input
                                type='text'
                                name="user_name"
                                onFocus={(e) => { setFocus(e.target.name) }}
                                onBlur={() => { setFocus(null) }}
                            // placeholder='Your name'

                            />
                        </div>
                        <div className='input-group'>
                            {focus !== "user_email" ? <label>Email</label> : null}
                            <input
                                type="email"
                                name="user_email"
                                onFocus={(e) => { setFocus(e.target.name) }}
                                onBlur={() => { setFocus(null) }}
                            // placeholder='Your e-mail address'

                            />
                        </div>
                    </div>
                    <div className='input-group'>
                        {focus !== "message" ? <label>Message</label> : null}
                        <textarea
                            ref={textRef}
                            name="message"
                            // value=""
                            rows="1"
                            onFocus={(e) => { setFocus(e.target.name) }}
                            onBlur={() => { setFocus(null) }}
                        // placeholder='Please write your message here...'

                        />
                    </div>
                    <div className='button-group'>
                        <button
                            type="button"
                            className='btn-clear secondary-btn btn'
                            onClick={() => { textRef.current.value = "" }}
                        >
                            Clear
                        </button>
                        <button
                            type="submit"
                            value="Send"
                            className='btn-send primary-btn btn'
                        >
                            Submit
                        </button>

                    </div>
                </form>

            </div>
        </section>
    );
};

export default Contact;