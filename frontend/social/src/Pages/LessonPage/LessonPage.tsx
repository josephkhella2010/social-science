import { useParams } from "react-router-dom";
import { lessonsArr } from "../../utilities/lessonsArray";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    padding: "70px 20px",
  },
});
export default function LessonPage() {
  const classes = useStyles();
  console.log(lessonsArr);
  const { id } = useParams();
  console.log("id", id);
  const lesson = lessonsArr.find((les) => Number(les.id) === Number(id));
  const { lang } = useSelector((state: RootState) => state.languageSlice);
  console.log(lesson);
  return (
    <div className={classes.container}>
      <div>{lang === "sv" ? lesson?.templateSV : lesson?.templateAR}</div>
    </div>
  );
}
