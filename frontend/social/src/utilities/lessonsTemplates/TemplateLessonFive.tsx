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

export default function TemplateLessonFive() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>KAPITEL 5: RÄTTSSTAT OCH RÄTTSPRINCIPER</h1>
      <p className={classes.subtitle}>Fullständig sammanfattning</p>

      {/* ===== 1. RÄTTSSTATEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. RÄTTSSTATEN – GRUNDLÄGGANDE PRINCIPER</h2>

        <h3 className={classes.subHeading}>Definition av rättsstat</h3>
        <ul className={classes.list}>
          <li>Sverige är en rättsstat (engelska: rule of law)</li>
          <li>En central del i västerländsk liberal demokrati</li>
          <li>
            Bygger på två huvudpelare:
            <ul className={classes.list}>
              <li>Folkviljan (fria val)</li>
              <li>Existensen av en rättsstat</li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>Kännetecken för en rättsstat</h3>
        <ul className={classes.list}>
          <li>All offentlig maktutövning är underkastad rättsliga principer</li>
          <li>Särskilt när maktutövning riktas mot enskilda individer</li>
        </ul>
      </section>

      {/* ===== 2. RÄTTSVÄSENDET ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. RÄTTSVÄSENDET</h2>

        <h3 className={classes.subHeading}>Definition</h3>
        <ul className={classes.list}>
          <li>De myndigheter som ansvarar för rättssäkerhet och rättstrygghet i samhället</li>
        </ul>

        <h3 className={classes.subHeading}>Mål för kriminalpolitiken</h3>
        <ul className={classes.list}>
          <li>Minska brottsligheten</li>
          <li>Öka människors trygghet</li>
        </ul>

        <h3 className={classes.subHeading}>Myndigheter inom rättsväsendet</h3>
        <ul className={classes.list}>
          <li>Sveriges Domstolar (cirka 80 domstolar + myndigheter och nämnder)</li>
          <li>Polisen – brottsförebyggande och utredande</li>
          <li>Åklagarmyndigheten</li>
          <li>Kriminalvården</li>
          <li>Brottsförebyggande rådet (Brå)</li>
          <li>Brottsoffermyndigheten</li>
        </ul>
      </section>

      {/* ===== 3. DOMSTOLAR I SVERIGE ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. DOMSTOLAR I SVERIGE</h2>

        <h3 className={classes.subHeading}>Tre typer av domstolar</h3>

        <h4 className={classes.subHeading}>A. Allmänna domstolar</h4>
        <ul className={classes.list}>
          <li>Avgör mål inom civilrätt (mål mellan enskilda)</li>
          <li>Avgör mål inom offentlig rätt (mål mellan offentlig makt och enskilda)</li>
          <li>Inkluderar brottmål (t.ex. inbrott)</li>
        </ul>

        <h4 className={classes.subHeading}>B. Förvaltningsdomstolar</h4>
        <ul className={classes.list}>
          <li>Hanterar tvister mellan enskilda/företag och myndigheter (t.ex. skatt eller beslut om bistånd)</li>
          <li>Instanser: Förvaltningsrätt, Kammarrätt och Högsta förvaltningsdomstolen</li>
        </ul>

        <h4 className={classes.subHeading}>C. Specialdomstolar</h4>
        <ul className={classes.list}>
          <li>Hanterar specifika rättsområden, till exempel Arbetsdomstolen eller fastighetsdomstolar</li>
        </ul>

        <h3 className={classes.subHeading}>Högsta domstolen</h3>
        <ul className={classes.list}>
          <li>Högsta instans bland de allmänna domstolarna</li>
          <li>Kräver prövningstillstånd för att mål ska tas upp</li>
          <li>Prövningstillstånd beviljas endast om målet är av betydelse för bedömning av andra mål av liknande karaktär (prejudikat)</li>
          <li>Enda allmänna domstolen i Högsta domstolen är Högsta domstolen</li>
        </ul>
      </section>

      {/* ===== 4. DEMOKRATI OCH RÄTTSSKIPNING ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. DEMOKRATI OCH RÄTTSSKIPNING</h2>

        <h3 className={classes.subHeading}>Krav för demokrati (utöver fria val)</h3>
        <ul className={classes.list}>
          <li>Fria val</li>
          <li>Fri opinionsbildning</li>
          <li>Oberoende rättsväsende</li>
        </ul>

        <h3 className={classes.subHeading}>Regeringsformen (RF 11:3)</h3>
        <p className={classes.paragraph}>
          <em>"Ingen myndighet, inte heller riksdagen, får bestämma hur en domstol ska döma i det enskilda fallet."</em>
        </p>

        <h3 className={classes.subHeading}>Utmaningar mot rättsstaten</h3>
        <ul className={classes.list}>
          <li>Vissa regeringspartier i Europa vill ändra rättsstaternas rättsperspektiv</li>
          <li>Exempel: Politiker vill utse domare som är lojala med sittande regering i känsliga frågor</li>
          <li>Syfte: Få igenom politiska förslag utan att domstolar bromsar</li>
        </ul>
      </section>

      {/* ===== 5. GRUNDLÄGGANDE RÄTTSPRINCIPER ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. GRUNDLÄGGANDE RÄTTSPRINCIPER</h2>

        <h4 className={classes.subHeading}>A. Lagbunden myndighetsutövning</h4>
        <ul className={classes.list}>
          <li>"Inget straff utan lag"</li>
          <li>Ett beslut om påföljd ska vara grundat i lagen</li>
        </ul>

        <h4 className={classes.subHeading}>B. Rätt till rättegång</h4>
        <ul className={classes.list}>
          <li>Enskild individ ska kunna få sin sak prövad i domstol</li>
          <li>Rätt till rättegång inom rimlig tid</li>
          <li>Offentlig rättegång</li>
          <li>Opartisk domstol</li>
        </ul>

        <h4 className={classes.subHeading}>C. Allas likhet inför lagen</h4>
        <ul className={classes.list}>
          <li>Domstolar och offentliga myndigheter ska behandla människor jämlikt i juridisk mening</li>
          <li>Saklighet och opartiskhet</li>
        </ul>

        <h4 className={classes.subHeading}>D. Förbud mot retroaktiv lagstiftning</h4>
        <ul className={classes.list}>
          <li>Ett straff får inte utdömas för en gärning som inte var kriminell när den begicks</li>
        </ul>

        <h4 className={classes.subHeading}>E. Domares oavsättlighet</h4>
        <ul className={classes.list}>
          <li>Regeringen kan inte avsätta domare</li>
          <li>Ingen kan bestämma eller påverka hur en domare ska döma i ett enskilt fall</li>
        </ul>

        <h4 className={classes.subHeading}>F. "Hellre fria än fälla" (In dubio pro reo)</h4>
        <ul className={classes.list}>
          <li>Den utpekade ska inte fällas om det finns tvivel om dennes skuld</li>
        </ul>
      </section>

      {/* ===== 6. YTTERLIGARE RÄTTSPRINCIPER ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. YTTERLIGARE RÄTTSPRINCIPER</h2>

        <h4 className={classes.subHeading}>A. Proportionalitetsprincipen</h4>
        <ul className={classes.list}>
          <li>En åtgärd får inte vara mer ingripande än nödvändigt</li>
          <li>Straffets stränghet ska motsvara brottets svårighetsgrad</li>
        </ul>

        <h4 className={classes.subHeading}>B. Skuldprincipen</h4>
        <ul className={classes.list}>
          <li>En person som begått en gärning med uppsåt eller oaktsamhet</li>
          <li>Därmed uppvisat skuld kan åtalas och straffas</li>
        </ul>

        <h4 className={classes.subHeading}>C. Likabehandlingsprincipen</h4>
        <ul className={classes.list}>
          <li>Lika fall ska behandlas lika</li>
        </ul>

        <h4 className={classes.subHeading}>D. Legalitetsprincipen</h4>
        <ul className={classes.list}>
          <li>"Den offentliga makten utövas under lagarna" (RF 1:2)</li>
          <li>Alla beslut eller åtgärder måste ha lagstöd</li>
          <li>Gäller både positiva beslut (t.ex. ekonomiskt bistånd) och negativa beslut (t.ex. straff)</li>
          <li>Garanti för den enskildes rättssäkerhet</li>
        </ul>

        <h3 className={classes.subHeading}>Offentlighet i rättegångar</h3>
        <ul className={classes.list}>
          <li>Utgångspunkten: Alla rättegångar i Sverige är offentliga</li>
          <li>Allmänheten kan normalt delta som åhörare</li>
          <li>Undantag: Delar av rättegången kan hållas bakom stängda dörrar vid känsliga uppgifter</li>
        </ul>
      </section>

      {/* ===== 7. RÄTTSSYSTEM I SVERIGE OCH ANDRA LÄNDER ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. RÄTTSSYSTEM I SVERIGE OCH ANDRA LÄNDER</h2>

        <h3 className={classes.subHeading}>Lekmannadömande (historisk bakgrund)</h3>
        <ul className={classes.list}>
          <li>Ursprung i antikens Grekland</li>
          <li>Tanken: "Dömas av sina likar"</li>
        </ul>

        <h4 className={classes.subHeading}>A. Nämndemannasystemet (Sverige)</h4>
        <ul className={classes.list}>
          <li><strong>Nämndeman:</strong> Lekman (ej juristutbildad, amatör)</li>
          <li>Dömer tillsammans med lagfarna domare</li>
          <li>Samma mandat som ordinarie domare</li>
          <li>Väljs för fyra år</li>
          <li>Väljs ur krets nominerad av politiska partier</li>
          <li>Allsidig sammansättning eftersträvas (ålder, kön, yrke)</li>
          <li><strong>Fördel:</strong> Garanti för att domstolens verksamhet följer allmänna rättsmedvetandet</li>
          <li>Nämndemän kan tillföra annorlunda syn än jurister</li>
        </ul>

        <h4 className={classes.subHeading}>B. Jurysystemet (USA och Storbritannien)</h4>
        <ul className={classes.list}>
          <li>Juryn dömer om den åtalade är skyldig eller inte</li>
          <li>Fallande domar måste vara enhälliga (ej alltid friande domar)</li>
          <li>Domaren avgör påföljden</li>
          <li><strong>Fördel:</strong> Tillför moralisk dimension</li>
          <li>Speglar samhället (fellow citizens = vanliga medborgare)</li>
          <li>Gör en rättvisedömning (till skillnad från svenska domstolar som endast bedömer vad som är rätt enligt lag)</li>
        </ul>
      </section>

      {/* ===== 8. STRAFFTEORI ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. STRAFFTEORI</h2>

        <h3 className={classes.subHeading}>Definition</h3>
        <ul className={classes.list}>
          <li>Begrepp inom juridiken som handlar om straffens syften och verkan</li>
        </ul>

        <h3 className={classes.subHeading}>Prevention (modern syn)</h3>
        <p className={classes.paragraph}>Påföljden ska påverka vårt beteende</p>

        <h4 className={classes.subHeading}>A. Allmänprevention</h4>
        <ul className={classes.list}>
          <li>Påföljden ska vara avskräckande</li>
          <li>Får folk i allmänhet att låta bli att begå brott</li>
          <li>Syfte: Attityder till kriminalisering blir mer sällsynta</li>
          <li>Vanligt i Sverige</li>
        </ul>

        <h4 className={classes.subHeading}>B. Individualprevention</h4>
        <ul className={classes.list}>
          <li>Syfte: Förändra beteendet hos den enskilde lagöverträdaren</li>
          <li>
            Tre sätt:
            <ol className={classes.list}>
              <li><strong>Individuell avskräckning</strong></li>
              <li><strong>Inkapacitering</strong> – Förhindra brottsliga handlingar genom att hålla brottslingen bakom lås och bom</li>
              <li><strong>Rehabilitering</strong> – Satsning på vård eller behandling</li>
            </ol>
          </li>
        </ul>

        <h3 className={classes.subHeading}>Hämnd/Vedergällning (äldre syn, förekommer i USA)</h3>
        <ul className={classes.list}>
          <li>"Öga för öga, tand för tand" (Gamla testamentet)</li>
          <li>Skipa rättvisa genom att tillföra brottslingen lika stort lidande</li>
          <li>Brottslingen sonar sitt brott</li>
          <li>Inget direkt syfte mer än att skipa rättvisa</li>
        </ul>
      </section>

      {/* ===== 9. ANONYMA VITTNEN ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. ANONYMA VITTNEN</h2>

        <h3 className={classes.subHeading}>Definition</h3>
        <ul className={classes.list}>
          <li>Vittnen vars identitet inte är känd för den misstänkte</li>
        </ul>

        <h3 className={classes.subHeading}>Nuvarande situation i Sverige</h3>
        <ul className={classes.list}>
          <li>Inte möjligt för vittne att lämna uppgifter anonymt under rättegången</li>
        </ul>

        <h3 className={classes.subHeading}>Bakgrund till förslaget</h3>
        <ul className={classes.list}>
          <li>Ökning av kriminella grupperingar och nätverk (senaste 20 åren)</li>
          <li>Ökning av skjutningar med dödsutgång</li>
          <li>Utbredd tystnadskultur kring kriminella nätverk</li>
          <li>Lågt förtroende för polisen</li>
          <li>Rådsla och motvilja att delta i rättsprocess</li>
          <li>Våld och hot mot vittnen, målsägande och anmälare</li>
        </ul>

        <h3 className={classes.subHeading}>Konsekvenser av tystnadskultur</h3>
        <ul className={classes.list}>
          <li>Brottsutredningar läggs ned</li>
          <li>Gärningsmän går fria på grund av bristande bevisning</li>
          <li>Allmänhetens förtroende för rättsväsendet urholkas</li>
          <li>Hot mot demokratin och rättsstaten</li>
        </ul>

        <h3 className={classes.subHeading}>Lagförslag (november 2023)</h3>
        <ul className={classes.list}>
          <li><strong>Utredare:</strong> Fredrik Wersäll</li>
          <li>
            <strong>Förutsättningar för anonyma vittnen:</strong>
            <ul className={classes.list}>
              <li>Minimistraff för brottet: 2 års fängelse</li>
              <li>Påtaglig risk för vittnet eller familjen att utsättas för brott mot liv, hälsa, frihet eller frid</li>
            </ul>
          </li>
          <li>Varken domstolen, försvararen eller den misstänkte får veta vittnets identitet</li>
        </ul>

        <h3 className={classes.subHeading}>Kritik mot anonyma vittnen</h3>

        <h4 className={classes.subHeading}>Från Europadomstolen</h4>
        <ul className={classes.list}>
          <li>Berör principen: Den misstänkte ska kunna granska och bemöta uppgifter som lämnas till hens nackdel</li>
        </ul>

        <h4 className={classes.subHeading}>Från Stefan Johansson (domare i Högsta domstolen)</h4>
        <ul className={classes.list}>
          <li>Anonyma vittnen kommer inte att bryta tystnadskulturen</li>
          <li>Inte lösningen på problem med skjutningar och sprängningar</li>
          <li>Kan endast användas i "ytterst fåtal" fall</li>
          <li>Lågt bevisvärde</li>
          <li>Riskerar att invagga vittnen i falsk tro</li>
          <li>Principen: Den åtalade har rätt att ta del av information som ligger till grund för anklagelsen</li>
          <li>Den tilltalade kan inte veta om vittnet har:
            <ul className={classes.list}>
              <li>Personlig agenda</li>
              <li>Ovilja mot den tilltalade</li>
              <li>Andra omständigheter som påverkar trovärdighet</li>
            </ul>
          </li>
        </ul>

        <h4 className={classes.subHeading}>Från utredaren Wersäll</h4>
        <ul className={classes.list}>
          <li>Verkligheten med svårbemästrad kriminalitet framtvingar avsteg från normala principer</li>
          <li>Ännu större hot om tungt kriminella går fria</li>
        </ul>

        <h3 className={classes.subHeading}>Fördelar med anonyma vittnen</h3>
        <ul className={classes.list}>
          <li>Vittnen kan känna sig trygga att lämna uppgifter</li>
          <li>Bryta tystnadskulturen</li>
          <li>Öka lagföringen</li>
          <li>Rättsväsendet kan erbjuda skydd</li>
        </ul>

        <h3 className={classes.subHeading}>Nackdelar med anonyma vittnen</h3>
        <ul className={classes.list}>
          <li>Bryter mot den tilltalades rätt att bemöta bevisning</li>
          <li>Risk för falska vittnesmål</li>
          <li>Lågt bevisvärde</li>
          <li>Kan skapa falsk trygghet hos vittnen</li>
          <li>Urholkar grundläggande rättsprinciper</li>
        </ul>
      </section>

      {/* ===== 10. ORDLISTA ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>10. ORDLISTA – VIKTIGA BEGREPP</h2>

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
                <td className={classes.td}><strong>Rättsstat</strong></td>
                <td className={classes.td}>Stat där all offentlig maktutövning är underkastad rättsliga principer (rule of law)</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Allmänna domstolar</strong></td>
                <td className={classes.td}>Avgör civilrättsliga och offentligrättsliga mål, inklusive brottmål</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Civilrätt</strong></td>
                <td className={classes.td}>Mål mellan enskilda</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Offentlig rätt</strong></td>
                <td className={classes.td}>Mål mellan offentlig makt och enskilda</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Brottmål</strong></td>
                <td className={classes.td}>Mål som handlar om begångna brott</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Nämndeman</strong></td>
                <td className={classes.td}>Lekman (ej jurist) som dömer tillsammans med lagfarna domare</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Jury</strong></td>
                <td className={classes.td}>Grupp lekmän som avgör skuld i brottmål (USA/Storbritannien)</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Allmänprevention</strong></td>
                <td className={classes.td}>Straff ska avskräcka allmänheten från brott</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Individualprevention</strong></td>
                <td className={classes.td}>Straff ska förändra den enskilde brottslingens beteende</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Inkapacitering</strong></td>
                <td className={classes.td}>Förhindra brott genom att hålla brottslingen inlåst</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Rehabilitering</strong></td>
                <td className={classes.td}>Vård/behandling av brottsling</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Prövningstillstånd</strong></td>
                <td className={classes.td}>Tillstånd för att ett mål ska tas upp i högre instans</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Prejudikat</strong></td>
                <td className={classes.td}>Dom som är vägledande för liknande mål</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Proportionalitetsprincipen</strong></td>
                <td className={classes.td}>Åtgärd får inte vara mer ingripande än nödvändigt</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Skuldprincipen</strong></td>
                <td className={classes.td}>Straff kräver uppsåt eller oaktsamhet</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Legalitetsprincipen</strong></td>
                <td className={classes.td}>All offentlig maktutövning måste ha lagstöd</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Retroaktiv lagstiftning</strong></td>
                <td className={classes.td}>Lag som verkar bakåt i tiden (förbjudet)</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>In dubio pro reo</strong></td>
                <td className={classes.td}>"Hellre fria än fälla" – tvivel ska gå den tilltalade till godo</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Lekmannadömande</strong></td>
                <td className={classes.td}>System där icke-jurister deltar i dömande</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Anonyma vittnen</strong></td>
                <td className={classes.td}>Vittnen vars identitet hemlighålls för den misstänkte</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Tystnadskultur</strong></td>
                <td className={classes.td}>Att vittnen inte vågar lämna uppgifter av rädsla</td>
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
            1. Sverige brukar beskrivas som en rättsstat. Vad innebär det?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det innebär att all offentlig makt utövas under lagarna. Politikerna stiftar lagar medan oberoende domstolar och myndigheter tillämpar dem. Medborgarna har skydd mot övergrepp från staten, alla är lika inför lagen, och ingen kan straffas utan lagstöd.
            </p>
          </div>
        </div>

        {/* Fråga 2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. Vad menas med rättsväsendet?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              De myndigheter som ansvarar för rättssäkerhet och rättstrygghet i samhället. Det inkluderar bland annat Polisen, Åklagarmyndigheten, Sveriges Domstolar, Kriminalvården, Brottsförebyggande rådet (Brå) och Brottsoffermyndigheten.
            </p>
          </div>
        </div>

        {/* Fråga 3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. Vilka domstolar finns det och vilken är skillnaden mellan dem?
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Allmänna domstolar:</strong> Hanterar civilrätt (tvistemål mellan enskilda) och offentlig rätt (brottmål). Instanser: Tingsrätt, Hovrätt och Högsta domstolen.
              </li>
              <li>
                <strong>Förvaltningsdomstolar:</strong> Hanterar tvister mellan enskilda/företag och myndigheter (t.ex. skatt eller beslut om bistånd). Instanser: Förvaltningsrätt, Kammarrätt och Högsta förvaltningsdomstolen.
              </li>
              <li>
                <strong>Specialdomstolar:</strong> Hanterar specifika rättsområden, till exempel Arbetsdomstolen eller fastighetsdomstolar.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. Vad menas med det allmänna rättsmedvetandet?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Allmänhetens (den vanliga medborgarens) uppfattning om vad som ska vara straffbart och hur stränga straffen bör vara. Det förändras över tid och påverkar lagstiftningen.
            </p>
          </div>
        </div>

        {/* Fråga 5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            5. Ange några grundläggande principer för en rättsstat.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>Legalitetsprincipen:</strong> Inget straff utan lag och all maktutövning måste ha lagstöd.
              </li>
              <li>
                <strong>Förbud mot retroaktiv lagstiftning:</strong> Man kan inte straffas för något som inte var olagligt när det utfördes.
              </li>
              <li>
                <strong>Allas likhet inför lagen:</strong> Domstolar och myndigheter ska behandla alla opartiskt och jämlikt.
              </li>
              <li>
                <strong>In dubio pro reo:</strong> "Hellre fria än fälla" – finns det tvivel om skuld ska den misstänkte frias.
              </li>
              <li>
                <strong>Proportionalitetsprincipen:</strong> En åtgärd eller ett straff får inte vara mer ingripande än nödvändigt.
              </li>
            </ul>
          </div>
        </div>

        {/* Fråga 6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. Vilken är skillnaden mellan nämndemannasystem och jurysystem?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              I det svenska <strong>nämndemannasystemet</strong> dömer lekmän (nämndemän) tillsammans med utbildade domare och har samma mandat. I ett <strong>jurysystem</strong> (som i USA) avgör en jury av lekmän ensamma om den åtalade är skyldig eller oskyldig, varpå domaren bestämmer påföljden. Juryn gör en mer moralisk och rättvisemässig bedömning.
            </p>
          </div>
        </div>

        {/* Fråga 7 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. Vad är skillnaden mellan allmänprevention och individualprevention?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>Allmänprevention</strong> handlar om att straffet ska vara avskräckande för befolkningen i stort så att människor avstår från att begå brott. <strong>Individualprevention</strong> fokuserar på att förhindra att den enskilde lagöverträdaren begår nya brott (genom avskräckning, rehabilitering/vård eller inkapacitering).
            </p>
          </div>
        </div>
      </section>

      {/* ===== ANALYSFRÅGOR ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>ANALYSFRÅGOR</h2>

        {/* Fråga 8 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. Vad menas med inkapacitering?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Att förhindra en person från att begå nya brott genom att fysiskt ta bort möjligheten, oftast genom att låsa in personen i fängelse.
            </p>
          </div>
        </div>

        {/* Fråga 9 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. Vilken är Lagrådets roll?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Lagrådet bestående av domare från Högsta domstolen och Högsta förvaltningsdomstolen granskar regeringens lagförslag innan de blir lag. De kontrollerar att lagarna inte krockar med grundlagarna, Europakonventionen om mänskliga rättigheter eller skapar juridiska tillämpningsproblem.
            </p>
          </div>
        </div>

        {/* Fråga 10 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. Ange några olika typer av kriminella nätverk.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Lokala kriminella nätverk (ofta knutna till narkotikahandel och ett geografiskt område), våldsbejakande extremism (högerextrema, autonom vänster, islamistisk extremism), samt tongivande kriminella aktörer som utnyttjar legala företagsstrukturer och specialister.
            </p>
          </div>
        </div>

        {/* Fråga 11 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. Ge exempel på några faktorer som kan tänkas bidra till att ungdomar hamnar i kriminalitet.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Alkohol- och droganvändning, problematiska kamratrelationer, bristfälliga skolprestationer, överaktivitet/impulsivitet/koncentrationssvårigheter, samt föräldrarnas egna svårigheter eller bristande engagemang.
            </p>
          </div>
        </div>

        {/* Fråga 12 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. Vad menas med välfärdsbrottslighet?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              När externa aktörer (företag eller privatpersoner) olovligen utnyttjar och tillskansar sig offentliga medel/skattepengar för egen vinning. Det kan gälla bidragsfusk med sjukpenning/assistansersättning, falska testcentraler, eller kriminella som driver vårdcentraler, HVB-hem och apotek.
            </p>
          </div>
        </div>

        {/* Fråga 13 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. Ibland används begreppet multikriminell om ekonomiska brottslingar. Vad menas med det?
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              Det innebär att samma personer/brottslingar begår flera helt olika typer av brott. Till exempel att personer som utför skjutningar och narkotikabrott samtidigt ägnar sig åt ekonomiska bedrägerier och tvättar pengar för att återinvestera i vapen och knark.
            </p>
          </div>
        </div>
      </section>

      {/* ===== EXTRA: CIVILRÄTT VS OFFENTLIG RÄTT ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>SKILLNADEN MELLAN CIVILRÄTT OCH OFFENTLIG RÄTT</h2>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>Kriterium</th>
                <th className={classes.th}>Civilrätt</th>
                <th className={classes.th}>Offentlig rätt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}><strong>Parter</strong></td>
                <td className={classes.td}>Privatperson–privatperson, privatperson–företag, företag–företag</td>
                <td className={classes.td}>Staten/myndigheter–medborgare eller staten–andra stater</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Relationskaraktär</strong></td>
                <td className={classes.td}>Jämbördiga parter</td>
                <td className={classes.td}>Ojämbördiga parter (myndigheten har överordnad ställning)</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Exempel</strong></td>
                <td className={classes.td}>Avtalsrätt, köprätt, skadestånd, familjerätt (vårdnad)</td>
                <td className={classes.td}>Straffrätt, skatterätt, förvaltningsrätt, konstitutionell rätt</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Initiativtagare</strong></td>
                <td className={classes.td}>Den enskilde parten (käranden) stämmer den andra parten (svaranden)</td>
                <td className={classes.td}>Staten genom åklagare (vid brott) eller en myndighet genom beslut/granskning</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Måltyp</strong></td>
                <td className={classes.td}>Tvistemål (civilmål)</td>
                <td className={classes.td}>Brottmål (inom straffrätt) eller förvaltningsmål</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Lagstiftningens karaktär</strong></td>
                <td className={classes.td}>Ofta dispositiv (lagarna gäller om parterna inte har avtalat om något annat)</td>
                <td className={classes.td}>Oftast tvingande (kan inte avtalas bort av enskilda)</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>Syfte/Mål</strong></td>
                <td className={classes.td}>Lösa en ekonomisk eller personlig tvist och återställa balansen mellan två parter</td>
                <td className={classes.td}>Upprätthålla allmän ordning, skydda samhället eller garantera rättssäkerhet mot statliga övergrepp</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.subHeading}>Dispositiva vs. Tvingande regler</h3>
        <ul className={classes.list}>
          <li>
            <strong>Civilrätt:</strong> Många lagar är dispositiva. Det innebär att parterna har avtalsfrihet och kan komma överens om villkor som avviker från lagen. Exempel: Vid försäljning av en begagnad bil mellan två privatpersoner kan köpare och säljare komma överens om att bilen säljs utan garanti eller i befintligt skick.
          </li>
          <li>
            <strong>Offentlig rätt:</strong> Lagreglerna är nästan alltid tvingande. En medborgare kan inte avtala med staten om att slippa betala skatt eller att en specifik handling inte ska räknas som ett brott.
          </li>
        </ul>

        <h3 className={classes.subHeading}>Gränsfall och överlappningar</h3>
        <p className={classes.paragraph}>
          <strong>Trafikolycka:</strong> Om person A kör på person B kan detta initiera processer i båda rättsområdena:
        </p>
        <ul className={classes.list}>
          <li>
            <strong>Offentlig rätt (Straffrätt):</strong> Staten (åklagaren) kan väcka åtal mot person A för vårdslöshet i trafik i allmän domstol.
          </li>
          <li>
            <strong>Civilrätt (Skadeståndsrätt):</strong> Person B kan kräva ersättning och skadestånd från person A (eller dennes försäkringsbolag) för reparationskostnader och personskador.
          </li>
        </ul>
      </section>
    </div>
  );
}