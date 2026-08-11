import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "32px",
    lineHeight: 1.6,
    color: "#222",
    backgroundColor: "#fff",
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  },

  title: {
    fontSize: "32px",
    marginBottom: "8px",
    color: "#1a1a1a",
    borderBottom: "3px solid #2c6e9c",
    paddingBottom: "12px",
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginTop: "4px",
    marginBottom: "32px",
  },

  section: {
    marginBottom: "40px",
  },

  heading: {
    fontSize: "24px",
    marginBottom: "16px",
    color: "#1a3a5c",
    borderLeft: "4px solid #2c6e9c",
    paddingLeft: "12px",
  },

  subHeading: {
    fontSize: "20px",
    marginTop: "24px",
    marginBottom: "12px",
    color: "#1a3a5c",
  },

  paragraph: {
    marginBottom: "12px",
  },

  list: {
    paddingLeft: "24px",
    marginBottom: "16px",
  },

  listItem: {
    marginBottom: "8px",
  },

  tableWrapper: {
    overflowX: "auto",
    margin: "20px 0",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "left",
    backgroundColor: "#f0f4f8",
    fontWeight: "600",
    color: "#1a3a5c",
  },

  td: {
    border: "1px solid #ddd",
    padding: "12px",
    verticalAlign: "top",
  },

  question: {
    marginTop: "28px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    borderLeft: "4px solid #2c6e9c",
  },

  questionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1a3a5c",
    marginBottom: "10px",
  },

  answer: {
    marginTop: "8px",
  },

  keyword: {
    fontWeight: "bold",
    color: "#1a3a5c",
  },

  highlight: {
    backgroundColor: "#f0f7ff",
    padding: "2px 6px",
    borderRadius: "4px",
  },

  marginTop: {
    marginTop: "16px",
  },
});

