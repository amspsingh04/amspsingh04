import styles from './login.module.css';

const Login = () => {
  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Login</h1>
      <button className={styles.button}>Sign In</button>
    </div>
  );
};

export default Login;
