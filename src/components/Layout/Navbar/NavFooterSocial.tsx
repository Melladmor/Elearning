import { FC } from "react";
import YoutubeIcon from "../../../public/img/icons/youtube.svg";
import FacebookIcon from "../../../public/img/icons/facebook.svg";
import TwitterIcon from "../../../public/img/icons/twitter.svg";
import LinkedInIcon from "../../../public/img/icons/linkedin.svg";
import InstagramIcon from "../../../public/img/icons/instagram.svg";
import style from "./NavFooterSocial.module.scss";
import { Trans, withTranslation } from "react-i18next";

type IProps = {};

const NavFooterSocial: FC<IProps> = () => {
  return (
    <div className={style.container}>
      <div className={style.social_icons}>
        <img src={InstagramIcon} width="21" height="21" alt="InstagramIcon" />
        <img src={TwitterIcon} width="21" height="21" alt="TwitterIcon" />
        <img src={FacebookIcon} width="21" height="21" alt="FacebookIcon" />
        <img src={LinkedInIcon} width="21" height="21" alt="LinkedInIcon" />
        <img src={YoutubeIcon} width="21" height="21" alt="YoutubeIcon" />
      </div>
      <div className={style.links}>
        <span>
          <Trans>PRIVACY_POLICY</Trans>
        </span>
        <span>
          <Trans>TERMS</Trans>
        </span>
      </div>
    </div>
  );
};

export default withTranslation()(NavFooterSocial);
