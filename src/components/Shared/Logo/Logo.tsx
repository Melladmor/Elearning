import style from "./Logo.module.scss";
import { ReactComponent as MiniLogo } from "../../../public/img/mini-logo.svg";
import { ReactComponent as Coding } from "../../../public/img/coding.svg";
import { ReactComponent as Kids } from "../../../public/img/forKids.svg";

const Logo = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <MiniLogo />
      </div>
      <div className={style.right}>
        <Coding />
        <Kids />
      </div>
    </div>
  );
};

export default Logo;
