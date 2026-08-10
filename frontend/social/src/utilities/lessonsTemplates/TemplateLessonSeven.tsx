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

export default function TemplateLessonSeven() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>KAPITEL 7: SÅ STYRS KOMMUNEN</h1>
      <p className={classes.subtitle}>
        Fullständig sammanfattning med frågor, analys, diskussion och nyckelord
      </p>

      {/* ===== 1. DEN KOMMUNALA SJÄLVSTYRELSEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. DEN KOMMUNALA SJÄLVSTYRELSEN</h2>
        <p className={classes.paragraph}>
          Den kommunala självstyrelsen är grundlagsskyddad i Regeringsformen
          (RF 1 kap. 1 §) och ses som en lika viktig del av folkstyrelsen som den
          rikspolitiska nivån. De 290 kommunerna och 21 regionerna har en mängd
          viktiga frågor att ta hand om.
        </p>

        <h3 className={classes.subHeading}>Vad innebär självstyret?</h3>
        <ul className={classes.list}>
          <li>Kommuner och regioner har rätt att själva bestämma över sina angelägenheter.</li>
          <li>De väljer sina egna företrädare i demokratiska val.</li>
          <li>De bestämmer sin egen skattesats.</li>
          <li>De fördelar själva sina resurser till olika verksamheter.</li>
          <li>
            <strong>Viktigt:</strong> Självstyret innebär <em>inte</em> att kommunerna kan göra
            precis vad de vill – de måste följa lagar.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Vad kommunerna måste göra (Tvingande uppgifter)</h3>
        <ul className={classes.list}>
          <li>
            Cirka <strong>80 %</strong> av kommunernas intäkter går till lagstadgad verksamhet.
          </li>
          <li>
            <strong>Socialtjänstlagen (SoL):</strong> Reglerar äldreomsorg, försörjningsstöd
            och annan socialtjänst.
          </li>
          <li>
            <strong>Skollagen:</strong> Reglerar barnomsorg, förskola, grundskola och
            gymnasieskola.
          </li>
          <li>
            <strong>Plan- och bygglagen (PBL):</strong> Reglerar hur kommunen får använda
            mark och planera bebyggelse.
          </li>
          <li>
            <strong>Kommunallagen (KL):</strong> Anger kommunernas allmänna regler och
            skyldigheter.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Vad kommunerna får göra om de vill (Frivilliga uppgifter)</h3>
        <ul className={classes.list}>
          <li>Biblioteksverksamhet</li>
          <li>Kulturverksamhet som teatrar och konserthus</li>
          <li>Simhallar och badhus</li>
          <li>Fritidsgårdar och ungdomsverksamhet</li>
          <li>Parker och grönområden</li>
          <li>Föreningsstöd och idrottsanläggningar</li>
        </ul>

        <h3 className={classes.subHeading}>Vad kommunerna är förbjudna att göra</h3>
        <ul className={classes.list}>
          <li>
            Kommuner får <strong>inte</strong> stödja enskilda företag på ett sätt som
            snedvrider konkurrensen.
          </li>
          <li>
            Detta är förbjudet enligt både svensk lag och EU:s regler om statsstöd.
          </li>
          <li>
            Kommunen får däremot skapa goda allmänna förutsättningar för näringslivet
            (t.ex. infrastruktur, tomtmark).
          </li>
        </ul>
      </section>

      {/* ===== 2. KOMMUNENS ORGANISATION OCH POLITIK ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. KOMMUNENS ORGANISATION OCH POLITIK</h2>

        <h3 className={classes.subHeading}>Kommunfullmäktige (Kommunens "Parlament")</h3>
        <ul className={classes.list}>
          <li>Är kommunens högsta beslutande organ.</li>
          <li>Väljs av kommuninvånarna i kommunalval vart fjärde år.</li>
          <li>Bestämmer kommunens övergripande mål, budget och skattesats.</li>
          <li>Sammanträdena är offentliga, vilket ger allmänheten insyn.</li>
        </ul>

        <h3 className={classes.subHeading}>Nämnderna (Kommunens "Myndigheter")</h3>
        <ul className={classes.list}>
          <li>Politiska grupper som ansvarar för specifika verksamhetsområden.</li>
          <li>
            Exempel: Socialnämnd, barn- och utbildningsnämnd, tekniska nämnden.
          </li>
          <li>
            <strong>Två obligatoriska nämnder:</strong> Kommunstyrelsen och Valnämnden.
          </li>
          <li>
            Sammanträdena är i regel <strong>inte</strong> offentliga, men protokollen
            publiceras.
          </li>
          <li>
            Vissa frågor (sekretessbelagda ärenden, myndighetsutövning) beslutas bakom
            stängda dörrar.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Kommunstyrelsen (Kommunens "Regering")</h3>
        <ul className={classes.list}>
          <li>Är den viktigaste nämnden – en "samlingsregering".</li>
          <li>Består av politiker från alla partier.</li>
          <li>
            Ordföranden är kommunens främsta politiker och representerar majoritetspartiet.
          </li>
          <li>
            <strong>Huvuduppgifter:</strong>
            <ul className={classes.list}>
              <li>Ansvarar för ekonomisk och fysisk planering.</li>
              <li>Tar fram budgetförslag till fullmäktige.</li>
              <li>Prioriterar mellan olika nämnders önskemål.</li>
            </ul>
          </li>
        </ul>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Kommunfullmäktige</th>
                <th className={classes.th}>Kommunstyrelsen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>Kommunens högsta beslutande organ</td>
                <td className={classes.td}>Kommunens viktigaste nämnd, "regering"</td>
              </tr>
              <tr>
                <td className={classes.td}>Alla 290 kommuner har ett fullmäktige</td>
                <td className={classes.td}>Alla kommuner har en styrelse</td>
              </tr>
              <tr>
                <td className={classes.td}>Väljs direkt av invånarna i kommunalval</td>
                <td className={classes.td}>Utses av kommunfullmäktige</td>
              </tr>
              <tr>
                <td className={classes.td}>Bestämmer budget, mål och skattesats</td>
                <td className={classes.td}>Föreslår budget, genomför beslut</td>
              </tr>
              <tr>
                <td className={classes.td}>Sammanträden är offentliga</td>
                <td className={classes.td}>Sammanträden är normalt inte offentliga</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.subHeading}>Tjänstepersoner (Kommunens "Tjänstemän")</h3>
        <ul className={classes.list}>
          <li>Anställda, opolitiska experter (t.ex. socialchef, förvaltningschef).</li>
          <li>Förbereder ärenden och ger underlag till politikerna.</li>
          <li>Deltar inte i besluten, men har stort inflytande genom sin kunskap.</li>
          <li>
            <strong>"Tjänstemannavälde":</strong> Kritik mot att tjänstepersoner i praktiken
            styr trots att politikerna formellt beslutar.
          </li>
        </ul>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Politiker</th>
                <th className={classes.th}>Tjänsteperson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>Förtroendevald av invånarna</td>
                <td className={classes.td}>Anställd av kommunen</td>
              </tr>
              <tr>
                <td className={classes.td}>Fattar politiska beslut</td>
                <td className={classes.td}>Förbereder och verkställer beslut</td>
              </tr>
              <tr>
                <td className={classes.td}>Representerar ett parti och en ideologi</td>
                <td className={classes.td}>Är opolitisk och saklig</td>
              </tr>
              <tr>
                <td className={classes.td}>Exempel: Socialnämndens ordförande</td>
                <td className={classes.td}>Exempel: Socialchef</td>
              </tr>
              <tr>
                <td className={classes.td}>Väljs för en mandatperiod</td>
                <td className={classes.td}>Har en tillsvidareanställning</td>
              </tr>
              <tr>
                <td className={classes.td}>Kan bytas ut vid val</td>
                <td className={classes.td}>Stannar oavsett politisk majoritet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.subHeading}>Kommunala Bolag</h3>
        <ul className={classes.list}>
          <li>Kommuner kan äga aktiebolag för att driva viss verksamhet effektivare.</li>
          <li>
            Exempel: Tekniska tjänster, bostadsbolag, energibolag.
          </li>
          <li>
            Styrelseledamöter utses av kommunfullmäktige.
          </li>
          <li>
            Kommunallagen kräver insyn och transparens i kommunala bolag.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Politiskt Styre</h3>
        <ul className={classes.list}>
          <li>
            Historiskt: Antingen socialistiska eller borgerliga block har styrt.
          </li>
          <li>
            Efter 2006: <strong>Blocköverskridande samarbeten</strong> har blivit vanligare.
          </li>
          <li>
            Exempel: Efter 2022 samarbetar M+S i cirka 50 kommuner. I Degerfors
            styr M+V tillsammans.
          </li>
          <li>
            <strong>Personkemi</strong> och fokus på lokala frågor är ofta viktigare än
            rikspolitik.
          </li>
          <li>
            Citat: <em>"I kommunen arbetar vi för kommunens bästa och lägger det
            rikspolitiska kåbblet åt sidan."</em>
          </li>
        </ul>
      </section>

      {/* ===== 3. KOMMUNERNAS EKONOMI ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. KOMMUNERNAS EKONOMI</h2>

        <h3 className={classes.subHeading}>Kommunernas intäkter</h3>
        <ul className={classes.list}>
          <li>
            <strong>Kommunalskatt:</strong> Den största inkomstkällan (cirka 70%).
            Invånarna betalar i genomsnitt cirka 32% av sin inkomst i kommunalskatt.
          </li>
          <li>
            <strong>Statsbidrag:</strong> Pengar från staten, både generella och riktade.
          </li>
          <li>
            <strong>Avgifter och försäljning:</strong> Avgifter för barnomsorg, äldreomsorg,
            bygglov, parkering och kollektivtrafik.
          </li>
        </ul>

        <h3 className={classes.subHeading}>
          Skatteutjämningssystemet ("Robin Hood-avgiften")
        </h3>
        <ul className={classes.list}>
          <li>
            <strong>Syfte:</strong> Skapa likvärdiga ekonomiska förutsättningar för alla
            kommuner.
          </li>
          <li>
            <strong>Funktion:</strong> Kommuner med hög skattekraft betalar en avgift till
            staten. Staten fördelar pengarna till kommuner med låg skattekraft.
          </li>
          <li>
            Exempel 2024: Danderyd betalade mest (26 240 kr per invånare). Dorotea
            fick mest (36 212 kr per invånare). Malmö fick mest totalt (6,3 miljarder kr).
          </li>
        </ul>

        <h3 className={classes.subHeading}>Case Study: Ljusnarsberg vs. Lidingö</h3>

        <p className={classes.paragraph}>
          <strong>Ewa-Leena Johansson (S), Ljusnarsberg (mottagare av bidrag):</strong>
        </p>
        <ul className={classes.list}>
          <li>Systemet kompenserar för statens frånvaro i glesbygd.</li>
          <li>
            Små kommuner saknar statliga myndigheter, universitet och högspecialiserade
            företag.
          </li>
          <li>Välutbildade ungdomar tvingas flytta till större kommuner.</li>
          <li>
            Systemet skapar förutsättningar för att kunna erbjuda välfärd och service.
          </li>
        </ul>

        <p className={classes.paragraph}>
          <strong>Daniel Källenfors (M), Lidingö (betalare av bidrag):</strong>
        </p>
        <ul className={classes.list}>
          <li>
            "Var femte krona som Lidingöborna betalar i kommunalskatt skickas iväg."
          </li>
          <li>Systemet är orättvist – hårt arbetande Lidingöbor straffas.</li>
          <li>
            Systemet underminerar incitamenten för kommuner att bli ekonomiskt effektiva.
          </li>
          <li>
            "En dåligt skött kommun belönas omgående med nya bidrag."
          </li>
        </ul>
      </section>

      {/* ===== 4. UTMANINGAR FÖR KOMMUNERNA ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. UTMANINGAR FÖR KOMMUNERNA</h2>

        <h3 className={classes.subHeading}>Små kommuners utmaningar</h3>
        <ul className={classes.list}>
          <li>
            Sveriges 100 minsta kommuner har i genomsnitt <strong>minskat</strong> sin
            befolkning efter år 2000.
          </li>
          <li>
            Trenden förväntas fortsätta fram till 2040.
          </li>
          <li>Svårigheter att locka arbetskraft och företag.</li>
          <li>
            Efterfrågar ökat samarbete (kommunalförbund, gemensamma nämnder) och
            minskad detaljstyrning från staten.
          </li>
          <li>
            <strong>Exempel:</strong> Strandskyddsfrågan – Arjeplog har 3 mil strand per
            invånare men får inte bygga vattennära för att locka inflyttare.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Regionernas roll</h3>
        <ul className={classes.list}>
          <li>Sverige har 21 regioner.</li>
          <li>
            <strong>Främsta uppgift:</strong> Hälso- och sjukvård (driva sjukhus och
            vårdcentraler, tandvård).
          </li>
          <li>
            <strong>Andra uppgifter:</strong> Kollektivtrafik, kultur, regional utveckling.
          </li>
          <li>
            Regionerna styrs på liknande sätt med regionfullmäktige och regionstyrelse.
          </li>
        </ul>
      </section>

      {/* ===== 5. FRÅGOR OCH SVAR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. FRÅGOR TILL TEXTEN</h2>

        {/* Fråga 1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            1. Vad innebär det kommunala självstyret?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det kommunala självstyret innebär att kommuner och regioner har rätt att
              själva bestämma över sina angelägenheter inom ramen för lagar som riksdagen
              stiftat. Det är grundlagsskyddat i Regeringsformen (1 kap. 1 §).
            </p>
            <ul className={classes.list}>
              <li>Väljer sina egna företrädare i demokratiska val.</li>
              <li>Bestämmer sin egen skattesats.</li>
              <li>Själva fördelar sina resurser till olika verksamheter.</li>
            </ul>
            <p className={classes.paragraph}>
              Självstyret är dock inte obegränsat – kommunerna måste följa lagar och kan
              varken göra vad som helst eller låta bli att göra det som är lagstadgat.
            </p>
          </div>
        </div>

        {/* Fråga 2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>2. Nämn några lagar som är tvingande för kommunerna</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Socialtjänstlagen (SoL):</strong> Reglerar äldreomsorg,
                försörjningsstöd och annan socialtjänst.
              </li>
              <li>
                <strong>Skollagen:</strong> Reglerar barnomsorg, förskola, grundskola och
                gymnasieskola.
              </li>
              <li>
                <strong>Plan- och bygglagen (PBL):</strong> Reglerar hur kommunen får använda
                mark och planera bebyggelse.
              </li>
              <li>
                <strong>Kommunallagen (KL):</strong> Anger kommunernas allmänna regler och
                skyldigheter.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>3. Ge exempel på kommunernas frivilliga verksamhet</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>Biblioteksverksamhet</li>
              <li>Kulturverksamhet som teatrar och konserthus</li>
              <li>Simhallar och badhus</li>
              <li>Fritidsgårdar och ungdomsverksamhet</li>
              <li>Parker och grönområden</li>
              <li>Föreningsstöd och idrottsanläggningar</li>
            </ul>
          </div>
        </div>

        {/* Fråga 4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. När får kommunen stödja ett företag och när är det förbjudet?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Kommunen får <strong>inte</strong> stödja enskilda företag på ett sätt som
              snedvrider konkurrensen. Detta är förbjudet enligt både svensk lag och EU:s
              regler om statsstöd.
            </p>
            <p className={classes.paragraph}>
              Kommunen får däremot:
            </p>
            <ul className={classes.list}>
              <li>Skapa goda allmänna förutsättningar för näringslivet.</li>
              <li>Ge generella stöd som gäller lika för alla företag.</li>
              <li>
                I undantagsfall gå in med stöd för att rädda jobb vid akuta kriser,
                men detta är strikt reglerat.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            5. Vad är skillnaden mellan kommunstyrelsen och kommunfullmäktige?
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Kommunfullmäktige</th>
                    <th className={classes.th}>Kommunstyrelsen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>Kommunens högsta beslutande organ</td>
                    <td className={classes.td}>Kommunens viktigaste nämnd, "regering"</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>Väljs direkt av invånarna</td>
                    <td className={classes.td}>Utses av kommunfullmäktige</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>Bestämmer budget, mål och skattesats</td>
                    <td className={classes.td}>Föreslår budget, genomför beslut</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>Sammanträden är offentliga</td>
                    <td className={classes.td}>Sammanträden är normalt inte offentliga</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Fråga 6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. Vad är skillnaden mellan politiker och tjänstepersoner?
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>Politiker</th>
                    <th className={classes.th}>Tjänsteperson</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>Förtroendevald av invånarna</td>
                    <td className={classes.td}>Anställd av kommunen</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>Fattar politiska beslut</td>
                    <td className={classes.td}>Förbereder och verkställer beslut</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>Representerar ett parti</td>
                    <td className={classes.td}>Är opolitisk och saklig</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>Ex: Socialnämndens ordförande</td>
                    <td className={classes.td}>Ex: Socialchef</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>Väljs för en mandatperiod</td>
                    <td className={classes.td}>Har tillsvidareanställning</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>Kan bytas ut vid val</td>
                    <td className={classes.td}>Stannar oavsett politisk majoritet</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={classes.paragraph}>
              Tjänstepersonerna har stort inflytande genom sin expertis – ibland kallat
              <strong> "tjänstemannavälde"</strong>.
            </p>
          </div>
        </div>

        {/* Fråga 7 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. Ge exempel på en myndighetsutövning som socialnämnden utövar
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Myndighetsutövning är när en kommun fattar beslut som påverkar enskilda
              medborgares rättigheter eller skyldigheter.
            </p>
            <ul className={classes.list}>
              <li>Beslut om alkoholtillstånd till restauranger</li>
              <li>Beslut om försörjningsstöd (ekonomiskt bistånd)</li>
              <li>Beslut om tvångsomhändertagande av barn (LVU)</li>
              <li>Beslut om äldreomsorgsinsatser som hemtjänst eller särskilt boende</li>
            </ul>
            <p className={classes.paragraph}>
              Dessa ärenden behandlas ofta bakom stängda dörrar på grund av sekretess.
            </p>
          </div>
        </div>

        {/* Fråga 8 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>8. Vilka är kommunernas intäkter?</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Kommunalskatt:</strong> Den största inkomstkällan (cirka 70%).
              </li>
              <li>
                <strong>Statsbidrag:</strong> Pengar från staten, både generella och
                riktade.
              </li>
              <li>
                <strong>Avgifter och försäljning:</strong> Avgifter för barnomsorg,
                äldreomsorg, bygglov, parkering etc.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 9 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>9. Vad är regionernas främsta uppgift?</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Regionernas främsta uppgift är <strong>hälso- och sjukvård</strong>.
            </p>
            <ul className={classes.list}>
              <li>Driva sjukhus och vårdcentraler</li>
              <li>Ansvara för tandvård</li>
              <li>Planera och organisera sjukvården i regionen</li>
            </ul>
            <p className={classes.paragraph}>
              Dessutom ansvarar regionerna för:
            </p>
            <ul className={classes.list}>
              <li>Kollektivtrafik</li>
              <li>Kultur</li>
              <li>Regional utveckling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 6. ANALYSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. ANALYSFRÅGOR</h2>

        {/* A1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. Skilda valdagar för riksdag och kommun – för- och nackdelar
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Fördelar med skilda valdagar:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Lokalt fokus:</strong> Väljarna fokuserar på lokala frågor istället
                för rikspolitik.
              </li>
              <li>
                <strong>Mindre "riksdagsstyrda" kommunval:</strong> Kommunvalen blir inte
                en nationell folkomröstning om regeringen.
              </li>
              <li>
                <strong>Självständighet:</strong> Kommunerna blir mindre beroende av
                rikspolitikens opinionssvängningar.
              </li>
              <li>
                <strong>Större uppmärksamhet:</strong> Lokala medier kan fokusera på
                kommunala frågor.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Nackdelar med skilda valdagar:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Lägre valdeltagande:</strong> Färre röstar när det bara är
                kommunval (före 1970 var valdeltagandet betydligt lägre).
              </li>
              <li>
                <strong>Högre kostnader:</strong> Dubbla valarrangemang blir dyrare.
              </li>
              <li>
                <strong>Mindre politisk debatt:</strong> Utan rikspolitiken som motor
                minskar intresset.
              </li>
              <li>
                <strong>Osäkerhet:</strong> Politiska majoriteter kan skifta oftare, vilket
                försvårar långsiktig planering.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> Skilda valdagar ger mer lokal demokrati men
              riskerar lägre deltagande. Sverige valde gemensamma valdagar 1970 just för
              att öka valdeltagandet i kommunvalen.
            </p>
          </div>
        </div>

        {/* A2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. Blocköverskridande samarbete – för- och nackdelar
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Fördelar:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Stabilitet:</strong> Bredare majoritet ger tryggare och mer
                förutsägbara beslut.
              </li>
              <li>
                <strong>Mindre konflikt:</strong> Tvingas lyssna på varandra och hitta
                kompromisser.
              </li>
              <li>
                <strong>Lokalt fokus:</strong> Lägger rikspolitiska konflikter åt sidan och
                arbetar för "kommunens bästa".
              </li>
              <li>
                <strong>Mindre risk för kohandel:</strong> Minskar risken för att enskilda
                partier utnyttjar sin vågmästarroll.
              </li>
              <li>
                <strong>Demokratifrämjande:</strong> Visar att politik kan handla om
                sakfrågor och samarbete.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Nackdelar:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Otydlighet för väljarna:</strong> Väljarna röstar på ett parti men
                får en kompromiss med motståndarsidan.
              </li>
              <li>
                <strong>Svag opposition:</strong> När stora partier samarbetar försvagas
                oppositionens granskande roll.
              </li>
              <li>
                <strong>Intern splittring:</strong> Partimedlemmar kan bli missnöjda när
                deras parti samarbetar med traditionella motståndare.
              </li>
              <li>
                <strong>Mindre politisk debatt:</strong> Färre tydliga alternativ kan
                minska det politiska engagemanget.
              </li>
              <li>
                <strong>Risk för "korridorpolitik":</strong> Viktiga beslut fattas i små
                grupper bakom stängda dörrar.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Exempel:</strong> Efter 2022 samarbetade M+S i cirka 50 kommuner,
              och i Degerfors styr M+V tillsammans.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 7. DISKUSSIONSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. DISKUSSIONSFRÅGOR</h2>

        {/* D1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. Ska badhus/teater vara skattesubventionerade?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Argument för skattesubventionering:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Jämlikhet:</strong> Alla ska ha råd att delta i kultur- och
                fritidsaktiviteter.
              </li>
              <li>
                <strong>Folkhälsa:</strong> Simning är viktigt för hälsan, särskilt för
                barns simkunnighet.
              </li>
              <li>
                <strong>Allmännytta:</strong> Kultur och idrott skapar mötesplatser och
                stärker samhällsgemenskapen.
              </li>
              <li>
                <strong>Framtidsinvestering:</strong> Barn som lär sig simma och utövar
                kultur blir trygga och utvecklade individer.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Argument mot skattesubventionering:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>Orättvist:</strong> De som inte badar eller går på teater betalar
                för andras nöjen.
              </li>
              <li>
                <strong>Effektivitet:</strong> Marknaden skulle kunna driva dessa
                verksamheter mer effektivt.
              </li>
              <li>
                <strong>Prioritering:</strong> Kommunens pengar borde gå till
                kärnverksamheter som skola och äldreomsorg.
              </li>
              <li>
                <strong>Egenansvar:</strong> Människor kan själva välja vad de vill lägga
                sina pengar på.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> De flesta kommuner väljer att subventionera dessa
              verksamheter för att säkerställa tillgänglighet, men graden av subvention
              varierar.
            </p>
          </div>
        </div>

        {/* D2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. Vad skulle få dig att gå med i ett parti?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Vad som får unga att engagera sig:</strong>
            </p>
            <ul className={classes.list}>
              <li>Ser något konkret i sin kommun som de vill förändra.</li>
              <li>Känner en stark personlig åsikt och vill påverka.</li>
              <li>Har blivit inbjudna eller uppmuntrade av någon.</li>
              <li>Vill göra skillnad i samhället och känna meningsfullhet.</li>
              <li>Ser att politiken faktiskt påverkar deras vardag.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Hinder för engagemang:</strong>
            </p>
            <ul className={classes.list}>
              <li>Upplevelse att politiker "inte lyssnar" på unga.</li>
              <li>Tidsbrist och konkurrens från andra aktiviteter.</li>
              <li>Känsla av att ens röst inte spelar någon roll.</li>
              <li>Partipolitik upplevs som konfliktfylld och tråkig.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Slutsats:</strong> Lokala, konkreta frågor och personliga kontakter
              är ofta viktigare än stora ideologiska visioner.
            </p>
          </div>
        </div>

        {/* D3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D3. Borde kommunen få stödja privata företag för att förhindra arbetslöshet?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Vad lagen säger:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>EU:s statsstödsregler:</strong> Förbjuder offentligt stöd till
                enskilda företag som snedvrider konkurrensen.
              </li>
              <li>
                <strong>Svensk lag:</strong> Kommuner får inte gå in som ägare eller ge
                särskilda förmåner till enskilda företag.
              </li>
              <li>
                <strong>Undantag:</strong> I akuta krissituationer kan staten tillåta
                "krisstöd".
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Vad kommunen FÅR göra:</strong>
            </p>
            <ul className={classes.list}>
              <li>Skapa allmänna förutsättningar (vägar, tomter, bredband).</li>
              <li>Erbjuda generella rådgivnings- och stödtjänster.</li>
              <li>Använda kommunala inköp för att stödja lokala företag.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>Vad kommunen INTE FÅR göra:</strong>
            </p>
            <ul className={classes.list}>
              <li>Ge ett företag lägre hyra eller skatt än andra.</li>
              <li>Låna ut pengar till ett specifikt företag.</li>
              <li>Gå in som delägare i ett privat företag.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 8. NYCKELORD ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. NYCKELORD</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>Kommunal självstyrelse:</span> Kommuners
            och regioners rätt att själva bestämma över sina angelägenheter inom lagens
            ram. Grundlagsskyddat.
          </li>
          <li>
            <span className={classes.keyword}>Kommunalförbund:</span>
            Samarbetsorganisation mellan flera kommuner för att lösa gemensamma uppgifter,
            t.ex. räddningstjänst eller avfallshantering.
          </li>
          <li>
            <span className={classes.keyword}>Kommunallagen:</span> Den lag (KL) som
            reglerar hur kommuner och regioner ska styras och organiseras.
          </li>
          <li>
            <span className={classes.keyword}>Kommunfullmäktige:</span> Kommunens högsta
            beslutande organ, väljs direkt av invånarna. Motsvarar "parlamentet" på
            kommunal nivå.
          </li>
          <li>
            <span className={classes.keyword}>Kommunstyrelsen:</span> Kommunens viktigaste
            nämnd, fungerar som en "regering". Ansvarar för ekonomi, planering och
            genomförande av fullmäktiges beslut.
          </li>
          <li>
            <span className={classes.keyword}>Myndighetsutövning:</span> Beslut som
            påverkar enskilda medborgares rättigheter eller skyldigheter, t.ex. beslut om
            alkoholtillstånd eller försörjningsstöd.
          </li>
          <li>
            <span className={classes.keyword}>Nämnd:</span> Politisk grupp med ansvar för
            ett specifikt verksamhetsområde, t.ex. socialnämnd, barn- och utbildningsnämnd.
          </li>
          <li>
            <span className={classes.keyword}>Politiker:</span> Förtroendevald person som
            fattar politiska beslut. Väljs av invånarna i val.
          </li>
          <li>
            <span className={classes.keyword}>Regionfullmäktige:</span> Regionens högsta
            beslutande organ, motsvarar kommunfullmäktige på regional nivå.
          </li>
          <li>
            <span className={classes.keyword}>Regionstyrelsen:</span> Regionens ledande
            nämnd, motsvarar kommunstyrelsen på regional nivå.
          </li>
          <li>
            <span className={classes.keyword}>Representativitet:</span> Principen att de
            folkvalda politikerna representerar och agerar för invånarnas bästa.
          </li>
          <li>
            <span className={classes.keyword}>Skattekraft:</span> Mått på invånarnas
            genomsnittliga beskattningsbara inkomst i en kommun/region. Hög skattekraft =
            rikare invånare.
          </li>
          <li>
            <span className={classes.keyword}>Skatteutjämningsbidrag:</span> Pengar som
            fördelas från rika till fattiga kommuner för att skapa likvärdiga ekonomiska
            förutsättningar. Kallas "Robin Hood-avgiften".
          </li>
          <li>
            <span className={classes.keyword}>Statsbidrag:</span> Pengar från staten till
            kommuner/regioner, antingen generella (fria) eller riktade till specifika
            ändamål.
          </li>
          <li>
            <span className={classes.keyword}>Tjänsteperson:</span> Anställd tjänsteman
            som förbereder och genomför politikernas beslut. Är opolitisk och sakkunnig.
          </li>
        </ul>
      </section>
    </div>
  );
}