import React from 'react'
import styles from './User.module.css'
import username from '../../../Assets/Username.png'
import phone from '../../../Assets/Phone.png'
import email from '../../../Assets/Email.png'
import password from '../../../Assets/Password.png'

const Signin = () => {
   return (
      <>
         <div className={styles.logoTxt}>
            <p className={styles.saylani}>SAYLANI WELFARE</p>
            <p className={styles.saylani_subtxt}>ONLINE DISCOUNT STORE</p>
         </div>

         <form className={styles.form}>

            <label htmlFor="name" className={styles.label}>
               <input type="text" id='name' placeholder='Name' className={styles.input} />
               <img src={username} alt='icon' className={styles.icon} />
            </label>

            <label htmlFor="contact" className={styles.label}>
               <input type="number" id='contact' placeholder='Contact' className={styles.input} />
               <img src={phone} alt='icon' className={styles.icon} />
            </label>

            <label htmlFor="email" className={styles.label}>
               <input type="email" id='email' placeholder='Email' className={styles.input} />
               <img src={email} alt='icon' className={styles.icon} />
            </label>

            <label htmlFor="password" className={styles.label}>
               <input type="password" id='password' placeholder='Password' className={styles.input} />
               <img src={password} alt='icon' className={styles.icon} />
            </label>
            <label htmlFor="button" className={styles.label}>
               <button className={styles.btn} id='button' >
                  <p className={styles.btnTxt}>Sign Up</p>
               </button>
            </label>
            <p className={styles.login}>Already have an account? Login</p>
         </form>
      </>
   )
}

export default Signin