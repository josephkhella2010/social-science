import { languageDropDown } from "../../../utilities/otherArr";
import { createUseStyles } from "react-jss";

interface PropsType {
  handleLanguage: (langName: string) => void;
}

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "8px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
    minWidth: "180px",
    width: "180px",
    position: "absolute",
    top: "70px",
    right: "10px",
  },

  languageItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",

    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },

  flag: {
    width: "24px",
    height: "24px",
    objectFit: "cover",
    borderRadius: "50%",
  },

  title: {
    margin: 0,
    fontSize: "14px",
    fontWeight: 500,
  },
});

export default function LanguageDropDown({ handleLanguage }: PropsType) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {languageDropDown.map((item, index) => (
        <div
          className={classes.languageItem}
          key={index}
          onClick={() => handleLanguage(item.name)}
        >
          <img className={classes.flag} src={item.url} alt={item.name} />

          <p className={classes.title}>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
