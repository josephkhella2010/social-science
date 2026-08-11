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

export default function TemplateLessonNine() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>KAPITEL 9: STATSSKICK I ANDRA LÄNDER</h1>
      <p className={classes.subtitle}>
        Fullständig sammanfattning med frågor, analys, diskussion och nyckelord
      </p>

      {/* ===== 1. MONARKI OCH REPUBLIK ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. MONARKI OCH REPUBLIK</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver de två huvudsakliga statsskicken i världen: monarki och republik.
          Skillnaden avgörs av hur statschefen utses och vilken makt denne har.
        </p>

        <h3 className={classes.subHeading}>Monarki</h3>
        <ul className={classes.list}>
          <li>
            I en monarki är statschefen en <strong>monark</strong> (kung, drottning, kejsare eller furste).
          </li>
          <li>
            <strong>Vad avgör om ett land är monarki?</strong> I en monarki är statschefen en monark,
            medan statschefen i en republik är en <strong>president</strong>.
          </li>
          <li>
            <strong>Ärftlig monarki:</strong> Monarken ärver sin position enligt en tronföljd. De flesta
            monarkier i Europa idag är <strong>konstitutionella monarkier</strong>.
          </li>
          <li>
            <strong>Valsystem:</strong> I monarkier är tronföljden ärftlig, inte valbar.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Absolut monarki</h3>
        <ul className={classes.list}>
          <li>
            Monarken har all <strong>verklig politisk makt</strong> och styr landet utan inskränkningar.
          </li>
          <li>
            <strong>Exempel:</strong> Saudiarabien, Qatar, Oman, Förenade Arabemiraten och Brunei.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Konstitutionell monarki</h3>
        <ul className={classes.list}>
          <li>
            Monarken har endast <strong>ceremoniella uppgifter</strong>, medan den verkliga makten
            utövas av folkvalda politiker.
          </li>
          <li>
            <strong>Exempel:</strong> Sverige, Storbritannien, Norge, Danmark, Nederländerna, Belgien,
            Spanien och Japan.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Republik</h3>
        <ul className={classes.list}>
          <li>
            Statsskick där statschefen är en <strong>president</strong> som väljs antingen direkt av folket
            eller av parlamentet.
          </li>
          <li>
            <strong>Presidentens makt varierar:</strong> I parlamentariska republiker är presidentens roll
            ceremoniell, medan presidenten i presidentstyrda republiker har verklig makt.
          </li>
          <li>
            <strong>Exempel på republiker:</strong> USA, Frankrike, Tyskland, Finland och Italien.
          </li>
        </ul>
      </section>

      {/* ===== 2. STATSSKICK – PARLAMENTARISM OCH PRESIDENTSTYRE ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. STATSSKICK – PARLAMENTARISM OCH PRESIDENTSTYRE</h2>
        <p className={classes.paragraph}>
          Detta avsnitt förklarar hur makten fördelas mellan statschef, regering och parlament i olika
          statsskick.
        </p>

        <h3 className={classes.subHeading}>Parlamentarism</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Ett statsskick där <strong>regeringen</strong> måste ha
            <strong>förtroende</strong> från <strong>parlamentet</strong> (folket) för att kunna sitta kvar.
          </li>
          <li>
            <strong>Regeringen:</strong> Leds av en <strong>statsminister</strong> (eller
            premiärminister/kansler) som utses av statschefen men måste godkännas av parlamentet.
          </li>
          <li>
            <strong>Misstroendeförklaring:</strong> Om parlamentet röstar emot regeringen i en
            förtroendeomröstning, måste regeringen <strong>avgå</strong>.
          </li>
          <li>
            <strong>Exempel:</strong> Sverige, Storbritannien, Tyskland, Finland, Danmark och Norge.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Presidentstyre</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Ett statsskick där <strong>presidenten</strong> har den verkliga
            makten och inte är beroende av parlamentet för att sitta kvar.
          </li>
          <li>
            <strong>Presidentens roll:</strong> Presidenten är både <strong>statschef</strong> och
            <strong>regeringschef</strong> och utser själv regeringsmedlemmar.
          </li>
          <li>
            <strong>Maktdelning:</strong> Presidenten och parlamentet väljs separat av folket, vilket
            innebär att de kan tillhöra olika partier (<strong>"cohabitation"</strong>).
          </li>
          <li>
            <strong>Exempel:</strong> USA, Ryssland, Brasilien, Mexiko och Sydkorea.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Semipresidentiellt system</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> En blandning av parlamentarism och presidentstyre där landet har
            <strong>både</strong> en president (vald av folket) och en premiärminister (som utses av
            presidenten).
          </li>
          <li>
            <strong>Frankrike:</strong> Presidenten utser premiärministern, men det är <strong>parlamentet</strong>,
            inte presidenten, som kan avsätta premiärministern. Presidenten är tongivande i försvars- och
            utrikespolitik.
          </li>
          <li>
            <strong>Exempel:</strong> Frankrike, Ryssland, Portugal, Finland (före 2000) och Ukraina.
          </li>
        </ul>
      </section>

      {/* ===== 3. PARTISYSTEM ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. PARTISYSTEM</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver olika partisystem och deras kännetecken.
        </p>

        <h3 className={classes.subHeading}>Partiernas uppgifter</h3>
        <ul className={classes.list}>
          <li>
            <strong>Producera uppfattningar:</strong> Formulera politiska idéer och program.
          </li>
          <li>
            <strong>Utseda kandidater:</strong> Nominera personer till politiska poster.
          </li>
          <li>
            <strong>Propagera:</strong> Föra ut sina idéer och vinna stöd från väljarna.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Tvåpartisystem</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Ett system där <strong>två partier</strong> växlar vid makten.
          </li>
          <li>
            <strong>Orsak:</strong> Förekommer ofta i länder med <strong>majoritetsval</strong> (t.ex. USA och
            Storbritannien).
          </li>
          <li>
            <strong>USA:</strong> Demokraterna och Republikanerna växlar vid makten.
          </li>
          <li>
            <strong>Storbritannien:</strong> Labour och de konservativa (Tories) har växlat vid makten sedan
            början av 1900-talet.
          </li>
          <li>
            <strong>Regionala partier:</strong> Även i tvåpartisystem kan det finnas regionala partier, som
            Scottish National Party i Skottland eller Plaid Cymru i Wales.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Enpartisystem</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Endast <strong>ett parti</strong> är tillåtet att verka och inneha
            makten.
          </li>
          <li>
            <strong>Förekomst:</strong> I diktaturer, t.ex. Kina (Kommunistiska partiet), Nordkorea, Vietnam
            och Kuba.
          </li>
          <li>
            <strong>Demokrati:</strong> Det finns inget land där enpartisystem har gått att förena med demokrati
            i västerländsk mening.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Flerpartisystem</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Flera partier är representerade i parlamentet.
          </li>
          <li>
            <strong>Demokratier:</strong> Sverige, Tyskland, Finland, Danmark och Nederländerna.
          </li>
          <li>
            <strong>Diktaturer:</strong> Ryssland, Belarus, Tanzania och andra afrikanska stater – i praktiken
            fungerar dessa som enpartistater eftersom det styrande partiet motarbetar oppositionen.
          </li>
        </ul>

        <h3 className={classes.subHeading}>"Nollpartisystem"</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Länder där det <strong>inte finns några politiska partier</strong>.
          </li>
          <li>
            <strong>Förekomst:</strong> Främst muslimska länder i Mellanöstern, t.ex. Saudiarabien, Qatar,
            Jordanien och Bahrain.
          </li>
          <li>
            <strong>Styre:</strong> Det politiska livet domineras av de härskande familjerna.
          </li>
        </ul>
      </section>

      {/* ===== 4. VALSYSTEM ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. VALSYSTEM</h2>
        <p className={classes.paragraph}>
          Detta avsnitt behandlar de två huvudsakliga valsystemen: <strong>majoritetsval</strong> och
          <strong>proportionella val</strong>.
        </p>

        <h3 className={classes.subHeading}>Majoritetsval</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Den kandidat som får <strong>flest röster</strong> i valkretsen vinner
            mandatet.
          </li>
          <li>
            <strong>Enmansvalkretsar:</strong> Indien, Australien, Frankrike, USA, Kanada och Storbritannien
            (även Sverige före 1911).
          </li>
          <li>
            <strong>Fördelar:</strong>
            <ul className={classes.list}>
              <li>Klar majoritet i parlamentet → enklare att bilda regering.</li>
              <li>Starkt <strong>personval</strong> – kandidater måste vara lyhörda för väljarna.</li>
            </ul>
          </li>
          <li>
            <strong>Nackdelar:</strong>
            <ul className={classes.list}>
              <li>Missgynnar små partier.</li>
              <li>Lägre kvinnlig representation (personval gynnar ofta män).</li>
            </ul>
          </li>
          <li>
            <strong>Frankrike – majoritetsval i två omgångar:</strong> Om ingen kandidat får 50% i första
            omgången, går de två främsta vidare till en andra omgång. Krävs minst 12,5% för att gå vidare.
          </li>
          <li>
            <strong>Presidentvalet i USA 2024:</strong> Ett indirekt val där <strong>elektorer</strong> (538
            totalt) utser presidenten. "The winner takes it all" i de flesta delstater. Donald Trump vann
            med 312 elektorsröster mot Kamala Harris 226.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Proportionella val</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Partier får mandat i proportion till sin andel av rösterna.
          </li>
          <li>
            <strong>Vanligaste metoden i världen:</strong> Tillämpas i Sverige och de flesta europeiska
            länder.
          </li>
          <li>
            <strong>Fördelar:</strong>
            <ul className={classes.list}>
              <li>Rättvisare fördelning av mandat.</li>
              <li>Fler partier representeras → bättre speglar folkviljan.</li>
              <li>Bättre kvinnlig representation.</li>
            </ul>
          </li>
          <li>
            <strong>Nackdelar:</strong>
            <ul className={classes.list}>
              <li>Svårare att bilda stark regering (koalitionsregeringar).</li>
              <li>Risk för partisplittring.</li>
            </ul>
          </li>
          <li>
            <strong>Spärrar (trösklar):</strong> För att hindra småpartier: Danmark 2%, Sverige 4%, Tyskland
            5%, Turkiet 7%. Finland och Nederländerna saknar spärr.
          </li>
          <li>
            <strong>Tyskland:</strong> Kombinerar proportionella val med personval. Väljarna röstar på både
            ett parti (andrarösten) och en kandidat (förstarösten).
          </li>
        </ul>
      </section>

      {/* ===== 5. FEDERALISM OCH ENHETSSTAT ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. FEDERALISM OCH ENHETSSTAT</h2>
        <p className={classes.paragraph}>
          Detta avsnitt förklarar skillnaden mellan federala stater och enhetsstater.
        </p>

        <h3 className={classes.subHeading}>Federalism (Förbundsstat)</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> En stat där makten är <strong>delad</strong> mellan en central
            regering och <strong>självstyrande delstater</strong>.
          </li>
          <li>
            <strong>Exempel i Europa:</strong> Tyskland (16 delstater), Österrike (9 delstater), Belgien
            (regioner och gemenskaper), Schweiz (26 kantoner).
          </li>
          <li>
            <strong>Exempel utanför Europa:</strong> USA (50 delstater), Indien, Brasilien, Australien,
            Kanada och Ryssland.
          </li>
          <li>
            <strong>Maktdelning:</strong> Grundlagen anger vilka områden som tillhör centralmakten och vilka
            som tillhör delstaterna (t.ex. utbildning, polis, infrastruktur).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Enhetsstat (Unionsstat)</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> En stat där den <strong>centrala regeringen</strong> har den
            yttersta makten och kan besluta om eventuell självstyrelse för regioner.
          </li>
          <li>
            <strong>Exempel:</strong> Sverige, Frankrike, Storbritannien, Danmark, Finland och Norge.
          </li>
          <li>
            <strong>Regioner:</strong> Kan ha viss självstyrelse (som Sveriges regioner), men makten utgår
            från centralregeringen.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Tvåkammarsystem</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Ett parlament med <strong>två kamrar</strong> (överhus och underhus).
          </li>
          <li>
            <strong>Orsaker:</strong>
            <ol className={classes.list}>
              <li>
                <strong>Historiska skäl:</strong> Adelns och prästerskapets kammare (överhus) vs
                allmänhetens kammare (underhus).
              </li>
              <li>
                <strong>Federala stater:</strong> Delstaterna representeras i en kammare (t.ex. USA:s
                senat) och folket i den andra (t.ex. USA:s representanthus).
              </li>
            </ol>
          </li>
          <li>
            <strong>Exempel:</strong> Storbritannien (underhuset och överhuset), USA (representanthuset
            och senaten), Tyskland (förbundsdagen och förbundsrådet), Frankrike (nationalförsamlingen och
            senaten).
          </li>
          <li>
            <strong>Enkammarsystem:</strong> Sverige, Finland, Danmark, Norge och Portugal.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Maktdelningen i USA</h3>
        <ul className={classes.list}>
          <li>
            <strong>Grund:</strong> Bygger på Montesquieus tankar om <strong>maktdelning</strong> – den
            styrande, lagstiftande och dömande makten ska balansera varandra.
          </li>
          <li>
            <strong>Tre grenar:</strong>
            <ol className={classes.list}>
              <li>
                <strong>Presidenten (verkställande makt):</strong> Utför och genomför lagar.
              </li>
              <li>
                <strong>Kongressen (lagstiftande makt):</strong> Består av representanthuset och senaten.
                Beslutar om lagar och budgeten.
              </li>
              <li>
                <strong>Högsta domstolen (dömande makt):</strong> Prövar lagars förenlighet med
                konstitutionen.
              </li>
            </ol>
          </li>
          <li>
            <strong>Checks and balances:</strong> Varje gren har möjlighet att kontrollera de andra
            (t.ex. presidentens veto, senatens godkännande av domare och traktater).
          </li>
        </ul>
      </section>

      {/* ===== 6. FRÅGOR TILL TEXTEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. FRÅGOR TILL TEXTEN</h2>

        {/* Fråga 1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>1. Vad avgör om ett land är monarki eller republik?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det avgörs av <strong>vem som är statschef</strong> och <strong>hur denna utses</strong>:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Monarki:</strong> Statsskick där statschefen är en <strong>monark</strong> (kung,
                drottning, kejsare eller furste). Tronföljden är ärftlig (utom i Vatikanstaten, där påven
                väljs av kardinaler).
              </li>
              <li>
                <strong>Republik:</strong> Statsskick där statschefen är en <strong>president</strong> som
                väljs antingen direkt av folket eller av parlamentet.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. Ge exempel på monarkier dels där monarken endast har ceremoniell makt, dels där monarken har
            verklig makt.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Ceremoniell makt (konstitutionella monarkier):</strong> Sverige, Storbritannien,
                Norge, Danmark, Nederländerna, Belgien, Spanien och Japan. Monarken är statschef men har
                inget politiskt inflytande.
              </li>
              <li>
                <strong>Verklig makt (absoluta monarkier):</strong> Saudiarabien, Qatar, Oman, Förenade
                Arabemiraten och Brunei. Monarken styr landet utan inskränkningar.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. Vilka statschefer nämns med namn i det här kapitlet och vilken titel har de?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Donald Trump (USA):</strong> President (tillträdde 2025 efter valet 2024).
              </li>
              <li>
                <strong>Kamala Harris (USA):</strong> Vicepresident (förlorade presidentvalet 2024).
              </li>
              <li>
                <strong>Joe Biden (USA):</strong> President (avgick från presidentkampanjen 2024).
              </li>
              <li>
                <strong>Alexander Lukasjenka (Belarus):</strong> President.
              </li>
              <li>
                <strong>Vladimir Putin (Ryssland):</strong> President.
              </li>
              <li>
                <strong>Charles III (Storbritannien):</strong> Kung (ceremoniell monark).
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>4. Ge exempel på federala stater i och utanför Europa.</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>I Europa:</strong> Tyskland (16 delstater), Österrike (9 delstater), Belgien
                (regioner och gemenskaper) och Schweiz (26 kantoner).
              </li>
              <li>
                <strong>Utanför Europa:</strong> USA (50 delstater), Indien, Brasilien, Australien, Kanada
                och Ryssland.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>5. Vilka två orsaker till tvåkammarsystem nämner boken?</h3>
          <div className={classes.answer}>
            <ol className={classes.list}>
              <li>
                <strong>Historiska skäl:</strong> Adelns och prästerskapets kammare (överhus) vs
                allmänhetens kammare (underhus). Detta är fallet i Storbritannien.
              </li>
              <li>
                <strong>Federala stater:</strong> Delstaterna representeras i en kammare (t.ex. USA:s
                senat, Tysklands förbundsråd) och folket i den andra (t.ex. USA:s representanthus,
                Tysklands förbundsdag).
              </li>
            </ol>
          </div>
        </div>

        {/* Fråga 6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>6. Vad innebär parlamentarism?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Parlamentarism innebär att <strong>regeringen</strong> måste ha <strong>förtroende</strong>
              från <strong>parlamentet</strong> för att kunna sitta kvar. Om parlamentet genom en
              <strong>misstroendeförklaring</strong> visar att de inte längre har förtroende för regeringen,
              måste regeringen <strong>avgå</strong>. Regeringen leds av en <strong>statsminister</strong>
              (eller motsvarande) som utses av statschefen men måste godkännas av parlamentet.
            </p>
          </div>
        </div>

        {/* Fråga 7 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>7. Vad innebär presidentstyre?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Presidentstyre innebär att <strong>presidenten</strong> har den verkliga makten och inte är
              beroende av parlamentet för att sitta kvar. Presidenten är både <strong>statschef</strong> och
              <strong>regeringschef</strong> och utser själv regeringsmedlemmar. Presidenten och
              parlamentet väljs separat av folket, vilket innebär att de kan tillhöra olika partier
              ("cohabitation"). Exempel: USA.
            </p>
          </div>
        </div>

        {/* Fråga 8 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. På vad sätt är Frankrike ett mellanting mellan parlamentarism och presidentstyre?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Frankrike har ett <strong>semipresidentiellt system</strong> som kombinerar inslag från båda:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Presidentstyre:</strong> Presidenten väljs direkt av folket, har stor makt och är
                tongivande i försvars- och utrikespolitik.
              </li>
              <li>
                <strong>Parlamentarism:</strong> Presidenten utser en <strong>premiärminister</strong> som
                sedan utser regering. Det är <strong>parlamentet</strong>, inte presidenten, som kan avsätta
                premiärministern genom en misstroendeförklaring.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 9 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. Förklara med Storbritannien och Sverige som exempel skillnaden mellan majoritetsval och
            proportionella val.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Storbritannien – majoritetsval:</strong> Landet är uppdelat i 650 valkretsar. I varje
                valkrets vinner den kandidat som får <strong>flest röster</strong>. Detta leder till ett
                <strong>tvåpartisystem</strong> (Labour och de konservativa) där det vinnande partiet får en
                klar majoritet i underhuset. Personvalet är starkt – kandidater måste vara lyhörda för
                väljarna.
              </li>
              <li>
                <strong>Sverige – proportionella val:</strong> Partier får mandat i <strong>proportion</strong>
                till sin andel av rösterna. Detta leder till ett <strong>flerpartisystem</strong> där även
                mindre partier kan bli representerade. Det finns en <strong>4%-spärr</strong> för att hindra
                alltför små partier. Systemet är rättvisare men kan göra det svårare att bilda regering.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 10 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>10. Förklara hur USA:s statsskick avviker från parlamentariska stater.</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Presidenten:</strong> I USA är presidenten både <strong>statschef</strong> och
                <strong>regeringschef</strong> och är <strong>inte</strong> beroende av kongressens
                förtroende för att sitta kvar. I parlamentariska stater är statsministern beroende av
                parlamentets förtroende.
              </li>
              <li>
                <strong>Maktdelning:</strong> USA har en strikt <strong>maktdelning</strong> mellan
                presidenten, kongressen och Högsta domstolen ("checks and balances"). I parlamentariska
                stater är regeringen och parlamentet tätt sammanflätade.
              </li>
              <li>
                <strong>Val:</strong> Presidenten väljs separat från kongressen. I parlamentariska stater
                väljs parlamentet, som sedan utser regeringen.
              </li>
              <li>
                <strong>Utnämningar:</strong> Senaten (inte presidenten) godkänner högre tjänstemän och
                domare samt traktater med andra länder.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 7. ANALYSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. ANALYSFRÅGOR</h2>

        {/* A1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. Ge för- och nackdelar med majoritetsval respektive proportionella val.
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Valsystem</th>
                    <th className={classes.th}>Fördelar</th>
                    <th className={classes.th}>Nackdelar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>Majoritetsval</strong>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li>Klar majoritet i parlamentet → enklare att bilda regering.</li>
                        <li>Starkt personval – kandidater måste vara lyhörda för väljarna.</li>
                        <li>Stabilare regeringar.</li>
                      </ul>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li>Missgynnar små partier → tvåpartisystem.</li>
                        <li>Lägre kvinnlig representation (personval gynnar ofta män).</li>
                        <li>Många röster "förloras" – kandidater med många röster kan ändå förlora.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Proportionella val</strong>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li>Rättvisare fördelning av mandat – varje röst räknas.</li>
                        <li>Fler partier representeras → bättre speglar folkviljan.</li>
                        <li>Bättre kvinnlig representation (partilistor).</li>
                      </ul>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li>Svårare att bilda stark regering (koalitionsregeringar).</li>
                        <li>Risk för partisplittring och politisk instabilitet.</li>
                        <li>Mindre personval – partierna, inte kandidaterna, står i centrum.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* A2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. Varför kan det brittiska tvåkammarsystemet anses vara odemokratiskt?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det brittiska tvåkammarsystemet kan anses vara odemokratiskt eftersom:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Överhuset (House of Lords):</strong> Består till stor del av <strong>ärftliga
                pärer</strong> och <strong>livstidsutnämnda</strong> personer. De är <strong>inte
                folkvalda</strong> och kan därför inte sägas representera folket på ett demokratiskt sätt.
              </li>
              <li>
                <strong>Brist på mandat:</strong> Överhusets ledamöter har ingen demokratisk legitimitet
                eftersom de inte har valts av medborgarna.
              </li>
              <li>
                <strong>Makten:</strong> Även om överhusets makt har begränsats, kan de fortfarande
                <strong>fördröja</strong> lagstiftning och föreslå ändringar, vilket ger en icke-vald grupp
                inflytande över lagar som påverkar hela befolkningen.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Notering:</strong> Det finns dock röster för reform, och antalet ärftliga pärer har
              minskats. Men systemet vilar fortfarande på en odemokratisk grund jämfört med ett enkammar-
              eller ett tvåkammarsystem med två folkvalda kamrar.
            </p>
          </div>
        </div>

        {/* A3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A3. Vad är fördelen och nackdelen med att det franska presidentvalet genomförs i två omgångar?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Fördelar:</strong>
                <ol className={classes.list}>
                  <li>
                    <strong>Större legitimitet:</strong> Presidenten får stöd från en majoritet av
                    väljarna (absolut majoritet i andra omgången), inte bara en relativ majoritet.
                  </li>
                  <li>
                    <strong>Taktiskt samarbete:</strong> Kandidater som förlorat i första omgången kan
                    uppmana sina väljare att stödja en av de två kvarvarande, vilket skapar bredare
                    politiska allianser.
                  </li>
                  <li>
                    <strong>Minskar polarisering:</strong> Väljare kan i första omgången rösta på sitt
                    favoritparti utan att "spilla" sin röst, och sedan i andra omgången välja mellan de
                    två mest populära alternativen.
                  </li>
                </ol>
              </li>
              <li>
                <strong>Nackdelar:</strong>
                <ol className={classes.list}>
                  <li>
                    <strong>Kostsamt:</strong> Två valomgångar är dyra för staten.
                  </li>
                  <li>
                    <strong>Trötthet bland väljare:</strong> Risk för lägre valdeltagande i andra
                    omgången.
                  </li>
                  <li>
                    <strong>Taktiskt röstande:</strong> Väljare kan rösta strategiskt i första omgången
                    snarare än på sin favoritkandidat.
                  </li>
                  <li>
                    <strong>Exkluderar små partier:</strong> Kandidater från små partier har svårt att nå
                    andra omgången, vilket kan minska mångfalden i debatten.
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>

        {/* A4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A4. På vad sätt är partisystemet i USA annorlunda än i många länder i Europa?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Tvåpartisystem vs flerpartisystem:</strong> USA har ett <strong>tvåpartisystem</strong>
                (demokrater och republikaner) där andra partier har mycket små möjligheter att vinna mandat.
                I Europa dominerar <strong>flerpartisystem</strong> där flera partier är representerade i
                parlamentet.
              </li>
              <li>
                <strong>Orsak:</strong> USA:s <strong>majoritetsval</strong> i enmansvalkretsar ("the
                winner takes it all") gynnar de två stora partierna. Europeiska länder med
                <strong>proportionella val</strong> ger även mindre partier chans att bli representerade.
              </li>
              <li>
                <strong>Primärval:</strong> I USA väljs kandidaterna till presidentvalet genom
                <strong>primärval</strong> (partiinterna val), vilket är ovanligt i Europa.
              </li>
              <li>
                <strong>Ideologisk skillnad:</strong> De två amerikanska partierna är bredare
                koalitioner än de europeiska partierna, som ofta är mer ideologiskt homogena.
              </li>
              <li>
                <strong>Regionala partier:</strong> I Europa finns regionala partier (t.ex. SNP i
                Skottland, Plaid Cymru i Wales), medan sådana partier har mycket svårt att få inflytande
                i USA.
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
            D1. Är det bra med monarki i Sverige eller borde vi övergå till republik?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Argument FÖR monarki:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Kontinuitet och tradition:</strong> Monarkin är en del av svensk historia och
                kultur, och binder samman landet över generationer.
              </li>
              <li>
                <strong>Symbolisk funktion:</strong> Monarken kan vara en enande symbol över partigränserna
                och representera Sverige vid officiella tillställningar.
              </li>
              <li>
                <strong>Politisk neutralitet:</strong> Monarken är opolitisk och kan inte bli föremål för
                politiska strider, till skillnad från en president.
              </li>
              <li>
                <strong>Kostnad:</strong> Monarkin är relativt billig jämfört med kostnaderna för en
                president med kansli och personal.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Argument FÖR republik:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Demokratisk legitimitet:</strong> En folkvald president representerar demokratins
                ideal bättre än en ärftlig monark.
              </li>
              <li>
                <strong>Jämlikhet:</strong> Alla medborgare bör ha samma möjlighet att bli statschef,
                inte bara de som föds in i en kungafamilj.
              </li>
              <li>
                <strong>Modernitet:</strong> De flesta länder i världen är republiker; monarkin kan ses
                som föråldrad.
              </li>
              <li>
                <strong>Valmöjlighet:</strong> Medborgarna får en chans att uttrycka sin åsikt om
                statschefen genom val.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> Det är en värderingsfråga. Sverige har en lång tradition av
              monarki, och kungahuset är fortfarande populärt hos en majoritet av svenskarna. Samtidigt
              finns starka argument för en mer demokratiskt legitim statschef. Frågan är inte aktuell i
              svensk politik just nu, men kan komma att diskuteras i framtiden.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. Finns det ett samband mellan ett lands statsskick och graden av demokrati?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Ja, det finns ett tydligt samband:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Demokratier:</strong> Länder med <strong>parlamentarism</strong> eller
                <strong>semipresidentiella system</strong> där makten är fördelad och det finns fria val,
                oberoende domstolar och skydd för mänskliga rättigheter, är i allmänhet mer demokratiska.
              </li>
              <li>
                <strong>Diktaturer:</strong> Länder med <strong>presidentstyre</strong> där presidenten har
                all makt och parlamentet är svagt, eller <strong>enpartisystem</strong>, är ofta mindre
                demokratiska.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Men sambandet är inte automatiskt:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Presidentstyre behöver inte vara odemokratiskt:</strong> USA har presidentstyre men
                är en stabil demokrati tack vare starka institutioner och <strong>checks and balances</strong>.
              </li>
              <li>
                <strong>Parlamentarism kan vara odemokratisk:</strong> I Ryssland och Belarus finns det
                parlament, men de fungerar inte demokratiskt eftersom det styrande partiet kontrollerar
                allt.
              </li>
              <li>
                <strong>Avgörande faktorer:</strong> Graden av demokrati beror på <strong>hur</strong>
                makten utövas, inte bara på <strong>hur</strong> statsskicket är utformat. Viktiga
                faktorer är: <strong>fria val, rättsstatens principer, yttrandefrihet, oberoende medier
                och skydd för mänskliga rättigheter</strong>.
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
            <span className={classes.keyword}>Absolut monarki:</span> Ett styrelseskick där monarken har
            all verklig politisk makt och styr landet utan inskränkningar. Exempel: Saudiarabien.
          </li>
          <li>
            <span className={classes.keyword}>Elektorer:</span> Personer som väljs för att i sin tur välja
            presidenten i USA. Varje delstat har ett antal elektorer i proportion till sin befolkning.
          </li>
          <li>
            <span className={classes.keyword}>Enhetsstat (Unionsstat):</span> En stat där den centrala
            regeringen har den yttersta makten. Exempel: Sverige, Frankrike, Storbritannien.
          </li>
          <li>
            <span className={classes.keyword}>Enkammarsystem:</span> Ett parlament med endast en kammare.
            Exempel: Sverige, Finland, Danmark.
          </li>
          <li>
            <span className={classes.keyword}>Federalism (Förbundsstat):</span> En stat där makten är delad
            mellan en central regering och självstyrande delstater. Exempel: Tyskland, USA.
          </li>
          <li>
            <span className={classes.keyword}>Folkrepresentation:</span> Det folkvalda parlamentet, som
            representerar medborgarna.
          </li>
          <li>
            <span className={classes.keyword}>Majoritetsval:</span> Ett valsystem där den kandidat som får
            flest röster i valkretsen vinner mandatet. Exempel: USA, Storbritannien.
          </li>
          <li>
            <span className={classes.keyword}>Monarki:</span> Statsskick där statschefen är en monark
            (kung, drottning, kejsare eller furste). Tronföljden är ärftlig.
          </li>
          <li>
            <span className={classes.keyword}>Parlament:</span> Den folkvalda församlingen som stiftar lagar
            och granskar regeringen.
          </li>
          <li>
            <span className={classes.keyword}>Parlamentarism:</span> Ett statsskick där regeringen måste ha
            förtroende från parlamentet för att sitta kvar.
          </li>
          <li>
            <span className={classes.keyword}>Presidentstyre:</span> Ett statsskick där presidenten har den
            verkliga makten och inte är beroende av parlamentet för att sitta kvar.
          </li>
          <li>
            <span className={classes.keyword}>Proportionella val:</span> Ett valsystem där partier får mandat
            i proportion till sin andel av rösterna. Exempel: Sverige.
          </li>
          <li>
            <span className={classes.keyword}>Republik:</span> Statsskick där statschefen är en president
            som väljs antingen direkt av folket eller av parlamentet.
          </li>
          <li>
            <span className={classes.keyword}>Semipresidentiellt styre:</span> Ett statsskick som kombinerar
            parlamentarism och presidentstyre, med både en president och en premiärminister. Exempel:
            Frankrike.
          </li>
          <li>
            <span className={classes.keyword}>Statschef:</span> Den högsta representanten för en stat
            (monark eller president).
          </li>
          <li>
            <span className={classes.keyword}>Tvåkammarsystem:</span> Ett parlament med två kamrar (överhus
            och underhus). Exempel: USA, Storbritannien.
          </li>
          <li>
            <span className={classes.keyword}>Maktdelning:</span> Principen att makten i ett land ska
            fördelas mellan olika grenar (verkställande, lagstiftande, dömande) för att förhindra
            maktmissbruk.
          </li>
          <li>
            <span className={classes.keyword}>Misstroendeförklaring:</span> En omröstning i parlamentet där
            en majoritet förklarar att de inte längre har förtroende för regeringen, vilket tvingar
            regeringen att avgå.
          </li>
          <li>
            <span className={classes.keyword}>Cohabitation:</span> En situation i ett semipresidentiellt
            system där presidenten och majoriteten i parlamentet tillhör olika partier.
          </li>
          <li>
            <span className={classes.keyword}>Spärr (tröskel):</span> En procentandel som ett parti måste
            nå för att få mandat i parlamentet. Exempel: Sverige 4%.
          </li>
        </ul>
      </section>
    </div>
  );
}