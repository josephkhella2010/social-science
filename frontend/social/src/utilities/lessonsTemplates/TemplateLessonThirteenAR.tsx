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

export default function TemplateLessonThirteenAR() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>الفصل 13: اقتصاد المجتمع</h1>
      <p className={classes.subtitle}>
        ملخص شامل مع الأسئلة والتحليل والمناقشة والمفاهيم الأساسية
      </p>

      {/* ===== 1. عوامل الإنتاج ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. عوامل الإنتاج</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم ما هو مطلوب لإنتاج السلع والخدمات.
        </p>

        <h3 className={classes.subHeading}>عوامل الإنتاج</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> ما هو مطلوب لإنتاج السلع والخدمات.
          </li>
        </ul>

        <h3 className={classes.subHeading}>ثلاث فئات رئيسية</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>عامل الإنتاج</th>
                <th className={classes.th}>الشرح</th>
                <th className={classes.th}>أمثلة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>المواد الخام (الموارد الطبيعية)</strong>
                </td>
                <td className={classes.td}>
                  الموارد الطبيعية المستخدمة في الإنتاج.
                </td>
                <td className={classes.td}>
                  السكر، الكاكاو، الماء، الغابات، الأراضي الصالحة للزراعة،
                  الثروات المعدنية.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>العمالة (رأس المال البشري)</strong>
                </td>
                <td className={classes.td}>
                  العمل البدني والذهني للإنسان، بالإضافة إلى المعرفة التقنية
                  والمهارات التنظيمية ("الدراية").
                </td>
                <td className={classes.td}>
                  العمال، المهندسون، المديرون، كفاءاتهم المجمعة.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>رأس المال المادي (السلع الرأسمالية)</strong>
                </td>
                <td className={classes.td}>
                  الآلات، المباني، وسائل النقل وغيرها من "الأدوات" اللازمة
                  للإنتاج. يجب إنتاج هذه قبل استخدامها.
                </td>
                <td className={classes.td}>
                  مباني المصانع، الآلات، الشاحنات، أجهزة الكمبيوتر.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.subHeading}>البنية التحتية</h3>
        <ul className={classes.list}>
          <li>
            لكي يمكن استغلال عوامل الإنتاج بكفاءة، يلزم وجود
            <strong>بنية تحتية</strong> فعالة: السكك الحديدية، الطرق، شبكات
            البيانات، توزيع الكهرباء والمياه، النظام القضائي والإدارة العامة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الإنتاجية</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> مقياس لمدى كفاءة استخدام عوامل الإنتاج.
          </li>
          <li>
            <strong>المعادلة:</strong> الإنتاجية = كمية الإنتاج / مدخلات عوامل
            الإنتاج.
          </li>
          <li>
            <strong>إنتاجية أعلى</strong> = إنتاج أكثر بنفس الموارد.
          </li>
        </ul>
      </section>

      {/* ===== 2. الأنظمة الاقتصادية الوطنية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. الأنظمة الاقتصادية الوطنية</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم كيفية تنظيم الدول المختلفة لاقتصاداتها.
        </p>

        <h3 className={classes.subHeading}>
          الأسئلة الاقتصادية الأساسية الثلاثة
        </h3>
        <ol className={classes.list}>
          <li>
            <strong>ماذا</strong> يجب إنتاجه وبأي كمية؟ (مثل معدات المستشفيات أم
            شاحنات؟)
          </li>
          <li>
            <strong>كيف</strong> يجب أن يتم الإنتاج؟ (مثل الروبوتات أم العمل
            البشري؟)
          </li>
          <li>
            <strong>لمن</strong> سيتم الإنتاج؟ (كيف سيتم توزيع الناتج؟)
          </li>
        </ol>

        <h3 className={classes.subHeading}>نظامان اقتصاديان</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>النظام</th>
                <th className={classes.th}>الخصائص</th>
                <th className={classes.th}>أمثلة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>اقتصاد السوق (الرأسمالية)</strong>
                </td>
                <td className={classes.td}>
                  <ul className={classes.list}>
                    <li>العرض والطلب يحددان الإنتاج والأسعار.</li>
                    <li>الملكية الخاصة.</li>
                    <li>دافع الربح يقود الشركات.</li>
                    <li>
                      "اليد الخفية" (آدم سميث) – قوى السوق توجه نفسها بنفسها.
                    </li>
                  </ul>
                </td>
                <td className={classes.td}>
                  الولايات المتحدة، بريطانيا، السويد (اقتصاد مختلط).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>اقتصاد مخطط (اقتصاد مركزي التوجيه)</strong>
                </td>
                <td className={classes.td}>
                  <ul className={classes.list}>
                    <li>
                      الدولة (التخطيط المركزي) تحدد ماذا وكيف ولمن سيتم الإنتاج.
                    </li>
                    <li>الدولة تملك وسائل الإنتاج.</li>
                    <li>لا توجد أرباح خاصة.</li>
                  </ul>
                </td>
                <td className={classes.td}>
                  الصين (سابقاً)، كوريا الشمالية، كوبا، الاتحاد السوفيتي السابق.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.subHeading}>الاقتصاد المختلط</h3>
        <ul className={classes.list}>
          <li>
            معظم الاقتصادات الحديثة هي <strong>اقتصادات مختلطة</strong> – مزيج
            من اقتصاد السوق والتوجيه الحكومي (مثل السويد مع كل من الشركات الخاصة
            والرفاهية العامة).
          </li>
        </ul>
      </section>

      {/* ===== 3. منحنى إمكانيات الإنتاج ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. منحنى إمكانيات الإنتاج</h2>
        <p className={classes.paragraph}>
          يشرح هذا القسم مفهوماً نموذجياً اقتصادياً مهماً.
        </p>

        <h3 className={classes.subHeading}>منحنى إمكانيات الإنتاج (PPF)</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> رسم بياني يبين{" "}
            <strong>الحد الأقصى</strong>
            من سلعتين أو خدمتين يمكن لدولة ما إنتاجهما باستخدام
            <strong>مواردها المحدودة</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>التكلفة البديلة</h3>
        <ul className={classes.list}>
          <li>
            عندما تختار إنتاج المزيد من سلعة واحدة، يجب أن تنتج أقل من سلعة
            أخرى. ما تتخلى عنه هو <strong>التكلفة البديلة</strong>.
          </li>
          <li>
            <strong>مثال:</strong> إذا استخدمت دولة ما جميع مواردها لإنتاج معدات
            المستشفيات، فلا يمكنها إنتاج أي شاحنات. إذا أرادت إنتاج كليهما، يجب
            أن تتخلى عن جزء من إحدى السلعتين.
          </li>
        </ul>

        <h3 className={classes.subHeading}>نقاط على وحول المنحنى</h3>
        <ul className={classes.list}>
          <li>
            <strong>نقاط على المنحنى:</strong> تبين استخداماً{" "}
            <strong>فعالاً</strong>
            للموارد.
          </li>
          <li>
            <strong>نقاط داخل المنحنى:</strong> تبين استخداماً{" "}
            <strong>غير فعال</strong> (لا تُستخدم الموارد بالكامل، مثل البطالة).
          </li>
          <li>
            <strong>نقاط خارج المنحنى:</strong>{" "}
            <strong>غير قابلة للتحقيق</strong>
            بالموارد والتكنولوجيا الحالية.
          </li>
        </ul>
      </section>

      {/* ===== 4. تكوين الأسعار وسعر التوازن ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. تكوين الأسعار وسعر التوازن</h2>
        <p className={classes.paragraph}>
          يشرح هذا القسم كيفية تحديد الأسعار في السوق.
        </p>

        <h3 className={classes.subHeading}>المنافسة الكاملة</h3>
        <ul className={classes.list}>
          <li>
            سوق به <strong>مشترين وبائعين كثر</strong> حيث لا يمكن لأي طرف منفرد
            التأثير على السعر.
          </li>
          <li>
            المنتجات <strong>متجانسة</strong> (مكافئة) ولدى الجميع
            <strong>معلومات كاملة</strong> عن السوق.
          </li>
          <li>
            <strong>مثال:</strong> باعة الزهور والخضروات في سوق هوتورتيت.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الطلب</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> الكمية من سلعة أو خدمة يكون المستهلكون
            مستعدين لشرائها بسعر معين.
          </li>
          <li>
            <strong>منحنى الطلب:</strong> يبين العلاقة بين السعر والكمية
            المطلوبة (<strong>منحدر للأسفل</strong> – سعر أقل يعطي طلباً أعلى).
          </li>
          <li>
            <strong>العوامل المؤثرة على الطلب:</strong> السعر، أذواق/تفضيلات
            المستهلكين، الدخل، سعر السلع الأخرى.
            <ul className={classes.list}>
              <li>
                <strong>سلع بديلة:</strong> سلع يمكن أن تحل محل بعضها البعض (مثل
                القهوة والشاي). سعر أعلى للقهوة يزيد الطلب على الشاي.
              </li>
              <li>
                <strong>سلع مكملة:</strong> سلع تُستخدم معاً (مثل توابل الشواء
                والخردل). سعر أعلى لتوابل الشواء يقلل الطلب على الخردل.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>العرض</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> الكمية من سلعة أو خدمة يكون المنتجون
            مستعدين لبيعها بسعر معين.
          </li>
          <li>
            <strong>منحنى العرض:</strong> يبين العلاقة بين السعر والكمية
            المعروضة (<strong>منحدر للأعلى</strong> – سعر أعلى يعطي عرضاً أكبر).
          </li>
        </ul>

        <h3 className={classes.subHeading}>سعر التوازن</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> السعر الذي يكون فيه الطلب مساوياً للعرض.
            عند هذا السعر لا يوجد فائض ولا نقص.
          </li>
          <li>
            <strong>فائض العرض:</strong> عندما يكون السعر أعلى من سعر التوازن –
            عرض أكثر من طلب. ينخفض السعر.
          </li>
          <li>
            <strong>فائض الطلب:</strong> عندما يكون السعر أقل من سعر التوازن –
            طلب أكثر من عرض. يرتفع السعر.
          </li>
        </ul>

        <h3 className={classes.subHeading}>اليد الخفية</h3>
        <ul className={classes.list}>
          <li>
            استعارة آدم سميث لكيفية أن قوى السوق (العرض والطلب) تؤدي تلقائياً
            إلى سعر توازن يفيد المنتجين والمستهلكين على حد سواء.
          </li>
        </ul>
      </section>

      {/* ===== 5. الأسواق الأربعة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. الأسواق الأربعة</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم الأسواق المختلفة في الاقتصاد.
        </p>

        <ol className={classes.list}>
          <li>
            <strong>سوق السلع:</strong> حيث تُتداول السلع (مثل الفراولة،
            السيارات، الملابس).
          </li>
          <li>
            <strong>سوق الخدمات:</strong> حيث تُتداول الخدمات (مثل زيارة الحلاق،
            رحلات الطيران، الخدمات المصرفية).
          </li>
          <li>
            <strong>سوق العمل:</strong> حيث يُتداول العمل. سعر العمل هو
            <strong>الأجر</strong>. لا يتأثر الأجر فقط بالعرض والطلب، بل أيضاً
            بالمفاوضات بين أطراف سوق العمل (النقابات وأصحاب العمل).
          </li>
          <li>
            <strong>سوق الائتمان (السوق المالية):</strong> حيث تُتداول الأموال
            والائتمانات (القروض). سعر المال هو <strong>سعر الفائدة</strong>.
          </li>
        </ol>
      </section>

      {/* ===== 6. الناتج المحلي الإجمالي - مقياس حجم الاقتصاد ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          6. الناتج المحلي الإجمالي - مقياس حجم الاقتصاد
        </h2>
        <p className={classes.paragraph}>
          يشرح هذا القسم كيفية قياس اقتصاد الدولة.
        </p>

        <h3 className={classes.subHeading}>الناتج المحلي الإجمالي (GDP)</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> مقياس{" "}
            <strong>النشاط الاقتصادي الكلي</strong>
            في دولة ما خلال فترة معينة (عادة سنة).
          </li>
        </ul>

        <h3 className={classes.subHeading}>
          ثلاث طرق لحساب الناتج المحلي الإجمالي
        </h3>
        <ol className={classes.list}>
          <li>
            <strong>قيمة الإنتاج:</strong> مجموع جميع السلع والخدمات المنتجة
            (ناقص السلع الوسيطة).
          </li>
          <li>
            <strong>الدخول:</strong> مجموع جميع الدخول (الأجور، الأرباح،
            الفوائد، الإيجارات).
          </li>
          <li>
            <strong>الإنفاق:</strong> مجموع جميع النفقات (الاستهلاك،
            الاستثمارات، الاستهلاك العام، صافي الصادرات).
          </li>
        </ol>

        <h3 className={classes.subHeading}>الناتج المحلي الإجمالي للفرد</h3>
        <ul className={classes.list}>
          <li>
            الناتج المحلي الإجمالي مقسوماً على عدد السكان. مقياس
            <strong>لمتوسط مستوى المعيشة</strong> في الدولة.
          </li>
        </ul>
      </section>

      {/* ===== 7. أسئلة على النص ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. أسئلة على النص</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            1. ما هي عوامل الإنتاج الثلاثة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>عوامل الإنتاج الثلاثة هي:</p>
            <ul className={classes.list}>
              <li>
                <strong>المواد الخام/الموارد الطبيعية</strong> (مثل الأرض،
                الماء، الغابات، المعادن).
              </li>
              <li>
                <strong>العمالة</strong> (العمل البدني والذهني للإنسان).
              </li>
              <li>
                <strong>رأس المال المادي</strong> (الآلات، المباني، الأدوات
                ووسائل النقل المستخدمة في الإنتاج).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. ما هي الأسئلة الأساسية الثلاثة التي يجب الإجابة عليها في كل نظام
            اقتصادي؟
          </h3>
          <div className={classes.answer}>
            <ol className={classes.list}>
              <li>
                <strong>ماذا</strong> يجب إنتاجه وبأي كمية؟
              </li>
              <li>
                <strong>كيف</strong> يجب أن يتم الإنتاج (أي الموارد/الأساليب يجب
                استخدامها)؟
              </li>
              <li>
                <strong>لمن</strong> سيتم الإنتاج (كيف سيتم توزيع السلع
                والخدمات)؟
              </li>
            </ol>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. من يجيب، وكيف تُجاب هذه الأسئلة في أ) اقتصاد السوق ب) الاقتصاد
            المخطط؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>أ) اقتصاد السوق:</strong> تُجاب الأسئلة عن طريق السوق من
                خلال <strong>التسعير الحر</strong> عبر العرض والطلب دون تدخل
                حكومي. طلب المستهلكين يحدد ما يتم إنتاجه.
              </li>
              <li>
                <strong>ب) الاقتصاد المخطط:</strong> تُجاب الأسئلة من قبل
                <strong>الدولة</strong> من خلال هيئة مركزية تضع خطة طويلة الأجل
                لما سيتم إنتاجه، وكيف سيتم ذلك، وبأي أسعار ستُباع السلع.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. من هم الفاعلون في الدورة الاقتصادية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>الفاعلون الرئيسيون الأربعة هم:</p>
            <ul className={classes.list}>
              <li>
                <strong>الأسر</strong>
              </li>
              <li>
                <strong>الشركات</strong>
              </li>
              <li>
                <strong>القطاع العام</strong> (الدولة، المناطق، البلديات)
              </li>
              <li>
                <strong>القطاع المالي</strong> (البنوك ومؤسسات الائتمان)
              </li>
              <li>
                كما يشمل <strong>قطاع الخارج</strong> في التجارة الدولية.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            5. ما المقصود بالقطاع العام؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يتكون القطاع العام من الأنشطة التي تديرها{" "}
              <strong>الدولة والمناطق والبلديات</strong>. يمول بشكل أساسي عبر{" "}
              <strong>الضرائب</strong>
              ويدير الخدمات المشتركة مثل الرعاية الصحية والمدارس والشرطة والبنية
              التحتية والإدارة.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. ما هي الأسواق المختلفة المذكورة في الكتاب؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>الأسواق المذكورة في الفصل:</p>
            <ul className={classes.list}>
              <li>
                <strong>سوق السلع</strong>
              </li>
              <li>
                <strong>سوق الخدمات</strong>
              </li>
              <li>
                <strong>سوق العمل</strong>
              </li>
              <li>
                <strong>السوق المالية/سوق رأس المال</strong>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. كيف يتم تحديد سعر سلعة أو خدمة في ظل المنافسة الكاملة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يتحدد السعر عند <strong>نقطة التقاطع</strong> بين
              <strong>منحنى العرض</strong> و <strong>منحنى الطلب</strong>، والذي
              يسمى <strong>سعر التوازن</strong>. عند هذا السعر، تكون الكمية التي
              يطلبها المشترون مساوية تماماً للكمية التي يعرضها البائعون.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. أعط أمثلة على قطاعات تم تحريرها خلال العقود الأخيرة في السويد.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>سوق الاتصالات/الهاتف</li>
              <li>سوق الكهرباء</li>
              <li>سوق الصيدليات</li>
              <li>سكة الحديد/النقل بالقطارات</li>
              <li>سوق البريد</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. ما هي مهمة هيئة المنافسة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>مهمة هيئة المنافسة هي:</p>
            <ul className={classes.list}>
              <li>التأكد من التزام الشركات بقوانين المنافسة.</li>
              <li>
                مكافحة تشكيل الكارتلات الضارة وإساءة استخدام المركز المهيمن.
              </li>
              <li>
                مراقبة أن المشتريات العامة تتم بشكل صحيح للحفاظ على منافسة
                فعالة.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. أعط أمثلة على الاحتكار والقلة الاحتكارية والمنافسة الاحتكارية.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>احتكار:</strong> شركة Systembolaget (لتجارة التجزئة
                للمشروبات الكحولية القوية/النبيذ/البيرة) أو احتكارات حكومية
                حصرية.
              </li>
              <li>
                <strong>قلة احتكارية:</strong> شركات الوقود (Cirkle K، OKQ8
                وغيرها)، البنوك (SEB، Swedbank، Handelsbanken وغيرها) أو مشغلي
                الهواتف المحمولة.
              </li>
              <li>
                <strong>منافسة احتكارية:</strong> المطاعم، ماركات الملابس (مثل
                H&M، Zara) أو المشروبات الغازية (كوكا كولا مقابل بيبسي) حيث
                تختلف المنتجات من خلال العلامات التجارية والتسويق.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. ما المقصود بالناتج المحلي الإجمالي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الناتج المحلي الإجمالي يرمز إلى{" "}
              <strong>الناتج المحلي الإجمالي</strong>
              وهو <strong>القيمة الإجمالية</strong> لجميع السلع والخدمات التي
              تنتجها دولة ما خلال عام.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. ما هي أوجه القصور في حساب الناتج المحلي الإجمالي للفرد إذا أردنا
            قياس رفاهية دولة ما؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                لا يبين <strong>كيف</strong> يتم توزيع الدخول بين السكان
                (المساواة).
              </li>
              <li>
                لا يحسب <strong>الاقتصاد غير الرسمي/الأسود</strong> أو العمل
                المنزلي غير المأجور.
              </li>
              <li>
                لا يأخذ في الاعتبار <strong>التدهور البيئي</strong> أو استهلاك
                الموارد.
              </li>
              <li>
                لا يقيس <strong>جودة الحياة</strong> أو الصحة أو الأمان أو
                الديمقراطية.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. اشرح مصطلح سعر الصرف المعدل حسب القوة الشرائية، ويفضل باستخدام
            مصطلح مؤشر البيك ماك.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>سعر الصرف المعدل حسب القوة الشرائية (PPP)</strong> يعدل
              أسعار الصرف بناءً على ما تكلفه الأشياء فعلياً في الدولة.
            </p>
            <p className={classes.paragraph}>
              <strong>مؤشر البيك ماك</strong> يقارن سعر وجبة بيغ ماك مماثلة
              بالعملة المحلية في دول مختلفة لمعرفة ما إذا كانت العملة
              <strong>مقيمة بأعلى أو بأقل من قيمتها</strong> مقابل الدولار.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. ماذا يعني مؤشر التنمية البشرية (HDI) و(GDI)؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>مؤشر التنمية البشرية (HDI)</strong> هو مقياس
              <strong>للتنمية البشرية</strong> في دولة ما يجمع بين:
            </p>
            <ul className={classes.list}>
              <li>الناتج المحلي الإجمالي للفرد</li>
              <li>متوسط العمر المتوقع</li>
              <li>مستوى التعليم</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>مؤشر التنمية الجنساني (GDI)</strong> يعدل ذلك بناءً على
              الفروق بين الجنسين/المساواة.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>15. ما هو الاقتصاد الدائري؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الاقتصاد الدائري</strong> هو نموذج اقتصادي قائم على
              <strong>الدورات</strong> حيث تُعاد استخدام المنتجات، وتُصلح،
              وتُستخدم المواد القابلة لإعادة التدوير، ويُقلل النفايات – بدلاً من
              النموذج الخطي التقليدي ("صنع، استخدام، رمي").
            </p>
          </div>
        </div>
      </section>

      {/* ===== 8. أسئلة التحليل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. أسئلة التحليل</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. اشرح لماذا تُكتب فصول الاقتصاد في الكتب المدرسية بشكل أساسي من
            منظور اقتصاد السوق.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              لأن السويد ومعظم دول العالم اليوم تطبق{" "}
              <strong>الاقتصاد المختلط</strong>
              الذي يقوم بشكل أساسي على <strong>مبادئ اقتصاد السوق</strong>.
              نماذج العرض والطلب وتكوين الأسعار والمنافسة تعكس بشكل أفضل كيف
              تعمل الشركات والأسر والبنوك في الواقع في المجتمعات الغربية.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. الاقتصاد الوطني بدون نماذج اقتصادية لا يعمل تقريباً. أعط أمثلة
            على بعض النماذج في هذا الفصل.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>أمثلة على النماذج في الفصل:</p>
            <ul className={classes.list}>
              <li>
                <strong>الدورة الاقتصادية</strong> (تبين تدفقات الأموال والسلع
                والخدمات والعمل).
              </li>
              <li>
                <strong>نموذج العرض والطلب</strong> (يبين كيف تنشأ الأسعار وسعر
                التوازن).
              </li>
              <li>
                <strong>مؤشر البيك ماك / نموذج PPP</strong> (يبين تعادل القوة
                الشرائية).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A3. اشرح الأزمات أمام المتاجر في ألمانيا الشرقية باستخدام كلمات مثل
            العرض والطلب وفائض الطلب وغيرها.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              في ألمانيا الشرقية الاشتراكية، كان هناك{" "}
              <strong>اقتصاد مخطط</strong>
              مع <strong>سقوف سعرية</strong> تحددها الدولة على السلع. تم تحديد
              الأسعار <strong>بأقل</strong> من سعر التوازن في السوق، مما جعل
              <strong>الطلب</strong> أكبر بكثير من <strong>العرض</strong>
              المتاح.
            </p>
            <p className={classes.paragraph}>
              هذا خلق <strong>فائض طلب</strong> مستمر (نقص في السلع)، مما أدى
              إلى <strong>طوابير طويلة</strong> و <strong>رفوف فارغة</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A4. ما الفرق بين مفهومي الإنتاج والإنتاجية؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>الإنتاج</strong> هو <strong>الكمية الإجمالية</strong>
                من السلع أو الخدمات التي يتم تصنيعها (مثل 100 سيارة).
              </li>
              <li>
                <strong>الإنتاجية</strong> تقيس <strong>الكفاءة</strong> في
                التصنيع، أي كمية الإنتاج <strong>لكل وحدة مدخلات</strong> (مثل
                عدد السيارات المنتجة لكل ساعة عمل).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A5. كيف تتأثر الدورة الاقتصادية بالمعاملات التالية؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>
                  أ) تدفع سكانيا رسوم أصحاب العمل لموظفيها إلى مصلحة الضرائب:
                </strong>{" "}
                تتدفق الأموال من <strong>شركة</strong> إلى
                <strong>القطاع العام</strong> (مصلحة الضرائب).
              </li>
              <li>
                <strong>
                  ب) تشتري ليزا تذكرة قطار من Bergslagståg للسفر إلى ستوكهولم:
                </strong>{" "}
                تتدفق الأموال من <strong>أسرة</strong> إلى
                <strong>شركة</strong> كتعويض عن خدمة.
              </li>
              <li>
                <strong>
                  ج) يشتري مستشفى الجامعة في أوربرو أدوات مخبرية من Cytiva في
                  أوميا:
                </strong>{" "}
                تتدفق الأموال من <strong>القطاع العام</strong> إلى{" "}
                <strong>شركة</strong> خاصة.
              </li>
              <li>
                <strong>د) يحصل أندرسون على معاشه في حسابه:</strong> تتدفق
                الأموال من <strong>القطاع العام</strong> (تحويل) إلى
                <strong>أسرة</strong>.
              </li>
              <li>
                <strong>
                  هـ) يأخذ بيترسون مدخراته المخبأة في المرتبة ويودعها في البنك:
                </strong>{" "}
                تنتقل الأموال من خبأة <strong>أسرة</strong>
                خاصة إلى <strong>القطاع المالي</strong> (البنك)، مما يجعل
                الأموال قابلة للإقراض ويتم تنشيطها في الدورة.
              </li>
              <li>
                <strong>
                  و) يدفع مركز الرعاية الصحية في سوني رواتب موظفيه:
                </strong>
                تتدفق الأموال من <strong>القطاع العام</strong> كأجور إلى
                <strong>أسرة</strong> مقابل العمل.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A6. ما هو التشابه بين سوق السلع وسوق العمل فيما يتعلق بالأسعار
            والأجور؟ وما هو الاختلاف بين هذين السوقين؟ يمكن لكلمتي بطء/جمود
            تفسير هذا الاختلاف!
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>التشابه:</strong> كلاهما يتحكم فيهما أساساً{" "}
                <strong>العرض والطلب</strong>. الأجر هو سعر العمل.
              </li>
              <li>
                <strong>الاختلاف والجمود:</strong>
                <ul className={classes.list}>
                  <li>
                    <strong>سوق السلع</strong> لديه{" "}
                    <strong>تعديلات سريعة</strong>
                    في الأسعار عند تغير العرض/الطلب.
                  </li>
                  <li>
                    <strong>سوق العمل</strong> يتميز <strong>بجمود كبير</strong>
                    بسبب الاتفاقيات الجماعية والقوانين (مثل LAS) والمفاوضات
                    السنوية للأجور، مما يجعل الأجور <strong>لا</strong> تتكيف أو
                    تنخفض مباشرة عند انكماش اقتصادي.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A7. اشرح لماذا تعتبر سياسة الإيجار في السويد مثالاً على الاقتصاد
            المخطط.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              لا يتم تحديد الإيجارات في السويد <strong>بحرية</strong> بناءً على
              العرض والطلب. بدلاً من ذلك، تطبق
              <strong>مبدأ قيمة الاستخدام</strong> حيث يتم التفاوض على الإيجارات
              بشكل جماعي وتنظيمها بسقف <strong>إيجاري</strong>، وهو عنصر من
              التوجيه الحكومي/السياسي يذكرنا بـ
              <strong>الاقتصاد المخطط</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 9. أسئلة المناقشة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. أسئلة المناقشة</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. أعط أمثلة على منتجات يتم الترويج لها في إعلانات التلفزيون أو على
            الإنترنت. هل صحيح أن هذه المنتجات هي أمثلة على المنافسة الاحتكارية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              نعم، منتجات مثل{" "}
              <strong>
                الشامبو ومعجون الأسنان والمشروبات الغازية والسيارات والملابس
              </strong>{" "}
              غالباً ما يتم الترويج لها في التلفزيون وعلى الإنترنت.
            </p>
            <p className={classes.paragraph}>
              إنها أمثلة واضحة على <strong>المنافسة الاحتكارية</strong> لأن
              المنتجات تؤدي نفس الوظيفة أساساً، لكن الشركات تستخدم
              <strong>التسويق والعلامات التجارية</strong> لإعطاء انطباع بأن
              منتجها <strong>فريد</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. لماذا من الصعب قياس الاقتصاد الأسود؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              لأن الاقتصاد الأسود يتكون من معاملات{" "}
              <strong>غير قانونية وغير مسجلة وغير خاضعة للضرائب</strong> يحاول
              الفاعلون إخفاؤها عن السلطات. تفتقر إلى{" "}
              <strong>الإيصالات والسجلات المحاسبية والإحصاءات الرسمية</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D3. هل هناك مجال ترغب في أن يكون احتكاراً؟ لماذا؟ ما هي العواقب
            الإيجابية والسلبية لذلك؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>مثال:</strong> احتكار بيع مياه الشرب أو الطاقة في منطقة
              معينة.
            </p>
            <p className={classes.paragraph}>
              <strong>العواقب الإيجابية:</strong> ضمان إيرادات ضخمة ومستقرة دون
              خوف من المنافسين.
            </p>
            <p className={classes.paragraph}>
              <strong>العواقب السلبية:</strong> غياب المنافسة يؤدي غالباً إلى
              <strong>جودة أقل</strong>، <strong>نقص في الابتكار</strong> و
              <strong>أسعار أعلى</strong> للمستهلكين.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D4. افترض أن المتجر الذي تشتري منه الحلوى نادراً ما يسجل المعاملة
            التجارية – ماكينة التسجيل مفتوحة ولا تحصل على إيصال. هذا يعني أن
            المبيعات غير مسجلة. ماذا تفعل؟ هل تهتم أم لا؟ حاول توضيح ما تفعله
            وربما ما يجب أن تفعله.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>تحليل السلوك:</strong> لسوء الحظ، لا يهتم{" "}
              <strong>العديد</strong>
              من المستهلكين لأن الحلوى رخيصة ويحصلون على سلعتهم.
            </p>
            <p className={classes.paragraph}>
              <strong>ما يجب فعله:</strong> كمواطن، يجب{" "}
              <strong>المطالبة بإيصال</strong> أو{" "}
              <strong>الإبلاغ عن الحادثة</strong> لمصلحة الضرائب. المبيعات غير
              المسجلة تعني <strong>عمل غير رسمي</strong>و{" "}
              <strong>تهرباً ضريبياً</strong>، مما يستنزف الإيرادات الضريبية
              للمدارس والرعاية الصحية ويمنح المتجر ميزة تنافسية غير صحية/غير
              قانونية مقابل التجار الشرفاء.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D5. هل يجب إدخال بطاقات تقنين؟ على ماذا إن كان كذلك؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              استخدمت بطاقات التقنين تاريخياً في <strong>الحروب</strong> أو
              <strong>الأزمات الخطيرة</strong> لضمان أن السلع الأساسية تكفي
              للجميع.
            </p>
            <p className={classes.paragraph}>
              <strong>مع:</strong> قد تكون ضرورية في الأزمات مثلاً للوقود أو
              الكهرباء أو المواد الغذائية لمنع التخزين والمجاعة. يقترح البعض
              أيضاً <strong>حصص انبعاثات شخصية/بطاقات كربون</strong> لإنقاذ
              البيئة.
            </p>
            <p className={classes.paragraph}>
              <strong>ضد:</strong> تخلق <strong>بيروقراطية كبيرة</strong>، تقيد{" "}
              <strong>الحرية الشخصية</strong> وغالباً ما تؤدي إلى ظهور
              <strong>سوق سوداء</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 10. المفاهيم الأساسية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>10. المفاهيم الأساسية</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>مؤشر البيك ماك:</span> مؤشر أنشأته
            مجلة الإيكونوميست لقياس تعادل القوة الشرائية بين العملات من خلال
            مقارنة سعر بيغ ماك.
          </li>
          <li>
            <span className={classes.keyword}>
              الناتج المحلي الإجمالي (GDP):
            </span>
            القيمة الإجمالية لجميع السلع والخدمات التي تنتجها دولة ما خلال عام.
          </li>
          <li>
            <span className={classes.keyword}>الاقتصاد الدائري:</span> نظام
            اقتصادي مصمم لإعادة الاستخدام والإصلاح وإعادة التدوير في دورة مغلقة.
          </li>
          <li>
            <span className={classes.keyword}>معامل جيني:</span> مقياس بين 0 و 1
            يبين مدى تساوي أو عدم تساوي توزيع الدخول بين السكان.
          </li>
          <li>
            <span className={classes.keyword}>الاقتصاد الأخضر:</span> اقتصاد
            يسعى لتحقيق الرفاهية البشرية وتقليل المخاطر البيئية والإيكولوجية.
          </li>
          <li>
            <span className={classes.keyword}>مؤشر التنمية البشرية (HDI):</span>
            مؤشر للأمم المتحدة يقيس الرفاهية بناءً على الناتج المحلي الإجمالي
            للفرد ومتوسط العمر المتوقع والتعليم.
          </li>
          <li>
            <span className={classes.keyword}>البنية التحتية:</span> الهياكل
            الأساسية مثل الطرق والسكك الحديدية وشبكات الكهرباء وأنابيب المياه
            والإنترنت.
          </li>
          <li>
            <span className={classes.keyword}>الاقتصاد غير الرسمي:</span> نشاط
            اقتصادي يفتقر إلى التسجيل الرسمي (مثل العمل المنزلي غير المأجور).
          </li>
          <li>
            <span className={classes.keyword}>سعر التوازن:</span> السعر الذي
            تكون فيه الكمية المعروضة والكمية المطلوبة متساويتين تماماً.
          </li>
          <li>
            <span className={classes.keyword}>تشكيل الكارتلات:</span> تعاون غير
            قانوني بين الشركات للاتفاق على الأسعار أو تقسيم السوق.
          </li>
          <li>
            <span className={classes.keyword}>سلع مكملة:</span> سلع مرتبطة
            وتُستهلك معاً (مثل السيارة والبنزين، النقانق وخبز النقانق).
          </li>
          <li>
            <span className={classes.keyword}>السوق:</span> مكان لقاء المشترين
            والبائعين حيث يتكون السعر.
          </li>
          <li>
            <span className={classes.keyword}>اقتصاد السوق:</span> نظام اقتصادي
            حيث يتحدد السعر والإنتاج بحرية بواسطة العرض والطلب.
          </li>
          <li>
            <span className={classes.keyword}>إخفاقات السوق:</span> حالات لا
            يؤدي فيها السوق الحر إلى تخصيص فعال للموارد (مثل التدهور البيئي،
            الاحتكار).
          </li>
          <li>
            <span className={classes.keyword}>احتكار:</span> سوق لا يوجد فيه سوى
            بائع واحد.
          </li>
          <li>
            <span className={classes.keyword}>منافسة احتكارية:</span> شكل من
            المنافسة حيث تبيع شركات عديدة منتجات متشابهة ولكن مميزة من خلال
            العلامات التجارية.
          </li>
          <li>
            <span className={classes.keyword}>القطاع العام:</span> الأنشطة التي
            تديرها الدولة والمناطق والبلديات.
          </li>
          <li>
            <span className={classes.keyword}>قلة احتكارية:</span> سوق لا يوجد
            فيه سوى عدد قليل من الشركات الكبيرة.
          </li>
          <li>
            <span className={classes.keyword}>المنافسة الكاملة:</span> سوق نظري
            مع حرية الدخول والخروج، ومنتجات متطابقة تماماً، وعدد كبير من
            البائعين/المشترين دون تأثير على السعر.
          </li>
          <li>
            <span className={classes.keyword}>الاقتصاد المخطط:</span> نظام
            اقتصادي حيث تخطط الدولة وتدير الاقتصاد بأكمله.
          </li>
          <li>
            <span className={classes.keyword}>PPP (تعادل القوة الشرائية):</span>
            سعر صرف معدل حسب القوة الشرائية يأخذ في الاعتبار مستويات الأسعار في
            مختلف البلدان.
          </li>
          <li>
            <span className={classes.keyword}>عوامل الإنتاج:</span> الموارد
            اللازمة للإنتاج (المواد الخام، العمالة، رأس المال المادي).
          </li>
          <li>
            <span className={classes.keyword}>رأس المال المادي:</span> موارد
            مادية تم تصنيعها لاستخدامها في الإنتاج (الآلات، الأدوات، المصانع).
          </li>
          <li>
            <span className={classes.keyword}>التحول الهيكلي:</span> تغييرات
            كبيرة ودائمة في النسيج الاقتصادي لدولة ما مع مرور الوقت.
          </li>
          <li>
            <span className={classes.keyword}>سلع بديلة:</span> سلع يمكن أن تحل
            محل بعضها البعض (مثل الزبدة والسمن، القهوة والشاي).
          </li>
          <li>
            <span className={classes.keyword}>الاقتصاد الأسود:</span> نشاط
            اقتصادي غير قانوني وغير خاضع للضرائب.
          </li>
          <li>
            <span className={classes.keyword}>التحويلات:</span> إعادة توزيع
            الأموال من الدولة إلى الأسر دون مقابل (مثل إعانة الطفل، إعانة
            الدراسة، المعاش).
          </li>
          <li>
            <span className={classes.keyword}>العرض والطلب:</span> القوى التي
            تحدد كمية الإنتاج والسعر.
          </li>
        </ul>
      </section>
    </div>
  );
}
