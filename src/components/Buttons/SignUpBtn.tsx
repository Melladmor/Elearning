import { FC } from "react";
import style from "./Buttons.module.scss";
import { Trans, withTranslation } from "react-i18next";

const SignUpBtn: FC = () => {
  return (
    <button className={style.signup_container}>
      <span className={style.text}>
        <Trans>SIGN_UP1</Trans>
        <span className={style.special_text}>
          <Trans>SIGN_UP2</Trans>
        </span>
        <Trans>SIGN_UP3</Trans>
      </span>
    </button>
  );
};

export default withTranslation()(SignUpBtn);
