import style from "./Cards.module.scss";
import ManThink from "../../../public/img/manthinking.png";
import { ReactComponent as Arrow } from "../../../public/img/icons/upArrow.svg";
import { FC } from "react";
import { Trans, withTranslation } from "react-i18next";

const ForBuisness: FC = () => {
  return (
    <div className={style.card_bg} id="section-business">
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.buisness_content}>
            <div className={style.title}>
              <div className={style.body}>
                <div className={style.title}>
                  <h2>
                    <span>
                      <Trans>BUSINESS1</Trans>
                    </span>
                    <Trans>BUSINESS2</Trans>
                  </h2>
                  <p>
                    <Trans>BUSINESS3</Trans>
                  </p>
                </div>
                <div className={style.mob_img_container}>
                  <img src={ManThink} width="200" height="200" alt="forBuisenss" />
                </div>
                <div className={style.desc}>
                  <p>
                    <Trans>BUSINESS_CARD1</Trans>
                  </p>
                  <p>
                    <Trans>BUSINESS_CARD2</Trans>
                  </p>
                </div>
                <div className={style.see_all}>
                  <h5>
                  <Trans>SEE_ALL</Trans>
                  </h5>
                  <div className={style.see_all_icon}>
                  <Arrow />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.img_container}>
              <img src={ManThink} width="175" height="200" alt="forBuisenss" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(ForBuisness);
