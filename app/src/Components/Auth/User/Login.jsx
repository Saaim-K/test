import React from 'react'
import styles from './User.module.css'
import email from '../../../Assets/Email.png'
import password from '../../../Assets/Password.png'

const Login = () => {

   return (
      <>
         <div className={styles.logoTxt}>
            <p className={styles.saylani}>SAYLANI WELFARE</p>
            <p className={styles.saylani_subtxt}>ONLINE DISCOUNT STORE</p>
         </div>

         <form className={styles.form}>
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
                  <p className={styles.btnTxt}>Login</p>
               </button>
            </label>
         </form>
      </>
   )
}

export default Login