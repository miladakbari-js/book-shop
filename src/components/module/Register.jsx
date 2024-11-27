import { useState } from "react";
import union from "../../images/union.png";
import styles from "./Register.module.css";
import { sendRegister } from "../../services/auth";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [respass, setRepass] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== respass) return alert("تکرار رمزعبور صحیح نیست!");

    if (!username || !password || !respass) {
      return alert("لطفا تمامی فیلدها را پر کنید!");
    }

    const { response, error } = await sendRegister(username, password);

    console.log({ response });
  };

  return (
    <>
      <form className={styles.container} onSubmit={submitHandler}>
        <div className={styles.head}>
          <img src={union} alt="unionIcon" />
          <h4>فرم ثبت نام</h4>
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
          <input
            placeholder="تکرار رمز عبور"
            onChange={(e) => setRepass(e.target.value)}
          />
          <button type="submit">ثبت نام</button>
        </div>
        <div className={styles.account}>
          <Link to="/login">
            <p>حساب کاربری دارید؟</p>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Register;
