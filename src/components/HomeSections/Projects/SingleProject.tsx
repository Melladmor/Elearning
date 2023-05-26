import React, { FC } from "react";
import style from "./Projects.module.scss";
import { ReactComponent as Envelope } from "../../../public/img/icons/envelope.svg";
import { IKidsProject } from "src/core/models/project.model";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight ,faAngleLeft ,IconDefinition} from '@fortawesome/fontawesome-free-solid'
import { Trans, useTranslation } from "react-i18next";
type IProps = {
  project: IKidsProject;
};

const SingleProject: FC<IProps> = ({ project }) => {
  const {i18n } = useTranslation()
  return (

    <div
      className={`${style.project_card} ${
        project.id === 1
          ? style.project_card_blue
          : project.id === 2
          ? style.project_card_orange
          : project.id === 3
          ? style.project_card_green
          : null
      }`}
    >
      <div className={style.up} >
        <img src={project?.projectImage} alt={project.projectName} loading="lazy"/> 
      </div>
      <div className={style.down}>
        <div className={style.name}>{i18n.language =='ar'?project.projectName_ar:project.projectName}</div>
        <div className={style.img}>
          <div className={style.img_con}>
            <img src={project.image} width="100" height="100" alt={project.projectName} loading="lazy"/>
            <div className={style.img_border} />
          </div>
          <div>
            <div className={style.project_info}>
              <div className={style.projectName}>{i18n.language ==='ar' ? project.studentName_ar:project.studentName}</div>
              <div className={style.age}>
              <Envelope />
              {project.age} 
              <Trans>AGE</Trans> 

              </div>
            </div>
          </div>
        </div>
        <div className={style.description}>{i18n.language==='ar'?project.description_ar:project.description}</div>
        <div className={`${style.btn_contianer} `}>
            <button className={`${style.btn} ${style.btn1}`}>
              <span>
                  <Trans>VIEWPROJECT</Trans> 
              </span>
              <FontAwesomeIcon icon={faAngleRight as IconProp} className={style.icon_btn}/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
