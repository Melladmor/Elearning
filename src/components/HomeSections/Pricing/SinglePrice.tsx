import { FC } from "react";
import style from "./Pricing.module.scss";
import { ReactComponent as Envelope } from "../../../public/img/icons/envelope.svg";
import { Trans, withTranslation } from "react-i18next";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight} from '@fortawesome/fontawesome-free-solid'
type IProps = {
  price: { id: number; title: string; desc: string };
};

const SinglePrice: FC<IProps> = ({ price }) => {
  return (
    <div
      className={`${style.price_card} ${
        price.id === 1
          ? style.price_card_orange
          : price.id === 2
          ? style.price_card_green
          : price.id === 3
          ? style.price_card_dark_yellow
          : null
      }`}
    >
      <div className={style.title}>
        <Envelope />
        <span>
          <Trans>{price.title}</Trans>
        </span>
      </div>
      <div className={style.body}>
        <p>
          <Trans>{price.desc}</Trans>
        </p>
        <button className={`${style.price_btn} ${style.btn1}`}>
              <span>
                  <Trans>LEARN_MORE</Trans>
              </span>
              <FontAwesomeIcon icon={faAngleRight as IconProp} className={style.icon_btn}/>
        </button>
      </div>
    </div>
  );
};

export default withTranslation()(SinglePrice);
