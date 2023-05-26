import style from "./ContactUs.module.scss";
import ManThink from "../../../public/img/manthinking.png";
import { Trans, withTranslation } from "react-i18next";
import KidsContactUs from "../../Buttons/KidsContactUs";
import Lottie from "lottie-react";
import bgAnimation from "../../../public/animation/BG-elements.json";

const ContactUs = () => {
  return (
    <>
        <div className={style.contact_us_title}>
            <Trans>CONTACTUS</Trans>
        </div>
        <div className={style.container} id="section-contact-us">
          <div className={style.animation_r}>
            <Lottie animationData={bgAnimation} loop autoplay />
          </div>
          <div className={style.content}>
            <img src={ManThink} width="255" height="255" alt="forBuisenss" className={style.img_man} />
            <div className={style.text}>
              <p>
                <Trans>CONTACT1</Trans>
                <br />
                <span>
                  <Trans>CONTACT2</Trans>
                </span>
                <Trans>CONTACT3</Trans>
                <br />
                <Trans>CONTACT4</Trans>
              </p>
              <div className={style.btn_cont}>
                <KidsContactUs opened={false} />
              </div>
            </div>
          </div>
          <div className={style.animation_l}>
            <Lottie animationData={bgAnimation} loop autoplay />
          </div>
        </div>
    </>
  );
};

export default withTranslation()(ContactUs);
