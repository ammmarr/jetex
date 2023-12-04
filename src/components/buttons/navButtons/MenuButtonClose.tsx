import menuClose from "../../../assets/icons/close.png";
const MenuButtonClose = ({ setMenuIsOpen }: any) => {
  return (
    <div className="nav-button">
      <img src={menuClose} onClick={() => setMenuIsOpen(false)} />
      <span style={{ fontSize: "2rem" }}> Menu</span>
    </div>
  );
};

export default MenuButtonClose;
