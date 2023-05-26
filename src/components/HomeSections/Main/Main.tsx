import { FC } from "react";
import style from "./Main.module.scss";
import KidsBtn from "../../Buttons/KidsBtn";
import kidsImage from "../../../public/img/home-bg.svg";
import { Trans, withTranslation, useTranslation } from "react-i18next";

const Main: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.titles}>
          <h1>
            <Trans>KIDS_HOME_HEADER1</Trans>
            <br />
            <Trans>KIDS_HOME_HEADER2</Trans>
          </h1>
          <h3>
            <Trans>KIDS_HOME_SUB_HEADER1</Trans>
            <br />
            <Trans>KIDS_HOME_SUB_HEADER2</Trans>
          </h3>
        </div>
        <div className={style.actions}>
          <KidsBtn label={t("HOW_WE_WORK")} backgronud={"#52A8F2"} />
          <KidsBtn label={t("BROWSE_COURSE")} backgronud={"#F2A20C"} />
        </div>
      </div>
      <div className={style.right}>
        <img src={kidsImage} width="auto" height="auto" alt="coding for kids" />
      </div>
    </div>
  );
};

export default withTranslation()(Main);
