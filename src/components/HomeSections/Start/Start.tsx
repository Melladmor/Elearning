import { Trans, withTranslation } from "react-i18next";
import KidsGrid from "./KidsGrid";
import style from "./Start.module.scss";

const Start = () => {
  return (
    <div id="section-start" className={style.container}>
      <div className={style.content}>
        <div className={style.main_title}>
          <h3>
            <Trans>START1</Trans>
            <span>
              <Trans>START2</Trans>
            </span>
            <bdi>
              <Trans>START3</Trans>
            </bdi>
          </h3>
          <h1>
            <Trans>START4</Trans>
            <span>
              <bdi>
                <Trans>START5</Trans>
              </bdi>
            </span>
          </h1>
          <h4>
            <Trans>START6</Trans>
          </h4>
        </div>
        <KidsGrid />
      </div>
    </div>
  );
};

export default withTranslation()(Start);
