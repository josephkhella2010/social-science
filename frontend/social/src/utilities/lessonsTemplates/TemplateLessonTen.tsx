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

export default function TemplateLessonTen() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>KAPITEL 10: VARDAGSLIVETS EKONOMI OCH JURIDIK</h1>
      <p className={classes.subtitle}>
        Fullständig sammanfattning med frågor, analys, diskussion och nyckelord
      </p>

      {/* ===== 1. EN EKONOMI I BALANS ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. EN EKONOMI I BALANS</h2>
        <p className={classes.paragraph}>
          Detta avsnitt handlar om grunderna i privatekonomi – hur du som individ planerar,
          prioriterar och hanterar dina pengar i vardagen. En ekonomi i balans ger dig större
          motståndskraft vid oförutsedda händelser.
        </p>

        <h3 className={classes.subHeading}>Inkomster och utgifter</h3>
        <ul className={classes.list}>
          <li>
            <strong>Bruttolön:</strong> Lönen <strong>innan</strong> skatt.
          </li>
          <li>
            <strong>Nettolön:</strong> Lönen <strong>efter</strong> skatt – det du får utbetalt.
          </li>
          <li>
            <strong>Disponibel inkomst:</strong> Nettolön + eventuella bidrag (t.ex. studiebidrag,
            bostadstillägg). Det är de pengar du har att röra dig med.
          </li>
          <li>
            <strong>Fasta utgifter:</strong> Kostnader som är konstanta och återkommer varje månad,
            t.ex. boende, abonnemang, försäkringar och avbetalningar på lån.
          </li>
          <li>
            <strong>Rörliga utgifter:</strong> Varierar beroende på vanor och livsstil, t.ex. mat,
            nöjen, kläder, hygien, presenter och oförutsedda utgifter.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Budget</h3>
        <ul className={classes.list}>
          <li>
            En <strong>budget</strong> är en plan för dina inkomster och utgifter under en viss period.
          </li>
          <li>
            <strong>Syfte:</strong> Skapa kontroll över ekonomin, hjälpa dig att prioritera och
            uppnå mål (t.ex. betala av skulder eller spara).
          </li>
          <li>
            Kan göras med papper och penna eller med hjälp av appar.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Att spara för framtiden</h3>
        <ul className={classes.list}>
          <li>
            <strong>Buffert:</strong> En "ekonomisk krockkudde" för oförutsedda utgifter (t.ex.
            trasig dator, bilreparation, tandläkarräkning). Pengarna bör finnas <strong>lättillgängliga</strong>
            på ett sparkonto.
          </li>
          <li>
            <strong>Aktier:</strong> Du köper en andel av ett företag. Värdet stiger eller sjunker
            med företagets framgång. <strong>Hög risk</strong>.
          </li>
          <li>
            <strong>Fonder:</strong> En blandning av aktier och andra värdepapper från olika företag.
            Sprider risken – <strong>lägre risk</strong> än enskilda aktier.
          </li>
        </ul>
      </section>

      {/* ===== 2. SKULDER OCH LÅN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. SKULDER OCH LÅN</h2>
        <p className={classes.paragraph}>
          Lån kan vara nödvändiga för större inköp, men kan också leda till skuldsättning och
          ekonomisk stress. Detta avsnitt förklarar viktiga begrepp och olika typer av lån.
        </p>

        <h3 className={classes.subHeading}>Grundläggande begrepp</h3>
        <ul className={classes.list}>
          <li>
            <strong>Amortering:</strong> Avbetalning på lånet. Lånebeloppet minskar successivt.
          </li>
          <li>
            <strong>Ränta:</strong> Kostnaden för att låna pengar, beräknad som en procentandel
            av lånebeloppet.
          </li>
          <li>
            <strong>Effektiv ränta:</strong> Den totala kostnaden för lånet, inklusive ränta och
            administrativa avgifter.
          </li>
          <li>
            <strong>Bunden ränta:</strong> Räntan är fast under en viss period (t.ex. 3 eller 5 år).
          </li>
          <li>
            <strong>Rörlig ränta:</strong> Räntan följer marknadsräntorna och justeras vanligen
            var tredje månad.
          </li>
          <li>
            <strong>Kreditupplysning:</strong> En ekonomisk kontroll som långivaren gör för att
            säkerställa att du kan betala tillbaka lånet.
          </li>
          <li>
            <strong>Säkerhet:</strong> Tillgångar som kan tas i anspråk om du inte kan betala
            tillbaka lånet (t.ex. bostaden vid ett bostadslån).
          </li>
          <li>
            <strong>Borgen:</strong> En annan person tar på sig betalningsansvaret om du inte kan
            betala.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Studielån (CSN)</h3>
        <ul className={classes.list}>
          <li>
            Den som studerar har rätt att söka <strong>bidrag och lån</strong> från CSN.
          </li>
          <li>
            <strong>Fördelar:</strong> Låg ränta (ca 2% 2025), lång amorteringstid (25 år),
            ingen kreditupplysning.
          </li>
          <li>
            <strong>Belopp 2025:</strong> 9 408 kr i lån + 4 092 kr i bidrag per månad för heltidsstudier.
          </li>
          <li>
            Ses som en <strong>god investering</strong> eftersom utbildning kan leda till högre lön.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Bostadslån</h3>
        <ul className={classes.list}>
          <li>
            Tas för att köpa lägenhet eller hus. Oftast det <strong>största lånet</strong> i livet.
          </li>
          <li>
            <strong>Säkerhet:</strong> Bostaden utgör säkerhet – banken kan sälja den om du inte
            kan betala.
          </li>
          <li>
            <strong>Belåningsgrad:</strong> Du kan låna upp till <strong>85%</strong> av bostadens
            värde. Resterande 15% måste du betala själv som <strong>kontantinsats</strong>.
          </li>
          <li>
            <strong>Amorteringskrav:</strong> Om lånet är mer än 50% av bostadens värde måste du
            amortera.
          </li>
          <li>
            <strong>Ränta:</strong> Kan vara bunden eller rörlig. Många väljer en kombination för
            att sprida risken.
          </li>
          <li>
            <strong>Räntekänslighet:</strong> Höjda räntor (som under 2022–2023) kan göra det
            svårt att klara kostnaderna.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Konsumtionslån</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Mindre lån för att finansiera konsumtion. Kallas också
            konsumentkrediter, privatlån, snabblån, sms-lån och blancolån.
          </li>
          <li>
            <strong>Kännetecken:</strong> Ofta <strong>ingen säkerhet</strong> men i gengäld
            <strong>höga räntor och avgifter</strong>.
          </li>
          <li>
            <strong>Exempel:</strong> Delbetalningar, avbetalningar och köp mot faktura.
          </li>
          <li>
            <strong>Risker:</strong> Ökad skuldsättning, särskilt bland unga som är nya inom
            privatekonomi. Erbjudanden som "lån utan kreditprövning" kan vara svåra att motstå.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Indrivning av skulder</h3>
        <ul className={classes.list}>
          <li>
            <strong>Steg 1 – Betalningspåminnelse:</strong> Företaget skickar en påminnelse med
            påminnelseavgift och dröjsmålsränta.
          </li>
          <li>
            <strong>Steg 2 – Inkasso:</strong> Ärendet skickas till ett inkassoföretag som driver
            in skulden. Ytterligare räntor och avgifter tillkommer.
          </li>
          <li>
            <strong>Steg 3 – Kronofogden:</strong> Myndigheten kontrollerar skulden och påbörjar
            indrivning. Det kan innebära löneutmätning eller att du tvingas lämna ifrån dig
            ägodelar eller banktillgångar.
          </li>
          <li>
            <strong>Steg 4 – Betalningsanmärkning:</strong> Notering i ett register som ligger
            kvar i <strong>tre år</strong>. Påverkar möjligheten att teckna abonnemang, hyra
            bostad m.m.
          </li>
          <li>
            <strong>Steg 5 – Skuldsanering:</strong> En avbetalningsplan hos Kronofogden som
            innebär att du blir skuldfri efter ett visst antal år. Under tiden måste du leva på
            <strong>existensminimum</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Skulder som samhällsproblem</h3>
        <ul className={classes.list}>
          <li>
            Vid årskiftet 2023/2024 hade <strong>över 400 000 svenskar</strong> en skuld hos
            Kronofogden – var tjugonde vuxen.
          </li>
          <li>
            <strong>Vanliga orsaker:</strong> Arbetslöshet, sjukdom, skilsmässa, inflation och
            höga räntor.
          </li>
          <li>
            <strong>Konsekvenser:</strong> Starkt samband mellan skulder och <strong>psykisk
            ohälsa</strong>. Därför är skulder inte bara en individfråga utan även ett
            samhällsproblem.
          </li>
          <li>
            <strong>Hjälp:</strong> Budget- och skuldrådgivning finns i varje kommun.
            Kronofogden kan hjälpa till med skuldsanering.
          </li>
        </ul>
      </section>

      {/* ===== 3. ATT BO ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. ATT BO</h2>
        <p className={classes.paragraph}>
          Detta avsnitt behandlar olika boendeformer, skillnader mellan att äga och hyra, samt
          juridiska aspekter av att bo med en partner.
        </p>

        <h3 className={classes.subHeading}>Boendeformer</h3>
        <ul className={classes.list}>
          <li>
            <strong>Hyresrätt:</strong> Du hyr en bostad av en hyresvärd. Inget köp – du betalar
            hyra varje månad.
          </li>
          <li>
            <strong>Bostadsrätt:</strong> Du köper <strong>rätten</strong> att bo i lägenheten
            genom att köpa en andel i en bostadsrättsförening. Betalar månadsavgift till
            föreningen.
          </li>
          <li>
            <strong>Villa/äganderätt:</strong> Du äger själva fastigheten. Du ansvarar själv för
            underhåll, reparationer och alla kostnader.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Hyra i andra hand</h3>
        <ul className={classes.list}>
          <li>
            <strong>Tillstånd:</strong> Kontrollera att den som hyr ut har tillstånd från
            hyresvärden eller bostadsrättsföreningen. Annars riskerar ni båda att bli vräkta.
          </li>
          <li>
            <strong>Skriftligt kontrakt:</strong> Se till att få ett skriftligt hyreskontrakt,
            även om du hyr av en kompis eller släkting.
          </li>
          <li>
            <strong>Skälig hyra:</strong> För en hyreslägenhet får hyresvärden lägga på max
            <strong>10–15%</strong> om den är möblerad. Är den omöblerad får ingen avgift läggas
            på. Vid ockerhyra kan du anmäla till Hyresnämnden.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Hemförsäkring</h3>
        <ul className={classes.list}>
          <li>
            <strong>Viktigt:</strong> Skyddar vid brand, inbrott, vattenläckor och andra
            oväntade händelser.
          </li>
          <li>
            Utan hemförsäkring riskerar du att hamna i en mycket utsatt situation.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Att vara sambo</h3>
        <ul className={classes.list}>
          <li>
            <strong>Sambolagen (1980):</strong> Tillkom för att skydda den svagare parten i
            samboförhållanden.
          </li>
          <li>
            <strong>Könneutral:</strong> Gäller både homo- och heterosexuella par (sedan 2003).
          </li>
          <li>
            <strong>Gäller endast kärleksrelationer:</strong> Vänner eller släktingar som delar
            boende räknas inte som sambor juridiskt.
          </li>
          <li>
            <strong>Grundregel vid separation:</strong> Bostad, möbler och husgeråd som
            införskaffats för <strong>gemensamt bruk</strong> delas lika – oavsett vem som
            betalade. Detta gäller efter att ni bott ihop i ungefär <strong>sex månader</strong>.
          </li>
          <li>
            <strong>Samboavtal:</strong> Kan skrivas för att göra undantag från sambolagen,
            t.ex. om en part har lagt in mycket pengar i bostaden.
          </li>
          <li>
            <strong>OBS!</strong> Sambor ärver <strong>inte</strong> varandra – testamente krävs.
            För gemensam vårdnad av barn måste faderskapet fastställas hos socialnämnden.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Förlovning</h3>
        <ul className={classes.list}>
          <li>
            Har <strong>ingen juridisk betydelse</strong> längre – endast ett personligt beslut.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Äktenskap</h3>
        <ul className={classes.list}>
          <li>
            <strong>Giftorätt:</strong> Makar har som huvudregel rätt till hälften av varandras
            egendom vid en skilsmässa (<strong>giftorättsgemenskap</strong>).
          </li>
          <li>
            <strong>Undantag:</strong> <strong>Ensamboende</strong> – egendom som den ena maken
            äger sedan tidigare och som inte ska ingå i bodelningen.
          </li>
          <li>
            <strong>Äktenskapsförord:</strong> Kan skrivas för att göra undantag från
            giftorättsgemenskapen.
          </li>
          <li>
            <strong>Ärvd rätt:</strong> Makar ärver varandra som huvudregel. Särkullbarn (barn
            från tidigare förhållande) har dock rätt till sitt arv direkt.
          </li>
          <li>
            <strong>Vårdnad:</strong> Gifta föräldrar har <strong>automatiskt gemensam
            vårdnad</strong> om barnet.
          </li>
          <li>
            <strong>Skillnad mot sambo:</strong> Äktenskap ger starkare juridiskt skydd vid
            dödsfall och barn, samt automatiskt gemensam vårdnad.
          </li>
        </ul>
      </section>

      {/* ===== 4. LIVET SOM KONSUMENT ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. LIVET SOM KONSUMENT</h2>
        <p className={classes.paragraph}>
          Detta avsnitt handlar om dina rättigheter som konsument och hur du kan konsumera på ett
          mer hållbart sätt.
        </p>

        <h3 className={classes.subHeading}>Konsumenträtt</h3>
        <ul className={classes.list}>
          <li>
            <strong>Konsumentköplagen:</strong> Gäller vid köp av <strong>varor</strong>.
          </li>
          <li>
            <strong>Konsumenttjänstlagen:</strong> Gäller vid köp av <strong>tjänster</strong>.
          </li>
          <li>
            <strong>Reklamation:</strong> Du har rätt att reklamera en vara eller tjänst som
            inte håller vad den lovar.
          </li>
          <li>
            <strong>Reklamationstid:</strong> Upp till <strong>tre år</strong>. Du måste påtala
            felet i <strong>skälig tid</strong> efter att det upptäckts.
          </li>
          <li>
            <strong>Garanti:</strong> Frivilligt för företag, men bindande om de erbjuder det.
            Garantin ersätter inte reklamationstiden på tre år.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Ångerrätt vid distansköp</h3>
        <ul className={classes.list}>
          <li>
            Vid köp via <strong>internet</strong> eller <strong>telefon</strong> har du
            <strong>14 dagars ångerrätt</strong> enligt lagen om distansavtal.
          </li>
          <li>
            Gäller även digitala produkter och abonnemang så länge de inte börjat användas.
          </li>
          <li>
            <strong>Ingen ångerrätt</strong> vid köp i fysisk butik – men många butiker erbjuder
            <strong>öppet köp</strong> eller <strong>bytesrätt</strong> frivilligt.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Skydd mot vilseledande reklam</h3>
        <ul className={classes.list}>
          <li>
            <strong>Marknadsföringslagen:</strong> Skyddar mot vilseledande reklam. Man får inte
            påstå något utan belägg.
          </li>
          <li>
            <strong>Greenwashing:</strong> Att framställa en produkt som mer miljövänlig än den
            är – förbjudet.
          </li>
          <li>
            <strong>Lockpriser:</strong> Förbjudet att använda lockpriser om man inte har
            produkten i lager i tillräcklig mängd.
          </li>
          <li>
            <strong>Influencers:</strong> Måste tydligt märka sponsrade inlägg.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Rätt till hjälp vid tvister</h3>
        <ul className={classes.list}>
          <li>
            <strong>ARN (Allmänna Reklamationsnämnden):</strong> Kan pröva tvister mellan
            konsumenter och företag. Beslut är <strong>inte bindande</strong>, men seriösa
            företag följer ARN:s rekommendationer.
          </li>
          <li>
            <strong>Konsumentverket:</strong> Ger vägledning och information.
          </li>
          <li>
            <strong>Kommunens konsumentvägledare:</strong> Kan hjälpa dig med råd och stöd.
          </li>
        </ul>

        <h3 className={classes.subHeading}>En hållbar konsumtion</h3>
        <ul className={classes.list}>
          <li>
            <strong>Överkonsumtion:</strong> Vi i västvärlden köper betydligt mer än vad vi
            behöver och vad som är klimatmässigt hållbart.
          </li>
          <li>
            Om alla skulle konsumera som Sverige skulle det behövas <strong>4,2 jordklot</strong>.
          </li>
          <li>
            <strong>Livsmedel:</strong> En stor del av hushållens klimatpåverkan kommer från mat.
            Djuruppfödning kräver stora mängder mark, vatten och energi.
          </li>
          <li>
            <strong>Tips för hållbar konsumtion:</strong> Köp mindre, välj miljömärkta produkter,
            ät mindre kött, reparera istället för att slänga, handla second hand.
          </li>
        </ul>
      </section>

      {/* ===== 5. FRÅGOR TILL TEXTEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. FRÅGOR TILL TEXTEN</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            1. Vad är skillnaden mellan bruttolön och nettolön?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Bruttolön</strong> är lönen <strong>innan</strong> skatt har dragits av.
              <strong>Nettolön</strong> är lönen <strong>efter</strong> att skatten har dragits
              av – alltså det belopp som du faktiskt får utbetalt till ditt bankkonto.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. Vad är skillnaden mellan fasta och rörliga utgifter? Ge exempel på båda.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Fasta utgifter</strong> är kostnader som är konstanta och återkommer
                varje månad. <strong>Exempel:</strong> Boende (hyra/avgift), abonnemang (telefon,
                streaming), försäkringar och avbetalningar på lån.
              </li>
              <li>
                <strong>Rörliga utgifter</strong> varierar beroende på dina vanor och livsstil.
                <strong>Exempel:</strong> Mat, nöjen, kläder, hygien, presenter och oförutsedda
                utgifter.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>3. Vad är en budget och vad är syftet med den?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En <strong>budget</strong> är en plan för dina inkomster och utgifter under en
              viss period (t.ex. en månad). Syftet är att:
            </p>
            <ul className={classes.list}>
              <li>Skapa <strong>kontroll</strong> över din ekonomi.</li>
              <li>Hjälpa dig att <strong>prioritera</strong> bland dina utgifter.</li>
              <li>Identifiera om du lägger orimligt mycket pengar på någon viss utgift.</li>
              <li>Hjälpa dig att uppnå mål, t.ex. att betala av en skuld eller spara till något.</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. Varför är det bra att ha en buffert och hur mycket bör man spara?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En <strong>buffert</strong> är en "ekonomisk krockkudde" som skyddar dig vid
              oförutsedda utgifter som t.ex. att datorn går sönder, bilen behöver repareras
              eller att du får en oväntad tandläkarräkning.
            </p>
            <p className={classes.paragraph}>
              Man bör spara så mycket att man klarar <strong>några månaders utgifter</strong>.
              Pengarna bör finnas <strong>lättillgängliga</strong> på ett sparkonto, inte
              bundna i aktier eller fonder där de kan förlora i värde när du behöver dem.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>5. Vad är skillnaden mellan aktier och fonder?</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Aktier:</strong> Du köper en <strong>andel</strong> av ett specifikt
                företag. Värdet följer företagets framgång. <strong>Hög risk</strong> – om
                företaget går dåligt kan du förlora pengar.
              </li>
              <li>
                <strong>Fonder:</strong> En <strong>blandning</strong> av aktier och andra
                värdepapper från <strong>många olika företag</strong>. Riskerna <strong>sprids</strong>
                – om ett företag går dåligt kan ett annat kompensera. <strong>Lägre risk</strong> än
                enskilda aktier.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>6. Förklara begreppen amortering och ränta.</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Amortering:</strong> En <strong>avbetalning</strong> på själva lånebeloppet.
                När du amorterar minskar alltså din skuld successivt.
              </li>
              <li>
                <strong>Ränta:</strong> En <strong>kostnad</strong> som du betalar för att låna
                pengar. Räntan beräknas som en <strong>procentandel</strong> av det belopp du
                har lånat.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. Vad är skillnaden mellan bunden och rörlig ränta?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Bunden ränta:</strong> Räntan är <strong>fast</strong> under en viss
                period (t.ex. 3 eller 5 år). Du vet exakt vad din räntekostnad blir under
                hela perioden.
              </li>
              <li>
                <strong>Rörlig ränta:</strong> Räntan <strong>följer marknadsräntorna</strong>
                och justeras vanligen var tredje månad. Kostnaden kan både öka och minska över
                tid.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. Vad är skillnaden mellan studielån, bostadslån och konsumtionslån?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Studielån (CSN):</strong> Lågt ränta (2%), lång amorteringstid (25 år),
                ingen kreditprövning. Tas för att finansiera <strong>studier</strong>.
              </li>
              <li>
                <strong>Bostadslån:</strong> Största lånet i livet. Bostaden utgör <strong>säkerhet</strong>.
                Upp till 85% av bostadens värde. Krav på amortering vid hög belåning.
              </li>
              <li>
                <strong>Konsumtionslån:</strong> Mindre lån för att finansiera <strong>konsumtion</strong>.
                Ingen säkerhet, men i gengäld <strong>höga räntor och avgifter</strong>.
                Exempel: snabblån, sms-lån, delbetalningar.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. Hur går indrivningen av en skuld till steg för steg?
          </h3>
          <div className={classes.answer}>
            <ol className={classes.list}>
              <li>
                <strong>Betalningspåminnelse:</strong> Företaget skickar en påminnelse med
                påminnelseavgift och dröjsmålsränta.
              </li>
              <li>
                <strong>Inkasso:</strong> Ärendet skickas till ett inkassoföretag. Ytterligare
                räntor och avgifter tillkommer.
              </li>
              <li>
                <strong>Kronofogden:</strong> Myndigheten kontrollerar skulden och påbörjar
                indrivning (t.ex. löneutmätning eller utmätning av egendom).
              </li>
              <li>
                <strong>Betalningsanmärkning:</strong> Notering i register som ligger kvar i
                <strong>tre år</strong> och påverkar möjligheten att teckna abonnemang och
                hyra bostad.
              </li>
              <li>
                <strong>Skuldsanering:</strong> Avbetalningsplan hos Kronofogden – du blir
                skuldfri efter ett antal år, men måste leva på existensminimum under tiden.
              </li>
            </ol>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. Vad är en betalningsanmärkning och vilka konsekvenser får den?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              En <strong>betalningsanmärkning</strong> är en notering i ett register hos
              Kronofogden som visar att du har en skuld som inte blivit betald. Den ligger
              kvar i <strong>tre år</strong> och påverkar ditt liv på flera sätt:
            </p>
            <ul className={classes.list}>
              <li>Du kan <strong>stoppas</strong> från att teckna mobilabonnemang.</li>
              <li>Du kan ha svårt att <strong>hyra bostad</strong>.</li>
              <li>Du kan få svårt att <strong>ta lån</strong> (t.ex. bostadslån).</li>
              <li>Vissa arbetsgivare gör kreditkoller – du kan missa jobb.</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. Varför är skulder inte bara en individfråga utan även ett samhällsproblem?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Omfattning:</strong> Över 400 000 svenskar har skulder hos Kronofogden
                – var tjugonde vuxen.
              </li>
              <li>
                <strong>Barn drabbas:</strong> Var tolfte barn växer upp med en förälder som
                har skulder eller pågående skuldsanering.
              </li>
              <li>
                <strong>Psykisk ohälsa:</strong> Det finns ett starkt samband mellan skulder
                och psykisk ohälsa (ångest, depression).
              </li>
              <li>
                <strong>Samhällskostnader:</strong> Skulder leder till ökade kostnader för
                socialtjänst, sjukvård och rättsväsende.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>12. Vilka olika boendeformer finns det?</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Hyresrätt:</strong> Du hyr bostaden av en hyresvärd. Du betalar hyra
                varje månad men äger inte bostaden.
              </li>
              <li>
                <strong>Bostadsrätt:</strong> Du köper <strong>rätten</strong> att bo i
                lägenheten genom att köpa en andel i en bostadsrättsförening. Betalar
                månadsavgift till föreningen.
              </li>
              <li>
                <strong>Villa/äganderätt:</strong> Du äger <strong>själva fastigheten</strong>.
                Ansvarar själv för underhåll, reparationer och alla kostnader.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. Vad är viktigt att tänka på när man hyr i andra hand?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Tillstånd:</strong> Kontrollera att hyresvärden eller bostadsrättsföreningen
                har gett tillstånd. Annars riskerar ni båda att bli vräkta.
              </li>
              <li>
                <strong>Skriftligt kontrakt:</strong> Se till att få ett skriftligt hyreskontrakt
                för att undvika missförstånd.
              </li>
              <li>
                <strong>Skälig hyra:</strong> För en hyreslägenhet får hyresvärden lägga på max
                <strong>10–15%</strong> om den är möblerad. Är den omöblerad får ingen avgift
                läggas på.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>14. Vad säger sambolagen?</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Vem gäller den för?</strong> Par som bor tillsammans i ett
                <strong>kärleksförhållande</strong> (könneutral sedan 2003).
              </li>
              <li>
                <strong>Huvudregel:</strong> Bostad, möbler och husgeråd som införskaffats för
                <strong>gemensamt bruk</strong> delas <strong>lika</strong> vid en separation
                – oavsett vem som betalade. Detta gäller efter ca <strong>sex månader</strong>.
              </li>
              <li>
                <strong>Samboavtal:</strong> Kan skrivas för att göra undantag (t.ex. om en part
                lagt in mycket pengar i bostaden).
              </li>
              <li>
                <strong>OBS!</strong> Sambor ärver <strong>inte</strong> varandra – testamente
                krävs.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            15. Vilken är skillnaden mellan sambolagen och äktenskapslagstiftningen?
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Aspekt</th>
                    <th className={classes.th}>Sambo</th>
                    <th className={classes.th}>Gifta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>Bodelning vid separation</strong>
                    </td>
                    <td className={classes.td}>
                      Delas lika för gemensamt införskaffade saker (bostad, möbler, husgeråd).
                    </td>
                    <td className={classes.td}>
                      <strong>Giftorättsgemenskap:</strong> All egendom (utom ensamboende)
                      delas lika.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Arvsrätt</strong>
                    </td>
                    <td className={classes.td}>
                      Ärver <strong>inte</strong> varandra. Testamente krävs.
                    </td>
                    <td className={classes.td}>
                      Ärver <strong>varandra</strong> som huvudregel (särkullbarn har dock
                      förstahandsrätt).
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Vårdnad av barn</strong>
                    </td>
                    <td className={classes.td}>
                      Mamman har enskild vårdnad initialt. Gemensam vårdnad kräver
                      fastställande hos socialnämnden.
                    </td>
                    <td className={classes.td}>
                      <strong>Automatiskt gemensam vårdnad</strong>.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Avtal</strong>
                    </td>
                    <td className={classes.td}>
                      <strong>Samboavtal</strong> för undantag från sambolagen.
                    </td>
                    <td className={classes.td}>
                      <strong>Äktenskapsförord</strong> för undantag från giftorättsgemenskapen.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            16. Vad innebär giftorättsgemenskap och ensamboende?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Giftorättsgemenskap:</strong> Huvudregeln i äktenskapet. All egendom
                som makarna äger vid en skilsmässa ska som huvudregel <strong>delas lika</strong>
                mellan dem.
              </li>
              <li>
                <strong>Ensamboende:</strong> Egendom som den ena maken ägde <strong>innan</strong>
                äktenskapet och som inte är avsedd att ingå i bodelningen. Kan även vara egendom
                som den ena maken fått i gåva eller arv.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            17. Vilka lagar skyddar dig som konsument?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Konsumentköplagen:</strong> Skyddar dig vid köp av <strong>varor</strong>.
                Du har rätt att reklamera en vara som inte håller måttet.
              </li>
              <li>
                <strong>Konsumenttjänstlagen:</strong> Skyddar dig vid köp av <strong>tjänster</strong>
                (t.ex. hantverk, frisör).
              </li>
              <li>
                <strong>Lagen om distansavtal:</strong> Ger dig <strong>14 dagars ångerrätt</strong>
                vid köp via internet eller telefon.
              </li>
              <li>
                <strong>Marknadsföringslagen:</strong> Skyddar dig mot <strong>vilseledande
                reklam</strong> (t.ex. greenwashing, lockpriser).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            18. Vad är skillnaden mellan reklamation och garanti?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Reklamation:</strong> Din <strong>lagstadgade rättighet</strong> enligt
                konsumentköplagen. Gäller i upp till <strong>tre år</strong> och innebär att du
                kan påtala ett fel på en vara eller tjänst.
              </li>
              <li>
                <strong>Garanti:</strong> Ett <strong>frivilligt</strong> åtagande från företaget
                att varan ska fungera under en viss tid. Är bindande om företaget erbjuder det,
                men ersätter <strong>inte</strong> reklamationstiden på tre år.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>19. Vad är ångerrätt och när gäller den?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Ångerrätt</strong> är rätten att ångra ett köp inom <strong>14 dagar</strong>.
              Den gäller vid:
            </p>
            <ul className={classes.list}>
              <li>Köp via <strong>internet</strong> (distansavtal).</li>
              <li>Köp via <strong>telefon</strong>.</li>
              <li>Köp av <strong>digitala produkter</strong> och abonnemang, så länge de inte
                börjat användas.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>OBS!</strong> Ingen ångerrätt vid köp i <strong>fysisk butik</strong>.
              Däremot erbjuder många butiker frivilligt <strong>öppet köp</strong> eller
              <strong>bytesrätt</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            20. Vad är greenwashing och varför är det förbjudet?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Greenwashing</strong> innebär att ett företag <strong>framställer en
              produkt som mer miljövänlig än den är</strong> för att locka kunder.
            </p>
            <p className={classes.paragraph}>
              Det är <strong>förbjudet</strong> enligt <strong>Marknadsföringslagen</strong>
              eftersom det är en form av <strong>vilseledande reklam</strong>. Företag får
              inte påstå att en produkt är miljövänlig utan att ha belägg för det.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            21. Vad kan du göra om du hamnar i en tvist med ett företag?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>ARN (Allmänna Reklamationsnämnden):</strong> Anmäl ärendet dit. De prövar
                tvisten kostnadsfritt. Beslut är <strong>inte bindande</strong> men seriösa
                företag brukar följa ARN:s rekommendationer.
              </li>
              <li>
                <strong>Konsumentverket:</strong> Kan ge vägledning och information om dina
                rättigheter.
              </li>
              <li>
                <strong>Kommunens konsumentvägledare:</strong> Kan ge personlig rådgivning.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            22. Varför är överkonsumtion ett problem ur klimatsynpunkt?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                Vi i västvärlden köper betydligt <strong>mer än vad vi behöver</strong> och vad
                som är klimatmässigt hållbart.
              </li>
              <li>
                Om alla skulle konsumera som Sverige skulle det behövas <strong>4,2 jordklot</strong>.
              </li>
              <li>
                <strong>Livsmedel</strong> står för en stor del av hushållens klimatpåverkan.
                Djuruppfödning kräver stora mängder mark, vatten och energi.
              </li>
              <li>
                <strong>Konsekvenser:</strong> Ökade utsläpp av växthusgaser, utarmning av
                naturresurser, förlust av biologisk mångfald.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            23. Ge exempel på hur man kan konsumera mer hållbart.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li><strong>Köp mindre:</strong> Tänk efter innan du köper – behöver du verkligen
                produkten?</li>
              <li><strong>Välj miljömärkta produkter:</strong> T.ex. KRAV, EU-ekologiskt,
                Svanenmärkt.</li>
              <li><strong>Ät mindre kött:</strong> Köttproduktion har hög klimatpåverkan.</li>
              <li><strong>Reparera istället för att slänga:</strong> Laga trasiga kläder och
                elektronik.</li>
              <li><strong>Handla second hand:</strong> Köp begagnade kläder, möbler och
                elektronik.</li>
              <li><strong>Undvik engångsprodukter:</strong> Använd återanvändbara alternativ.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 6. ANALYSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. ANALYSFRÅGOR</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. Jämför för- och nackdelar med att spara i aktier respektive fonder.
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Sparform</th>
                    <th className={classes.th}>Fördelar</th>
                    <th className={classes.th}>Nackdelar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>Aktier</strong>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li>Potentiellt <strong>hög avkastning</strong>.</li>
                        <li>Du äger en <strong>del av företaget</strong>.</li>
                        <li>Kan ge <strong>utdelning</strong>.</li>
                      </ul>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li><strong>Hög risk</strong> – värdet kan falla snabbt.</li>
                        <li>Kunskapskrävande – du måste <strong>analysera</strong> företag.</li>
                        <li><strong>Svårt att sprida risken</strong> med små belopp.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>Fonder</strong>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li><strong>Risk sprids</strong> över flera företag → lägre risk.</li>
                        <li><strong>Enkelt</strong> för nybörjare – fondförvaltaren sköter
                          analysen.</li>
                        <li>Passar för <strong>långsiktigt sparande</strong>.</li>
                      </ul>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li>Lägre potentiell avkastning än aktier.</li>
                        <li><strong>Avgifter</strong> för förvaltning.</li>
                        <li>Du har <strong>ingen direkt kontroll</strong> över vilka
                          företag som ingår.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> För den som är ny inom sparande och vill ha lägre risk
              är <strong>fonder</strong> ett bättre val. För den som har kunskap och är beredd
              att ta högre risk för potentiellt högre avkastning kan <strong>aktier</strong>
              vara ett alternativ. Många väljer en <strong>kombination</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. Varför är konsumtionslån särskilt problematiska för unga?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Oerfarenhet:</strong> Unga är nybörjare när det kommer till att hantera
                privatekonomi, räkningar och lån.
              </li>
              <li>
                <strong>Lättillgänglighet:</strong> Lån erbjuds via appar och internet med
                "pengarna på kontot inom en halvtimme".
              </li>
              <li>
                <strong>Otydlig information:</strong> Många förstår inte att "köp nu – betala sen"
                är ett lån med ränta och avgifter.
              </li>
              <li>
                <strong>Riktad reklam:</strong> Företag specialiserar sig på att nå grupper som
                har svårt att få lån på andra sätt.
              </li>
              <li>
                <strong>Höga kostnader:</strong> Konsumtionslån har ofta <strong>mycket höga
                räntor och avgifter</strong> (effektiv ränta kan överstiga 100%).
              </li>
              <li>
                <strong>Konsekvenser:</strong> Unga riskerar att hamna i en <strong>skuldspiral</strong>
                som kan leda till betalningsanmärkningar och psykisk ohälsa.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A3. Är det rimligt att studielånet är så förmånligt som det är?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Argument FÖR att studielånet är rimligt:</strong>
            </p>
            <ul className={classes.list}>
              <li>Utbildning är en <strong>samhällsinvestering</strong> – högre utbildning
                leder till högre skatteintäkter.</li>
              <li>Ger <strong>alla</strong> möjlighet att studera oavsett ekonomisk bakgrund.</li>
              <li>Låg ränta och lång amorteringstid gör att studenter <strong>inte börjar
                vuxenlivet med en ohållbar skuld</strong>.</li>
              <li>Jämfört med andra länder har Sverige ett av världens <strong>mest generösa
                studiesystem</strong>.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Argument EMOT att studielånet är för förmånligt:</strong>
            </p>
            <ul className={classes.list}>
              <li>Det är <strong>kostsamt</strong> för staten – pengar som kunde användas
                till annat.</li>
              <li>Vissa studerar <strong>längre än nödvändigt</strong> eftersom lånet är så
                förmånligt.</li>
              <li>Många studenter tar <strong>maximalt lån</strong> även om de inte behöver
                det, vilket ökar den totala skuldbördan i samhället.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> Studielånet är en viktig del av det svenska
              välfärdssystemet och möjliggör för många att utbilda sig. Samtidigt är det
              viktigt att studenter är <strong>medvetna</strong> om att det är ett lån som
              ska betalas tillbaka och att de inte lånar mer än nödvändigt.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A4. Vilka konsekvenser får en betalningsanmärkning för en ung persons framtid?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Boende:</strong> Svårt att <strong>hyra bostad</strong> – många
                hyresvärdar gör kreditkoller.
              </li>
              <li>
                <strong>Lån:</strong> Svårt att få <strong>lån</strong> (t.ex. bostadslån,
                studielån påverkas inte, men andra lån gör det).
              </li>
              <li>
                <strong>Abonnemang:</strong> Kan inte teckna <strong>mobilabonnemang</strong>
                eller andra avtal med betalningsansvar.
              </li>
              <li>
                <strong>Arbete:</strong> Vissa arbetsgivare gör <strong>kreditkoller</strong>
                – du kan missa jobb, särskilt inom ekonomi, bank eller säkerhetsklassade
                yrken.
              </li>
              <li>
                <strong>Psykisk ohälsa:</strong> Skulder och betalningsanmärkningar leder ofta
                till <strong>stress, ångest och depression</strong>.
              </li>
              <li>
                <strong>Långsiktiga konsekvenser:</strong> Anmärkningen ligger kvar i
                <strong>tre år</strong>, men kan påverka din <strong>ekonomiska ryktesvärd</strong>
                och framtida möjligheter under lång tid.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A5. Bör det införas hårdare regler för reklam för konsumtionslån?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Argument FÖR hårdare regler:</strong>
            </p>
            <ul className={classes.list}>
              <li>Skyddar <strong>unga och ekonomiskt utsatta</strong> som är särskilt
                mottagliga för denna typ av reklam.</li>
              <li>Minskar risken för <strong>överskuldsättning</strong> och dess negativa
                samhällskonsekvenser.</li>
              <li>Reklamen är ofta <strong>vilseledande</strong> – den får det att låta som
                att det är "gratis pengar" utan att tydligt visa de höga kostnaderna.</li>
              <li>Finansinspektionen har redan föreslagit <strong>hårdare regler</strong>
                för marknadsföring av krediter.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Argument EMOT hårdare regler:</strong>
            </p>
            <ul className={classes.list}>
              <li>Det är <strong>individens eget ansvar</strong> att inte ta lån man inte
                har råd med.</li>
              <li>Hårdare regler kan göra det <strong>svårare för seriösa företag</strong>
                att marknadsföra sig.</li>
              <li>Ett <strong>förbud</strong> kan driva verksamheten till <strong>oreglerade
                kanaler</strong> och göra problemet värre.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> Det finns starka skäl för hårdare reglering, särskilt
              med tanke på den ökande skuldsättningen bland unga. Ett <strong>tydligare
              informationskrav</strong> – där den effektiva räntan och totala kostnaden
              måste framgå tydligt – skulle vara en rimlig åtgärd. Att helt förbjuda reklam
              för konsumtionslån kan dock vara svårt att genomföra.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 7. DISKUSSIONSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. DISKUSSIONSFRÅGOR</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. Är det bättre att hyra eller äga sin bostad?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Argument FÖR att hyra:</strong>
            </p>
            <ul className={classes.list}>
              <li><strong>Flexibilitet:</strong> Lättare att flytta – du är inte bunden till
                en bostad.</li>
              <li><strong>Inget underhållsansvar:</strong> Hyresvärden ansvarar för
                reparationer och underhåll.</li>
              <li><strong>Lägre initial kostnad:</strong> Ingen kontantinsats krävs.</li>
              <li><strong>Mindre risk:</strong> Du påverkas inte av värdeminskning på
                bostadsmarknaden.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Argument FÖR att äga (bostadsrätt/villa):</strong>
            </p>
            <ul className={classes.list}>
              <li><strong>Långsiktigt sparande:</strong> Bostaden är en <strong>investering</strong>
                som kan öka i värde.</li>
              <li><strong>Frihet:</strong> Du kan renovera och inreda precis som du vill.</li>
              <li><strong>Stabil boendekostnad:</strong> Med bostadsrätt är avgiften ofta
                lägre än hyran, och ränteavdrag gör lånet billigare.</li>
              <li><strong>Känsla av ägande:</strong> Många uppskattar att bo i något man
                äger.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> Det beror på <strong>livssituation och prioriteringar</strong>.
              För den som är ung och vill ha flexibilitet kan <strong>hyra</strong> vara bäst.
              För den som vill <strong>spara långsiktigt</strong> och planerar att bo kvar
              länge kan <strong>ägande</strong> vara fördelaktigt. Man måste också ta hänsyn
              till <strong>risken med räntehöjningar</strong> och <strong>ekonomisk buffer</strong>
              för underhåll.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. Bör unga få ta konsumtionslån?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Argument FÖR att unga ska få ta konsumtionslån:</strong>
            </p>
            <ul className={classes.list}>
              <li>De är <strong>myndiga</strong> och har rätt att fatta egna beslut.</li>
              <li>Det kan vara <strong>nödvändigt</strong> i vissa situationer (t.ex. akut
                tandvård, trasig dator för studier).</li>
              <li>Lån kan hjälpa till att <strong>bygga en kredithistorik</strong> som kan
                vara positiv i framtiden (om de betalas i tid).</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Argument EMOT att unga ska få ta konsumtionslån:</strong>
            </p>
            <ul className={classes.list}>
              <li>Unga saknar ofta <strong>erfarenhet</strong> och <strong>kunskap</strong>
                om privatekonomi.</li>
              <li>De är <strong>särskilt utsatta</strong> för vilseledande reklam och
                "köp nu – betala sen"-erbjudanden.</li>
              <li>Konsumtionslån har <strong>höga räntor</strong> och kan leda till
                <strong>skuldspiral</strong> som är svår att bryta.</li>
              <li>Konsekvenserna (betalningsanmärkning, psykisk ohälsa) kan vara
                <strong>förödande</strong> för en ung persons framtid.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> Ett totalt förbud vore svårt att genomföra, men
              <strong>hårdare regler</strong> kring marknadsföring och <strong>tydligare
              informationskrav</strong> (obligatorisk information om effektiv ränta och
              total kostnad) bör införas. <strong>Privatekonomi</strong> som ämne i skolan
              skulle också kunna hjälpa unga att fatta bättre beslut.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D3. Bör företag få skicka reklam för snabblån via sms?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Argument FÖR att förbjuda sms-reklam för snabblån:</strong>
            </p>
            <ul className={classes.list}>
              <li>Skyddar <strong>unga och ekonomiskt utsatta</strong> som är särskilt
                mottagliga för denna typ av reklam.</li>
              <li>Sms-reklam är <strong>påträngande</strong> och når alla, oavsett om de
                är intresserade eller inte.</li>
              <li>Minskar risken för <strong>impulslån</strong> – lättillgängligheten gör
                att människor lånar utan att tänka efter.</li>
              <li>Flera andra länder har redan <strong>förbjudit</strong> denna typ av
                reklam.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Argument EMOT att förbjuda sms-reklam för snabblån:</strong>
            </p>
            <ul className={classes.list}>
              <li>Det är ett <strong>ingrepp i näringsfriheten</strong> – företag har rätt
                att marknadsföra sina produkter.</li>
              <li>Det är <strong>individens eget ansvar</strong> att inte låna mer än vad
                man har råd med.</li>
              <li>Ett förbud kan driva verksamheten till <strong>oreglerade kanaler</strong>
                och göra problemet svårare att kontrollera.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> Sms-reklam för snabblån är <strong>problematisk</strong>
              eftersom den riktar sig till breda grupper och kan fresta människor i ekonomisk
              utsatthet. Ett <strong>förbud</strong> eller <strong>strikta begränsningar</strong>
              skulle vara en rimlig åtgärd för att skydda konsumenter, särskilt unga.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D4. Bör vi ha obligatorisk privatekonomi i skolan?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Argument FÖR obligatorisk privatekonomi i skolan:</strong>
            </p>
            <ul className={classes.list}>
              <li>Ger unga <strong>grundläggande kunskaper</strong> om ekonomi – något
                de har nytta av hela livet.</li>
              <li>Kan <strong>förebygga överskuldsättning</strong> genom att lära ut
                budgetering, räntor och lån.</li>
              <li>Lär ut <strong>kritiskt tänkande</strong> kring reklam och konsumtion.</li>
              <li>Många unga <strong>saknar</strong> dessa kunskaper idag och lär sig
                inte hemifrån.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Argument EMOT obligatorisk privatekonomi i skolan:</strong>
            </p>
            <ul className={classes.list}>
              <li>Skolan har redan <strong>många ämnen</strong> – det är svårt att hinna
                med allt.</li>
              <li>Privatekonomi kan istället integreras i <strong>samhällskunskap</strong>
                eller <strong>matematik</strong>.</li>
              <li>Det är <strong>föräldrarnas ansvar</strong> att lära barn om ekonomi.</li>
              <li>Eleverna har <strong>olika intressen</strong> – alla behöver inte
                fördjupade kunskaper om aktier och fonder.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> <strong>Ja</strong>, privatekonomi bör vara en
              obligatorisk del av skolans undervisning. Grundläggande kunskaper om
              <strong>budget, lån, räntor och konsumenträtt</strong> är något alla
              behöver i vuxenlivet. Det handlar inte om att göra elever till
              <strong>finansekonomer</strong>, utan om att ge dem <strong>verktyg
              för att undvika skuldfällor</strong> och fatta informerade beslut.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 8. NYCKELORD ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. NYCKELORD</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>Amortering:</span> En avbetalning på lånet som
            minskar själva lånebeloppet.
          </li>
          <li>
            <span className={classes.keyword}>Angerrätt:</span> Rätten att ångra ett köp inom
            14 dagar vid distansköp (internet, telefon).
          </li>
          <li>
            <span className={classes.keyword}>Aktier:</span> En andel i ett företag. Värdet
            stiger eller sjunker med företagets framgång.
          </li>
          <li>
            <span className={classes.keyword}>ARN (Allmänna Reklamationsnämnden):</span> En
            myndighet som prövar tvister mellan konsumenter och företag.
          </li>
          <li>
            <span className={classes.keyword}>Betalningsanmärkning:</span> En notering hos
            Kronofogden som visar att du har en obetald skuld. Ligger kvar i tre år.
          </li>
          <li>
            <span className={classes.keyword}>Borgen:</span> En person tar på sig betalningsansvaret
            om du inte kan betala ett lån.
          </li>
          <li>
            <span className={classes.keyword}>Bostadsrätt:</span> Du köper rätten att bo i
            lägenheten genom att köpa en andel i en bostadsrättsförening.
          </li>
          <li>
            <span className={classes.keyword}>Bruttolön:</span> Lönen innan skatt.
          </li>
          <li>
            <span className={classes.keyword}>Budget:</span> En plan för dina inkomster och
            utgifter under en viss period.
          </li>
          <li>
            <span className={classes.keyword}>Buffert:</span> En "ekonomisk krockkudde" –
            sparade pengar för oförutsedda utgifter.
          </li>
          <li>
            <span className={classes.keyword}>Bunden ränta:</span> Räntan är fast under en
            viss period (t.ex. 3 eller 5 år).
          </li>
          <li>
            <span className={classes.keyword}>Disponibel inkomst:</span> Nettolön + eventuella
            bidrag. De pengar du har att röra dig med.
          </li>
          <li>
            <span className={classes.keyword}>Effektiv ränta:</span> Den totala kostnaden för
            lånet, inklusive ränta och administrativa avgifter.
          </li>
          <li>
            <span className={classes.keyword}>Fasta utgifter:</span> Kostnader som är konstanta
            och återkommer varje månad.
          </li>
          <li>
            <span className={classes.keyword}>Fonder:</span> En blandning av aktier och andra
            värdepapper som sprider risken.
          </li>
          <li>
            <span className={classes.keyword}>Garanti:</span> Ett frivilligt åtagande från
            företaget att varan ska fungera under en viss tid.
          </li>
          <li>
            <span className={classes.keyword}>Giftorättsgemenskap:</span> Huvudregeln i
            äktenskapet – all egendom delas lika vid skilsmässa.
          </li>
          <li>
            <span className={classes.keyword}>Greenwashing:</span> Att framställa en produkt
            som mer miljövänlig än den är.
          </li>
          <li>
            <span className={classes.keyword}>Hyresrätt:</span> Du hyr bostaden av en
            hyresvärd. Betalar hyra men äger inte bostaden.
          </li>
          <li>
            <span className={classes.keyword}>Inkasso:</span> Ett företag som specialiserat sig
            på att driva in skulder åt andra företag.
          </li>
          <li>
            <span className={classes.keyword}>Konsumentköplagen:</span> Skyddar dig vid köp av
            varor.
          </li>
          <li>
            <span className={classes.keyword}>Konsumtionslån:</span> Mindre lån för att
            finansiera konsumtion, ofta med höga räntor och avgifter.
          </li>
          <li>
            <span className={classes.keyword}>Kreditupplysning:</span> En ekonomisk kontroll
            som långivaren gör för att säkerställa att du kan betala tillbaka lånet.
          </li>
          <li>
            <span className={classes.keyword}>Kronofogden:</span> En myndighet som driver in
            obetalda skulder.
          </li>
          <li>
            <span className={classes.keyword}>Nettolön:</span> Lönen efter skatt – det du får
            utbetalt.
          </li>
          <li>
            <span className={classes.keyword}>Reklamation:</span> Att påtala ett fel på en vara
            eller tjänst. Gäller i upp till tre år.
          </li>
          <li>
            <span className={classes.keyword}>Rörliga utgifter:</span> Kostnader som varierar
            beroende på dina vanor och livsstil.
          </li>
          <li>
            <span className={classes.keyword}>Rörlig ränta:</span> Räntan följer marknadsräntorna
            och justeras regelbundet.
          </li>
          <li>
            <span className={classes.keyword}>Ränta:</span> Kostnaden för att låna pengar,
            beräknad som en procentandel av lånebeloppet.
          </li>
          <li>
            <span className={classes.keyword}>Samboavtal:</span> Ett avtal som gör undantag
            från sambolagen.
          </li>
          <li>
            <span className={classes.keyword}>Sambolagen:</span> Lagen som reglerar sambors
            ekonomiska förhållanden vid separation.
          </li>
          <li>
            <span className={classes.keyword}>Skuldsanering:</span> En avbetalningsplan hos
            Kronofogden som innebär att du blir skuldfri efter ett visst antal år.
          </li>
          <li>
            <span className={classes.keyword}>Säkerhet:</span> Tillgångar som kan tas i anspråk
            om du inte kan betala tillbaka ett lån.
          </li>
          <li>
            <span className={classes.keyword}>Äktenskapsförord:</span> Ett avtal som gör
            undantag från giftorättsgemenskapen.
          </li>
        </ul>
      </section>
    </div>
  );
}