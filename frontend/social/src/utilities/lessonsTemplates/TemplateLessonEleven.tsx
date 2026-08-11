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

export default function TemplateLessonEleven() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>KAPITEL 11: VÄLFÄRDSSAMHÄLLET</h1>
      <p className={classes.subtitle}>
        Fullständig sammanfattning med frågor, analys, diskussion och nyckelord
      </p>

      {/* ===== 1. VÄLFÄRDSMODELLER ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. VÄLFÄRDSMODELLER</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver de tre huvudsakliga välfärdsmodellerna i världen enligt
          sociologen Gösta Esping-Andersen. Välfärd handlar om de insatser som samhället
          gör för att ge medborgarna ekonomisk trygghet och sociala tjänster som sjukvård,
          skola och äldreomsorg.
        </p>

        <h3 className={classes.subHeading}>Tre välfärdsmodeller</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Modell</th>
                <th className={classes.th}>Kännetecken</th>
                <th className={classes.th}>Exempel på länder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>1. Konservativa modellen</strong>
                </td>
                <td className={classes.td}>
                  <ul className={classes.list}>
                    <li>Familjen har stor betydelse för välfärden.</li>
                    <li>Staten går bara in när familjen inte räcker till.</li>
                    <li>Bidrag är ofta behovsprövade och baserade på arbetsinsatser
                      (försäkringsbaserade).</li>
                    <li>Upprätthåller klass- och statuskillnader.</li>
                  </ul>
                </td>
                <td className={classes.td}>
                  Tyskland, Frankrike, Österrike, Japan
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>2. Liberala modellen</strong>
                </td>
                <td className={classes.td}>
                  <ul className={classes.list}>
                    <li>Statens roll är minimal.</li>
                    <li>Marknaden och privata initiativ ska lösa välfärdsbehov.</li>
                    <li>Välfärdstjänster är ofta behovsprövade och riktade till de
                      allra fattigaste.</li>
                    <li>Låga skatter och ett svagt skyddsnät.</li>
                  </ul>
                </td>
                <td className={classes.td}>
                  USA, Storbritannien (till viss del), Australien
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>3. Socialdemokratiska modellen</strong>
                </td>
                <td className={classes.td}>
                  <ul className={classes.list}>
                    <li>Universella (generella) bidrag som gäller alla medborgare.</li>
                    <li>Hög grad av omfördelning via skatter.</li>
                    <li>Staten tar ett stort ansvar för medborgarnas välfärd från
                      "vagga till grav".</li>
                    <li>Målet är att minska ojämlikheter och skapa jämlikhet.</li>
                  </ul>
                </td>
                <td className={classes.td}>
                  Sverige, Norge, Danmark, Finland
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== 2. DET SVENSKA VÄLFÄRDSSYSTEMET ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. DET SVENSKA VÄLFÄRDSSYSTEMET</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver hur det svenska välfärdssystemet är uppbyggt för att
          stödja medborgare i olika livsskeden.
        </p>

        <h3 className={classes.subHeading}>Barn- och familjepolitik</h3>
        <ul className={classes.list}>
          <li>
            <strong>Barnbidrag:</strong> Generellt bidrag (behövs ej prövas) som betalas
            ut till alla familjer med barn under 16 år.
          </li>
          <li>
            <strong>Föräldrapenning:</strong> Ersätter inkomstbortfall när föräldrar är
            hemma med små barn. Inkomstbaserad (ersätter ca 80% av lönen upp till en
            viss gräns).
          </li>
          <li>
            <strong>Tillfällig föräldrapenning (VAB):</strong> Ersättning när föräldrar
            måste vara hemma för att vårda sjuka barn.
          </li>
          <li>
            <strong>Underhållsstöd:</strong> Ekonomiskt stöd till ensamstående föräldrar.
          </li>
          <li>
            <strong>Subventionerad barnomsorg:</strong> Förskola och fritidshem med
            avgiftstak (maxtaxa).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Arbetsmarknadspolitik</h3>
        <ul className={classes.list}>
          <li>
            <strong>Arbetsförmedlingen:</strong> Ansvarar för att matcha arbetssökande
            med lediga jobb och ger stöd till grupper som har svårt att etablera sig på
            arbetsmarknaden (t.ex. personer med funktionsnedsättning, nyanlända,
            långtidsarbetslösa).
          </li>
          <li>
            <strong>A-kassa (Arbetslöshetskassa):</strong> Inkomstbaserad ersättning vid
            arbetslöshet. Kräver medlemskap och att man uppfyller vissa villkor
            (t.ex. arbetat en viss tid).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Sjukvård och sjukförsäkring</h3>
        <ul className={classes.list}>
          <li>
            <strong>Sjukpenning:</strong> Ersätter inkomstbortfall vid sjukdom.
            Inkomstbaserad (ca 80% av lönen). Betalas ut av Försäkringskassan.
          </li>
          <li>
            <strong>Sjukvård:</strong> Subventioneras via skatter. Patientavgifter är
            låga jämfört med den verkliga kostnaden.
          </li>
          <li>
            <strong>Högkostnadsskydd:</strong> Skyddar mot höga kostnader för
            läkarbesök och mediciner (frikort).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Äldreomsorg och pension</h3>
        <ul className={classes.list}>
          <li>
            <strong>Pensionssystemet (tre delar):</strong>
            <ol className={classes.list}>
              <li>
                <strong>Inkomstpension:</strong> Den största delen, baserad på din
                livsinkomst. Pengarna kommer från arbetsgivaravgifterna.
              </li>
              <li>
                <strong>Premiepension (PPM):</strong> En del av inkomstpensionen som
                du själv kan placera i fonder.
              </li>
              <li>
                <strong>Garantipension:</strong> Grundläggande skydd för den som haft
                låg eller ingen inkomst. Behovsprövas delvis. Betalas ut från 66 års
                ålder.
              </li>
            </ol>
          </li>
          <li>
            <strong>Tjänstepension:</strong> Extra pension som betalas av arbetsgivaren
            (enligt kollektivavtal). Mycket viktig för de flesta löntagare.
          </li>
          <li>
            <strong>Äldreomsorg:</strong> Hemtjänst, serviceboende, äldreboende.
            Avgiftsbelagda men subventioneras via skatten.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Försörjningsstöd (Socialbidrag)</h3>
        <ul className={classes.list}>
          <li>
            <strong>Försörjningsstöd:</strong> Det sista steget i det sociala
            skyddsnätet. Ekonomiskt bistånd som ges tillfälligt till den som inte kan
            försörja sig på egen hand.
          </li>
          <li>
            <strong>Villkor:</strong> Hanteras av socialtjänsten i kommunen. Kräver
            utredning av ekonomi och livssituation. Den sökande får inte ha tillgångar
            (aktier, banktillgångar) och måste stå till arbetsmarknadens förfogande.
          </li>
        </ul>
      </section>

      {/* ===== 3. FINANSIERING AV VÄLFÄRDEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. FINANSIERING AV VÄLFÄRDEN</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver hur den svenska välfärden finansieras.
        </p>

        <h3 className={classes.subHeading}>Offentlig sektor</h3>
        <ul className={classes.list}>
          <li>
            Stat, regioner och kommuner finansierar välfärden genom <strong>skatter
            och avgifter</strong>.
          </li>
          <li>
            <strong>Progressivt skattesystem:</strong> De med högre inkomster betalar
            en högre andel i skatt än de med lägre inkomster (omfördelning).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Vanliga skatter och avgifter</h3>
        <ul className={classes.list}>
          <li>
            <strong>Kommunalskatt:</strong> Betalas till kommunen (och regionen). Den
            största skatten för de flesta.
          </li>
          <li>
            <strong>Statlig inkomstskatt:</strong> Betalas av dem med höga inkomster
            (över en viss gräns).
          </li>
          <li>
            <strong>Moms (mervärdesskatt):</strong> Skatt på konsumtion (varor och
            tjänster). Standard 25%.
          </li>
          <li>
            <strong>Punktskatt:</strong> Skatt på specifika varor som alkohol, tobak,
            bensin (syftar ofta att styra konsumtion eller öka priset).
          </li>
          <li>
            <strong>Arbetsgivaravgift:</strong> Avgift som arbetsgivare betalar för
            sina anställda (ca 31,42% av bruttolönen). Används främst till pension och
            socialförsäkringar (sjukpenning, föräldrapenning etc.).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Socialförsäkringar</h3>
        <ul className={classes.list}>
          <li>
            Systemet där alla bidrar (via skatter/avgifter) och alla kan få ersättning
            vid behov (sjukdom, arbetslöshet, föräldraledighet etc.).
          </li>
        </ul>
      </section>

      {/* ===== 4. PRIVATISERING AV VÄLFÄRDEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. PRIVATISERING AV VÄLFÄRDEN</h2>
        <p className={classes.paragraph}>
          Detta avsnitt handlar om vinstdrivande aktörer inom välfärdssektorn.
        </p>

        <h3 className={classes.subHeading}>Vad är privatisering?</h3>
        <ul className={classes.list}>
          <li>
            Sedan 1990-talet har privata företag fått möjlighet att driva
            välfärdstjänster som skolor, äldreboenden och vårdcentraler, med
            <strong>offentlig finansiering</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Argument FÖR vinstdrivande företag i välfärden</h3>
        <ul className={classes.list}>
          <li>
            <strong>Effektivitet:</strong> Privata företag är ofta mer effektiva och
            kostnadsmedvetna.
          </li>
          <li>
            <strong>Valfrihet:</strong> Medborgarna får större frihet att välja mellan
            olika utförare.
          </li>
          <li>
            <strong>Innovation:</strong> Privata aktörer kan driva utvecklingen framåt
            med nya idéer.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Argument EMOT vinstdrivande företag i välfärden</h3>
        <ul className={classes.list}>
          <li>
            <strong>Vinstintresse vs. kvalitet:</strong> Risken att kvaliteten sjunker
            när fokus hamnar på att maximera vinst istället för att ge bästa möjliga
            vård/omsorg/undervisning.
          </li>
          <li>
            <strong>Ojämlikhet:</strong> Kan leda till större skillnader mellan olika
            områden och grupper.
          </li>
          <li>
            <strong>"Skattesmitning":</strong> Vinsterna kan gå till ägare i andra
            länder istället för att återinvesteras i verksamheten.
          </li>
          <li>
            <strong>Brist på insyn:</strong> Privata företag är inte lika öppna för
            offentlig granskning som offentliga verksamheter.
          </li>
        </ul>
      </section>

      {/* ===== 5. UTMANINGAR FÖR VÄLFÄRDSSAMHÄLLET ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. UTMANINGAR FÖR VÄLFÄRDSSAMHÄLLET</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver de största utmaningarna som välfärdssamhället står
          inför.
        </p>

        <h3 className={classes.subHeading}>Åldrande befolkning</h3>
        <ul className={classes.list}>
          <li>
            Vi lever allt längre, vilket innebär att allt <strong>färre yrkesverksamma</strong>
            (som betalar skatt) ska försörja allt <strong>fler pensionärer</strong>
            (som kostar pengar).
          </li>
          <li>
            <strong>Konsekvens:</strong> Risk för ökad press på pensionssystemet,
            sjukvården och äldreomsorgen.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Glesbygdsproblem</h3>
        <ul className={classes.list}>
          <li>
            I glesbygdskommuner minskar befolkningen (unga flyttar till storstäder),
            samtidigt som andelen äldre ökar.
          </li>
          <li>
            <strong>Konsekvens:</strong> Svårare att upprätthålla samma nivå på
            välfärdstjänster (skolor, vårdcentraler, äldreomsorg) med färre
            skattebetalare.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Bidragsfusk och välfärdsbrott</h3>
        <ul className={classes.list}>
          <li>
            Att medvetet fuska med bidrag (t.ex. jobba svart samtidigt som man får
            sjukpenning eller arbetslöshetsersättning) <strong>undergräver
            förtroendet</strong> för välfärdssystemet.
          </li>
          <li>
            <strong>Konsekvens:</strong> Minskat förtroende kan leda till att legitima
            bidragstagare misstänkliggörs och att politiker skärper reglerna.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Skuggsamhället</h3>
        <ul className={classes.list}>
          <li>
            <strong>Papperslösa</strong> (personer utan uppehållstillstånd) lever
            utanför välfärdssystemets skyddsnät.
          </li>
          <li>
            <strong>Konsekvens:</strong> De utnyttjas ofta på arbetsmarknaden
            (svartjobb, slavliknande förhållanden) och har ingen tillgång till
            sjukvård eller socialt stöd.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Desinformation (t.ex. LVU-kampanjen)</h3>
        <ul className={classes.list}>
          <li>
            Desinformationskampanjer (som LVU-kampanjen, som påstod att socialtjänsten
            "kidnappar" barn) kan skapa <strong>misstro mot myndigheter</strong> och
            leda till att utsatta grupper inte söker det stöd de har rätt till.
          </li>
        </ul>
      </section>

      {/* ===== 6. FRÅGOR TILL TEXTEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. FRÅGOR TILL TEXTEN</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            1. Beskriv de viktigaste komponenterna i de tre välfärdsmodellerna.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>a) Konservativa modellen:</strong> Familjen har stor betydelse.
                Staten går bara in när familjen inte räcker till. Bidrag är ofta
                behovsprövade och baserade på arbete. Upprätthåller klasskillnader.
              </li>
              <li>
                <strong>b) Liberala modellen:</strong> Statens roll är minimal.
                Marknaden och privata initiativ ska lösa välfärdsbehov. Välfärdstjänster
                riktas till de fattigaste. Låga skatter och svagt skyddsnät.
              </li>
              <li>
                <strong>c) Socialdemokratiska modellen:</strong> Universella bidrag
                som gäller alla. Hög omfördelning via skatter. Staten tar stort ansvar
                för medborgarnas välfärd från "vagga till grav".
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>2. Ge exempel på:</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>a) Ett generellt bidrag:</strong> Barnbidrag (betalas till alla
                familjer med barn).
              </li>
              <li>
                <strong>b) Ett behovsprövat bidrag:</strong> Försörjningsstöd,
                garantipension (prövas utifrån behov).
              </li>
              <li>
                <strong>c) Ett bidrag som kompenserar för inkomstbortfall:</strong>
                Sjukpenning, föräldrapenning, arbetslöshetsersättning (A-kassa).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. Vilket stöd kan grupper som har svårt att etablera sig på arbetsmarknaden få?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Stöd från <strong>Arbetsförmedlingen</strong> som t.ex.:
            </p>
            <ul className={classes.list}>
              <li>Arbetsmarknadsutbildningar</li>
              <li>Praktikplatser</li>
              <li>Lönebidrag</li>
              <li>Särskilda insatser för personer med funktionsnedsättning</li>
              <li>Nyanlända etableringsinsatser</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. Beskriv de olika delarna i pensionssystemet.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Inkomstpension:</strong> Baseras på livsinkomsten. Den största
                delen av pensionen.
              </li>
              <li>
                <strong>Premiepension (PPM):</strong> En del av inkomstpensionen som
                du själv kan placera i fonder.
              </li>
              <li>
                <strong>Garantipension:</strong> Grundskydd för den som haft låg eller
                ingen inkomst. Behovsprövas delvis.
              </li>
              <li>
                <strong>Tjänstepension:</strong> Extra pension från arbetsgivaren
                (enligt kollektivavtal).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>5. Vad innebär försörjningsstöd?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Försörjningsstöd</strong> (även kallat socialbidrag) är
              ekonomiskt bistånd som ges tillfälligt till den som inte kan försörja
              sig på egen hand. Det är det <strong>sista steget</strong> i det sociala
              skyddsnätet och hanteras av socialtjänsten i kommunen.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. Sverige har ett progressivt skattesystem. Vad betyder det?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det innebär att de med <strong>högre inkomster</strong> betalar en
              <strong>högre andel</strong> i skatt än de med lägre inkomster. Detta
              bidrar till <strong>omfördelning</strong> av resurser.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>7. Vad är syftet med punktskatt?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Punktskatt</strong> är en extra skatt på specifika varor som
              alkohol, tobak och bensin. Syftet är ofta att:
            </p>
            <ul className={classes.list}>
              <li>Minska konsumtionen av dessa varor (hälsoskäl, miljöskäl)</li>
              <li>Öka priset för att styra beteendet</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. Vad innebär den privatisering av välfärden som inleddes på 1990-talet?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det innebär att <strong>privata företag</strong> har fått möjlighet att
              driva välfärdstjänster (som skolor, äldreboenden och vårdcentraler) med
              <strong>offentlig finansiering</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. Nämn några vanliga argument för och emot vinstdrivande företag inom
            välfärdssektorn.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> Effektivitet, valfrihet för medborgarna,
                innovation och utveckling.
              </li>
              <li>
                <strong>Emot:</strong> Vinstintresse kan gå före kvalitet, ökade
                klyftor, vinsterna kan gå utomlands och brist på insyn.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. Varför innebär det faktum att vi lever längre en utmaning för välfärden?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Fler <strong>pensionärer</strong> (som kostar pengar) ska försörjas av
              färre <strong>yrkesverksamma</strong> (som betalar skatt). Detta skapar
              press på pensionssystemet, sjukvården och äldreomsorgen.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. Varför är det svårt att upprätthålla nivån på välfärden i
            glesbygdskommuner?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Unga flyttar till storstäder, vilket <strong>minskar skattebasen</strong>
              och antalet arbetande, samtidigt som andelen äldre som behöver
              välfärdstjänster ökar.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. Nämn några orsaker till att människor som borde ha rätt till stöd
            tvingas ta hjälp av ideella organisationer.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>Bristande information om rättigheter</li>
              <li>Långa handläggningstider</li>
              <li>Administrativa hinder</li>
              <li>Rädsla för myndigheter</li>
              <li>Språksvårigheter</li>
              <li>Att ens behov inte täcks av det offentliga systemet</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. Hur påverkar bidragsfusk och välfärdsbrott förtroendet för
            välfärdsstaten?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det <strong>undergräver förtroendet</strong> för systemet och kan leda
              till att allmänheten misstänkliggör legitima bidragstagare och att
              politiker inför strängare regler, vilket kan göra det svårare för dem
              som verkligen behöver stöd.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. På vilket sätt kan desinformationskampanjer som LVU-kampanjen leda
            till att grupper ställs utanför välfärdssamhället?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Desinformation skapar <strong>rädsla och misstro</strong> mot myndigheter
              som socialtjänsten. Utsatta grupper (t.ex. invandrare) kan då undvika
              att söka det stöd de har rätt till, av rädsla för att myndigheterna ska
              "ta" deras barn.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 7. ANALYSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. ANALYSFRÅGOR</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. Analysera hur svartjobb påverkar möjligheten att ta del av förmåner
            från det svenska välfärdssystemet.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Barn- och familjepolitik:</strong> Svartjobb innebär att man
                inte rapporterar in sin inkomst. Detta påverkar föräldrapenningen
                (lägre eller ingen ersättning) och underhållsstödet (kan bli felaktigt).
              </li>
              <li>
                <strong>Arbetsmarknadspolitik:</strong> Man får ingen A-kassa eller
                aktivitetsstöd baserat på svartarbete, eftersom dessa är inkomstbaserade.
              </li>
              <li>
                <strong>Sjukvård och sjukförsäkring:</strong> Sjukpenningen baseras på
                den rapporterade inkomsten. Svartjobb leder till lägre sjukpenning
                eller att man inte kvalificerar sig alls.
              </li>
              <li>
                <strong>Äldreomsorg och pension:</strong> Inkomstpensionen och
                premiepensionen baseras på livsinkomsten. Svartjobb ger lägre pension
                (och ingen tjänstepension). Garantipensionen påverkas mindre.
              </li>
              <li>
                <strong>Slutsats:</strong> Svartjobb leder till <strong>lägre
                ersättningar</strong> från nästan alla inkomstbaserade socialförsäkringar.
                Det är alltså en <strong>dålig affär på lång sikt</strong>, men kan
                kännas lockande på kort sikt för att få mer pengar i handen direkt.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. Analysera hur inkomstbaserade bidrag påverkar kvinnor som väljer att
            vara hemma med barnen eller jobba deltid.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Sjukpenning:</strong> Lägre inkomst → lägre sjukpenning vid
                sjukdom.
              </li>
              <li>
                <strong>Föräldrapenning:</strong> Lägre inkomst → lägre
                föräldrapenning. Detta kan påverka kvinnors val att vara hemma
                (ekonomiskt tryck att gå tillbaka till jobbet tidigare).
              </li>
              <li>
                <strong>Pension:</strong> Lägre livsinkomst → lägre inkomstpension
                och premiepension. Färre år i arbetslivet (eller deltid) ger också
                lägre pension. Detta är en av orsakerna till att kvinnor ofta har
                <strong>lägre pension än män</strong> ("pensionsgapet").
              </li>
              <li>
                <strong>Slutsats:</strong> Det svenska systemet, med inkomstbaserade
                bidrag, <strong>missgynnar kvinnor</strong> som i högre utsträckning
                än män arbetar deltid eller tar ut föräldraledighet. Detta kan bidra
                till att cementera ekonomiska skillnader mellan könen.
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
            D1. Vilka tror ni är de viktigaste skälen till den sjunkande nativiteten?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Ekonomisk osäkerhet:</strong> Dyrt att skaffa barn (boende,
                barnomsorg, försörjning).
              </li>
              <li>
                <strong>Karriär och utbildning:</strong> Många skjuter upp
                barnafödande till förmån för studier och karriär.
              </li>
              <li>
                <strong>Bostadsbrist:</strong> Svårt att hitta en tillräckligt stor
                och prisvärd bostad.
              </li>
              <li>
                <strong>Samhällsoro:</strong> Klimatångest, oro för framtiden,
                världsläget.
              </li>
              <li>
                <strong>Förändrade normer:</strong> Fler väljer att leva singelliv
                eller att inte skaffa barn alls (frivillig barnlöshet).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. Vård av barn och äldre – statligt ansvar eller anhörigansvar?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Socialdemokratisk modell (statligt ansvar):</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Fördelar:</strong> Frigör kvinnor från traditionella roller,
                främjar jämställdhet, säkerställer kvalitet och tillgänglighet för
                alla oavsett familjesituation.
              </li>
              <li>
                <strong>Nackdelar:</strong> Höga skatter, risk för institutionsvård
                istället för hemmiljö.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Konservativ modell (anhörigansvar):</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Fördelar:</strong> Nära relationer, lägre skatter, stärker
                familjebanden.
              </li>
              <li>
                <strong>Nackdelar:</strong> Kvinnor (oftast) bär huvudbördan, mindre
                valfrihet, risk för att äldre far illa om anhöriga inte orkar eller kan.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>D3. Är det en lösning att höja pensionsåldern?</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> Ökar antalet yrkesverksamma som betalar skatt,
                minskar antalet pensionärer (kostnad), systemet blir mer hållbart.
              </li>
              <li>
                <strong>Emot:</strong> Svårt för personer med fysiskt eller psykiskt
                krävande jobb att orka arbeta längre. Kräver anpassningar på
                arbetsplatser och bättre arbetsmiljö.
              </li>
              <li>
                <strong>Slutsats:</strong> Höjd pensionsålder är en del av lösningen,
                men måste kombineras med andra åtgärder som bättre arbetsmiljö,
                förbättrad hälsa och högre invandring.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>D4. Diskutera vinster i välfärden.</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Fördelar med vinstdrivande företag:</strong>
            </p>
            <ul className={classes.list}>
              <li>Ökad effektivitet och konkurrens, vilket kan sänka kostnaderna.</li>
              <li>Ökad valfrihet för medborgarna.</li>
              <li>Innovation och nytänkande.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Nackdelar:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Vinstintresse kan leda till sämre kvalitet (mindre personal, sämre
                mat etc.).
              </li>
              <li>
                Risk att skattepengar hamnar i utländska ägares fickor istället för
                att återinvesteras i verksamheten.
              </li>
              <li>
                Ökad ojämlikhet – privata aktörer kan "plocka russinen ur kakan" och
                lämna de svåraste/dyraste fallen till det offentliga.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> Frågan är komplex. Det handlar om balans –
              hur man kan ta tillvara på privata aktörers fördelar samtidigt som man
              garanterar kvalitet, likvärdighet och insyn.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>D5. Hur allvarligt är bidragsfusk?</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Allvarligt:</strong> Undergräver förtroendet för
                välfärdssystemet. Om alla fuskar, faller systemet samman. Pengarna
                som försvinner kunde ha använts till bättre vård, skola och omsorg.
              </li>
              <li>
                <strong>Mindre allvarligt:</strong> Vissa ser det som "småfusk"
                (t.ex. att jobba några timmar svart medan man är sjukskriven). De
                menar att systemet är krångligt och att fusk är en sorts protest
                eller överlevnadsstrategi.
              </li>
              <li>
                <strong>Slutsats:</strong> Oavsett hur man ser på det är bidragsfusk
                <strong>olagligt och skadligt för samhället</strong>. Det minskar
                resurserna för dem som verkligen behöver hjälp och skapar misstro.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 9. NYCKELORD ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. NYCKELORD</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>Arbetsgivaravgift:</span> En avgift
            (ca 31,42% av bruttolönen) som arbetsgivare betalar för varje anställd.
            Används till pension, sjukförsäkring, föräldraförsäkring och andra
            socialförsäkringar.
          </li>
          <li>
            <span className={classes.keyword}>Behovsprövade bidrag:</span> Bidrag som
            endast betalas ut till den som kan visa att de har ett ekonomiskt behov
            (t.ex. försörjningsstöd, garantipension).
          </li>
          <li>
            <span className={classes.keyword}>Försörjningsstöd:</span> Ekonomiskt
            bistånd från socialtjänsten till den som inte kan försörja sig själv.
            Det sista skyddsnätet.
          </li>
          <li>
            <span className={classes.keyword}>Generella bidrag:</span> Bidrag som
            betalas ut till alla, utan prövning av behov (t.ex. barnbidrag).
          </li>
          <li>
            <span className={classes.keyword}>Inkomstbaserade bidrag:</span> Bidrag
            som baseras på din tidigare inkomst (t.ex. sjukpenning, föräldrapenning,
            A-kassa).
          </li>
          <li>
            <span className={classes.keyword}>Kommunalskatt:</span> Den skatt som
            betalas till kommunen och regionen. Varierar mellan olika kommuner.
          </li>
          <li>
            <span className={classes.keyword}>Moms (mervärdesskatt):</span> Skatt på
            konsumtion (varor och tjänster). Standardnivå är 25%.
          </li>
          <li>
            <span className={classes.keyword}>Offentlig sektor:</span> Den del av
            ekonomin som finansieras av skatter och drivs av stat, regioner och
            kommuner (välfärdstjänster).
          </li>
          <li>
            <span className={classes.keyword}>Premiepension (PPM):</span> En del av
            den allmänna pensionen som du själv kan placera i fonder.
          </li>
          <li>
            <span className={classes.keyword}>Privatisering:</span> Att privata
            företag ges möjlighet att driva verksamheter som tidigare drivits av det
            offentliga (t.ex. skolor, vårdcentraler).
          </li>
          <li>
            <span className={classes.keyword}>Progressivt skattesystem:</span> De med
            högre inkomster betalar en högre andel i skatt än de med lägre inkomster.
          </li>
          <li>
            <span className={classes.keyword}>Punktskatt:</span> Extra skatt på
            specifika varor som alkohol, tobak och bensin, ofta för att styra
            konsumtionen.
          </li>
          <li>
            <span className={classes.keyword}>Socialförsäkringar:</span>
            Försäkringssystem som finansieras via skatter/avgifter och ger ersättning
            vid sjukdom, arbetslöshet, föräldraledighet etc.
          </li>
          <li>
            <span className={classes.keyword}>Tjänstepension:</span> Extra pension
            som betalas av arbetsgivaren enligt kollektivavtal. Mycket viktig för de
            flesta löntagare.
          </li>
          <li>
            <span className={classes.keyword}>Välfärdsmodeller:</span> Olika sätt att
            organisera välfärden (konservativ, liberal, socialdemokratisk).
          </li>
          <li>
            <span className={classes.keyword}>Välfärdstjänster:</span> Tjänster som
            finansieras av det offentliga (skola, sjukvård, äldreomsorg, barnomsorg
            etc.).
          </li>
        </ul>
      </section>
    </div>
  );
}