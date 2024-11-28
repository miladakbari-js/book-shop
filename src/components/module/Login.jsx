import styles from "./Login.module.css";
import union from "../../images/union.png";
import { useState } from "react";
import { sendLogin } from "../../services/auth";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log({ username, password });
    if (!username.length || !password.length)
      return toast.error("لطفا نام کاربری و رمز عبور را وارد نمایید!")

    const { response, error } = await sendLogin(username, password);

    if (response) console.log({ response, error });
  };
  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <div className={styles.head}>
        <img src={union} alt="unionIcon" />
        <h3>ورود</h3>
      </div>
      <div className={styles.option}>
        <input
          placeholder="نام کاربری"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          placeholder="رمز عبور"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">ورود</button>
      </div>
      <div className={styles.account}>
        <Link to="/register">
          <p>ایجاد حساب کاربری!</p>
        </Link>
      </div>
      <Toaster reverseOrder={true}/>
    </form>
  );
}

export default Login;
