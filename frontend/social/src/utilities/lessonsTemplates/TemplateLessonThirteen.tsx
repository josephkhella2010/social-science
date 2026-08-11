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

export default function TemplateLessonThirteen() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>KAPITEL 13: SAMHÄLLETS EKONOMI</h1>
      <p className={classes.subtitle}>
        Fullständig sammanfattning med frågor, analys, diskussion och nyckelord
      </p>

      {/* ===== 1. PRODUKTIONSFAKTORERNA ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. PRODUKTIONSFAKTORERNA</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver vad som krävs för att producera varor och tjänster.
        </p>

        <h3 className={classes.subHeading}>Produktionsfaktorer</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Det som krävs för att producera varor och
            tjänster.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Tre huvudkategorier</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Produktionsfaktor</th>
                <th className={classes.th}>Förklaring</th>
                <th className={classes.th}>Exempel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>Råvaror (Naturresurser)</strong>
                </td>
                <td className={classes.td}>
                  Naturtillgångar som används i produktionen.
                </td>
                <td className={classes.td}>
                  Socker, kakao, vatten, skog, odlingsbar mark, mineraltillgångar.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Arbetskraft (Humankapital)</strong>
                </td>
                <td className={classes.td}>
                  Människors fysiska och mentala arbete, samt teknisk kunskap och
                  organisationsskicklighet ("know how").
                </td>
                <td className={classes.td}>
                  Arbetare, ingenjörer, chefer, deras samlade kompetens.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Realkapital (Kapitalvaror)</strong>
                </td>
                <td className={classes.td}>
                  Maskiner, byggnader, transportmedel och andra "verktyg" som behövs
                  för produktionen. Dessa måste produceras innan de kan användas.
                </td>
                <td className={classes.td}>
                  Fabriksbyggnader, maskiner, lastbilar, datorer.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.subHeading}>Infrastruktur</h3>
        <ul className={classes.list}>
          <li>
            För att produktionsfaktorerna ska kunna utnyttjas effektivt krävs en
            fungerande <strong>infrastruktur</strong>: järnvägar, vägar, datanät,
            el- och vattendistribution, rättssystem och offentlig förvaltning.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Produktivitet</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Ett mått på hur effektivt
            produktionsfaktorerna används.
          </li>
          <li>
            <strong>Formel:</strong> Produktivitet = Produktionsmängd / Insats av
            produktionsfaktorer.
          </li>
          <li>
            <strong>Högre produktivitet</strong> = mer produktion med samma resurser.
          </li>
        </ul>
      </section>

      {/* ===== 2. NATIONALEKONOMISKA SYSTEM ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. NATIONALEKONOMISKA SYSTEM</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver hur olika länder organiserar sin ekonomi.
        </p>

        <h3 className={classes.subHeading}>De tre grundläggande ekonomiska frågorna</h3>
        <ol className={classes.list}>
          <li>
            <strong>Vad</strong> ska produceras och hur mycket? (t.ex.
            sjukhusutrustning eller lastbilar?)
          </li>
          <li>
            <strong>Hur</strong> ska produktionen gå till? (t.ex. robotar eller
            mänsklig arbetskraft?)
          </li>
          <li>
            <strong>För vem</strong> ska produktionen ske? (Hur ska resultatet
            fördelas?)
          </li>
        </ol>

        <h3 className={classes.subHeading}>Två ekonomiska system</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>System</th>
                <th className={classes.th}>Kännetecken</th>
                <th className={classes.th}>Exempel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>Marknadsekonomi (Kapitalism)</strong>
                </td>
                <td className={classes.td}>
                  <ul className={classes.list}>
                    <li>Utbud och efterfrågan styr produktion och priser.</li>
                    <li>Privat äganderätt.</li>
                    <li>Vinstintresse driver företagen.</li>
                    <li>"Den osynliga handen" (Adam Smith) – marknadskrafterna
                      styr själva.</li>
                  </ul>
                </td>
                <td className={classes.td}>
                  USA, Storbritannien, Sverige (blandekonomi).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>Planekonomi (Centralt styrd ekonomi)</strong>
                </td>
                <td className={classes.td}>
                  <ul className={classes.list}>
                    <li>Staten (centralplanering) bestämmer vad, hur och för
                      vem som ska produceras.</li>
                    <li>Staten äger produktionsmedlen.</li>
                    <li>Inga privata vinster.</li>
                  </ul>
                </td>
                <td className={classes.td}>
                  Kina (tidigare), Nordkorea, Kuba, fd. Sovjetunionen.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.subHeading}>Blandekonomi</h3>
        <ul className={classes.list}>
          <li>
            De flesta moderna ekonomier är <strong>blandekonomier</strong> – en
            blandning av marknadsekonomi och statlig styrning (t.ex. Sverige med
            både privata företag och offentlig välfärd).
          </li>
        </ul>
      </section>

      {/* ===== 3. PRODUKTIONSMÖJLIGHETSKURVAN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. PRODUKTIONSMÖJLIGHETSKURVAN</h2>
        <p className={classes.paragraph}>
          Detta avsnitt förklarar ett viktigt ekonomiskt modellbegrepp.
        </p>

        <h3 className={classes.subHeading}>Produktionsmöjlighetskurvan (PPF)</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> En graf som visar den <strong>maximala</strong>
            mängden av två varor eller tjänster som ett land kan producera med sina
            <strong>begränsade resurser</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Alternativkostnad</h3>
        <ul className={classes.list}>
          <li>
            När du väljer att producera mer av en vara, måste du producera mindre
            av en annan. Det du väljer bort är <strong>alternativkostnaden</strong>.
          </li>
          <li>
            <strong>Exempel:</strong> Om ett land använder alla sina resurser till
            att producera sjukhusutrustning, kan det inte producera några lastbilar.
            Om det vill producera båda, måste det avstå från en del av den ena varan.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Punkter på och runt kurvan</h3>
        <ul className={classes.list}>
          <li>
            <strong>Punkter på kurvan:</strong> Visar <strong>effektiv</strong>
            användning av resurserna.
          </li>
          <li>
            <strong>Punkter innanför kurvan:</strong> Visar <strong>ineffektiv</strong>
            användning (resurser används inte fullt ut, t.ex. arbetslöshet).
          </li>
          <li>
            <strong>Punkter utanför kurvan:</strong> <strong>Ouppnåeliga</strong>
            med nuvarande resurser och teknik.
          </li>
        </ul>
      </section>

      {/* ===== 4. PRISBILDNINGEN OCH JÄMVIKTSPRISET ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. PRISBILDNINGEN OCH JÄMVIKTSPRISET</h2>
        <p className={classes.paragraph}>
          Detta avsnitt förklarar hur priser bestäms på en marknad.
        </p>

        <h3 className={classes.subHeading}>Perfekt konkurrens</h3>
        <ul className={classes.list}>
          <li>
            En marknad med <strong>många köpare och säljare</strong> där ingen
            enskild aktör kan påverka priset.
          </li>
          <li>
            Produkterna är <strong>homogena</strong> (likvärdiga) och alla har
            <strong>full information</strong> om marknaden.
          </li>
          <li>
            <strong>Exempel:</strong> Hötorgets blomster- och grönsaksförsäljare.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Efterfrågan</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Den mängd av en vara eller tjänst som
            konsumenterna är villiga att köpa vid ett visst pris.
          </li>
          <li>
            <strong>Efterfrågekurvan:</strong> Visar sambandet mellan pris och
            efterfrågad kvantitet (<strong>fallande</strong> – lägre pris ger högre
            efterfrågan).
          </li>
          <li>
            <strong>Faktorer som påverkar efterfrågan:</strong> Pris, konsumenternas
            smak/preferenser, inkomster, priset på andra varor.
            <ul className={classes.list}>
              <li>
                <strong>Substitutvaror:</strong> Varor som kan ersätta varandra
                (t.ex. kaffe och te). Högre pris på kaffe ökar efterfrågan på te.
              </li>
              <li>
                <strong>Komplementvaror:</strong> Varor som används tillsammans
                (t.ex. grillkrydda och senap). Högre pris på grillkrydda minskar
                efterfrågan på senap.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>Utbud</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Den mängd av en vara eller tjänst som
            producenterna är villiga att sälja vid ett visst pris.
          </li>
          <li>
            <strong>Utbudskurvan:</strong> Visar sambandet mellan pris och utbjuden
            kvantitet (<strong>stigande</strong> – högre pris ger större utbud).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Jämviktspris</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Det pris där efterfrågan är lika stor som
            utbudet. Vid detta pris finns varken överskott eller brist.
          </li>
          <li>
            <strong>Utbudsöverskott:</strong> När priset är högre än jämviktspriset
            – mer utbud än efterfrågan. Priset pressas nedåt.
          </li>
          <li>
            <strong>Efterfrågeöverskott:</strong> När priset är lägre än
            jämviktspriset – mer efterfrågan än utbud. Priset pressas uppåt.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Den osynliga handen</h3>
        <ul className={classes.list}>
          <li>
            Adam Smiths metafor för hur marknadskrafterna (utbud och efterfrågan)
            automatiskt leder till ett jämviktspris som gynnar både producenter
            och konsumenter.
          </li>
        </ul>
      </section>

      {/* ===== 5. DE FYRA MARKNADERNA ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. DE FYRA MARKNADERNA</h2>
        <p className={classes.paragraph}>
          Detta avsnitt beskriver de olika marknaderna i ekonomin.
        </p>

        <ol className={classes.list}>
          <li>
            <strong>Varumarknaden:</strong> Här handlas varor (t.ex. jordgubbar,
            bilar, kläder).
          </li>
          <li>
            <strong>Tjänstemarknaden:</strong> Här handlas tjänster (t.ex.
            frisörbesök, flygresor, banktjänster).
          </li>
          <li>
            <strong>Arbetsmarknaden:</strong> Här handlas arbetskraft. Priset på
            arbetskraft är <strong>lönen</strong>. Lönen påverkas inte bara av
            utbud och efterfrågan, utan också av förhandlingar mellan
            arbetsmarknadens parter (fack och arbetsgivare).
          </li>
          <li>
            <strong>Kreditmarknaden (Finansmarknaden):</strong> Här handlas pengar
            och krediter (lån). Priset på pengar är <strong>räntan</strong>.
          </li>
        </ol>
      </section>

      {/* ===== 6. BNP – ETT MÅTT PÅ EKONOMINS STORLEK ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. BNP – ETT MÅTT PÅ EKONOMINS STORLEK</h2>
        <p className={classes.paragraph}>
          Detta avsnitt förklarar hur man mäter ett lands ekonomi.
        </p>

        <h3 className={classes.subHeading}>BNP (Bruttonationalprodukt)</h3>
        <ul className={classes.list}>
          <li>
            <strong>Definition:</strong> Ett mått på den <strong>totala ekonomiska
            aktiviteten</strong> i ett land under en viss period (oftast ett år).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Tre sätt att beräkna BNP</h3>
        <ol className={classes.list}>
          <li>
            <strong>Produktionsvärdet:</strong> Summan av alla producerade varor
            och tjänster (minus insatsvaror).
          </li>
          <li>
            <strong>Inkomsterna:</strong> Summan av alla inkomster (löner, vinster,
            räntor, hyror).
          </li>
          <li>
            <strong>Utgifterna:</strong> Summan av alla utgifter (konsumtion,
            investeringar, offentlig konsumtion, nettoexport).
          </li>
        </ol>

        <h3 className={classes.subHeading}>BNP per capita</h3>
        <ul className={classes.list}>
          <li>
            BNP dividerat med antalet invånare. Ett mått på ett lands
            <strong>genomsnittliga levnadsstandard</strong>.
          </li>
        </ul>
      </section>

      {/* ===== 7. FRÅGOR TILL TEXTEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. FRÅGOR TILL TEXTEN</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>1. Vilka är de tre produktionsfaktorerna?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              De tre produktionsfaktorerna är:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Råvaror/Naturresurser</strong> (t.ex. mark, vatten, skog,
                mineraler).
              </li>
              <li>
                <strong>Arbetskraft</strong> (människors fysiska och intellektuella
                arbete).
              </li>
              <li>
                <strong>Realkapital</strong> (maskiner, byggnader, verktyg och
                transportmedel som används i produktionen).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. Vilka är de tre grundläggande frågor som måste besvaras i varje
            ekonomiskt system?
          </h3>
          <div className={classes.answer}>
            <ol className={classes.list}>
              <li>
                <strong>Vad</strong> ska produceras och hur mycket?
              </li>
              <li>
                <strong>Hur</strong> ska produktionen gå till (vilka resurser/
                metoder ska användas)?
              </li>
              <li>
                <strong>För vem</strong> ska produktionen ske (hur ska varorna och
                tjänsterna fördelas)?
              </li>
            </ol>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. Vem besvarar, och hur besvaras dessa frågor i en a) marknadsekonomi
            b) planekonomi?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>a) Marknadsekonomi:</strong> Frågorna besvaras av marknaden
                genom <strong>fri prissättning</strong> via utbud och efterfrågan
                utan statlig inblandning. Konsumenternas efterfrågan styr vad som
                tillverkas.
              </li>
              <li>
                <strong>b) Planekonomi:</strong> Frågorna besvaras av <strong>staten</strong>
                genom en central myndighet som gör en långsiktig plan för vad som
                ska tillverkas, hur det ska göras och till vilka priser varorna
                ska säljas.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. Vilka är aktörerna i det ekonomiska kretsloppet?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              De fyra huvudsakliga aktörerna är:
            </p>
            <ul className={classes.list}>
              <li><strong>Hushållen</strong></li>
              <li><strong>Företagen</strong></li>
              <li>
                <strong>Den offentliga sektorn</strong> (stat, regioner, kommuner)
              </li>
              <li>
                <strong>Finanssektorn</strong> (banker och kreditinstitut)
              </li>
              <li>
                Även <strong>Utlandssektorn</strong> ingår vid internationell handel.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>5. Vad avses med den offentliga sektorn?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Den offentliga sektorn består av verksamheter som drivs av
              <strong>staten, regionerna och kommunerna</strong>. Den finansieras
              i huvudsak via <strong>skatter</strong> och sköter gemensamma tjänster
              som sjukvård, skola, polis, infrastruktur och förvaltning.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>6. Vilka olika marknader nämns i boken?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              I kapitlet nämns:
            </p>
            <ul className={classes.list}>
              <li><strong>Varumarknaden</strong></li>
              <li><strong>Tjänstemarknaden</strong></li>
              <li><strong>Arbetsmarknaden</strong></li>
              <li><strong>Finansmarknaden/Kapitalmarknaden</strong></li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. Hur bestäms priset på en vara eller tjänst vid fullständig konkurrens?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Priset bestäms i <strong>skärningspunkten</strong> mellan
              <strong>utbudskurvan</strong> och <strong>efterfrågekurvan</strong>,
              vilket kallas för <strong>jämviktspriset</strong>. Vid detta pris är
              köparnas efterfrågade mängd exakt lika stor som säljarnas utbjudna
              mängd.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. Ge exempel på branscher som har avreglerats under senare decennier
            i Sverige.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>Telekommunikation/Telefonmarknaden</li>
              <li>Elmarknaden</li>
              <li>Apoteksmarknaden</li>
              <li>Järnvägstrafiken/Tågtrafiken</li>
              <li>Postmarknaden</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>9. Vilken uppgift har Konkurrensverket?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Konkurrensverkets uppgift är att:
            </p>
            <ul className={classes.list}>
              <li>Se till att företagen följer konkurrenslagstiftningen.</li>
              <li>Motverka skadliga kartellbildningar och missbruk av dominerande
                ställning.</li>
              <li>Övervaka att offentliga upphandlingar går rätt till så att en
                effektiv konkurrens upprätthålls.</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. Ge exempel på monopol, oligopol och monopolistisk konkurrens.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Monopol:</strong> Systembolaget (för detaljhandel med
                stark sprit/vin/öl) eller exklusiva statliga ensamrätter.
              </li>
              <li>
                <strong>Oligopol:</strong> Bensinbolag (Cirkle K, OKQ8 m.fl.),
                banker (SEB, Swedbank, Handelsbanken m.fl.) eller mobiloperatörer.
              </li>
              <li>
                <strong>Monopolistisk konkurrens:</strong> Restauranger, klädmärken
                (t.ex. H&M, Zara) eller läskedrycker (Coca-Cola vs Pepsi) där
                produkterna skiljer sig åt genom varumärke och marknadsföring.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>11. Vad menas med BNP?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              BNP står för <strong>Bruttonationalprodukt</strong> och är det
              <strong>totala värdet</strong> av alla varor och tjänster som
              produceras i ett land under ett år.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. Vilka brister finns i beräkningen av BNP per capita om man vill mäta
            ett lands välstånd?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                Det visar <strong>inte</strong> hur inkomsterna är fördelade i
                befolkningen (jämlikhet).
              </li>
              <li>
                Det räknar <strong>inte</strong> med inofficiell/svart ekonomi
                eller oavlönat hemarbete.
              </li>
              <li>
                Det tar <strong>inte</strong> hänsyn till miljöförstöring eller
                resursförbrukning.
              </li>
              <li>
                Det mäter <strong>inte</strong> livskvalitet, hälsa, trygghet
                eller demokrati.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. Förklara termen köpkraftsjusterad växelkurs, gärna med hjälp av
            termen Big Mac Index.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Köpkraftsjusterad växelkurs (PPP – Purchasing Power Parity)</strong>
              anpassar valutakurser utifrån vad sakerna faktiskt kostar i landet.
            </p>
            <p className={classes.paragraph}>
              <strong>Big Mac Index</strong> jämför vad en likadan Big Mac-hamburgare
              kostar i lokal valuta i olika länder för att se om en valuta är
              <strong>över- eller undervärderad</strong> i förhållande till dollarn.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. Vad innebär Human Development Index, HDI (GDI)?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>HDI</strong> är ett mått på ett lands <strong>mänskliga
              utveckling</strong> som väger samman:
            </p>
            <ul className={classes.list}>
              <li>BNP per capita</li>
              <li>Förväntad livslängd</li>
              <li>Utbildningsnivå</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>GDI (Gender Development Index)</strong> justerar detta
              baserat på könsskillnader/jämställdhet.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>15. Vad är cirkulär ekonomi?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Cirkulär ekonomi</strong> är en ekonomisk modell baserad på
              <strong>kretslopp</strong> där produkter återanvänds, repareras,
              återvinningsbara material utnyttjas och avfall minimeras – istället
              för den traditionella linjära modellen ("tillverka, använd, släng").
            </p>
          </div>
        </div>
      </section>

      {/* ===== 8. ANALYSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. ANALYSFRÅGOR</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. Förklara varför ekonomikapitlen i läromedel i huvudsak är skrivna
            utifrån ett marknadsekonomiskt perspektiv.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Eftersom Sverige och majoriteten av världens länder idag tillämpar
              <strong>blandekonomi</strong> som i grunden bygger på
              <strong>marknadsekonomiska principer</strong>. Modeller för utbud,
              efterfrågan, prisbildning och konkurrens speglar bäst hur företag,
              hushåll och banker fungerar i verkligheten i västerländska samhällen.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. Nationalekonomi utan ekonomiska modeller fungerar knappast. Ge
            exempel på några modeller i det här kapitlet.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Exempel på modeller i kapitlet är:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Det ekonomiska kretsloppet</strong> (visar flöden av pengar,
                varor, tjänster och arbete).
              </li>
              <li>
                <strong>Utbuds- och efterfrågemodellen</strong> (visar hur priser
                och jämviktspris uppstår).
              </li>
              <li>
                <strong>Big Mac Index / PPP-modellen</strong> (visar köpkraftsparitet).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A3. Förklara krisandet utanför affärerna i DDR med hjälp av ord som
            utbud, efterfrågan, efterfrågeöverskott osv.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              I det socialistiska DDR rådde <strong>planekonomi</strong> med
              statligt fastställda <strong>pristak</strong> på varor. Priserna
              sattes <strong>lägre</strong> än marknadens jämviktspris, vilket
              gjorde att <strong>efterfrågan</strong> var enormt mycket större
              än det tillgängliga <strong>utbudet</strong>.
            </p>
            <p className={classes.paragraph}>
              Detta skapade ett konstant <strong>efterfrågeöverskott</strong>
              (brist på varor), vilket ledde till <strong>långa köer</strong> och
              <strong>tomma hyllor</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A4. Vad är skillnaden mellan begreppen produktion och produktivitet?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Produktion</strong> är den <strong>totala mängden</strong>
                varor eller tjänster som tillverkas (t.ex. 100 bilar).
              </li>
              <li>
                <strong>Produktivitet</strong> mäter <strong>effektiviteten</strong>
                i tillverkningen, det vill säga hur mycket som tillverkas
                <strong>per insatt resurs</strong> (t.ex. antalet tillverkade bilar
                per arbetstimme).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A5. Hur påverkas det ekonomiska kretsloppet av följande transaktioner?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>a) Scania betalar arbetsgivaravgifter för sina anställda
                till Skatteverket:</strong> Pengar flödar från ett <strong>Företag</strong>
                till den <strong>Offentliga sektorn</strong> (Skatteverket).
              </li>
              <li>
                <strong>b) Lisa köper tågbiljett på Bergslagståg för resa till
                Stockholm:</strong> Pengar flödar från ett <strong>Hushåll</strong>
                till ett <strong>Företag</strong> som ersättning för en tjänst.
              </li>
              <li>
                <strong>c) Universitetssjukhuset i Örebro köper laboratorieinstrument
                från Cytiva i Umeå:</strong> Pengar flödar från den
                <strong>Offentliga sektorn</strong> till ett privat <strong>Företag</strong>.
              </li>
              <li>
                <strong>d) Andersson får pensionen insatt på sitt konto:</strong>
                Pengar flödar från den <strong>Offentliga sektorn</strong>
                (transferering) till ett <strong>Hushåll</strong>.
              </li>
              <li>
                <strong>e) Petersson tar sina besparingar, gömda i madrassen, och
                sätter in pengarna på banken:</strong> Pengar flyttas från ett
                <strong>Hushålls</strong> privata gömma till <strong>Finanssektorn</strong>
                (banken), vilket gör att pengarna kan lånas ut och aktiveras i
                kretsloppet.
              </li>
              <li>
                <strong>f) Vårdcentralen i Sunne betalar ut lön till sina
                anställda:</strong> Pengar flödar från den <strong>Offentliga
                sektorn</strong> som lön till ett <strong>Hushåll</strong> i
                utbyte mot arbetskraft.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A6. Vilken likhet finns mellan varumarknaden och arbetsmarknaden vad
            gäller priser och löner? Vilken skillnad finns mellan dessa båda
            marknader? Orden trög/tröghet kan förklara den skillnaden!
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Likhet:</strong> Båda styrs i grunden av <strong>utbud
                och efterfrågan</strong>. Lön är priset på arbete.
              </li>
              <li>
                <strong>Skillnad och tröghet:</strong>
                <ul className={classes.list}>
                  <li>
                    <strong>Varumarknaden</strong> har <strong>snabba</strong>
                    prisjusteringar vid ändrat utbud/efterfrågan.
                  </li>
                  <li>
                    <strong>Arbetsmarknaden</strong> kännetecknas av <strong>stor
                    tröghet</strong> på grund av kollektivavtal, lagar (t.ex. LAS)
                    och årliga löneförhandlingar, vilket gör att löner <strong>inte</strong>
                    ställer om eller sänks direkt vid en konjunkturnedgång.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A7. Förklara varför hyrespolitiken i Sverige är ett exempel på planekonomi.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Hyrorna i Sverige sätts <strong>inte</strong> fritt utifrån utbud
              och efterfrågan. Istället tillämpas
              <strong>bruksvärdesprincipen</strong> där hyrorna förhandlas fram
              kollektivt och regleras med ett <strong>hyrestak</strong>, vilket
              är ett inslag av statlig/politisk styrning som påminner om
              <strong>planekonomi</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 9. DISKUSSIONSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. DISKUSSIONSFRÅGOR</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. Ge exempel på produkter som marknadsförs i tv-reklamen eller på
            internet. Stämmer det att dessa produkter är exempel på monopolistisk
            konkurrens?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Ja, produkter som <strong>schampo, tandkräm, läsk, bilar och kläder</strong>
              marknadsförs ofta i TV och på internet.
            </p>
            <p className={classes.paragraph}>
              De är klockrena exempel på <strong>monopolistisk konkurrens</strong>
              eftersom produkterna i grunden fyller samma funktion, men företagen
              använder <strong>marknadsföring och varumärken</strong> för att ge
              intryck av att deras produkt är <strong>unik</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. Varför är det svårt att mäta den svarta ekonomin?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Eftersom den svarta ekonomin består av <strong>olagliga, oregistrerade
              och obeskattade</strong> transaktioner som aktörerna aktivt försöker
              dölja för myndigheter. Det saknas <strong>kvitton, bokföring och
              officiell statistik</strong>.
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
              <strong>Exempel:</strong> Monopol på att sälja dricksvatten eller
              energi i en region.
            </p>
            <p className={classes.paragraph}>
              <strong>Positiva följder:</strong> Garantier för enorma och stabila
              intäkter utan rädsla för konkurrenter.
            </p>
            <p className={classes.paragraph}>
              <strong>Negativa följder:</strong> Avsaknad av konkurrens leder ofta
              till <strong>sämre kvalitet</strong>, <strong>brist på innovation</strong>
              och <strong>högre priser</strong> för konsumenterna.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D4. Anta att affären där du köper ditt godis sällan registrerar
            affärstransaktionen – kassaapparaten står öppen och du får inget kvitto.
            Det innebär att den försäljningen inte redovisas. Hur gör du? Bryr du
            dig eller inte? Försök att reda ut hur du gör och, kanske, hur du borde göra.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Analys av agerande:</strong> Många konsumenter bryr sig tyvärr
              <strong>inte</strong> eftersom godiset är billigt och de får sin vara.
            </p>
            <p className={classes.paragraph}>
              <strong>Vad som borde göras:</strong> Som medborgare borde man
              <strong>kräva kvitto</strong> eller <strong>anmäla händelsen</strong>
              till Skatteverket. Obokförd försäljning innebär <strong>svartjobb</strong>
              och <strong>skattefusk</strong>, vilket urholkar skatteintäkterna till
              skolor och sjukvård och ger butiken en osund/olaglig konkurrensfördel
              gentemot hederliga handlare.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>D5. Borde ransoneringskort införas? På vad i så fall?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Ransoneringskort har historiskt använts vid <strong>krig</strong>
              eller <strong>allvarlig kris</strong> för att garantera att
              nödvändiga varor räcker till alla.
            </p>
            <p className={classes.paragraph}>
              <strong>För:</strong> Kan vara nödvändigt i kriser för t.ex.
              drivmedel, el eller livsmedel för att förhindra bunkring och svält.
              Vissa föreslår även <strong>personliga utsläppsrätter/koldioxidkort</strong>
              för att rädda miljön.
            </p>
            <p className={classes.paragraph}>
              <strong>Mot:</strong> Skapar en <strong>stor byråkrati</strong>,
              inskränker den <strong>personliga friheten</strong> och leder ofta
              till att en <strong>svart marknad</strong> uppstår.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 10. NYCKELORD ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>10. NYCKELORD</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>Big Mac Index:</span> Ett index skapat
            av The Economist för att mäta köpkraftsparitet mellan valutor genom att
            jämföra priset på en Big Mac.
          </li>
          <li>
            <span className={classes.keyword}>BNP (Bruttonationalprodukt):</span>
            Det samlade värdet av alla varor och tjänster som produceras i ett land
            under ett år.
          </li>
          <li>
            <span className={classes.keyword}>Cirkulär ekonomi:</span> Ekonomiskt
            system utformat för återanvändning, reparation och återvinning i ett
            slutet kretslopp.
          </li>
          <li>
            <span className={classes.keyword}>Ginikoefficient:</span> Ett mått
            mellan 0 och 1 som visar hur jämt eller ojämt inkomsterna är fördelade
            i befolkningen.
          </li>
          <li>
            <span className={classes.keyword}>Grön ekonomi:</span> Ekonomi som
            strävar efter mänskligt välbefinnande och minskade miljö- och ekologiska
            risker.
          </li>
          <li>
            <span className={classes.keyword}>HDI (Human Development Index):</span>
            FN-index som mäter välstånd baserat på BNP per capita, livslängd och
            utbildning.
          </li>
          <li>
            <span className={classes.keyword}>Infrastruktur:</span> Grundläggande
            strukturer som vägar, järnvägar, elnät, vattenledningar och bredband.
          </li>
          <li>
            <span className={classes.keyword}>Inofficiell ekonomi:</span> Ekonomisk
            aktivitet som saknar officiell registrering (t.ex. oavlönat hemarbete).
          </li>
          <li>
            <span className={classes.keyword}>Jämviktspris:</span> Det pris där
            utbjuden mängd och efterfrågad mängd är exakt lika stora.
          </li>
          <li>
            <span className={classes.keyword}>Kartellbildning:</span> Olagligt
            samarbete mellan företag för att komma överens om priser eller dela upp
            marknaden.
          </li>
          <li>
            <span className={classes.keyword}>Komplementvaror:</span> Varor som hör
            ihop och konsumeras tillsammans (t.ex. bil och bensin, korv och korvbröd).
          </li>
          <li>
            <span className={classes.keyword}>Marknad:</span> Mötesplats för köpare
            och säljare där priset bildas.
          </li>
          <li>
            <span className={classes.keyword}>Marknadsekonomi:</span> Ekonomiskt
            system där pris och produktion styrs fritt av utbud och efterfrågan.
          </li>
          <li>
            <span className={classes.keyword}>Marknadsmisslyckanden:</span>
            Situationer där den fria marknaden inte leder till effektiv
            resursfördelning (t.ex. miljöförstöring, monopol).
          </li>
          <li>
            <span className={classes.keyword}>Monopol:</span> En marknad där det
            bara finns en enda säljare.
          </li>
          <li>
            <span className={classes.keyword}>Monopolistisk konkurrens:</span>
            Konkurrensform där många företag säljer liknande men profilierade
            produkter genom varumärken.
          </li>
          <li>
            <span className={classes.keyword}>Offentliga sektorn:</span>
            Verksamheter som drivs av stat, regioner och kommuner.
          </li>
          <li>
            <span className={classes.keyword}>Oligopol:</span> En marknad med bara
            ett fåtal stora företag.
          </li>
          <li>
            <span className={classes.keyword}>Perfekt konkurrens (Fullständig
            konkurrens):</span> En teoretisk marknad med fri in- och utträde, helt
            identiska produkter och mängder av säljare/köpare utan prispåverkan.
          </li>
          <li>
            <span className={classes.keyword}>Planekonomi:</span> Ekonomiskt system
            där staten planerar och styr hela ekonomin.
          </li>
          <li>
            <span className={classes.keyword}>PPP (Purchasing Power Parity):</span>
            Köpkraftsjusterad växelkurs som tar hänsyn till prisnivåer i olika
            länder.
          </li>
          <li>
            <span className={classes.keyword}>Produktionsfaktorer:</span> Resurser
            som behövs för produktion (råvaror, arbetskraft, realkapital).
          </li>
          <li>
            <span className={classes.keyword}>Realkapital:</span> Fysiska resurser
            som tillverkats för att användas i produktionen (maskiner, verktyg,
            fabriker).
          </li>
          <li>
            <span className={classes.keyword}>Strukturomvandling:</span> Större och
            permanenta förändringar i ett lands näringsliv över tid.
          </li>
          <li>
            <span className={classes.keyword}>Substitut:</span> Varor som kan
            ersätta varandra (t.ex. smör och margarin, kaffe och te).
          </li>
          <li>
            <span className={classes.keyword}>Svart ekonomi:</span> Olaglig och
            obeskattad ekonomisk verksamhet.
          </li>
          <li>
            <span className={classes.keyword}>Transfereringar:</span> Omfördelning
            av pengar från staten till hushåll utan motprestation (t.ex. barnbidrag,
            studiebidrag, pension).
          </li>
          <li>
            <span className={classes.keyword}>Utbud och efterfrågan:</span> De
            krafter som bestämmer hur mycket som tillverkas och till vilket pris.
          </li>
        </ul>
      </section>
    </div>
  );
}