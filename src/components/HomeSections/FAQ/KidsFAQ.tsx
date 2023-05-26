import { useState, FC } from "react";
import style from "./KidsFAQ.module.scss";
import { Trans, withTranslation } from "react-i18next";
import { FaqModel } from "src/core/models/generic.model";

const Kidsfaqs: FaqModel[] = [
  {
    id: 1,
    question: "FAQ_Q1",
    answer: "FAQ_A1",
    isOpend: true,
  },
  {
    id: 2,
    question: "FAQ_Q1",
    answer: "FAQ_A1",
    isOpend: false,
  },
  {
    id: 3,
    question: "FAQ_Q1",
    answer: "FAQ_A1",
    isOpend: false,
  },
  {
    id: 4,
    question: "FAQ_Q1",
    answer: "FAQ_A1",
    isOpend: false,
  },
  {
    id: 5,
    question: "FAQ_Q1",
    answer: "FAQ_A1",
    isOpend: false,
  },
  {
    id: 6,
    question: "FAQ_Q1",
    answer: "FAQ_A1",
    isOpend: false,
  },
];

const KidsFAQ: FC = () => {
  const [faqs, setFaq] = useState<FaqModel[]>(Kidsfaqs);
  const toggleFaq = (faq: FaqModel) => {
    const newFaqs = [...faqs];
    newFaqs.map((item) => {
      if (item.id === faq.id) {
        faq.isOpend = !faq.isOpend;
        return faq;
      }
      return item;
    });
    setFaq(newFaqs);
  };
  return (
    <div className={style.bg} id="section-faq">
      <div className={style.container}>
        <div className={style.content}>
 
          <div className={style.title}>
            <h2>
              <Trans>FAQ1</Trans>
            </h2>
            <h4>
              <Trans>FAQ2</Trans>
            </h4>
          </div>
          <div className={style.faq_panel}>
            {faqs.map((faq) => {
              return (
                <div
                  className={`${style.faq} ${faq.isOpend ? style.faq_opend : style.faq_closed}`}
                  key={faq.id}
                  onClick={() => toggleFaq(faq)}
                >
                  <div className={style.faq_header}>
                    <div className={style.arrow}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9.176" viewBox="0 0 21.049 9.176">
                        <path
                          id="Path_34665"
                          data-name="Path 34665"
                          d="M415.216,619.917l4.013-3.248q2.74-2.219,5.48-4.437a1.16,1.16,0,0,1,.292-.191.545.545,0,0,1,.662.247.556.556,0,0,1-.187.735c-.778.635-1.561,1.264-2.341,1.9q-3.674,2.975-7.347,5.951c-.507.411-.644.414-1.134.018L405.04,613.1c-.05-.04-.1-.077-.15-.121a.547.547,0,0,1-.08-.774.537.537,0,0,1,.772-.069c.745.59,1.482,1.192,2.221,1.79l7.2,5.829C415.068,619.809,415.138,619.858,415.216,619.917Z"
                          transform="translate(-404.685 -612.005)"
                          fill="#ffffff"
                        />
                      </svg>
                    </div>
                    <h2>
                      <Trans>{faq.question}</Trans>
                    </h2>
                  </div>
                  <div className={style.faq_content}>
                    <p>
                      <Trans>{faq.answer}</Trans>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(KidsFAQ);
