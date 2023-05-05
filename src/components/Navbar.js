import styles from '../styles/navbar.module.css';

function Navbar() {
    return (
      <div className={styles.nav}>
        <h1><a href='/'>Albums</a></h1>
      </div>
    );
  }
  
  export default Navbar;
  