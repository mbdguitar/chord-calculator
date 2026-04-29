import { useState, useEffect } from "react";
import { motion } from 'motion/react';
import styles from '../modules/About.module.css';

function About() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage('')
            }, 5000)
        }
    }, [message]);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);

            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });

            if (!response.ok) throw new Error("Could not send message, please try again later");

            (e.target).reset();
            setMessage("Message sent succesfully!");
        } catch (err) {
            setMessage(err.message);
        };
    };

    return (
        <motion.div
            className={styles.about}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ transition: 0.1 }}
        >
            <section>
                <h2>About Me</h2>
                <p>
                    Hey there! I'm Miguel, a music educator, performer, and front-end developer.
                    This app was built to help musicians, students, and producers quickly identify and understand chords played on a piano.
                    This project is the result of my desire to help my students understand chords and harmony in a way they have the freedom to
                    experiment through an interactive interface.
                </p>
            </section>
            <section>
                <h2>How to use</h2>
                <p>
                    Just click on the piano to select the notes and hit calculate! This app analyzes selected notes on the Keyboard and uses an
                    algorithm to calculate the name of the chord. Due to the complex nature of harmony some chords might not be named correctly
                    or in the most efficient way.
                </p>
            </section>
            <section>
                <h2>Coming Soon</h2>
                <ul>
                    <li>Support for chord inversions</li>
                    <li>Audio playback</li>
                </ul>
            </section>
            <section className={styles.contact_form}>
                <h2>Contact</h2>
                <p>Found some bugs or have any questions about the program? Let's get in touch!</p>
                <div className={styles.contact_form_container}>
                    <form name='contact' data-netlify="true" onSubmit={(e) => handleSubmit(e)}>
                        {/* CONNECTS CONTACT COMPONENT TO HTML FOR NETLIFY HANDLING */}
                        <input type="hidden" name="form-name" value="contact" />

                        <div className={styles.name}>
                            <label htmlFor='name'>NAME</label>
                            <input id='name' type='text' name='name' placeholder="Enter your name" autocomplete required className={styles.name_text}></input>
                        </div>

                        <div className={styles.email}>
                            <label htmlFor='email'>EMAIL</label>
                            <input id='email' type='email' name='email' placeholder="Enter your email" autocomplete required className={styles.email_text}></input>
                        </div>

                        <div className={styles.category}>
                            <label htmlFor='category'>CATEGORY</label>
                            <select id='category' className={styles.category_text} required>
                                <option default></option>
                                <option value='bug-report'>Bug Report</option>
                                <option value='feature-request'>Feature Request</option>
                                <option value='general-feedback'>General Feedback</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>

                        <div className={styles.message}>
                            <label htmlFor='message'>MESSAGE</label>
                            <textarea id='message' name='message' placeholder="Enter your message" className={styles.message_text} required></textarea>
                        </div>

                        <input type='submit' value='Submit' className={styles.about_submit_button} />
                    </form>
                    {message ? <p className={styles.confirmation_message}>{message}</p> : <></>}
                </div>
            </section>
        </motion.div>
    )
}

export default About;