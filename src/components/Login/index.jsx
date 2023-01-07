import { Button } from "@mui/material";
import React from "react";

import styles from "./login.module.scss";

export default function Login() {
  return (
    <div className={styles.loginwrapper}>
      <div className={styles.login}>
        <div className={styles.login_leftbox}>
          <div>
            <p className={styles.leftbox__title1}>
              Looks like you're new here!
            </p>
            <p className={styles.leftbox__title2}>
              Sign up with your mobile number to get started
            </p>
          </div>
          <div className={styles.leftbox__img}>
            <img src="https://cdn-icons-png.flaticon.com/128/7141/7141726.png" />
          </div>
        </div>
        <div className={styles.login_rightbox}>
          <form className={styles.rightbox__form}>
            <div className={styles.form__field}>
              <input
                id="mobileNo"
                type="text"
                maxlength="10"
                className={styles.input__field}
              />
              <span className={styles.input__label}>Enter mobile number</span>
            </div>
            <div className={styles.form__btn}>
              <Button variant="contained" className={styles.form__btn1}>
                Continue
              </Button>
              <Button variant="outlined">Log in</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
