import styles from "./Login.module.css"
import union from "../../images/union.png"
import { useState } from "react";
import { sendLogin } from "../../services/auth";
import { Link } from "react-router-dom";

function Login() {
  const [username , setUserName] = useState("");
  const [password , setPassword] = useState("");

  const submitHandler =async (event)=>{
    event.preventDefault();
    
    if (!username.length || !password.length) return alert("لطفا نام کاربری و رمزعبور را وارد نمایید!");
    console.log(username , password);
    const {response , error } = await sendLogin(username , password);

    if(response) console.log({response , error});
  }
  return (
    <form className={styles.container} onSubmit={submitHandler}>
        <img src={union}/>
        <input placeholder="نام کاربری" onChange={e => setUserName(e.target.value)}/>
        <input placeholder="رمز عبور" onChange={e => setPassword(e.target.value)}/>
        <button type="submit">ورود</button>
        <Link to="/register">ایجاد حساب کاربری!</Link>
    </form>
  )
}

export default Login