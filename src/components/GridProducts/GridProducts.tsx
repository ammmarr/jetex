import demo from "../../assets/images/demo.webp";
import style from "./index.module.scss";
const GridProducts = ({ arr }: any) => {
  return (
    <div className={style.container}>
      <h2>Our cave of wonders</h2>
      <div className={style.gridContainer}>
        {arr.map((item: any, i: number) => (
          <div className={style.gridProduct} key={i}>
            <img src={demo} />
            <span>ssss</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridProducts;
