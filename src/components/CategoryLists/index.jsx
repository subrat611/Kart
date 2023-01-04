import { Card } from "@mui/material";
import React from "react";

import styles from "./category.module.scss";

export default function CategoryLists() {
  return (
    <Card className={styles.categoryContainer}>
      <div className={styles.categoryLists}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <Item itemName="Grocery" key={i} />
        ))}
      </div>
    </Card>
  );
}

function Item({ itemName }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemImg}>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" />
      </div>
      <span>{itemName}</span>
    </div>
  );
}
