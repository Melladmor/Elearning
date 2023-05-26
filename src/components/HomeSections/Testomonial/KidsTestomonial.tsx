import { FC, useState } from "react";
import style from "./KidsTestomonial.module.scss";
import Person from "../../../public/img/person.png";
import KidsTestomonialCard from "./KidsTestomonialCard";
import Close from "../../../public/img/icons/close.svg";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swipper.testimonial.scss";
import { IKidsTestimonial } from "src/core/models/testimonial.model";
import TestomonialSlider from "./TestomonialSlider";
import { useTranslation } from "react-i18next";



const testimonial: IKidsTestimonial[] = [
  {
    name: `Name Sir name`,
    category: `Teachers`,
    profession: `Teacher`,
    image: Person,
    relate: `Course/Student related`,
    corse_name:`Course Name`,
    have_btn:false,
    path:'',
    testomonial: `Teachers Testomonial Tekkie Uni is an amazing opportunity to get young people into different forms if technology and software this will give them a headstart in our quickly changing digital world.Tekkie Uni is an amazing opportunity to get young people into different forms if technology and software this will give them a headstart in our quickly changing digital world.`,
    
    profession_ar:"الملعمون",
    name_ar:"اسم المعلم",
    relate_ar:"الدورة / طالب",
    testomonial_ar: "المعلمون Testomonial Tekkie Uni هي فرصة رائعة لإدخال الشباب في أشكال مختلفة إذا كانت التكنولوجيا والبرمجيات ستمنحهم السبق في عالمنا الرقمي سريع التغير. Tekkie Uni هي فرصة رائعة لإدخال الشباب في أشكال مختلفة إذا كانت التكنولوجيا وهذا البرنامج سيمنحهم السبق في عالمنا الرقمي سريع التغير.",
    category_Ar: "المعلمون",
    corse_name_ar:"اسم الدورة",
  },
  {
    name: `Name Sir name`,
    category: `Teachers`,
    profession: `Teacher`,
    image: Person,
    relate: `Course/Student related`,
    corse_name:`Course Name`,
    have_btn:false,
    path:'',
    testomonial: `Teachers Testomonial Tekkie Uni is an amazing opportunity to get young people into different forms if technology and software this will give them a headstart in our quickly changing digital world.Tekkie Uni is an amazing opportunity to get young people into different forms if technology and software this will give them a headstart in our quickly changing digital world.`,
    
    profession_ar:"الملعمون",
    name_ar:"اسم المعلم",
    relate_ar:"الدورة / طالب",
    testomonial_ar: "المعلمون Testomonial Tekkie Uni هي فرصة رائعة لإدخال الشباب في أشكال مختلفة إذا كانت التكنولوجيا والبرمجيات ستمنحهم السبق في عالمنا الرقمي سريع التغير. Tekkie Uni هي فرصة رائعة لإدخال الشباب في أشكال مختلفة إذا كانت التكنولوجيا وهذا البرنامج سيمنحهم السبق في عالمنا الرقمي سريع التغير.",
    category_Ar: "المعلمون",
    corse_name_ar:"اسم الدورة",
  },
  {
    name: `Name Sir name`,
    category: `Parents`,
    profession: `Parent`,
    image: Person,
    relate: `Course/Student related`,
    corse_name:`Course Name`,
    have_btn:true,
    path:'',
    testomonial: `Parents Testomonial Tekkie Uni is an amazing opportunity to get young people into different forms if technology and software this will give them a headstart in our quickly changing digital world.Tekkie Uni is an amazing opportunity to get young people into different forms if technology and software this will give them a headstart in our quickly changing digital world.`,
    profession_ar:"الاباء",
    name_ar:"اسم الأب",
    relate_ar:"الدورة / طالب",
    testomonial_ar: "الطلاب Testomonial Tekkie Uni هي فرصة رائعة لإدخال الشباب في أشكال مختلفة إذا كانت التكنولوجيا والبرمجيات ستمنحهم السبق في عالمنا الرقمي سريع التغير. Tekkie Uni هي فرصة رائعة لإدخال الشباب في أشكال مختلفة إذا كانت التكنولوجيا وهذا البرنامج سيمنحهم السبق في عالمنا الرقمي سريع التغير.",
    category_Ar: "الأباء",
    corse_name_ar:"اسم الدورة",
  },
  {
    name: `Name Sir name`,
    category: `Parents`,
    profession: `Parent`,
    image: Person,
    relate: `Course/Student related`,
    corse_name:`Course Name`,
    have_btn:true,
    path:'',
    testomonial: `Parents Testomonial Tekkie Uni is an amazing opportunity to get young people into different forms if technology and software this will give them a headstart in our quickly changing digital world.Tekkie Uni is an amazing opportunity to get young people into different forms if technology and software this will give them a headstart in our quickly changing digital world.`,
    profession_ar:"الاباء",
    name_ar:"اسم الأب",
    relate_ar:"الدورة / طالب",
    testomonial_ar: "الطلاب Testomonial Tekkie Uni هي فرصة رائعة لإدخال الشباب في أشكال مختلفة إذا كانت التكنولوجيا والبرمجيات ستمنحهم السبق في عالمنا الرقمي سريع التغير. Tekkie Uni هي فرصة رائعة لإدخال الشباب في أشكال مختلفة إذا كانت التكنولوجيا وهذا البرنامج سيمنحهم السبق في عالمنا الرقمي سريع التغير.",
    category_Ar: "الأباء",
    corse_name_ar:"اسم الدورة",
  },
  {
    name: `Name Sir name`,
    category: `Students`,
    profession: `Student`,
    image: Person,
    relate: `Course/Student related`,
    corse_name:`Course Name`,
    have_btn:true,
    path:'',
    testomonial: `Students Testomonial Tekkie Uni is an amazing opportunity to get young people into different forms if technology and software this will give them a headstart in our quickly changing digital world.Tekkie Uni is an amazing opportunity to get young people into different forms if technology and software this will give them a headstart in our quickly changing digital world.`,
    profession_ar:"الطلاب",
    name_ar:"اسم الطالب",
    relate_ar:"الدورة / طالب",
    testomonial_ar: "الطلاب Testomonial Tekkie Uni هي فرصة رائعة لإدخال الشباب في أشكال مختلفة إذا كانت التكنولوجيا والبرمجيات ستمنحهم السبق في عالمنا الرقمي سريع التغير. Tekkie Uni هي فرصة رائعة لإدخال الشباب في أشكال مختلفة إذا كانت التكنولوجيا وهذا البرنامج سيمنحهم السبق في عالمنا الرقمي سريع التغير.",
    category_Ar: "الطالب",
    corse_name_ar:"اسم الدورة",
  },
  {
    name: `Name Sir name`,
    category: `Students`,
    profession: `Student`,
    image: Person,
    relate: `Course/Student related`,
    corse_name:`Course Name`,
    have_btn:true,
    path:'',
    testomonial: `Students Testomonial Tekkie Uni is an amazing opportunity to get young people into different forms if technology and software this will give them a headstart in our quickly changing digital world.Tekkie Uni is an amazing opportunity to get young people into different forms if technology and software this will give them a headstart in our quickly changing digital world.`,
    profession_ar:"الطلاب",
    name_ar:"اسم الطالب",
    relate_ar:"الدورة / طالب",
    testomonial_ar: "الطلاب Testomonial Tekkie Uni هي فرصة رائعة لإدخال الشباب في أشكال مختلفة إذا كانت التكنولوجيا والبرمجيات ستمنحهم السبق في عالمنا الرقمي سريع التغير. Tekkie Uni هي فرصة رائعة لإدخال الشباب في أشكال مختلفة إذا كانت التكنولوجيا وهذا البرنامج سيمنحهم السبق في عالمنا الرقمي سريع التغير.",
    category_Ar: "الطالب",
    corse_name_ar:"اسم الدورة",
  },
];

