import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  page: {
    minHeight: "100vh",
    background: "#F1F7F2",
    color: "#1F3325",
  },

  hero: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "80px 30px",
    display: "flex",
    alignItems: "center",
    gap: 80,

    "@media (max-width: 768px)": {
      flexDirection: "column",
      padding: "50px 20px",
      gap: 40,
    },
  },

  heroContent: {
    flex: 1,
  },

  label: {
    display: "inline-block",
    marginBottom: 15,
    padding: "8px 16px",
    borderRadius: 20,
    background: "#DDEDE0",
    color: "#356B43",
    fontSize: 13,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 2,
  },

  title: {
    fontSize: 58,
    lineHeight: 1.1,
    margin: "0 0 20px",
    fontFamily: "Georgia, serif",
    color: "#234D2E",

    "@media (max-width: 768px)": {
      fontSize: 42,
    },
  },

  subtitle: {
    fontSize: 20,
    lineHeight: 1.7,
    color: "#5B7461",
    marginBottom: 30,
  },

  button: {
    border: "none",
    padding: "15px 30px",
    borderRadius: 30,
    background: "#477A52",
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s",

    "&:hover": {
      background: "#315F3C",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 20px rgba(47, 91, 58, 0.2)",
    },
  },

  bookCoverContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  bookCover: {
    width: 330,
    height: 470,
    objectFit: "cover",
    borderRadius: 8,
    boxShadow: "15px 20px 40px rgba(47, 91, 58, 0.2)",

    "@media (max-width: 768px)": {
      width: 260,
      height: 370,
    },
  },

  section: {
    background: "#FFFFFF",
    padding: "70px 30px",
  },

  sectionInner: {
    maxWidth: 1200,
    margin: "0 auto",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: 36,
    fontFamily: "Georgia, serif",
    marginBottom: 15,
    color: "#234D2E",
  },

  sectionDescription: {
    maxWidth: 700,
    margin: "0 auto 45px",
    textAlign: "center",
    color: "#647A69",
    lineHeight: 1.7,
  },

  chapters: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 25,

    "@media (max-width: 900px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },

  chapter: {
    padding: 25,
    borderRadius: 15,
    background: "#F1F7F2",
    border: "1px solid #D8E8DA",
    transition: "all 0.3s",

    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 25px rgba(47, 91, 58, 0.1)",
      borderColor: "#B8D4BC",
    },
  },

  chapterNumber: {
    fontSize: 13,
    fontWeight: 700,
    color: "#568061",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  chapterTitle: {
    fontSize: 21,
    fontFamily: "Georgia, serif",
    margin: "10px 0",
    color: "#2F5D3A",
  },

  chapterText: {
    color: "#687D6D",
    lineHeight: 1.6,
    margin: 0,
  },

  about: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "80px 30px",
    textAlign: "center",
  },

  quote: {
    fontSize: 28,
    lineHeight: 1.5,
    fontFamily: "Georgia, serif",
    fontStyle: "italic",
    color: "#315F3C",
    margin: 0,
  },

  footer: {
    padding: "30px",
    textAlign: "center",
    background: "#234D2E",
    color: "#DDEDE0",
  },
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      {/* Hero */}
      <section className={classes.hero}>
        <div className={classes.heroContent}>
          <span className={classes.label}>Digital bok</span>

          <h1 className={classes.title}>SamhallKungskap Niva 1b</h1>

          <p className={classes.subtitle}>
            En introduktion till människan, Politik, relationer och samhället
            omkring oss.
          </p>

          <button className={classes.button}>Läs boken</button>
        </div>

        <div className={classes.bookCoverContainer}>
          <img
            className={classes.bookCover}
            src="/foto/cover.webp"
            alt="Bokens omslag"
          />
        </div>
      </section>

      {/* About book */}
      <section className={classes.section}>
        <div className={classes.sectionInner}>
          <h2 className={classes.sectionTitle}>Om boken</h2>

          <p className={classes.sectionDescription}>
            Boken handlar om samhällskunskap och hjälper dig att förstå hur
            samhället fungerar, hur människor påverkar varandra och hur
            demokrati, politik, ekonomi och olika samhällsfrågor formar vår
            vardag.
          </p>

          {/* Chapters */}
          <div className={classes.chapters}>
            <article className={classes.chapter}>
              <span className={classes.chapterNumber}>Kapitel 1</span>

              <h3 className={classes.chapterTitle}>Individ och identitet</h3>

              <p className={classes.chapterText}>
                Hur fungerar samhället? Vad är demokrati och hur påverkar
                politik, lagar och ekonomi människors vardag?
              </p>
            </article>

            <article className={classes.chapter}>
              <span className={classes.chapterNumber}>Kapitel 2</span>

              <h3 className={classes.chapterTitle}>
                Självbild och personlighet
              </h3>

              <p className={classes.chapterText}>
                Vi utforskar självbild, personlighet och hur vi ser på oss
                själva.
              </p>
            </article>

            <article className={classes.chapter}>
              <span className={classes.chapterNumber}>Kapitel 3</span>

              <h3 className={classes.chapterTitle}>Relationer och samhälle</h3>

              <p className={classes.chapterText}>
                Hur fungerar samhället, och hur kan vi som medborgare påverka
                det?{" "}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className={classes.about}>
        <p className={classes.quote}>
          "Genom att förstå samhället förstår vi också vår roll i det och hur vi
          tillsammans kan påverka vår framtid."{" "}
        </p>
      </section>

      {/* Footer */}
      <footer className={classes.footer}>© 2026 Samhällskunskap</footer>
    </div>
  );
}
