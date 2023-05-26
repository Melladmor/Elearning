import { FC } from "react";
import style from "./Projects.module.scss";
import { Trans, withTranslation } from "react-i18next";
import { ReactComponent as Arrow } from "../../../public/img/icons/upArrow.svg";
import SingleProject from "./SingleProject";
import ProjectImage from '../../../public/img/backgrounds/project-bg.png'
import Person from "../../../public/img/person.png";
import { IKidsProject } from "src/core/models/project.model";
import SmallScreenSlide from "src/components/Shared/Slide/SmallScreenSlide";
import { SwiperSlide } from "swiper/react";
import SliderComponent from "src/components/Shared/Slide/SliderComponent";
import {motion} from 'framer-motion'
const projects: IKidsProject[] = [
  {
    id: 1,
    studentName: `Student's Name`,
    projectImage:ProjectImage,
    image: Person,
    projectName: `Projects' name`,
    age: `14`,
    description: `This Project has this short discerption of how it was created and what was used in it ...`,
    studentName_ar:"اسم الطالب",
    projectName_ar:"اسم المشروع",
    description_ar:"هذا المشروع يحتوي وصف سريع حول كيفية انشائه وما تم استخدامه به"

  },
  {
    id: 2,
    studentName: `Student's Name`,
    projectImage:ProjectImage,

    image: Person,
    projectName: `Projects' name`,
    age: `14`,
    description: `This Project has this short discerption of how it was created and what was used in it ...`,
    studentName_ar:"اسم الطالب",
    projectName_ar:"اسم المشروع",
    description_ar:"هذا المشروع يحتوي وصف سريع حول كيفية انشائه وما تم استخدامه به"
  },
  {
    id: 3,
    studentName: `Student's Name`,
    projectImage:ProjectImage,
    image: Person,
    projectName: `Projects' name`,
    age: `14`,
    description: `This Project has this short discerption of how it was created and what was used in it ...`,
    studentName_ar:"اسم الطالب",
    projectName_ar:"اسم المشروع",
    description_ar:"هذا المشروع يحتوي وصف سريع حول كيفية انشائه وما تم استخدامه به"
  },
];

const Projects: FC = () => {
  return (
    <div className={style.container} id="section-projects">
      <div className={style.content}>
        <div className={style.title}>
          <h2>
            <Trans>PROJECTS1</Trans>
          </h2>
          <h4>
            <span>
              "<Trans>PROJECTS2</Trans>"
            </span>
            <Trans>PROJECTS3</Trans>
          </h4>
        </div>
        <div className={style.card_container}>
          {projects.map((project) => (
            <SingleProject project={project} />
          ))}
        </div>



        <SliderComponent>
            {projects.map((project) => (
              <SingleProject project={project} />
          ))}
        </SliderComponent>


        <div className={style.see_all}>
          <h5>
              <Trans>SEE_ALL</Trans>
          </h5>
          <div className={style.see_all_icon}>
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Projects);
