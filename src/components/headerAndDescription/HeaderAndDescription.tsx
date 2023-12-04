import style from "./index.module.scss";
const HeaderAndDescription = ({ data }: any) => {
  return (
    <div className={style.container}>
      <h1>{data.h1}</h1>
      {data.p && <p>{data.p}</p>}
      <h2>{data.h2}</h2>
    </div>
  );
};

export default HeaderAndDescription;
