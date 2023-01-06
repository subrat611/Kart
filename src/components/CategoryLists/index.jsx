import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";

import styles from "./category.module.scss";

export default function CategoryLists() {
  const [categorylists, setCategoryList] = useState([]);

  useEffect(() => {
    fetch("./data/categorylist.json")
      .then((res) => res.json())
      .then((data) => setCategoryList(data))
      .catch(() => alert("Error from Category Lists component"));
  }, []);

  return (
    <Card className={styles.categoryContainer}>
      <div className={styles.categoryLists}>
        {categorylists.map((item, i) => (
          <a href={i}>
            <Item imgLink={item.imgLink} itemName={item.categoryName} key={i} />
          </a>
        ))}
      </div>
    </Card>
  );
}

function Item({ itemName, imgLink }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemImg}>
        <img src={imgLink} />
      </div>
      <span>{itemName}</span>
    </div>
  );
}
