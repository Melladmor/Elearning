import { FC } from "react";
import style from "./GiveGift.module.scss";
import { ReactComponent as Envelope } from "../../../public/img/icons/envelope.svg";
import Box1 from "../../../public/img/box/box1.png";
import Box2 from "../../../public/img/box/box2.png";
import Box3 from "../../../public/img/box/box3.png";
import { Trans, withTranslation } from "react-i18next";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight ,faAngleLeft ,IconDefinition} from '@fortawesome/fontawesome-free-solid'
const GiveGift: FC = () => {
  return (
    <div className={style.container} id="section-gift">
      <div className={style.content}>
        <div className={style.left}>
          <div className={style.left_up}>
            <img src={Box2} width="100" height="100" alt="box" />
          </div>
          <div className={style.left_down}>
            <img src={Box3} width="100" height="100" alt="box" />
            <img src={Box1} width="100" height="100" alt="box" />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.title}>
            <Envelope />
            <span>
              <Trans>GIFT</Trans>
            </span>
          </div>
          <p>
            <Trans>GIFT2</Trans>
          </p>
          <ul>
            <li>
              <Trans>GIFT3</Trans>
            </li>
            <li>
              <Trans>GIFT4</Trans>
            </li>
            <li>
              <Trans>GIFT5</Trans>
            </li>
            <li>
              <Trans>GIFT6</Trans>
            </li>
            <li>
              <Trans>GIFT7</Trans>
            </li>
          </ul>
          <button className={`${style.give_gift_btn} ${style.btn1}`}>
              <span>
              <Trans>BROWSE</Trans>
              </span>
              <FontAwesomeIcon icon={faAngleRight as IconProp} className={style.icon_btn}/>
          </button>

        </div>
      </div>
    </div>
  );
};

export default withTranslation()(GiveGift);
