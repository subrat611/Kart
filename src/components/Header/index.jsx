import React from "react";

import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
          <ShoppingCartIcon className={`${styles.header_cartbtn} ionicon`} />
        </Button>
      </div>
    </div>
  );
}
