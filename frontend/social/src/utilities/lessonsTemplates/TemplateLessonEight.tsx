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

export default function TemplateLessonEight() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>KAPITEL 8: EU OCH EMU</h1>
      <p className={classes.subtitle}>
        Fullständig sammanfattning med frågor, analys, diskussion och nyckelord
      </p>

      {/* ===== 1. FRÅN KOL- OCH STÅLUNION TILL EUROPEISK UNION ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. FRÅN KOL- OCH STÅLUNION TILL EUROPEISK UNION</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver den historiska utvecklingen från efterkrigstidens
          fredssträvanden till dagens EU.
        </p>

        <h3 className={classes.subHeading}>Bakgrund och motiv</h3>
        <ul className={classes.list}>
          <li>
            Drömmen om ett enat Europa fanns länge, men var förknippad med krig och
            erövring (t.ex. Karl den store, Napoleon, Hitler).
          </li>
          <li>
            Efter andra världskriget blev <strong>fred</strong> det främsta motivet för
            samarbete, särskilt mellan Frankrike och Tyskland.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Schumandeklarationen (1950)</h3>
        <ul className={classes.list}>
          <li>
            Den franske utrikesministern Robert Schuman föreslog att Frankrikes och
            Västtysklands <strong>kol- och stålindustri</strong> skulle läggas under
            gemensam kontroll.
          </li>
          <li>
            Syftet var att säkra freden, eftersom detta var krigsindustrins bas. Detta
            anses vara starten på dagens EU, och Europeiska dagen firas den 9 maj till
            minne av deklarationen.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Kol- och stålunionen (1951)</h3>
        <ul className={classes.list}>
          <li>
            Sex länder (Belgien, Frankrike, Italien, Luxemburg, Nederländerna,
            Västtyskland) undertecknade avtalet och skapade den första gemenskapen.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Romfördraget (1957)</h3>
        <ul className={classes.list}>
          <li>
            Tog nästa steg mot ekonomiskt samarbete genom att skapa:
            <ul className={classes.list}>
              <li>
                <strong>EEC (Europeiska ekonomiska gemenskapen):</strong> Inrättade en
                tullunion mellan medlemsländerna (avveckla interna tullar, gemensam tull
                mot omvärlden) och beslutade om en gemensam jordbruks-, handels- och
                transportpolitik.
              </li>
              <li>
                <strong>Euratom:</strong> Syftade till fredlig användning av kärnkraft.
              </li>
            </ul>
          </li>
          <li>
            Dessa tre samarbeten (Kol- och stålunionen, EEC, Euratom) utvecklades senare
            till <strong>EG (Europeiska gemenskapen)</strong>.
          </li>
          <li>
            <strong>Sverige</strong> blev medlem i EU år <strong>1995</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Enhetsakten (1986)</h3>
        <ul className={classes.list}>
          <li>
            Under kommissionsordförande Jacques Delors togs ett stort steg mot starkare
            integration.
          </li>
          <li>
            Målet var att uppnå den <strong>inre marknaden</strong> före utgången av
            1992 genom att garantera <strong>"de fyra friheterna"</strong>: fri
            rörlighet för varor, tjänster, arbetskraft och kapital.
          </li>
        </ul>
      </section>

      {/* ===== 2. EU:S INSTITUTIONER OCH BESLUTSPROCESSER ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. EU:S INSTITUTIONER OCH BESLUTSPROCESSER</h2>
        <p className={classes.paragraph}>
          Detta avsnitt förklarar hur EU styrs och hur lagar och beslut kommer till.
        </p>

        <h3 className={classes.subHeading}>Europeiska rådet</h3>
        <ul className={classes.list}>
          <li>
            Består av medlemsländernas stats- eller regeringschefer samt kommissionens
            ordförande.
          </li>
          <li>Samlas minst fyra gånger per år (toppmöten).</li>
          <li>
            <strong>Huvuduppgift:</strong> Ge EU den politiska vägledningen och
            utvecklingen, men antar <em>inte</em> lagstiftning.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Kommissionen</h3>
        <ul className={classes.list}>
          <li>
            Fungerar som EU:s <strong>"regering"</strong> och har <strong>ensamrätt</strong>{" "}
            att lägga fram förslag till ny lagstiftning.
          </li>
          <li>
            Övervakar att medlemsländerna följer EU:s lagar och förvaltar EU:s budget.
          </li>
          <li>Har en ordförande och ledamöter från varje medlemsland.</li>
        </ul>

        <h3 className={classes.subHeading}>Ministerrådet</h3>
        <ul className={classes.list}>
          <li>EU:s främsta beslutsfattande organ.</li>
          <li>
            Består av ministrar från medlemsländerna (sammansättningen beror på vilken
            fråga som behandlas).
          </li>
          <li>
            Röstning sker ofta med <strong>dubbel majoritet</strong> (minst 55% av
            medlemsländerna som representerar minst 65% av EU:s befolkning).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Europaparlamentet</h3>
        <ul className={classes.list}>
          <li>Enda direktvalda EU-institutionen av medborgarna vart femte år.</li>
          <li>
            Delar lagstiftningsmakten med Ministerrådet genom det{" "}
            <strong>ordinarie lagstiftningsförfarandet</strong>.
          </li>
          <li>
            Har <em>inte</em> ensamrätt att lägga fram lagförslag, utan godkänner,
            ändrar eller stoppar kommissionens förslag. Detta ses av vissa som ett
            demokratiskt problem.
          </li>
          <li>
            Godkänner även nya medlemsländer, internationella avtal och hela
            kommissionen.
          </li>
        </ul>

        <h3 className={classes.subHeading}>EU-domstolen</h3>
        <ul className={classes.list}>
          <li>
            Har en domare från varje medlemsland, utsedda av regeringarna för sex år.
          </li>
          <li>
            <strong>Huvuduppgift:</strong> Tolka EU:s lagar och säkerställa att de
            tillämpas lika i alla medlemsländer.
          </li>
          <li>
            Övervakar att ministerrådets beslut och medlemsländernas agerande följer
            EU:s regler.
          </li>
          <li>
            Löser tvister mellan EU:s institutioner och mellan institutioner och
            medlemsstater.
          </li>
          <li>
            Har <em>inga</em> befogenheter inom utrikes- och säkerhetspolitik eller
            inrikes- och rättsliga frågor (som asyl och invandring).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Överstatliga vs Mellanstatliga beslut</h3>
        <ul className={classes.list}>
          <li>
            <strong>Överstatliga beslut:</strong> EU kan fatta majoritetsbeslut som alla
            medlemsländer måste följa, även de som röstade emot. Detta gäller områden
            där medlemsländerna överlåtit beslutanderätt, som handelspolitik, jordbruk,
            inre marknaden och miljöpolitik. <em>"EG-rätten bryter landsrätten"</em>.
          </li>
          <li>
            <strong>Mellanstatliga beslut:</strong> Beslut som kräver enhällighet, där
            varje medlemsland har vetorätt. Detta gäller känsliga områden som
            utrikespolitik, säkerhetspolitik och beskattning.
          </li>
        </ul>
      </section>

      {/* ===== 3. EU:S POLITIK OCH ARBETE I VARDAGEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. EU:S POLITIK OCH ARBETE I VARDAGEN</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver några centrala politikområden som direkt påverkar
          medborgare och företag.
        </p>

        <h3 className={classes.subHeading}>Klimatpolitik</h3>
        <ul className={classes.list}>
          <li>
            EU har som mål att bli <strong>första klimatneutrala kontinenten</strong>{" "}
            senast 2050, i linje med Parisavtalet.
          </li>
          <li>
            Ett viktigt verktyg är <strong>handeln med utsläppsrätter (ETS)</strong>,
            som omfattar industri- och energiproduktion. Företag får en viss mängd
            utsläppsrätter och kan handla med dem, vilket skapar incitament att minska
            utsläppen.
          </li>
          <li>
            <strong>"Fit for 55"</strong> är ett lagstiftningspaket för att minska
            nettoutsläppen med minst 55% till 2030. <strong>ETS 2</strong> är en ny del
            som reglerar utsläpp från vägtransporter och byggnader.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Fri rörlighet för personer (Schengensamarbetet)</h3>
        <ul className={classes.list}>
          <li>
            Ger EU-medborgare rätt att fritt resa in och uppehålla sig i ett annat
            medlemsland (i tre månader, därefter krav på försörjning).
          </li>
          <li>
            Innebär att de flesta medlemsländer (inklusive Sverige) har tagit bort de
            interna gränskontrollerna (<strong>Schengensamarbetet</strong>).
          </li>
          <li>
            Medför även problem som gränsöverskridande brottslighet och illegal
            invandring, vilket kan leda till tillfälliga gränskontroller i
            extraordinära situationer.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Fri rörlighet för varor, tjänster och kapital</h3>
        <ul className={classes.list}>
          <li>
            En vara som säljs lagligt i ett medlemsland ska kunna säljas i alla andra
            (med undantag för hot mot liv, hälsa eller miljö). Sverige fick t.ex. behålla
            sitt förbud mot snus och alkoholreklam vid inträdet.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Asyl- och Migrationspolitik</h3>
        <ul className={classes.list}>
          <li>
            En stor utmaning för EU. En ny överenskommelse från 2024 syftar till att:
            <ul className={classes.list}>
              <li>
                Skapa asylcenter vid EU:s yttre gränser för att snabbt pröva
                asylansökningar (inom 12 veckor) och särskilja personer med skyddsskäl
                från andra.
              </li>
              <li>
                Införa en <strong>tvingande solidarisk flyktingfördelning</strong>, där
                länder som vägrar ta emot migranter måste bidra med pengar eller materiel.
              </li>
              <li>
                Principen från <strong>Dublinförordningen</strong> kvarstår: det första
                medlemsland en flykting anländer till är ansvarigt för att pröva ansökan.
                Detta belastar ofta länder i södra Europa.
              </li>
            </ul>
          </li>
          <li>
            Bristen på en kontrollerbar yttre gräns leder ibland till att medlemsländer
            återinför egna gränskontroller, vilket är tillåtet i undantagsfall.
          </li>
        </ul>
      </section>

      {/* ===== 4. EMU - EKONOMISKA OCH MONETÄRA UNIONEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. EMU - EKONOMISKA OCH MONETÄRA UNIONEN</h2>
        <p className={classes.paragraph}>
          Detta avsnitt fokuserar på samarbetet kring euron, dess regler och utmaningar.
        </p>

        <h3 className={classes.subHeading}>Grunden för EMU</h3>
        <ul className={classes.list}>
          <li>
            EMU är en valutunion som skapades 1999. Alla EU-länder är medlemmar i EMU,
            men 20 av 27 länder har <strong>euron</strong> som valuta (Kroatien senast
            2023).
          </li>
          <li>
            För att gå med i euroområdet måste ett land uppfylla fem{" "}
            <strong>konvergenskriterier</strong> gällande bland annat prisstabilitet,
            räntor och statsskuld.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Fördelar och Nackdelar med Euron</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Fördelar</th>
                <th className={classes.th}>Nackdelar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  Lättare att jämföra priser och löner, ökad prisstabilitet.
                </td>
                <td className={classes.td}>
                  Medlemsländerna förlorar makten över sin egen{" "}
                  <strong>penningpolitik</strong> (kan inte själva ändra ränta eller
                  valutakurs för att stimulera ekonomin).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  Större och tryggare valuta (mindre sårbar än en liten nationell valuta).
                </td>
                <td className={classes.td}>—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.subHeading}>Centralbankernas Roll</h3>
        <ul className={classes.list}>
          <li>
            <strong>Europeiska centralbanken (ECB):</strong> Har sitt säte i Frankfurt
            och ansvarar för penningpolitiken i euroområdet.
          </li>
          <li>
            <strong>ECB-rådet:</strong> Det högsta beslutsfattande organet, som bestämmer
            ränteläget för hela euroområdet.
          </li>
          <li>
            <strong>Eurogruppen:</strong> Ett informellt möte för ekonomininistrar från
            euroländerna för att samordna den ekonomiska politiken.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Stabilitets- och Tillväxtpakten</h3>
        <ul className={classes.list}>
          <li>
            Upprättad för att säkerställa sunda offentliga finanser inom EMU. Sätter
            gränser för:
            <ul className={classes.list}>
              <li>
                <strong>Budgetunderskott:</strong> max 3% av BNP.
              </li>
              <li>
                <strong>Statsskuld:</strong> max 60% av BNP.
              </li>
            </ul>
          </li>
          <li>
            <strong>Kritik:</strong> Pakten har historiskt sett varit svår att
            upprätthålla. Många länder, även Frankrike och Tyskland, har brutit mot
            reglerna. 2024 var statsskulden i euroområdet nästan 90% av BNP, långt över
            gränsen.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Utmaningar för EMU</h3>
        <ul className={classes.list}>
          <li>
            <strong>Ekonomisk asymmetri:</strong> Penningpolitiken styrs centralt av ECB
            (överstatligt), medan finanspolitiken (skatter och utgifter) fortfarande
            bestäms av varje medlemsland (nationellt). Detta skapar en inneboende
            spänning.
          </li>
          <li>
            <strong>Hög skuldsättning:</strong> Länder som Grekland och Italien har en
            statsskuld långt över 100% av BNP, vilket minskar utrymmet för
            finanspolitiska stimulanser vid kriser. Sverige har en jämförelsevis låg
            skuldsättning på ca 31%.
          </li>
          <li>
            För att möta kriser har EU inrättat{" "}
            <strong>Europeiska stabilitetsmekanismen (ESM)</strong> för att ge stöd till
            euroländer i ekonomisk kris, samt en <strong>bankunion</strong> för att
            stabilisera banksystemet.
          </li>
        </ul>
      </section>

      {/* ===== 5. EUROPEISKA UNIONENS FRAMTID ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. EUROPEISKA UNIONENS FRAMTID</h2>
        <p className={classes.paragraph}>
          Detta avsnitt diskuterar utvidgningen av EU, villkoren för medlemskap och
          processen för att lämna unionen.
        </p>

        <h3 className={classes.subHeading}>Utvidgning och Kandidatländer</h3>
        <ul className={classes.list}>
          <li>
            EU har vuxit från 6 till 27 medlemsländer. I början av 2025 fanns det 9
            kandidatländer, inklusive Ukraina, Moldavien och länderna på västra Balkan.
          </li>
          <li>
            Rysslands invasion av Ukraina 2022 har påskyndat diskussionerna om
            utvidgning, med betoning på att det inte får ta för lång tid av
            geopolitiska skäl.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Villkor för Medlemskap (Köpenhamnskriterierna från 1993)</h3>
        <ul className={classes.list}>
          <li>
            <strong>Politiska krav:</strong> Respektera demokratiska principer,
            rättsstatens principer och mänskliga rättigheter.
          </li>
          <li>
            <strong>Administrativa krav:</strong> Ha en fungerande förvaltning som kan
            hantera EU:s lagstiftning.
          </li>
          <li>
            <strong>Ekonomiska krav:</strong> Ha ett fungerande marknadsekonomiskt
            system.
          </li>
          <li>
            Lissabonfördraget tillägger att landet måste respektera unionens värderingar
            (frihet, demokrati, jämlikhet, etc.), men definierar inte vad "europeisk"
            innebär. Det är en politisk bedömning i varje enskilt fall.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Att Gå Ur EU</h3>
        <ul className={classes.list}>
          <li>
            Regleras av <strong>Lissabonfördragets Artikel 50</strong>. Ett land som
            vill lämna EU måste anmäla detta till Europeiska rådet, som förhandlar fram
            ett utträdesavtal.
          </li>
          <li>
            <strong>Brexit (2020):</strong> Storbritannien var det första landet som
            utnyttjade artikel 50 och lämnade EU efter en folkomröstning 2016.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Centrala Utmaningar för Framtiden</h3>
        <ul className={classes.list}>
          <li>
            <strong>Integrationsförmåga:</strong> Kan EU fungera effektivt med över 30
            medlemsländer? Handlar om institutionernas kapacitet och beslutsprocesser.
          </li>
          <li>
            <strong>Värdegrund:</strong> Hur ska EU hantera medlemsländer som bryter mot
            unionens demokratiska värderingar?
          </li>
          <li>
            <strong>Fördjupning vs Utvidgning:</strong> Kan EU fortsätta att fördjupa
            samarbetet (t.ex. inom försvarspolitik) samtidigt som man tar in många nya
            medlemmar?
          </li>
        </ul>
      </section>

      {/* ===== 6. FRÅGOR TILL TEXTEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. FRÅGOR TILL TEXTEN</h2>

        {/* Fråga 1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>1. Vad innebär Schumanplanen?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Schumanplanen (eller Schumandeklarationen) var ett förslag som den franske
              utrikesministern Robert Schuman presenterade i maj 1950. Planen gick ut på
              att Frankrikes och Västtysklands <strong>kol- och stålindustri</strong>{" "}
              skulle läggas under gemensam kontroll. Eftersom kol och stål var basen för
              krigsindustrin, syftade planen till att säkra freden i Europa genom att
              göra krig ekonomiskt omöjligt mellan dessa länder. Organisationen skulle
              även vara öppen för andra europeiska stater. Detta anses vara startskottet
              för dagens europeiska samarbete, och Europeiska dagen firas den 9 maj till
              minne av denna deklaration.
            </p>
          </div>
        </div>

        {/* Fråga 2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. I Romfördraget upprättade sex av EU:s nuvarande medlemsländer en
            tullunion. Vad innebär den?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En tullunion innebär att medlemsländerna:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Avvecklar tullarna</strong> på varor som handlas mellan
                medlemsländerna.
              </li>
              <li>
                <strong>Har en gemensam tull</strong> mot omvärlden, dvs. alla länder
                utanför unionen möter samma tullsatser när de exporterar till något av
                medlemsländerna.
              </li>
            </ul>
            <p className={classes.paragraph}>
              Detta var en av grundstenarna för den ekonomiska gemenskapen (EEC) som
              skapades genom Romfördraget 1957. Syftet var att öka handeln och det
              ekonomiska samarbetet mellan de sex ursprungsländerna (Belgien, Frankrike,
              Italien, Luxemburg, Nederländerna och Västtyskland).
            </p>
          </div>
        </div>

        {/* Fråga 3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. Vad bestämdes i huvudsak i (a) Enhetsakten? (b) Maastrichtfördraget?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>(a) Enhetsakten (1986):</strong> Detta var ett tillägg till
              Romfördraget som syftade till att stärka integrationen. Huvudbeslutet var
              att uppnå den <strong>inre marknaden</strong> före utgången av 1992 genom
              att garantera <strong>"de fyra friheterna"</strong>: fri rörlighet för
              varor, tjänster, arbetskraft och kapital.
            </p>
            <p className={classes.paragraph}>
              <strong>(b) Maastrichtfördraget (1992):</strong> Detta fördrag skapade
              formellt <strong>Europeiska unionen (EU)</strong>. Det lade grunden för
              det framtida samarbetet inom utrikes- och säkerhetspolitik samt inrikes-
              och rättsliga frågor. Viktigast var dock att det beslutade om att inrätta
              en <strong>Ekonomisk och monetär union (EMU)</strong> med en gemensam
              valuta, euron, samt fastställde konvergenskriterierna för länder som ville
              gå med i eurosamarbetet.
            </p>
          </div>
        </div>

        {/* Fråga 4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. Ange några viktiga uppgifter för (a) kommissionen (b) ministerrådet
            (c) Europaparlamentet (d) Europeiska rådet (e) EU-domstolen.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>(a) Kommissionen:</strong> EU:s "regering". Har{" "}
                <strong>ensamrätt att lägga fram förslag</strong> till nya EU-lagar.
                Övervakar att medlemsländerna följer EU:s regler och förvaltar EU:s
                budget.
              </li>
              <li>
                <strong>(b) Ministerrådet:</strong> EU:s främsta beslutsfattande organ.
                Tillsammans med Europaparlamentet antar det lagar och samordnar
                medlemsländernas politik. Röstningen sker ofta med kvalificerad majoritet
                (dubbel majoritet).
              </li>
              <li>
                <strong>(c) Europaparlamentet:</strong> Direktvald av EU:s medborgare.
                <strong>Delar lagstiftningsmakten</strong> med Ministerrådet. Godkänner,
                ändrar eller stoppar lagförslag. Har också budgetmakt och godkänner
                kommissionen som helhet.
              </li>
              <li>
                <strong>(d) Europeiska rådet:</strong> Består av medlemsländernas stats-
                och regeringschefer. Ger EU den <strong>politiska vägledningen</strong>{" "}
                och anger de övergripande målen och prioriteringarna. Det antar
                <em>inte</em> lagstiftning.
              </li>
              <li>
                <strong>(e) EU-domstolen:</strong> Säkerställer att EU:s lagar{" "}
                <strong>tolkas och tillämpas på ett enhetligt sätt</strong> i alla
                medlemsländer. Den prövar om medlemsländer eller EU-institutioner bryter
                mot EU:s regler och löser tvister mellan dessa parter.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            5. Ministerrådet fattar ibland beslut med dubbel majoritet. Vad innebär det?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Dubbel majoritet är ett röstsystem som används i Ministerrådet för att ett
              beslut ska gå igenom. Det kräver att två villkor är uppfyllda samtidigt:
            </p>
            <ol className={classes.list}>
              <li>
                Beslutet stöds av minst <strong>55%</strong> av medlemsländerna (dvs.
                minst 15 av 27 länder).
              </li>
              <li>
                Dessa länder representerar minst <strong>65%</strong> av EU:s totala
                befolkning.
              </li>
            </ol>
            <p className={classes.paragraph}>
              Detta system är utformat för att säkerställa att beslut inte bara har stöd
              från en majoritet av länderna, utan också från en majoritet av EU:s
              medborgare.
            </p>
          </div>
        </div>

        {/* Fråga 6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. Vad innebär det ordinarie lagstiftningsförfarandet?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det ordinarie lagstiftningsförfarandet (tidigare kallat
              medbeslutandeförfarandet) är den vanligaste metoden för att anta EU-lagar.
              Det innebär att <strong>Europaparlamentet och Ministerrådet</strong> har
              lika stor makt och måste komma överens om ett lagförslag. Processen ser ut
              så här:
            </p>
            <ol className={classes.list}>
              <li>
                <strong>Kommissionen</strong> lägger fram ett lagförslag.
              </li>
              <li>
                Förslaget skickas till <strong>Europaparlamentet</strong> och{" "}
                <strong>Ministerrådet</strong>.
              </li>
              <li>
                Båda institutionerna läser och föreslår ändringar. De kan anta förslaget
                i första läsningen om de är överens.
              </li>
              <li>
                Om de inte är överens, går förslaget vidare till en andra läsning och
                slutligen till en <strong>förlikningskommitté</strong> som består av lika
                många representanter från båda institutionerna.
              </li>
              <li>
                Kommittén arbetar fram en gemensam text som både parlamentet och rådet
                måste godkänna för att lagen ska antas.
              </li>
            </ol>
          </div>
        </div>

        {/* Fråga 7 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. Vilken är skillnaden mellan överstatliga och mellanstatliga beslut?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Överstatliga beslut:</strong> Dessa fattas med{" "}
                <strong>majoritetsbeslut</strong> (t.ex. dubbel majoritet) inom EU:s
                institutioner. Besluten är <strong>bindande</strong> för alla
                medlemsländer, även för de som röstade emot. Medlemsländerna har
                överlåtit en del av sin beslutanderätt till EU på dessa områden. Detta
                gäller främst frågor som rör den inre marknaden, jordbrukspolitik,
                handelspolitik, konkurrensfrågor och miljöpolitik.{" "}
                <em>"EG-rätten bryter landsrätten"</em>.
              </li>
              <li>
                <strong>Mellanstatliga beslut:</strong> Dessa kräver{" "}
                <strong>enhällighet</strong> bland medlemsländerna. Varje land har
                därmed vetorätt. Detta gäller känsliga områden där länderna inte vill
                avstå från sitt nationella inflytande, såsom utrikes- och
                säkerhetspolitik, försvarspolitik och beskattning.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 8 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>8. Vilka är EU:s främsta utgiftsområden?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              EU:s största utgiftsområden är:
            </p>
            <ol className={classes.list}>
              <li>
                <strong>Jordbrukspolitiken (Grundläggande stöd):</strong> Fortfarande en
                stor post som ger direktstöd till bönder och finansierar åtgärder för
                landsbygdsutveckling.
              </li>
              <li>
                <strong>Regionalpolitik och sammanhållningspolitik:</strong> Stora summor
                går till att minska skillnaderna mellan EU:s rika och fattiga regioner
                genom investeringar i infrastruktur, forskning och sysselsättning.
              </li>
              <li>
                <strong>Forskning och innovation (Horisont Europa):</strong> Finansiering
                av vetenskaplig forskning och teknisk utveckling.
              </li>
              <li>
                <strong>Internationella förbindelser:</strong> Bistånd till länder
                utanför EU och insatser för global utveckling.
              </li>
              <li>
                <strong>Administration:</strong> Kostnader för att driva EU:s
                institutioner och betala personal.
              </li>
            </ol>
          </div>
        </div>

        {/* Fråga 9 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. Vad innebär överenskommelsen från 2024 om asyl- och migrationspolitik?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Överenskommelsen från 2024 är en reform av EU:s asyl- och
              migrationssystem. Huvudpunkterna är:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Snabbprövning vid yttre gräns:</strong> Migranter från länder
                med låg beviljandegrad (som Tunisien, Turkiet och Indien) ska hållas i
                asylcenter vid EU:s yttre gräns, där deras ansökningar ska prövas inom{" "}
                <strong>tolv veckor</strong>.
              </li>
              <li>
                <strong>Tvingande solidaritet:</strong> Inför ett system där
                medlemsländer som vägrar ta emot kvotflyktingar istället måste bidra med{" "}
                <strong>ekonomiskt stöd eller materiel</strong> till de länder som tar
                emot dem.
              </li>
              <li>
                <strong>Bevarad Dublinprincip:</strong> Principen från
                Dublinförordningen kvarstår, vilket innebär att det första medlemsland en
                asylsökande anländer till är ansvarigt för att pröva ansökan. Detta för
                att förhindra att asylsökande skickas mellan länder ("asylshopping").
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 10 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. Vilka är huvuddragen i handeln med utsläppsrätter?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Handeln med utsläppsrätter (EU ETS) är ett system som infördes 2005 för
              att minska växthusgasutsläpp på ett kostnadseffektivt sätt. Huvuddragen är:
            </p>
            <ul className={classes.list}>
              <li>
                Systemet omfattar tusentals anläggningar inom industri och
                energiproduktion som står för nästan hälften av EU:s koldioxidutsläpp.
              </li>
              <li>
                Företagen tilldelas en viss mängd <strong>utsläppsrätter</strong> som
                anger hur mycket koldioxid de får släppa ut under ett år.
              </li>
              <li>
                Företag som släpper ut mindre än sin tilldelning kan{" "}
                <strong>sälja</strong> sina överskottsrätter.
              </li>
              <li>
                Företag som släpper ut mer måste <strong>köpa</strong> ytterligare rätter
                eller minska sina utsläpp.
              </li>
              <li>
                Den totala mängden utsläppsrätter minskar varje år, vilket successivt
                tvingar fram effektiviseringar och mindre utsläpp. Oanvända rätter
                skrotas.
              </li>
              <li>
                Ett nytt system, <strong>ETS 2</strong>, införs för vägtransporter,
                byggnader och mindre industrier för att täcka in ytterligare utsläpp.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 11 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>11. Vad innebär Schengensamarbetet?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Schengensamarbetet är ett avtal mellan de flesta EU-länder (och några
              utanför EU) som innebär att de <strong>interna gränskontrollerna</strong>{" "}
              mellan länderna är <strong>avskaffade</strong>. Det innebär att det i
              praktiken är en enda stor gränszon där människor kan resa fritt utan
              passkontroll. Samtidigt har länderna förstärkt det gemensamma samarbetet
              kring kontroller vid de <strong>yttre gränserna</strong> för att
              kompensera för de avskaffade inre gränserna. I extraordinära situationer,
              t.ex. vid stora flyktingströmmar eller terroristhot, kan ett medlemsland
              tillfälligt återinföra interna gränskontroller.
            </p>
          </div>
        </div>

        {/* Fråga 12 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>12. Vad innebär Dublinförordningen?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Dublinförordningen är en EU-förordning som reglerar{" "}
              <strong>vilket medlemsland som är ansvarigt för att pröva en
              asylansökan</strong>. Huvudprincipen är att det är det första EU-land som
              en asylsökande anländer till som har ansvaret för att handlägga ansökan.
              Syftet är att förhindra att en asylsökande skickas runt mellan olika länder
              ("asylshopping") och att säkerställa att varje ansökan prövas av ett land.
              En stor kritik mot förordningen är att den lägger en tung börda på de
              sydliga EU-länderna (som Italien, Grekland och Malta), dit många flyktingar
              först anländer via Medelhavet.
            </p>
          </div>
        </div>

        {/* Fråga 13 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>13. Ge exempel på hur EU påverkar vår vardag.</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              EU påverkar vår vardag på många sätt, bland annat:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Resor:</strong> Möjligheten att resa fritt utan pass inom
                Schengenområdet. Gemensamma regler för flygpassagerarrättigheter (t.ex.
                kompensation vid förseningar).
              </li>
              <li>
                <strong>Mat och konsumtion:</strong> Livsmedelssäkerhetsregler och
                märkning (t.ex. ursprungsmärkning på kött). Gemensamma regler för
                elektronik och leksaker. Prisjämförelser och möjligheten att handla
                online från andra EU-länder.
              </li>
              <li>
                <strong>Studier och arbete:</strong> Möjligheten att studera eller arbeta
                i ett annat EU-land utan att behöva ansöka om arbetstillstånd.
                Erkännande av utbildningar och yrkeskvalifikationer.
              </li>
              <li>
                <strong>Miljö:</strong> EU:s regler för utsläppsnormer för bilar,
                återvinning och förbud mot engångsplast.
              </li>
              <li>
                <strong>Telefoni:</strong> Slopade roamingavgifter inom EU, vilket gör
                att man kan använda sin mobiltelefon i andra EU-länder till samma
                kostnad som i hemlandet.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 14 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. Vilka är de fem konvergenskriterierna för att gå med i euroområdet?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              För att ett EU-land ska få införa euron som valuta måste det uppfylla fem
              ekonomiska konvergenskriterier (även kallade Maastricht-kriterierna):
            </p>
            <ol className={classes.list}>
              <li>
                <strong>Prisstabilitet:</strong> Inflationen får inte vara mer än 1,5
                procentenheter högre än genomsnittet för de tre EU-länder med lägst
                inflation.
              </li>
              <li>
                <strong>Långa räntor:</strong> Den långa räntan (på statsobligationer)
                får inte vara mer än 2 procentenheter högre än genomsnittet för de tre
                EU-länder med lägst ränta.
              </li>
              <li>
                <strong>Stabila växelkurser:</strong> Landets valuta måste ha varit
                stabil i förhållande till euron i minst två år utan att ha devalverats.
              </li>
              <li>
                <strong>Budgetunderskott:</strong> Det årliga budgetunderskottet får inte
                överstiga 3% av BNP.
              </li>
              <li>
                <strong>Statsskuld:</strong> Den totala statsskulden får inte överstiga
                60% av BNP.
              </li>
            </ol>
          </div>
        </div>

        {/* Fråga 15 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            15. Vad innebär stabilitets- och tillväxtpakten?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Stabilitets- och tillväxtpakten är en uppsättning regler som skapades för
              att säkerställa sunda offentliga finanser inom EMU. Den sätter en övre
              gräns för medlemsländernas budgetunderskott och statsskuld:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Budgetunderskott:</strong> Max 3% av BNP.
              </li>
              <li>
                <strong>Statsskuld:</strong> Max 60% av BNP.
              </li>
            </ul>
            <p className={classes.paragraph}>
              Syftet är att förhindra att länder lever över sina tillgångar och därmed
              skapar problem för den gemensamma valutan (euron). Pakten har dock
              kritiserats hårt eftersom många länder, även stora som Frankrike och
              Tyskland, har brutit mot reglerna utan att få några allvarliga sanktioner.
            </p>
          </div>
        </div>

        {/* Fråga 16 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            16. Förklara begreppen (a) ECB-rådet (b) Eurogruppen?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>(a) ECB-rådet:</strong> Detta är det högsta beslutsfattande organet
              inom <strong>Europeiska centralbanken (ECB)</strong>. Det består av
              ledamöterna i ECB:s direktion samt centralbankscheferna från de länder som
              har euron som valuta. ECB-rådets viktigaste uppgift är att fastställa{" "}
              <strong>penningpolitiken</strong> för euroområdet, vilket främst innebär
              att besluta om <strong>räntenivån</strong> för att upprätthålla
              prisstabilitet i euron.
            </p>
            <p className={classes.paragraph}>
              <strong>(b) Eurogruppen:</strong> Detta är ett <strong>informellt
              möte</strong> där ekonoministrarna från de länder som har euron träffas
              för att samordna den ekonomiska politiken. Här diskuteras frågor som rör
              euroområdets ekonomi, budgetpolitik och utvecklingen av EMU. Eurogruppen
              är inte en formell EU-institution men har stor betydelse för samordningen
              inom euroländerna.
            </p>
          </div>
        </div>

        {/* Fråga 17 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            17. Vad krävs för att ett land ska kunna bli medlem av EU?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              För att bli medlem i EU måste ett land uppfylla de så kallade{" "}
              <strong>Köpenhamnskriterierna</strong> från 1993, som består av tre
              huvudkrav:
            </p>
            <ol className={classes.list}>
              <li>
                <strong>Politiska krav:</strong> Landet måste ha stabila institutioner
                som garanterar demokrati, rättsstatens principer, mänskliga rättigheter
                samt respekt för och skydd av minoriteter.
              </li>
              <li>
                <strong>Administrativa krav:</strong> Landet måste ha en fungerande
                offentlig förvaltning som kan genomföra och tillämpa EU:s lagstiftning.
              </li>
              <li>
                <strong>Ekonomiska krav:</strong> Landet måste ha en fungerande
                marknadsekonomi som kan klara av konkurrensen inom EU:s inre marknad.
              </li>
            </ol>
            <p className={classes.paragraph}>
              Dessutom måste landet vara villigt att anta allt som kallas{" "}
              <em>EU:s regelverk (acquis communautaire)</em>. I Lissabonfördraget
              tilläggs att landet måste respektera unionens värden. Vidare måste
              Europeiska rådet enhälligt besluta om att inleda förhandlingar och slutligen
              godkänna medlemskapet, vilket även Europaparlamentet måste göra.
            </p>
          </div>
        </div>

        {/* Fråga 18 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            18. Vilka är bestämmelserna i Lissabonfördragets artikel 50?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Artikel 50 i Lissabonfördraget reglerar processen för hur ett medlemsland
              <strong>frivilligt kan lämna EU</strong>. Huvudbestämmelserna är:
            </p>
            <ol className={classes.list}>
              <li>
                Ett medlemsland som vill lämna EU ska <strong>anmäla</strong> sitt beslut
                till <strong>Europeiska rådet</strong>.
              </li>
              <li>
                EU ska därefter förhandla fram och sluta ett{" "}
                <strong>utträdesavtal</strong> med landet. Avtalet ska ange villkoren för
                utträdet och ramarna för landets framtida förhållande till EU.
              </li>
              <li>
                Förhandlingarna ska ske i enlighet med riktlinjer som Europeiska rådet
                (som fattar beslut enhälligt) har fastställt.
              </li>
              <li>
                EU:s förhandlingsposition bestäms av <strong>Europeiska rådet</strong>{" "}
                och förhandlingarna förs av <strong>kommissionen</strong>.
              </li>
              <li>
                Utträdesavtalet måste godkännas av <strong>Europaparlamentet</strong> med
                enkel majoritet och av <strong>Ministerrådet</strong> med kvalificerad
                majoritet.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===== 7. ANALYSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. ANALYSFRÅGOR</h2>

        {/* A1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. Ta fram fördelar och nackdelar för Sverige med att vara medlem i EU.
            Vilka tycker du överväger? Hur påverkas du personligen av att Sverige är
            med i EU?
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Fördelar</th>
                    <th className={classes.th}>Nackdelar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>Tillgång till den inre marknaden:</strong> Svenska företag
                      kan fritt exportera varor och tjänster till 27 länder utan tullar,
                      vilket ökar tillväxt och jobb.
                    </td>
                    <td className={classes.td}>
                      <strong>Sektoriell påverkan:</strong> Vissa sektorer, som jordbruk
                      och skogsindustri, kan påverkas negativt av konkurrens från andra
                      EU-länder eller av EU:s gemensamma jordbrukspolitik.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Fri rörlighet:</strong> Svenska medborgare kan fritt bo,
                      studera, arbeta och resa inom hela EU utan krångel med visum eller
                      arbetstillstånd.
                    </td>
                    <td className={classes.td}>
                      <strong>Suveränitetsförlust:</strong> Sverige måste följa EU-lagar
                      och regler som beslutats i Bryssel, även på områden där man röstat
                      emot (överstatliga beslut). Man har förlorat en del av sin
                      nationella självbestämmanderätt.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Påverkansmöjlighet:</strong> Som medlem har Sverige en
                      plats vid bordet och kan vara med och forma de regler och lagar som
                      påverkar hela Europa.
                    </td>
                    <td className={classes.td}>
                      <strong>Kostnad:</strong> Sverige är en av de största
                      nettobetalarna till EU:s budget, vilket innebär att vi betalar in
                      mer än vi får tillbaka i direktstöd (även om vi får tillbaka mycket
                      via andra kanaler).
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Ökad säkerhet och stabilitet:</strong> Samarbetet inom EU
                      bidrar till fred, demokrati och rättsstatlig utveckling, vilket
                      gynnar Sverige.
                    </td>
                    <td className={classes.td}>
                      <strong>Byråkrati:</strong> EU-regler kan upplevas som krångliga
                      och byråkratiska, särskilt för småföretag som inte har resurser att
                      hantera alla regelverk.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Starkare röst globalt:</strong> Som en del av EU har
                      Sverige en mycket starkare förhandlingsposition i internationella
                      frågor som handel och klimat än vad det skulle ha som ensamt litet
                      land.
                    </td>
                    <td className={classes.td}>
                      <strong>Risk för social dumpning:</strong> Den fria rörligheten för
                      arbetskraft kan leda till att arbetstagare från andra EU-länder
                      konkurrerar med svenska arbetstagare på villkor som undergräver den
                      svenska modellen.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={classes.paragraph}>
              <strong>Vilka överväger?</strong> Fördelarna med marknadstillgång och
              påverkansmöjlighet anses ofta väga tyngre än nackdelarna. Att kunna påverka
              de regler som ändå påverkar oss är en stor vinst, och den inre marknaden
              har varit avgörande för svensk ekonomisk tillväxt.
            </p>

            <p className={classes.paragraph}>
              <strong>Personlig påverkan:</strong> Jag påverkas personligen av att
              Sverige är med i EU. Som student/arbetstagare har jag möjlighet att resa
              och arbeta utomlands utan krångel. När jag reser inom Schengen slipper jag
              passkontroller. Priserna på mat och elektronik är lägre tack vare den fria
              handeln, och jag vet att det finns gemensamma säkerhetsregler för
              produkterna jag köper. Även som konsument har jag rättigheter som garantier
              vid köp av varor över nationsgränserna.
            </p>
          </div>
        </div>

        {/* A2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. Terroristhot och återupprättande av egna gränskontroller.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Argument FÖR att varje EU-land återupprättar egna
              gränskontroller:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Ökad kontroll:</strong> Man kan bättre övervaka vilka som reser
                in i landet, vilket kan minska risken för att terrorister eller andra
                kriminella tar sig in.
              </li>
              <li>
                <strong>Nationell säkerhet:</strong> I en tid av ökat hot kan nationella
                kontroller ses som ett sätt att stärka den egna befolkningens trygghet
                och visa att regeringen tar situationen på allvar.
              </li>
              <li>
                <strong>Kontroll av illegal invandring:</strong> Gränskontroller kan
                minska det illegala inflödet av människor och göra det svårare att vistas
                i landet illegalt.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>Argument EMOT att varje EU-land återupprättar egna
              gränskontroller:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Undergräver Schengen:</strong> Själva kärnan i EU-samarbetet, den
                fria rörligheten, sätts ur spel. Det blir svårare för vanliga medborgare
                att resa, handla och arbeta gränsöverskridande.
              </li>
              <li>
                <strong>Ekonomiska konsekvenser:</strong> Långsammare gränspassager leder
                till förseningar av gods och ökade kostnader för transporter, vilket
                skadar ekonomin och den inre marknaden.
              </li>
              <li>
                <strong>Symbolisk förlust:</strong> Att återinföra inre gränser innebär
                ett stort bakslag för tanken om ett enat Europa och kan öka nationalismen.
              </li>
              <li>
                <strong>Sammantaget:</strong> Terrorister är sällan beroende av att
                passera gränser legalt. De kan använda sig av falska dokument eller andra
                vägar. Risken är att man skapar stora problem för EU-medborgare och
                ekonomin, samtidigt som man inte nämnvärt försvårar för terrorister.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> Tillfälliga gränskontroller vid extraordinära
              händelser (som hot om terrorattentat eller stora flyktingströmmar) är
              tillåtna och kan vara motiverade. Men en permanent återgång till nationella
              gränskontroller skulle vara förödande för EU-projektet och den inre
              marknaden, utan att nödvändigtvis öka säkerheten på ett effektivt sätt.
            </p>
          </div>
        </div>

        {/* A3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>A3. Bildanalys (av kapitlets ingressbild).</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <em>
                [OBS: Eftersom jag inte ser bilden, ger jag en generell analys baserad på
                att ingressbilden ofta föreställer förstörelse från andra världskriget,
                vilket är vanligt i EU-sammanhang]
              </em>
            </p>
            <ol className={classes.list}>
              <li>
                <strong>Vad föreställer bilden?</strong> Bilden föreställer troligen en
                förstörd stad eller ett landskap från andra världskriget, kanske ruiner av
                byggnader, en förstörd bro eller en flyktingkolonn. Den kan visa människor
                som träder fram ur ruinerna.
              </li>
              <li>
                <strong>Vad är syftet med att publicera en sådan bild?</strong> Syftet är
                att fungera som en <strong>historiskt stark och känslomässig
                introduktion</strong> till kapitlet. Bilden ska påminna läsaren om de
                fasor och den förstörelse som krig kan leda till.
              </li>
              <li>
                <strong>Vilken känsla avser bilden att ge?</strong> Bilden avser att ge en
                känsla av <strong>förlust, sorg, hopplöshet</strong> men också av{" "}
                <strong>beslutsamhet och behovet av förändring</strong>. Den understryker
                vikten av att inte upprepa historiens misstag.
              </li>
              <li>
                <strong>Vad säger bilden om utmaningarna för dåtidens ledare i
                Tyskland?</strong> Tysklands ledare stod inför enorma utmaningar efter
                kriget: att återuppbygga ett totalförstört land, både fysiskt och mentalt,
                att hantera en befolkning som var traumatiserad och fördriven, samt att
                återintegrera Tyskland i en fredlig europeisk gemenskap. Beslutet att ingå
                i Schumans kol- och stålplan var ett historiskt steg för att övervinna
                dessa utmaningar och bygga en ny, fredlig framtid.
              </li>
            </ol>
          </div>
        </div>

        {/* A4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A4. För- och nackdelar med att införa euron i Sverige.
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Fördelar</th>
                    <th className={classes.th}>Nackdelar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>Lägre transaktionskostnader:</strong> Inga
                      valutaväxlingsavgifter eller kursrisker vid resor och handel med
                      andra euroländer.
                    </td>
                    <td className={classes.td}>
                      <strong>Förlorad penningpolitisk kontroll:</strong> Sverige kan inte
                      längre självständigt sätta räntan för att stimulera ekonomin vid en
                      kris eller dämpa inflationen. Den makten överlåts till ECB.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Ökad prisjämförbarhet:</strong> Det blir lättare för
                      konsumenter att jämföra priser mellan länder, vilket kan leda till
                      lägre priser och ökad konkurrens.
                    </td>
                    <td className={classes.td}>
                      <strong>Bunden växelkurs:</strong> Landet kan inte längre använda
                      växelkursen (t.ex. att devalvera kronan) för att göra svenska
                      exportvaror billigare utomlands.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Större stabilitet:</strong> Euron är en stor och etablerad
                      valuta som är mindre sårbar för spekulation än den svenska kronan,
                      vilket kan ge ökad ekonomisk stabilitet.
                    </td>
                    <td className={classes.td}>
                      <strong>Risk för "one-size-fits-all":</strong> ECB:s penningpolitik
                      bestäms för hela euroområdet. Den kan vara för "stram" för en svag
                      svensk ekonomi eller för "lös" för en stark, vilket kan skapa
                      obalans.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Ökat inflytande:</strong> Sverige skulle få en plats i
                      ECB-rådet och därmed vara med och utforma penningpolitiken för
                      euroområdet.
                    </td>
                    <td className={classes.td}>
                      <strong>Symbolisk förlust:</strong> Kronan är en del av svensk
                      identitet. Ett införande av euron kan upplevas som ytterligare ett
                      steg mot att förlora nationell suveränitet.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={classes.paragraph}>
              <strong>Vilka överväger?</strong> För svensk del har argumenten emot hittills
              vägt tyngre. Den svenska kronan har gett Sverige flexibilitet att föra en
              självständig penningpolitik, vilket varit viktigt under ekonomiska kriser.
              Risken med att förlora denna kontroll och istället följa en penningpolitik
              som utformats för hela euroområdet upplevs som stor. Dessutom visar eurons
              historia på djupa kriser och spänningar mellan medlemsländerna.
            </p>

            <p className={classes.paragraph}>
              <strong>Personlig påverkan:</strong> För mig personligen skulle en övergång
              till euron innebära bekvämligheter som att slippa växla pengar när jag
              reser i Europa och lättare kunna jämföra priser på nätet. Omvänt skulle en
              stark euro göra mina resor till länder utanför euroområdet billigare. Men
              det skulle också innebära att mina besparingar och mitt lönearvärde
              påverkas av en penningpolitik som inte är skräddarsydd för Sverige. Jag
              skulle kunna få en sämre ränta på mitt bolån om ECB höjer räntan för att
              bekämpa inflation i Tyskland, medan Sverige egentligen behöver en lägre
              ränta.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 8. DISKUSSIONSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. DISKUSSIONSFRÅGOR</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. Ta ställning till följande påståenden.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>
                "Alla EU:s medlemsstater drivs i första hand i Europasamarbetet av
                egenintressen..."
              </strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Håller med:</strong> Det är naivt att tro något annat. Varje lands
                regering har som främsta uppgift att tillgodose sina egna medborgares
                intressen. Därför kämpar länderna för att få ut så mycket som möjligt av
                unionen, både ekonomiskt och politiskt. Exempel: Nettobetalare vill ha
                lägre avgifter, medan nettomottagare vill ha mer stöd.
              </li>
              <li>
                <strong>Håller inte med:</strong> Om det bara handlade om egoism skulle
                samarbetet inte fungera. Det finns en stark känsla av "europeisk
                solidaritet" och insikten om att EU är en "win-win"-situation. Att
                investera i fattigare regioner gynnar hela unionen på sikt genom ökad
                stabilitet och nya marknader. Samarbetet är en balans mellan egenintresse
                och gemensamma mål.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>
                "Det är viktigt att EU:s gamla medlemsstater visar ekonomisk solidaritet
                med de nya..."
              </strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Håller med:</strong> Detta är avgörande för att utjämna de enorma
                ekonomiska skillnaderna inom unionen. Utan solidaritet skulle de nya
                medlemmarna förbli fattiga och instabila, vilket i slutändan skadar alla.
                Investeringar i vägar, järnvägar och miljö i Östeuropa skapar tillväxt och
                nya marknader som gynnar hela EU. Det är en investering i framtiden.
              </li>
              <li>
                <strong>Håller inte med:</strong> Solidaritet är viktigt, men det får inte
                gå till överdrift. Det finns risk för att de gamla länderna, som ofta är
                nettobetalare, tröttnar på att betala för andras misstag eller korruption.
                Stödet måste vara villkorat av att de nya länderna genomför reformer och
                skapar sunda ekonomier.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>
                "Det är främst politiker, högutbildade och storföretagare som gynnas av
                ett EU-medlemskap."
              </strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Håller med:</strong> Det finns en viss sanning i detta. Politiker
                får en större politisk scen. Högutbildade drar nytta av Erasmusstudier och
                möjligheten att arbeta i hela Europa. Storföretag har resurser att hantera
                EU:s regelverk och dra nytta av den stora marknaden.
              </li>
              <li>
                <strong>Håller inte med:</strong> Detta är en alltför snäv bild. EU gynnar
                även vanliga medborgare på många sätt: lägre priser på mat och elektronik,
                konsumenträttigheter, slopade roamingavgifter, möjlighet att resa fritt,
                och gemensamma miljöregler som förbättrar luft- och vattenkvalitet. Även
                arbetstagare skyddas av minimikrav på arbetsmiljö och arbetstider.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>
                "En gemensam europeisk valuta gör det lättare för människor som reser
                mycket inom Europa."
              </strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Håller med:</strong> Detta är uppenbart. Att inte behöva växla
                pengar när man reser mellan euroländer sparar både tid, pengar (inget
                växlingspåslag) och krångel. Det underlättar även för pensionärer som bor
                i olika länder och för affärsresenärer.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>
                "En gemensam valuta medför nya kontakter mellan européer."
              </strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Håller med:</strong> Direkt medför valutan i sig inte nya
                kontakter, men den är en symbol för och underlättar fördjupad integration.
                När priser är jämförbara och resandet blir enklare, ökar den ekonomiska
                och sociala interaktionen, vilket i förlängningen leder till nya kontakter
                mellan människor, företag och organisationer i olika länder.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>
                "En gemensam valuta kommer på sikt att tvinga fram en gemensam
                finanspolitik."
              </strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Håller med:</strong> Detta är en av de största utmaningarna för
                EMU. Att ha en gemensam penningpolitik (ränta) men olika finanspolitik
                (budgetar, skatter) skapar en inneboende spänning. För att EMU ska
                överleva på lång sikt krävs troligen en närmare samordning av skatter och
                offentliga utgifter, i praktiken en gemensam finanspolitik, för att
                förhindra obalanser som den i Grekland. Många experter ser detta som en
                oundviklig utveckling.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"EU bör på sikt bli en federation lik USA."</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Håller med:</strong> En federation skulle ge EU den styrka och
                enhetlighet som krävs för att hantera globala utmaningar som Kina, USA och
                klimatkrisen. Det skulle innebära en gemensam utrikes-, försvars- och
                finanspolitik.
              </li>
              <li>
                <strong>Håller inte med:</strong> EU består av länder med djupt rotade
                nationella identiteter, kulturer och språk. En "superstat" i amerikansk
                stil är varken önskvärd eller realistisk. Majoriteten av européerna vill
                inte avstå från sin nationella identitet. EU bör förbli en union av
                suveräna stater som samarbetar där det är nödvändigt, inte en ny
                federation.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>
                "Att bevara freden i Europa är fortfarande den viktigaste uppgiften för
                EU-samarbetet."
              </strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Håller med:</strong> Kriget i Ukraina har påmint oss om att fred
                inte är en självklarhet. EU skapades för att göra krig "omöjligt" mellan
                medlemsstaterna. Att säkerställa en fredlig och stabil kontinent är själva
                grundfundamentet och det viktigaste syftet som fortfarande är relevant.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>
                "Utvidgningen av EU kommer förr eller senare i konflikt med fördjupningen
                av samarbetet."
              </strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Håller med:</strong> Detta är en klassisk spänning. Fler medlemmar
                gör det svårare att fatta enhälliga beslut och kräver mer resurser från
                EU:s budget för att utjämna skillnader. Samtidigt kan den ökade mångfalden
                av intressen göra det svårare att fördjupa samarbetet på känsliga områden
                som försvar och skatter. Det är en svår balansgång.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"Det är hög tid att folkomrösta en gång till om euron."</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Håller med:</strong> Läget har förändrats sedan 2003. Den svenska
                kronans kurs har varit svag, och euron kanske nu är ett mer stabilt
                alternativ. EU:s kriser och nya regelverk kan ha ändrat förutsättningarna.
                Frågan är viktig nog för en ny omröstning.
              </li>
              <li>
                <strong>Håller inte med:</strong> En folkomröstning skulle skapa osäkerhet
                och dela landet. Det finns ingen stark opinion för euron just nu, och
                riskerna med att förlora den penningpolitiska kontrollen är uppenbara. Det
                är bättre att avvakta och se hur EMU utvecklas.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>
                "Med tanke på att hela 27 stater ingår i EU-samarbetet fungerar det ändå
                ganska bra."
              </strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Håller med:</strong> Trots alla utmaningar (kriser, migrationsstråk,
                Brexit, Ukraina-krig) fungerar EU:s institutioner. Den inre marknaden
                fungerar, beslutsprocesserna är etablerade, och EU är en global aktör. Att
                27 länder med så olika historia och kultur kan samarbeta är i sig en enorm
                framgång.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"EU behöver samordna sin försvarspolitik än mer."</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Håller med:</strong> Kriget i Ukraina har visat att EU inte kan
                förlita sig på USA för sin säkerhet. Ett starkare och mer samordnat
                europeiskt försvar skulle öka den europeiska självständigheten, göra
                försvaret mer effektivt och skicka en signal om enighet till omvärlden.
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
            <span className={classes.keyword}>Brexit:</span> En sammandragning av
            "British exit", som syftar på Storbritanniens utträde ur Europeiska unionen
            (EU), vilket formellt genomfördes den 31 januari 2020.
          </li>
          <li>
            <span className={classes.keyword}>Coreper:</span> Står för{" "}
            <em>Comité des représentants permanents</em> (Kommittén för de ständiga
            representanterna). Det är en grupp av medlemsländernas ambassadörer till EU
            som förbereder och samordnar arbetet inför ministerrådets möten.
          </li>
          <li>
            <span className={classes.keyword}>Direktiven:</span> En av de två
            huvudsakliga typerna av rättsakter i EU (den andra är förordningar). Ett
            direktiv är <strong>bindande</strong> för medlemsstaterna när det gäller det{" "}
            <strong>resultat</strong> som ska uppnås, men det överlåter åt varje
            medlemsstat att själv bestämma <strong>formen och medlen</strong> för att nå
            målet, dvs. hur det ska införlivas i nationell lag.
          </li>
          <li>
            <span className={classes.keyword}>Dubbel majoritet:</span> Ett röstsystem i
            Ministerrådet där ett beslut kräver stöd från en majoritet av
            medlemsländerna (minst 55%) som samtidigt representerar en majoritet av EU:s
            befolkning (minst 65%). Detta ersätter det tidigare viktningssystemet och
            syftar till att ge större legitimitet åt beslut.
          </li>
          <li>
            <span className={classes.keyword}>Dublin-förordningen:</span> En
            EU-förordning som fastställer vilket medlemsland som är ansvarigt för att
            pröva en asylansökan. Huvudregeln är att ansvaret ligger hos det första
            EU-land som den asylsökande anländer till.
          </li>
          <li>
            <span className={classes.keyword}>ECB-rådet:</span> Europeiska centralbankens
            högsta beslutande organ. Består av direktionen och cheferna för de nationella
            centralbankerna i euroländerna. Bestämmer över penningpolitiken i
            euroområdet.
          </li>
          <li>
            <span className={classes.keyword}>EMU:</span> Ekonomiska och monetära
            unionen. Detta är samarbetet kring en gemensam valuta (euron) och en
            samordnad ekonomisk politik inom EU.
          </li>
          <li>
            <span className={classes.keyword}>EU-domstolen:</span> En av EU:s
            huvudinstitutioner. Dess uppgift är att tolka EU:s lagar och säkerställa att
            de tillämpas på ett enhetligt sätt i alla medlemsländer. Den prövar tvister
            mellan medlemsstater, EU-institutioner och företag/individer.
          </li>
          <li>
            <span className={classes.keyword}>Eurogruppen:</span> Ett informellt möte för
            ekonomiministrar från de länder som har euron som valuta. De diskuterar och
            samordnar frågor som rör euroområdets ekonomi.
          </li>
          <li>
            <span className={classes.keyword}>Europadomstolen:</span>{" "}
            <strong>OBS:</strong> Detta är en vanlig missuppfattning! Europadomstolen
            (Europadomstolen för de mänskliga rättigheterna) är <strong>inte</strong> en
            EU-institution. Den är knuten till Europarådet (en helt annan organisation)
            och prövar fall om kränkningar av Europakonventionen om mänskliga rättigheter.
          </li>
          <li>
            <span className={classes.keyword}>Europaparlamentet:</span> EU:s enda
            direktvalda institution, där ledamöterna väljs av EU:s medborgare vart femte
            år. Dess huvudsakliga uppgifter är att dela lagstiftningsmakten med
            Ministerrådet, anta EU:s budget och utöva demokratisk kontroll över
            kommissionen.
          </li>
          <li>
            <span className={classes.keyword}>Europeiska rådet:</span> Toppmötet där
            medlemsländernas stats- och regeringschefer träffas, tillsammans med
            kommissionens ordförande. Det anger den politiska inriktningen och
            prioriteringarna för EU, men antar inte lagstiftning.
          </li>
          <li>
            <span className={classes.keyword}>Fit for 55:</span> Ett lagstiftningspaket
            som EU-kommissionen lagt fram för att minska EU:s nettoutsläpp av
            växthusgaser med minst 55% till 2030 (jämfört med 1990 års nivåer), vilket är
            ett steg mot att bli klimatneutralt 2050.
          </li>
          <li>
            <span className={classes.keyword}>Inre marknaden:</span> Det centrala i
            EU-samarbetet. Ett område utan inre gränser där de{" "}
            <strong>"fyra friheterna"</strong> (fri rörlighet för varor, personer,
            tjänster och kapital) garanteras.
          </li>
          <li>
            <span className={classes.keyword}>Kommissionen:</span> EU:s verkställande
            organ, ofta kallad "EU:s regering". Dess huvuduppgifter är att lägga fram
            lagförslag, övervaka att EU-lagarna följs och förvalta EU:s budget.
          </li>
          <li>
            <span className={classes.keyword}>Konvergenskriterier:</span> De fem
            ekonomiska villkor som ett EU-land måste uppfylla för att få införa euron. De
            rör prisstabilitet, räntor, växelkursstabilitet, budgetunderskott och
            statsskuld.
          </li>
          <li>
            <span className={classes.keyword}>Lissabonfördraget:</span> Det fördrag som
            undertecknades 2007 och trädde i kraft 2009. Det är det senaste stora
            fördraget som reformerade EU:s institutioner och beslutsprocesser. Innehåller
            bl.a. <strong>artikel 50</strong> om utträde ur EU.
          </li>
          <li>
            <span className={classes.keyword}>Lobbygrupp:</span> En organisation, ofta
            med ekonomiska intressen, som försöker påverka politiska beslut och
            lagstiftning. De agerar som en länk mellan näringsliv, intresseorganisationer
            och beslutsfattare.
          </li>
          <li>
            <span className={classes.keyword}>Maastrichtfördraget:</span> Det fördrag som
            undertecknades 1992 och som skapade Europeiska unionen (EU). Det lade
            grunden för EMU, euron och det utökade samarbetet inom utrikes- och
            inrikespolitik.
          </li>
          <li>
            <span className={classes.keyword}>Mellanstatliga beslut:</span> Beslut som
            fattas av medlemsstaternas regeringar (inte av EU-institutionerna) och som
            kräver <strong>enhällighet</strong>. Varje land har därmed vetorätt. Gäller
            känsliga områden som utrikes-, försvars- och skattepolitik.
          </li>
          <li>
            <span className={classes.keyword}>Ministerrådet:</span> EU:s främsta
            beslutsfattande organ, där ministrar från medlemsländerna sammanträder
            beroende på fråga. Tillsammans med Europaparlamentet antar det lagar och
            samordnar medlemsstaternas politik.
          </li>
          <li>
            <span className={classes.keyword}>Romfördraget:</span> Det fördrag som
            undertecknades 1957 och som skapade Europeiska ekonomiska gemenskapen (EEC)
            och Euratom. Det lade grunden för tullunionen och det ekonomiska samarbetet.
          </li>
          <li>
            <span className={classes.keyword}>Schengensamarbetet:</span> Samarbetet som
            innebär att de interna gränskontrollerna mellan de deltagande länderna är
            avskaffade, vilket skapar ett område med fri rörlighet för personer.
          </li>
          <li>
            <span className={classes.keyword}>Schumanplanen:</span> Den plan som den
            franske utrikesministern Robert Schuman lade fram 1950 om att lägga
            Frankrikes och Västtysklands kol- och stålproduktion under gemensam kontroll.
            Detta anses vara starten på det europeiska samarbetet.
          </li>
          <li>
            <span className={classes.keyword}>Stabilitets- och tillväxtpakten:</span> En
            uppsättning regler som begränsar medlemsländernas budgetunderskott och
            statsskuld (max 3% respektive 60% av BNP) för att säkra stabiliteten i EMU.
          </li>
          <li>
            <span className={classes.keyword}>Utsläppsrätter:</span> En handelsvara inom
            EU:s system för handel med utsläpp. En utsläppsrätt ger innehavaren tillstånd
            att släppa ut ett ton koldioxid eller motsvarande mängd av en annan
            växthusgas.
          </li>
          <li>
            <span className={classes.keyword}>Överstatliga beslut:</span> Beslut som
            fattas av EU:s institutioner och som är bindande för alla medlemsländer, även
            de som röstade emot. Detta är möjligt inom områden där medlemsländerna
            överlåtit sin beslutanderätt, och besluten kräver majoritet, inte enhällighet.
          </li>
        </ul>
      </section>
    </div>
  );
}