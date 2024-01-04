"use client";

import { Button } from "@dnamobile/ui";
import { TextField } from "@dnamobile/textfield";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
      <TextField value="eeee" />
    </div>
  );
}
