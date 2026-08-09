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

export default function TemplateLessonSix() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>KAPITEL 6: STATSSKICK OCH DEMOKRATI</h1>
      <p className={classes.subtitle}>Fullständig sammanfattning</p>

      {/* ===== 1. GRUNDLAGARNA ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. GRUNDLAGARNA</h2>
        <p className={classes.paragraph}>
          Sverige har fyra grundlagar som utgör fundamentet för landets styre. De är svårare att ändra än vanliga lagar.
        </p>

        <h3 className={classes.subHeading}>Vad är en grundlag?</h3>
        <ul className={classes.list}>
          <li>En lag som står över alla andra lagar och reglerar hur landet ska styras.</li>
        </ul>

        <h3 className={classes.subHeading}>De fyra grundlagarna:</h3>
        <ul className={classes.list}>
          <li>
            <strong>Regeringsformen (RF):</strong> Den viktigaste grundlagen. Reglerar hur landet styrs, folkstyret och medborgarnas rättigheter.
          </li>
          <li>
            <strong>Tryckfrihetsförordningen (TF):</strong> Ger rätt att ge ut skrifter och skyddar källskydd.
          </li>
          <li>
            <strong>Yttrandefrihetsgrundlagen (YGL):</strong> Skyddar yttrandefriheten i radio, TV, film och på internet.
          </li>
          <li>
            <strong>Successionsordningen:</strong> Reglerar tronföljden inom kungahuset.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Hur ändras en grundlag?</h3>
        <ul className={classes.list}>
          <li>Riksdagen måste fatta två likadana beslut.</li>
          <li>Det måste vara ett riksdagsval mellan besluten.</li>
          <li>Det räcker med enkel majoritet (mer än hälften av de röstande) i båda besluten.</li>
          <li>
            <strong>Exempel:</strong> 2010 ändrades Regeringsformen för att inkludera "hållbar utveckling" som ett mål för det allmänna.
          </li>
          <li>
            <strong>Kritik:</strong> Det har framförts att det är för lätt att ändra grundlagarna. En utredning har föreslagit att det vid det andra beslutet ska krävas två tredjedels majoritet av samtliga ledamöter.
          </li>
        </ul>
      </section>

      {/* ===== 2. REGERINGSFORMEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. REGERINGSFORMEN (RF)</h2>
        <p className={classes.paragraph}>
          Regeringsformen är den viktigaste grundlagen och beskriver hur makten fördelas.
        </p>

        <h3 className={classes.subHeading}>Portalparagrafen (RF 1 kap. 1 §)</h3>
        <ul className={classes.list}>
          <li>Inleds med orden: <em>"All offentlig makt i Sverige utgår från folket."</em></li>
          <li>Detta slår fast att Sverige är en demokrati.</li>
        </ul>

        <h3 className={classes.subHeading}>Fri- och rättigheter (RF 2 kap.)</h3>
        <ul className={classes.list}>
          <li>Kapitlet listar de grundläggande rättigheterna för medborgarna.</li>
          <li>
            <strong>Absoluta rättigheter:</strong> Kan inte inskränkas utan att grundlagen ändras.
            <ul className={classes.list}>
              <li>Exempel: Religionsfrihet, skydd mot kroppsstraff och tortyr, skydd mot att tvingas avslöja åsikter.</li>
            </ul>
          </li>
          <li>
            <strong>Relativa rättigheter:</strong> Kan inskränkas genom vanliga riksdagsbeslut, men endast för godtagbara ändamål i en demokrati.
            <ul className={classes.list}>
              <li>Exempel: Yttrandefrihet, informationsfrihet, mötesfrihet, demonstrationsfrihet.</li>
              <li>
                <strong>Begränsningar:</strong> Inskränkningar i yttrande- och informationsfriheten får endast göras av hänsyn till rikets säkerhet, folkförsörjningen, allmän ordning, privatlivets helgd eller för att förebygga brott.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>Internationella konventioner</h3>
        <ul className={classes.list}>
          <li>Sverige har skrivit under Europarådets konvention om mänskliga rättigheter och Barnkonventionen, vilket innebär att svenska lagar måste följa dessa.</li>
        </ul>
      </section>

      {/* ===== 3. RIKSDAGEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. RIKSDAGEN</h2>
        <p className={classes.paragraph}>
          Riksdagen är folkets främsta företrädare och har den lagstiftande makten.
        </p>

        <h3 className={classes.subHeading}>Riksdagens makt:</h3>
        <ul className={classes.list}>
          <li>Utse statsminister.</li>
          <li>Kontrollera regeringen och förvaltningen.</li>
          <li>Stifta lagar.</li>
          <li>Besluta om statens finanser (budgeten).</li>
        </ul>

        <h3 className={classes.subHeading}>Val av statsminister (Negativ parlamentarism):</h3>
        <ul className={classes.list}>
          <li>Talmannen föreslår en statsministerkandidat.</li>
          <li>Riksdagen röstar. Förslaget går igenom om färre än 175 ledamöter röstar nej. Det krävs alltså ingen aktiv majoritet för förslaget, bara att en majoritet inte är emot det.</li>
          <li>Om talmannens förslag faller fyra gånger blir det extra val.</li>
        </ul>

        <h3 className={classes.subHeading}>Parlamentarism och kontrollmakt:</h3>
        <ul className={classes.list}>
          <li>
            <strong>Parlamentarism:</strong> Regeringen måste ha riksdagens förtroende för att sitta kvar. Om riksdagen och regeringen är oense, är det riksdagen som vinner.
          </li>
          <li>
            <strong>Misstroendeförklaring:</strong> Riksdagen kan tvinga ett statsråd eller statsministern att avgå om mer än hälften av ledamöterna (175) röstar för det. Om statsministern fälls, faller hela regeringen (om inte statsministern utlyser extra val).
            <ul className={classes.list}>
              <li>Exempel: 2021 tvingades Stefan Löfvens regering avgå efter en misstroendeförklaring.</li>
            </ul>
          </li>
          <li>
            <strong>Konstitutionsutskottet (KU):</strong> Granskar statsrådens arbete och ser till att de följer lagar och riksdagens beslut. KU:s kritik har ingen rättslig påföljd men kan vara en prestigeförlust.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Riksdagsarbetet i kammaren:</h3>
        <ul className={classes.list}>
          <li>Förslag från regeringen (propositioner) eller enskilda ledamöter (motioner) bereds i utskott.</li>
          <li>Utskottet skriver ett betänkande med sitt förslag till beslut. Mindre partier kan skriva reservationer (avvikande meningar).</li>
          <li>Betänkandet debatteras i kammaren och sedan röstas det (votering).</li>
          <li>Riksdagens beslut meddelas sedan till regeringen, som ansvarar för att det genomförs.</li>
        </ul>

        <h3 className={classes.subHeading}>Partipiska:</h3>
        <ul className={classes.list}>
          <li>Även om ledamöter formellt får rösta efter sitt samvete, är trycket från partiledningen att rösta enligt partilinjen starkt. Detta kallas för partipiska.</li>
        </ul>

        <h3 className={classes.subHeading}>Viktiga begrepp:</h3>
        <ul className={classes.list}>
          <li>
            <strong>Proposition:</strong> Ett lagförslag från regeringen till riksdagen.
          </li>
          <li>
            <strong>Motion:</strong> Ett förslag från en enskild riksdagsledamot eller en partigrupp.
          </li>
          <li>
            <strong>Betänkande:</strong> Utskottets förslag till beslut i en fråga.
          </li>
          <li>
            <strong>Reservation:</strong> En minoritets avvikande åsikt i ett utskottsbetänkande.
          </li>
          <li>
            <strong>Votering:</strong> Omröstning i kammaren.
          </li>
        </ul>
      </section>

      {/* ===== 4. PROPORTIONELLA VAL ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. PROPORTIONELLA VAL TILL RIKSDAGEN</h2>
        <p className={classes.paragraph}>
          Sverige har proportionella val, vilket innebär att partierna får ungefär lika många mandat som de får röster.
        </p>

        <ul className={classes.list}>
          <li>
            <strong>4%-spärren:</strong> Ett parti måste få minst 4,0% av rösterna i hela landet (eller 12% i en valkrets) för att få några mandat alls.
          </li>
          <li>
            <strong>Valkretsar:</strong> Sverige är indelat i 29 valkretsar (oftast län). 310 av mandaten är fasta mandat som fördelas mellan valkretsarna baserat på antalet röstberättigade där.
          </li>
          <li>
            <strong>Utjämningsmandat:</strong> De återstående 39 mandaten är utjämningsmandat som fördelas i hela landet för att göra fördelningen mer rättvis och ge små partier en chans. De små partierna får ofta en stor andel utjämningsmandat.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Riksdagsvalet 2022:</h3>
        <ul className={classes.list}>
          <li>
            <strong>Vinnare:</strong> Sverigedemokraterna (ökade mest), Socialdemokraterna och Miljöpartiet.
          </li>
          <li>
            <strong>Förlorare:</strong> Moderaterna (blev mindre än SD), Centerpartiet, Kristdemokraterna och Liberalerna.
          </li>
          <li>
            <strong>Tidöavtalet:</strong> Efter valet bildades en regering bestående av M, KD och L, med stöd av SD. De fyra partierna slöt Tidöavtalet, som beskriver samarbetets politik. SD får stort inflytande trots att de inte sitter i regeringen.
          </li>
        </ul>
      </section>

      {/* ===== 5. REGERINGEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. REGERINGEN</h2>
        <p className={classes.paragraph}>
          Regeringen styr riket och är ansvarig inför riksdagen. (RF 1 kap. 6 §)
        </p>

        <h3 className={classes.subHeading}>Olika slags regeringar:</h3>
        <ul className={classes.list}>
          <li>
            <strong>Enpartiregering:</strong> Består av ett enda parti (t.ex. Andersson 2021–2022).
          </li>
          <li>
            <strong>Koalitionsregering:</strong> Består av två eller flera partier (t.ex. Kristersson 2022).
          </li>
          <li>
            <strong>Majoritetsregering:</strong> Har stöd av mer än hälften av riksdagens ledamöter. Detta är ovanligt.
          </li>
          <li>
            <strong>Minoritetsregering:</strong> Har stöd av högst 174 ledamöter. Detta är det normala i Sverige.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Hur tillsätts regeringen?</h3>
        <ul className={classes.list}>
          <li>Talmannen föreslår en statsminister.</li>
          <li>Riksdagen godkänner förslaget.</li>
          <li>Statsministern utser själv sina ministrar (regeringen).</li>
        </ul>

        <h3 className={classes.subHeading}>Regeringens makt (Styrmakt):</h3>
        <ul className={classes.list}>
          <li>
            <strong>Initiera lagstiftning:</strong> Regeringen lägger fram propositioner för riksdagen.
          </li>
          <li>
            <strong>Utredningar:</strong> Regeringen kan tillsätta utredningar (ofta med höga tjänstemän, ibland parlamentariska) för att utreda en fråga inför en proposition.
          </li>
          <li>
            <strong>Förordningar:</strong> Regeringen kan själv stifta förordningar, som är mer detaljerade regler inom ramen för lagarna.
          </li>
          <li>
            <strong>Utnämningar:</strong> Regeringen utser chefer för statliga myndigheter (generaldirektörer).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Varför avgår en regering?</h3>
        <ul className={classes.list}>
          <li>
            <strong>Efter val:</strong> Oftast sker ett regeringsskifte efter ett val, men det är inte automatiskt.
          </li>
          <li>
            <strong>Misstroende:</strong> Om statsministern fälls.
          </li>
          <li>
            <strong>Nederlag i viktig fråga:</strong> Om statsministern förlorar en omröstning där hen ställt kabinettsfråga (hotat med att avgå).
          </li>
          <li>
            <strong>Interna motsättningar:</strong> Oenighet inom en koalitionsregering.
          </li>
        </ul>
      </section>

      {/* ===== 6. STATSCHEFEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. STATSCHEFEN (KUNGEN)</h2>
        <ul className={classes.list}>
          <li>
            <strong>Roll:</strong> Kungen (Carl XVI Gustaf) är statschef men har ingen politisk makt. Hans uppgifter är främst ceremoniella och representativa.
          </li>
          <li>
            <strong>Uppgifter:</strong>
            <ul className={classes.list}>
              <li>Representerar Sverige vid statsbesök.</li>
              <li>Förklarar riksmötet öppnat (på talmannens begäran).</li>
              <li>Är ordförande i Utrikesnämnden och konseljen (men utan att delta i politiska diskussioner).</li>
            </ul>
          </li>
          <li>
            <strong>Successionsordningen:</strong> Reglerar tronföljden. Sedan 1980 har Sverige full kognatisk tronföljd, vilket innebär att det äldsta barnet ärver tronen, oavsett kön. Detta gjorde att Victoria blev kronprinsessa istället för sin yngre bror Carl Philip.
          </li>
          <li>
            <strong>Åtalsfrihet:</strong> Kungen kan inte åtalas för brott. Detta är en teoretisk möjlighet, men i praktiken skulle det vara en konstitutionell kris om han begick ett allvarligt brott. Kungen är en av få i Sverige som inte har religionsfrihet; han måste tillhöra den lutherska kyrkan.
          </li>
        </ul>
      </section>

      {/* ===== 7. STATSFÖRVALTNINGEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. STATSFÖRVALTNINGEN</h2>
        <p className={classes.paragraph}>
          Statsförvaltningen är regeringens "förlängda arm" och ansvarar för att verkställa riksdagens och regeringens beslut.
        </p>

        <h3 className={classes.subHeading}>Förvaltningsmyndigheterna:</h3>
        <ul className={classes.list}>
          <li>Myndigheter som Skolverket, CSN och Livsmedelsverket.</li>
          <li>
            <strong>Självständiga:</strong> De får inte styras av regeringen i enskilda ärenden. Detta kallas för ministerstyre och är förbjudet. Syftet är att garantera rättssäkerhet och opartiskhet.
          </li>
          <li>
            <strong>Öppna:</strong> Offentlighetsprincipen gäller, vilket innebär att alla handlingar är offentliga om inte sekretess gäller. Detta motverkar korruption.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Den regionala statsförvaltningen:</h3>
        <ul className={classes.list}>
          <li>
            <strong>Länsstyrelserna</strong> är den högsta myndigheten i varje län. De kontrollerar att lagar följs inom länet inom områden som miljö, livsmedel och trafik.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Justitieombudsmannen (JO):</h3>
        <ul className={classes.list}>
          <li>Kontrollerar att myndigheter och tjänstemän följer lagar och inte kränker medborgarnas rättigheter.</li>
        </ul>
      </section>

      {/* ===== 8. FÖRVALTNINGSDOMSTOLARNA ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. FÖRVALTNINGSDOMSTOLARNA</h2>
        <p className={classes.paragraph}>
          Förvaltningsdomstolarna prövar överklaganden av beslut som fattats av myndigheter, till exempel Skatteverket eller socialnämnden.
        </p>

        <ul className={classes.list}>
          <li>
            <strong>Syfte:</strong> Att enskilda medborgare ska kunna överklaga myndigheters beslut. Detta är en grundpelare i rättsstaten.
          </li>
          <li>
            <strong>Nivåer:</strong>
            <ol className={classes.list}>
              <li>
                <strong>Förvaltningsrätten:</strong> Första instans. Finns på 12 platser i Sverige.
              </li>
              <li>
                <strong>Kammarrätten:</strong> Andra instans. Finns i Stockholm, Göteborg, Jönköping och Sundsvall.
              </li>
              <li>
                <strong>Högsta förvaltningsdomstolen:</strong> Högsta instans. Prövar i princip bara mål som är av prejudikatintresse (vägledande för andra domstolar).
              </li>
            </ol>
          </li>
          <li>
            <strong>Kostnad:</strong> Det kostar inget att överklaga ett myndighetsbeslut, och den som förlorar behöver inte betala motpartens rättegångskostnader (till skillnad från i allmän domstol).
          </li>
        </ul>
      </section>

      {/* ===== 9. CIVIL OLYDNAD ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. CIVIL OLYDNAD</h2>
        <p className={classes.paragraph}>
          Civil olydnad innebär att medvetet bryta mot en lag för att protestera mot något man anser vara orättvist. Kapitlet ställer frågan om civil olydnad är brott eller solidaritet.
        </p>

        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Ett politiskt ställningstagande som utförs öppet och icke-våldsamt av en samhällsmedborgare för att väcka opinion. Man är villig att acceptera straffet för sitt brott.
          </li>
          <li>
            <strong>Exempel:</strong>
            <ul className={classes.list}>
              <li>Martin Luther Kings kamp för medborgerliga rättigheter.</li>
              <li>Klimataktivister som blockerar trafik (t.ex. Återställ Våtmarker).</li>
              <li>Djurrättsaktivister som släpper ut minkar.</li>
            </ul>
          </li>
          <li>
            <strong>Debatt:</strong> Ska domstolar ta hänsyn till aktivisternas "moraliska motiv"? Eller ska alla lagbrott straffas lika? Aktivisterna menar att de väcker viktiga frågor, medan kritiker menar att de skapar irritation och flyttar fokus från sakfrågan.
          </li>
          <li>
            <strong>Juridisk prövning:</strong> I Sverige har domstolar i flera fall dömt klimataktivister för sabotage, vilket har högre straff än egenmäktigt förfarande. Detta är en pågående rättslig diskussion.
          </li>
        </ul>
      </section>

      {/* ===== NYCKELORD ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>NYCKELORD</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>Grundlag:</span> En av fyra lagar som står över alla andra och reglerar hur Sverige styrs.
          </li>
          <li>
            <span className={classes.keyword}>Regeringsformen (RF):</span> Den viktigaste grundlagen.
          </li>
          <li>
            <span className={classes.keyword}>Negativ parlamentarism:</span> Systemet där en statsministerkandidat blir godkänd om inte en majoritet av riksdagen röstar emot.
          </li>
          <li>
            <span className={classes.keyword}>Misstroendeförklaring:</span> Riksdagens möjlighet att tvinga ett statsråd eller hela regeringen att avgå.
          </li>
          <li>
            <span className={classes.keyword}>Konstitutionsutskottet (KU):</span> Riksdagens utskott som granskar regeringen.
          </li>
          <li>
            <span className={classes.keyword}>Proposition:</span> Ett lagförslag från regeringen.
          </li>
          <li>
            <span className={classes.keyword}>Motion:</span> Ett förslag från en enskild riksdagsledamot.
          </li>
          <li>
            <span className={classes.keyword}>Betänkande:</span> Utskottets förslag till beslut.
          </li>
          <li>
            <span className={classes.keyword}>Reservation:</span> En avvikande mening från en minoritet i ett utskott.
          </li>
          <li>
            <span className={classes.keyword}>Votering:</span> Omröstning i riksdagskammaren.
          </li>
          <li>
            <span className={classes.keyword}>Proportionella val:</span> Ett valsystem där partier får mandat i proportion till antalet röster.
          </li>
          <li>
            <span className={classes.keyword}>4%-spärren:</span> Den gräns ett parti måste passera för att komma in i riksdagen.
          </li>
          <li>
            <span className={classes.keyword}>Utjämningsmandat:</span> Mandat som fördelas i hela landet för att göra valresultatet mer proportionellt.
          </li>
          <li>
            <span className={classes.keyword}>Koalitionsregering:</span> En regering bestående av flera partier.
          </li>
          <li>
            <span className={classes.keyword}>Minoritetsregering:</span> En regering som saknar egen majoritet i riksdagen.
          </li>
          <li>
            <span className={classes.keyword}>Ministerstyre:</span> Det otillåtna försöket att styra en myndighet i ett enskilt ärende.
          </li>
          <li>
            <span className={classes.keyword}>Förvaltningsdomstol:</span> Domstol som prövar överklaganden av myndighetsbeslut.
          </li>
          <li>
            <span className={classes.keyword}>Prejudikat:</span> Ett rättsfall som blir vägledande för framtida liknande fall.
          </li>
          <li>
            <span className={classes.keyword}>Civil olydnad:</span> Ett medvetet lagbrott som en protesthandling för att påverka samhället.
          </li>
        </ul>
      </section>

      {/* ===== FRÅGOR OCH SVAR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>FRÅGOR OCH SVAR</h2>

        {/* Fråga 1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>1. Vilka är de fyra grundlagarna?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Sveriges fyra grundlagar är:
            </p>
            <ol className={classes.list}>
              <li>
                <strong>Regeringsformen (RF):</strong> Reglerar hur Sverige styrs, medborgarnas rättigheter och hur den offentliga makten fördelas.
              </li>
              <li>
                <strong>Successionsordningen (SO):</strong> Reglerar tronföljden och vem som blir Sveriges statschef.
              </li>
              <li>
                <strong>Tryckfrihetsförordningen (TF):</strong> Garanterar rätten att trycka och publicera skrifter utan censur samt reglerar offentlighetsprincipen.
              </li>
              <li>
                <strong>Yttrandefrihetsgrundlagen (YGL):</strong> Garanterar yttrandefriheten i radio, tv, film, tekniska upptagningar och på internet.
              </li>
            </ol>
          </div>
        </div>

        {/* Fråga 2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>2. Hur går det till när en grundlag ändras?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              För att ändra en grundlag krävs två likalydande riksdagsbeslut med ett mellanliggande riksdagsval. Detta finns till för att skydda demokratin och ge folket möjlighet att ta ställning till förslaget i valet.
            </p>
          </div>
        </div>

        {/* Fråga 3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>3. Sammanfatta regeringsformens allra första paragraf.</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Regeringsformens portalparagraf slår fast att <em>"All offentlig makt i Sverige utgår från folket"</em>. Den fastställer att den svenska folkstyrelsen bygger på fri åsiktsbildning, allmän och lika rösträtt, ett representativt statsskick, parlamentarism, kommunal självstyrelse samt rättssäkerhet.
            </p>
          </div>
        </div>

        {/* Fråga 4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>4. Hur går det till när en statsminister ska utses?</h3>
          <div className={classes.answer}>
            <ol className={classes.list}>
              <li>Riksdagens talman rådgör med partiledarna och de vice talmännen.</li>
              <li>Talmannen lägger fram ett förslag till statsminister inför riksdagen.</li>
              <li>Riksdagen röstar om förslaget. Om inte en majoritet (minst 175 ledamöter) röstar nej, blir förslaget godkänt.</li>
              <li>Om talmannens förslag röstas ned fyra gånger hålls automatiskt ett extra val inom tre månader.</li>
            </ol>
          </div>
        </div>

        {/* Fråga 5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>5. Vad innebär negativ parlamentarism?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Negativ parlamentarism innebär att en statsminister eller regering inte behöver ha en aktiv majoritet som röstar ja för att bli vald eller sitta kvar. Det räcker att en majoritet i riksdagen (minst 175 ledamöter) inte röstar nej.
            </p>
          </div>
        </div>

        {/* Fråga 6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>6. Vilka är riksdagens fyra huvuduppgifter?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Riksdagens fyra huvudsakliga uppgifter är att:
            </p>
            <ol className={classes.list}>
              <li>Utse Sveriges statsminister.</li>
              <li>Stifta lagar.</li>
              <li>Besluta om statens finanser (statens budget).</li>
              <li>Kontrollera regeringen och statens myndigheter.</li>
            </ol>
          </div>
        </div>

        {/* Fråga 7 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>7. Vad innebär valmetoden med proportionella val?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Proportionella val innebär att mandaten (platserna) i riksdagen fördelas i proportion till hur många röster varje parti får i valet. Får ett parti till exempel 10 % av rösterna ska det få ungefär 10 % av platserna i riksdagen. För att komma in krävs dock att partiet når upp till fyraprocentsspärren.
            </p>
          </div>
        </div>

        {/* Fråga 8 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>8. Vilken makt har regeringen?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Regeringen har den verkställande makten och styr riket. Dess makt omfattar att:
            </p>
            <ul className={classes.list}>
              <li>Lägga fram lagförslag (propositioner) och budgetförslag till riksdagen.</li>
              <li>Utfärda förordningar (detaljregler om hur lagar ska tillämpas).</li>
              <li>Leda utrikespolitiken och försvaret.</li>
              <li>Styra och tillsätta chefer för de statliga förvaltningsmyndigheterna.</li>
              <li>Bevilja nåd i vissa straffrättsliga fall.</li>
            </ul>
          </div>
        </div>

        {/* Fråga 9 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. Vad är skillnaden mellan Utbildningsdepartementet, Utbildningsutskottet och Skolverket?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Utbildningsdepartementet:</strong> Hör till regeringen. Här arbetar utbildningsministern och tjänstemän med att förbereda regeringens skolpolitik och propositioner.
              </li>
              <li>
                <strong>Utbildningsutskottet:</strong> Hör till riksdagen. Det består av 17 riksdagsledamöter som granskar och förbereder alla lagförslag och motioner om skola och utbildning innan riksdagen fattar beslut.
              </li>
              <li>
                <strong>Skolverket:</strong> Är en statlig förvaltningsmyndighet. Skolverket tillämpar de lagar och beslut som riksdag och regering har klubbat igenom i praktiken.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 10 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>10. Vad heter Sveriges statschef? Vad heter tronföljaren?</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Statschef:</strong> Konung Carl XVI Gustaf.
              </li>
              <li>
                <strong>Tronföljare:</strong> Kronprinsessan Victoria.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 11 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>11. Vad innebär myndighetsutövning?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Myndighetsutövning innebär att en myndighet fattar beslut som är juridiskt bindande för enskilda medborgare eller företag utifrån gällande lagar (t.ex. beslut om bygglov, utbetalning av bidrag, skatt eller körkort).
            </p>
          </div>
        </div>

        {/* Fråga 12 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. Vilka typer av ärenden kan förvaltningsdomstolarna avgöra?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Förvaltningsdomstolarna avgör tvister mellan enskilda personer/företag och myndigheter. Exempel inkluderar överklaganden gällande skattebeslut, bygglov, socialtjänstbeslut (t.ex. försörjningsstöd), tvångsvård (LVU/LVM) och utlänningsmål/asylärenden.
            </p>
          </div>
        </div>

        {/* Fråga 13 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>13. Vad är svaren på ingressfrågorna till det här kapitlet?</h3>
          <div className={classes.answer}>
            <ol className={classes.list}>
              <li>
                <strong>Om statsministern vill byta ut försvarsministern mot Överbefälhavaren:</strong> Statsministern har full frihet att tillsätta och entlediga statsråd (ministrar). ÖB skulle dock behöva avgå från sin militära tjänst för att ingå i regeringen.
              </li>
              <li>
                <strong>Om utbildningsministern vill tillsätta en utredning om förkortat sommarlov:</strong> Ja, det är regeringen som beslutar om att tillsätta statliga utredningar och ge dem direktiv.
              </li>
              <li>
                <strong>Om kronprinsessan Victoria konverterar till katolicismen och kan fortsätta vara kronprinsessa:</strong> Nej, enligt Successionsordningen måste statschefen och tronföljaren tillhöra den evangelisk-lutherska tron. Konvertering innebär att rätten till tronen förloras.
              </li>
            </ol>
          </div>
        </div>

        {/* Fråga 14 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. Ungefär 20 procent av svenskarna röstar inte när det är val. Vilka konsekvenser för detta med sig? För Sverige? För demokratin? För acceptansen av lagförslag? Vilka orsaker kan ni se till varför vissa inte går och röstar?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Konsekvenser för Sverige och demokratin:</strong> Den representativa demokratin blir svagare om en stor del av befolkningen ställs utanför. Det riskerar att skapa en snedvridning där politiker främst fokuserar på de grupper som faktiskt röstar.
            </p>
            <p className={classes.paragraph}>
              <strong>För acceptansen av lagförslag:</strong> Om valdeltagandet är lågt kan medborgarna uppleva att de stiftade lagarna saknar folklig förankring och legitimitet.
            </p>
            <p className={classes.paragraph}>
              <strong>Orsaker till lågt valdeltagande:</strong> Lågt förtroende för politiker, bristande kunskap om det politiska systemet, känsla av utanförskap eller upplevelsen att det egna valet inte gör någon skillnad.
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
            A1. Hur kommer riksdagsvalet 2026 att gå? Vad säger prognosinstituten? Vad säger ni själva?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Vad prognoserna visar:</strong> Politiska mätinstitut och prognoser visar vanligtvis ett jämnt läge mellan det styrande högerblocket och oppositionens vänster-mittenblock. Opinionsläget förändras utifrån ekonomiska faktorer (inflationsutveckling, räntor), trygghetsfrågor och välfärd.
            </p>
            <p className={classes.paragraph}>
              <strong>Egen analys:</strong> Valresultatet beror på vilket block som lyckas bäst med att mobilisera sina väljare och vilka sakfrågor (ekonomi, sjukvård, lag och ordning) som dominerar valrörelsen.
            </p>
          </div>
        </div>

        {/* A2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. Orsakerna till att Sverige är en monarki? Vilka konsekvenser skulle en övergång till republik få?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Orsaker till monarki:</strong> Historiska traditioner och den kompromiss som nåddes i 1974 års regeringsform (Torekovskompromissen), där kungen behölls som opolitisk samlande symbol men berövades all politisk makt.
            </p>
            <p className={classes.paragraph}>
              <strong>Konsekvenser av republik:</strong> Sverige skulle få en vald statschef (en president). Det skulle kräva en ändring av grundlagen (RF och avskaffande av SO). Det skulle förändra statsskickets ceremoniella utformning och kräva nya val- eller utnämningsförfaranden för statschefsposten.
            </p>
          </div>
        </div>

        {/* A3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A3. Bör en riksdagsledamot alltid få rösta enligt sitt eget samvete? Vilka fördelar finns det med en tydlig partipiska? Vilka nackdelar finns det?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Fördelar med partipiska:</strong> Skapar förutsägbarhet och stabilitet i parlamentet. Väljarna vet vad de får när de röstar på ett parti, och det underlättar regeringsbildning och genomförande av politiska program.
            </p>
            <p className={classes.paragraph}>
              <strong>Nackdelar med partipiska:</strong> Minskar ledamöternas personliga handlingsfrihet och kan göra att lokala väljarintressen eller personliga övertygelser underordnas partiets ledning.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DISKUSSIONSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>DISKUSSIONSFRÅGOR</h2>

        {/* D1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. Hur många preskriberas brotten för ett statsråd och hur lång är preskriptionstiden?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Statsråd lyder under vanliga svenska strafflagar vad gäller vanliga brott. För tjänstefel eller brott i utövningen av statsrådsämbetet prövas ansvaret av Konstitutionsutskottet (KU) och kan väckas i Högsta domstolen (via riksrättsförfarande). Preskriptionstiden följer brottsbalkens allmänna regler beroende på brottets svårighetsgrad (från 2 år upp till 25 år, medan vissa synnerligen allvarliga brott inte preskriberas alls).
            </p>
          </div>
        </div>

        {/* D2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. Vad blir konsekvensen om politiker aldrig begår någon dumhet?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Å ena sidan ökar det förtroendet för politikerna. Å andra sidan kan en miljö där inga misstag tillåts skapa en riskminimering där politiker blir för försiktiga, undviker svåra eller nyskapande beslut och framstår som mänskligt distanserade från väljarna.
            </p>
          </div>
        </div>

        {/* D3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D3. Vid riksdagsvalet 2024 var rösträttsåldern i Tyskland 16 år. Skulle det vara en bra idé att i Sverige sänka rösträttsåldern vid riksdags-, region- och kommunalval?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Argument för sänkning:</strong> Det stärker ungdomars demokratiska engagemang tidigt och ger en åldersgrupp som påverkas direkt av framtida beslut (utbildning, klimat) en röst.
            </p>
            <p className={classes.paragraph}>
              <strong>Argument emot sänkning:</strong> Myndighetsåldern i Sverige är 18 år. Det finns en logik i att rättigheter och skyldigheter (som att vara straffmyndig, ingå avtal och rösta) följs åt vid samma ålder.
            </p>
          </div>
        </div>

        {/* D4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D4. Politiska vildar kallas riksdagsledamöter som lämnar sitt parti, men ändå sitter kvar i riksdagen mandatperioden ut. Även om de ofta blir socialt utfrusna behåller de sina ekonomiska förmåner. Bör politiska vildar tvingas lämna sin riksdagsplats till förmån för en reserv från samma parti som vilden tillhörde när hen invaldes?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Ja, de bör lämna:</strong> Väljarna röstar i huvudsak på partier och partiprogram i det proportionella valsystemet. När en ledamot lämnar partiet förändras mandatfördelningen som väljarna röstade för.
            </p>
            <p className={classes.paragraph}>
              <strong>Nej, de bör sitta kvar:</strong> Enligt regeringsformen är det personen som är invald som riksdagsledamot, inte partiet. Det skyddar den enskilde ledamotens oberoende mot partiledningens godtycke.
            </p>
          </div>
        </div>

        {/* D5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D5. Varför, tror du, ägnar riksdagsledamöter tid åt att skriva motioner när nästan alla avslås?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Motioner fungerar som ett viktigt redskap för att:
            </p>
            <ol className={classes.list}>
              <li>Visa väljarna och valkretsen vilka frågor ledamoten driver.</li>
              <li>Lyfta nya ideologiska frågor och starta en debatt som på sikt kan påverka partiets eller regeringens politik.</li>
              <li>Skapa uppmärksamhet i medierna kring specifika problem i samhället.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===== FÖRDJUPNINGSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>FÖRDJUPNINGSFRÅGOR</h2>

        {/* F1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F1. Vad handlar den inrikespolitiska debatten om just nu? Följ debatten i tidningar och tv. På vad sätt skiljer sig de politiska partiernas åsikter åt?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Den inrikespolitiska debatten domineras ofta av gängkriminalitet/trygghet, sjukvårdens resurser, skolan samt hushållens ekonomi och energiförsörjning. Skillnaderna märks i att högerpartierna ofta betonar skattesänkningar, hårdare straff och marknadslösningar, medan vänsterpartierna betonar ökad statlig styrning, högre välfärdsfinansiering och stärkta trygghetssystem.
            </p>
          </div>
        </div>

        {/* F2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F2. Kontakta en riksdagsledamot från din valkrets och be honom eller henne berätta om riksdagsarbetet. Hur hård är partipiskan? Hur går debatten i det utskott hen sitter – diskuterar man förutsättningslöst eller har partierna pratat ihop sig före utskottsbehandlingen? Vilka frågor driver riksdagsledamoten? Vilka motioner har riksdagsledamoten lämnat in under denna mandatperiod?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <em>(Praktisk uppgift)</em> I utskottssammanträdena har partierna i regel förankrat sina ställningstaganden i sina respektive riksdagsgrupper innan mötet, vilket gör att linjerna ofta är tydliga. Partipiskan upplevs ofta som stark i avgörande omröstningar, men utskottsarbetet ger ändå utrymme för kompromisser i enskilda detaljfrågor.
            </p>
          </div>
        </div>

        {/* F3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F3. Välj en fråga som du och några till i klassen tycker är viktig, t.ex. landsbygdens utveckling, arbetslöshet bland invandrare eller damidrottens framtid. Kontakta några politiska partier och ställ raka frågor.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <em>(Praktisk gruppuppgift)</em> Genom att ställa sammanställda frågor till partiernas lokala eller nationella kanslier går det att jämföra hur konkret deras förslag är samt om lösningarna bygger på statliga interventionsåtgärder, ekonomiska incitament eller lagändringar.
            </p>
          </div>
        </div>

        {/* F4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F4. Ta med hjälp av hovets hemsida reda på vad kungen eller de övriga i kungahuset gjort de senaste veckorna eller gör de närmaste veckorna.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Kungahusets arbete består i huvudsak av representationsuppdrag, statsbesök, utdelning av priser och stipendier samt deltagande vid officiella ceremonier och informationstillfällen med myndigheter och organisationer.
            </p>
          </div>
        </div>

        {/* F5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F5. Det är inte bara politiker som har makt utan även medier, influerare, stora företagsledare, fackföreningar och andra. Vilka maktmedel har dessa till sitt förfogande? Hur utövar de sin makt?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Medier & Influerare:</strong> Utövar agendamakt genom att välja vilka frågor som uppmärksammas och hur de vinklas.
              </li>
              <li>
                <strong>Företagsledare:</strong> Utövar ekonomisk makt genom investeringsbeslut, jobbskapande och lobbying.
              </li>
              <li>
                <strong>Fackföreningar:</strong> Utövar organisatorisk makt genom kollektivavtal, strejkrätt och lobbying mot lagstiftare.
              </li>
            </ul>
          </div>
        </div>

        {/* F6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F6. Vilka av statsråden syns mest i medierna? Kolla tidningar och radio-tv-nyheter under någon vecka. Vad gäller frågorna?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Statsministern, finansministern och justitieministern är oftast de mest synliga statsråden i medierna, eftersom deras ansvarsområden täcker övergripande statlig politik, statens ekonomi och trygghets-/kriminalitetsfrågor.
            </p>
          </div>
        </div>
      </section>

      {/* ===== YTTERLIGARE NYCKELORD ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>YTTERLIGARE NYCKELORD</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>Allmänna motionstiden:</span> Den period under hösten då riksdagsledamöter får lämna in motioner om vilka ämnen som helst.
          </li>
          <li>
            <span className={classes.keyword}>Central förvaltningsmyndighet:</span> En statlig myndighet som täcker hela landet (t.ex. Skatteverket eller Skolverket).
          </li>
          <li>
            <span className={classes.keyword}>Departement:</span> Enhet inom regeringen som leds av en minister och förbereder regeringens ärenden.
          </li>
          <li>
            <span className={classes.keyword}>Enpartiregering:</span> En regering som består av endast ett parti.
          </li>
          <li>
            <span className={classes.keyword}>Extra val:</span> Val till riksdagen som hålls mellan de ordinarie valen.
          </li>
          <li>
            <span className={classes.keyword}>Handlägga:</span> Att förbereda, utreda och fatta beslut i ett ärende på en myndighet.
          </li>
          <li>
            <span className={classes.keyword}>Interpellation:</span> En mer utförlig fråga i riksdagen från en ledamot till ett statsråd som leder till debatt i kammaren.
          </li>
          <li>
            <span className={classes.keyword}>Kabinettsfråga:</span> När regeringen kopplar ett lagförslag till sin egen avgång för att tvinga riksdagen att rösta ja.
          </li>
          <li>
            <span className={classes.keyword}>Kommitté:</span> En grupp personer som fått i uppdrag av regeringen att utreda en specifik fråga (en utredning).
          </li>
          <li>
            <span className={classes.keyword}>Konselj:</span> Ett sammanträde där regeringen informerar statschefen (kungen) om rikets tillstånd under kungens ordförandeskap.
          </li>
          <li>
            <span className={classes.keyword}>Konstitution:</span> Ett lands grundlagar och statsskick.
          </li>
          <li>
            <span className={classes.keyword}>Landshövding:</span> Chefen för en länsstyrelse, utsedd av regeringen.
          </li>
          <li>
            <span className={classes.keyword}>Länsstyrelse:</span> Statens regionala förvaltningsmyndighet i ett län.
          </li>
          <li>
            <span className={classes.keyword}>Majoritetsregering:</span> En regering som har stöd av mer än hälften av riksdagens ledamöter.
          </li>
          <li>
            <span className={classes.keyword}>Mandat:</span> En plats/en stol i riksdagen eller en beslutande församling.
          </li>
          <li>
            <span className={classes.keyword}>Offentlighetsprincipen:</span> Rätten för alla medborgare att ta del av allmänna handlingar hos myndigheter.
          </li>
          <li>
            <span className={classes.keyword}>Parlamentarisk utredning:</span> En utredning där representanter från riksdagspartierna ingår.
          </li>
          <li>
            <span className={classes.keyword}>Regeringsförklaring:</span> Ett tal där statsministern presenterar sin regerings politik och ministrar.
          </li>
          <li>
            <span className={classes.keyword}>Remiss:</span> Att skicka ett lagförslag på granskning till myndigheter och expertorganisationer innan beslut tas.
          </li>
          <li>
            <span className={classes.keyword}>Sametinget:</span> Ett valt organ och myndighet för samerna i Sverige.
          </li>
          <li>
            <span className={classes.keyword}>Skriftlig fråga:</span> En kort skriftlig fråga från en riksdagsledamot till en minister.
          </li>
          <li>
            <span className={classes.keyword}>Statsrådsberedningen:</span> Statsministerns eget departement som leder och samordnar regeringens arbete.
          </li>
          <li>
            <span className={classes.keyword}>Stödparti:</span> Ett parti som inte sitter i regeringen men som samarbetar och röstar med den.
          </li>
          <li>
            <span className={classes.keyword}>Tidöavtalet:</span> Det skriftliga samarbetsavtalet mellan regeringen (M, KD, L) och dess stödparti (SD) ingånget 2022.
          </li>
          <li>
            <span className={classes.keyword}>Utredning:</span> En genomlysning av en fråga innan ett lagförslag skrivs.
          </li>
          <li>
            <span className={classes.keyword}>Utrikesnämnden:</span> Ett organ där regeringen samråder med riksdagen om utrikespolitiken under kungens ordförandeskap.
          </li>
          <li>
            <span className={classes.keyword}>Utskottsbetänkande:</span> En skriftlig rapport från ett utskott med förslag till hur riksdagen ska rösta om ett lagförslag.
          </li>
          <li>
            <span className={classes.keyword}>Överklaga:</span> Att begära att en högre instans eller domstol prövar om ett beslut eller en dom var korrekt.
          </li>
        </ul>
      </section>
    </div>
  );
}