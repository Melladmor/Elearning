import { FC } from "react";
import style from "./Buttons.module.scss";

type IProps = {
  label: string;
  backgronud: string;
};

const KidsBtn: FC<IProps> = ({ label, backgronud }) => {
  return (
    <button className={style.button_container} style={{ background: `${backgronud}` }}>
      <span>{label}</span>
    </button>
  );
};

export default KidsBtn;
