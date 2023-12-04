import { useState } from "react";
import logoBlack from "../../assets/images/logo-black.png";
import AccountButton from "../buttons/navButtons/AccountButton";
import MenuButton from "../buttons/navButtons/MenuButton";
import Searchbutton from "../buttons/navButtons/Searchbutton";
import CartButton from "../buttons/navButtons/CartButtons";
import style from "./index.module.scss";
import MenuButtonClose from "../buttons/navButtons/MenuButtonClose";
const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <header className={style.container}>
        <div className={style.left}>
          <MenuButton setMenuIsOpen={setMenuIsOpen} />
          <Searchbutton />
        </div>
        <div className={style.middle}>
          <img src={logoBlack} />
        </div>
        <div className={style.right}>
          <AccountButton />
          <CartButton />
        </div>
      </header>
      <div
        className={`${style.wrap}  ${
          menuIsOpen ? style.wrapOpen : style.wrapHidden
        }`}
      >
        <div
          className={`${style.menu}  ${
            menuIsOpen ? style.menuOpen : style.menuHidden
          }`}
        >
          <div className={style.menuWrapper}>
            <MenuButtonClose setMenuIsOpen={setMenuIsOpen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
