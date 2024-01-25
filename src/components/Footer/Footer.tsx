import React,{ FC } from 'react';
import style from './Footer.module.css';
import githubLogo from '../../images/GitHub_Logo.png';
import telegramLogo from '../../images/pngwing.com.png'

const Footer: FC = () => {
  return (
    <section className={style.wrapper}>
      <ul className={style.linksList}>
        <li className={style.li}>
          <a href="https://github.com/lighterboiii" className={style.link} target='blank'>
            <img src={githubLogo} alt="github logo" className={style.logo} />
          </a>
        </li>
        <li className={style.li}>
          <a href="https://t.me/lighterboii" className={style.link}>
            <img src={telegramLogo} alt="telegram logo" className={style.tgLogo} />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Footer;