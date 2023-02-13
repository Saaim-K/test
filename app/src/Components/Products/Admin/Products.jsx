import React from 'react'
import hamburger from '../../../Assets/Hamburger.png'
import defaultImage from '../../../Assets/defaultImage.png'
import home from '../../../Assets/Home.png'
import addProduct from '../../../Assets/Add.png'
import account from '../../../Assets/Account.png'
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
                  <div className={styles.name}>
                     Saaim Ahmed Khan
                  </div >
                  <span className={styles.admin}>
                     Admin
                  </span>
               </div>
            </div>
            <div className={styles.nav2}>
               <img src={hamburger} alt="hamburger" />
            </div>
         </nav>

         <footer className={styles.footer}>
            <div className={styles.footerIcons}>
               <img src={home} alt="home" />
               <span className={styles.footertxt}>Home</span>
            </div>
            <div className={styles.footerIcons}>
               <img src={addProduct} alt="add" />
               <span className={styles.footertxt}>Add Items</span>
            </div>
            <div className={styles.footerIcons}>
               <img src={account} alt="account" />
               <span className={styles.footertxt}>Account</span>
            </div>
         </footer>
      </>
   )
}

export default Products