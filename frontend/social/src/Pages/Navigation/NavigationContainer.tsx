/* import { useNavigate } from "react-router-dom";
import { lessonsArr } from "../../utilities/lessonsArray";
import LanguageDropDown from "./childComponent/LanguageDropDown";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setLang } from "../../store/Slice/LanguageSlice";

export default function NavigationContainer() {
  const navigate = useNavigate();
  const { lang } = useSelector((state: RootState) => state.languageSlice);
  const dispatch = useDispatch();

  const handleLanguage = (langName: string) => {
    dispatch(setLang(langName));
  };
  const handleNavigation = (name: string, id?: number) => {
    switch (name) {
      case "home":
        navigate("/");
        break;
      case "lesson":
        if (id !== undefined) {
          navigate(`/lesson/${id}`);
        }
        break;
      default:
        navigate("/");
        break;
    }
  };
  return (
    <div>
      <ul>
        <li onClick={() => handleNavigation("home")}>Home</li>

        {lessonsArr &&
          lessonsArr.map((link, index) => {
            return (
              <li
                onClick={() => handleNavigation(`lesson`, link.id)}
                key={index}
              >
                {link.lessonTitle}
              </li>
            );
          })}
        <div>
          <h1>{lang.toUpperCase()}</h1>
          <LanguageDropDown 
          handleLanguage ={handleLanguage }
          
          
          />
        </div>
      </ul>
    </div>
  );
}
 */

import { useNavigate } from "react-router-dom";
import { lessonsArr } from "../../utilities/lessonsArray";
import LanguageDropDown from "./childComponent/LanguageDropDown";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setLang } from "../../store/Slice/LanguageSlice";
import { createUseStyles } from "react-jss";
import { useEffect, useRef, useState } from "react";

const useStyles = createUseStyles({
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "70px",
    padding: "0 32px",
    backgroundColor: "#ffffffdb",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
    boxSizing: "border-box",
  },

  navList: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: 0,
    padding: 0,
    listStyle: "none",
  },

  navItem: {
    position: "relative",
    padding: "12px 16px",
    fontSize: "15px",
    fontWeight: 500,
    color: "#2F5D3A",
    cursor: "pointer",
    borderRadius: "6px",
    transition: "all 0.2s ease",

    "&:hover": {
      backgroundColor: "#f5f5f5",
      color: "#2F5D3A",
    },
  },

  lessonsItem: {
    position: "relative",
  },

  lessonsTitle: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  arrow: {
    fontSize: "11px",
    transition: "transform 0.2s ease",
  },

  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    minWidth: "220px",
    padding: "8px",
    marginTop: "4px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.12)",
    zIndex: 1000,
    opacity: 0,
    visibility: "hidden",
    transform: "translateY(-8px)",
    transition: "all 0.2s ease",
    textTransform: "capitalize",

    "$lessonsItem:hover &": {
      opacity: 1,
      visibility: "visible",
      transform: "translateY(0)",
    },
    height: "300px",
    overflow: "hidden",
    overflowY: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },

  lessonItem: {
    display: "block",
    width: "100%",
    padding: "10px 12px",
    borderRadius: "6px",
    fontSize: "14px",
    color: "#2F5D3A",
    cursor: "pointer",
    boxSizing: "border-box",
    transition: "background-color 0.2s ease",

    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },

  languageContainer: {
    position: "relative",
    width: "100px",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 700px)": {
      width: "fit-content",
    },
  },

  languageButton: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
  },

  languageCode: {
    margin: 0,
    fontSize: "14px",
    fontWeight: 600,
    border: "1px solid #2F5D3A",

    padding: "8px 12px",
    borderRadius: "6px",
    color: "#2F5D3A",
  },
});

export default function NavigationContainer() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showDropDown, setShowDropDown] = useState(false);

  const { lang } = useSelector((state: RootState) => state.languageSlice);

  // IMPORTANT:
  // This ref contains BOTH the language button
  // and the language dropdown.
  const languageRef = useRef<HTMLDivElement>(null);

  // Select language
  const handleLanguage = (langName: string) => {
    dispatch(setLang(langName));
    setShowDropDown(false);
  };

  // Navigation
  const handleNavigation = (name: string, id?: number) => {
    // Close language dropdown when navigating
    setShowDropDown(false);

    switch (name) {
      case "home":
        navigate("/");
        break;

      case "lesson":
        if (id !== undefined) {
          navigate(`/lesson/${id}`);
        }
        break;

      default:
        navigate("/");
        break;
    }
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (languageRef.current && !languageRef.current.contains(target)) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={classes.nav}>
      {/* LEFT SIDE */}
      <ul className={classes.navList}>
        {/* HOME */}
        <li
          className={classes.navItem}
          onClick={() => handleNavigation("home")}
        >
          Home
        </li>

        {/* LESSONS  cool*/}
        <li className={`${classes.navItem} ${classes.lessonsItem}`}>
          <div className={classes.lessonsTitle}>
            Lessons
            <span className={classes.arrow}>▼</span>
          </div>

          {/* LESSON DROPDOWN */}
          <div className={classes.dropdown}>
            {lessonsArr.map((lesson) => (
              <div
                key={lesson.id}
                className={classes.lessonItem}
                onClick={() => handleNavigation("lesson", lesson.id)}
              >
                {lesson.lessonTitle
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() +
                      word.slice(1).toLowerCase(),
                  )
                  .join(" ")}{" "}
              </div>
            ))}
          </div>
        </li>
      </ul>

      {/* RIGHT SIDE - LANGUAGE */}
      <div ref={languageRef} className={classes.languageContainer}>
        {/* LANGUAGE BUTTON */}
        <div
          className={classes.languageButton}
          onClick={() => {
            setShowDropDown(true);
          }}
        >
          <p className={classes.languageCode}>{lang.toUpperCase()}</p>
        </div>

        {/* LANGUAGE DROPDOWN */}
        {showDropDown && <LanguageDropDown handleLanguage={handleLanguage} />}
      </div>
    </nav>
  );
}
