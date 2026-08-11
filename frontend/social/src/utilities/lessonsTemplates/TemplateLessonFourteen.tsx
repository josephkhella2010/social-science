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

export default function TemplateLessonFourteen() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>KAPITEL 14: EKONOMISK POLITIK</h1>
      <p className={classes.subtitle}>
        Fullständig sammanfattning med frågor, analys, diskussion och nyckelord
      </p>

      {/* ===== 1. DEN EKONOMISKA POLITIKENS MÅL OCH MEDEL ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. DEN EKONOMISKA POLITIKENS MÅL OCH MEDEL</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver de mål som den ekonomiska politiken strävar efter.
        </p>

        <h3 className={classes.subHeading}>De fem ekonomisk-politiska målen</h3>
        <ol className={classes.list}>
          <li>
            <strong>Låg arbetslöshet och hög sysselsättning</strong>
          </li>
          <li>
            <strong>Stabilt penningvärde (låg inflation)</strong> – regleras i lag
            som Riksbanken måste följa
          </li>
          <li>
            <strong>Ekonomisk tillväxt och höjd levnadsstandard</strong> (ökad BNP)
          </li>
          <li>
            <strong>Balans i utrikeshandeln</strong> – export och import ska väga
            jämnt på lång sikt
          </li>
          <li>
            <strong>Hänsyn till miljön för en hållbar utveckling</strong> (stadfäst
            i regeringsformen)
          </li>
        </ol>

        <h3 className={classes.subHeading}>Målkonflikter</h3>
        <ul className={classes.list}>
          <li>
            Politikerna är överens om målen men <strong>inte</strong> om
            prioriteringen mellan dem.
          </li>
          <li>
            <strong>Exempel på målkonflikter:</strong>
            <ul className={classes.list}>
              <li>
                <strong>Arbetslöshet vs inflation:</strong> Förr var konflikten
                stor – att bekämpa inflation kunde öka arbetslösheten. Idag är
                konflikten nedtonad efter Riksbankens självständighet på 1990-talet.
              </li>
              <li>
                <strong>Arbetslöshet vs budgetunderskott:</strong> Ska staten öka
                utgifterna för att minska arbetslöshet, även om det ökar
                budgetunderskottet?
              </li>
              <li>
                <strong>Tillväxt vs miljö:</strong> Ekonomisk tillväxt kan kollidera
                med miljöhänsyn.
              </li>
              <li>
                <strong>Regional balans vs tillväxt:</strong> Ska staten subventionera
                glesbygden eller satsa på storstadsregioner där lönsamheten är
                störst?
              </li>
              <li>
                <strong>Utjämning vs incitament:</strong> Ska staten aktivt verka
                för att minska klyftor mellan rika och fattiga?
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ===== 2. KONJUNKTURCYKELN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. KONJUNKTURCYKELN</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver hur ekonomin svänger mellan hög- och lågkonjunktur.
        </p>

        <h3 className={classes.subHeading}>Konjunkturcykel</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> De regelbundna svängningarna i ekonomin
            mellan hög- och lågkonjunktur.
          </li>
          <li>
            <strong>Högkonjunktur:</strong> Ekonomi i topp – hög efterfrågan,
            låg arbetslöshet, stigande priser.
          </li>
          <li>
            <strong>Lågkonjunktur:</strong> Ekonomi i botten – låg efterfrågan,
            hög arbetslöshet, fallande priser.
          </li>
          <li>
            <strong>Trend:</strong> Den långsiktiga utvecklingen i ekonomin
            (oftast uppåtgående).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Varför övergår högkonjunktur till lågkonjunktur?</h3>
        <ul className={classes.list}>
          <li>
            Ökad efterfrågan leder till <strong>flaskhalsar</strong> (brist på
            arbetskraft, råvaror, maskiner).
          </li>
          <li>
            Företag bjuder över varandra för resurser → priser och löner stiger.
          </li>
          <li>
            Högre priser leder till att efterfrågan sjunker → ekonomin bromsar in.
          </li>
          <li>
            Sverige som <strong>öppen ekonomi</strong> påverkas av konjunkturer
            i omvärlden (t.ex. Tyskland).
          </li>
        </ul>
      </section>

      {/* ===== 3. INFLATION OCH DEFLATION ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. INFLATION OCH DEFLATION</h2>
        <p className={classes.paragraph}>
          Detta avsnitt förklarar vad inflation och deflation är och varför de är
          problematiska.
        </p>

        <h3 className={classes.subHeading}>Inflation</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> En ihållande <strong>prisstegring</strong>
            – pengarnas värde minskar.
          </li>
          <li>
            <strong>Uppstår:</strong> När den totala efterfrågan i ekonomin är
            större än utbudet (<strong>efterfrågeöverskott</strong>).
          </li>
          <li>
            <strong>Målet:</strong> En låg och stabil inflation (Riksbankens
            inflationsmål är <strong>2%</strong>).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Deflation</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> En ihållande <strong>prisfall</strong>
            – pengarnas värde ökar.
          </li>
          <li>
            <strong>Fara:</strong> Konsumenter skjuter upp köp (väntar på lägre
            priser), vilket leder till minskad produktion och ökad arbetslöshet.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Varför är inflation inte bra?</h3>
        <ul className={classes.list}>
          <li>Minskar <strong>köpkraften</strong> (pengar blir mindre värda).</li>
          <li>
            Slår hårt mot människor med <strong>fasta inkomster</strong>
            (pensionärer, studerande).
          </li>
          <li>
            Skapar <strong>osäkerhet</strong> och försvårar långsiktig planering
            för företag och hushåll.
          </li>
        </ul>

        <h3 className={classes.subHeading}>KPI och Prisbasbeloppet</h3>
        <ul className={classes.list}>
          <li>
            <strong>KPI (Konsumentprisindex):</strong> Ett mått som visar
            prisutvecklingen på en <strong>varukorg</strong> av varor och tjänster
            som en genomsnittlig konsument köper. Används för att mäta inflationen.
          </li>
          <li>
            <strong>Prisbasbeloppet:</strong> Ett belopp som används för att
            beräkna olika sociala förmåner (t.ex. pension, sjukpenning). Det
            justeras årligen efter prisutvecklingen (KPI).
          </li>
        </ul>
      </section>

      {/* ===== 4. EKONOMISK POLITIK – OLIKA POLITIKOMRÅDEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. EKONOMISK POLITIK – OLIKA POLITIKOMRÅDEN</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver de olika verktyg som staten använder för att styra
          ekonomin.
        </p>

        <h3 className={classes.subHeading}>Finanspolitik</h3>
        <ul className={classes.list}>
          <li>
            <strong>Vem ansvarar:</strong> Regeringen och riksdagen
            (Finansdepartementet).
          </li>
          <li>
            <strong>Vad innebär det:</strong> Styrningen av statens
            <strong>inkomster</strong> (skatter) och <strong>utgifter</strong>
            (offentlig konsumtion, investeringar, transfereringar).
          </li>
          <li>
            <strong>Syfte:</strong> Påverka den <strong>samlade efterfrågan</strong>
            i ekonomin.
          </li>
          <li>
            <strong>Multiplikatoreffekten:</strong> En initial ökning av offentliga
            utgifter leder till en <strong>större total ökning</strong> av BNP,
            eftersom pengarna spenderas flera gånger om i ekonomin.
          </li>
          <li>
            <strong>Finanspolitiska ramverket:</strong> Regelverk som styr den
            svenska finanspolitiken, inklusive:
            <ul className={classes.list}>
              <li>
                <strong>Överskottsmål:</strong> Statens finanser ska på sikt visa
                ett överskott (1/3% av BNP).
              </li>
              <li>
                <strong>Utgiftstak:</strong> En övre gräns för statens utgifter.
              </li>
              <li>
                <strong>Balanskrav:</strong> Kommuner och regioner ska ha balans
                i sina budgetar.
              </li>
            </ul>
          </li>
          <li>
            <strong>Underbalanserad budget:</strong> När statens utgifter är större
            än inkomsterna (budgetunderskott).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Penningpolitik</h3>
        <ul className={classes.list}>
          <li>
            <strong>Vem ansvarar:</strong> <strong>Riksbanken</strong> (självständig
            från politiken).
          </li>
          <li>
            <strong>Vad innebär det:</strong> Styrning av <strong>penningmängden</strong>
            och <strong>räntan</strong> för att upprätthålla ett stabilt penningvärde
            (låg inflation).
          </li>
          <li>
            <strong>Styrränta:</strong> Den ränta som Riksbanken sätter och som
            påverkar andra räntor i samhället (t.ex. bolåneräntor).
            <ul className={classes.list}>
              <li>
                <strong>Sänkt styrränta:</strong> Stimulerar ekonomin (gynnar
                låntagare, ökar konsumtion).
              </li>
              <li>
                <strong>Höjd styrränta:</strong> Dämpar ekonomin (bekämpar
                inflation, missgynnar låntagare).
              </li>
            </ul>
          </li>
          <li>
            <strong>Hur påverkar styrräntan privatpersoner?</strong>
            <ul className={classes.list}>
              <li>
                Höjd ränta → dyrare bolån → mindre pengar över till konsumtion.
              </li>
              <li>
                Sänkt ränta → billigare bolån → mer pengar över till konsumtion.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>Valutapolitik</h3>
        <ul className={classes.list}>
          <li>
            <strong>Vad innebär det:</strong> Statens politik för att påverka
            <strong>växelkursen</strong>.
          </li>
          <li>
            <strong>Fast växelkurs:</strong> Valutans värde är bundet till en
            annan valuta (t.ex. euron).
          </li>
          <li>
            <strong>Rörlig växelkurs:</strong> Valutans värde bestäms av utbud
            och efterfrågan på marknaden (det system Sverige har idag).
          </li>
          <li>
            <strong>Devalvering:</strong> En medveten sänkning av valutans värde
            vid fast växelkurs (<strong>politiskt beslut</strong>).
          </li>
          <li>
            <strong>Depreciering:</strong> En värdeminskning av valutan vid
            rörlig växelkurs (orsakad av <strong>marknadskrafter</strong>).
          </li>
          <li>
            <strong>Skillnad:</strong> Devalvering är ett politiskt beslut;
            depreciering sker automatiskt av marknaden.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Arbetsmarknadspolitik</h3>
        <ul className={classes.list}>
          <li>
            <strong>Vad innebär det:</strong> Åtgärder för att minska arbetslösheten
            och öka sysselsättningen.
          </li>
          <li>
            <strong>Exempel:</strong> Arbetsmarknadsutbildningar, praktikplatser,
            lönebidrag, stöd till nystartade företag.
          </li>
          <li>
            <strong>Strukturell arbetslöshet:</strong> Arbetslöshet som beror på
            en obalans mellan utbud och efterfrågan på arbetskraft (t.ex. fel
            kompetens eller fel geografisk plats).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Stabiliseringspolitik</h3>
        <ul className={classes.list}>
          <li>
            Ett samlingsbegrepp för <strong>finanspolitik</strong> och
            <strong>penningpolitik</strong>. Syftet är att <strong>jämna ut
            konjunkturcykeln</strong> – dämpa högkonjunkturer och stimulera
            lågkonjunkturer.
          </li>
        </ul>
      </section>

      {/* ===== 5. FINANSMARKNADEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. FINANSMARKNADEN</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver hur finansmarknaden fungerar och hur den övervakas.
        </p>

        <h3 className={classes.subHeading}>Finansmarknadens funktion</h3>
        <ul className={classes.list}>
          <li>
            Förmedla <strong>sparande</strong> från hushåll och företag till
            <strong>långivning</strong> och <strong>investeringar</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Aktörer</h3>
        <ul className={classes.list}>
          <li>
            Banker, försäkringsbolag, pensionsföretag, fondbolag
            (<strong>finansiella intermediärer</strong>).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Finansinspektionen (FI)</h3>
        <ul className={classes.list}>
          <li>
            Myndighet som <strong>övervakar</strong> finansmarknaden (banker,
            försäkringsbolag, kreditmarknadsföretag).
          </li>
          <li>
            <strong>Bolånetak (2010):</strong> FI:s rekommendation att lån inte
            bör överstiga <strong>85%</strong> av bostadens pris (inte bindande
            men följs av bankerna).
          </li>
          <li>
            <strong>Amorteringskrav:</strong> <strong>Bindande</strong> krav från
            FI som säkerställer att hushåll amorterar (betalar av) på sina lån.
            Syftet är att minska hushållens skuldsättning.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Insättningsgaranti</h3>
        <ul className={classes.list}>
          <li>
            Riksgälden garanterar insättningar i banker upp till
            <strong>100 000 euro</strong> per person.
          </li>
          <li>
            Skyddar mot bankkriser (förhindrar <strong>"bank runs"</strong>).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Riksgälden</h3>
        <ul className={classes.list}>
          <li>
            Ansvarar för statens <strong>skuldsättning</strong> och
            <strong>insättningsgarantin</strong>.
          </li>
        </ul>
      </section>

      {/* ===== 6. STATSSKULD OCH BUDGET ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. STATSSKULD OCH BUDGET</h2>

        <h3 className={classes.subHeading}>Statsskuld</h3>
        <ul className={classes.list}>
          <li>
            Den totala mängd pengar som staten har lånat.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Överskottsmål</h3>
        <ul className={classes.list}>
          <li>
            Statens finanser ska på sikt visa ett överskott för att minska
            statsskulden.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Utgiftstak</h3>
        <ul className={classes.list}>
          <li>
            En övre gräns för statens utgifter.
          </li>
        </ul>
      </section>

      {/* ===== 7. FRÅGOR TILL TEXTEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. FRÅGOR TILL TEXTEN</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>1. Hur mäts ekonomisk tillväxt?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Ekonomisk tillväxt mäts som <strong>förändringen i BNP</strong>
              (Bruttonationalprodukt) över tid, oftast per år eller per kvartal.
              Tillväxten anges i <strong>procent</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>2. Vad kännetecknar en högkonjunktur?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Högkonjunktur kännetecknas av <strong>hög efterfrågan</strong>,
              <strong>låg arbetslöshet</strong>, <strong>ökad produktion</strong>,
              <strong>stigande priser</strong> (inflation) och optimistiska
              företag som investerar.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>3. Vad är en konjunkturcykel?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En konjunkturcykel är de <strong>regelbundna svängningarna</strong>
              i ekonomin mellan hög- och lågkonjunktur. Tiden mellan två toppar
              eller två dalar kallas för en konjunkturcykel.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. Ge någon förklaring till varför konjunkturkurvan efter en tid
            övergår från hög till lågkonjunktur. Och tvärtom, från låg- till
            högkonjunktur.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Hög→låg:</strong> Ökad efterfrågan leder till
                <strong>flaskhalsar</strong> (brist på resurser). Företag bjuder
                över varandra → priser och löner stiger → efterfrågan sjunker
                → ekonomin bromsar in.
              </li>
              <li>
                <strong>Låg→hög:</strong> Låga priser stimulerar efterfrågan.
                Företag börjar investera igen, vilket ökar produktionen och
                sysselsättningen.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>5. Vad visar försörjningsbalansen?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Försörjningsbalansen visar förhållandet mellan den totala
              <strong>tillgången</strong> på varor och tjänster (produktion +
              import) och <strong>användningen</strong> (konsumtion + investeringar
              + export). Den visar om Sverige är nettoexportör eller nettoimportör.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. Vad är inflation och varför uppstår inflation?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Inflation</strong> är en <strong>ihållande prisstegring</strong>.
              Den uppstår när den totala efterfrågan i ekonomin är större än
              utbudet (<strong>efterfrågeöverskott</strong>), eller när
              produktionskostnaderna ökar (t.ex. högre råvarupriser).
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>7. Vad är deflation?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Deflation</strong> är en <strong>ihållande prisfall</strong>.
              Pengars värde ökar, vilket kan leda till att konsumenter skjuter
              upp köp, vilket i sin tur minskar produktion och ökar arbetslösheten.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>8. Varför är inflation inte bra?</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>Minskar <strong>köpkraften</strong> (pengar blir mindre värda).</li>
              <li>
                Slår hårt mot människor med <strong>fasta inkomster</strong>
                (pensionärer, studerande).
              </li>
              <li>
                Skapar <strong>osäkerhet</strong> och försvårar långsiktig
                planering.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>9. Vad är KPI och prisbasbeloppet?</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>KPI (Konsumentprisindex):</strong> Ett mått som visar
                prisutvecklingen på en <strong>varukorg</strong> av varor och
                tjänster som en genomsnittlig konsument köper.
              </li>
              <li>
                <strong>Prisbasbeloppet:</strong> Ett belopp som används för att
                beräkna olika sociala förmåner (t.ex. pension, sjukpenning). Det
                justeras årligen efter KPI.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. Vad är skillnaden mellan KPI och KPIF?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>KPI</strong> inkluderar <strong>ränteförändringar</strong>.
              </li>
              <li>
                <strong>KPIF</strong> (Konsumentprisindex med fast ränta)
                <strong>exkluderar</strong> ränteförändringar.
              </li>
              <li>
                Riksbanken använder <strong>KPIF</strong> som sitt inflationsmål
                (2%) eftersom det bättre speglar den <strong>underliggande
                prisutvecklingen</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>11. Vad visar betalningsbalansen?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Betalningsbalansen visar ett lands <strong>alla transaktioner</strong>
              med omvärlden under en viss period, inklusive handel med varor och
              tjänster, kapitalflöden och överföringar.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>12. Vilka ansvarar för finanspolitiken?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Regeringen och riksdagen</strong> (Finansdepartementet)
              ansvarar för finanspolitiken – styrningen av statens
              <strong>inkomster</strong> (skatter) och <strong>utgifter</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>13. Vad är multiplikatoreffekten?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Multiplikatoreffekten</strong> innebär att en initial ökning
              av offentliga utgifter leder till en <strong>större total ökning</strong>
              av BNP, eftersom pengarna spenderas flera gånger om i ekonomin.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>14. Vad ingår i det finanspolitiska ramverket?</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Överskottsmål</strong> – statens finanser ska på sikt
                visa överskott.
              </li>
              <li>
                <strong>Utgiftstak</strong> – övre gräns för statens utgifter.
              </li>
              <li>
                <strong>Balanskrav</strong> för kommuner och regioner.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>15. Vad innebär arbetsmarknadspolitik?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Arbetsmarknadspolitik är <strong>åtgärder</strong> för att minska
              arbetslösheten och öka sysselsättningen, t.ex.
              arbetsmarknadsutbildningar, praktikplatser, lönebidrag och stöd
              till nystartade företag.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            16. Hur gör Riksbanken när den bedriver penningpolitik?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Riksbanken styr penningpolitiken genom att sätta
              <strong>styrräntan</strong> och påverka <strong>penningmängden</strong>.
              Genom att höja eller sänka räntan påverkar Riksbanken inflationen
              och den ekonomiska aktiviteten.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            17. Hur påverkar Riksbankens styrränta svenska folkets privatekonomi?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Höjd styrränta:</strong> Dyrare bolån → mindre pengar
                till konsumtion.
              </li>
              <li>
                <strong>Sänkt styrränta:</strong> Billigare bolån → mer pengar
                till konsumtion.
              </li>
              <li>
                Påverkar även <strong>sparräntor</strong> och <strong>företagens
                lånekostnader</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            18. Hur påverkar Finansinspektionen svenska folkets privatekonomi?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Finansinspektionen (FI) påverkar privatekonomin genom:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Bolånetak:</strong> Rekommendation att lån max får vara
                85% av bostadens pris.
              </li>
              <li>
                <strong>Amorteringskrav:</strong> Bindande krav som tvingar
                hushåll att betala av sina lån, vilket minskar skuldsättningen.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            19. Förklara varför mynt och sedlar bara är en liten del av
            penningmängden.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Den största delen av penningmängden finns som <strong>digitala
              pengar</strong> på bankkonton. När du betalar med kort eller Swish
              används <strong>digitala pengar</strong>, inte fysiska sedlar och
              mynt.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>20. Hur gör bankerna när de skapar pengar?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Banker skapar pengar genom <strong>utlåning</strong>. När en bank
              beviljar ett lån, sätts pengarna in på låntagarens konto –
              <strong>nya pengar skapas</strong>. Detta kallas för
              <strong>kreditmultiplikatoreffekten</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>21. Vad är finansmarknaden?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Finansmarknaden</strong> är den marknad där pengar, krediter
              och värdepapper handlas. Här förmedlas sparande från hushåll och
              företag till långivning och investeringar.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            22. Vad innebar systemet med fast växelkurs?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Fast växelkurs</strong> innebär att valutans värde är
              <strong>bundet</strong> till en annan valuta (t.ex. euron).
              Riksbanken måste då köpa och sälja valuta för att hålla kursen
              fast.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            23. Vad innebär systemet med rörlig växelkurs?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Rörlig växelkurs</strong> innebär att valutans värde
              bestäms av <strong>utbud och efterfrågan</strong> på valutamarknaden.
              Sverige har rörlig växelkurs.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            24. Vad är likheten och skillnaden mellan devalvering och depreciering?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Likhet:</strong> Båda innebär en
                <strong>värdeminskning</strong> av valutan.
              </li>
              <li>
                <strong>Skillnad:</strong> <strong>Devalvering</strong> är ett
                <strong>politiskt beslut</strong> (vid fast växelkurs).
                <strong>Depreciering</strong> sker <strong>automatiskt</strong>
                av marknadskrafterna (vid rörlig växelkurs).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 8. ANALYSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. ANALYSFRÅGOR</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. Nationalekonomernas förslag grundar sig delvis i deras politiska
            värderingar. Ge exempel på hur det skulle kunna se ut.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                En nationalekonom med <strong>vänsterinriktning</strong> kan
                föreslå <strong>högre skatter</strong> på höginkomsttagare för
                att finansiera utökad välfärd och minska klyftor.
              </li>
              <li>
                En nationalekonom med <strong>högerinriktning</strong> kan
                föreslå <strong>sänkta skatter</strong> och minskade offentliga
                utgifter för att stimulera företagande och tillväxt.
              </li>
              <li>
                Båda använder samma ekonomiska teori men <strong>prioriterar
                olika mål</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. Var i konjunkturcykeln befinner sig Sverige just nu?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <em>(Detta kräver aktuell data. Som AI utan tillgång till
              realtidsdata kan jag inte ge ett exakt svar. Men du kan besöka
              Konjunkturinstitutets hemsida (www.konj.se) för att se aktuella
              bedömningar. Generellt: titta på BNP-tillväxt, arbetslöshet och
              inflation för att avgöra om Sverige befinner sig i hög-, låg-
              eller mellan konjunktur.)</em>
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A3. Borde Sverige införa sex timmars arbetsdag för att fler ska få arbete?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Fördelar:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Fler personer kan delas på samma arbetsuppgifter → lägre
                arbetslöshet.
              </li>
              <li>Bättre arbetsmiljö och hälsa för anställda.</li>
              <li>Mer tid till familj, fritid och återhämtning.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Nackdelar:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Högre kostnader för arbetsgivare (fler anställda, samma produktion).
              </li>
              <li>Risk för lägre produktivitet.</li>
              <li>Kan leda till högre priser på varor och tjänster.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Grupper som troligen skulle tycka det är bra:</strong>
              Fackförbund, anställda i stressiga yrken, småbarnsföräldrar.
            </p>
            <p className={classes.paragraph}>
              <strong>Grupper som troligen skulle tycka det är dåligt:</strong>
              Arbetsgivare, småföretagare, högutbildade med hög lön (som kan få
              lägre inkomst).
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A4. Varför är det politiskt svårt att genomföra alltför tuffa
            amorteringskrav?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Motstånd från hushåll:</strong> Många hushåll har höga
                lån och skulle få svårt att klara hårdare amorteringskrav.
              </li>
              <li>
                <strong>Risk för bostadskrasch:</strong> Striktare krav kan leda
                till sjunkande bostadspriser, vilket påverkar hushållens
                förmögenhet.
              </li>
              <li>
                <strong>Politisk risk:</strong> Väljare med höga bolån kan
                straffa politiker som inför tuffare regler.
              </li>
              <li>
                <strong>Bankernas intresse:</strong> Bankerna tjänar på utlåning
                och vill inte minska sin verksamhet.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A5. Familjen Gleerungs ekonomi – hur påverkas de?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Anna blir arbetslös:</strong> Lägre hushållsinkomst →
                svårare att betala räntor och amorteringar.
              </li>
              <li>
                <strong>FI höjer amorteringskravet:</strong> Familjen måste betala
                mer i amortering → mindre pengar till konsumtion.
              </li>
              <li>
                <strong>Räntan stiger 2 procentenheter på 2 år:</strong> Ökad
                räntekostnad (på 3 miljoner = 60 000 kr mer per år) → kraftigt
                försämrad ekonomi.
              </li>
              <li>
                <strong>Kommunalskatten höjs 30 öre:</strong> Minskad disponibel
                inkomst.
              </li>
              <li>
                <strong>Kronan faller 10% mot euron:</strong> Resan till Spanien
                blir 10% dyrare.
              </li>
              <li>
                <strong>Slutsats:</strong> Familjen drabbas av en
                <strong>perfekt storm</strong> – minskade inkomster, ökade
                utgifter och dyrare semester.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 9. DISKUSSIONSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. DISKUSSIONSFRÅGOR</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. Ge exempel på produkter som marknadsförs i tv-reklamen eller på
            internet. Stämmer de på monopolistisk konkurrens?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Ja, de flesta produkter som marknadsförs (t.ex. kläder, elektronik,
              livsmedel) är exempel på <strong>monopolistisk konkurrens</strong>
              – många företag säljer liknande men differentierade produkter och
              konkurrerar genom varumärke, design och marknadsföring.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. Varför är det svårt att mäta den svarta ekonomin?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Den svarta ekonomin är <strong>dold och oregistrerad</strong> – de
              som deltar vill inte att myndigheterna ska upptäcka det. Man kan
              uppskatta den genom indirekta metoder, enkäter eller skatterevisioner,
              men <strong>alla metoder är osäkra</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D3. Finns det något område där du skulle vilja ha monopol? Varför?
            Vilka positiva och negativa följder skulle det få?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Positiva:</strong> Kan säkerställa likvärdig service i hela
              landet, undvika överlappande investeringar (t.ex. elnät, järnväg).
            </p>
            <p className={classes.paragraph}>
              <strong>Negativa:</strong> Brist på konkurrens → lägre effektivitet,
              mindre innovation, sämre kvalitet och högre priser (om det inte
              regleras).
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D4. Vilken rätt har de arbetslösa att vara arbetslösa och ändå ha en
            dräglig ekonomi? Och vilken rätt har övriga medborgare att slippa vara
            med och betala skatt till dem som inte gör sitt yttersta för att hitta
            ett nytt jobb?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>För arbetslösa:</strong> Alla har rätt till en
              <strong>dräglig existens</strong> enligt sociala skyddsnät.
              Arbetslöshet kan drabba vem som helst (sjukdom, uppsägning,
              omställning). Samhället har ett ansvar att hjälpa.
            </p>
            <p className={classes.paragraph}>
              <strong>Emot:</strong> De som inte aktivt söker jobb eller tackar
              nej till erbjudanden kan <strong>missbruka systemet</strong>.
              Skattebetalare har rätt att förvänta sig att bidrag går till dem
              som verkligen behöver och anstränger sig.
            </p>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> Systemet måste balansera
              <strong>trygghet</strong> för de som behöver med
              <strong>incitament</strong> att söka arbete.
              <strong>Aktivitetskrav</strong> och <strong>kontroller</strong> är
              viktiga.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D5. Hur kan man mäta produktiviteten i t.ex. en ledstångsfabrik? I en
            skola eller i ett äldreboende? Vilken arbetsplats verkar vara enklast
            att mäta? Svårast?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Ledstångsfabrik (enklast):</strong> Mät
                <strong>antal producerade ledstänger</strong> per arbetare och
                timme. Produktionen är konkret och mätbar.
              </li>
              <li>
                <strong>Skola (svårast):</strong> Mät elevernas
                <strong>kunskapsutveckling</strong> (t.ex. nationella prov), men
                det är svårt att isolera lärarens insats från andra faktorer
                (hemförhållanden, elevens motivation).
              </li>
              <li>
                <strong>Äldreboende (svårt):</strong> Mät antal
                <strong>omvårdnadsinsatser</strong> per person, men
                <strong>kvalitet</strong> (trygghet, välbefinnande) är svår att
                mäta.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 10. NYCKELORD ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>10. NYCKELORD</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>Amorteringskrav:</span> Bindande
            krav från Finansinspektionen som tvingar hushåll att betala av sina
            lån.
          </li>
          <li>
            <span className={classes.keyword}>Betalningsbalansen:</span> Ett lands
            alla transaktioner med omvärlden (handel, kapitalflöden).
          </li>
          <li>
            <span className={classes.keyword}>Bolånetak:</span> Rekommendation
            (från 2010) att lån max får vara 85% av bostadens pris.
          </li>
          <li>
            <span className={classes.keyword}>Deflation:</span> Ihållande prisfall
            – pengars värde ökar.
          </li>
          <li>
            <span className={classes.keyword}>Depreciering:</span> Värdeminskning
            av valuta vid rörlig växelkurs (orsakad av marknadskrafter).
          </li>
          <li>
            <span className={classes.keyword}>Depression:</span> En mycket djup
            och långvarig lågkonjunktur.
          </li>
          <li>
            <span className={classes.keyword}>Devalvering:</span> En medveten
            sänkning av valutans värde vid fast växelkurs (politiskt beslut).
          </li>
          <li>
            <span className={classes.keyword}>Digitala pengar:</span> Pengar som
            finns som siffror på bankkonton (används vid kortbetalning, Swish
            etc.).
          </li>
          <li>
            <span className={classes.keyword}>Fast växelkurs:</span> Valutans
            värde är bundet till en annan valuta.
          </li>
          <li>
            <span className={classes.keyword}>Flaskhals:</span> När en resurs
            (arbetskraft, råvaror, maskiner) blir bristvara och hindrar
            produktionen.
          </li>
          <li>
            <span className={classes.keyword}>Finansmarknaden:</span> Marknad där
            pengar, krediter och värdepapper handlas.
          </li>
          <li>
            <span className={classes.keyword}>Finansinspektionen (FI):</span>
            Myndighet som övervakar finansmarknaden (banker, försäkringsbolag
            etc.).
          </li>
          <li>
            <span className={classes.keyword}>Finanspolitik:</span> Statens
            styrning av inkomster (skatter) och utgifter.
          </li>
          <li>
            <span className={classes.keyword}>Inflation:</span> Ihållande
            prisstegring – pengars värde minskar.
          </li>
          <li>
            <span className={classes.keyword}>Konjunkturcykel:</span> Regelbundna
            svängningar i ekonomin mellan hög- och lågkonjunktur.
          </li>
          <li>
            <span className={classes.keyword}>KPI (Konsumentprisindex):</span>
            Mått på prisutvecklingen på varor och tjänster.
          </li>
          <li>
            <span className={classes.keyword}>Multiplikatoreffekten:</span> En
            initial utgiftsökning leder till en större total BNP-ökning.
          </li>
          <li>
            <span className={classes.keyword}>Penningpolitik:</span> Riksbankens
            styrning av ränta och penningmängd.
          </li>
          <li>
            <span className={classes.keyword}>Prisbasbeloppet:</span> Belopp som
            används för att beräkna sociala förmåner, justeras efter KPI.
          </li>
          <li>
            <span className={classes.keyword}>Produktivitet:</span> Produktion per
            insats (t.ex. antal varor per arbetare och timme).
          </li>
          <li>
            <span className={classes.keyword}>Riksbanken:</span> Sveriges
            centralbank, ansvarar för penningpolitiken.
          </li>
          <li>
            <span className={classes.keyword}>Rörlig växelkurs:</span> Valutans
            värde bestäms av utbud och efterfrågan.
          </li>
          <li>
            <span className={classes.keyword}>Stabiliseringspolitik:</span>
            Samlingsbegrepp för finans- och penningpolitik för att jämna ut
            konjunkturen.
          </li>
          <li>
            <span className={classes.keyword}>Statsskuld:</span> Den totala
            mängd pengar som staten har lånat.
          </li>
          <li>
            <span className={classes.keyword}>Strukturell arbetslöshet:</span>
            Arbetslöshet som beror på obalans mellan utbud och efterfrågan på
            arbetskraft.
          </li>
          <li>
            <span className={classes.keyword}>Strukturrationalisering:</span>
            Omstrukturering av näringslivet för ökad effektivitet.
          </li>
          <li>
            <span className={classes.keyword}>Styrränta:</span> Den ränta som
            Riksbanken sätter och som påverkar andra räntor.
          </li>
          <li>
            <span className={classes.keyword}>Underbalanserad budget:</span> När
            statens utgifter är större än inkomsterna (budgetunderskott).
          </li>
          <li>
            <span className={classes.keyword}>Valutapolitik:</span> Statens
            politik för att påverka växelkursen.
          </li>
          <li>
            <span className={classes.keyword}>Överskottsmål:</span> Mål att
            statens finanser på sikt ska visa överskott.
          </li>
        </ul>
      </section>
    </div>
  );
}