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

export default function TemplateLessonFour() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>KAPITEL 4: DEMOKRATI OCH IDEOLOGIER</h1>
      <p className={classes.subtitle}>Fullständig sammanfattning</p>

      {/* ===== 1. DEMOKRATI: DEFINITION OCH HISTORIA ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          1. DEMOKRATI: DEFINITION OCH HISTORIA
        </h2>
        <ul className={classes.list}>
          <li>
            <strong>Demokrati</strong> är ett grekiskt ord som betyder
            "folkstyre".
          </li>
          <li>
            Idén uppstod i Aten på 500-talet f.Kr., där fria, vuxna män röstade
            i folkförsamlingen.
          </li>
          <li>
            Det tog fram till 1900-talet innan allmän rösträtt för både män och
            kvinnor började införas i Västeuropa och Nordamerika.
          </li>
        </ul>
      </section>

      {/* ===== 2. DEMOKRATINS REGELBOK ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          2. DEMOKRATINS REGELBOK (ELEKTORAL DEMOKRATI)
        </h2>
        <p className={classes.paragraph}>
          Demokratiforskningsinstitutet V-Dem listar sex grundläggande kriterier
          för en elektoral demokrati:
        </p>

        <ol className={classes.list}>
          <li>
            <strong>Regelbundna val och fri partibildning:</strong> Val måste
            hållas regelbundet och det måste finnas minst två partier att välja
            mellan.
          </li>
          <li>
            <strong>Allmän och lika rösträtt:</strong> Alla medborgare över en
            viss ålder har rätt att rösta, oavsett kön, inkomst, etnicitet eller
            religion. Alla har en röst var.
          </li>
          <li>
            <strong>Valhemlighet:</strong> Väljare ska kunna rösta utan att
            avslöja sitt val.
          </li>
          <li>
            <strong>Fri opinionsbildning:</strong> Det måste råda fri åsikts-
            och opinionsbildning.
          </li>
          <li>
            <strong>Majoritetsprincipen:</strong> Majoritetens förslag vinner
            över minoritetens.
          </li>
          <li>
            <strong>Rättssäkerhet:</strong> Ingen får häktas eller straffas utan
            stöd i lagen.
          </li>
        </ol>

        <h3 className={classes.subHeading}>Liberal Demokrati</h3>
        <ul className={classes.list}>
          <li>
            För att uppnå en verklig liberal demokrati krävs ytterligare ett
            kriterium utöver de sex ovan:
            <ul className={classes.list}>
              <li>
                <strong>
                  Skydd för de mänskliga rättigheterna och rättsstatens
                  principer.
                </strong>
              </li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>Pluralism</h3>
        <ul className={classes.list}>
          <li>
            Demokrati förutsätter att makten inte koncentreras, utan att det
            finns plats för många olika uppfattningar, vilket kallas för{" "}
            <strong>pluralism</strong> (från latinets plures = många).
          </li>
          <li>
            I en demokrati är oppositionen en nödvändighet, medan den i en
            diktatur ses som ett hot.
          </li>
        </ul>
      </section>

      {/* ===== 3. DIREKT OCH INDIREKT DEMOKRATI ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. DIREKT OCH INDIREKT DEMOKRATI</h2>

        <h3 className={classes.subHeading}>
          Indirekt Demokrati (Representativ Demokrati)
        </h3>
        <ul className={classes.list}>
          <li>Vanligaste formen.</li>
          <li>
            Folket väljer representanter (t.ex. i en riksdag) som fattar beslut
            i folkets ställe.
          </li>
          <li>
            I Sverige står det i regeringsformen:{" "}
            <em>"Riksdagen är folkets främsta företrädare."</em>
          </li>
          <li>
            <strong>Fördelar:</strong> Billigare och mer praktiskt. Besluten
            blir ofta av högre kvalitet då valda ledamöter har bättre överblick.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Direktdemokrati</h3>
        <ul className={classes.list}>
          <li>Påminner om antikens Grekland.</li>
          <li>
            Idag sker det genom <strong>folkomröstningar</strong>, där de
            röstberättigade själva fattar beslut i en fråga.
          </li>
          <li>
            <strong>Exempel Schweiz:</strong> Det land där direktdemokrati
            tillämpas oftast. Folkomröstningarna är beslutande och kan ske på
            nationell, kantonal och kommunal nivå (t.ex. en folkomröstning 2021
            om antibiotika till husdjur).
          </li>
        </ul>
      </section>

      {/* ===== 4. DIKTATUR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. DIKTATUR: KÄNNETECKEN OCH TYPER</h2>
        <p className={classes.paragraph}>
          En diktatur kännetecknas av auktoritärt styre, där makten ofta
          upprätthålls med militärt eller polisiärt våld, samt genom
          indoktrinering och kontroll.
        </p>

        <h3 className={classes.subHeading}>Tre vanliga typer av diktaturer:</h3>

        <ol className={classes.list}>
          <li>
            <strong>Militärdiktatur:</strong> Militären tar makten, ofta genom
            en statskupp.
            <ul className={classes.list}>
              <li>
                Exempel: Myanmar (2021), där general Min Aung Hlaing vägrade
                acceptera valresultatet.
              </li>
            </ul>
          </li>
          <li>
            <strong>Religiös diktatur (Teokrati):</strong> Styre baserat på
            religion.
            <ul className={classes.list}>
              <li>
                Exempel: Iran, där religiösa ledare (Väktarrådet) har sista
                ordet över de folkvalda institutionerna.
              </li>
            </ul>
          </li>
          <li>
            <strong>Empartidiktatur:</strong> Ett enda parti har all makt och
            tillåter inga konkurrerande partier.
            <ul className={classes.list}>
              <li>Exempel: Kina, där kommunistpartiet styr sedan 1949.</li>
            </ul>
          </li>
        </ol>

        <h3 className={classes.subHeading}>
          Kännetecken för politisk ofrihet i diktaturer:
        </h3>
        <ul className={classes.list}>
          <li>
            <strong>Riggade val:</strong> Val är uppgjorda i förväg (t.ex.
            Ryssland).
          </li>
          <li>
            <strong>Brist på fri opinionsbildning:</strong> Oppositionen tystas,
            kritiska journalister mördas och censur råder.
          </li>
          <li>
            <strong>Brist på rättsstat:</strong> Domstolar är inte oberoende
            (t.ex. Ungern inom EU).
          </li>
          <li>
            <strong>Bristande mänskliga rättigheter:</strong> Amnesty
            International rapporterar om brott mot mänskliga rättigheter, som
            tvångsförflyttningar, tortyr och förföljelse av oliktänkande.
          </li>
        </ul>
      </section>

      {/* ===== 5. DEMOKRATI KONTRA DIKTATUR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          5. DEMOKRATI KONTRA DIKTATUR: ARGUMENT FÖR DEMOKRATI
        </h2>
        <p className={classes.paragraph}>
          <strong>Varför är demokrati att föredra framför diktatur?</strong>
        </p>

        <ul className={classes.list}>
          <li>
            <strong>Den enskilda människan:</strong> I en diktatur är individen
            värdelös och underkastad staten.
          </li>
          <li>
            <strong>Slöseri med resurser:</strong> Diktaturer tar inte tillvara
            befolkningens kunskaper och talanger.
          </li>
          <li>
            <strong>Korruption:</strong> Även om det finns undantag, är
            korruption vanligare i diktaturer.
          </li>
          <li>
            <strong>Fred:</strong> Demokratier för inte krig mot varandra och
            försöker hitta fredliga lösningar på konflikter.
          </li>
          <li>
            <strong>Förebygger svält:</strong> Nobelpristagaren Amartya Sen har
            visat att demokratier förhindrar hungersnöd, då folkvalda politiker
            är lyhördare för folkets behov.
          </li>
          <li>
            <strong>Stabilitet:</strong> Diktaturer kan se stabila ut, men när
            makten väl faller, ökar risken för kaos och våld. I demokratier sker
            maktöverlämningar oftast lugnt.
          </li>
        </ul>
      </section>

      {/* ===== 6. AUTOKRATERNAS AXEL ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          6. AUTOKRATERNAS AXEL (ENLIGT ANNE APPLEBAUM)
        </h2>
        <ul className={classes.list}>
          <li>
            Författaren Anne Applebaum hävdar att autokratier idag inte styrs av
            en ensam person, utan av raffinerade, kleptokratiska nätverk av
            polis, militär och säkerhetstjänst.
          </li>
          <li>
            Dessa stater samarbetar idag inte längre kring en gemensam ideologi
            (som under kalla kriget), utan enbart för att upprätthålla makt och
            berika sig själva.
          </li>
          <li>
            <strong>Exempel på länder som samarbetar i detta nätverk:</strong>{" "}
            Ryssland, Kina, Nordkorea, Iran, Zimbabwe.
          </li>
          <li>
            <strong>Exemplet Zimbabwe:</strong> Efter självständigheten har
            landet styrts av diktatorer. Kina och Ryssland har investerat stort
            i landet, i utbyte mot politiskt stöd i FN.
          </li>
        </ul>
      </section>

      {/* ===== 7. POLITISKA IDEOLOGIER ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. POLITISKA IDEOLOGIER</h2>
        <p className={classes.paragraph}>
          En politisk ideologi är en samling idéer om hur samhället ser ut eller
          borde se ut.
        </p>

        <h3 className={classes.subHeading}>Konservatism</h3>
        <ul className={classes.list}>
          <li>
            <strong>Betyder:</strong> Att bevara det gamla (conservare =
            bevara).
          </li>
          <li>
            <strong>Ursprung:</strong> Reaktion på franska revolutionen.
          </li>
          <li>
            <strong>Kärna:</strong> Människor är olika och har olika uppgifter i
            samhället (hierarkiskt). Förändringar bör ske långsamt. Staten bör
            inte vara alltför ansvarig för välfärden.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Liberalism</h3>
        <ul className={classes.list}>
          <li>
            <strong>Betyder:</strong> Frihet (liber = fri).
          </li>
          <li>
            <strong>Ursprung:</strong> Upplysningen och franska revolutionen.
          </li>
          <li>
            <strong>Kärna:</strong> Frihet från staten. Individen ska ta ansvar
            för sitt eget liv. Staten ska inte lägga sig i ekonomin
            (näringsfrihet). Marknaden och fri konkurrens styr.
          </li>
          <li>
            <strong>Central figur:</strong> Adam Smith och hans bok{" "}
            <em>Nationernas Välstånd</em> (1776).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Socialism</h3>
        <ul className={classes.list}>
          <li>
            <strong>Betyder:</strong> Gemensam egendom och jämlikhet.
          </li>
          <li>
            <strong>Ursprung:</strong> Reaktion på industrialismens orättvisor.
          </li>
          <li>
            <strong>Kärna:</strong> Människor är i grunden jämlika och bör ha
            lika rättigheter. Staten/kollektivet bör äga produktionsmedlen för
            att skapa ett rättvist samhälle.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Feminism</h3>
        <ul className={classes.list}>
          <li>
            <strong>Betyder:</strong> Jämställdhet mellan könen (femina =
            kvinna).
          </li>
          <li>
            <strong>Ursprung:</strong> Franska revolutionens idéer om jämlikhet.
          </li>
          <li>
            <strong>Kärna:</strong> Kvinnor och män ska ha lika rättigheter,
            möjligheter och skyldigheter.
          </li>
          <li>
            <strong>Central figur:</strong> Simone de Beauvoir (
            <em>"Man föds inte till kvinna, man blir det"</em>).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Ekologism</h3>
        <ul className={classes.list}>
          <li>Miljörörelsens ideologi.</li>
          <li>
            <strong>Kärna:</strong> Återställa balansen i naturens kretslopp och
            ifrågasätta evig ekonomisk tillväxt.
          </li>
          <li>
            <strong>Central figur:</strong> Rachel Carson med boken{" "}
            <em>Tyst vår</em> (1962).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Nationalism</h3>
        <ul className={classes.list}>
          <li>
            <strong>Betyder:</strong> En nation av människor med gemensamt
            språk, kultur och historia vill bilda en självständig stat.
          </li>
          <li>
            <strong>Militant nationalism:</strong> En aggressiv form som lyfter
            fram det egna landet på andras bekostnad (t.ex. i Ryssland och
            Ungern).
          </li>
          <li>
            <strong>Demokratisk nationalism:</strong> En samhörighetskänsla som
            är nödvändig för att ett samhälle ska hålla ihop (t.ex. traditioner
            som Kalle Anka).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Populism</h3>
        <ul className={classes.list}>
          <li>
            <strong>Betyder:</strong> Företräder "vanligt folk" mot eliten
            (populus = folk).
          </li>
          <li>
            <strong>Kärna:</strong> Presenterar enkla lösningar på komplexa
            problem och skyller ofta problem på EU, invandring eller
            globalisering.
          </li>
          <li>
            <strong>Fara:</strong> I sig inte farligt, men de auktoritära
            inslagen inom populismen hotar demokratiska värden.
          </li>
          <li>
            <strong>Exempel:</strong> Nationell samling i Frankrike, AfD i
            Tyskland.
          </li>
        </ul>
      </section>

      {/* ===== 8. POLITISKA PARTIERS HISTORIA I SVERIGE ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          8. POLITISKA PARTIERS HISTORIA I SVERIGE
        </h2>
        <ul className={classes.list}>
          <li>
            <strong>Före 1900:</strong> Majoritetsval i enmansvalkretsar.
            Väljare röstade på en person, inte ett parti.
          </li>
          <li>
            <strong>1880-talets tullstrid:</strong> Skapade behov av att
            organisera sig politiskt.
          </li>
          <li>
            <strong>Folkrörelserna:</strong> Nykterhetsrörelsen,
            väckelserörelsen och arbetarrörelsen (som bildade Socialdemokraterna
            1889) mobiliserade väljare.
          </li>
          <li>
            <strong>Sekelskiftet 1900:</strong> De första rikstäckande partierna
            bildades: Liberala samlingspartiet (Frisinnade) och Allmänna
            valmansförbundet (Moderaternas föregångare).
          </li>
        </ul>
      </section>

      {/* ===== 9. FRÅN FEM TILL ÅTTA PARTIER ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. FRÅN FEM TILL ÅTTA PARTIER</h2>
        <ul className={classes.list}>
          <li>
            <strong>Miljöpartiet (MP):</strong> Bildades 1981, främst ur
            kärnkraftsmotståndet.
          </li>
          <li>
            <strong>Kristdemokraterna (KD):</strong> Bildades 1964 som en
            reaktion mot sekularisering.
          </li>
          <li>
            <strong>Sverigedemokraterna (SD):</strong> Bildades 1988, hade länge
            rötter i rasistiska och främlingsfientliga rörelser.
          </li>
        </ul>
      </section>

      {/* ===== 10. IDEOLOGISKA SKILJELINJER ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          10. IDEOLOGISKA SKILJELINJER I SVENSK POLITIK
        </h2>

        <h3 className={classes.subHeading}>Höger-Vänster-skalan</h3>
        <ul className={classes.list}>
          <li>
            <strong>Vänster:</strong> Stor offentlig sektor, staten ska ta hand
            om många uppgifter med skattepengar (social och ekonomisk
            utjämning).
          </li>
          <li>
            <strong>Höger:</strong> Liten offentlig sektor, mer privat ansvar
            och näringsfrihet.
          </li>
        </ul>

        <h3 className={classes.subHeading}>GAL-TAN-skalan</h3>
        <p className={classes.paragraph}>
          Ett nyare sätt att rangordna partier efter sociala och kulturella
          värden:
        </p>
        <ul className={classes.list}>
          <li>
            <strong>GAL (Grön, Alternativ, Libertarian):</strong> Fokuserar på
            globalisering, migration, miljö och HBTQI-frågor.
          </li>
          <li>
            <strong>TAN (Traditionell, Auktoritär, Nationalistisk):</strong>{" "}
            Fokuserar på nationell identitet, auktoritet och traditionella
            värderingar.
          </li>
        </ul>
      </section>

      {/* ===== 11. NYCKELBEGREPP ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>11. NYCKELBEGREPP (FÖR REPETITION)</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>Autokrati:</span> Synonym till
            diktatur.
          </li>
          <li>
            <span className={classes.keyword}>Elektoral demokrati:</span>{" "}
            Grundläggande valdemokrati.
          </li>
          <li>
            <span className={classes.keyword}>Liberal demokrati:</span>{" "}
            Elektoral demokrati + skydd för mänskliga rättigheter.
          </li>
          <li>
            <span className={classes.keyword}>Pluralism:</span> Mångfald av
            åsikter och makthavare.
          </li>
          <li>
            <span className={classes.keyword}>Folkomröstning:</span> Ett
            direktdemokratiskt verktyg.
          </li>
          <li>
            <span className={classes.keyword}>Majoritetsval:</span> Den med
            flest röster vinner.
          </li>
          <li>
            <span className={classes.keyword}>Proportionella val:</span> Mandat
            fördelas baserat på andelen röster.
          </li>
          <li>
            <span className={classes.keyword}>Korruption:</span> Missbruk av
            ämbete för egen vinning.
          </li>
          <li>
            <span className={classes.keyword}>NGOs:</span> Icke-statliga
            organisationer som övervakar mänskliga rättigheter (t.ex. Amnesty,
            Human Rights Watch).
          </li>
        </ul>
      </section>

      {/* ===== FRÅGOR OCH SVAR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>FRÅGOR OCH SVAR</h2>

        {/* Fråga 1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            1. Vad är skillnaden mellan en elektoral demokrati och en liberal
            demokrati?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En <strong>elektoral demokrati</strong> är en metod att fatta
              beslut som bygger på sex grundkriterier (regelbundna val, allmän
              rösträtt, valhemlighet, fri opinionsbildning, majoritetsprincipen
              och rättssäkerhet). Risken med denna form är att majoriteten kan
              köra över minoriteten. En <strong>liberal demokrati</strong>{" "}
              innefattar alla dessa kriterier men lägger till ett sjunde: ett
              starkt skydd för mänskliga rättigheter och ett värnande om
              rättsstatens principer. Detta gör den till mer än bara en
              beslutsmetod.
            </p>
          </div>
        </div>

        {/* Fråga 2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. Vad är skillnaden mellan direkt och indirekt demokrati?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              I en <strong>indirekt (representativ) demokrati</strong> väljer
              folket representanter (t.ex. en riksdag) som sedan fattar beslut i
              folkets ställe. Detta är den vanligaste formen och anses vara
              billigare och mer praktisk. I en <strong>direktdemokrati</strong>{" "}
              fattar de röstberättigade själva beslut, vilket idag oftast sker
              genom folkomröstningar. Detta påminner om antikens Grekland där
              medborgarna röstade direkt i folkförsamlingen.
            </p>
          </div>
        </div>

        {/* Fråga 3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. Vilka skillnader finns mellan tillämpningen av direktdemokrati i
            Schweiz och i Sverige?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              I <strong>Schweiz</strong> är direktdemokratin mycket vanligare
              och folkomröstningarna är alltid beslutande, vilket innebär att
              folkets röst är bindande. Schweizarna kan delta i ett trettiotal
              nationella folkomröstningar under en mandatperiod, samt i kantoner
              och kommuner. I <strong>Sverige</strong> används folkomröstningar
              mycket mer sällan och är oftast endast rådgivande, vilket innebär
              att riksdagen inte är bunden av resultatet.
            </p>
          </div>
        </div>

        {/* Fråga 4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. Beskriv diktaturens kännetecken.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En diktatur kännetecknas av auktoritärt styre där makten
              koncentreras till en liten grupp eller en ensam ledare. För att
              upprätthålla makten krävs ofta militärt eller polisiärt våld.
              Andra kännetecken är: riggade val, brist på fri opinionsbildning
              (med censur och förföljelse av oliktänkande), bristande rättsstat
              (godtyckliga domar), systematiska brott mot de mänskliga
              rättigheterna (som tvångsförflyttningar och tortyr), samt att den
              enskilda människan är värdelös och ska underordna sig staten.
            </p>
          </div>
        </div>

        {/* Fråga 5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            5. Vilka typer av diktaturer nämner boken?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Boken nämner tre vanliga typer av diktaturer:
            </p>
            <ol className={classes.list}>
              <li>
                <strong>Militärdiktatur:</strong> Militären tar makten, ofta
                genom en statskupp (t.ex. Myanmar).
              </li>
              <li>
                <strong>Religiös diktatur (Teokrati):</strong> Styre baserat på
                religion, där religiösa ledare har sista ordet över folkvalda
                institutioner (t.ex. Iran).
              </li>
              <li>
                <strong>Empartidiktatur:</strong> Ett enda parti har all makt
                och tillåter inga konkurrerande partier (t.ex. Kina).
              </li>
            </ol>
          </div>
        </div>

        {/* Fråga 6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. Sammanfatta kort kärnan i konservatismen, liberalismen och
            socialismen.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Konservatism</strong> (från conservare = bevara): Vill
                bevara det gamla och hävdar att människor är olika och har olika
                uppgifter i samhället (hierarki). Förändringar bör ske långsamt
                och staten bör inte vara alltför ansvarig för välfärden.
              </li>
              <li>
                <strong>Liberalism</strong> (från liber = fri): Bygger på frihet
                från staten. Individen ska ta ansvar för sitt eget liv och
                staten ska inte lägga sig i ekonomin. Marknaden och fri
                konkurrens ska styra.
              </li>
              <li>
                <strong>Socialism</strong> (från sociare = dela): Strävar efter
                jämlikhet och gemensam egendom. Människor är i grunden jämlika
                och staten/kollektivet bör äga produktionsmedlen för att skapa
                ett rättvist samhälle.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 7 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. Vad är skillnaden mellan demokratisk nationalism och militant
            nationalism?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Demokratisk nationalism</strong> är en positiv
              samhörighetskänsla som är nödvändig för att ett samhälle ska hålla
              ihop (t.ex. traditioner som Kalle Anka och köttbullar i Sverige).{" "}
              <strong>Militant nationalism</strong> är en aggressiv och
              destruktiv form som lyfter fram det egna landet och folket på
              andras bekostnad. Den är ofta främlingsfientlig och används av
              regimer i länder som Ryssland och Ungern för att skapa en bild av
              en yttre fiende.
            </p>
          </div>
        </div>

        {/* Fråga 8 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. Varför blev det nödvändigt att bilda politiska partier i Sverige
            år 1909-1911?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det blev nödvändigt att bilda rikstäckande politiska partier i
              samband med införandet av <strong>proportionella val</strong>{" "}
              (istället för majoritetsval) i början av 1900-talet. I ett
              proportionellt valsystem, där mandat fördelas efter andelen
              röster, blev det avgörande att organisera sig i partier för att
              samla röster och få representation i riksdagen. De konservativa
              drev frågan om proportionella val för att de trodde att ett sådant
              system skulle gynna dem.
            </p>
          </div>
        </div>

        {/* Fråga 9 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. Varför var det de konservativa som vid sekelskiftet 1900 drev
            frågan om proportionella val?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Vid den här tiden var majoritetsval det vanligaste, där den med
              flest röster vann alla mandat i en valkrets. Socialdemokraterna
              och liberalerna hade starkt stöd i storstäderna och kunde vinna
              alla mandat där. De konservativa, som hade starkt stöd på
              landsbygden, insåg att ett proportionellt valsystem skulle ge dem
              en större andel av mandaten totalt sett, eftersom deras röster
              inte skulle "försvinna" i storstädernas majoritetsval. Det var
              alltså en självbevarelsedrift som drev dem att införa
              proportionella val.
            </p>
          </div>
        </div>

        {/* Fråga 10 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. Vad är skillnaden mellan hur ledare i autokratiska stater
            samarbetar idag och under kalla krigets tid, enligt Applebaum?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Enligt Anne Applebaum var ideologin (t.ex. kommunism) det kitt som
              förenade auktoritära stater under kalla kriget. Idag spelar
              ideologin ingen större roll för samarbetet mellan autokratier som
              Ryssland, Kina, Nordkorea och Iran. Istället är det en gemensam
              strävan efter att bara upprätthålla makt och berika sig själva (
              <strong>kleptokrati</strong>) som för dem samman. De har skapat
              raffinerade nätverk för att övervaka sina medborgare och motverka
              demokratiska idéer.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ANALYSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>ANALYSFRÅGOR</h2>

        {/* A1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. Partihistoriken påvisar att politiska partier uppstår när det
            finns ett behov av ett visst politiskt parti. Vad skulle nästa
            partibildning kunna bli? Motivera och ta fram belägg för ditt svar.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En trolig nästa partibildning skulle kunna vara ett utpräglat{" "}
              <strong>"Digitaliserings- eller Teknikparti"</strong>. Detta
              motiveras av att digitaliseringen, AI, integritet på nätet och
              tech-jättarnas makt är frågor som engagerar många, särskilt unga,
              men som idag hanteras splittrat över blockgränserna. Ett sådant
              parti skulle kunna samla väljare från både höger och vänster som
              känner att de traditionella partierna inte har tillräcklig
              kompetens eller driv i dessa frågor. Belägg för detta kan ses i
              Piratpartiets tidigare framgångar, som dock var för smala, och i
              den ökande politiska debatten om AI:s påverkan på jobb och
              samhälle.
            </p>
          </div>
        </div>

        {/* A2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. Är demokrati alltid bäst? Ungdomsbarometern 2024 visade att en
            av fem unga tar helt eller delvis avstånd från att demokrati alltid
            är bäst. Är det så? I så fall, vilka orsaker kan detta ha? Vad kan
            konsekvenserna bli?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Ja, det verkar som att tilltron till demokrati sviktar bland unga.
            </p>
            <p className={classes.paragraph}>
              <strong>Orsaker:</strong> Detta kan bero på en känsla av politisk
              maktlöshet, att unga inte känner sig representerade av etablerade
              politiker. Populistiska partiers enkla lösningar och kritik mot
              "eliten" kan vara tilltalande. Även desinformation och
              "alternativa fakta" i sociala medier kan skapa en cynisk syn på
              demokratiska processer. Dessutom kan globala kriser som
              klimatförändringar och krig skapa en önskan om starka, auktoritära
              ledare som "får saker gjorda".
            </p>
            <p className={classes.paragraph}>
              <strong>Konsekvenser:</strong> De långsiktiga konsekvenserna kan
              bli allvarliga: ett svagare demokratiskt engagemang, lägre
              valdeltagande, ökad polarisering och i värsta fall en acceptans
              för auktoritära styren, vilket urholkar demokratin underifrån.
            </p>
          </div>
        </div>

        {/* A3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A3. Vad kan det finnas för orsaker till att nationalismen har ökat i
            världen? Vilka kan konsekvenserna bli? Vilka åtgärder kan vi ta till
            för att förhindra detta?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Orsaker:</strong> Ökad migration och globalisering kan
              skapa en rädsla för att förlora sin kulturella identitet.
              Ekonomisk oro och känslan av att "eliten" glömmer bort vanligt
              folk gör att nationalistiska budskap om att "ta tillbaka
              kontrollen" vinner mark. Politiker och regimer (som i Ryssland och
              Ungern) använder också medvetet nationalism för att skapa en "vi
              mot dem"-känsla och avleda uppmärksamheten från interna problem.
            </p>
            <p className={classes.paragraph}>
              <strong>Konsekvenser:</strong> Ökad polarisering,
              främlingsfientlighet, konflikter mellan länder (som kriget i
              Ukraina) och ett minskat internationellt samarbete (vilket
              försvårar hanteringen av globala problem som klimatet).
            </p>
            <p className={classes.paragraph}>
              <strong>Åtgärder:</strong> För att förhindra detta behövs en
              politik som motverkar ekonomisk ojämlikhet och inkluderar alla
              grupper i samhället. Det är också avgörande med en stark och
              oberoende journalistik som kan bemöta nationalistisk propaganda
              samt utbildning som främjar tolerans, kritiskt tänkande och
              förståelse för andra kulturer.
            </p>
          </div>
        </div>

        {/* A4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A4. På senare år har begreppet "alternativa fakta" använts. Resonera
            kring varför det är viktigt att ett samhälle kan enas om samma fakta
            när ett beslut ska fattas.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              För att ett demokratiskt beslut ska vara legitimt och fungera i
              praktiken krävs en gemensam verklighetsuppfattning. Om medborgarna
              och politikerna inte kan enas om grundläggande fakta (t.ex. om
              klimatförändringar, orsaker till arbetslöshet eller
              brottsstatistik), blir det omöjligt att föra en konstruktiv debatt
              och hitta lösningar. "Alternativa fakta" leder till att olika
              grupper lever i sina egna "ekokammare", vilket ökar polariseringen
              och gör att beslut fattas på felaktiga grunder. Det underminerar
              tilliten till media, forskning och politiska institutioner, vilket
              i förlängningen hotar demokratin själv.
            </p>
          </div>
        </div>

        {/* A5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A5. Många människor tilltalas av populistiska politiker som har
            enkla lösningar på komplexa problem. Vilka orsaker kan detta ha?
            Vilka konsekvenser kan detta förhållningssätt få för samhället?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Orsaker:</strong> Komplexa problem som migration, miljö
              eller ekonomi kan kännas överväldigande. Enkla lösningar, som att
              "stänga gränserna" eller "lämna EU", ger en illusion av kontroll
              och är lätta att förstå. Populister är ofta skickliga på att peka
              ut tydliga syndabockar (invandrare, eliten, EU) vilket appellerar
              till människors känslor av frustration och rädsla.
            </p>
            <p className={classes.paragraph}>
              <strong>Konsekvenser:</strong> Dessa enkla lösningar är sällan
              effektiva och kan leda till katastrofala resultat eftersom de inte
              tar hänsyn till verklighetens komplexitet. Förhållningssättet
              leder till en polariserad samhällsdebatt där nyanser försvinner.
              Det kan också resultera i att politiken styrs av känslor snarare
              än fakta och att viktiga, långsiktiga frågor (som klimatet)
              försummas.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DISKUSSIONSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>DISKUSSIONSFRÅGOR</h2>

        {/* D6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D6. Stiftelsen Rättsfonden frågade för ett par år sedan 500
            gymnasister vad av följande de tyckte var demokratiskt. Hur skulle
            du ha svarat?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>
                • Valet till riksdagen bör avspegla den
                etniska/religiösa/sexuella mångfald som finns i samhället.
              </strong>
            </p>
            <p className={classes.paragraph}>
              <strong>Svar:</strong> Inte demokratiskt. Detta står i strid med
              principen om lika rösträtt och individens frihet. Väljare ska
              rösta på den kandidat eller det parti de anser bäst representerar
              deras åsikter, oavsett kandidatens bakgrund. Riksdagens
              sammansättning ska vara en spegling av folkets röster, inte av
              folkets demografiska sammansättning.
            </p>

            <p className={classes.paragraph}>
              <strong>
                • Det borde bli förbjudet att sprida falsk information, t.ex.
                förneka klimatförändringen.
              </strong>
            </p>
            <p className={classes.paragraph}>
              <strong>Svar:</strong> Inte demokratiskt. Detta skulle vara ett
              allvarligt hot mot fri opinionsbildning och yttrandefrihet, som är
              grundläggande i en demokrati. Även falsk information måste i
              princip vara tillåten (med vissa lagliga undantag som förtal eller
              uppvigling). Det demokratiska sättet att hantera desinformation är
              inte att förbjuda den, utan att bekämpa den med fakta, källkritik
              och en stark, oberoende journalistik samt utbildning i kritiskt
              tänkande.
            </p>

            <p className={classes.paragraph}>
              <strong>
                • Polisen ska fritt kunna avlyssna misstänkta för att förebygga
                brott.
              </strong>
            </p>
            <p className={classes.paragraph}>
              <strong>Svar:</strong> Inte fullt ut demokratiskt. Detta måste
              balanseras mot rättssäkerheten och integritetsskyddet för den
              enskilda medborgaren. I en demokrati kan sådana avlyssningar
              endast tillåtas under strikta former, med domstolsprövning och för
              att förhindra mycket allvarliga brott (som terrorism). Fria
              avlyssningar utan kontroll skulle riskera att utvecklas till ett
              övervakningssamhälle.
            </p>

            <p className={classes.paragraph}>
              <strong>
                • Antagningen till högskolan ska spegla den
                etniska/religiösa/sexuella mångfald som finns i samhället.
              </strong>
            </p>
            <p className={classes.paragraph}>
              <strong>Svar:</strong> Inte demokratiskt. Detta strider mot
              principen om lika rättigheter och meritokrati (att den bäst
              kvalificerade ska få platsen). Antagning ska baseras på
              individuella meriter, inte på grupptillhörighet. Att kvotera in
              personer baserat på deras bakgrund är diskriminerande och
              undergräver tron på att alla har samma chans.
            </p>

            <p className={classes.paragraph}>
              <strong>• Dödstraff borde införas.</strong>
            </p>
            <p className={classes.paragraph}>
              <strong>Svar:</strong> Inte demokratiskt. Att införa dödstraff
              strider mot grundläggande mänskliga rättigheter, nämligen rätten
              till liv. I en demokrati ska staten inte ha makten att ta livet av
              sina egna medborgare. Rättssystem kan göra fel, och ett dödstraff
              är oåterkalleligt.
            </p>

            <p className={classes.paragraph}>
              <strong>
                • Skidåkare som brutit benet borde betala högre sjukvårdsavgift.
              </strong>
            </p>
            <p className={classes.paragraph}>
              <strong>Svar:</strong> Inte demokratiskt. Detta strider mot
              principen om allas lika värde och tillgång till vård. I en
              demokrati är sjukvården solidariskt finansierad, så att alla,
              oavsett livsstil eller olycksrisk, ska ha tillgång till den vård
              de behöver. Att straffbeskatta en specifik grupp för deras
              livsstil skulle vara godtyckligt och orättvist.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
