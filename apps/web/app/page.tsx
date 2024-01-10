"use client";

import { Button } from "@dnamobile/button";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container} style={{padding: 50}}>
      <h1>Web</h1>
      <Button 
        onPress={() => console.log("Pressed!")} 
        label="Sample Button"   
        size="md"
        loadingLabel="test"
        isLoading   
      />
    </div>
  );
}
