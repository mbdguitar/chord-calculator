import React from "react";
import { motion } from 'motion/react';
import styles from '../modules/About.module.css';

function About() {
    return (
        <motion.div 
            className={styles.about}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{transition: 0.1}}
        >
            <section>
                <h2>About Me</h2>
                <p>
                    Hey there! I'm Miguel, a front-end developer, music educator, and performer. 
                    This app was built to help musicians, students, and producers quickly identify and understand chords played on a piano. 
                    This project is the result of my desire to help my students understand chords and harmony in a way they have the freedom to 
                    experiment through an interactive interface
                </p>
            </section>
            <section>
                <h2>How to use</h2>
                <p>
                    This app analyzes selected notes on the Keyboard and searches through a database to display the matching chord type. 
                    It currently supports up to 250 different chord types, with inversions coming soon on a future update. Due to the complex
                    nature of harmony and standard naming conventions in music theory, there is a chance the chord you're looking for is not
                    able to be calculated.
                </p>
            </section>
            <section>
                <h2>Coming Soon</h2>
                <ul>
                    <li>Full chord calculation algorithm</li>
                    <li>Support for chord inversions</li>
                    <li>Audio playback</li>
                </ul>
            </section>
            <section>
                <h2>Contact</h2>
                <p>Found some bugs or have any questions about the program? Let's get in touch!</p>
                <div className={styles.contact_form_container}>
                    <form>
                        <div className={styles.name}>
                            <label htmlFor='name'>NAME</label>
                            <input id='name'type='text' name='name' placeholder="Enter your name" autocomplete></input>
                        </div>
                        <div className={styles.email}>
                            <label htmlFor='email'>EMAIL</label>
                            <input id='email'type='email' name='email' placeholder="Enter your email"></input>
                        </div>
                        <div className={styles.category}>
                            <label htmlFor='category'>CATEGORY</label>
                            <select id='category'>
                                <option default></option>
                                <option value='bug-report'>Bug Report</option>
                                <option value='feature-request'>Feature Request</option>
                                <option value='general-feedback'>General Feedback</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>
                        <div className={styles.message}>
                            <label htmlFor='message'>MESSAGE</label>
                            <textarea id='message' name='message'placeholder="Enter your message"></textarea>
                        </div>
                        <input type='submit' value='Submit' className={styles.about_submit_button}/>
                    </form>
                </div>
            </section>
        </motion.div>
    )
}

export default About;