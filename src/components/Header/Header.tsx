import headerStyles from "./header.module.css";
import logoImage from "../../images/Logo.svg";

const Header = () => {
  return (
    <section className={headerStyles.main}>
      <img className={headerStyles.logo} src={logoImage} />
    </section>
  );
};

export default Header;
