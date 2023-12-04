import account from "../../../assets/icons/account.png";
const AccountButton = ({}) => {
  return (
    <div className="nav-button">
      <img src={account} />
      <span> Account</span>
    </div>
  );
};

export default AccountButton;
