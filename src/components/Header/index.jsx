import React from "react";

import { Button, Card } from "@mui/material";

import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <span className={styles.header_logo}>KartShop</span>
      {/* Search Bar */}
      <div>
        <Button variant="contained" className={styles.header_loginbtn}>
          Login
        </Button>
        <Button variant="text">
          <svg
            xmlns="http://www.w3.org/2000/svg"  
            viewBox="0 0 512 512"
            className={`${styles.header_cartbtn} ionicon`}
          >
            <title>Cart</title>
            <circle
              cx="176"
              cy="416"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <circle
              cx="400"
              cy="416"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M48 80h64l48 272h256"
            />
            <path
              d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
