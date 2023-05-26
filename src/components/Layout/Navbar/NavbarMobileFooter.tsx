import React from "react";
import YoutubeIcon from "../../../public/img/icons/youtube.svg";
import FacebookIcon from "../../../public/img/icons/facebook.svg";
import TwitterIcon from "../../../public/img/icons/twitter.svg";
import LinkedInIcon from "../../../public/img/icons/linkedin.svg";
import InstagramIcon from "../../../public/img/icons/instagram.svg";
import KidsContactUs from "../../Buttons/KidsContactUs";
import KidsLangSelector from "../../Buttons/KidsLangSelector";
import { Trans, withTranslation } from "react-i18next";
import style from "./NavbarMobileFooter.module.scss";

const NavbarMobileFooter = () => {
  return (
    <div className={style.content}>
      <div className={style.sidebar_footer}>
        <div className={style.sidebar_footer_up}>
          <img src={InstagramIcon} width="21" height="21" alt="InstagramIcon" />
          <img src={TwitterIcon} width="21" height="21" alt="TwitterIcon" />
          <img src={FacebookIcon} width="21" height="21" alt="FacebookIcon" />
          <img src={LinkedInIcon} width="21" height="21" alt="LinkedInIcon" />
          <img src={YoutubeIcon} width="21" height="21" alt="YoutubeIcon" />
        </div>
        <div className={style.sidebar_footer_middle}>
          <KidsLangSelector opened />
          <KidsContactUs opened={false} />
        </div>
        <div className={style.sidebar_footer_bottom}>
          <span>
            <Trans>PRIVACY_POLICY</Trans>
          </span>
          <span>
            <Trans>TERMS</Trans>
          </span>
          <span>
            <Trans>CONTACT_US</Trans>
          </span>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(NavbarMobileFooter);
