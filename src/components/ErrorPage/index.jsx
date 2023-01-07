import React from "react";

import styles from "./errorpage.module.scss";

export default function ErrorPage() {
  return (
    <div className={styles.error}>
      <h2>404 Page not found</h2>
    </div>
  );
}