export default function TemplateLessonTwelve() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>KAPITEL 12: ARBETSLIV</h1>
      <p className={classes.subtitle}>
        Fullständig sammanfattning med frågor, analys, diskussion och nyckelord
      </p>

      {/* ===== 1. ARBETETS BETYDELSE ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. ARBETETS BETYDELSE</h2>
        <p className={classes.paragraph}>
          Detta avsnitt förklarar vad arbete är och vilken funktion det fyller för
          individen och samhället.
        </p>

        <h3 className={classes.subHeading}>Grundläggande definition</h3>
        <ul className={classes.list}>
          <li>
            Arbete är något vi gör för att skapa oss en <strong>försörjning</strong>
            (pengar till mat, boende, kläder etc.).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Mer än bara försörjning</h3>
        <ul className={classes.list}>
          <li>
            <strong>Social gemenskap:</strong> Kollegor, arbetskamrater, umgänge.
          </li>
          <li>
            <strong>Struktur i vardagen:</strong> Rutiner, regelbundna tider, mening.
          </li>
          <li>
            <strong>Känsla av mening:</strong> Att bidra till det gemensamma, att
            göra nytta.
          </li>
          <li>
            <strong>Identitet:</strong> I Sverige är "vad jobbar du med?" ofta en
            av de första frågorna vi ställer när vi träffar nya människor.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Samhällsbetydelse</h3>
        <ul className={classes.list}>
          <li>
            En välfungerande arbetsmarknad är <strong>avgörande</strong> för
            samhällets ekonomi och stabilitet.
          </li>
          <li>
            Arbetslöshet och dåliga arbetsvillkor leder till missnöje och
            motsättningar.
          </li>
        </ul>
      </section>

      {/* ===== 2. DEN SVENSKA MODELLEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. DEN SVENSKA MODELLEN</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver det unika svenska systemet på arbetsmarknaden.
        </p>

        <h3 className={classes.subHeading}>Den svenska modellen</h3>
        <ul className={classes.list}>
          <li>
            Ett system där arbetsmarknadens <strong>parter</strong> (arbetsgivare
            och fackförbund) själva reglerar villkoren på arbetsmarknaden genom
            <strong>kollektivavtal</strong>, med <strong>minimal statlig
            inblandning</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Arbetsmarknadens parter</h3>
        <ul className={classes.list}>
          <li>
            <strong>Arbetstagarsidan (fackförbund):</strong> Organiserar arbetstagare.
            Exempel: <strong>LO</strong> (för arbetare), <strong>TCO</strong> och
            <strong>Saco</strong> (för tjänstemän och akademiker).
          </li>
          <li>
            <strong>Arbetsgivarsidan:</strong> Organiserar arbetsgivare. Exempel:
            <strong>Svenskt Näringsliv</strong> (för privata företag),
            <strong>SKR</strong> (för kommuner och regioner), och staten som
            arbetsgivare.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Kollektivavtal</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Skriftliga avtal mellan fackförbund och
            arbetsgivarorganisationer som reglerar <strong>löner</strong>,
            <strong>arbetstider</strong>, <strong>semester</strong>,
            <strong>övertidsersättning</strong>, <strong>uppsägningstider</strong>
            m.m.
          </li>
          <li>
            <strong>Huvudregler enligt kollektivavtal:</strong>
            <ul className={classes.list}>
              <li><strong>Lön:</strong> Minst den som avtalats.</li>
              <li><strong>Arbetstid:</strong> Oftast 40 timmar/vecka.</li>
              <li><strong>Semester:</strong> Minst 25 dagar/år.</li>
              <li><strong>Övertid:</strong> Extra ersättning för arbete utöver
                ordinarie tid.</li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>Fredsplikt</h3>
        <ul className={classes.list}>
          <li>
            När ett kollektivavtal är tecknat råder <strong>fredsplikt</strong> –
            parterna får <strong>inte</strong> använda stridsåtgärder (strejk eller
            lockout) för att lösa tvister under avtalsperioden.
          </li>
          <li>
            Istället löses tvister genom <strong>förhandlingar</strong> eller i
            <strong>Arbetsdomstolen</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Konflikträtt</h3>
        <ul className={classes.list}>
          <li>
            Vid <strong>avtalslöst tillstånd</strong> (när gamla avtal löpt ut och
            nya inte tecknats) har facken rätt att <strong>strejka</strong> och
            arbetsgivarna rätt att <strong>lockouta</strong>.
          </li>
        </ul>
      </section>

      {/* ===== 3. LAGAR SOM STYR ARBETSMARKNADEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. LAGAR SOM STYR ARBETSMARKNADEN</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver de tre viktigaste lagarna på arbetsmarknaden.
        </p>

        <h3 className={classes.subHeading}>Lagen om anställningsskydd (LAS)</h3>
        <ul className={classes.list}>
          <li>
            <strong>Syfte:</strong> Skapa <strong>trygghet</strong> för arbetstagare
            genom att reglera uppsägning och anställningsformer.
          </li>
          <li>
            <strong>Huvudregel:</strong> Anställningar är
            <strong>tillsvidareanställningar</strong> (fasta). Tidsbegränsade
            anställningar är <strong>undantag</strong>.
          </li>
          <li>
            <strong>Turordning ("sist-in-först-ut"):</strong> Vid arbetsbrist
            (uppsägningar av ekonomiska skäl) ska den som varit anställd kortast tid
            sägas upp först. Undantag kan göras om arbetsgivaren har särskilda skäl
            att behålla vissa personer (pga kompetens eller särskilda kvalifikationer).
          </li>
          <li>
            <strong>Förhandlingsskyldighet:</strong> Arbetsgivaren måste förhandla
            med facket innan en uppsägning.
          </li>
          <li>
            <strong>Rätt till återanställning:</strong> Den som blivit uppsagd på
            grund av arbetsbrist har <strong>företrädesrätt</strong> till återanställning
            under en viss tid (9-12 månader).
          </li>
          <li>
            <strong>Omstrukturering:</strong> Vid verksamhetsövergång (t.ex. att ett
            företag säljs) har anställda rätt att följa med till nya arbetsgivaren
            med samma villkor.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Medbestämmandelagen (MBL)</h3>
        <ul className={classes.list}>
          <li>
            <strong>Syfte:</strong> Ge fackföreningar och anställda
            <strong>inflytande</strong> över beslut som fattas på arbetsplatsen.
          </li>
          <li>
            <strong>Huvudprincip:</strong> Arbetsgivaren ska <strong>förhandla</strong>
            med facket innan den fattar beslut om viktiga förändringar (ny teknik,
            nya scheman, lokaler, etc.).
          </li>
          <li>
            <strong>Informationsrätt:</strong> Arbetsgivaren måste informera de
            anställda om företagets ekonomiska situation och planer.
          </li>
          <li>
            <strong>Föreningsrätt:</strong> Skyddar rätten att organisera sig
            fackligt – du får <strong>inte</strong> diskrimineras eller bli uppsagd
            för att du är med i ett fackförbund.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Arbetsmiljölagen (AML)</h3>
        <ul className={classes.list}>
          <li>
            <strong>Syfte:</strong> Säkerställa en <strong>hälsosam och säker</strong>
            arbetsmiljö.
          </li>
          <li>
            <strong>Tre typer av arbetsmiljö:</strong>
            <ol className={classes.list}>
              <li>
                <strong>Fysisk:</strong> Ventilation, ljud, säkerhetsanordningar,
                kemikalier.
              </li>
              <li>
                <strong>Organisatorisk:</strong> Ledarskap, kommunikation,
                arbetsbelastning.
              </li>
              <li>
                <strong>Social:</strong> Relationer med kollegor, förebygga mobbning,
                konflikter och stress.
              </li>
            </ol>
          </li>
          <li>
            <strong>Arbetsgivarens ansvar:</strong> Bedriva <strong>systematiskt
            arbetsmiljöarbete</strong> – förebygga ohälsa och olyckor.
          </li>
          <li>
            <strong>Arbetstagarens ansvar:</strong> Följa säkerhetsföreskrifter och
            använda skyddsutrustning.
          </li>
          <li>
            <strong>Skyddsombud:</strong> En fackligt utsedd person som bevakar
            arbetsmiljön.
          </li>
          <li>
            <strong>Gäller även skolelever:</strong> Från högstadiet ansvarar rektorn
            för elevernas arbetsmiljö.
          </li>
        </ul>
      </section>

      {/* ===== 4. OLIKA ANSTÄLLNINGAR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. OLIKA ANSTÄLLNINGAR</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver olika anställningsformer och vad som krävs.
        </p>

        <h3 className={classes.subHeading}>Tillsvidareanställning (fast anställning)</h3>
        <ul className={classes.list}>
          <li>Den <strong>tryggaste</strong> anställningsformen.</li>
          <li>
            Ingen slutdatum – du arbetar tills du säger upp dig, blir uppsagd eller
            går i pension.
          </li>
          <li>Ger möjlighet att planera ekonomi, ta lån etc.</li>
          <li>
            Kan inledas med en <strong>provanställning</strong> på max 6 månader.
            Efter provanställningen övergår den i fast anställning om båda är nöjda.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Tidsbegränsad anställning</h3>
        <ul className={classes.list}>
          <li>
            Anställning som upphör på ett visst datum eller när ett visst arbete är
            slutfört.
          </li>
          <li>
            <strong>Olika typer:</strong>
            <ul className={classes.list}>
              <li>
                <strong>Särskild visstidsanställning:</strong> Projektanställning,
                arbetstoppar.
              </li>
              <li>
                <strong>Vikariat:</strong> Hoppar in för någon som är sjukskriven,
                föräldraledig etc.
              </li>
              <li>
                <strong>Säsongsarbete:</strong> Skidorter, camping, trädgårdsskötsel.
              </li>
            </ul>
          </li>
          <li>
            <strong>Rätt att "bli inlåst" (övergå till fast anställning):</strong>
            <ul className={classes.list}>
              <li>
                Efter <strong>12 månader</strong> (vid särskild visstidsanställning)
                under en 5-årsperiod.
              </li>
              <li>
                Efter <strong>24 månader</strong> (vid vikariat) under en 5-årsperiod.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>Deltid vs Heltid</h3>
        <ul className={classes.list}>
          <li>
            <strong>Deltidsanställning:</strong> Arbetar mindre än heltid (oftast
            mindre än 40h/vecka).
          </li>
          <li>
            <strong>Heltidsanställning:</strong> 40 timmar/vecka (eller den tid som
            är normalt heltidsmått).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Arbetsgivarens skyldigheter vid anställning</h3>
        <ul className={classes.list}>
          <li>
            <strong>Anställningskontrakt</strong> (skriftligt).
          </li>
          <li>
            <strong>Betald provanställning</strong> (aldrig gratis arbete!).
          </li>
          <li>
            Betala <strong>skatt</strong> och <strong>arbetsgivaravgift</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Osäkra anställningar</h3>
        <ul className={classes.list}>
          <li>
            <strong>Bemanningsföretag, nolltimmar, plattformsarbete</strong>
            (t.ex. Foodora, Uber).
          </li>
          <li>
            Ofta <strong>lägre trygghet</strong>, <strong>sämre villkor</strong> och
            <strong>färre rättigheter</strong>.
          </li>
        </ul>
      </section>

      {/* ===== 5. ARBETSLIVETS FRAMTID ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. ARBETSLIVETS FRAMTID</h2>
        <p className={classes.paragraph}>
          Detta avsnitt handlar om hur arbetslivet förändras.
        </p>

        <h3 className={classes.subHeading}>Digitalisering och automatisering</h3>
        <ul className={classes.list}>
          <li>
            Många <strong>rutinarbeten</strong> kommer att automatiseras och
            försvinna.
          </li>
          <li>
            Samtidigt uppstår <strong>nya jobb</strong> inom teknik, data och AI.
          </li>
        </ul>

        <h3 className={classes.subHeading}>AI (Artificiell Intelligens)</h3>
        <ul className={classes.list}>
          <li>
            Påverkar både <strong>enkla och avancerade</strong> yrken.
          </li>
          <li>
            Kan <strong>ersätta</strong> eller <strong>förändra</strong>
            arbetsuppgifter.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Nya branscher</h3>
        <ul className={classes.list}>
          <li>
            <strong>Gröna jobb:</strong> Miljöteknik, förnybar energi.
          </li>
          <li>
            <strong>Tech-startups:</strong> Digitala tjänster och innovationer.
          </li>
          <li>
            <strong>Vård och omsorg:</strong> På grund av åldrande befolkning.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Livslångt lärande</h3>
        <ul className={classes.list}>
          <li>
            Vikten av att <strong>ständigt uppdatera</strong> sina kunskaper och
            vara <strong>flexibel</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Gig-ekonomi och plattformsarbete</h3>
        <ul className={classes.list}>
          <li>
            Fler arbetar som <strong>egenföretagare</strong> eller via <strong>appar</strong>
            (Foodora, Uber).
          </li>
          <li>
            Detta innebär <strong>mindre trygghet</strong> och <strong>färre
            förmåner</strong>.
          </li>
        </ul>
      </section>

      {/* ===== 6. FRÅGOR TILL TEXTEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. FRÅGOR TILL TEXTEN</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>1. Varför är arbetet viktigt för människan?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Arbetet är viktigt för att skapa en <strong>försörjning</strong>
              (pengar till mat, boende etc.), men också för att ge
              <strong>social gemenskap</strong>, <strong>struktur</strong> i
              vardagen, en <strong>känsla av mening</strong> och bidra till
              <strong>identiteten</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>2. Vad innebär den svenska modellen?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Ett system där arbetsmarknadens <strong>parter</strong> (arbetsgivare
              och fackförbund) själva reglerar arbetsvillkoren genom
              <strong>kollektivavtal</strong>, med <strong>minimal statlig
              inblandning</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>3. Varför är kollektivavtal viktiga?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              De reglerar <strong>löner</strong>, <strong>arbetstider</strong>,
              <strong>semester</strong>, <strong>övertid</strong>,
              <strong>uppsägningstider</strong> och andra arbetsvillkor. De ger
              <strong>trygghet</strong> och gemensamma miniminivåer för de anställda.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. Vad är skillnaden mellan strejk och lockout?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Strejk:</strong> När <strong>arbetstagare</strong> (facket)
                lägger ner arbetet för att tvinga arbetsgivaren att gå med på sina
                krav.
              </li>
              <li>
                <strong>Lockout:</strong> När <strong>arbetsgivaren</strong> stänger
                ute arbetstagarna från arbetsplatsen för att pressa dem att acceptera
                arbetsgivarens villkor.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>5. Vad innebär fredsplikt?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Under tiden som ett <strong>kollektivavtal</strong> gäller får parterna
              <strong>inte</strong> använda stridsåtgärder (strejk eller lockout).
              Tvister löses istället genom <strong>förhandlingar</strong> eller i
              <strong>Arbetsdomstolen</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>6. Varför är LAS viktig för arbetstagare?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              LAS (Lagen om anställningsskydd) ger <strong>trygghet</strong> och
              skydd mot <strong>godtyckliga uppsägningar</strong>. Den reglerar
              också anställningsformer och turordning vid uppsägning.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>7. Vad är syftet med medbestämmandelagen?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Att ge fackföreningar och anställda <strong>inflytande</strong> över
              beslut på arbetsplatsen (t.ex. ny teknik, scheman) och <strong>rätt
              till information</strong> om företagets ekonomi och planer.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. Vad är turordningsreglerna ("sist-in-först-ut") vid uppsägning?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Vid <strong>arbetsbrist</strong> (uppsägningar av ekonomiska skäl)
              ska den som varit anställd <strong>kortast tid</strong> sägas upp
              först. Undantag kan göras om arbetsgivaren har <strong>särskilda
              skäl</strong> att behålla vissa personer (pga kompetens eller
              särskilda kvalifikationer).
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. Vad är skillnaden mellan fysisk, organisatorisk och social arbetsmiljö?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Fysisk:</strong> Ventilation, ljud, säkerhet, kemikalier.
              </li>
              <li>
                <strong>Organisatorisk:</strong> Ledarskap, kommunikation,
                arbetsbelastning.
              </li>
              <li>
                <strong>Social:</strong> Relationer med kollegor, mobbning,
                konflikter, stress.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. Vad är skillnaden mellan en tillsvidareanställning och en tidsbegränsad
            anställning?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Tillsvidareanställning:</strong> En <strong>fast</strong>
                anställning utan slutdatum. Den fortsätter tills du själv säger upp
                dig, blir uppsagd eller går i pension.
              </li>
              <li>
                <strong>Tidsbegränsad anställning:</strong> Har ett <strong>bestämt
                slutdatum</strong> eller upphör när ett visst arbete är slutfört
                (t.ex. vikariat, projekt).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. När har du rätt att "bli inlåst" (gå från tidsbegränsad till fast
            anställning)?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                Efter <strong>12 månaders</strong> särskild visstidsanställning
                (projekt) under en <strong>5-årsperiod</strong>.
              </li>
              <li>
                Efter <strong>24 månaders</strong> vikariat under en
                <strong>5-årsperiod</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>12. Varför är en provanställning alltid betald?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              För att alla anställningar i Sverige ska vara <strong>betalda</strong>
              enligt lag och kollektivavtal. Företag som erbjuder
              <strong>obetald</strong> provanställning är <strong>inte seriösa</strong>
              arbetsgivare.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. Varför kan bemanningsföretag och gig-ekonomi innebära osäkrare
            anställningar?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Dessa anställningsformer innebär ofta <strong>lägre trygghet</strong>,
              <strong>sämre villkor</strong>, <strong>sämre lön</strong>,
              <strong>mindre inflytande</strong> och <strong>ingen
              anställningstrygghet</strong>. Man är inte fast anställd hos det
              företag där man faktiskt arbetar.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. Ge exempel på hur AI kan påverka framtidens arbetsmarknad.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                AI kan <strong>automatisera</strong> många rutinuppgifter, vilket
                kan göra vissa yrken <strong>överflödiga</strong>.
              </li>
              <li>
                Samtidigt skapas <strong>nya jobb</strong> inom teknik, data och AI.
              </li>
              <li>
                Många yrken kommer att <strong>förändras</strong> och kräva
                <strong>nya kunskaper</strong> (livslångt lärande).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 7. ANALYSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. ANALYSFRÅGOR</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. Analysera skillnaderna mellan den svenska modellen och en modell där
            staten reglerar arbetsmarknaden.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Svenska modellen (kollektivavtal):</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Fördelar:</strong> Flexibilitet, anpassning till olika
                branscher, starka fackföreningar, hög grad av trygghet och
                jämställdhet.
              </li>
              <li>
                <strong>Nackdelar:</strong> Kan vara svårt att nå enighet, konflikter
                kan uppstå, vissa grupper (som inte är fackligt organiserade) kan
                hamna utanför.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Statlig reglering:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Fördelar:</strong> Lika regler för alla, enkelt och tydligt,
                staten kan garantera grundläggande rättigheter.
              </li>
              <li>
                <strong>Nackdelar:</strong> Mindre flexibilitet, svårt att anpassa
                regler till olika branscher, risk för överreglering och byråkrati.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. Varför har unga och utrikes födda svårare att få fasta anställningar?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Orsaker:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Brist på erfarenhet:</strong> Arbetsgivare föredrar ofta
                personer med mer erfarenhet.
              </li>
              <li>
                <strong>Språkliga hinder:</strong> Utrikes födda kan ha svårt med
                svenska språket, vilket kan vara ett hinder på arbetsmarknaden.
              </li>
              <li>
                <strong>Diskriminering:</strong> Medveten eller omedveten
                diskriminering på grund av etnicitet, kön eller ålder.
              </li>
              <li>
                <strong>Nätverk:</strong> Unga och utrikes födda har ofta ett mindre
                professionellt nätverk.
              </li>
              <li>
                <strong>Otrygga anställningar:</strong> Unga erbjuds ofta
                tidsbegränsade anställningar som vikariat och projektanställningar
                istället för fasta jobb.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Konsekvenser:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Ekonomisk utsatthet:</strong> Svårt att planera ekonomi, ta
                lån, spara till bostad.
              </li>
              <li>
                <strong>Sämre arbetsvillkor:</strong> Lägre lön, sämre förmåner.
              </li>
              <li>
                <strong>Osäker framtid:</strong> Svårt att få fast anställning och
                bygga en karriär.
              </li>
              <li>
                <strong>Social exkludering:</strong> Minskad chans att integreras
                i samhället.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A3. Analysera hur utvecklingen med AI och automatisering påverkar
            arbetsmarknadens olika delar.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Påverkar:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Rutinarbeten:</strong> Automatiseras och försvinner
                (t.ex. fabriksarbete, administration, kassaarbete).
              </li>
              <li>
                <strong>Kvalificerade yrken:</strong> Förändras och kompletteras av
                AI (t.ex. läkare, jurister, journalister får hjälp med analys och
                informationssökning).
              </li>
              <li>
                <strong>Nya jobb:</strong> Uppstår inom teknik, data, AI-utveckling,
                etik och utbildning.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Konsekvenser:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Ökade klyftor:</strong> De med hög utbildning och tekniska
                kunskaper klarar sig bättre än de med låg utbildning.
              </li>
              <li>
                <strong>Livslångt lärande:</strong> Allt viktigare att hela tiden
                uppdatera sina kunskaper.
              </li>
              <li>
                <strong>Förändrade yrkesroller:</strong> Många yrken kommer att
                innebära ett nära samarbete med AI.
              </li>
              <li>
                <strong>Politisk utmaning:</strong> Hur ska vi omfördela resurser
                och utbilda människor för framtidens arbetsmarknad?
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 8. DISKUSSIONSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. DISKUSSIONSFRÅGOR</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. Är kollektivavtal en bra modell för att reglera arbetsmarknaden?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>För:</strong>
            </p>
            <ul className={classes.list}>
              <li>Ger en hög grad av trygghet och gemensamma minimivillkor.</li>
              <li>
                Fungerar bra i Sverige och har bidragit till en jämställd och
                välfungerande arbetsmarknad.
              </li>
              <li>Flexibel – kan anpassas till olika branscher.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Emot:</strong>
            </p>
            <ul className={classes.list}>
              <li>Kan vara svårt att nå enighet mellan parterna.</li>
              <li>
                Vissa grupper (som inte är fackligt organiserade) kan hamna utanför.
              </li>
              <li>Minskar statens inflytande och kontroll.</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. Är det rimligt att tidsbegränsade anställningar är så vanliga inom
            vissa branscher?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Ja:</strong>
            </p>
            <ul className={classes.list}>
              <li>Ger arbetsgivaren flexibilitet vid arbetstoppar och projekt.</li>
              <li>Kan vara ett sätt att testa nya medarbetare.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Nej:</strong>
            </p>
            <ul className={classes.list}>
              <li>Skapar otrygghet för arbetstagarna.</li>
              <li>Försvårar planering av ekonomi och liv.</li>
              <li>
                Kan användas av oseriösa arbetsgivare för att undvika fasta
                anställningar.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>D3. Borde det vara olagligt med obetald praktik?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Ja:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Arbetet skapar värde för arbetsgivaren och ska därför ersättas.
              </li>
              <li>
                Obetald praktik utnyttjar människor, särskilt unga och utrikes födda.
              </li>
              <li>Bidrar till ojämlikhet och utslagning.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Nej:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Praktik kan vara ett sätt att få erfarenhet och komma in på
                arbetsmarknaden.
              </li>
              <li>Kortare obetald praktik kan vara en investering i framtiden.</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D4. Vilket ansvar har staten för att skapa trygga anställningar?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Stort ansvar:</strong> Staten måste lagstifta för att skydda
                arbetstagare, bekämpa diskriminering, finansiera utbildning och
                arbetsmarknadsinsatser, och främja en sund arbetsmarknad.
              </li>
              <li>
                <strong>Mindre ansvar:</strong> Ansvaret ligger främst på
                arbetsmarknadens parter (fack och arbetsgivare). Staten ska inte
                detaljstyra.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>D5. Är det rätt att fackförbund kan strejka?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Ja:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Strejkrätten är en <strong>grundläggande rättighet</strong> i en
                demokrati.
              </li>
              <li>
                Det enda sättet för arbetstagare att få gehör för sina krav.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Nej:</strong>
            </p>
            <ul className={classes.list}>
              <li>Strejker kan skada företag och samhällsekonomin.</li>
              <li>Kan drabba oskyldiga tredje parter (t.ex. patienter inom vården).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 9. NYCKELORD ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. NYCKELORD</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>Arbetsdomstolen:</span> En särskild
            domstol som prövar tvister som rör kollektivavtal och arbetsrättsliga
            lagar.
          </li>
          <li>
            <span className={classes.keyword}>Arbetsmiljölag (AML):</span> Lagen som
            syftar till att säkerställa en hälsosam och säker arbetsmiljö.
          </li>
          <li>
            <span className={classes.keyword}>Arbetsmiljöverket:</span> Myndighet
            som övervakar arbetsmiljön och ger råd om arbetsmiljöfrågor.
          </li>
          <li>
            <span className={classes.keyword}>Automatisering:</span> När maskiner
            och datorer tar över arbetsuppgifter som tidigare utfördes av människor.
          </li>
          <li>
            <span className={classes.keyword}>Bemanningsföretag:</span> Företag som
            hyr ut personal till andra företag.
          </li>
          <li>
            <span className={classes.keyword}>Deltidsanställning:</span> Anställning
            där du arbetar mindre än heltid (oftast mindre än 40 timmar/vecka).
          </li>
          <li>
            <span className={classes.keyword}>Fackförbund:</span> Organisation som
            företräder arbetstagare i frågor om lön, arbetsvillkor och trygghet.
          </li>
          <li>
            <span className={classes.keyword}>Fast anställning:</span> Se
            Tillsvidareanställning.
          </li>
          <li>
            <span className={classes.keyword}>Fredsplikt:</span> Förbud mot strejk
            och lockout under tiden som ett kollektivavtal gäller.
          </li>
          <li>
            <span className={classes.keyword}>Företrädesrätt till återanställning:</span>
            Rätt för den som blivit uppsagd på grund av arbetsbrist att återfå sin
            anställning om arbetsgivaren behöver nyanställa inom en viss tid.
          </li>
          <li>
            <span className={classes.keyword}>Gig-ekonomi:</span> En arbetsmarknad
            där människor arbetar i korta, tillfälliga uppdrag ("gig") via appar och
            plattformar.
          </li>
          <li>
            <span className={classes.keyword}>Heltidsanställning:</span> Anställning
            på 40 timmar per vecka (eller den tid som är normalt heltidsmått).
          </li>
          <li>
            <span className={classes.keyword}>Kollektivavtal:</span> Skriftligt
            avtal mellan fackförbund och arbetsgivarorganisationer som reglerar
            villkoren för de anställda.
          </li>
          <li>
            <span className={classes.keyword}>Konflikträtt:</span> Rätt för facket
            att strejka och för arbetsgivaren att lockouta vid avtalslöst tillstånd.
          </li>
          <li>
            <span className={classes.keyword}>LAS (Lagen om anställningsskydd):</span>
            Lagen som reglerar anställningsformer, uppsägning och turordning.
          </li>
          <li>
            <span className={classes.keyword}>Lockout:</span> När arbetsgivaren
            stänger ute anställda från arbetsplatsen för att pressa dem att acceptera
            arbetsgivarens villkor.
          </li>
          <li>
            <span className={classes.keyword}>MBL (Medbestämmandelagen):</span>
            Lagen som ger fackförbund och anställda inflytande över beslut på
            arbetsplatsen.
          </li>
          <li>
            <span className={classes.keyword}>Plattformsarbete:</span> Arbete som
            förmedlas via digitala plattformar (t.ex. Foodora, Uber).
          </li>
          <li>
            <span className={classes.keyword}>Provanställning:</span> En inledande
            anställning på max 6 månader som övergår i fast anställning om båda
            är nöjda.
          </li>
          <li>
            <span className={classes.keyword}>Svenska modellen:</span> Systemet där
            arbetsmarknadens parter reglerar arbetsvillkoren genom kollektivavtal.
          </li>
          <li>
            <span className={classes.keyword}>Särskild visstidsanställning:</span>
            En tidsbegränsad anställning (projektanställning, arbetstoppar).
          </li>
          <li>
            <span className={classes.keyword}>Säsongsarbete:</span> Arbete som bara
            kan utföras under en viss del av året (t.ex. skidorter, camping).
          </li>
          <li>
            <span className={classes.keyword}>Systematiskt arbetsmiljöarbete:</span>
            Arbetsgivarens löpande arbete för att förebygga ohälsa och olyckor.
          </li>
          <li>
            <span className={classes.keyword}>Tillsvidareanställning:</span> En
            fast anställning utan slutdatum.
          </li>
          <li>
            <span className={classes.keyword}>Turordning:</span> Regeln om att den
            som varit anställd kortast tid ska sägas upp först vid arbetsbrist
            ("sist-in-först-ut").
          </li>
          <li>
            <span className={classes.keyword}>Vikariat:</span> En tidsbegränsad
            anställning för att ersätta någon som är sjukskriven, föräldraledig etc.
          </li>
          <li>
            <span className={classes.keyword}>Övertid:</span> Arbete utöver den
            ordinarie arbetstiden, som oftast ger extra ersättning.
          </li>
        </ul>
      </section>
    </div>
  );
}