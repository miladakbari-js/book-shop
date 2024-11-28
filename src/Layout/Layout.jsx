import { VscAccount, VscBook } from "react-icons/vsc";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.right}>
          <VscBook fontSize="1.5rem" cursor="pointer"/>
          <ul>
            <li><p>همه کتاب ها</p></li>
            <li><p>مرتب سازی</p></li>
          </ul>
        </div>
        <div className={styles.center}>
          <h2>پروژه کتابخانه</h2>
        </div>
        <div className={styles.left}>
          <Link to="/auth">
          <VscAccount fontSize="1.5rem" />
          </Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <p>توسعه داده شده توسط میلاد اکبری</p>
        <a
          href="https://www.linkedin.com/in/milad-akbari-developer"
          target="_blank"
        >
          Linkedin{" "}
        </a>
      </footer>
    </>
  );
}

export default Layout;
