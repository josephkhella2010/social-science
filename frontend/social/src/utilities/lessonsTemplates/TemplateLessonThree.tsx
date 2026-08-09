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

export default function TemplateLessonThree() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>KAPITEL 3: MEDIER OCH SAMHÄLLE</h1>
      <p className={classes.subtitle}>Fullständig sammanfattning</p>

      {/* ===== 1. INLEDNING ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. INLEDNING: MEDIER I VARDAGEN</h2>
        <p className={classes.paragraph}>
          Medier är en dominerande del av vår vardag. Användningen varierar kraftigt mellan generationer, men totalt sett lägger svenska folket mycket tid på mediekonsumtion.
        </p>

        <h3 className={classes.subHeading}>Viktiga begrepp och fakta:</h3>
        <ul className={classes.list}>
          <li>
            <strong>Medieanvändning:</strong> 2023 ägnade befolkningen i genomsnitt nästan 7 timmar per dag åt medier.
          </li>
          <li>
            <strong>Räckvidd:</strong>
            <ul className={classes.list}>
              <li>Rörlig bild (TV/streaming): 95 % av befolkningen använder det dagligen.</li>
              <li>Sociala nätverkstjänster: 85 % daglig räckvidd.</li>
              <li>Radio: 77 % daglig räckvidd.</li>
              <li>Dagstidning: 66 % daglig räckvidd.</li>
            </ul>
          </li>
          <li>
            <strong>Generationsklyfta:</strong> Unga människor använder sociala medier betydligt mer än äldre.
          </li>
          <li>
            <strong>Nyheters plats:</strong> Nyheter har en självklar och framträdande plats i moderna demokratier.
          </li>
        </ul>
      </section>

      {/* ===== 2. MEDIER OCH DEMOKRATI ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. MEDIER OCH DEMOKRATI</h2>
        <p className={classes.paragraph}>
          För att en demokrati ska fungera krävs att medborgarna är informerade. Medierna är den viktigaste kanalen för detta. Detta kallas för <strong>"upplyst förståelse"</strong> – att medborgare måste ha information och kunskap om politik och samhälle för att kunna utöva sin roll.
        </p>

        <h3 className={classes.subHeading}>Mediernas tre demokratiska uppgifter (enligt riksdagen):</h3>
        <ol className={classes.list}>
          <li>
            <strong>Att informera:</strong> Ge medborgarna fakta och information så att de kan ta ställning i samhällsfrågor.
          </li>
          <li>
            <strong>Att kommentera:</strong> Analysera, förklara och sätta in skeenden i ett större sammanhang.
          </li>
          <li>
            <strong>Att granska:</strong> Kontrollera och utöva kritik mot både privata och offentliga makthavare.
          </li>
        </ol>

        <h3 className={classes.subHeading}>Grundlagsstöd:</h3>
        <ul className={classes.list}>
          <li>
            Regeringsformen (en av Sveriges grundlagar) slår fast att varje medborgare har yttrandefrihet, det vill säga "frihet att i tal, skrift eller bild eller på annat sätt meddela upplysningar samt uttrycka tankar, åsikter och känslor".
          </li>
        </ul>
      </section>

      {/* ===== 3. MEDIEMODELLER ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. MEDIEMODELLER</h2>
        <p className={classes.paragraph}>
          Medier kan organiseras och finansieras på olika sätt. Det finns två huvudmodeller som beskriver detta.
        </p>

        <h3 className={classes.subHeading}>Begrepp och förklaringar:</h3>

        <h4 className={classes.subHeading}>Den frihetliga modellen:</h4>
        <ul className={classes.list}>
          <li>Positiv till fri etablering av medier.</li>
          <li>Kommersiellt inriktad.</li>
          <li>Finansieras i huvudsak genom reklamintäkter.</li>
          <li>Programutbudet domineras av reality-tv och lätt underhållning.</li>
        </ul>

        <h4 className={classes.subHeading}>Public service-modellen:</h4>
        <ul className={classes.list}>
          <li>Skattefinansierad (via en särskild avgift).</li>
          <li>Drivs i allmänhetens tjänst.</li>
          <li>
            Staten ställer krav genom lagar och avtal på:
            <ul className={classes.list}>
              <li>Mångsidigt programutbud.</li>
              <li>Opartiskhet och saklighet.</li>
              <li>Regionala nyhetsprogram.</li>
              <li>Uppdrag att granska myndigheter, organisationer och företag.</li>
            </ul>
          </li>
        </ul>

        <p className={classes.paragraph}>
          <strong>Sverige:</strong> Har public service som huvudmodell (SVT, SR, UR), men med en tydlig närvaro av privata radio- och tv-kanaler (t.ex. TV4, Viaplay).
        </p>
      </section>

      {/* ===== 4. KOMMUNIKATION I MEDIERNA ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. KOMMUNIKATION I MEDIERNA</h2>
        <p className={classes.paragraph}>
          Här förklaras grunderna i hur kommunikation fungerar och hur den används för att påverka opinionen.
        </p>

        <h3 className={classes.subHeading}>A. Kommunikationsmodellen</h3>

        <h4 className={classes.subHeading}>Grundbegrepp:</h4>
        <ul className={classes.list}>
          <li><strong>Sändare:</strong> Den som överför ett budskap.</li>
          <li><strong>Meddelande:</strong> Själva budskapet eller informationen som skickas.</li>
          <li><strong>Medium:</strong> Verktyget eller kanalen som används för att överföra budskapet (t.ex. röst, tidning, radio, tv, internet).</li>
          <li><strong>Mottagare:</strong> Den eller de som tar emot budskapet.</li>
        </ul>

        <h4 className={classes.subHeading}>Utveckling av kommunikation:</h4>
        <ul className={classes.list}>
          <li>
            <strong>Envägskommunikation:</strong> Traditionell modell där sändaren skickar ut ett budskap och får väldigt lite eller ingen direkt respons från mottagaren. Detta var vanligt för tidningar, radio och tv tidigare.
          </li>
          <li>
            <strong>Tvåvägskommunikation:</strong> Den moderna modellen där den som är sändare också är mottagare och tvärtom. Exempel är sociala medier, kommentarsfält och chattar.
          </li>
          <li>
            <strong>Viktig insikt:</strong> Även i tvåvägskommunikation finns en förenkling av verkligheten. Det kan vara svårt att veta om mottagaren verkligen förstått budskapet som sändaren avsåg.
          </li>
        </ul>

        <h3 className={classes.subHeading}>B. Opinionsbildning</h3>

        <h4 className={classes.subHeading}>Begrepp:</h4>
        <ul className={classes.list}>
          <li>
            <strong>Opinion:</strong> En sammanfattande benämning på en gemensam åsikt hos en större grupp människor.
          </li>
          <li>
            <strong>Opinionsbildning:</strong> Processen där åsikter formas hos individer och grupper. Det är normalt resultatet av ett samspel mellan individen och omgivningen.
          </li>
          <li>
            <strong>Källor till opinionsbildning:</strong>
            <ol className={classes.list}>
              <li>Egna erfarenheter.</li>
              <li>Samtal med vänner, familj, arbetskamrater.</li>
              <li>Medier av olika slag (den viktigaste källan).</li>
            </ol>
          </li>
          <li>
            <strong>Den allmänna opinionen:</strong> Den inställning i en specifik fråga som en stor grupp människor omfattar. Kommer tydligast till uttryck i opinionsundersökningar.
          </li>
        </ul>

        <h3 className={classes.subHeading}>C. Upplysning eller Påverkan (Information vs. Propaganda)</h3>

        <h4 className={classes.subHeading}>Begrepp:</h4>
        <ul className={classes.list}>
          <li>
            <strong>Masskommunikation:</strong> Medier som når ut till massorna (t.ex. tv, tidningar). Kännetecknas ofta av envägskommunikation.
          </li>
          <li>
            <strong>Information (upplysning):</strong> Budskap i ren faktaform som syftar till att ge kunskap. Uppfattas som något positivt.
          </li>
          <li>
            <strong>Propaganda:</strong>
            <ul className={classes.list}>
              <li>
                <em>Bred betydelse:</em> Ett budskap där avsändaren vill få mottagaren att ändra uppfattning. Det kan vara både kommersiell marknadsföring och politisk påverkan.
              </li>
              <li>
                <em>Snävare betydelse:</em> Vilseledande budskap som sprids med oetiska metoder – till exempel fejkade avsändare och manipulerat innehåll. Syftet är att manipulera andras åsikter och handlingar, ofta genom att väcka starka negativa känslor. Uppfattas ofta som något negativt.
              </li>
            </ul>
          </li>
          <li>
            <strong>Selektivt uppfattande:</strong> Människor tar selektivt (urskiljande) del av budskap. Vi ser, hör, läser och minns vad vi "vill" se, höra, läsa och minnas. Detta gör att propaganda och politisk påverkan ofta förstärker de åsikter vi redan har snarare än att ändra dem.
          </li>
        </ul>
      </section>

      {/* ===== 5. NYA MAKTHAVARE OCH DEBATTKLIMAT ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. NYA MAKTHAVARE OCH DEBATTKLIMAT</h2>
        <p className={classes.paragraph}>
          Internet och sociala medier har skapat nya former av opinionsbildare och förändrat debattklimatet.
        </p>

        <h3 className={classes.subHeading}>A. Influerare (Influencer)</h3>

        <h4 className={classes.subHeading}>Begrepp:</h4>
        <ul className={classes.list}>
          <li>
            <strong>Influerare:</strong> En person (ofta bloggare, youtuber, instagrammare eller tiktokare) som gradvis nått en stor publik och fått många följare genom att dela med sig av sitt liv och sina tankar på ett tilltalande sätt.
          </li>
          <li>
            <strong>Inkomstkällor:</strong>
            <ol className={classes.list}>
              <li>Företag betalar för att lägga in reklam på deras plattformar.</li>
              <li>De lyfter fram och omtalar produkter och varumärken på ett positivt sätt (sponsrat innehåll).</li>
            </ol>
          </li>
          <li>
            <strong>Roll:</strong> Influeraren är både säljare och opinionsbildare.
          </li>
          <li>
            <strong>Förändring:</strong> Traditionella auktoriteter (experter, politiker) betyder mindre. Relationer spelar större roll. IRL är det familj och vänner, på nätet är det influerare man "följer".
          </li>
          <li>
            <strong>Problem:</strong> Förekommer fejkföljare, fejkkommentarer och fejkade "lajks" (gilla-markeringar) som säljs för billiga summor.
          </li>
          <li>
            <strong>Positiva sidor:</strong> Vissa influerare lyfter fram tidigare dolda ämnen som psykisk ohälsa, kränkningar och dåliga uppväxtvillkor.
          </li>
        </ul>

        <h3 className={classes.subHeading}>B. Åsiktskorridor och Debattklimat</h3>

        <h4 className={classes.subHeading}>Begrepp:</h4>
        <ul className={classes.list}>
          <li>
            <strong>Åsiktskorridoren:</strong> Ett begrepp myntat av statsvetaren Henrik Ekengren Oscarsson. Det beskriver gränserna för vilka åsikter som anses allmänt accepterade i den svenska samhällsdebatten. Vissa åsikter som är vanliga bland allmänheten förekommer sällan i den offentliga debatten.
          </li>
          <li>
            <strong>Exempel på åsikter som tidigare var "utanför" korridoren:</strong>
            <ul className={classes.list}>
              <li>Minska invandringen (7 av 10 höll med).</li>
              <li>Förbjuda homosexuella att adoptera (hälften av svenskarna höll med).</li>
              <li>Införa dödsstraff för mord (1 av 5 höll med).</li>
            </ul>
          </li>
          <li>
            <strong>Åsa Wikforss kritik (filosof):</strong> Begreppet "åsiktskorridor" är förlegat och bör pensioneras. Det stora problemet idag är inte att vissa åsikter inte hörs – tack vare sociala medier råder stor åsiktspluralism. Det stora problemet är i stället debattens låga kvalitet.
          </li>
          <li>
            <strong>Konsekvenser av låg debattkvalitet:</strong>
            <ul className={classes.list}>
              <li>Om debatten är osaklig och olyanserad får det konsekvenser för kvaliteten på beslutsfattandet.</li>
              <li>Den känslomässiga polariseringen i samhället riskerar att tillta.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ===== 6. MEDIERNA OCH PENGARNA ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. MEDIERNA OCH PENGARNA</h2>
        <p className={classes.paragraph}>
          Mediernas ekonomi är avgörande för deras innehåll och oberoende. Digitaliseringen har förändrat intäktsströmmarna radikalt.
        </p>

        <h3 className={classes.subHeading}>A. Intäkter från användarna</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Pengar som kommer direkt från konsumenterna.
          </li>
          <li>
            <strong>Former:</strong> Prenumerationer på tidningar, licenser och betalningar för streamingtjänster (som Netflix, Max, Disney+).
          </li>
          <li>
            <strong>Trend:</strong> Svenska hushåll spenderar allt mer på medier. Man går från gratis tjänster med reklam till betaltjänster och skaffar sig flera abonnemang samtidigt.
          </li>
        </ul>

        <h3 className={classes.subHeading}>B. Reklamintäkter</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Pengar från företag som vill annonsera i medier. Detta är den viktigaste intäktskällan för kommersiella medieföretag.
          </li>
          <li>
            <strong>Digitaliseringens effekt:</strong> En allt större del av reklaminvesteringarna placeras på internet snarare än i tidningar och tv. Orsaken är att internet är billigt, effektivt och att konsumenterna finns där.
          </li>
          <li>
            <strong>Klickbete (Clickbait):</strong> Uppmärksamhetsväckande rubriker eller bilder som man måste klicka på för att få veta mer. Syftet är att få många besökare så att annonsörer vill betala för att placera sina annonser där.
          </li>
        </ul>

        <h3 className={classes.subHeading}>C. Anpassad reklam</h3>
        <ul className={classes.list}>
          <li>
            <strong>Algoritm:</strong> En "regelbok" för hur olika aktiviteter rangordnas. Algoritmer samlar in data om våra vanor och intressen och ser till att vi nås av budskap som är anpassade just för oss.
          </li>
          <li>
            <strong>Cookies:</strong> Textfiler som gör det möjligt att följa hur en användare surfar. Användaren måste ofta godkänna dessa.
          </li>
          <li>
            <strong>Datainsamling:</strong> Plattformar som Instagram och Tiktok samlar in information om användarnas beteenden och säljer den till annonsörer.
          </li>
        </ul>

        <h3 className={classes.subHeading}>D. Effekter för svenska medier</h3>
        <ul className={classes.list}>
          <li>
            <strong>Konsekvens:</strong> Reklampengar som läggs hos techjättar som Meta (Facebook, Instagram), Bytedance (Tiktok) och Google försvinner utomlands.
          </li>
          <li>
            <strong>Problem:</strong> Det är inte svenska dagstidningar (som Dagens Nyheter, Svenska Dagbladet) som får pengarna för att utveckla sin journalistik. Detta försvagar de nyhetsbärande medierna och deras andel av de totala reklamintäkterna minskar.
          </li>
        </ul>
      </section>

      {/* ===== 7. MEDIERNAS MAKT ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. MEDIERNAS MAKT</h2>
        <p className={classes.paragraph}>
          Medier har makt, men den är inte oinskränkt. Den påverkas av externa aktörer och interna urvalsprocesser.
        </p>

        <h3 className={classes.subHeading}>A. Olika Perspektiv på Makt</h3>
        <ul className={classes.list}>
          <li>
            <strong>Medieforskaren Kent Asp:</strong> Medierna är som mäktigast när de har makt över både publiken och innehållet.
            <ul className={classes.list}>
              <li>
                <strong>Makt över publiken:</strong> Den verklighetsbild som förmedlas påverkar människors uppfattning och värdering av samhällsfrågor.
              </li>
              <li>
                <strong>Makt över innehållet:</strong> Medierna har inte alltid full kontroll. De påverkas av ekonomiska intressen (t.ex. annonsörer inom heminredning, resor).
              </li>
            </ul>
          </li>
          <li>
            <strong>Slutlig påverkan:</strong> Den journalistiska produkten bestäms av ett samspel mellan medierna och externa aktörer (ekonomiska och politiska makthavare). Men medierna gör det slutliga urvalet och bestämmer vad, när och hur något publiceras.
          </li>
        </ul>

        <h3 className={classes.subHeading}>B. Nyhetsvärdering</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Processen där medierna gör ett urval bland alla händelser för att avgöra vad som blir en nyhet. Detta görs på grund av brist på tid, pengar och utrymme.
          </li>
          <li>
            <strong>Prakkes klassiska modell:</strong> Nyhetsvärdet avgörs av tre aspekter. Ju närmare centrum (perfekt, vår kultur, här), desto högre nyhetsvärde.
            <ol className={classes.list}>
              <li>
                <strong>Tidsmässigt avstånd:</strong> Hur aktuellt är det? (Perfekt = precis hänt, Imperfekt = längre sedan).
              </li>
              <li>
                <strong>Kulturellt avstånd:</strong> Hur relevant är det för oss och vår kultur?
              </li>
              <li>
                <strong>Rumsligt avstånd:</strong> Hur nära är det geografiskt? (Centrum = här, Periferi = långt borta).
              </li>
            </ol>
          </li>
        </ul>

        <h3 className={classes.subHeading}>C. Medielogik</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> En berättarteknik som medierna utvecklat för att fånga uppmärksamheten.
          </li>
          <li>
            <strong>Kriterier för medielogik:</strong> Ju mer en nyhet kan utformas enligt dessa kriterier, desto större sannolikhet att den publiceras.
            <ol className={classes.list}>
              <li>Fokus på personer (kändisar, ledande politiker och näringslivspersoner).</li>
              <li>Fokus på dramatiska händelser (katastrofer, olyckor).</li>
              <li>Fokus på konfrontation och motsättningar mellan parter.</li>
            </ol>
          </li>
        </ul>

        <h3 className={classes.subHeading}>D. Grindvaktens roll (Gatekeeper)</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> En person eller en process som filtrerar information innan den når publiken. Grindvakterna styr nyhetsurvalet.
          </li>
          <li>
            <strong>Exempel på grindvakter:</strong>
            <ol className={classes.list}>
              <li>
                <strong>Nyhetskällor:</strong> Politiker och samhällsföreträdare på nationell och lokal nivå. De har tillgång till exklusiv information och kan trycka på för att få upp en viss fråga på dagordningen.
              </li>
              <li>
                <strong>Nationella och internationella nyhetsbyråer:</strong> Mindre mediebolag har inte råd med egna reportrar överallt, så de köper nyheter från byråer (som TT). Detta påverkar vad som blir nyheter.
              </li>
            </ol>
          </li>
        </ul>
      </section>

      {/* ===== 8. REGLER OCH FÖRUTSÄTTNINGAR FÖR SVENSKA MEDIER ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. REGLER OCH FÖRUTSÄTTNINGAR FÖR SVENSKA MEDIER</h2>
        <p className={classes.paragraph}>
          Yttrandefriheten är grundläggande men inte oinskränkt. Den regleras av både lagar (grundlagar) och frivilliga etiska regler.
        </p>

        <h3 className={classes.subHeading}>A. Tryckfrihetsförordningen (TF) – 1949</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> En av Sveriges fyra grundlagar. Den reglerar yttrandefriheten i tryckta medier (tidningar, böcker, tidskrifter).
          </li>
          <li>
            <strong>Citat från TF:</strong> "Med tryckfrihet förstås varje svensk medborgares rätt att, utan något av myndighet eller annat allmänt organ förelagt hinder, utgiva skrifter, att sedermera endast inför laglig domstol kunna tilltalas för deras innehåll..."
          </li>
          <li>
            <strong>Fem huvudpunkter:</strong>
            <ol className={classes.list}>
              <li>
                <strong>Censurförbud:</strong> Staten eller annat offentligt organ får inte förhandsgranska skrift. Det är förbjudet att aktivt hindra tryckning eller spridning. Däremot kan åtal väckas i efterhand.
              </li>
              <li>
                <strong>Etableringsfrihet:</strong> Varje svensk medborgare har rätt att starta och ge ut en tidning utan hinder från staten. Tidningen måste dock ha en ansvarig utgivare som ansvarar för innehållet.
              </li>
              <li>
                <strong>Meddelarskydd och rätt till anonymitet:</strong>
                <ul className={classes.list}>
                  <li>Alla har rätt att lämna uppgifter till en tidning utan att kunna röjas och utan att avslöja sitt namn.</li>
                  <li>Journalister har rätt att vara anonyma och skydda sina källor.</li>
                </ul>
              </li>
              <li>
                <strong>Särskild rättsordning:</strong> Vid tryckfrihetsåtal gäller ett särskilt förfarande där en jury kan avgöra skuldfrågan. Huvudregeln är "hellre fria än fälla".
              </li>
              <li>
                <strong>Offentlighetsprincipen:</strong> Alla handlingar som förvaras hos myndighet ska vara tillgängliga för allmänheten (med vissa undantag som sekretess).
              </li>
            </ol>
          </li>
        </ul>

        <h3 className={classes.subHeading}>B. Yttrandefrihetsgrundlagen (YGL) – 1991</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> En grundlag som skyddar det fria ordet i radio, tv och liknande medier på samma sätt som TF skyddar tryckta medier.
          </li>
          <li>
            <strong>Innehåll:</strong> Samma principer som TF gäller (anonymitetsskydd, meddelarskydd, förbud mot förhandscensur, särskilt rättsförfarande).
          </li>
          <li>
            <strong>Skillnad:</strong> För markburen radio och tv gäller ingen etableringsfrihet. Detta regleras i stället genom särskild lag, och staten kan ställa krav på innehållet (t.ex. opartiskhet).
          </li>
        </ul>

        <h3 className={classes.subHeading}>C. Undantag från yttrandefriheten (i både TF och YGL)</h3>
        <ul className={classes.list}>
          <li>Rikets säkerhet.</li>
          <li>Förtal och ärekränkning.</li>
          <li>Hets mot folkgrupp.</li>
          <li>Barnpornografibrott.</li>
        </ul>

        <h3 className={classes.subHeading}>D. Publicistiska regler (Etiska regler)</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Etiska regler som journalister och arbetsgivare inom press, radio och tv kommit överens om att följa. De är frivilliga men mycket viktiga för förtroendet.
          </li>
          <li>
            <strong>Reglerna i korthet:</strong>
            <ol className={classes.list}>
              <li>
                <strong>Ge korrekta nyheter:</strong> Kritiskt granska källor. Rubriker och ingresser ska ha täckning i texten.
              </li>
              <li>
                <strong>Döm ingen ohörd:</strong> Ge den som kritiseras möjlighet att bemöta kritiken. Föregrip inte domstolars avgöranden.
              </li>
              <li>
                <strong>Respektera den personliga integriteten:</strong> Avstå från publicitet som inkräktar på privatlivet om inte ett uppenbart allmänintresse kräver det.
              </li>
              <li>
                <strong>Var försiktig med namn:</strong> Publicera inte namn eller andra identifierande uppgifter (kön, titel, yrke) om det inte är nödvändigt.
              </li>
              <li>
                <strong>Var varsam med bilder:</strong> Undvik bilder som kan såra eller kränka. Förfalska inte bilder genom beskärning eller montage.
              </li>
              <li>
                <strong>Ge plats åt bemötande:</strong> Rätta felaktigheter snabbt och ge utrymme för genmåle.
              </li>
            </ol>
          </li>
          <li>
            <strong>Allmänhetens Medieombudsman (MO):</strong> En instans dit allmänheten kan vända sig om man anser att en tidning brutit mot reglerna. MO kan fälla en tidning för "brott mot god publicistisk sed".
          </li>
          <li>
            <strong>Statistik (2023):</strong> MO anser att svenska medier generellt sköter sig väl. De vanligaste fällningarna gäller:
            <ul className={classes.list}>
              <li>"Korreka nyheter" (felaktigheter).</li>
              <li>"Ge plats åt bemötande" (inte gett svarstid).</li>
              <li>"Försiktighet med namnpubliceringar".</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ===== 9. INTERNET – EN UTMANING MOT REGLERNA ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. INTERNET – EN UTMANING MOT REGLERNA</h2>
        <p className={classes.paragraph}>
          Internet och sociala medier skapar nya utmaningar eftersom de inte omfattas av samma regler som traditionella medier.
        </p>

        <h3 className={classes.subHeading}>A. Ansvar på Nätet</h3>
        <ul className={classes.list}>
          <li>
            <strong>Ansvarig utgivare:</strong> För tryckta medier och deras webbversioner krävs en ansvarig utgivare som kan ställas till svars.
          </li>
          <li>
            <strong>Elektroniska anslagstavlor (forum, bloggar):</strong> Regleras av BBS-lagen (Lagen om ansvar för elektroniska anslagstavlor). Den som tillhandahåller tjänsten måste hålla uppsikt och ta bort meddelanden som är olagliga (hets mot folkgrupp, barnpornografi, upphovsrättsintrång).
          </li>
          <li>
            <strong>Sociala medier (Facebook, Instagram, Tiktok, X):</strong> Har ingen ansvarig utgivare. Användaren är själv straffrättsligt ansvarig för det hen publicerar. Att "dela" något är inte per automatik lagligt – det kan fortfarande vara förtal.
          </li>
        </ul>

        <h3 className={classes.subHeading}>B. Vanliga Brott på Nätet (Näthat)</h3>
        <ul className={classes.list}>
          <li>
            <strong>Olaga hot:</strong> Att lyfta vapen mot annan eller hota med brottslig handling som innebär fara för någons liv eller hälsa.
          </li>
          <li>
            <strong>Förtal:</strong> Att utpeka någon som brottslig eller klandervärd och sprida detta. Det är spridningen som är brottslig, inte att man skrev det första gången. Även att dela vidare är brottsligt.
          </li>
          <li>
            <strong>Ofredande:</strong> Att upprepade gånger kontakta någon (mejla, sms:a, ringa) mot dennes vilja, eller att skicka ett enstaka mycket kränkande meddelande.
          </li>
          <li>
            <strong>Problem med lagstiftningen:</strong> Skyddet är svagt eftersom det ofta är målsägarbrott – den drabbade måste själv väcka åtal. Många vill att detta ska ändras till allmänt åtal så att polis och åklagare kan driva fallen.
          </li>
        </ul>

        <h3 className={classes.subHeading}>C. Straff och Skadestånd</h3>
        <ul className={classes.list}>
          <li>
            <strong>Straffansvar:</strong> Om man begår ett brott kan man dömas till fängelse, ungdomsvård eller böter.
          </li>
          <li>
            <strong>Skadeståndsansvar:</strong> Den som begår ett brott (t.ex. förtal) blir också skyldig att betala skadestånd till den drabbade.
          </li>
        </ul>

        <h3 className={classes.subHeading}>D. Checklista vid Näthat (från juristen Mårten Schultz)</h3>
        <ol className={classes.list}>
          <li>
            <strong>Säkra bevisning:</strong> Ta en skärmdump. Helst ska en annan person (inte familj) bevittna att skärmdumpen är korrekt.
          </li>
          <li>
            <strong>Polisanmäl:</strong> Gör en polisanmälan. Om kränkningen har koppling till skolan bör även skolan informeras (de har utredningsskyldighet).
          </li>
          <li>
            <strong>Kräv skadestånd:</strong> Driv en egen rättsprocess för att kräva skadestånd.
          </li>
        </ol>

        <h3 className={classes.subHeading}>E. Konsekvensneutralitet</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Ett begrepp myntat av journalisten Erik Fichtelius. Det innebär att en nyhetsreporter efter bästa förmåga ska rapportera det som är sant och relevant utan hänsyn till vem eller vad som gynnas eller drabbas av nyheten. Reportern ska inte driva en egen politisk agenda.
          </li>
          <li>
            <strong>Citat från Carl Bernstein (Watergate-journalist):</strong> "Det är inte vårt jobb att skjuta nån [...]. Vi är här för att rapportera. Och om en stor best i vildmarken skulle falla under rapporterandet så är det en del av processen. [...] Journalister ska inte tillsätta presidenter eller avsätta direktörer. Vi ska berätta det vi vet."
          </li>
        </ul>
      </section>

      {/* ===== ORDLISTA ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>ORDLISTA – NYCKELBEGREPP</h2>

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
                <td className={classes.td}><strong>Algoritm</strong></td>
                <td className={classes.td}>En regelbok som rangordnar aktiviteter online och anpassar innehåll (t.ex. reklam) efter användarens beteende.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Allmän opinion</strong></td>
                <td className={classes.td}>Den dominerande inställningen i en specifik fråga hos en stor grupp människor.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Ansvarig utgivare</strong></td>
                <td className={classes.td}>Den person som enligt lag är juridiskt ansvarig för innehållet i en tidning eller ett program.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>BBS-lagen</strong></td>
                <td className={classes.td}>Lag som reglerar elektroniska anslagstavlor; kräver att den som driver tjänsten tar bort uppenbart olagligt innehåll.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Censurförbud</strong></td>
                <td className={classes.td}>Förbud mot att myndigheter förhandsgranskar eller hindrar tryckning av skrifter.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Clickbait / Klickbete</strong></td>
                <td className={classes.td}>Uppmärksamhetsväckande rubriker eller bilder som lockar användare att klicka för att generera annonsintäkter.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Cookie</strong></td>
                <td className={classes.td}>En textfil som gör det möjligt att följa en användares surfbeteende på nätet.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Den frihetliga modellen</strong></td>
                <td className={classes.td}>Kommersiell mediemodell som finansieras via reklam och fokuserar på underhållning.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Envägskommunikation</strong></td>
                <td className={classes.td}>Traditionell kommunikation där sändaren skickar ut budskap utan direkt respons från mottagaren.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Etableringsfrihet</strong></td>
                <td className={classes.td}>Rätten för varje svensk medborgare att starta och ge ut en tidning utan statligt hinder.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Förtal</strong></td>
                <td className={classes.td}>Att utpeka någon som brottslig eller klandervärd och sprida detta; brottsligt enligt brottsbalken.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Genmäle</strong></td>
                <td className={classes.td}>Rätten att bemöta och svara på kritik som framförts i ett medium.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Grindvakt (Gatekeeper)</strong></td>
                <td className={classes.td}>Person eller process som filtrerar information och styr vilka nyheter som når publiken.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Hets mot folkgrupp</strong></td>
                <td className={classes.td}>Att sprida uttalanden som hotar eller uttrycker missaktning mot en folkgrupp; olagligt.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Influerare (Influencer)</strong></td>
                <td className={classes.td}>Person med stor publik på sociala medier som påverkar sina följares åsikter och konsumtionsvanor.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Information (upplysning)</strong></td>
                <td className={classes.td}>Fakta och kunskap som förmedlas i rent sakligt syfte; ses som positivt.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Konsekvensneutralitet</strong></td>
                <td className={classes.td}>Journalistisk princip om att rapportera sanningen utan att ta hänsyn till vem som gynnas eller drabbas.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Masskommunikation</strong></td>
                <td className={classes.td}>Kommunikation som når ut till stora massor via medier som tv, radio och tidningar.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Meddelarskydd</strong></td>
                <td className={classes.td}>Rätten för den som lämnar uppgifter till en tidning att vara anonym och inte kunna röjas.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Medielogik</strong></td>
                <td className={classes.td}>Berättarteknik som fokuserar på personer, dramatik och konflikter för att fånga uppmärksamhet.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Medieombudsmannen (MO)</strong></td>
                <td className={classes.td}>Instans som granskar om medier följer de publicistiska etiska reglerna och kan utfärda kritik.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Nyhetsvärdering</strong></td>
                <td className={classes.td}>Den process där medier gör ett urval bland alla händelser för att avgöra vad som blir nyheter.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Offentlighetsprincipen</strong></td>
                <td className={classes.td}>Principen att alla myndighetshandlingar ska vara tillgängliga för allmänheten (med sekretessundantag).</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Ofredande</strong></td>
                <td className={classes.td}>Att upprepade gånger kontakta någon mot dennes vilja, eller att skicka mycket kränkande meddelanden.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Olaga hot</strong></td>
                <td className={classes.td}>Att hota någon med en brottslig handling som innebär fara för liv eller hälsa.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Opinion</strong></td>
                <td className={classes.td}>En gemensam åsikt hos en större grupp människor i en viss fråga.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Opinionsbildning</strong></td>
                <td className={classes.td}>Processen där åsikter formas hos individer och grupper genom erfarenheter, samtal och medier.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Propaganda</strong></td>
                <td className={classes.td}>Budskap som syftar till att påverka mottagarens uppfattning, ofta med vilseledande eller oetiska metoder.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Public service-modellen</strong></td>
                <td className={classes.td}>Skattefinansierad mediemodell som drivs i allmänhetens tjänst med krav på opartiskhet och mångsidighet.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Publicistiska regler</strong></td>
                <td className={classes.td}>Etiska regler som journalister själva kommit överens om för att upprätthålla förtroendet.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Regeringsformen</strong></td>
                <td className={classes.td}>En av Sveriges grundlagar som bland annat slår fast yttrandefriheten.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Selektivt uppfattande</strong></td>
                <td className={classes.td}>Att vi tar del av budskap som bekräftar våra egna åsikter och sorterar bort det som inte stämmer.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Tryckfrihetsförordningen (TF)</strong></td>
                <td className={classes.td}>Grundlagen som reglerar yttrandefriheten i tryckta medier.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Tvåvägskommunikation</strong></td>
                <td className={classes.td}>Modern kommunikation där båda parter kan vara både sändare och mottagare (t.ex. sociala medier).</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Yttrandefrihetsgrundlagen (YGL)</strong></td>
                <td className={classes.td}>Grundlagen som reglerar yttrandefriheten i radio, tv och liknande medier.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Åsiktskorridor</strong></td>
                <td className={classes.td}>Begrepp för de osynliga gränserna för vilka åsikter som anses accepterade i den offentliga debatten.</td>
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
            1. Vilka är mediernas viktigaste uppgifter enligt den svenska riksdagen?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Informera:</strong> Medierna ska ge medborgarna den information de behöver för att kunna ta ställning i olika samhällsfrågor.
              </li>
              <li>
                <strong>Granska:</strong> Medierna ska granska makthavare i samhället (politiker, myndigheter och företag).
              </li>
              <li>
                <strong>Skapa debatt / Opinionsbildning:</strong> Medierna ska utgöra en arena för debatt där olika åsikter får stötas och blötas.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. Hur ser medieanvändningen ut för befolkningen en genomsnittlig dag 2023? Hur ser utvecklingen ut över tid?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>Användningen täcker en stor del av dygnet, där digitala medier och internet dominerar totalt.</li>
              <li>
                Över tid har konsumtionen av traditionella tryckta medier (som dagstidningar) samt linjär tv och radio stadigt minskat. Samtidigt har användningen av internet, strömningstjänster och sociala medier ökat kraftigt.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. Redogör kortfattat för begreppen opinionsbildning, allmänna opinionen respektive åsiktskorridor.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Opinionsbildning:</strong> Processen när åsikter formas hos individer och grupper i ett samspel mellan egna erfarenheter, samtal och medier.
              </li>
              <li>
                <strong>Allmänna opinionen:</strong> Den sammanlagda inställning eller åsikt i en specifik fråga som omfattas av en stor grupp människor i samhället.
              </li>
              <li>
                <strong>Åsiktskorridor:</strong> De gränser för vad som anses allmänt acceptabelt att framföra i den offentliga debatten utan att drabbas av starkt avståndstagande.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. Vilken är skillnaden mellan information och propaganda?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Information:</strong> Syftar till upplysning och att förmedla saklig kunskap.
              </li>
              <li>
                <strong>Propaganda:</strong> Syftar till medveten påverkan för att få människor att tycka eller handla på ett visst sätt.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            5. Vad menas med att vi tar del av budskap selektivt?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det innebär att människor väljer ut, tolkar och kommer ihåg information utifrån sina egna tidigare värderingar, intressen och erfarenheter. Vi väljer ofta bort det som inte stämmer överens med vår egen världsbild.
            </p>
          </div>
        </div>

        {/* Fråga 6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. Vad skiljer den frihetliga modellen från public service-modellen?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Frihetlig modell:</strong> Bygger på kommersiella medier som finansieras via reklam- och användarintäkter. Marknaden reglerar utbudet och fokus ligger ofta på underhållning.
              </li>
              <li>
                <strong>Public service-modell:</strong> Finansieras av allmänna medel (t.ex. skatt) och ska drivas i allmänhetens tjänst oberoende av kommersiella intressen. Den har krav på saklighet, opartiskhet och ett brett utbud för alla.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 7 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. Vad menas med sociala medier och vad skiljer dem från mer traditionella medier?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Sociala medier</strong> är webbaserade plattformar där användarna själva skapar, delar och kommenterar innehåll (tvåvägskommunikation).
              </li>
              <li>
                <strong>Traditionella medier</strong> (tv, radio, press) bygger främst på redigerat material som sänds ut från en sändare till många mottagare (envägskommunikation).
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 8 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. Hur skiljer sig olika typer av mediers sätt att få intäkter? Jämför sociala medier med traditionella medier.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Traditionella medier:</strong> Finansieras historiskt sett via prenumerationer, lösnummerförsäljning, presstöd/mediestöd samt lokala/nationella annons- och reklamintäkter. Public service finansieras via skatt.
              </li>
              <li>
                <strong>Sociala medier:</strong> Finansieras framför allt genom anpassad målgruppsreklam baserad på insamlad användardata och algoritmer.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 9 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. Nyhetsbranschen förlitar sig nu i högre grad på "dela-kulturen" i sociala medier. Varför?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Eftersom traditionella reklamintäkter har flyttat till techjättar, behöver nyhetsmedier nå ut till fler läsare för att driva trafik till sina egna sajter och därigenom få klick-, prenumerations- eller annonsintäkter.
            </p>
          </div>
        </div>

        {/* Fråga 10 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. Vad menas med filterbubblan?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Ett tillstånd där algoritmer anpassar det innehåll du ser baserat på dina tidigare sökningar och klick. Det gör att du främst exponeras för information som bekräftar dina befintliga åsikter och stänger ute andra perspektiv.
            </p>
          </div>
        </div>

        {/* Fråga 11 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. Begreppet algoritm används ofta i samband med sociala medier. Vad menas med det?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En matematisk instruktion eller regelbok som analyserar användardata för att sortera, rangordna och anpassa vilket innehåll som visas i en användares flöde.
            </p>
          </div>
        </div>

        {/* Fråga 12 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. Ange några kritiska synpunkter mot internet och sociala medier.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Spridning av desinformation och näthat:</strong> Brist på källkritik gör att falska nyheter och mobbning sprids snabbt.
              </li>
              <li>
                <strong>Psykisk ohälsa:</strong> Särskilt bland barn och unga till följd av skärmtid och bekräftelsehets.
              </li>
              <li>
                <strong>Maktkoncentration:</strong> Ett fåtal utländska techjättar kontrollerar plattformarna och annonspengarna.
              </li>
              <li>
                <strong>Eko-kammare/Filterbubblor:</strong> Minskat utrymme för nyanserad debatt.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 13 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. Vad menas med (a) dagordningsfunktionen? (b) medielogik?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Dagordningsfunktionen:</strong> Mediernas makt att bestämma vilka frågor som tas upp till publicering och därmed blir belysta av allmänheten och politikerna.
              </li>
              <li>
                <strong>Medielogik:</strong> De principer och spelregler som styr vad som blir en nyhet (t.ex. förenkling, tillspetsning, personifiering och dramatik).
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 14 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. Vad utmärker Henk Prakkes modell kring nyhetsurval?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Den visar hur nyhetsurvalet påverkas av avstånd i tid, rum (geografi) och kultur mellan händelsen och mottagaren. Ju närmare händelsen är desto större blir nyhetsvärdet.
            </p>
          </div>
        </div>

        {/* Fråga 15 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            15. Vad är en grindvakt eller gatekeeper?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En yrkesroll (exempelvis en redaktör eller journalist) som väljer ut vilka nyheter som ska publiceras och vilka som ska sorteras bort.
            </p>
          </div>
        </div>

        {/* Fråga 16 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            16. Vilket är huvudinnehållet i TF och YGL?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Tryckfrihetsförordningen (TF):</strong> Gäller tryckta skrifter. Innehåller censurförbud, etableringsfrihet, meddelarskydd, offentlighetsprincipen och regler om ansvarig utgivare.
              </li>
              <li>
                <strong>Yttrandefrihetsgrundlagen (YGL):</strong> Ger motsvarande skydd som TF fast för alla etermedier och digitala medier (tv, radio, webbsidor).
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 17 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            17. Vilka inskränkningar finns i den svenska yttrandefriheten?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Inskränkningar regleras genom yttrandefrihetsbrott som förtal, hets mot folkgrupp, olaga hot, landsförräderi, spioneri samt barnpornografibrott.
            </p>
          </div>
        </div>

        {/* Fråga 18 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            18. Vilka etiska regler bör en journalist följa i sitt arbete?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>Ge korrekta nyheter.</li>
              <li>Döm ingen oprövad (respektera den personliga integriteten).</li>
              <li>Hör båda sidor.</li>
              <li>Var försiktig med namn och bild vid publicering.</li>
            </ul>
          </div>
        </div>

        {/* Fråga 19 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            19. Ge exempel på den utmaning som internet innebär mot publicistiska regler.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              På internet sker publiceringar direkt utan redaktionell granskning, vilket gör att desinformation och integritetskränkande material sprids snabbt. Det är svårt att utkräva ansvar från utländska plattformar eller anonyma konton.
            </p>
          </div>
        </div>

        {/* Fråga 20 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            20. Vad innebär konsekvensneutralitet vid nyhetsrapporteringen?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Att journalister ska rapportera sanningen och relevanta nyheter oavsett vilka konsekvenser publiceringen får för de inblandade personerna eller samhället.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ANALYSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>ANALYSFRÅGOR</h2>

        {/* Fråga 21 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            21. Sändarmodell och tvåvägskommunikation i debatter
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>a)</strong> Sändaren (t.ex. SVT/debattledare och partiledare) skickar budskap via tv-mediet. Mottagarna (tittare/journalister) blir i sin tur sändare när de reagerar och kommenterar i sociala medier (X, trådar, chattrum). Dessa reaktioner fångas upp av andra tittare och medier och bildar ett tvåvägskommunikationsflöde i realtid.
            </p>
            <p className={classes.paragraph}>
              <strong>b)</strong> Utmaningarna är större idag på grund av brus, snabbhet och brist på kontroll över hur budskapet tolkas. Sändaren måste nu konkurrera om uppmärksamheten och bemöta omedelbar feedback, felhandlingar eller feltolkningar på sociala medier.
            </p>
          </div>
        </div>

        {/* Fråga 22 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            22. Jämförelse mellan Public Service och den frihetliga modellen
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Public Service-modellen:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Fördelar:</strong> Garanterar oberoende, opartiskhet, bredd i utbudet och bevakning av hela landet.
              </li>
              <li>
                <strong>Nackdelar:</strong> Finansieras via skattemedel och kan av kritiker uppfattas som statligt styrd eller trögrörlig.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Frihetliga modellen:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Fördelar:</strong> Stort utbud, marknadsanpassat och kräver inga skattepengar.
              </li>
              <li>
                <strong>Nackdelar:</strong> Risk för kvalitetsfall, klickbete och ytlig underhållning eftersom vinsten är i fokus.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 23 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            23. Tillämpning av saklighet och opartiskhet
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Saklighet:</strong> Kräver att alla fakta är verifierbara (sanningskrav) och relevanta för ämnet.
              </li>
              <li>
                <strong>Opartiskhet:</strong> Kräver att båda sidor av en konflikt får komma till tals med neutral språkdräkt utan att läraren eller nyhetsuppläsaren lägger in egna värderingar.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 24 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            24. Jämförelse mellan traditionella och sociala medier
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Traditionella medier:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Fördelar:</strong> Hög trovärdighet, källkritisk granskning och juridiskt ansvarig utgivare.
              </li>
              <li>
                <strong>Nackdelar:</strong> Långsammare nyhetsflöde och mindre deltagarkultur.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Sociala medier:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Fördelar:</strong> Blixtsnabb nyhetsförmedling och interaktivitet.
              </li>
              <li>
                <strong>Nackdelar:</strong> Hög risk för desinformation, näthat och filterbubblor.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== DISKUSSIONSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>DISKUSSIONSFRÅGOR</h2>

        {/* Fråga 25 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            25. Sveriges tryck- och yttrandefrihet i jämförelse med omvärlden
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Sverige har en av världens starkaste tryck- och yttrandefriheter med grundlagsskyddad offentlighetsprincip och förbud mot censur. I auktoritära stater är medier ofta statskontrollerade eller hårt censurerade.
            </p>
          </div>
        </div>

        {/* Fråga 26 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            26. Granskning av offentliga personer och integritet
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>Krav på offentliga personer motiveras av att de har makt och förvaltar gemensamma resurser.</li>
              <li>Hänsyn till familjemedlemmar bör tas om familjen inte själva kliver fram i offentligheten. Nyhetsvärdet och allmänintresset måste vägas mot den personliga skadan.</li>
            </ul>
          </div>
        </div>

        {/* Fråga 27 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            27. Sociala mediers påverkan på demokratin
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Positivt:</strong> Ökad demokrati där fler röster hörs direkt utan grindvakter.
              </li>
              <li>
                <strong>Negativt:</strong> Spridning av desinformation, polarisering och politisk påverkan via trollkonton eller algoritmer.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 28 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            28. Konsekvenser av nedlagda lokaltidningar och brist på granskning
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              När lokaltidningar läggs ner skapas "nyhetsskuggor". Makthavare på lokal nivå lämnas ogranskade, vilket ökar risken för korruption. Det är också svårare att granska eliten i mindre miljöer på grund av vänskapsband och sociala beroenden.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FÖRDJUPNINGSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>FÖRDJUPNINGSFRÅGOR</h2>

        {/* Fråga 29 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            29. Undersökning av lokaltidningens insändarsida
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En undersökning av insändarsidan visar ofta att lokala debatter handlar om trygghet, skola, sjukvård, trafik och byggfrågor. Det fungerar som en viktig demokratisk ventil för medborgarna.
            </p>
          </div>
        </div>

        {/* Fråga 30 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            30. Jämförelse av politiska ledarsidor
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Ledarsidor har definierade politiska färger (t.ex. liberalkonservativ, socialdemokratisk) vilket märks i deras slutsatser kring skatter eller välfärd, även om de ofta kommenterar samma aktuella nyhetshändelser.
            </p>
          </div>
        </div>

        {/* Fråga 31 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            31. Kriterier för vad som utgör en nyhet
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En nyhet definieras ofta av kriterier som avstånd (geografiskt/kulturellt), överraskningsmoment, dramatik, elitpersoner samt hur många som berörs.
            </p>
          </div>
        </div>

        {/* Fråga 32 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            32. Förtroende för olika medier (Förtroendebarometern)
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Förtroendebarometern visar ofta att Public Service (SVT/SR) har högst förtroende, medan sociala medier har lägst. Det höga förtroendet för PS förklaras av krav på opartiskhet och saklighet.
            </p>
          </div>
        </div>

        {/* Fråga 33 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            33. Spionlagen och dess påverkan på yttrandefriheten
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Spionlagen (Utlandspioneri):</strong> Kriminaliserar obehörig hantering av hemliga uppgifter som kan skada Sveriges förhållande till andra stater eller organisationer (t.ex. FN/Nato). Kritiker hävdar att det kan försvåra för visselblåsare och journalister att avslöja missförhållanden.
            </p>
          </div>
        </div>

        {/* Fråga 34 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            34. Granskning av konsekvensneutralitet
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Konsekvensneutralitet:</strong> Principen att publicera sanningen oavsett följder. Den är inte alltid absolut då pressens etiska regler kräver hänsyn vid t.ex. risk för självmord eller uthängning av oskyldiga.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}