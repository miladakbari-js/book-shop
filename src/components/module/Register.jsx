import { useState } from "react";
import union from "../../images/union.png";
import styles from "./Register.module.css";
import { sendRegister } from "../../services/auth";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [respass, setRepass] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== respass) return alert("تکرار رمزعبور صحیح نیست!");

    if (!username || !password || !respass) {
      return toast.error("لطفا تمامی فیلدها را پر کنید!");
    }

    const { response, error } = await sendRegister(username, password);

    if (response.status === 201) {
      console.log(response);
      
      return toast.success("ثبت نام انجام شد.");}
    if (
      response.status === 400 &&
      response.data.message === "User already exists"
    )
      return toast.error("نام کاربری تکراری است");
    if (response.status === 400) return toast.error(`خطایی رخ داده است !!!`);

    console.log({ response, error });
  };

  return (
    <>
      <form className={styles.container} onSubmit={submitHandler}>
        <div className={styles.head}>
          <img src={union} alt="unionIcon" />
          <h3>فرم ثبت نام</h3>
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
        <Toaster reverseOrder={true} />
      </form>
    </>
  );
}

export default Register;
