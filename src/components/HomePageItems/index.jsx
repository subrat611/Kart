import { Card, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import styles from "./homepageitems.module.scss";

export default function HomePageItems() {
  const [homepageData, setHomePageData] = useState([]);

  useEffect(() => {
    fetch("./data/homepage.json")
      .then((res) => res.json())
      .then((data) => setHomePageData(data))
      .catch(() => alert("Error from HomePageItems component"));
  }, []);

  return (
    <div className={styles.container}>
      {homepageData.map((item, i) => (
        <a href="#" key={i}>
          <Item item={item} />
        </a>
      ))}
    </div>
  );
}

function Item({ item }) {
  return (
    <Card className={styles.itemContainer}>
      <img
        src="https://rukminim1.flixcart.com/image/612/612/l2f20sw0/mixer-grinder-juicer/t/q/x/-original-imagdrhaqwvdu7wh.jpeg?q=70"
        className={styles.itemImage}
      />
      <div>
        <p className={styles.itemTitle}>{item.name}</p>
        <span>₹{item.price}</span>
      </div>
      <Button variant="outlined">Add to cart</Button>
    </Card>
  );
}
