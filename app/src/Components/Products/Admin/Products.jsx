import React from 'react'
import hamburger from '../../../Assets/Hamburger.png'
import defaultImage from '../../../Assets/defaultImage.png'
import styles from './Products.module.css'

const Products = () => {
   return (
      <>
         <nav className={styles.nav}>
            <div className={styles.nav1}>
               <div className={styles.image}>
                  <img src={defaultImage} alt="defaultImage" className={styles.img} />
               </div>
               <div className={styles.navtxt}>
                  <name className={styles.name}>
                     Saaim
                  </name >
                  <span className={styles.admin}>
                     Admin
                  </span>
               </div>
            </div>
            <div className={styles.nav2}>
               <img src={hamburger} alt="hamburger" />
            </div>
         </nav>
      </>
   )
}

export default Products