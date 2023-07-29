import styles from './nav.module.css'
import logo from '../../assets/logo.png'


const NavBar=()=>{
    return(
        <nav className={styles.nav}>
            <div className="logo">
                <img src={logo} alt='Logo'/>
            </div>
            <div className={styles.input}>
                <input  type='text' placeholder='Search'/>

            </div>
            <div className=""></div>
        </nav>
    )
}
export default NavBar