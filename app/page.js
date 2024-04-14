import Header from "./Components/header/Header";
import Baner from "./Components/baner/Baner";
import AboutUs from "./Components/aboutUs/AboutUs";

import style from "./Home.module.scss";

export default function Home() {
  // const screenHeight = window.innerHeight;
  // console.log(screenHeight);
  return (
    <>
      <div className={style.header_baner}>
        <div className={style.header_block}>
          <Header />
        </div>
        <div className={style.baner_block}>
          <Baner />
        </div>
      </div>
      <main>
        <AboutUs />
      </main>
    </>
  );
}
