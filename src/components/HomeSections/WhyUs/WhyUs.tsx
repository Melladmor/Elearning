import { FC } from "react";
import style from "./WhyUs.module.scss";
import JigsawPuzzle from "./JigsawPuzzle";
import { Trans, withTranslation } from "react-i18next";

const WhyUs: FC = () => {
  return (
    <div id="section-why-us" className={style.container}>
      <div className={style.content}>
        <h1 className={style.main_title}>
          <bdi>
            <Trans>WHY_US?</Trans>
          </bdi>
        </h1>
        <JigsawPuzzle />
      </div>
    </div>
  );
};

export default withTranslation()(WhyUs);
