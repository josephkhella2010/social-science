import TemplateLessonFive from "./lessonsTemplates/TemplateLessonFive";
import TemplateLessonFiveAR from "./lessonsTemplates/TemplateLessonFiveAR";
import TemplateLessonFour from "./lessonsTemplates/TemplateLessonFour";
import TemplateLessonFourAR from "./lessonsTemplates/TemplateLessonFourAR";
import TemplateLessonSix from "./lessonsTemplates/TemplateLessonSix";
import TemplateLessonSixAR from "./lessonsTemplates/TemplateLessonSixAR";
import TemplateLessonThree from "./lessonsTemplates/TemplateLessonThree";
import TemplateLessonThreeAR from "./lessonsTemplates/TemplateLessonThreeAR";
import TemplateLessonTwo from "./lessonsTemplates/TemplateLessonTwo";
import TemplateLessonTwoAR from "./lessonsTemplates/TemplateLessonTwoAR";

export const lessonsArr = [
  {
    id: 2,
    lessonTitle: "Kapitel 1 Och 2: Individ och Identitet",

    templateSV: <TemplateLessonTwo />,
    templateAR: <TemplateLessonTwoAR />,
  },
  {
    id: 3,
    lessonTitle: "Kapitel 3: Medier Och Samhälle",

    templateSV: <TemplateLessonThree />,
    templateAR: <TemplateLessonThreeAR />,
  },
  {
    id: 4,
    lessonTitle: "Kapitel 4: Demokrati Och Diktatur",

    templateSV: <TemplateLessonFour />,
    templateAR: <TemplateLessonFourAR />,
  },
  {
    id: 5,
    lessonTitle: "Kapitel 5: Rättsstat Och Rättsprinciper",

    templateSV: <TemplateLessonFive />,
    templateAR: <TemplateLessonFiveAR />,
  },
  {
    id: 6,
    lessonTitle: "Kapitel 6: Statsskick Och Demokrati",

    templateSV: <TemplateLessonSix />,
    templateAR: <TemplateLessonSixAR />,
  },
];
