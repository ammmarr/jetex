import menu from "../../../assets/icons/menu-icon.png";
const MenuButton = ({ setMenuIsOpen }: any) => {
  return (
    <div className="nav-button">
      <img src={menu} onClick={() => setMenuIsOpen(true)} />
      <span> Menu</span>
    </div>
  );
};

export default MenuButton;
