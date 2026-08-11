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

export default function TemplateLessonFifteen() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>KAPITEL 15: INTERNATIONELLA SAMARBETEN</h1>
      <p className={classes.subtitle}>
        Fullständig sammanfattning med frågor, analys, diskussion och nyckelord
      </p>

      {/* ===== 1. SVENSK UTRIKES- OCH SÄKERHETSPOLITIK ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. SVENSK UTRIKES- OCH SÄKERHETSPOLITIK</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver hur Sverige arbetar med förbindelser gentemot
          andra länder.
        </p>

        <h3 className={classes.subHeading}>Diplomati – grunden för samarbete mellan stater</h3>
        <ul className={classes.list}>
          <li>
            <strong>Utrikespolitik:</strong> Sveriges förbindelser med och politik
            gentemot andra länder.
          </li>
          <li>
            <strong>Säkerhetspolitik:</strong> En del av utrikespolitiken som syftar
            till att förebygga risker och hot.
          </li>
          <li>
            <strong>Diplomati:</strong> Det viktigaste verktyget för att undvika
            krig och nå fredliga konfliktlösningar genom samtal och förhandlingar.
          </li>
          <li>
            <strong>Diplomatiska kanaler:</strong> Kommunikation via diplomater
            stationerade utomlands.
          </li>
          <li>
            <strong>Ambassadör:</strong> Den främsta officiella representanten
            för ett land.
          </li>
          <li>
            <strong>Diplomatens uppgifter:</strong>
            <ul className={classes.list}>
              <li>Rapportera hem om politisk och ekonomisk utveckling.</li>
              <li>Hantera frågor om krig och fred, handelsfrågor.</li>
              <li>Omhändertagande av landsmän som råkat illa ut utomlands.</li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>Sveriges säkerhetspolitiska linje</h3>
        <ul className={classes.list}>
          <li>
            <strong>Alliansfrihet:</strong> Sverige har historiskt varit alliansfritt
            och neutralt.
          </li>
          <li>
            <strong>Samarbete med omvärlden:</strong> Sverige samarbetar med andra
            länder och organisationer (FN, EU, Nato efter 2024).
          </li>
          <li>
            <strong>Svenskt Natomedlemskap:</strong> Sverige ansökte om medlemskap
            i Nato 2022 efter Rysslands invasion av Ukraina och blev formellt
            medlem 2024.
          </li>
          <li>
            <strong>Totalförsvar:</strong> Sverige har återuppbyggt totalförsvaret
            (militärt och civilt försvar) efter säkerhetsläget i Europa försämrats.
          </li>
        </ul>
      </section>

      {/* ===== 2. FN – FÖRENADE NATIONERNA ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. FN – FÖRENADE NATIONERNA</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver FN:s uppbyggnad, organ och funktion.
        </p>

        <h3 className={classes.subHeading}>FN:s grundläggande syften</h3>
        <ol className={classes.list}>
          <li>Upprätthålla internationell fred och säkerhet.</li>
          <li>Utveckla vänskapliga förbindelser mellan nationer.</li>
          <li>
            Främja samarbete för att lösa internationella problem (ekonomiska,
            sociala, kulturella och humanitära).
          </li>
          <li>Verka för mänskliga rättigheter och grundläggande friheter.</li>
        </ol>

        <h3 className={classes.subHeading}>FN:s huvudorgan</h3>

        <h4 className={classes.subHeading}>1. Generalförsamlingen</h4>
        <ul className={classes.list}>
          <li>Alla 193 medlemsstater är representerade.</li>
          <li>Varje land har en röst.</li>
          <li>Möts årligen i New York.</li>
          <li>Beslut i viktiga frågor kräver två tredjedels majoritet.</li>
          <li>
            Kan anta rekommendationer och uttalanden (ej juridiskt bindande men
            har stor tyngd).
          </li>
        </ul>

        <h4 className={classes.subHeading}>2. Säkerhetsrådet</h4>
        <ul className={classes.list}>
          <li>
            <strong>15 medlemmar totalt:</strong>
            <ul className={classes.list}>
              <li>
                <strong>5 permanenta medlemmar (P5):</strong> USA, Ryssland, Kina,
                Storbritannien, Frankrike.
              </li>
              <li>
                <strong>10 övriga medlemmar:</strong> Väljs av generalförsamlingen
                för två år.
              </li>
            </ul>
          </li>
          <li>
            <strong>Vetorätt:</strong> Varje permanent medlem kan stoppa ett
            beslut genom att rösta nej.
          </li>
          <li>
            <strong>För beslut krävs</strong> 9 ja-röster och inget veto från P5.
          </li>
        </ul>

        <h4 className={classes.subHeading}>3. Sekretariatet</h4>
        <ul className={classes.list}>
          <li>
            Leds av <strong>generalsekreteraren</strong> (António Guterres,
            Portugal, omvald 2022).
          </li>
          <li>Väljs för fem år.</li>
          <li>
            Har rätt att uppmärksamma säkerhetsrådet på hot mot fred och säkerhet.
          </li>
          <li>Cirka 36 000 anställda globalt.</li>
        </ul>

        <h4 className={classes.subHeading}>4. Internationella domstolen (ICJ)</h4>
        <ul className={classes.list}>
          <li>Finns i Haag, Nederländerna.</li>
          <li>Avgör tvister mellan stater (ej individer).</li>
          <li>
            Domarna är bindande för de stater som accepterat domstolens
            jurisdiktion.
          </li>
        </ul>

        <h3 className={classes.subHeading}>FN:s åtgärder vid hot mot freden</h3>
        <ol className={classes.list}>
          <li>
            <strong>Diplomatiska åtgärder:</strong> Medling, rekommendationer,
            samtal.
          </li>
          <li>
            <strong>Fredsbevarande insatser:</strong> FN-soldater (blå hjälmar)
            sätts in i konfliktområden.
          </li>
          <li>
            <strong>Icke-militära sanktioner:</strong> Ekonomiska och diplomatiska
            påtryckningar.
          </li>
          <li>
            <strong>Militära tvångsåtgärder:</strong> Om sanktioner inte räcker
            kan säkerhetsrådet besluta om militär intervention (ex. Korea 1950,
            Irak 1990, Libyen 2011).
          </li>
        </ol>
      </section>

      {/* ===== 3. NATO ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. NATO – NORDATLANTISKA FÖRSVARSPAKTEN</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver Nato och dess roll i internationell säkerhet.
        </p>

        <h3 className={classes.subHeading}>Nato</h3>
        <ul className={classes.list}>
          <li>
            <strong>Nato (North Atlantic Treaty Organization):</strong> En
            försvarsallians grundad 1949.
          </li>
          <li>
            <strong>Grundtanke:</strong> Ett angrepp mot en medlem är ett angrepp
            mot alla (<strong>kollektivt försvar</strong> enligt artikel 5).
          </li>
          <li>
            <strong>Medlemsländer:</strong> 32 länder (2024), inklusive Sverige
            (medlem från 2024).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Sveriges väg till Nato</h3>
        <ul className={classes.list}>
          <li>Historiskt alliansfritt och neutralt.</li>
          <li>Ansökte 2022 efter Rysslands invasion av Ukraina.</li>
          <li>Formellt medlem 2024.</li>
          <li>
            <strong>Syfte:</strong> Säkerställa medlemsländernas säkerhet genom
            avskräckning och kollektivt försvar.
          </li>
        </ul>
      </section>

      {/* ===== 4. ANDRA INTERNATIONELLA SAMARBETEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. ANDRA INTERNATIONELLA SAMARBETEN</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver andra viktiga internationella organisationer.
        </p>

        <ul className={classes.list}>
          <li>
            <strong>EU (Europeiska unionen):</strong> Ekonomiskt och politiskt
            samarbete med 27 medlemsländer.
          </li>
          <li>
            <strong>Europarådet:</strong> 46 medlemsländer, arbetar för mänskliga
            rättigheter, demokrati och rättsstatlighet. Har upprättat
            Europakonventionen om mänskliga rättigheter.
          </li>
          <li>
            <strong>OSSE (Organisationen för säkerhet och samarbete i Europa):</strong>
            57 medlemsländer, arbetar för konfliktförebyggande, förtroendeskapande
            och säkerhetssamarbete i Europa.
          </li>
          <li>
            <strong>WHO (Världshälsoorganisationen):</strong> FN-organ som arbetar
            för global hälsa.
          </li>
          <li>
            <strong>WTO (Världshandelsorganisationen):</strong> Reglerar
            internationell handel.
          </li>
          <li>
            <strong>OECD (Organisationen för ekonomiskt samarbete och utveckling):</strong>
            38 medlemsländer, arbetar för ekonomisk tillväxt och utveckling.
          </li>
          <li>
            <strong>Internationella valutafonden (IMF):</strong> Övervakar det
            internationella finansiella systemet.
          </li>
          <li>
            <strong>Världsbanken:</strong> Ger lån till utvecklingsländer.
          </li>
        </ul>
      </section>

      {/* ===== 5. FOLKRÄTT ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. FOLKRÄTT</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver de lagar och regler som styr förhållandet mellan
          stater.
        </p>

        <h3 className={classes.subHeading}>Folkrätt</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> De lagar och regler som reglerar staters
            suveränitet och umgänge mellan stater.
          </li>
          <li>
            <strong>Syften med folkrätten:</strong>
            <ul className={classes.list}>
              <li>Få förhållandet mellan stater att fungera.</li>
              <li>Skydda individer mot statliga övergrepp.</li>
              <li>Undvika krig.</li>
              <li>Skydda individer om krig ändå inträffar.</li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>Folkrättens två delar</h3>

        <h4 className={classes.subHeading}>1. Humanitär rätt (Krigets lagar)</h4>
        <ul className={classes.list}>
          <li>
            Skyddar inte bara soldater utan även <strong>civilbefolkning</strong>,
            sjuka, sårade och krigsfångar.
          </li>
          <li>
            <strong>Genèvekonventionerna (1949):</strong> Nedtecknar reglerna,
            kallas även Röda kors-reglerna.
          </li>
          <li>
            <strong>Grundtanke:</strong> "Soldater ska slås mot soldater" –
            civila ska lämnas utanför.
          </li>
          <li>
            <strong>Olagliga kombattanter:</strong> Personer som ägnar sig åt
            "privatkrig" har svagare folkrättsligt skydd.
          </li>
        </ul>

        <h4 className={classes.subHeading}>2. Mänskliga rättigheter</h4>
        <ul className={classes.list}>
          <li>
            Rättigheter som skyddar individer mot <strong>statliga övergrepp</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Två viktiga begrepp inom folkrätten</h3>
        <ul className={classes.list}>
          <li>
            <strong>Traktaträtt:</strong> Skrivna avtal mellan stater (konventioner,
            stadgar, protokoll). Bindande först när de
            <strong>ratificerats</strong> (godkänts av staten).
          </li>
          <li>
            <strong>Sedvanerätt:</strong> Oskrivna regler som är bindande för
            alla stater eftersom de anses praktiska och moraliskt riktiga (ex.
            rätten till liv, förbud mot tortyr).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Internationella domstolen (ICJ)</h3>
        <ul className={classes.list}>
          <li>FN:s huvudorgan för juridiska bedömningar och domslut i Haag.</li>
          <li>Avgör tvister mellan stater (ej individer).</li>
          <li>
            <strong>Exempel på domar:</strong>
            <ul className={classes.list}>
              <li>Gränsdragning mellan Danmark (Grönland) och Norge.</li>
              <li>
                2024: Beslut om att gå vidare med Ukrainas anklagelser om att
                Ryssland brutit mot folkmordskonventionen.
              </li>
              <li>
                2024: Beslut att Israel ska avstå från handlingar enligt
                folkmordskonventionen i Gaza.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>Internationella brottmålsdomstolen (ICC)</h3>
        <ul className={classes.list}>
          <li>
            Åtalar <strong>individer</strong> för krigsförbrytelser, brott mot
            mänskligheten och folkmord.
          </li>
        </ul>
      </section>

      {/* ===== 6. UTMANINGAR FÖR INTERNATIONELLA SAMARBETEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. UTMANINGAR FÖR INTERNATIONELLA SAMARBETEN</h2>
        <ul className={classes.list}>
          <li>
            <strong>Krig och konflikter:</strong> Rysslands invasion av Ukraina,
            kriget i Gaza, inbördeskrig.
          </li>
          <li>
            <strong>Klimatkrisen:</strong> Global uppvärmning, miljöförstöring.
          </li>
          <li>
            <strong>Fattigdom och ojämlikhet:</strong> Stora skillnader mellan
            rika och fattiga länder.
          </li>
          <li>
            <strong>Migration:</strong> Flyktingströmmar från krigs- och
            katastrofområden.
          </li>
          <li>
            <strong>Brott mot mänskliga rättigheter:</strong> Förtryck,
            diskriminering, folkmord.
          </li>
          <li>
            <strong>Desinformation:</strong> Spridning av falska nyheter som
            undergräver tillit till internationella samarbeten.
          </li>
          <li>
            <strong>Nationella intressen:</strong> Stater prioriterar ofta egna
            intressen framför internationellt samarbete.
          </li>
        </ul>
      </section>

      {/* ===== 7. FRÅGOR TILL TEXTEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. FRÅGOR TILL TEXTEN</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            1. Vad är diplomati och varför är det viktigt?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Diplomati är konsten att föra <strong>samtal och förhandlingar</strong>
              mellan stater för att undvika konflikter och nå fredliga lösningar.
              Det är viktigt eftersom det är det <strong>främsta verktyget</strong>
              för att förebygga krig och främja samarbete.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. Vad anses med automatisk rättrådighet / bindande avtal i samarbeten?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det innebär att beslut eller avtal som fattas inom ett internationellt
              samarbete blir direkt <strong>juridiskt bindande</strong> för
              medlemsländerna utan att varje enskilt land behöver godkänna beslutet
              i sitt eget parlament efteråt. Inom <strong>mellanstatliga</strong>
              organisationer (som FN) saknas detta oftast, medan det finns i
              <strong>överstatliga</strong> organisationer (som EU).
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. Vilka är skillnaderna mellan bilaterala och multilaterala förhandlingar?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Bilaterala förhandlingar:</strong> Sker <strong>direkt
                mellan två</strong> parter eller länder (t.ex. ett frihandelsavtal
                mellan Sverige och USA).
              </li>
              <li>
                <strong>Multilaterala förhandlingar:</strong> Involverar
                <strong>fler än två</strong> länder samtidigt, ofta inom en
                internationell organisation (t.ex. klimatförhandlingar inom FN
                eller regler i WTO).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. Vad är det främsta syftet med Sveriges utrikes- och säkerhetspolitik?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det främsta syftet är att <strong>bevara</strong> Sveriges nationella
              oberoende, <strong>skydda</strong> landets suveränitet och territorium
              samt <strong>värna</strong> befolkningens säkerhet, frihet och
              demokrati.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            5. Vad innebär det att Sverige efter EU-inträdet talade om en
            utrikespolitik med "europeisk identitet"?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det innebär att Sverige inte längre agerade helt isolerat eller
              neutralt på den internationella arenan, utan anpassade sin
              utrikespolitik till <strong>EU:s gemensamma utrikes- och
              säkerhetspolitik (GUSP)</strong> och delade gemensamma europeiska
              värderingar och säkerhetsintressen.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. Nämn ett par argument i debatten för respektive emot ett svenskt
            medlemskap i Nato.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För medlemskap:</strong> Kollektivt försvar enligt
                Artikel 5 ger starkare <strong>avskräckande effekt</strong> mot
                angrepp; större militär trygghet genom samarbete med allierade.
              </li>
              <li>
                <strong>Emot medlemskap:</strong> Slut på en lång tradition av
                <strong>alliansfrihet</strong>; risk för ökad spänning och konflikt
                med Ryssland; risk för försämrade möjligheter att agera som
                <strong>obunden medlare</strong> i världspolitiken.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. Totalförsvaret är uppdelat i två delar. Vilka?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Militärt försvar:</strong> Består av Försvarsmakten
                (Armén, Flygvapnet, Marinen, Cyberförsvaret och Hemvärnet).
              </li>
              <li>
                <strong>Civilt försvar:</strong> Omfattar hela samhällets
                <strong>motståndskraft</strong> (sjukvård, transporter,
                livsmedelsförsörjning, kommuner m.fl.) för att upprätthålla
                viktiga samhällsfunktioner vid kris eller krig.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. Vilka länder är medlemmar i Nato?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Nato har <strong>32 medlemsländer</strong> (däribland USA,
              Storbritannien, Frankrike, Tyskland, Turkiet, Norge, Danmark, samt
              senast Finland och Sverige).
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. Nato fattar beslut enligt konsensusprincipen. Vad innebär den?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det innebär att <strong>alla medlemsländer</strong> måste vara
              <strong>helt överens</strong> för att ett beslut ska tas. Varje
              medlemsland har i praktiken ett <strong>veto</strong>; om ett enda
              land säger nej går beslutet inte igenom.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. Natos fördrag anses ha en bindande princip i samarbetet (Artikel 5).
            Vad innebär den principen?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Principen om <strong>kollektivt försvar</strong> ("en för alla,
              alla för en"). Ett väpnat angrepp mot ett av medlemsländerna
              betraktas som ett angrepp mot <strong>alla medlemmar</strong>,
              vilket förbinder de övriga länderna att hjälpa det angripna landet.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. Förklara kort innebörden i följande samarbetsorgan:
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Nordiska rådet:</strong> Ett <strong>parlamentariskt</strong>
                samarbetsorgan mellan de nordiska ländernas parlament för att
                främja regionalt samarbete kring politik, kultur och lagstiftning.
              </li>
              <li>
                <strong>Nordiska ministerrådet:</strong> De nordiska ländernas
                <strong>regeringssamarbete</strong> där ministrar träffas för att
                fatta gemensamma beslut inom specifika områden.
              </li>
              <li>
                <strong>WTO (Världshandelsorganisationen):</strong> En global
                organisation som sätter <strong>regelsystemet</strong> för
                internationell handel och löser handelskonflikter mellan stater.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>12. Vad är syftet med FN?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Att <strong>bevara</strong> internationell fred och säkerhet,
              <strong>utveckla</strong> vänskapliga förbindelser mellan länder,
              <strong>främja</strong> mänskliga rättigheter och <strong>lösa</strong>
              globala ekonomiska, sociala och humanitära problem.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. Redogör för generalförsamlingens respektive säkerhetsrådets sätt
            att arbeta.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Generalförsamlingen:</strong> Alla 193 medlemsländer har
                <strong>en röst</strong> var. Diskuterar globala frågor och antar
                resolutioner som fungerar som <strong>rekommendationer</strong>
                (inte juridiskt bindande).
              </li>
              <li>
                <strong>Säkerhetsrådet:</strong> Ansvarar för internationell fred
                och säkerhet. Kan fatta <strong>juridiskt bindande</strong> beslut
                (t.ex. sanktioner eller militära insatser).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. Hur är säkerhetsrådet sammansatt?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det består av <strong>15 medlemsländer</strong>:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>5 permanenta medlemmar:</strong> USA, Ryssland, Kina,
                Storbritannien och Frankrike (alla har <strong>vetorätt</strong>).
              </li>
              <li>
                <strong>10 icke-permanenta medlemmar:</strong> Väljs av
                generalförsamlingen på <strong>tvååriga mandat</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>15. Vad innebär följande begrepp?</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>a) Agenda 2030:</strong> FN:s globala handlingsplan med
                <strong>17 hållbarhetsmål</strong> för att avskaffa extrem
                fattigdom, minska ojämlikheter och lösa klimatkrisen till år 2030.
              </li>
              <li>
                <strong>b) IPCC:</strong> FN:s vetenskapliga <strong>klimatpanel</strong>
                som sammanställer och utvärderar den globala klimatforskningen.
              </li>
              <li>
                <strong>c) Parisavtalet:</strong> Ett globalt klimatavtal från
                2015 där världens länder lovat att hålla den globala uppvärmningen
                väl under 2 °C, och helst under 1,5 °C.
              </li>
              <li>
                <strong>d) NDC / COP:</strong>
                <ul className={classes.list}>
                  <li>
                    <strong>COP (Conference of the Parties):</strong> FN:s årliga
                    <strong>klimattoppmöte</strong> (t.ex. COP28).
                  </li>
                  <li>
                    <strong>NDC (Nationally Determined Contributions):</strong>
                    Varje lands <strong>nationellt fastställda klimatplaner</strong>
                    och utsläppsmål under Parisavtalet.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            16. a) Vad är huvudsyftet med folkrätten? b) Vilka två delar består den av?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>a) Huvudsyfte:</strong> Att reglera hur stater får agera
                mot varandra och mot sina egna medborgare för att skapa en                <strong>stabil och rättssäker</strong> internationell ordning.
              </li>
              <li>
                <strong>b) Två delar:</strong> <strong>Humanitär rätt</strong>
                (krigets lagar) och <strong>Mänskliga rättigheter</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            17. Vilka typer av brott kan Internationella brottmålsdomstolen (ICC)
            behandla?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Utreder och dömer <strong>enskilda personer</strong> för de
              allvarligaste internationella brotten:
              <strong>folkmord</strong>, <strong>brott mot mänskligheten</strong>,
              <strong>krigsförbrytelser</strong> och <strong>aggressionsbrott</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            18. Vilken är huvuduppgiften för Internationella domstolen (ICJ)?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Att <strong>avgöra juridiska tvister</strong> mellan stater som
              valt att underställa sig domstolen, samt ge
              <strong>rådgivande yttranden</strong> i juridiska frågor till FN:s
              organ.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 8. ANALYSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. ANALYSFRÅGOR</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. FN har ofta svårt att få sin vilja igenom i frågor som rör krig och
            fred. Ange några tänkbara orsaker till det. Vilka är konsekvenserna av
            att FN har svårt att agera?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Orsaker:</strong> <strong>Vetorätten</strong> i
              säkerhetsrådet gör att stormakterna (USA, Ryssland, Kina,
              Storbritannien, Frankrike) kan stoppa alla insatser som går emot
              deras egna eller deras allierades intressen. FN saknar dessutom en
              egen stående armé och är helt beroende av att medlemsländerna
              frivilligt bidrar med trupper och finansiering.
            </p>
            <p className={classes.paragraph}>
              <strong>Konsekvenser på kort sikt:</strong> Handlingsförlamning vid
              akuta kriser, vilket leder till att krig drar ut på tiden och orsakar
              stort humanitärt lidande (t.ex. i Syrien eller Ukraina).
            </p>
            <p className={classes.paragraph}>
              <strong>Konsekvenser på lång sikt:</strong> Minskat förtroende för
              FN som global fredsaktör. Detta gör att länder i stället söker
              trygghet i militära allianser (som Nato) eller agerar på egen hand,
              vilket försvagar den internationella rätten och det multilaterala
              samarbetet.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. Vilka säkerhetspolitiska konsekvenser kommer Finlands och Sveriges
            medlemskap i Nato att få för Norden som region?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Hela Norden samlas under <strong>samma kollektiva försvarsgaranti</strong>
              (Artikel 5), vilket möjliggör <strong>gemensam militär planering</strong>,
              samordnat luftförsvar och effektivare logistik över landsgränserna.
              Östersjön blir i praktiken ett <strong>"Nato-hav"</strong>, vilket
              innebär ett storskaligt stärkande av <strong>avskräckningen</strong>
              mot Ryssland och underlättar försvaret av de baltiska staterna.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 9. DISKUSSIONSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. DISKUSSIONSFRÅGOR</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. "Om Sverige blir indraget i krig har vi som medlem av Nato ganska
            stora möjligheter att försvara oss."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> Vi omfattas av Natos artikel 5 och får
                <strong>direkt militärt stöd</strong>, utrustning och flygunderstöd
                från världens starkaste militärallians.
              </li>
              <li>
                <strong>Emot:</strong> Sverige blir också ett <strong>tydligare
                målområde</strong> för en fiende vid en storkonflikt mellan Nato
                och Ryssland, och vi måste sända egna trupper för att försvara
                andra länder.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. "Vi bör ha soldater som väljer den militära banan efter eget
            intresse och därmed en yrkesarmé och inte en modell med allmän
            värnplikt för män och kvinnor."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> Yrkesofficerare och soldater som är anställda
                har <strong>högre motivation</strong>, bättre spetskompetens och
                är snabbare tillgängliga för internationella insatser.
              </li>
              <li>
                <strong>Emot:</strong> En bred <strong>folklig förankring</strong>
                för försvaret förloras, och det är mycket svårt samt dyrt att
                rekrytera tillräckligt många heltidsanställda soldater i fredstid.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D3. "Efter Rysslands invasion av Ukraina har vapenproduktionen och
            militärutgifterna ökat i de flesta europeiska länder. Det innebär att
            risken för krig ökar än mer."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> <strong>Rustningsspiraler</strong> skapar
                misstänksamhet ("säkerhetsdilemma") där motparten känner sig hotad
                och svarar med ytterligare upprustning, vilket kan leda till
                oavsiktlig eskalering.
              </li>
              <li>
                <strong>Emot:</strong> Stark militär förmåga verkar
                <strong>avskräckande</strong> (avskräckningsprincipen) och hindrar
                auktoritära stater från att våga anfalla.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D4. "Miljöförstöringen är ett större hot mot vår framtid än kärnvapen."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> Klimatförändringarna och artdöden sker
                <strong>globalt varje dag</strong>, påverkar alla människor och
                hotar grunden för mat- och vattenförsörjning på sikt.
              </li>
              <li>
                <strong>Emot:</strong> Ett kärnvapenkrig kan förstöra hela den
                mänskliga civilisationen och ekosystemet på <strong>några få
                timmar</strong> ("kärnvinter").
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D5. "Det är omoraliskt av stater och företag att bedriva handel med vapen."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> Vapenhandel <strong>göder konflikter</strong>,
                dödar civila och styr resurser bort från välfärd, skola och
                krisbekämpning.
              </li>
              <li>
                <strong>Emot:</strong> Demokratiska stater har rätt enligt
                folkrätten att <strong>försvara sig</strong> och behöver kunna
                köpa vapen för att skydda sin suveränitet.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D6. "Sveriges medlemskap i Nato kan innebära mindre möjligheter att
            verka för avspänning, nedrustning, internationellt samarbete och
            demokratisk utveckling i andra länder."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> Sverige förlorar sin historiska roll som
                <strong>obunden och neutral medlare</strong> och förväntas nu
                följa alliansens gemensamma linje.
              </li>
              <li>
                <strong>Emot:</strong> Som medlem i Nato och EU har Sverige
                <strong>större tyngd och makt</strong> att påverka beslut inifrån
                de starkaste internationella organisationerna.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D7. "USA har alldeles för stort inflytande i världspolitiken. Därför
            behövs det en europeisk motvikt exempelvis en gemensam utrikes- och
            säkerhetspolitik."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> Europa bör ta ansvar för <strong>sitt eget
                närområde</strong> och inte vara helt beroende av amerikanska
                skattebetalare eller skiftande amerikanska presidenter.
              </li>
              <li>
                <strong>Emot:</strong> Splittring inom västvärlden <strong>försvagar
                demokratiernas sammanhållning</strong> mot auktoritära stater som
                Kina och Ryssland.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D8. "Det nordiska samarbetet kommer att bli allt viktigare när nu alla
            fem nordiska länder är med i Nato."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> Norden delar samma <strong>geografiska,
                kulturella och säkerhetsmässiga utmaningar</strong>, vilket gör
                det regionala försvarssamarbetet mycket effektivt.
              </li>
              <li>
                <strong>Emot:</strong> De viktigaste militära besluten flyttas upp
                till <strong>Natos högkvarter i Bryssel</strong>, vilket gör att
                det rent nordiska samarbetet hamnar i skuggan.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D9. "Det är totalt fel att Kina, Indien och oljerika länder i
            Mellanöstern räknas som utvecklingsländer i klimatförhandlingarna."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> Dessa länder är idag <strong>stora
                ekonomier</strong> och står för enorma koldioxidutsläpp, varför
                de måste ta samma ekonomiska ansvar som västvärlden.
              </li>
              <li>
                <strong>Emot:</strong> Västvärlden står för det mesta av de
                <strong>historiska ackumulerade utsläppen</strong> sedan
                industriella revolutionen, och utvecklingsländer har fortfarande
                <strong>lägre utsläpp per invånare</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D10. "FN är det enda organet som kan säkra världsfreden på ett hållbart
            sätt."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> FN är den enda organisationen där
                <strong>alla världens stater</strong> är medlemmar och har
                enhetliga globala regler (folkrätten).
              </li>
              <li>
                <strong>Emot:</strong> FN är ofta <strong>handlingsförlamat</strong>
                på grund av vetorätten och saknar egna medel att tvinga stater till
                fred om de vägrar.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D11. "I och med att den globala klimatpolitiken är FN-styrd blir den
            mycket viktig."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> Klimatförändringarna är ett
                <strong>globalt problem</strong> som kräver universella avtal
                (som Parisavtalet) där alla stater förbinder sig att minska sina
                utsläpp.
              </li>
              <li>
                <strong>Emot:</strong> FN-beslut bygger på <strong>konsensus</strong>
                och blir ofta urvattnade kompromisser utan starka straffåtgärder
                mot de länder som inte följer avtalen.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D12. "Det är rätt att Nato går in och försöker lösa en konflikt där FN
            inte kan eller vill."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> Det förhindrar <strong>folkmord och grova
                mänskliga lidanden</strong> när FN är blockerat av veto.
              </li>
              <li>
                <strong>Emot:</strong> Det bryter mot <strong>folkrätten</strong>
                om det sker utan FN-mandat, vilket urholkar respekt för
                internationella regler och kan uppfattas som västlig imperialism.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D13. "Sverige borde haft en folkomröstning om medlemskap i Nato."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> En så avgörande förändring i Sveriges
                säkerhetspolitik kräver ett <strong>direkt folkligt mandat</strong>
                för att vara demokratiskt förankrad.
              </li>
              <li>
                <strong>Emot:</strong> Det säkerhetspolitiska läget krävde
                <strong>snabba beslut</strong>, och allmänheten saknar ofta tillgång
                till den sekretessbelagda underrättelseinformation som behövdes
                för beslutet.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D14. "Väst (Europa och USA) skulle behöva ge upp sitt missionerande om
            demokrati och mänskliga rättigheter eftersom de inte längre har de
            militära eller ekonomiska resurser som krävs för att bestämma över
            andras styrelseskick."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>För:</strong> Västvärldens ingripanden har ofta skapat
                <strong>destabilisering</strong> (t.ex. i Irak eller Libyen) och
                uppfattas som <strong>dubbelmoral</strong> i globala södern.
              </li>
              <li>
                <strong>Emot:</strong> Mänskliga rättigheter är
                <strong>universella</strong> enligt FN-stadgan, och väst har en
                moralisk plikt att <strong>stödja demokratiska rörelser</strong>
                mot diktaturer.
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
            <span className={classes.keyword}>Agenda 2030:</span> FN:s globala
            handlingsplan med 17 mål för hållbar utveckling till år 2030.
          </li>
          <li>
            <span className={classes.keyword}>Ambassadör:</span> En stats högsta
            diplomatiska representant i ett annat land.
          </li>
          <li>
            <span className={classes.keyword}>Bilateral:</span> Avtal eller
            förhandlingar som sker direkt mellan två länder.
          </li>
          <li>
            <span className={classes.keyword}>COP (Conference of the Parties):</span>
            FN:s årliga klimattoppmöte där stater förhandlar om klimatmålen
            (t.ex. COP28).
          </li>
          <li>
            <span className={classes.keyword}>Diplomati:</span> Officiell
            kommunikation, samtalsmetoder och förhandlingar mellan stater för att
            lösa konflikter.
          </li>
          <li>
            <span className={classes.keyword}>FN (Förenta Nationerna):</span>
            Global mellanstatlig organisation grundad 1945 för att främja fred,
            säkerhet och mänskliga rättigheter.
          </li>
          <li>
            <span className={classes.keyword}>Folkrätt:</span> Regler och
            konventioner som styr hur stater får agera mot varandra och mot sina
            invånare.
          </li>
          <li>
            <span className={classes.keyword}>Generalförsamlingen:</span> FN:s
            huvudorgan där alla 193 medlemsländer har en röst var.
          </li>
          <li>
            <span className={classes.keyword}>Internationella brottmålsdomstolen
            (ICC):</span> Domstol i Haag som ställer enskilda personer inför
            rätta för folkmord, krigsbrott och brott mot mänskligheten.
          </li>
          <li>
            <span className={classes.keyword}>Internationella domstolen (ICJ):</span>
            FN:s huvudorgan för att lösa rättsliga tvister mellan stater.
          </li>
          <li>
            <span className={classes.keyword}>IPCC:</span> FN:s vetenskapliga
            klimatpanel som sammanställer global klimatforskning.
          </li>
          <li>
            <span className={classes.keyword}>Konsensus:</span> Beslutsform där
            alla deltagande parter måste vara helt överens (inga veto).
          </li>
          <li>
            <span className={classes.keyword}>Mest gynnad nation:</span>
            WTO-princip som innebär att handelsfördelar som ges till ett land
            automatiskt måste ges till alla avtalsländer.
          </li>
          <li>
            <span className={classes.keyword}>Mellanstatlig:</span> Samarbete där
            stater behåller sin suveränitet och beslut oftast kräver enighet.
          </li>
          <li>
            <span className={classes.keyword}>Multilateral:</span> Samarbete eller
            förhandlingar som omfattar fler än två länder samtidigt.
          </li>
          <li>
            <span className={classes.keyword}>Nato:</span> Västlig
            militärförsvarsallians grundad på kollektivt försvar enligt Artikel 5.
          </li>
          <li>
            <span className={classes.keyword}>Nordiska rådet / Nordiska
            ministerrådet:</span> Organ för parlamentariskt respektive
            regeringssamarbete mellan de nordiska länderna.
          </li>
          <li>
            <span className={classes.keyword}>Neutralitetspolitik:</span> Militär
            alliansfrihet i fred syftande till neutralitet i krig.
          </li>
          <li>
            <span className={classes.keyword}>OSSE:</span> Organisationen för
            säkerhet och samarbete i Europa.
          </li>
          <li>
            <span className={classes.keyword}>Parisavtalet:</span> Globalt
            klimatavtal från 2015 för att begränsa den globala uppvärmningen.
          </li>
          <li>
            <span className={classes.keyword}>Säkerhetsrådet:</span> FN:s mest
            kraftfulla organ med 15 medlemmar som ansvarar för fred och säkerhet.
          </li>
          <li>
            <span className={classes.keyword}>Totalförsvar:</span> Samlingsnamn
            för militärt försvar och civilt försvar som aktiveras vid krigsfara.
          </li>
          <li>
            <span className={classes.keyword}>Vetorätt:</span> Rätten för de fem
            permanenta medlemmarna i FN:s säkerhetsråd att ensamt stoppa ett
            beslut.
          </li>
          <li>
            <span className={classes.keyword}>WTO:</span>
            Världshandelsorganisationen som sätter regler för global handel.
          </li>
        </ul>
      </section>
    </div>
  );
}