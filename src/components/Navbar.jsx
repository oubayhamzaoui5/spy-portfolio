import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <img
          src={import.meta.env.BASE_URL + "assets/eye.jpg"}
          alt="Eye Logo"
          className={styles.eye}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>E.Y.E PERSONAL RECORD SYSTEM</h1>
          <p className={styles.date}>
            {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
          </p>
        </div>
        <img
          src={import.meta.env.BASE_URL + "assets/battery.jpg"}
          alt="Battery Icon"
          className={styles.battery}
        />
      </div>
    </nav>
  );
}
