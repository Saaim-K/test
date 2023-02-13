import React from 'react'
import styles from './Login.module.css'
import username from '../../../Assets/Username.png'
import phone from '../../../Assets/Phone.png'
import email from '../../../Assets/Email.png'
import password from '../../../Assets/Password.png'

const Login = () => {
   return (
      <>
         <div className={styles.logoTxt}>
            <p className={styles.saylani}>SAYLANI WELFARE</p>
            <p className={styles.saylani_subtxt}>ONLINE DISCOUNT STORE</p>
         </div>

         <form autoComplete='off' className={styles.form}>

            <label for="name" className={styles.label}>
               <input type="text" id='name' placeholder='Name' className={styles.input} />
               <img src={username} alt='icon' className={styles.icon} />
            </label>

            <label for="contact" className={styles.label}>
               <input type="number" id='contact' placeholder='Contact' className={styles.input} />
               <img src={phone} alt='icon' className={styles.icon} />
            </label>

            <label for="email" className={styles.label}>
               <input type="email" id='email' placeholder='Email' className={styles.input} />
               <img src={email} alt='icon' className={styles.icon} />
            </label>

            <label for="password" className={styles.label}>
               <input type="password" id='password' placeholder='Password' className={styles.input} />
               <img src={password} alt='icon' className={styles.icon} />
            </label>
            <label for="button" className={styles.label}>
               <button className={styles.btn} id='button' >
                  <p className={styles.btnTxt}>Sign Up</p>
               </button>
            </label>
         </form>




      </>
   )
}

export default Login