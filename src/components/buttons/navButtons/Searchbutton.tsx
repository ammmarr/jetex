import search from "../../../assets/icons/search.png";
import style from "./search.module.scss";
const Searchbutton = () => {
  return (
    <div className={style.container}>
      <img src={search} />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Searchbutton;
