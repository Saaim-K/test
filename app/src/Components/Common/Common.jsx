import React from 'react'
import logo from '../../Assets/Frame.png'
import styles from './Common.module.css'

const Common = () => {
   return (
      <>
         <div className={styles.body}>
            <div className={styles.logo}>
               <img src={logo} alt="logo" width={300} />
            </div>
            <div className={styles.logoTxt}>
               <p className={styles.saylani}>SAYLANI WELFARE</p>
               <p className={styles.saylani_subtxt}>ONLINE DISCOUNT STORE</p>
            </div>
            <div>
               <button className={styles.btn}>
                  <p className={styles.btnTxt}>Get Started</p>
               </button>
            </div>
         </div>
      </>
   )
}

export default Common