const KidsTestomonial: FC = () => {

  const {i18n} = useTranslation()

  const [testim, setTestim] = useState(testimonial);
  const [activeProfession, setActiveProfession] = useState<string | null>(null);
  const profesions = testimonial.map((testimonial) => testimonial.category);
  const profesionsTitle = testimonial.map((testimonial) => i18n?.language ==='ar'?testimonial?.category_Ar :testimonial?.category);

  const uniqueArr = profesionsTitle.filter((obj, index) => {
    const i = profesionsTitle.findIndex((o) => o === obj);
    return i === index;
  });
  const filterProfession = (profession: string | null, e: any) => {
    e?.stopPropagation();
    setActiveProfession(profession);
    if (profession) setTestim(testimonial.filter((testimonial) => i18n?.language ==='ar'?testimonial.category_Ar:testimonial.category === profession));
    else setTestim(testimonial);
  };
  return (
    <div className={style.container}>

    <TestomonialSlider className="testi_swiper" testim={testim}>
        {testim.map((testi) => (
          <div className={style.content}>
            <div className={style.filter}>
            {uniqueArr.map((profession: string) => (
                  <div className={style.button_container}>
                  <button
                  className={`${style.filter_btn} ${activeProfession === profession ? style.active_profession : null}`}
                  onClick={(e) => filterProfession(profession, e)}
                  >
                  <button onClick={(e) => filterProfession(null, e)} className={style.unFilter}>
                  <img src={Close} width="15" height="15" alt="close" />
                  </button>
                  {profession}
                  </button>
                  </div>
            ))}
            </div>
            <div className="testi-slide">
                  <KidsTestomonialCard testimonial={testi} />
            </div>
          </div>

        ))}
    </TestomonialSlider>








   
    </div>
  );
};

export default KidsTestomonial;



 