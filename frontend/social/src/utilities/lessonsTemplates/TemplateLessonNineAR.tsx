import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "32px",
    lineHeight: 1.8,
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

export default function TemplateLessonNineAR() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>الفصل 9: النظم السياسية في الدول الأخرى</h1>
      <p className={classes.subtitle}>
        ملخص شامل مع الأسئلة والتحليل والمناقشة والمفاهيم الأساسية
      </p>

      {/* ===== 1. الملكية والجمهورية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. الملكية والجمهورية</h2>
        <p className={classes.paragraph}>
          يشرح هذا القسم النظامين السياسيين الرئيسيين في العالم: الملكية والجمهورية.
          يكمن الفرق في كيفية اختيار رئيس الدولة ونوع السلطة التي يتمتع بها.
        </p>

        <h3 className={classes.subHeading}>الملكية</h3>
        <ul className={classes.list}>
          <li>
            في النظام الملكي، يكون رئيس الدولة <strong>ملكًا</strong> (ملك، ملكة، إمبراطور، أو أمير).
          </li>
          <li>
            <strong>ما الذي يحدد ما إذا كانت الدولة ملكية أم جمهورية؟</strong> في الملكية، رئيس الدولة هو
            ملك، بينما في الجمهورية رئيس الدولة هو <strong>رئيس</strong>.
          </li>
          <li>
            <strong>الملكية الوراثية:</strong> يرث الملك منصبه وفقًا لترتيب الخلافة. معظم الملكيات في
            أوروبا اليوم هي <strong>ملكيات دستورية</strong>.
          </li>
          <li>
            <strong>نظام الانتخاب:</strong> في الملكيات، يكون وراثة العرش، وليس انتخابيًا.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الملكية المطلقة</h3>
        <ul className={classes.list}>
          <li>
            يتمتع الملك بجميع <strong>السلطات السياسية الفعلية</strong> ويحكم البلاد دون قيود.
          </li>
          <li>
            <strong>أمثلة:</strong> المملكة العربية السعودية، قطر، عُمان، الإمارات العربية المتحدة، وبروناي.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الملكية الدستورية</h3>
        <ul className={classes.list}>
          <li>
            يؤدي الملك فقط <strong>مهامًا احتفالية</strong>، بينما تمارس السلطة الفعلية من قبل سياسيين
            منتخبين من الشعب.
          </li>
          <li>
            <strong>أمثلة:</strong> السويد، بريطانيا، النرويج، الدنمارك، هولندا، بلجيكا، إسبانيا، واليابان.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الجمهورية</h3>
        <ul className={classes.list}>
          <li>
            نظام سياسي يكون فيه رئيس الدولة <strong>رئيسًا</strong> يُنتخب إما مباشرة من الشعب أو من
            قبل البرلمان.
          </li>
          <li>
            <strong>تختلف سلطة الرئيس:</strong> في الجمهوريات البرلمانية يكون دور الرئيس احتفاليًا، بينما
            في الجمهوريات الرئاسية يتمتع الرئيس بسلطة فعلية.
          </li>
          <li>
            <strong>أمثلة على الجمهوريات:</strong> الولايات المتحدة، فرنسا، ألمانيا، فنلندا، وإيطاليا.
          </li>
        </ul>
      </section>

      {/* ===== 2. الأنظمة السياسية – البرلمانية والرئاسية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. الأنظمة السياسية – البرلمانية والرئاسية</h2>
        <p className={classes.paragraph}>
          يشرح هذا القسم كيفية توزيع السلطة بين رئيس الدولة والحكومة والبرلمان في الأنظمة السياسية
          المختلفة.
        </p>

        <h3 className={classes.subHeading}>النظام البرلماني</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> نظام سياسي يجب أن تحظى فيه <strong>الحكومة</strong> بثقة
            <strong>البرلمان</strong> (الشعب) للبقاء في منصبها.
          </li>
          <li>
            <strong>الحكومة:</strong> يقودها <strong>رئيس وزراء</strong> (أو مستشار) يعينه رئيس الدولة
            ولكن يجب أن يوافق عليه البرلمان.
          </li>
          <li>
            <strong>سحب الثقة:</strong> إذا صوت البرلمان ضد الحكومة في اقتراع الثقة، يجب على الحكومة
            <strong>الاستقالة</strong>.
          </li>
          <li>
            <strong>أمثلة:</strong> السويد، بريطانيا، ألمانيا، فنلندا، الدنمارك، والنرويج.
          </li>
        </ul>

        <h3 className={classes.subHeading}>النظام الرئاسي</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> نظام سياسي يكون فيه <strong>الرئيس</strong> هو صاحب السلطة الفعلية
            ولا يعتمد على البرلمان للبقاء في منصبه.
          </li>
          <li>
            <strong>دور الرئيس:</strong> الرئيس هو <strong>رئيس الدولة</strong> و<strong>رئيس
            الحكومة</strong> ويعين أعضاء الحكومة بنفسه.
          </li>
          <li>
            <strong>تقسيم السلطات:</strong> يتم انتخاب الرئيس والبرلمان بشكل منفصل من قبل الشعب، مما يعني
            أنهما قد ينتميان إلى أحزاب مختلفة (<strong>"تعايش"</strong>).
          </li>
          <li>
            <strong>أمثلة:</strong> الولايات المتحدة، روسيا، البرازيل، المكسيك، وكوريا الجنوبية.
          </li>
        </ul>

        <h3 className={classes.subHeading}>النظام شبه الرئاسي</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> مزيج بين النظام البرلماني والرئاسي حيث يوجد في الدولة
            <strong>كل من</strong> رئيس (منتخب من الشعب) ورئيس وزراء (يعينه الرئيس).
          </li>
          <li>
            <strong>فرنسا:</strong> يعين الرئيس رئيس الوزراء، لكن <strong>البرلمان</strong>، وليس الرئيس،
            هو الذي يمكنه إقالة رئيس الوزراء. الرئيس هو الشخصية المهيمنة في سياسات الدفاع والخارجية.
          </li>
          <li>
            <strong>أمثلة:</strong> فرنسا، روسيا، البرتغال، فنلندا (قبل 2000)، وأوكرانيا.
          </li>
        </ul>
      </section>

      {/* ===== 3. الأنظمة الحزبية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. الأنظمة الحزبية</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم الأنظمة الحزبية المختلفة وخصائصها.
        </p>

        <h3 className={classes.subHeading}>مهام الأحزاب</h3>
        <ul className={classes.list}>
          <li>
            <strong>إنتاج الآراء:</strong> صياغة الأفكار والبرامج السياسية.
          </li>
          <li>
            <strong>ترشيح المرشحين:</strong> تعيين أشخاص للمناصب السياسية.
          </li>
          <li>
            <strong>الدعاية:</strong> نشر أفكارها وكسب دعم الناخبين.
          </li>
        </ul>

        <h3 className={classes.subHeading}>نظام الحزبين</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> نظام يتناوب فيه <strong>حزبان</strong> على السلطة.
          </li>
          <li>
            <strong>السبب:</strong> يحدث غالبًا في الدول التي تعتمد <strong>الانتخابات الأغلبية</strong>
            (مثل الولايات المتحدة وبريطانيا).
          </li>
          <li>
            <strong>الولايات المتحدة:</strong> يتناوب الديمقراطيون والجمهوريون على السلطة.
          </li>
          <li>
            <strong>بريطانيا:</strong> يتناوب حزب العمال والمحافظون على السلطة منذ بداية القرن العشرين.
          </li>
          <li>
            <strong>الأحزاب الإقليمية:</strong> حتى في نظام الحزبين، قد توجد أحزاب إقليمية، مثل الحزب
            الوطني الاسكتلندي في اسكتلندا أو Plaid Cymru في ويلز.
          </li>
        </ul>

        <h3 className={classes.subHeading}>نظام الحزب الواحد</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> <strong>حزب واحد</strong> فقط مسموح له بالعمل وتولي السلطة.
          </li>
          <li>
            <strong>الانتشار:</strong> في الديكتاتوريات، مثل الصين (الحزب الشيوعي)، كوريا الشمالية،
            فيتنام، وكوبا.
          </li>
          <li>
            <strong>الديمقراطية:</strong> لا يوجد بلد تمكن فيه نظام الحزب الواحد من التوافق مع الديمقراطية
            بالمعنى الغربي.
          </li>
        </ul>

        <h3 className={classes.subHeading}>نظام التعددية الحزبية</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> تمثيل عدة أحزاب في البرلمان.
          </li>
          <li>
            <strong>الديمقراطيات:</strong> السويد، ألمانيا، فنلندا، الدنمارك، وهولندا.
          </li>
          <li>
            <strong>الديكتاتوريات:</strong> روسيا، بيلاروسيا، تنزانيا ودول أفريقية أخرى – تعمل فعليًا
            كدول ذات حزب واحد لأن الحزب الحاكم يقمع أحزاب المعارضة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>"نظام اللاحزب"</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> دول <strong>ليس بها أي أحزاب سياسية</strong>.
          </li>
          <li>
            <strong>الانتشار:</strong> بشكل رئيسي في الدول الإسلامية في الشرق الأوسط، مثل السعودية،
            قطر، الأردن، والبحرين.
          </li>
          <li>
            <strong>الحكم:</strong> تهيمن العائلات الحاكمة على الحياة السياسية.
          </li>
        </ul>
      </section>

      {/* ===== 4. النظم الانتخابية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. النظم الانتخابية</h2>
        <p className={classes.paragraph}>
          يتناول هذا القسم النظامين الانتخابيين الرئيسيين: <strong>انتخابات الأغلبية</strong> و
          <strong>الانتخابات النسبية</strong>.
        </p>

        <h3 className={classes.subHeading}>انتخابات الأغلبية</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> يفوز بالمرشح الذي يحصل على <strong>أكبر عدد من الأصوات</strong>
            في الدائرة الانتخابية.
          </li>
          <li>
            <strong>دوائر فردية:</strong> الهند، أستراليا، فرنسا، الولايات المتحدة، كندا، وبريطانيا
            (وكذلك السويد قبل 1911).
          </li>
          <li>
            <strong>المزايا:</strong>
            <ul className={classes.list}>
              <li>أغلبية واضحة في البرلمان → تشكيل حكومة أسهل.</li>
              <li><strong>تصويت شخصي</strong> قوي – يجب أن يكون المرشحون مستجيبين للناخبين.</li>
            </ul>
          </li>
          <li>
            <strong>العيوب:</strong>
            <ul className={classes.list}>
              <li>يضر بالأحزاب الصغيرة.</li>
              <li>تمثيل نسائي أقل (التصويت الشخصي غالبًا ما يفضل الرجال).</li>
            </ul>
          </li>
          <li>
            <strong>فرنسا – انتخابات الأغلبية من جولتين:</strong> إذا لم يحصل أي مرشح على 50% في الجولة
            الأولى، يتقدم المرشحان الأولان إلى جولة ثانية. يشترط الحصول على 12.5% على الأقل للتقدم.
          </li>
          <li>
            <strong>الانتخابات الرئاسية الأمريكية 2024:</strong> انتخاب غير مباشر حيث يختار
            <strong>المجمع الانتخابي</strong> (538 عضوًا) الرئيس. يطبق مبدأ "الفائز يأخذ كل شيء" في معظم
            الولايات. فاز دونالد ترامب بـ 312 صوتًا انتخابيًا مقابل 226 لكامالا هاريس.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الانتخابات النسبية</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> تحصل الأحزاب على مقاعد بنسبة أصواتها.
          </li>
          <li>
            <strong>الطريقة الأكثر شيوعًا في العالم:</strong> تطبق في السويد ومعظم الدول الأوروبية.
          </li>
          <li>
            <strong>المزايا:</strong>
            <ul className={classes.list}>
              <li>توزيع أكثر عدالة للمقاعد.</li>
              <li>تمثيل أحزاب أكثر → يعكس إرادة الشعب بشكل أفضل.</li>
              <li>تمثيل نسائي أفضل.</li>
            </ul>
          </li>
          <li>
            <strong>العيوب:</strong>
            <ul className={classes.list}>
              <li>تشكيل حكومة قوية أكثر صعوبة (حكومات ائتلافية).</li>
              <li>خطر التشرذم الحزبي.</li>
            </ul>
          </li>
          <li>
            <strong>العتبات (الحواجز):</strong> لمنع الأحزاب الصغيرة جدًا: الدنمارك 2%، السويد 4%،
            ألمانيا 5%، تركيا 7%. فنلندا وهولندا ليس لديهما عتبة.
          </li>
          <li>
            <strong>ألمانيا:</strong> تجمع بين الانتخابات النسبية والتصويت الشخصي. يصوت الناخبون لكل من
            حزب (الصوت الثاني) ومرشح (الصوت الأول).
          </li>
        </ul>
      </section>

      {/* ===== 5. الفيدرالية والدولة الموحدة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. الفيدرالية والدولة الموحدة</h2>
        <p className={classes.paragraph}>
          يشرح هذا القسم الفرق بين الدول الفيدرالية والدول الموحدة.
        </p>

        <h3 className={classes.subHeading}>الفيدرالية (الدولة الاتحادية)</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> دولة يتم فيها <strong>تقسيم</strong> السلطة بين حكومة مركزية
            و<strong>ولايات ذات حكم ذاتي</strong>.
          </li>
          <li>
            <strong>أمثلة في أوروبا:</strong> ألمانيا (16 ولاية)، النمسا (9 ولايات)، بلجيكا (مناطق
            ومجتمعات)، سويسرا (26 كانتونًا).
          </li>
          <li>
            <strong>أمثلة خارج أوروبا:</strong> الولايات المتحدة (50 ولاية)، الهند، البرازيل، أستراليا،
            كندا، وروسيا.
          </li>
          <li>
            <strong>تقسيم السلطات:</strong> يحدد الدستور المجالات التي تخص الحكومة المركزية وتلك التي
            تخص الولايات (مثل التعليم، الشرطة، البنية التحتية).
          </li>
        </ul>

        <h3 className={classes.subHeading}>الدولة الموحدة</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> دولة تمتلك فيها <strong>الحكومة المركزية</strong> السلطة العليا
            ويمكنها أن تقرر منح الحكم الذاتي للمناطق.
          </li>
          <li>
            <strong>أمثلة:</strong> السويد، فرنسا، بريطانيا، الدنمارك، فنلندا، والنرويج.
          </li>
          <li>
            <strong>المناطق:</strong> قد تتمتع ببعض الحكم الذاتي (مثل مقاطعات السويد)، لكن السلطة تنبثق
            من الحكومة المركزية.
          </li>
        </ul>

        <h3 className={classes.subHeading}>نظام المجلسين</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> برلمان مكون من <strong>مجلسين</strong> (مجلس أعلى ومجلس أدنى).
          </li>
          <li>
            <strong>الأسباب:</strong>
            <ol className={classes.list}>
              <li>
                <strong>أسباب تاريخية:</strong> مجلس النبلاء ورجال الدين (المجلس الأعلى) مقابل مجلس
                العامة (المجلس الأدنى).
              </li>
              <li>
                <strong>الدول الفيدرالية:</strong> تمثل الولايات في مجلس واحد (مثل مجلس الشيوخ الأمريكي)
                والشعب في الآخر (مثل مجلس النواب الأمريكي).
              </li>
            </ol>
          </li>
          <li>
            <strong>أمثلة:</strong> بريطانيا (مجلس العموم ومجلس اللوردات)، الولايات المتحدة (مجلس
            النواب ومجلس الشيوخ)، ألمانيا (البوندستاغ والبوندسرات)، فرنسا (الجمعية الوطنية ومجلس الشيوخ).
          </li>
          <li>
            <strong>نظام المجلس الواحد:</strong> السويد، فنلندا، الدنمارك، النرويج، والبرتغال.
          </li>
        </ul>

        <h3 className={classes.subHeading}>تقسيم السلطات في الولايات المتحدة</h3>
        <ul className={classes.list}>
          <li>
            <strong>الأساس:</strong> يقوم على أفكار مونتسكيو حول <strong>تقسيم السلطات</strong> – السلطة
            التنفيذية والتشريعية والقضائية يجب أن توازن بعضها البعض.
          </li>
          <li>
            <strong>السلطات الثلاث:</strong>
            <ol className={classes.list}>
              <li>
                <strong>الرئيس (السلطة التنفيذية):</strong> ينفذ القوانين.
              </li>
              <li>
                <strong>الكونغرس (السلطة التشريعية):</strong> يتكون من مجلس النواب ومجلس الشيوخ. يقر
                القوانين والميزانية.
              </li>
              <li>
                <strong>المحكمة العليا (السلطة القضائية):</strong> تفحص مدى توافق القوانين مع الدستور.
              </li>
            </ol>
          </li>
          <li>
            <strong>الضوابط والتوازنات:</strong> لكل سلطة القدرة على مراقبة السلطات الأخرى (مثل فيتو
            الرئيس، موافقة مجلس الشيوخ على تعيين القضاة والمعاهدات).
          </li>
        </ul>
      </section>

      {/* ===== 6. أسئلة على النص ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. أسئلة على النص</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>1. ما الذي يحدد ما إذا كانت الدولة ملكية أم جمهورية؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يحدد ذلك <strong>من هو رئيس الدولة</strong> و<strong>كيف يتم اختياره</strong>:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>الملكية:</strong> نظام سياسي يكون فيه رئيس الدولة <strong>ملكًا</strong>
                (ملك، ملكة، إمبراطور، أو أمير). وراثة العرش (باستثناء الفاتيكان حيث ينتخب البابا من
                قبل الكرادلة).
              </li>
              <li>
                <strong>الجمهورية:</strong> نظام سياسي يكون فيه رئيس الدولة <strong>رئيسًا</strong>
                يُنتخب إما مباشرة من الشعب أو من قبل البرلمان.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. أعط أمثلة على ملكيات حيث يكون للملك سلطة احتفالية فقط، وملكيات حيث يكون للملك سلطة فعلية.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>سلطة احتفالية (ملكيات دستورية):</strong> السويد، بريطانيا، النرويج، الدنمارك،
                هولندا، بلجيكا، إسبانيا، واليابان. الملك هو رئيس الدولة لكن ليس له أي نفوذ سياسي.
              </li>
              <li>
                <strong>سلطة فعلية (ملكيات مطلقة):</strong> السعودية، قطر، عُمان، الإمارات العربية
                المتحدة، وبروناي. يحكم الملك البلاد دون قيود.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. ما هي رؤساء الدول المذكورين بالاسم في هذا الفصل وما هي ألقابهم؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>دونالد ترامب (الولايات المتحدة):</strong> رئيس (تولى المنصب بعد انتخابات 2024).
              </li>
              <li>
                <strong>كامالا هاريس (الولايات المتحدة):</strong> نائبة رئيس (خسرت الانتخابات الرئاسية 2024).
              </li>
              <li>
                <strong>جو بايدن (الولايات المتحدة):</strong> رئيس (انسحب من السباق الرئاسي 2024).
              </li>
              <li>
                <strong>ألكسندر لوكاشينكو (بيلاروسيا):</strong> رئيس.
              </li>
              <li>
                <strong>فلاديمير بوتين (روسيا):</strong> رئيس.
              </li>
              <li>
                <strong>تشارلز الثالث (بريطانيا):</strong> ملك (ملكية احتفالية).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>4. أعط أمثلة على دول فيدرالية داخل أوروبا وخارجها.</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>في أوروبا:</strong> ألمانيا (16 ولاية)، النمسا (9 ولايات)، بلجيكا (مناطق
                ومجتمعات)، سويسرا (26 كانتونًا).
              </li>
              <li>
                <strong>خارج أوروبا:</strong> الولايات المتحدة (50 ولاية)، الهند، البرازيل، أستراليا،
                كندا، وروسيا.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>5. ما هما السببان لنظام المجلسين المذكوران في الكتاب؟</h3>
          <div className={classes.answer}>
            <ol className={classes.list}>
              <li>
                <strong>أسباب تاريخية:</strong> مجلس النبلاء ورجال الدين (المجلس الأعلى) مقابل مجلس
                العامة (المجلس الأدنى). هذا هو الحال في بريطانيا.
              </li>
              <li>
                <strong>الدول الفيدرالية:</strong> تمثل الولايات في مجلس واحد (مثل مجلس الشيوخ الأمريكي،
                والبوندسرات الألماني) والشعب في الآخر (مثل مجلس النواب الأمريكي، والبوندستاغ الألماني).
              </li>
            </ol>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>6. ماذا يعني النظام البرلماني؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              النظام البرلماني يعني أن <strong>الحكومة</strong> يجب أن تحظى <strong>بثقة</strong>
              <strong>البرلمان</strong> للبقاء في منصبها. إذا أعلن البرلمان <strong>سحب الثقة</strong>
              من الحكومة، يجب على الحكومة <strong>الاستقالة</strong>. تقود الحكومة <strong>رئيس
              وزراء</strong> (أو ما يعادله) يعينه رئيس الدولة ولكن يجب أن يوافق عليه البرلمان.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>7. ماذا يعني النظام الرئاسي؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              النظام الرئاسي يعني أن <strong>الرئيس</strong> هو صاحب السلطة الفعلية ولا يعتمد على
              البرلمان للبقاء في منصبه. الرئيس هو <strong>رئيس الدولة</strong> و<strong>رئيس
              الحكومة</strong> ويعين أعضاء الحكومة بنفسه. يتم انتخاب الرئيس والبرلمان بشكل منفصل من
              قبل الشعب، مما يعني أنهما قد ينتميان إلى أحزاب مختلفة ("تعايش"). مثال: الولايات المتحدة.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. بأي طريقة تعتبر فرنسا مزيجًا بين النظام البرلماني والرئاسي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تمتلك فرنسا <strong>نظامًا شبه رئاسي</strong> يجمع بين عناصر من كلا النظامين:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>نظام رئاسي:</strong> يُنتخب الرئيس مباشرة من الشعب، وله سلطة كبيرة، وهو
                الشخصية المهيمنة في سياسات الدفاع والخارجية.
              </li>
              <li>
                <strong>نظام برلماني:</strong> يعين الرئيس <strong>رئيس وزراء</strong> يقوم بدوره
                بتشكيل الحكومة. <strong>البرلمان</strong>، وليس الرئيس، هو الذي يمكنه إقالة رئيس
                الوزراء من خلال اقتراع سحب الثقة.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. اشرح الفرق بين انتخابات الأغلبية والانتخابات النسبية باستخدام بريطانيا والسويد كمثالين.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>بريطانيا – انتخابات الأغلبية:</strong> تقسم البلاد إلى 650 دائرة انتخابية. في
                كل دائرة، يفوز المرشح الذي يحصل على <strong>أكبر عدد من الأصوات</strong>. يؤدي هذا
                إلى <strong>نظام حزبين</strong> (العمال والمحافظون) حيث يحصل الحزب الفائز على أغلبية
                واضحة في مجلس العموم. التصويت الشخصي قوي – يجب أن يكون المرشحون مستجيبين للناخبين.
              </li>
              <li>
                <strong>السويد – الانتخابات النسبية:</strong> تحصل الأحزاب على مقاعد بنسبة
                <strong>أصواتها</strong>. يؤدي هذا إلى <strong>نظام تعددية حزبية</strong> حيث يمكن
                حتى للأحزاب الصغيرة أن تصبح ممثلة. توجد <strong>عتبة 4%</strong> لمنع الأحزاب الصغيرة
                جدًا. النظام أكثر عدالة ولكنه قد يجعل تشكيل الحكومة أكثر صعوبة.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. اشرح كيف يختلف النظام السياسي الأمريكي عن الدول البرلمانية.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>الرئيس:</strong> في الولايات المتحدة، الرئيس هو <strong>رئيس الدولة</strong>
                و<strong>رئيس الحكومة</strong> و<strong>لا</strong> يعتمد على ثقة الكونغرس للبقاء في
                منصبه. في الدول البرلمانية، يعتمد رئيس الوزراء على ثقة البرلمان.
              </li>
              <li>
                <strong>تقسيم السلطات:</strong> يوجد في الولايات المتحدة <strong>تقسيم صارم للسلطات</strong>
                بين الرئيس والكونغرس والمحكمة العليا ("الضوابط والتوازنات"). في الدول البرلمانية، ترتبط
                الحكومة والبرلمان ارتباطًا وثيقًا.
              </li>
              <li>
                <strong>الانتخابات:</strong> يُنتخب الرئيس بشكل منفصل عن الكونغرس. في الدول البرلمانية،
                يُنتخب البرلمان ثم يعين الحكومة.
              </li>
              <li>
                <strong>التعيينات:</strong> يوافق مجلس الشيوخ (وليس الرئيس) على تعيين كبار المسؤولين
                والقضاة وكذلك المعاهدات مع الدول الأخرى.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 7. أسئلة التحليل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. أسئلة التحليل</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. اذكر مزايا وعيوب انتخابات الأغلبية والانتخابات النسبية.
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>النظام الانتخابي</th>
                    <th className={classes.th}>المزايا</th>
                    <th className={classes.th}>العيوب</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>انتخابات الأغلبية</strong>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li>أغلبية واضحة في البرلمان → تشكيل حكومة أسهل.</li>
                        <li>تصويت شخصي قوي – يجب أن يكون المرشحون مستجيبين للناخبين.</li>
                        <li>حكومات أكثر استقرارًا.</li>
                      </ul>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li>يضر بالأحزاب الصغيرة → نظام حزبين.</li>
                        <li>تمثيل نسائي أقل (التصويت الشخصي غالبًا ما يفضل الرجال).</li>
                        <li>ضياع العديد من الأصوات – قد يخسر مرشحون حصلوا على أصوات كثيرة.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>الانتخابات النسبية</strong>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li>توزيع أكثر عدالة للمقاعد – كل صوت يحسب.</li>
                        <li>تمثيل أحزاب أكثر → يعكس إرادة الشعب بشكل أفضل.</li>
                        <li>تمثيل نسائي أفضل (قوائم حزبية).</li>
                      </ul>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li>تشكيل حكومة قوية أكثر صعوبة (حكومات ائتلافية).</li>
                        <li>خطر التشرذم الحزبي وعدم الاستقرار السياسي.</li>
                        <li>تصويت شخصي أقل – الأحزاب وليس المرشحين هم في المركز.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. لماذا يمكن اعتبار نظام المجلسين البريطاني غير ديمقراطي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يمكن اعتبار نظام المجلسين البريطاني غير ديمقراطي للأسباب التالية:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>مجلس اللوردات:</strong> يتكون إلى حد كبير من <strong>نبلاء وراثيين</strong>
                وأشخاص <strong>معينين مدى الحياة</strong>. إنهم <strong>غير منتخبين من الشعب</strong>
                وبالتالي لا يمكن القول إنهم يمثلون الشعب بطريقة ديمقراطية.
              </li>
              <li>
                <strong>عدم وجود تفويض:</strong> ليس لأعضاء مجلس اللوردات أي شرعية ديمقراطية لأنهم لم
                ينتخبوا من قبل المواطنين.
              </li>
              <li>
                <strong>السلطة:</strong> على الرغم من تقييد سلطة مجلس اللوردات، إلا أنه لا يزال بإمكانهم
                <strong>تأخير</strong> التشريع واقتراح تعديلات، مما يمنح مجموعة غير منتخبة نفوذًا على
                القوانين التي تؤثر على جميع السكان.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>ملاحظة:</strong> هناك دعوات للإصلاح، وقد تم تقليل عدد النبلاء الوراثيين. لكن
              النظام لا يزال قائمًا على أساس غير ديمقراطي مقارنة بنظام المجلس الواحد أو نظام المجلسين
              مع مجلسين منتخبين من الشعب.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A3. ما هي ميزة وعيب إجراء الانتخابات الرئاسية الفرنسية من جولتين؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>المزايا:</strong>
                <ol className={classes.list}>
                  <li>
                    <strong>شرعية أكبر:</strong> يحصل الرئيس على دعم من أغلبية الناخبين (أغلبية مطلقة
                    في الجولة الثانية)، وليس مجرد أغلبية نسبية.
                  </li>
                  <li>
                    <strong>تعاون تكتيكي:</strong> يمكن للمرشحين الذين خسروا في الجولة الأولى حث
                    ناخبيهم على دعم أحد المرشحين المتبقيين، مما يخلق تحالفات سياسية أوسع.
                  </li>
                  <li>
                    <strong>يقلل الاستقطاب:</strong> يمكن للناخبين في الجولة الأولى التصويت لحزبهم
                    المفضل دون "إضاعة" صوتهم، ثم في الجولة الثانية الاختيار بين البديلين الأكثر
                    شعبية.
                  </li>
                </ol>
              </li>
              <li>
                <strong>العيوب:</strong>
                <ol className={classes.list}>
                  <li>
                    <strong>مكلف:</strong> جولتان انتخابيتان مكلفتان للدولة.
                  </li>
                  <li>
                    <strong>إرهاق الناخبين:</strong> خطر انخفاض نسبة المشاركة في الجولة الثانية.
                  </li>
                  <li>
                    <strong>تصويت تكتيكي:</strong> قد يصوت الناخبون بشكل استراتيجي في الجولة الأولى
                    بدلاً من التصويت لمرشحهم المفضل.
                  </li>
                  <li>
                    <strong>استبعاد الأحزاب الصغيرة:</strong> يجد مرشحو الأحزاب الصغيرة صعوبة في
                    الوصول إلى الجولة الثانية، مما قد يقلل التنوع في النقاش.
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A4. كيف يختلف النظام الحزبي في الولايات المتحدة عن العديد من الدول الأوروبية؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>نظام الحزبين مقابل نظام التعددية الحزبية:</strong> لدى الولايات المتحدة
                <strong>نظام حزبين</strong> (الديمقراطيون والجمهوريون) حيث تكون فرص الأحزاب الأخرى
                ضئيلة جدًا للفوز بمقاعد. في أوروبا، تسود <strong>أنظمة التعددية الحزبية</strong> حيث
                يتم تمثيل عدة أحزاب في البرلمان.
              </li>
              <li>
                <strong>السبب:</strong> <strong>انتخابات الأغلبية</strong> في دوائر فردية في الولايات
                المتحدة ("الفائز يأخذ كل شيء") تفضل الحزبين الكبيرين. الدول الأوروبية التي تعتمد
                <strong>الانتخابات النسبية</strong> تتيح حتى للأحزاب الصغيرة فرصة للتمثيل.
              </li>
              <li>
                <strong>الانتخابات التمهيدية:</strong> في الولايات المتحدة، يتم اختيار مرشحي
                الانتخابات الرئاسية من خلال <strong>انتخابات تمهيدية</strong> (انتخابات داخل الحزب)،
                وهو أمر نادر في أوروبا.
              </li>
              <li>
                <strong>الاختلاف الأيديولوجي:</strong> الحزبان الأمريكيان هما تحالفات أوسع من الأحزاب
                الأوروبية، والتي غالبًا ما تكون أكثر تجانسًا أيديولوجيًا.
              </li>
              <li>
                <strong>الأحزاب الإقليمية:</strong> في أوروبا، توجد أحزاب إقليمية (مثل الحزب الوطني
                الاسكتلندي، وPlaid Cymru في ويلز)، بينما تجد هذه الأحزاب صعوبة كبيرة في الحصول على
                نفوذ في الولايات المتحدة.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 8. أسئلة المناقشة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. أسئلة المناقشة</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. هل الملكية جيدة في السويد أم يجب أن نتحول إلى جمهورية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>حجج لصالح الملكية:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>الاستمرارية والتقاليد:</strong> الملكية جزء من التاريخ والثقافة السويدية،
                وتربط البلاد عبر الأجيال.
              </li>
              <li>
                <strong>وظيفة رمزية:</strong> يمكن للملك أن يكون رمزًا موحدًا يتجاوز الانقسامات
                الحزبية ويمثل السويد في المناسبات الرسمية.
              </li>
              <li>
                <strong>الحياد السياسي:</strong> الملك غير سياسي ولا يمكن أن يصبح موضوعًا للصراعات
                السياسية، على عكس الرئيس.
              </li>
              <li>
                <strong>التكلفة:</strong> الملكية رخيصة نسبيًا مقارنة بتكاليف رئيس مع مكتب وموظفين.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>حجج لصالح الجمهورية:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>الشرعية الديمقراطية:</strong> رئيس منتخب من الشعب يمثل المثل الديمقراطية
                بشكل أفضل من ملك وراثي.
              </li>
              <li>
                <strong>المساواة:</strong> يجب أن تتساوى فرص جميع المواطنين في أن يصبحوا رؤساء دول،
                وليس فقط أولئك الذين ولدوا في عائلة ملكية.
              </li>
              <li>
                <strong>الحداثة:</strong> معظم دول العالم جمهوريات؛ يمكن اعتبار الملكية قديمة.
              </li>
              <li>
                <strong>خيار الانتخاب:</strong> تتاح للمواطنين فرصة التعبير عن رأيهم بشأن رئيس
                الدولة من خلال الانتخابات.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> إنها مسألة قيم. للسويد تقليد طويل من الملكية، ولا تزال
              العائلة المالكة تحظى بشعبية لدى غالبية السويديين. في نفس الوقت، توجد حجج قوية لرئيس
              دولة أكثر شرعية ديمقراطيًا. القضية ليست مطروحة حاليًا في السياسة السويدية، لكن قد
              تُناقش في المستقبل.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. هل توجد علاقة بين النظام السياسي للبلد ودرجة الديمقراطية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>نعم، توجد علاقة واضحة:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>الديمقراطيات:</strong> الدول التي تعتمد <strong>النظام البرلماني</strong> أو
                <strong>الأنظمة شبه الرئاسية</strong> حيث يتم توزيع السلطة وتوجد انتخابات حرة ومحاكم
                مستقلة وحماية لحقوق الإنسان، تكون عمومًا أكثر ديمقراطية.
              </li>
              <li>
                <strong>الديكتاتوريات:</strong> الدول التي تعتمد <strong>النظام الرئاسي</strong> حيث
                يتمتع الرئيس بكل السلطة والبرلمان ضعيف، أو <strong>نظام الحزب الواحد</strong>، تكون
                غالبًا أقل ديمقراطية.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>لكن العلاقة ليست تلقائية:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>النظام الرئاسي لا يعني بالضرورة عدم الديمقراطية:</strong> الولايات المتحدة
                لديها نظام رئاسي لكنها ديمقراطية مستقرة بفضل المؤسسات القوية و<strong>الضوابط
                والتوازنات</strong>.
              </li>
              <li>
                <strong>النظام البرلماني يمكن أن يكون غير ديمقراطي:</strong> في روسيا وبيلاروسيا
                توجد برلمانات، لكنها لا تعمل بشكل ديمقراطي لأن الحزب الحاكم يسيطر على كل شيء.
              </li>
              <li>
                <strong>العوامل الحاسمة:</strong> تعتمد درجة الديمقراطية على <strong>كيفية</strong>
                ممارسة السلطة، وليس فقط على <strong>كيفية</strong> تصميم النظام السياسي. العوامل
                المهمة هي: <strong>الانتخابات الحرة، سيادة القانون، حرية التعبير، وسائل الإعلام
                المستقلة، وحماية حقوق الإنسان</strong>.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 9. المفاهيم الأساسية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. المفاهيم الأساسية</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>الملكية المطلقة:</span> نظام حكم يتمتع فيه الملك بجميع
            السلطات السياسية الفعلية ويحكم البلاد دون قيود. مثال: المملكة العربية السعودية.
          </li>
          <li>
            <span className={classes.keyword}>المجمع الانتخابي:</span> أشخاص يتم انتخابهم ليقوموا بدورهم
            بانتخاب الرئيس في الولايات المتحدة. لكل ولاية عدد من أعضاء المجمع الانتخابي يتناسب مع
            عدد سكانها.
          </li>
          <li>
            <span className={classes.keyword}>الدولة الموحدة:</span> دولة تمتلك فيها الحكومة المركزية
            السلطة العليا. مثال: السويد، فرنسا، بريطانيا.
          </li>
          <li>
            <span className={classes.keyword}>نظام المجلس الواحد:</span> برلمان يتكون من مجلس واحد فقط.
            مثال: السويد، فنلندا، الدنمارك.
          </li>
          <li>
            <span className={classes.keyword}>الفيدرالية (الدولة الاتحادية):</span> دولة يتم فيها تقسيم
            السلطة بين حكومة مركزية وولايات ذات حكم ذاتي. مثال: ألمانيا، الولايات المتحدة.
          </li>
          <li>
            <span className={classes.keyword}>التمثيل الشعبي:</span> البرلمان المنتخب من الشعب، الذي
            يمثل المواطنين.
          </li>
          <li>
            <span className={classes.keyword}>انتخابات الأغلبية:</span> نظام انتخابي يفوز فيه المرشح
            الذي يحصل على أكبر عدد من الأصوات في الدائرة الانتخابية. مثال: الولايات المتحدة، بريطانيا.
          </li>
          <li>
            <span className={classes.keyword}>الملكية:</span> نظام سياسي يكون فيه رئيس الدولة ملكًا
            (ملك، ملكة، إمبراطور، أو أمير). وراثة العرش.
          </li>
          <li>
            <span className={classes.keyword}>البرلمان:</span> المجلس المنتخب من الشعب الذي يسن القوانين
            ويراقب الحكومة.
          </li>
          <li>
            <span className={classes.keyword}>النظام البرلماني:</span> نظام سياسي يجب أن تحظى فيه
            الحكومة بثقة البرلمان للبقاء في منصبها.
          </li>
          <li>
            <span className={classes.keyword}>النظام الرئاسي:</span> نظام سياسي يكون فيه الرئيس هو
            صاحب السلطة الفعلية ولا يعتمد على البرلمان للبقاء في منصبه.
          </li>
          <li>
            <span className={classes.keyword}>الانتخابات النسبية:</span> نظام انتخابي تحصل فيه الأحزاب
            على مقاعد بنسبة أصواتها. مثال: السويد.
          </li>
          <li>
            <span className={classes.keyword}>الجمهورية:</span> نظام سياسي يكون فيه رئيس الدولة رئيسًا
            يُنتخب إما مباشرة من الشعب أو من قبل البرلمان.
          </li>
          <li>
            <span className={classes.keyword}>النظام شبه الرئاسي:</span> نظام سياسي يجمع بين النظام
            البرلماني والرئاسي، مع وجود رئيس ورئيس وزراء. مثال: فرنسا.
          </li>
          <li>
            <span className={classes.keyword}>رئيس الدولة:</span> أعلى ممثل للدولة (ملك أو رئيس).
          </li>
          <li>
            <span className={classes.keyword}>نظام المجلسين:</span> برلمان يتكون من مجلسين (مجلس أعلى
            ومجلس أدنى). مثال: الولايات المتحدة، بريطانيا.
          </li>
          <li>
            <span className={classes.keyword}>تقسيم السلطات:</span> مبدأ توزيع السلطة في الدولة بين
            فروع مختلفة (تنفيذية، تشريعية، قضائية) لمنع إساءة استخدام السلطة.
          </li>
          <li>
            <span className={classes.keyword}>سحب الثقة:</span> تصويت في البرلمان تعلن فيه أغلبية
            النواب فقدان الثقة بالحكومة، مما يجبر الحكومة على الاستقالة.
          </li>
          <li>
            <span className={classes.keyword}>التعايش:</span> حالة في نظام شبه رئاسي حيث ينتمي الرئيس
            وأغلبية البرلمان إلى أحزاب مختلفة.
          </li>
          <li>
            <span className={classes.keyword}>العتبة (الحاجز):</span> نسبة مئوية يجب أن يصل إليها الحزب
            للحصول على مقاعد في البرلمان. مثال: السويد 4%.
          </li>
        </ul>
      </section>
    </div>
  );
}