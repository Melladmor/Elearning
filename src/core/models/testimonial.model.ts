export interface IKidsTestimonial {
  profession: string;
  image: string;
  name: string;
  relate: string;
  testomonial: string;
  category: string;
  corse_name:string;
  have_btn:boolean;
  path:string,
  profession_ar: string;
  name_ar: string;
  relate_ar: string;
  testomonial_ar: string;
  category_Ar: string;
  corse_name_ar:string;

}
export interface ItestomoinalRespons {
  lng: "en" | "ar" | "de" | "tr";
  testomonial: Array<IKidsTestimonial>;
}