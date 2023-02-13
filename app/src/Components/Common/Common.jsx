import React from 'react'
import logo from '../../Assets/Frame.png'
import styles from './Common.module.css'

const Common = () => {
   return (
      <>
         <div>
            <img src={logo} alt="logo" />
         </div>
         <div className={styles.logoTxt}>
            <p>SAYLANI WELFARE</p>
            <p>ONLINE DISCOUNT STORE</p>
         </div>
         <div>
            <button className={styles.btn}>
               <p className={styles.btnTxt}>Get Started</p>
            </button>
         </div>
      </>
   )
}

export default Common