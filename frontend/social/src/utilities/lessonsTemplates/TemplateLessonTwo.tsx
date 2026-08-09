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

export default function TemplateLessonTwo() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        Sammanfattning – Kapitel 1 Och 2: Individ och Identitet
      </h1>
      <p className={classes.subtitle}>Samhällskunskap 1b</p>

      {/* ===== KAPITEL 1 ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          KAPITEL 1: ATT STUDERA SAMHÄLLSKUNSKAP
        </h2>

        {/* 1.1 */}
        <h3 className={classes.subHeading}>1.1 Vad är samhälle?</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            Ett samhälle är en grupp människor som lever tillsammans på ett
            organiserat sätt.
          </li>
          <li className={classes.listItem}>
            Vi ingår i flera samhällsbildningar samtidigt:
            <ul className={classes.list}>
              <li>Familjen – ett samhälle i miniatyr</li>
              <li>Lokalsamhället – din kommun</li>
              <li>Nationen – Sverige</li>
              <li>Större sammanhang – Norden, Europa och världen</li>
            </ul>
          </li>
        </ul>

        {/* 1.2 */}
        <h3 className={classes.subHeading}>
          1.2 Samhällsvetenskap och skolämnet
        </h3>
        <ul className={classes.list}>
          <li>
            <strong>Statsvetenskap</strong> – studerar politik och makt
          </li>
          <li>
            <strong>Sociologi</strong> – studerar sociala strukturer och
            relationer
          </li>
          <li>
            <strong>Nationalekonomi</strong> – studerar ekonomi och
            resursfördelning
          </li>
        </ul>
        <p className={classes.paragraph}>
          Målet med vetenskapliga undersökningar är att få fram sanningen – ny
          kunskap om verkligheten.
        </p>
        <p className={classes.paragraph}>
          Samhällsvetenskapen ligger till grund för skolämnet samhällskunskap.
        </p>

        <h4 className={classes.subHeading}>Styrdokument från Skolverket</h4>
        <ul className={classes.list}>
          <li>
            <strong>Ämnesplan</strong> – övergripande syfte
          </li>
          <li>
            <strong>Centralt innehåll</strong> – vad som ska läras på varje nivå
          </li>
          <li>
            <strong>Betygskriterier</strong> – vad som krävs för olika betyg
          </li>
        </ul>

        <h4 className={classes.subHeading}>Progression i ämnet</h4>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Nivå</th>
                <th className={classes.th}>Innehåll</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>1b</td>
                <td className={classes.td}>
                  Demokrati som samhällside, demokratiska samhällsmotiv, skydd
                  mot auktoritära och totalitära system. Sveriges totalförsvar.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>2</td>
                <td className={classes.td}>
                  Jämförande politik, politiska system och rättsprinciper i
                  olika länder i förhållande till mänskliga rättigheter och
                  medier.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>3</td>
                <td className={classes.td}>
                  Internationell politik, internationell rätt, freds- och
                  säkerhetssystem, konflikter, krig och konflikthantering.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 1.3 */}
        <h3 className={classes.subHeading}>1.3 Förmågor i samhällskunskap</h3>
        <p className={classes.paragraph}>
          Undervisningen ska utveckla förmågan att:
        </p>
        <ol className={classes.list}>
          <li>
            Analysera och diskutera samhällsfrågor med hjälp av relevanta
            begrepp, teorier, analysmodeller och metoder.
          </li>
          <li>
            Söka, kritiskt granska, tolka och använda information från källor.
          </li>
        </ol>

        {/* 1.4 */}
        <h3 className={classes.subHeading}>
          1.4 Att undersöka en samhällsfråga
        </h3>
        <p className={classes.paragraph}>
          <strong>Exempel:</strong> Gängkriminalitet i Sverige.
        </p>

        <h4 className={classes.subHeading}>
          Steg 1: Formulera problem, syfte och frågor
        </h4>
        <ul className={classes.list}>
          <li>
            <strong>Syfte:</strong> Vad vill du uppnå? T.ex. "att belysa
            gängkriminaliteten i Sverige".
          </li>
          <li>
            <strong>Frågeställningar:</strong> Tydliga, avgränsade och ledande
            frågor.
          </li>
          <li>
            <strong>Avgränsningar:</strong>
            <ul className={classes.list}>
              <li>Tidsperiod (t.ex. senaste 5–10 åren)</li>
              <li>
                Geografiskt område (t.ex. din kommun jämfört med en storstad)
              </li>
              <li>Begreppsdefinition: Vad menar du med "gängkriminalitet"?</li>
              <li>Åldersgrupp (t.ex. 12–15 år, 15–18 år)</li>
            </ul>
          </li>
        </ul>

        <h4 className={classes.subHeading}>Steg 2: Välja metod och material</h4>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Metod</th>
                <th className={classes.th}>Beskrivning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>Kvalitativ metod</strong>
                </td>
                <td className={classes.td}>
                  Tolkning och förståelse. Ex: intervjuer, observationer.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Kvantitativ metod</strong>
                </td>
                <td className={classes.td}>
                  Mätbara data i siffror. Ex: enkäter, statistik.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className={classes.subHeading}>Material</h4>
        <ul className={classes.list}>
          <li>Litteratur i ämnet</li>
          <li>Statistik (t.ex. från Brottsförebyggande rådet – BRÅ)</li>
          <li>Intervjuer</li>
          <li>Enkäter</li>
        </ul>

        <h4 className={classes.subHeading}>Steg 3: Att analysera en fråga</h4>
        <p className={classes.paragraph}>
          Att analysera innebär att "vrida och vända" på problemet. Det kan
          innebära:
        </p>
        <ul className={classes.list}>
          <li>Undersöka orsaker och konsekvenser</li>
          <li>Föreslå lösningar/åtgärder</li>
          <li>Se på frågan ur kort eller långt tidsperspektiv</li>
          <li>Se problemet ur olika perspektiv</li>
        </ul>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Perspektiv</th>
                <th className={classes.th}>Fokus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>Ekonomiskt</td>
                <td className={classes.td}>
                  Kostnader för t.ex. dödsskjutningar
                </td>
              </tr>
              <tr>
                <td className={classes.td}>Rättsligt</td>
                <td className={classes.td}>
                  Vad lagen säger och om den förändrats
                </td>
              </tr>
              <tr>
                <td className={classes.td}>Sociologiskt</td>
                <td className={classes.td}>
                  Sociala förhållanden i bostadsområden
                </td>
              </tr>
              <tr>
                <td className={classes.td}>Individperspektiv</td>
                <td className={classes.td}>
                  Vad brottet innebär för gärningspersonen
                </td>
              </tr>
              <tr>
                <td className={classes.td}>Samhällsperspektiv</td>
                <td className={classes.td}>
                  Vad samhället kan göra för att förhindra brott
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 1.5 */}
        <h3 className={classes.subHeading}>1.5 Metoder för datainsamling</h3>

        <h4 className={classes.subHeading}>Intervju</h4>
        <ul className={classes.list}>
          <li>
            <strong>Semistrukturerad intervju:</strong> Samtal med några givna
            frågor och öppna följdfrågor. Mer informell.
          </li>
          <li>
            <strong>Strukturerad intervju:</strong> Fastställda frågor med givna
            svarsalternativ.
          </li>
        </ul>
        <p className={classes.paragraph}>
          <em>Exempel på öppningsfråga:</em> "Hur arbetar du som kommunpolitiker
          mot gängbrottsligheten i vår kommun?"
        </p>

        <h4 className={classes.subHeading}>Enkät</h4>
        <ul className={classes.list}>
          <li>
            Ett standardiserat frågeformulär som ges till många personer
            samtidigt.
          </li>
          <li>
            Frågorna ska vara korta, exakta och med tydliga svarsalternativ.
          </li>
          <li>Kan kombineras med öppna svarsalternativ (fri text).</li>
          <li>
            <strong>Bortfall</strong> = när man inte får svar från alla. Stort
            bortfall minskar värdet av enkäten.
          </li>
        </ul>

        <h4 className={classes.subHeading}>Observation</h4>
        <p className={classes.paragraph}>
          Används för att undersöka beteenden i sociala grupper. Exempel:
          observera mobbning på skolgården.
        </p>

        {/* 1.6 */}
        <h3 className={classes.subHeading}>
          1.6 Etiska frågor (Vetenskapsrådets riktlinjer)
        </h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Krav</th>
                <th className={classes.th}>Innebörd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>Informationskravet</strong>
                </td>
                <td className={classes.td}>
                  Deltagarna måste informeras om syftet med undersökningen innan
                  de deltar.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Samtyckeskravet</strong>
                </td>
                <td className={classes.td}>
                  Deltagarna måste ge sitt godkännande ("informerat samtycke").
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Konfidentialitetskravet</strong>
                </td>
                <td className={classes.td}>
                  Materialet måste behandlas så att deltagarna förblir anonyma.
                  T.ex. kalla lärare för "Lärare i Län 3". Materialet raderas
                  ofta efter projektet.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Nyttjandekravet</strong>
                </td>
                <td className={classes.td}>
                  Materialet får endast användas för det angivna syftet och inte
                  för andra studier.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 1.7 */}
        <h3 className={classes.subHeading}>1.7 Källkritik</h3>
        <ul className={classes.list}>
          <li>
            Källkritik innebär att kritiskt granska allt material du använder.
          </li>
          <li>
            <strong>Skriftliga källor:</strong> Böcker, tidningar, tidskrifter,
            brev, anteckningar.
          </li>
          <li>
            <strong>Bildanalys:</strong> Även bilder ska analyseras.
            <ul className={classes.list}>
              <li>Vilken känsla ska bilden ge?</li>
              <li>Vad är tanken bakom att publicera bilden?</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ===== KAPITEL 2 ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>KAPITEL 2: INDIVID OCH IDENTITET</h2>

        {/* 2.1 */}
        <h3 className={classes.subHeading}>2.1 Identitet – introduktion</h3>
        <p className={classes.paragraph}>
          Kapitlet handlar om hur vår identitet och livsvillkor påverkas av
          vilka samhällsgrupper vi tillhör.
        </p>

        <div className={classes.question}>
          <p className={classes.paragraph}>
            <strong>Exempel: Mariam</strong>
          </p>
          <p className={classes.paragraph}>
            21 år, läser juridik på Umeå universitet. Nationalitet: Svensk (född
            i Sverige). Etnicitet: Somalier (båda föräldrarna från Somalia).
            Kultur: Pratar somaliska hemma, äter somalisk mat, firar somaliska
            högtider – samtidigt svensk kultur från skola och vänner. Klassresa:
            Föräldrarna tillhörde överklassen i Somalia men förlorade allt i
            inbördeskriget. I Sverige har de haft enkla jobb och bytt
            samhällsklass. Kön och religion: Möter fördomar som muslimsk kvinna
            med slöja. Kombinationen av kön, religion och etnicitet gör att hon
            måste kämpa extra hårt.
          </p>
        </div>

        {/* 2.2 */}
        <h3 className={classes.subHeading}>2.2 Normer</h3>
        <ul className={classes.list}>
          <li>
            <strong>Normer</strong> = oskrivna regler för hur vi förväntas vara
            och bete oss.
          </li>
          <li>
            <strong>Funktionella normer:</strong> Hjälper samhället att fungera
            (t.ex. att inte tränga sig i kön).
          </li>
          <li>
            <strong>Problematiska normer:</strong> Kan vara begränsande och
            orättvisa.
          </li>
        </ul>

        {/* 2.3 */}
        <h3 className={classes.subHeading}>2.3 Genus</h3>
        <ul className={classes.list}>
          <li>
            <strong>Genus</strong> = det socialt konstruerade könet (till
            skillnad från biologiskt kön).
          </li>
          <li>
            <strong>Internalisering</strong> = processen där människan
            införlivar samhällets normer och gör dem till en del av sin egen
            personlighet.
            <ul className={classes.list}>
              <li>
                Exempel: En kvinna känner sig "kvinnlig" när hon bär klänning
                eller bakar bullar. En man känner sig "manlig" när han betalar
                på restaurang eller spelar fotboll.
              </li>
            </ul>
          </li>
        </ul>

        <h4 className={classes.subHeading}>Genussystemet (Yvonne Hirdman)</h4>
        <p className={classes.paragraph}>
          Ett maktssystem som organiserar förhållandet mellan könen. Bygger på
          två principer:
        </p>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Princip</th>
                <th className={classes.th}>Innebörd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>Isärhållning</strong>
                </td>
                <td className={classes.td}>
                  Män och kvinnor ses som varandras motsatser. Normerna för hur
                  män respektive kvinnor ska vara ser helt olika ut.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Manlig överordning</strong>
                </td>
                <td className={classes.td}>
                  Det som uppfattas som manligt värderas högre än det som
                  uppfattas som kvinnligt.
                  <br />
                  <em>Exempel:</em> En tekniker tjänar mer än en förskollärare,
                  trots lika lång utbildning.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className={classes.list}>
          <li>
            <strong>Strukturell maktordning</strong> = makt på gruppnivå. Män
            som grupp är överordnade kvinnor som grupp. Det betyder inte att
            varje enskild man har makt över varje enskild kvinna.
          </li>
        </ul>

        {/* 2.4 */}
        <h3 className={classes.subHeading}>2.4 Genus och sexualitet</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Årtal</th>
                <th className={classes.th}>Händelse</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>1944</td>
                <td className={classes.td}>
                  Lagen som förbjöd homosexuella handlingar togs bort.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>1950-talet</td>
                <td className={classes.td}>
                  RFSL (Riksförbundet för sexuellt likaberättigande) bildades.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>1979</td>
                <td className={classes.td}>
                  Homosexualitet togs bort ur Socialstyrelsens sjukdomsregister.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={classes.paragraph}>
          <strong>Idag:</strong>
        </p>
        <ul className={classes.list}>
          <li>Homosexuella par kan adoptera barn och gifta sig i kyrkan.</li>
          <li>Diskriminering på grund av sexuell läggning är förbjudet.</li>
        </ul>

        <p className={classes.paragraph}>
          <strong>Heteronormativitet</strong> = normen att människor förväntas
          bilda par och familj med personer av motsatt kön. Den som bryter mot
          heteronormen riskerar att betraktas som avvikande.
        </p>

        <h4 className={classes.subHeading}>HBTQI</h4>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Bokstav</th>
                <th className={classes.th}>Betydelse</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>H</td>
                <td className={classes.td}>Homosexuella</td>
              </tr>
              <tr>
                <td className={classes.td}>B</td>
                <td className={classes.td}>Bisexuella</td>
              </tr>
              <tr>
                <td className={classes.td}>T</td>
                <td className={classes.td}>Transpersoner</td>
              </tr>
              <tr>
                <td className={classes.td}>Q</td>
                <td className={classes.td}>
                  Queer (personer med queera uttryck och identiteter)
                </td>
              </tr>
              <tr>
                <td className={classes.td}>I</td>
                <td className={classes.td}>Intersexpersoner</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className={classes.list}>
          <li>
            <strong>Queer</strong> = ett begrepp som ursprungligen betydde
            "udda" eller "konstig" och användes som skällsord. Aktivister har
            "tagit tillbaka" begreppet för att ifrågasätta normer.
          </li>
          <li>
            <strong>Pride</strong> = stolthet. Syftet är att fira den egna
            identiteten och mångfalden av sexuella uttryck som något positivt.
          </li>
        </ul>

        {/* 2.5 */}
        <h3 className={classes.subHeading}>2.5 Jämställdhet</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Begrepp</th>
                <th className={classes.th}>Innebörd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>Jämlikhet</strong>
                </td>
                <td className={classes.td}>
                  Alla människor är lika mycket värda och har samma juridiska
                  rättigheter.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Jämställdhet</strong>
                </td>
                <td className={classes.td}>
                  Jämlikhet mellan könen. Män och kvinnor har lika rättigheter,
                  möjligheter och skyldigheter.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Feminism</strong>
                </td>
                <td className={classes.td}>Att strida för jämställdhet.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className={classes.subHeading}>Arbetsmarknaden</h4>
        <ul className={classes.list}>
          <li>
            <strong>Horisontell könssegregering:</strong> Män och kvinnor
            arbetar inom olika yrken och branscher.
            <ul className={classes.list}>
              <li>
                Exempel: Kvinnor dominerar vård och omsorg. Män dominerar
                industri och bygg.
              </li>
              <li>
                Endast 4 av Sveriges 30 största yrken har en jämn könsfördelning
                (40–60 %).
              </li>
            </ul>
          </li>
          <li>
            <strong>Vertikal könssegregering:</strong> Färre kvinnor på höga
            positioner. Män innehar fler maktpositioner.
          </li>
          <li>
            <strong>Värdediskriminering:</strong> Kvinnodominerade yrken har
            lägre lön än mansdominerade yrken med likvärdig utbildning.
            <ul className={classes.list}>
              <li>
                Exempel: IT-specialist tjänar ca 6 000 kr mer än en barnmorska.
              </li>
              <li>Logik: Ju fler kvinnor i ett yrke, desto lägre lön.</li>
            </ul>
          </li>
        </ul>

        <p className={classes.paragraph}>
          <strong>Oavlönat hemarbete:</strong> Kvinnor gör fortfarande en större
          del av det obetalda hemarbetet.
        </p>
        <p className={classes.paragraph}>
          <em>Exempel på protest:</em> "Lön hela dagen" – kvinnor demonstrerade
          för att de "jobbar gratis" från 16:12 varje dag (om arbetsdagen är
          8–17).
        </p>

        {/* 2.6 */}
        <h3 className={classes.subHeading}>2.6 Etnicitet</h3>
        <ul className={classes.list}>
          <li>
            <strong>Etnicitet</strong> = en grupps kulturella särart, inklusive
            språk, traditioner, högtider och ursprung.
          </li>
        </ul>

        <h4 className={classes.subHeading}>Sveriges nationella minoriteter</h4>
        <ul className={classes.list}>
          <li>Judar</li>
          <li>Romer</li>
          <li>Sverigefinnar</li>
          <li>Samer</li>
          <li>Tornedalingar</li>
        </ul>

        <p className={classes.paragraph}>
          <strong>Krav för att räknas som nationell minoritet:</strong>
        </p>
        <ul className={classes.list}>
          <li>Gruppen har en egen identitet som etnisk grupp.</li>
          <li>
            Gruppen har en lång historia av att ha levt och verkat inom Sveriges
            gränser.
          </li>
        </ul>
        <p className={classes.paragraph}>
          <strong>Rättigheter:</strong> Nationella minoriteter har rätt att
          behålla och utveckla sitt eget språk och sin kultur.
        </p>

        {/* 2.7 */}
        <h3 className={classes.subHeading}>
          2.7 Invandring till Sverige – historiska faser
        </h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Period</th>
                <th className={classes.th}>Typ av invandring</th>
                <th className={classes.th}>Ursprungsländer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>1845–1930</td>
                <td className={classes.td}>
                  Utvandring från Sverige till Nordamerika (över 1 miljon
                  svenskar)
                </td>
                <td className={classes.td}>-</td>
              </tr>
              <tr>
                <td className={classes.td}>Efter WWII</td>
                <td className={classes.td}>Krigsinvandring</td>
                <td className={classes.td}>Baltikum, Östeuropa</td>
              </tr>
              <tr>
                <td className={classes.td}>1950–1960</td>
                <td className={classes.td}>Arbetskraftsinvandring</td>
                <td className={classes.td}>Finland, Grekland, Jugoslavien</td>
              </tr>
              <tr>
                <td className={classes.td}>1980-talet</td>
                <td className={classes.td}>Flyktinginvandring</td>
                <td className={classes.td}>Chile, Libanon, Turkiet</td>
              </tr>
              <tr>
                <td className={classes.td}>2000-talet</td>
                <td className={classes.td}>Flyktinginvandring</td>
                <td className={classes.td}>
                  Irak, Afghanistan, Somalia, Syrien
                </td>
              </tr>
              <tr>
                <td className={classes.td}>2015</td>
                <td className={classes.td}>Toppår ("flyktingkrisen")</td>
                <td className={classes.td}>
                  162 000 sökte asyl, många från Syrien
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2.8 */}
        <h3 className={classes.subHeading}>2.8 Integration och segregation</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Begrepp</th>
                <th className={classes.th}>Innebörd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>Integration</strong>
                </td>
                <td className={classes.td}>
                  Process där olika grupper möts och lever tillsammans.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Segregation</strong>
                </td>
                <td className={classes.td}>
                  Motsatsen – grupper lever åtskilda (bostadsmarknad,
                  arbetsmarknad, socialt liv).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Assimilering</strong>
                </td>
                <td className={classes.td}>
                  Etnisk minoritet överger sin ursprungskultur och uppgår i
                  majoritetskulturen.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Mångkultur</strong>
                </td>
                <td className={classes.td}>
                  Olika kulturer existerar parallellt och får behålla sina
                  särdrag.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Kulturell smältdegel</strong>
                </td>
                <td className={classes.td}>
                  Kulturer blandas och något nytt uppstår.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className={classes.subHeading}>Etnisk boendesegregation</h4>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Utrikesfödda bor i hög grad i vissa
            områden, medan etniskt svenska bor i andra.
          </li>
          <li>
            <strong>Segregationsbarometern (Boverket):</strong> Segregationen
            har ökat i Sverige de senaste 25 åren.
          </li>
          <li>
            <strong>Orsaker:</strong>
            <ul className={classes.list}>
              <li>
                <strong>Individuella preferenser:</strong> Nyanlända väljer att
                bosätta sig där andra från samma land bor.
              </li>
              <li>
                <strong>Strukturella orsaker:</strong> Brist på ekonomiska
                resurser – hänvisas till områden med hyresrätter.
              </li>
            </ul>
          </li>
          <li>
            <strong>Konsekvenser:</strong> Områden präglas av låga inkomster,
            hög arbetslöshet, kriminalitet och trångboddhet. Det försvårar
            integrationen.
          </li>
        </ul>

        <h4 className={classes.subHeading}>Mellanförskap</h4>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Att befinna sig mitt emellan två
            kulturer och inte känna sig riktigt hemma någonstans.
          </li>
          <li>
            <em>Exempel (Melody Farshin):</em> Ses som iranier i Sverige men som
            svensk i Iran.
          </li>
          <li>
            <strong>Positiv aspekt:</strong> Kan vara en rikedom att ha tillgång
            till flera språk och kulturella uttryck.
          </li>
          <li>
            <strong>Negativ aspekt:</strong> Kan skapa identitetsproblem.
          </li>
          <li>
            <strong>Ortenrörelsen:</strong> Syftar till att lyfta den rika
            kulturen i miljonprogrammen och motverka negativa stereotyper.
          </li>
        </ul>

        {/* 2.9 */}
        <h3 className={classes.subHeading}>2.9 Studier och arbetsmarknad</h3>
        <ul className={classes.list}>
          <li>
            <strong>Gymnasieexamen inom 3 år:</strong>
            <ul className={classes.list}>
              <li>Elever med utländsk bakgrund: mindre än 50 %</li>
              <li>Elever med svensk bakgrund: 77 %</li>
            </ul>
          </li>
          <li>
            <strong>Orsaker:</strong> Bristande förkunskaper och språkkunskaper.
          </li>
          <li>
            <strong>Forskningsstudie (Karriären och barriären, 2023):</strong>
            <ul className={classes.list}>
              <li>
                Unga med utländsk bakgrund kompenserar initiala svårigheter med
                höga ambitioner och stort engagemang.
              </li>
              <li>
                Väljer krävande program och börjar studera på universitet
                tidigare.
              </li>
              <li>
                Efter 7 år på universitetet har fler utrikesfödda tagit examen
                än svenskfödda.
              </li>
              <li>Svårast: De som invandrat i åldern 9–15 år.</li>
            </ul>
          </li>
        </ul>

        {/* 2.10 */}
        <h3 className={classes.subHeading}>2.10 Klass</h3>
        <ul className={classes.list}>
          <li>
            <strong>Social klass:</strong> Grupp med liknande ekonomiska och
            sociala förutsättningar.
          </li>
        </ul>

        <h4 className={classes.subHeading}>Klassmarkörer</h4>
        <p className={classes.paragraph}>
          Symboler för vilken klass du tillhör – livsstil, smak, umgänge.
        </p>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Klass</th>
                <th className={classes.th}>Klassmarkörer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>Överklass</td>
                <td className={classes.td}>Opera, ostron</td>
              </tr>
              <tr>
                <td className={classes.td}>Arbetarklass</td>
                <td className={classes.td}>Öl, charterresor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={classes.paragraph}>
          <em>Observera:</em> Klassmarkörer förändras över tid. Golf var
          tidigare en överklassport, men har blivit folklig.
        </p>

        <h4 className={classes.subHeading}>Klassresor</h4>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Att byta samhällsklass.
          </li>
          <li>
            <strong>Vanligaste:</strong> Från arbetarklass till medelklass via
            utbildning.
          </li>
          <li>
            <strong>Förutsättningar i Sverige:</strong> Gratis utbildning och
            studiemedel gör klassresor lättare än i många andra länder.
          </li>
          <li>
            <strong>Utmaningar:</strong> Svårt att anpassa sig till den nya
            klassens "koder" och kultur.
          </li>
          <li>
            <strong>Nedåtgående klassresa:</strong> Invandrare som hade hög
            position i hemlandet men tvingas börja om från noll i Sverige (som
            Mariams föräldrar).
          </li>
        </ul>

        {/* 2.11 */}
        <h3 className={classes.subHeading}>2.11 Ekonomisk ojämlikhet</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Begrepp</th>
                <th className={classes.th}>Innebörd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>Absolut fattigdom</strong>
                </td>
                <td className={classes.td}>
                  Saknar resurser för grundläggande behov (mat, bostad, värme).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Relativ fattigdom</strong>
                </td>
                <td className={classes.td}>
                  Har lägre ekonomisk standard än genomsnittet i samhället och
                  kan inte delta fullt ut i samhällslivet.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={classes.paragraph}>
          I Sverige: Den absoluta fattigdomen har minskat, men den relativa
          fattigdomen har ökat. Klyftorna har vuxit.
        </p>
        <ul className={classes.list}>
          <li>
            <strong>Särskilt utsatta grupper:</strong> Utrikes födda och
            ensamstående kvinnor med barn.
          </li>
          <li>
            <strong>Gini-koefficienten</strong> = ett mått på inkomstskillnader
            i ett land.
          </li>
        </ul>

        {/* 2.12 */}
        <h3 className={classes.subHeading}>2.12 Stad och land</h3>
        <ul className={classes.list}>
          <li>
            <strong>Sveriges befolkning:</strong>
            <ul className={classes.list}>
              <li>
                Enligt SCB (tätort = minst 200 invånare): 88 % bor i tätort, 12
                % på landsbygden.
              </li>
              <li>Enligt Jordbruksverket: 34 % på landsbygden.</li>
            </ul>
          </li>
        </ul>

        <h4 className={classes.subHeading}>Urban norm</h4>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Staden ses som norm, landsbygden som
            avvikelse.
          </li>
          <li>
            Staden förknippas med positiva värden som modernitet och framtid.
          </li>
          <li>
            Landsbygden förknippas med negativa värden som tröghet och bristande
            ambition.
          </li>
          <li>
            <strong>Urbant tolkningsföreträde:</strong> Staden sätter agendan
            för vad som ses som viktiga frågor.
          </li>
        </ul>

        <h4 className={classes.subHeading}>Närande eller tärande?</h4>
        <ul className={classes.list}>
          <li>
            Städerna beskrivs som <strong>närande</strong> (tillväxt och
            utveckling).
          </li>
          <li>
            Landsbygden beskrivs som <strong>tärande</strong> (gör av med mer
            resurser än den tillför).
          </li>
          <li>
            I verkligheten är de beroende av varandra:
            <ul className={classes.list}>
              <li>
                Städerna behöver landsbygdens livsmedel, energi och råvaror.
              </li>
              <li>
                Exempel: Stockholm utgör 0,1 % av Sveriges yta men kräver 19 %
                för att producera resurser och 93 % för att ta hand om avfall
                och utsläpp.
              </li>
            </ul>
          </li>
        </ul>

        <h4 className={classes.subHeading}>Regional ojämlikhet</h4>
        <ul className={classes.list}>
          <li>Utveckling: Klyftorna har ökat sedan 1980-talet.</li>
          <li>
            Stockholm har idag ett BNP som är 40 % högre än riksgenomsnittet.
          </li>
          <li>
            <strong>Regionalpolitik:</strong> Politik för att skapa likvärdiga
            förutsättningar i hela landet.
            <ul className={classes.list}>
              <li>
                Exempel: Satsningar på företagande, turism, infrastruktur.
              </li>
              <li>Kommunala utjämningssystemet.</li>
              <li>EU:s regionalpolitiska program.</li>
            </ul>
          </li>
        </ul>

        <h4 className={classes.subHeading}>
          Politiska konsekvenser av regional ojämlikhet
        </h4>
        <ul className={classes.list}>
          <li>
            <strong>"Left-behind places" (Andrés Rodriguez-Pose):</strong>{" "}
            Regioner som inte kunnat dra nytta av tillväxten i storstäderna.
          </li>
          <li>De som bor där upplever sig övergivna av eliten.</li>
          <li>
            Detta kan leda till populistisk protest:
            <ul className={classes.list}>
              <li>Marine Le Pen i Frankrike</li>
              <li>Brexit i Storbritannien</li>
              <li>Trump i USA</li>
            </ul>
          </li>
          <li>
            I Sverige: Konfliktlinjen mellan stad och land är inte lika stark.
            Men det kan förändras om ojämlikheten ökar.
          </li>
        </ul>

        {/* 2.13 */}
        <h3 className={classes.subHeading}>
          2.13 Norrland och den gröna omställningen
        </h3>
        <ul className={classes.list}>
          <li>Norrland: 60 % av Sveriges yta, 1,2 miljoner invånare.</li>
          <li>Stora naturresurser: skog, malm, vattenkraft.</li>
          <li>
            Historisk bakgrund: Motorn i Sveriges industrialisering. När
            industrin automatiserades försvann många jobb.
          </li>
          <li>
            Problem: Unga flyttar, åldrande befolkning, lägre skatteintäkter,
            dyr infrastruktur.
          </li>
        </ul>

        <p className={classes.paragraph}>
          <strong>Den gröna omställningen</strong> = övergång från fossila
          bränslen till förnyelsebar energi.
        </p>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Möjligheter</th>
                <th className={classes.th}>Utmaningar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  Nya jobb (uppskattningsvis 50 000)
                </td>
                <td className={classes.td}>
                  Snabbt behov av bostäder och infrastruktur
                </td>
              </tr>
              <tr>
                <td className={classes.td}>Högre skatteintäkter</td>
                <td className={classes.td}>
                  Stora investeringsrisker för kommunerna
                </td>
              </tr>
              <tr>
                <td className={classes.td}>Ekonomisk tillväxt</td>
                <td className={classes.td}>Risk för "fly in - fly out"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={classes.paragraph}>
          <strong>"Fly in - fly out":</strong>
        </p>
        <ul className={classes.list}>
          <li>Anställda pendlar till jobbet men bor på annan ort.</li>
          <li>De beskattas på bostadsorten, inte på arbetsorten.</li>
          <li>Kommunen får kostnader för service men inga skatteintäkter.</li>
        </ul>

        <p className={classes.paragraph}>
          <strong>Förslag:</strong>
        </p>
        <ul className={classes.list}>
          <li>Staten bör ta större ansvar för kostnader och risker.</li>
          <li>
            Införa skatt på naturresurser (som i Finland, Norge och Danmark).
          </li>
        </ul>

        {/* 2.14 */}
        <h3 className={classes.subHeading}>
          2.14 Maktstrukturer och diskriminering
        </h3>

        <h4 className={classes.subHeading}>Strukturell maktordning</h4>
        <ul className={classes.list}>
          <li>Makt som existerar på gruppnivå, inte bara mellan individer.</li>
          <li>
            Exempel: Genussystemet, den urbana normen, etnisk boendesegregation.
          </li>
        </ul>

        <h4 className={classes.subHeading}>Diskrimineringslagen</h4>
        <p className={classes.paragraph}>
          <strong>Sju diskrimineringsgrunder:</strong>
        </p>
        <ol className={classes.list}>
          <li>Kön</li>
          <li>Könsöverskridande identitet eller uttryck</li>
          <li>Etnisk tillhörighet</li>
          <li>Religion eller annan trosuppfattning</li>
          <li>Funktionsnedsättning</li>
          <li>Sexuell läggning</li>
          <li>Ålder</li>
        </ol>

        <p className={classes.paragraph}>
          <strong>Diskrimineringsombudsmannen (DO):</strong>
        </p>
        <ul className={classes.list}>
          <li>Statlig myndighet som verkar för lika rättigheter.</li>
          <li>Kan granska ärenden och kräva skadestånd.</li>
        </ul>

        <h4 className={classes.subHeading}>Intersektionell analys</h4>
        <ul className={classes.list}>
          <li>Att förstå hur olika maktordningar samverkar.</li>
          <li>
            Exempel: Mariam utsätts för diskriminering som kvinna, muslim och
            somalier – inte bara för en av dessa faktorer.
          </li>
        </ul>

        {/* 2.15 */}
        <h3 className={classes.subHeading}>2.15 Svenska värderingar</h3>
        <ul className={classes.list}>
          <li>Begreppet "svenska värderingar" har diskuterats i politiken.</li>
          <li>
            Ett sätt att förstå värderingar är via en skala:
            <ul className={classes.list}>
              <li>
                <strong>Traditionella värderingar:</strong> religiösa
                föreställningar, respekt för auktoriteter.
              </li>
              <li>
                <strong>Sekulära och rationella värderingar:</strong> mindre
                religiöst inflytande, mer individualistiska.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ===== ORDLISTA ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          ORDLISTA – NYCKELBEGREPP (KAPITEL 1 OCH 2)
        </h2>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Begrepp</th>
                <th className={classes.th}>Förklaring</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>Absolut fattigdom</strong>
                </td>
                <td className={classes.td}>
                  Saknar resurser för grundläggande behov.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Assimilering</strong>
                </td>
                <td className={classes.td}>
                  Minoritet överger sin kultur för majoritetskulturen.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Den gröna omställningen</strong>
                </td>
                <td className={classes.td}>
                  Övergång från fossila till förnyelsebara energikällor.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Diskriminering</strong>
                </td>
                <td className={classes.td}>
                  Någon blir sämre behandlad på grund av en
                  diskrimineringsgrund.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Etnisk boendesegregation</strong>
                </td>
                <td className={classes.td}>
                  Utrikesfödda bor i hög grad i vissa områden.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Feminism</strong>
                </td>
                <td className={classes.td}>
                  Kampen för jämställdhet mellan könen.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Fly in – fly out</strong>
                </td>
                <td className={classes.td}>
                  Anställda pendlar till jobbet och beskattas på annan ort.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Fördomar</strong>
                </td>
                <td className={classes.td}>
                  Negativa föreställningar om en grupp människor.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Genus</strong>
                </td>
                <td className={classes.td}>Socialt konstruerat kön.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Genussystem</strong>
                </td>
                <td className={classes.td}>
                  Maktordning där manligt överordnas kvinnligt.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Gini-koefficient</strong>
                </td>
                <td className={classes.td}>Mått på inkomstskillnader.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>HBTQI</strong>
                </td>
                <td className={classes.td}>
                  Paraplybegrepp för homosexuella, bisexuella, transpersoner,
                  queera och intersexpersoner.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Heteronormativitet</strong>
                </td>
                <td className={classes.td}>
                  Normen att alla är heterosexuella.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Horisontell könssegregering</strong>
                </td>
                <td className={classes.td}>
                  Män och kvinnor arbetar i olika yrken/branscher.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Integration</strong>
                </td>
                <td className={classes.td}>
                  Process där olika grupper möts och lever tillsammans.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Jämlikhet</strong>
                </td>
                <td className={classes.td}>
                  Alla har samma värde och rättigheter.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Jämställdhet</strong>
                </td>
                <td className={classes.td}>Jämlikhet mellan könen.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Nationella minoriteter</strong>
                </td>
                <td className={classes.td}>
                  Judar, romer, sverigefinnar, samer, tornedalingar.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Normer</strong>
                </td>
                <td className={classes.td}>Oskrivna regler för beteende.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Queer</strong>
                </td>
                <td className={classes.td}>
                  Uttryck som utmanar normer kring genus och sexualitet.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Regional ojämlikhet</strong>
                </td>
                <td className={classes.td}>
                  Skillnader mellan regioner i tillväxt och levnadsstandard.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Regionalpolitik</strong>
                </td>
                <td className={classes.td}>
                  Politik för att skapa likvärdiga förutsättningar i hela
                  landet.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Relativ fattigdom</strong>
                </td>
                <td className={classes.td}>
                  Lägre ekonomisk standard än genomsnittet.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Segregation</strong>
                </td>
                <td className={classes.td}>Grupper lever åtskilda.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Stereotyper</strong>
                </td>
                <td className={classes.td}>Förenklade bilder av en grupp.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Strukturell maktordning</strong>
                </td>
                <td className={classes.td}>Makt på gruppnivå.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Urban norm</strong>
                </td>
                <td className={classes.td}>
                  Staden ses som norm, landsbygden som avvikelse.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Vertikal könssegregering</strong>
                </td>
                <td className={classes.td}>
                  Färre kvinnor på höga positioner.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Värdediskriminering</strong>
                </td>
                <td className={classes.td}>
                  Kvinnodominerade yrken har lägre lön.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== FRÅGOR OCH SVAR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>FRÅGOR OCH SVAR</h2>

        {/* Fråga 1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            1. Hur hänger fördomar och diskriminering ihop?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Fördomar</strong> är negativa föreställningar eller
              stereotyper om en grupp människor som man inte har kunskap om.{" "}
              <strong>Diskriminering</strong> är när någon blir sämre behandlad
              på grund av sin tillhörighet till en viss grupp.
            </p>
            <p className={classes.paragraph}>
              Sambandet är att fördomar ofta ligger till grund för
              diskriminering. När en arbetsgivare till exempel har en fördom om
              att muslimska kvinnor med slöja inte är självständiga (som i
              Mariams fall), kan det leda till att personen inte får en
              anställning – vilket då är diskriminering. Fördomar är alltså
              attityder och föreställningar, medan diskriminering är själva
              handlingen eller beteendet som missgynnar någon.
            </p>
          </div>
        </div>

        {/* Fråga 2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. Vad innebär begreppet normer?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Normer är oskrivna regler och förväntningar på hur människor ska
              vara och bete sig i olika sammanhang. Normer styr vårt beteende
              och våra uppfattningar om vad som är "normalt" eller "avvikande".
              De kan handla om allt från hur vi klär oss och vilka yrken vi
              väljer, till hur vi förväntas vara som män och kvinnor. Normer är
              ofta så inarbetade att vi inte tänker på dem, men de påverkar oss
              hela tiden.
            </p>
          </div>
        </div>

        {/* Fråga 3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. Ge exempel på normer som är funktionella och sådana som kan vara
            problematiska.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Exempel på funktionella normer:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Att inte tränga sig i kön – gör att samhället flyter på
                smidigare.
              </li>
              <li>
                Att tacka när man får något – skapar artighet och social
                ordning.
              </li>
              <li>
                Att inte prata högt i telefon på biblioteket – gör att andra kan
                arbeta i lugn och ro.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Exempel på problematiska normer:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Att kvinnor förväntas vara omhändertagande och mjuka, medan män
                förväntas vara starka och tekniskt kunniga – detta begränsar
                individers valmöjligheter och leder till horisontell
                könssegregering på arbetsmarknaden.
              </li>
              <li>
                Heteronormativitet – att alla förväntas vara heterosexuella,
                vilket kan leda till att hbtqi-personer känner sig avvikande och
                utsätts för diskriminering.
              </li>
              <li>
                Att män inte ska visa känslor – kan leda till psykisk ohälsa.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. Beskriv hur genus och makt hänger ihop enligt historikern Yvonne
            Hirdman.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Enligt Yvonne Hirdman hänger genus och makt ihop genom{" "}
              <strong>genussystemet</strong>, som är en maktstruktur som
              organiserar förhållandet mellan könen. Genussystemet bygger på två
              principer:
            </p>
            <ol className={classes.list}>
              <li>
                <strong>Isärhållning</strong> – män och kvinnor ses som
                varandras motsatser. Normerna för hur män respektive kvinnor ska
                vara ser helt olika ut.
              </li>
              <li>
                <strong>Manlig överordning</strong> – det som uppfattas som
                manligt värderas högre än det som uppfattas som kvinnligt. Detta
                tar sig uttryck i att mansdominerade yrken generellt har högre
                lön och status än kvinnodominerade yrken, även när
                utbildningsnivån är densamma (t.ex. tekniker vs förskollärare).
              </li>
            </ol>
            <p className={classes.paragraph}>
              Detta är en <strong>strukturell maktordning</strong>, vilket
              innebär att makt finns på gruppnivå – män som grupp är överordnade
              kvinnor som grupp. Det betyder dock inte att alla enskilda män
              alltid har makt över alla enskilda kvinnor.
            </p>
          </div>
        </div>

        {/* Fråga 5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            5. Vad står bokstäverna i begreppet HBTQI för?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>H</strong> – Homosexuella
              </li>
              <li>
                <strong>B</strong> – Bisexuella
              </li>
              <li>
                <strong>T</strong> – Transpersoner
              </li>
              <li>
                <strong>Q</strong> – Queer (personer med queera uttryck och
                identiteter)
              </li>
              <li>
                <strong>I</strong> – Intersexpersoner
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. 1944 och 1979 är viktiga årtal när det kommer till
            HBTQ-rättigheter. Vad hände dessa år?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>1944:</strong> Lagen som förbjöd homosexuella handlingar
                togs bort.
              </li>
              <li>
                <strong>1979:</strong> Homosexualitet togs bort ur
                Socialstyrelsens sjukdomsregister.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 7 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. Förklara skillnaden mellan begreppen jämlikhet och jämställdhet.
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Begrepp</th>
                    <th className={classes.th}>Innebörd</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>Jämlikhet</strong>
                    </td>
                    <td className={classes.td}>
                      Alla människor är lika mycket värda och har samma
                      juridiska rättigheter. Ett brett begrepp som omfattar alla
                      former av likabehandling.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Jämställdhet</strong>
                    </td>
                    <td className={classes.td}>
                      Jämlikhet mellan könen. Män och kvinnor har lika
                      rättigheter, möjligheter och skyldigheter inom alla
                      viktiga områden i livet. Jämställdhet är alltså en
                      specifik form av jämlikhet.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Fråga 8 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>8. Vad innebär:</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>a) Horisontell könssegregering?</strong>
            </p>
            <p className={classes.paragraph}>
              Att män och kvinnor arbetar inom olika yrken och branscher.
              Kvinnor dominerar till exempel inom vård och omsorg, medan män
              dominerar inom industri och byggbranschen. Endast fyra av Sveriges
              30 största yrken har en jämn könsfördelning (40–60 % av vardera
              könet).
            </p>
            <p className={classes.paragraph}>
              <strong>b) Vertikal könssegregering?</strong>
            </p>
            <p className={classes.paragraph}>
              Att det finns färre kvinnor på högre positioner och att män i
              högre grad innehar maktpositioner. Kvinnor är underrepresenterade
              på chefsposter och i ledande positioner i samhället.
            </p>
          </div>
        </div>

        {/* Fråga 9 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. Vilka är Sveriges nationella minoriteter?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Sveriges fem erkända nationella minoriteter är:
            </p>
            <ol className={classes.list}>
              <li>Judar</li>
              <li>Romer</li>
              <li>Sverigefinnar</li>
              <li>Samer</li>
              <li>Tornedalingar</li>
            </ol>
          </div>
        </div>

        {/* Fråga 10 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. Vad krävs för att en grupp ska räknas som en nationell
            minoritet?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              För att en grupp ska räknas som en nationell minoritet krävs att:
            </p>
            <ol className={classes.list}>
              <li>Gruppen har en egen identitet som en etnisk grupp.</li>
              <li>
                Gruppen har en lång historia av att ha levt och verkat inom
                Sveriges gränser.
              </li>
            </ol>
            <p className={classes.paragraph}>
              De nationella minoriteterna har rätt att behålla och utveckla sitt
              eget språk och sin kultur enligt lag.
            </p>
          </div>
        </div>

        {/* Fråga 11 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. Förklara begreppen integration och segregation.
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Begrepp</th>
                    <th className={classes.th}>Innebörd</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>Integration</strong>
                    </td>
                    <td className={classes.td}>
                      En process där olika grupper möts och lever tillsammans på
                      likvärdiga villkor. Det innebär att nyanlända och
                      etablerade grupper samverkar och delar samhällets resurser
                      och möjligheter.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Segregation</strong>
                    </td>
                    <td className={classes.td}>
                      Motsatsen till integration. Det innebär att grupper lever
                      åtskilda från varandra, till exempel på bostadsmarknaden,
                      arbetsmarknaden och i sociala sammanhang. Etnisk
                      boendesegregation är ett exempel där utrikesfödda bor i
                      hög grad i vissa områden.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Fråga 12 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. Vad är skillnaden mellan assimilering, mångkultur och kulturell
            smältdegel?
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Begrepp</th>
                    <th className={classes.th}>Innebörd</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>Assimilering</strong>
                    </td>
                    <td className={classes.td}>
                      En process där en etnisk minoritet helt överger sin
                      ursprungskultur och uppgår i majoritetskulturen. Man
                      anpassar sig helt till majoritetssamhällets sätt att leva.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Mångkultur</strong>
                    </td>
                    <td className={classes.td}>
                      Olika kulturer existerar parallellt och tillåts behålla
                      sina kulturella särdrag. Ingen kultur förväntas försvinna
                      eller ersätta den andra.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Kulturell smältdegel</strong>
                    </td>
                    <td className={classes.td}>
                      Kulturer blandas så att något nytt uppstår. Det är en
                      blandning av olika kulturella uttryck som skapar en ny
                      gemensam kultur.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Fråga 13 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. Vilka orsaker finns till att det skapas etnisk
            boendesegregation?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Enligt Boverket finns det både strukturella orsaker och
              individuella preferenser:
            </p>
            <p className={classes.paragraph}>
              <strong>Individuella preferenser:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Nyanlända väljer ofta att bosätta sig och bli kvar i områden där
                det bor andra från samma land (liknande mönster sågs när
                svenskar utvandrade till Amerika).
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Strukturella orsaker:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Den som kommer ny till ett land saknar ofta ekonomiska resurser
                och hänvisas därför till mindre attraktiva områden med många
                hyresrätter.
              </li>
              <li>
                Utrikesfödda tillhör ofta grupper med sämre ekonomiska
                förutsättningar, vilket sammanfaller med att de hänvisas till
                dessa områden.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 14 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. Vad innebär det att befinna sig i mellanförskap?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Mellanförskap innebär att man befinner sig mitt emellan två
              kulturer och inte känner sig riktigt hemma någonstans. Man ses som
              utländsk i Sverige men som svensk i sitt ursprungsland. Detta kan
              skapa identitetsproblem.
            </p>
            <p className={classes.paragraph}>
              <strong>Positiva aspekter:</strong> Det kan också vara en rikedom
              att ha tillgång till flera språk och kulturella uttryck.
            </p>
            <p className={classes.paragraph}>
              <strong>Exempel:</strong> Melody Farshin beskriver att hon
              identifierar sig starkt med sin förort Husby snarare än med
              Sverige eller Iran. Hon är en "mix av allt möjligt" påverkad av
              vänner från olika länder.
            </p>
          </div>
        </div>

        {/* Fråga 15 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            15. Beskriv hur Karl Marx såg på klassamhället.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Karl Marx såg på klassamhället utifrån en konflikt mellan två
              huvudklasser:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Kapitalisterna/ägarklassen</strong> – de som äger
                produktionsmedlen (fabriker, maskiner, råvaror).
              </li>
              <li>
                <strong>Arbetarklassen</strong> – de som säljer sin arbetskraft
                för att överleva.
              </li>
            </ul>
            <p className={classes.paragraph}>
              Enligt Marx präglas klassamhället av en strukturell konflikt
              mellan dessa grupper, eftersom kapitalisterna vill maximera sin
              vinst medan arbetarna vill ha högre lön och bättre villkor. Marx
              menade att denna konflikt i förlängningen skulle leda till att
              arbetarklassen skulle resa sig och skapa ett klasslöst samhälle.
            </p>
          </div>
        </div>

        {/* Fråga 16 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            16. Beskriv skillnaden mellan absolut fattigdom och relativ
            fattigdom.
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Begrepp</th>
                    <th className={classes.th}>Innebörd</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>Absolut fattigdom</strong>
                    </td>
                    <td className={classes.td}>
                      Man saknar resurser för att tillgodose sina grundläggande
                      behov som mat, bostad och värme. Det handlar om
                      överlevnad.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Relativ fattigdom</strong>
                    </td>
                    <td className={classes.td}>
                      Man har en lägre ekonomisk standard än genomsnittet i det
                      samhälle man lever i. Man kanske har tak över huvudet och
                      mat, men kan inte delta i samhällslivet på samma sätt som
                      andra (t.ex. inte ha råd med mobiltelefon,
                      fritidsaktiviteter för barnen eller att gå på restaurang).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={classes.paragraph}>
              I Sverige har den absoluta fattigdomen minskat, medan den relativa
              fattigdomen har ökat – alltså har svenskarna fått mer i plånboken
              men klyftorna har ökat.
            </p>
          </div>
        </div>

        {/* Fråga 17 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>17. Vad är en klassmarkör?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En klassmarkör är en symbol eller ett beteende som visar vilken
              samhällsklass en person tillhör. Det kan handla om livsstil, smak,
              umgänge, klädstil eller fritidsaktiviteter.
            </p>
            <p className={classes.paragraph}>
              <strong>Exempel:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Att gå på opera och äta ostron förknippas ofta med överklassen.
              </li>
              <li>Öl och charterresor förknippas ofta med arbetarklassen.</li>
            </ul>
            <p className={classes.paragraph}>
              <em>Observera:</em> Klassmarkörer förändras över tid. Golf var
              tidigare en överklassport men har idag blivit mer folklig och
              förlorat sin status som klassmarkör.
            </p>
          </div>
        </div>

        {/* Fråga 18 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            18. Inom forskningen talar man om att det finns ett urbant
            tolkningsföreträde. Vad betyder det?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Urban tolkningsföreträde innebär att det är staden som sätter
              agendan för vad som ses som viktiga samhällsfrågor och hur dessa
              frågor ska diskuteras. Staden och dess perspektiv ses som norm,
              medan landsbygdens perspektiv marginaliseras.
            </p>
            <p className={classes.paragraph}>
              Detta är en del av den urbana normen, där staden förknippas med
              positiva värden som modernitet och framtid, medan landsbygden
              förknippas med tröghet och bristande ambition. Det leder till att
              landsbygdens frågor inte prioriteras i den offentliga debatten.
            </p>
          </div>
        </div>

        {/* Fråga 19 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            19. Vad är syftet med regionalpolitik?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Syftet med regionalpolitik är att skapa likvärdiga förutsättningar
              för samhällsutveckling i olika delar av landet. I praktiken
              handlar det om att:
            </p>
            <ul className={classes.list}>
              <li>
                Stötta mindre gynnade områden genom satsningar på företagande,
                turism och infrastruktur.
              </li>
              <li>Jämna ut skillnaderna mellan regioner.</li>
            </ul>
            <p className={classes.paragraph}>
              Detta görs bland annat genom det kommunala utjämningssystemet och
              genom EU:s regionalpolitiska program som ger stöd till ekonomiskt
              eftersatta områden.
            </p>
          </div>
        </div>

        {/* Fråga 20 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            20. Hur påverkas norra Sverige av den gröna omställningen?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Norra Sverige påverkas på både positiva och negativa sätt:
            </p>
            <p className={classes.paragraph}>
              <strong>Möjligheter:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Nya jobb skapas (uppskattningsvis 50 000 nya arbetstillfällen).
              </li>
              <li>Högre skatteintäkter till kommunerna.</li>
              <li>Ekonomisk tillväxt och större framtidstro.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Utmaningar:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Kommunerna måste snabbt ordna fram bostäder, infrastruktur och
                samhällsservice.
              </li>
              <li>
                Stora investeringsrisker – om företag flyttar eller går i
                konkurs kan kommunerna stå med kostnader för service som inte
                längre behövs.
              </li>
              <li>Risk för "fly in – fly out".</li>
              <li>
                Satsningarna kan leda till stora skador på naturen och försämra
                möjligheterna att bedriva rennäring.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 21 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            21. Vad är fly in – fly out och varför är det ett problem för
            kommunerna i norr?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              "Fly in – fly out" är ett fenomen där anställda pendlar till sitt
              arbete (t.ex. i en ny industri i Norrland) men bor kvar på en
              annan ort. De "flyger in" för att jobba och "flyger ut" när
              arbetspasset är slut.
            </p>
            <p className={classes.paragraph}>
              <strong>Problemet för kommunerna:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                De anställda beskattas på sin bostadsort, inte på arbetsorten.
              </li>
              <li>
                Kommunen där industrin ligger får kostnader för att bygga ut
                infrastruktur, bostäder och service, men får inga skatteintäkter
                från de anställda.
              </li>
              <li>Det blir en ekonomisk belastning för kommunen.</li>
            </ul>
          </div>
        </div>

        {/* Fråga 22 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            22. Vad innebär det att göra en intersektionell analys?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En intersektionell analys innebär att man undersöker hur olika
              maktordningar och diskrimineringsgrunder samverkar och skapar
              unika erfarenheter för en individ. Man tittar på hur flera olika
              faktorer som genus, etnicitet, klass, religion, ålder,
              funktionsnedsättning och sexuell läggning påverkar varandra.
            </p>
            <p className={classes.paragraph}>
              <strong>Exempel (Mariam):</strong> Hon utsätts inte bara för
              diskriminering för att hon är kvinna, eller för att hon är muslim,
              eller för att hon är somalier – hon utsätts för en kombination av
              alla dessa faktorer samtidigt. Denna kombination skapar en unik
              erfarenhet av diskriminering som skiljer sig från exempelvis en
              etnisk svensk muslimsk kvinna eller en somalisk man.
            </p>
          </div>
        </div>

        {/* Fråga 23 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            23. Vilka är de sju diskrimineringsgrunderna?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              De sju diskrimineringsgrunderna enligt Diskrimineringslagen är:
            </p>
            <ol className={classes.list}>
              <li>Kön</li>
              <li>Könsöverskridande identitet eller uttryck</li>
              <li>Etnisk tillhörighet</li>
              <li>Religion eller annan trosuppfattning</li>
              <li>Funktionsnedsättning</li>
              <li>Sexuell läggning</li>
              <li>Ålder</li>
            </ol>
            <p className={classes.paragraph}>
              Den som anser sig ha blivit diskriminerad på någon av dessa
              grunder kan anmäla fallet till Diskrimineringsombudsmannen (DO).
            </p>
          </div>
        </div>

        {/* Fråga 24 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            24. Vad innebär identitetspolitik?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Identitetspolitik innebär att politiska frågor och rörelser utgår
              från människors identitet och tillhörighet till olika grupper –
              som kön, etnicitet, sexualitet eller religion. Istället för att
              fokusera på klass eller ekonomiska frågor, lyfter
              identitetspolitiken fram hur olika gruppers specifika erfarenheter
              av diskriminering och förtryck behöver uppmärksammas.
            </p>
            <p className={classes.paragraph}>
              <strong>Exempel:</strong> HBTQI-rörelsen, feministiska rörelser
              och antirasistiska rörelser kan ses som former av
              identitetspolitik. Kritiker menar att identitetspolitik kan
              splittra samhället, medan förespråkare menar att det är nödvändigt
              för att synliggöra strukturell diskriminering.
            </p>
          </div>
        </div>

        {/* Fråga 25 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            25. Varför är social tillit en viktig förutsättning för att
            samhället ska fungera väl?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Social tillit innebär att människor litar på varandra och på
              samhällets institutioner (som polis, domstolar, skola och
              sjukvård).
            </p>
            <p className={classes.paragraph}>
              <strong>Varför det är viktigt:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Minskar konflikter:</strong> När människor litar på
                varandra och på myndigheter minskar risken för sociala
                konflikter och våld.
              </li>
              <li>
                <strong>Underlättar samarbete:</strong> Tillit gör att människor
                kan samarbeta och samverka över gruppgränser.
              </li>
              <li>
                <strong>Skapar trygghet:</strong> Människor känner sig tryggare
                i ett samhälle med hög tillit.
              </li>
              <li>
                <strong>Demokratins fundament:</strong> Utan tillit till
                rättssystemet och politiken fungerar inte demokratin.
              </li>
              <li>
                <strong>Ekonomisk tillväxt:</strong> Forskning visar att länder
                med hög social tillit har bättre ekonomisk utveckling.
              </li>
            </ul>
            <p className={classes.paragraph}>
              I Sverige är den sociala tilliten generellt hög, vilket är en
              viktig förutsättning för att välfärdssamhället och demokratin ska
              fungera.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ANALYSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>ANALYSFRÅGOR (sid 54)</h2>

        {/* A1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. Utgå från begreppet mellanförskap så som det definieras i
            texten. Vilka orsaker finns till att människor hamnar i
            mellanförskap? Vilka konsekvenser får mellanförskapet på individnivå
            och på samhällsnivå? Är mellanförskap enbart negativt eller kan det
            finnas positiva aspekter av att befinna sig i mellanförskap?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Orsaker till mellanförskap:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Invandring och migration – när människor flyttar från ett land
                till ett annat.
              </li>
              <li>
                Att växa upp med föräldrar från en kultur samtidigt som man
                lever i en annan kultur i skola och samhälle.
              </li>
              <li>
                Att vara mellan två kulturer där man inte fullt ut accepteras i
                någon av dem.
              </li>
              <li>
                Att ha en etnisk bakgrund som skiljer sig från
                majoritetsbefolkningen.
              </li>
              <li>
                Att uppleva att man ses som "utländsk" i Sverige men som
                "svensk" i ursprungslandet.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Konsekvenser på individnivå:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Negativa:</strong> Identitetsproblem, känsla av
                rotlöshet, psykisk ohälsa, utanförskap, att inte känna sig hemma
                någonstans.
              </li>
              <li>
                <strong>Positiva:</strong> Tillgång till flera språk och
                kulturella uttryck, bredare perspektiv, förmåga att röra sig
                mellan olika kulturer (kulturell kompetens).
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Konsekvenser på samhällsnivå:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Negativa:</strong> Segregation, sociala spänningar,
                minskad social tillit, risk för politisk polarisering.
              </li>
              <li>
                <strong>Positiva:</strong> Kulturell mångfald, innovation och
                kreativitet när olika perspektiv möts.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Är mellanförskap enbart negativt?</strong>
            </p>
            <p className={classes.paragraph}>
              Nej, mellanförskap kan även ses som en resurs. Som Melody Farshin
              beskriver det: att vara en "mix av allt möjligt" kan vara en
              rikedom. De som befinner sig i mellanförskap kan ofta navigera
              mellan olika kulturer, vilket är en värdefull förmåga i en
              globaliserad värld.
            </p>
          </div>
        </div>

        {/* A2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. Gör en intersektionell analys av hur ett politiskt beslut kan
            påverka olika grupper i samhället. Utgå från minst två av
            kategorierna genus, etnicitet, klass och stad/land.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Exempel: Gratis kollektivtrafik för alla</strong>
            </p>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Kategori</th>
                    <th className={classes.th}>Påverkan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>Klass</strong>
                    </td>
                    <td className={classes.td}>
                      Positivt för personer med låg ekonomisk standard
                      (arbetarklass, låginkomsttagare) som annars har svårt att
                      ha råd med månadskort. Ökar rörligheten och möjligheten
                      att söka jobb utanför närområdet. Mindre positivt för
                      höginkomsttagare som ändå har råd och kanske hellre
                      använder bil.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Stad/Land</strong>
                    </td>
                    <td className={classes.td}>
                      Mycket positivt i storstäder där kollektivtrafiken är
                      utbyggd och fungerar. På landsbygden där kollektivtrafiken
                      är dålig eller obefintlig får förslaget liten eller ingen
                      effekt. Skillnaderna mellan stad och land riskerar att
                      förstärkas.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Genus</strong>
                    </td>
                    <td className={classes.td}>
                      Kvinnor använder kollektivtrafik i högre utsträckning än
                      män (delvis pga lägre bilägande). Förslaget gynnar därmed
                      kvinnor mer än män. Det kan också öka kvinnors rörlighet
                      och möjlighet att ta jobb, vilket bidrar till
                      jämställdhet.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Etnicitet</strong>
                    </td>
                    <td className={classes.td}>
                      Utrikesfödda har ofta lägre inkomster och är
                      överrepresenterade i kollektivtrafiken. Förslaget gynnar
                      därmed denna grupp. Dock – om kollektivtrafiken är sämre i
                      områden med hög andel utrikesfödda (segregerade förorter)
                      minskar nyttan.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> Förslaget gynnar framför allt kvinnor,
              låginkomsttagare och personer i storstäder. Det har mindre effekt
              på landsbygden och för män med hög inkomst. En intersektionell
              analys visar att förslaget kan bidra till ökad jämlikhet på vissa
              områden men också riskerar att förstärka klyftan mellan stad och
              land.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DISKUSSIONSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>DISKUSSIONSFRÅGOR (sid 54)</h2>

        {/* D1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. Diskutera begreppen assimilering, mångkultur och kulturell
            smältdegel. Vilken av modellerna tror ni är bäst för att skapa ett
            välfungerande samhälle?
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Modell</th>
                    <th className={classes.th}>Fördelar</th>
                    <th className={classes.th}>Nackdelar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>Assimilering</strong>
                    </td>
                    <td className={classes.td}>
                      Skapar en enhetlig nationell identitet, minskar risken för
                      kulturella konflikter.
                    </td>
                    <td className={classes.td}>
                      Kräver att minoriteter ger upp sin kultur – kan leda till
                      identitetsförlust och psykisk ohälsa. Historiskt har
                      assimilering ofta varit påtvingad och brutal (t.ex. mot
                      samerna).
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Mångkultur</strong>
                    </td>
                    <td className={classes.td}>
                      Respekterar och bevarar olika kulturer, ger människor rätt
                      att behålla sin identitet.
                    </td>
                    <td className={classes.td}>
                      Kan leda till parallellsamhällen och segregation om
                      grupper inte möts. Kan försvåra gemensamma värderingar.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={classes.paragraph}>
              <strong>Vilken modell är bäst?</strong>
            </p>
            <p className={classes.paragraph}>
              En kombination av mångkultur och integration är ofta den mest
              framgångsrika modellen. Människor ska få behålla sin kulturella
              identitet (mångkultur) samtidigt som samhället skapar mötesplatser
              och gemensamma arenor där olika grupper kan mötas och lära känna
              varandra (integration). För mycket assimilering kan leda till
              motstånd, medan för mycket mångkultur utan gemensamma mötesplatser
              kan leda till segregation. Sverige har historiskt satsat på en
              mångkulturell modell, men debatten om integration och segregation
              visar att det finns utmaningar.
            </p>
          </div>
        </div>

        {/* D2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. Titta på tabellen som visar låg ekonomisk standard för olika
            samhällsgrupper. Varför är vissa grupper extra utsatta och hur
            påverkar det ett barn att växa upp under låg ekonomisk standard?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Varför vissa grupper är extra utsatta:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Utrikes födda:</strong> Har ofta svårt att etablera sig
                på arbetsmarknaden pga bristande språkkunskaper, avsaknad av
                nätverk och att utländska utbildningar inte erkänns i Sverige.
              </li>
              <li>
                <strong>Ensamstående kvinnor med barn:</strong> Har ofta lägre
                inkomster, deltidstjänster och mindre möjlighet att arbeta
                heltid pga ansvar för barn.
              </li>
              <li>
                <strong>Personer med funktionsnedsättning:</strong> Har svårare
                att få arbete och är därför överrepresenterade bland
                låginkomsttagare.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Hur påverkar låg ekonomisk standard ett barn?</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Materiella begränsningar:</strong> Barnet kanske inte
                har råd med fritidsaktiviteter, utflykter, nya kläder eller
                mobiltelefon – vilket kan leda till socialt utanförskap.
              </li>
              <li>
                <strong>Boendesituation:</strong> Trångboddhet och sämre
                boendemiljö påverkar studiero och hälsa.
              </li>
              <li>
                <strong>Psykisk påverkan:</strong> Stress och oro över ekonomin
                hos föräldrarna påverkar barnens psykiska hälsa.
              </li>
              <li>
                <strong>Skolresultat:</strong> Forskning visar att barn från
                låginkomsthushåll generellt har sämre skolresultat, vilket
                påverkar deras framtida möjligheter.
              </li>
              <li>
                <strong>Socialt arv:</strong> Risken är större att barnet själv
                hamnar i ekonomisk utsatthet som vuxen.
              </li>
            </ul>
          </div>
        </div>

        {/* D3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D3. Vilken av de kategorier som nämns i texten (genus, etnicitet,
            klass samt stad/land) anser ni har störst betydelse för en människas
            möjligheter i livet?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Alla kategorier samverkar (intersektionalitet), men här är en
              analys av var och en:
            </p>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Kategori</th>
                    <th className={classes.th}>
                      Betydelse för livsmöjligheter
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>Klass</strong>
                    </td>
                    <td className={classes.td}>
                      Har mycket stor betydelse – den avgör vilka ekonomiska
                      resurser, vilket socialt nätverk och vilken
                      utbildningsmöjlighet man har. Klass påverkar i hög grad
                      hälsa, boende, utbildning och karriärmöjligheter.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Genus</strong>
                    </td>
                    <td className={classes.td}>
                      Påverkar allt från lönenivå till vilka yrken som anses
                      "passande". Kvinnor möter fortfarande strukturella hinder
                      som glastak och värdediskriminering.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Etnicitet</strong>
                    </td>
                    <td className={classes.td}>
                      Påverkar möjligheter på arbetsmarknaden, boendesegregation
                      och risken att utsättas för diskriminering. Utrikesfödda
                      har generellt sämre ekonomiska förutsättningar.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Stad/Land</strong>
                    </td>
                    <td className={classes.td}>
                      Påverkar tillgång till utbildning, jobb och service.
                      Storstäder erbjuder fler möjligheter, medan landsbygden
                      kan innebära färre valmöjligheter men lägre
                      levnadskostnader.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> Många skulle argumentera för att klass
              har störst betydelse, eftersom den påverkar nästan alla andra
              aspekter av livet. Men en intersektionell analys visar att det är
              kombinationen av dessa faktorer som avgör en individs faktiska
              möjligheter. Att vara en kvinna (genus) med utländsk bakgrund
              (etnicitet) och från en arbetarklassfamilj (klass) som bor på
              landsbygden (stad/land) skapar en helt annan livssituation än att
              vara en man med svensk bakgrund från överklassen som bor i
              Stockholm.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FÖRDJUPNINGSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>FÖRDJUPNINGSFRÅGOR (sid 54)</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F1. Sveriges jämställdhetspolitiska mål
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Uppgift:</strong> Gå in på jämställdhetsmyndighetens
              webbsida och läs om Sveriges jämställdhetspolitiska mål. Välj
              sedan ut ett av målen och fördjupa dig i vad det innebär och hur
              utvecklingen ser ut.
            </p>
            <p className={classes.paragraph}>
              <strong>Vägledning:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Sveriges jämställdhetspolitiska mål är att kvinnor och män ska
                ha samma makt att forma samhället och sina egna liv.
              </li>
              <li>
                Detta bryts ner i delmål: jämn fördelning av makt och
                inflytande, ekonomisk jämställdhet, jämställd utbildning, jämn
                fördelning av det obetalda hemarbetet, jämställd hälsa, samt att
                mäns våld mot kvinnor ska upphöra.
              </li>
              <li>
                Välj ett delmål, t.ex. "Jämn fördelning av det obetalda hem- och
                omsorgsarbetet". Undersök statistik – kvinnor gör fortfarande en
                större del av hushållsarbetet. Diskutera utvecklingen och vilka
                åtgärder som föreslås.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>F2. Nationella minoriteter</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Uppgift:</strong> Ta reda på mer om någon av Sveriges
              nationella minoriteter. Utgå från webbsidan minoritet.se
            </p>
            <p className={classes.paragraph}>
              <strong>Vägledning:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                Välj t.ex. samer. Ta reda på: deras historia, traditionella
                näringar (renskötsel), språk (samiska), utsatthet historiskt
                (tvångsförflyttningar, förbud mot att tala samiska i skolan),
                deras rättigheter idag och utmaningar (t.ex. konflikter mellan
                renskötsel och gruvdrift/vindkraft).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F3. Boendesegregation i din kommun
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Uppgift:</strong> Gå in på Segregationsbarometerns
              webbsida (segregationsbarometern.boverket.se) och ta reda på mer
              om hur boendesegregationen ser ut i den kommun som du bor i.
            </p>
            <p className={classes.paragraph}>
              <strong>Vägledning:</strong>
            </p>
            <ul className={classes.list}>
              <li>Sök upp din kommun på kartan.</li>
              <li>
                Titta på hur utrikesfödda är fördelade över kommunens olika
                områden.
              </li>
              <li>
                Undersök skillnader i inkomstnivåer, utbildningsnivå och
                arbetslöshet mellan olika bostadsområden.
              </li>
              <li>
                Reflektera över vilka konsekvenser detta får för människors
                livsvillkor.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F4. Granska ett diskrimineringsärende
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Uppgift:</strong> Utgå från Diskrimineringsombudsmannens
              webbsida (do.se) och klicka dig vidare till Tvister, domar och
              tillsynsbeslut. Fördjupa dig i något av de fall som DO har
              hanterat det senaste året. Beskriv ärendet, vilka
              diskrimineringsgrunder det rör, vilken bedömning DO gjorde och
              vilka konsekvenser det fick.
            </p>
            <p className={classes.paragraph}>
              <strong>Vägledning:</strong>
            </p>
            <ul className={classes.list}>
              <li>Hitta ett aktuellt ärende på DO:s hemsida.</li>
              <li>
                Beskriv ärendet: Vad handlade fallet om? Vem anmälde? Mot vem?
              </li>
              <li>
                Diskrimineringsgrund: Vilken av de sju grunderna rörde det sig
                om (kön, etnicitet, religion, etc.)?
              </li>
              <li>
                DO:s bedömning: Kom de fram till att diskriminering hade skett
                eller inte?
              </li>
              <li>
                Konsekvenser: Blev det skadestånd? Förlikning? Dom i domstol?
                Vilket belopp i så fall?
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== NYCKELORD ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>NYCKELORD – Korta förklaringar</h2>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Nyckelord</th>
                <th className={classes.th}>Förklaring</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>Absolut fattigdom</strong>
                </td>
                <td className={classes.td}>
                  Saknar resurser för grundläggande behov (mat, bostad, värme).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Assimilering</strong>
                </td>
                <td className={classes.td}>
                  Minoritet överger sin kultur och uppgår i majoritetskulturen.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Den gröna omställningen</strong>
                </td>
                <td className={classes.td}>
                  Övergång från fossila till förnyelsebara energikällor.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Diskriminering</strong>
                </td>
                <td className={classes.td}>
                  Någon blir sämre behandlad pga en diskrimineringsgrund.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Etnisk boendesegregation</strong>
                </td>
                <td className={classes.td}>
                  Utrikesfödda bor i hög grad i vissa bostadsområden.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Feminism</strong>
                </td>
                <td className={classes.td}>
                  Kampen för jämställdhet mellan könen.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Fly in - fly out</strong>
                </td>
                <td className={classes.td}>
                  Anställda pendlar till jobbet, beskattas på annan ort.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Fördomar</strong>
                </td>
                <td className={classes.td}>
                  Negativa föreställningar om en grupp människor.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Genus</strong>
                </td>
                <td className={classes.td}>
                  Socialt konstruerat kön (till skillnad från biologiskt).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Genussystem</strong>
                </td>
                <td className={classes.td}>
                  Maktordning där manligt överordnas kvinnligt (Hirdman).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Gini-koefficient</strong>
                </td>
                <td className={classes.td}>
                  Mått på inkomstskillnader i ett land.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>HBTQI</strong>
                </td>
                <td className={classes.td}>
                  Paraplybegrepp: Homosexuella, Bisexuella, Transpersoner,
                  Queer, Intersexpersoner.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Heteronormativitet</strong>
                </td>
                <td className={classes.td}>
                  Normen att alla är heterosexuella och ska bilda familj med
                  motsatt kön.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Horisontell könssegregering</strong>
                </td>
                <td className={classes.td}>
                  Män och kvinnor arbetar i olika yrken/branscher.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Nationella minoriteter</strong>
                </td>
                <td className={classes.td}>
                  Judar, romer, sverigefinnar, samer, tornedalingar.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Normer</strong>
                </td>
                <td className={classes.td}>
                  Oskrivna regler för hur vi förväntas vara och bete oss.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Queer</strong>
                </td>
                <td className={classes.td}>
                  Uttryck som utmanar normer kring genus och sexualitet.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Regional ojämlikhet</strong>
                </td>
                <td className={classes.td}>
                  Skillnader mellan regioner i tillväxt, levnadsstandard och
                  service.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Regionalpolitik</strong>
                </td>
                <td className={classes.td}>
                  Politik för att skapa likvärdiga förutsättningar i hela
                  landet.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Relativ fattigdom</strong>
                </td>
                <td className={classes.td}>
                  Lägre ekonomisk standard än genomsnittet i samhället.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Segregation</strong>
                </td>
                <td className={classes.td}>
                  Grupper lever åtskilda (t.ex. bostadssegregation).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Stereotyper</strong>
                </td>
                <td className={classes.td}>
                  Förenklade och ofta felaktiga bilder av en grupp.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Strukturell maktordning</strong>
                </td>
                <td className={classes.td}>
                  Makt på gruppnivå (t.ex. män överordnade kvinnor som grupp).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Urban norm</strong>
                </td>
                <td className={classes.td}>
                  Staden ses som norm, landsbygden som avvikelse.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Vertikal könssegregering</strong>
                </td>
                <td className={classes.td}>
                  Färre kvinnor på höga positioner.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Värdediskriminering</strong>
                </td>
                <td className={classes.td}>
                  Kvinnodominerade yrken har lägre lön än mansdominerade.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
