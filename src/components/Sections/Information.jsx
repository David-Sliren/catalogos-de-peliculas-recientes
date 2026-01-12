import Merlina from "../../assets/img/merlina.webp";

import ImgBackGround from "../ImgBackGround";
import ShadowGradient from "../ShadowGradient";
import AlternateText from "../AlternateText";
import GeneralContent from "../GeneralContent";

import { sectionP2 } from "../../constants/ContentSection";

function Information() {
  return (
    <GeneralContent clases="min-h-dvh md:min-h-[80dvh]">
      <ImgBackGround image={Merlina} moveImg="object-[80%]" />
      <ShadowGradient clases="from-0% to-70%" />
      <AlternateText
        textH1={sectionP2.h1}
        textH2={sectionP2.h2}
        clasesP="top-124 sm:top-145 md:top-50 scale-100 md:scale-85 lg:scale-100 2xl:translate-x-12"
        clasesH1="font-montserrat text-4xl font-bold tracking-widest"
        clasesH2="font-inter md:w-115 lg:w-140 xl:w-140 "
      />
    </GeneralContent>
  );
}

export default Information;
