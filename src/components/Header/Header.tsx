import React, { FC } from "react";
import styles from './Header.module.css';

interface IHeader {
  title: string;
}

const Header: FC<IHeader> = ({ title }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default Header;