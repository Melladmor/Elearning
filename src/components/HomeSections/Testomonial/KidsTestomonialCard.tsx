import React, { FC } from "react";
import style from "./KidsTestomonial.module.scss";
import testimonialIcon from "../../../public/img/testimonialIcon.svg";
import { IKidsTestimonial } from "src/core/models/testimonial.model";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight ,faAngleLeft ,IconDefinition} from '@fortawesome/fontawesome-free-solid'
import { Trans, useTranslation } from "react-i18next";
type IProps = {
  testimonial: IKidsTestimonial;
};


const KidsTestomonialCard: FC<IProps> = ({ testimonial }) => {
  const {i18n} = useTranslation()
  return (
    <div className={style.testi_card}>
      <div className={style.img_container}>
        <div className={style.img}>
          <img src={testimonialIcon} width="25" height="25" alt={testimonial.name} className={style.icon} />
          <div className={style.img_border} />
          <img src={testimonial.image} width="100" height="100" alt={testimonial.name} className={style.man_img} />
          <div className={style.profession}>{i18n.language ==='ar' ?testimonial.profession_ar :testimonial.profession}</div>
        </div>
      </div>
      <div className={style.body}>
        <div className={style.testi}>{i18n?.language ==='ar' ? testimonial.testomonial_ar: testimonial.testomonial}</div>
        <div className={style.info}>
          <div>
          <span className={style.name}>{i18n?.language ==='ar'?testimonial.name_ar:testimonial.name}</span> | <span className={style.name}>{i18n?.language ==='ar'?testimonial.corse_name_ar:testimonial.corse_name}</span>
          </div>
          <span className={style.relate}>{i18n?.language ==="ar"? testimonial.relate_ar:testimonial.relate}</span>
          {testimonial?.have_btn ? <button className={`${style.view_course_btn} ${style.view_course_btn1}`}><span><Trans>VIEW_STUDENT_COURSE</Trans></span> <FontAwesomeIcon icon={faAngleRight as IconProp} className={style.icon_btn}/></button>:''}
        </div>
      </div>
    </div>
  );
};

export default KidsTestomonialCard;
