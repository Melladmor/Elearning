import { FC } from "react";
import style from "./Cards.module.scss";
import ManThink from "../../../public/img/manthinking.png";
import { ReactComponent as Arrow } from "../../../public/img/icons/upArrow.svg";
import { Trans, withTranslation } from "react-i18next";

const ForSchools: FC = () => {
  return (
    <div className={style.card_bg} id="section-school">
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.school_content}>
            <div className={style.img_container}>
              <img src={ManThink} width="200" height="200" alt="forBuisenss" />
            </div>
            <div className={style.body}>
              <div className={style.title}>
                <h2>
                  <span>
                    <Trans>SCHOOL1</Trans>
                  </span>
                  <Trans>SCHOOL2</Trans>
                </h2>
                <p>
                  <Trans>SCHOOL3</Trans>
                </p>
              </div>
              <div className={style.mob_img_container}>
                <img src={ManThink} width="175" height="200" alt="forBuisenss" />
              </div>
              <div className={style.desc}>
                <p>
                  <Trans>BUSINESS_CARD1</Trans>
                </p>
                <p>
                  <Trans>BUSINESS_CARD2</Trans>
                </p>
              </div>
              <div className={style.see_all_two}>
                  <h5>
                  <Trans>CONTACT_US</Trans>
                  </h5>
                  <div className={style.see_all_icon_two}>
                  <Arrow />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(ForSchools);
