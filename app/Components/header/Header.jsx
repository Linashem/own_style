"use client";

import { useState } from "react";
import style from "./Header.module.scss";
import Image from "next/image";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const isActiveHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <header className={style.header}>
      <nav className={style.header_nav}>
        <div className={style.header_line}>
          

          <div className={style.logo}>
            <Image src='./logo.svg' alt='свой стиль' width={40} height={70} />
            <div className={style.logo_text}>
              <p className={style.logo_title}>СВОЙ СТИЛЬ</p>
              <p className={style.logo_desc}>ШКОЛА ШИТЬЯ</p>
            </div>
          </div>

          <button className={style.header_burger} onClick={isActiveHandler}>
            <span className={style.burger_item}></span>
            <span className={style.burger_item}></span>
            <span className={style.burger_item}></span>
          </button>

          <ul className={isActive ? style.active : style.notactive}>
            <li className={style.header_item}>
              <a href=''>О нас</a>
            </li>
            <li className={style.header_item}>
              <a href=''>Курсы</a>
            </li>
            <li className={style.header_item}>
              <a href=''> Работы учениц</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
