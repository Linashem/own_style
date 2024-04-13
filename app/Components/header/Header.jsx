import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.header_nav}>
        <div className={style.header_line}>
          <button className={style.header_burger}>
            <span className={style.burger_item}></span>
            <span className={style.burger_item}></span>
            <span className={style.burger_item}></span>
          </button>
          <ul>
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
