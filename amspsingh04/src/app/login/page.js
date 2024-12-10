import styles from './page.module.css';
import Header from '../header/page';


const Login = () => {
  return (
    <div className={styles.login}>
        <Header />
      <h1 className={styles.title}>Login</h1>
      <button className={styles.button}>Sign In</button>
    </div>
  );
};

export default Login;
