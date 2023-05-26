import { FC } from "react";
import { Trans, withTranslation } from "react-i18next";
import SinglePrice from "./SinglePrice";
import style from "./Pricing.module.scss";

const pricing: Array<{ id: number; title: string; desc: string }> = [
  {
    id: 1,
    title: `PRICING4`,
    desc: `PRICING7`,
  },
  {
    id: 2,
    title: `PRICING5`,
    desc: `PRICING8`,
  },
  {
    id: 3,
    title: `PRICING6`,
    desc: `PRICING9`,
  },
];

const Pricing: FC = () => {
  return (
    <div className={style.container} id="section-prices">
      <div className={style.content}>
        <div className={style.main_title}>
          <h2>
            <Trans>PRICING</Trans>
          </h2>
          <h4>
            <Trans>PRICING2</Trans>
            <span>
              <Trans>PRICING3</Trans>
            </span>
          </h4>
        </div>
        <div className={style.card_container}>
          {pricing.map((price) => (
            <SinglePrice price={price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Pricing);
