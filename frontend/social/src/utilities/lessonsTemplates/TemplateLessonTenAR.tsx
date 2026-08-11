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

export default function TemplateLessonTenArabic() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>الفصل 10: اقتصاد الحياة اليومية والقانون</h1>
      <p className={classes.subtitle}>
        ملخص شامل مع الأسئلة والتحليل والمناقشة والمفاهيم الأساسية
      </p>

      {/* ===== 1. اقتصاد متوازن ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. اقتصاد متوازن</h2>
        <p className={classes.paragraph}>
          يتناول هذا القسم أساسيات الاقتصاد الشخصي – كيف يخطط الفرد لأمواله ويحدد أولوياته
          ويديرها في الحياة اليومية. الاقتصاد المتوازن يمنحك قدرة أكبر على مواجهة الأحداث
          غير المتوقعة.
        </p>

        <h3 className={classes.subHeading}>الدخل والنفقات</h3>
        <ul className={classes.list}>
          <li>
            <strong>الراتب الإجمالي:</strong> الراتب <strong>قبل</strong> خصم الضريبة.
          </li>
          <li>
            <strong>الراتب الصافي:</strong> الراتب <strong>بعد</strong> خصم الضريبة – المبلغ
            الذي تحصل عليه فعليًا.
          </li>
          <li>
            <strong>الدخل المتاح:</strong> الراتب الصافي + أي إعانات (مثل إعانة الدراسة،
            إعانة السكن). هذا هو المبلغ الذي يمكنك إنفاقه.
          </li>
          <li>
            <strong>النفقات الثابتة:</strong> تكاليف ثابتة تتكرر شهريًا، مثل السكن،
            الاشتراكات، التأمينات، وأقساط القروض.
          </li>
          <li>
            <strong>النفقات المتغيرة:</strong> تختلف حسب عاداتك وأسلوب حياتك، مثل الطعام،
            الترفيه، الملابس، النظافة، الهدايا، والنفقات غير المتوقعة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الميزانية</h3>
        <ul className={classes.list}>
          <li>
            <strong>الميزانية</strong> هي خطة للدخل والنفقات خلال فترة معينة.
          </li>
          <li>
            <strong>الهدف:</strong> السيطرة على الاقتصاد الشخصي، مساعدتك على تحديد
            الأولويات، وتحقيق الأهداف (مثل سداد الديون أو الادخار).
          </li>
          <li>
            يمكن إعدادها بالقلم والورق أو باستخدام تطبيقات مخصصة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الادخار للمستقبل</h3>
        <ul className={classes.list}>
          <li>
            <strong>الاحتياطي المالي:</strong> "وسادة اقتصادية" للنفقات غير المتوقعة
            (مثل عطل الكمبيوتر، إصلاح السيارة، فاتورة طبيب الأسنان). يجب أن تكون الأموال
            <strong>متاحة بسهولة</strong> في حساب توفير.
          </li>
          <li>
            <strong>الأسهم:</strong> تشتري حصة في شركة معينة. القيمة ترتفع أو تنخفض حسب
            أداء الشركة. <strong>مخاطرة عالية</strong>.
          </li>
          <li>
            <strong>صناديق الاستثمار:</strong> مزيج من أسهم وأوراق مالية من شركات مختلفة.
            توزع المخاطر – <strong>مخاطرة أقل</strong> من الأسهم المنفردة.
          </li>
        </ul>
      </section>

      {/* ===== 2. الديون والقروض ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. الديون والقروض</h2>
        <p className={classes.paragraph}>
          قد تكون القروض ضرورية للمشتريات الكبيرة، ولكنها قد تؤدي أيضًا إلى تراكم الديون
          والضغط المالي. يشرح هذا القسم المفاهيم الأساسية وأنواع القروض المختلفة.
        </p>

        <h3 className={classes.subHeading}>مفاهيم أساسية</h3>
        <ul className={classes.list}>
          <li>
            <strong>التقسيط (سداد القرض):</strong> دفعات على القرض. يقل مبلغ القرض تدريجيًا.
          </li>
          <li>
            <strong>الفائدة:</strong> تكلفة اقتراض المال، وتحسب كنسبة مئوية من مبلغ القرض.
          </li>
          <li>
            <strong>الفائدة الفعلية:</strong> التكلفة الإجمالية للقرض، بما في ذلك الفائدة
            والرسوم الإدارية.
          </li>
          <li>
            <strong>فائدة ثابتة:</strong> الفائدة ثابتة خلال فترة معينة (مثل 3 أو 5 سنوات).
          </li>
          <li>
            <strong>فائدة متغيرة:</strong> الفائدة تتبع أسعار السوق وتتغير عادة كل ثلاثة
            أشهر.
          </li>
          <li>
            <strong>التدقيق الائتماني:</strong> فحص مالي يجريه المقرض للتأكد من قدرتك على
            سداد القرض.
          </li>
          <li>
            <strong>الضمان:</strong> أصول يمكن الاستيلاء عليها إذا لم تستطع سداد القرض
            (مثل المسكن في قرض سكني).
          </li>
          <li>
            <strong>الكفالة:</strong> شخص آخر يتحمل مسؤولية الدفع إذا لم تستطع السداد.
          </li>
        </ul>

        <h3 className={classes.subHeading}>قرض الدراسة (CSN)</h3>
        <ul className={classes.list}>
          <li>
            يحق للطالب التقدم للحصول على <strong>إعانة وقرض</strong> من هيئة الدعم الدراسي
            السويدية (CSN).
          </li>
          <li>
            <strong>المزايا:</strong> فائدة منخفضة (حوالي 2% عام 2025)، فترة سداد طويلة
            (25 سنة)، لا يوجد تدقيق ائتماني.
          </li>
          <li>
            <strong>المبلغ 2025:</strong> 9,408 كرونة قرض + 4,092 كرونة إعانة شهريًا
            للدراسة بدوام كامل.
          </li>
          <li>
            يعتبر <strong>استثمارًا جيدًا</strong> لأن التعليم قد يؤدي إلى راتب أعلى.
          </li>
        </ul>

        <h3 className={classes.subHeading}>القرض السكني</h3>
        <ul className={classes.list}>
          <li>
            يُؤخذ لشراء شقة أو منزل. عادة ما يكون <strong>أكبر قرض</strong> في الحياة.
          </li>
          <li>
            <strong>الضمان:</strong> المسكن نفسه يشكل ضمانًا – يمكن للبنك بيعه إذا لم
            تستطع السداد.
          </li>
          <li>
            <strong>نسبة التمويل:</strong> يمكنك اقتراض ما يصل إلى <strong>85%</strong> من
            قيمة المسكن. أما الـ 15% المتبقية فعليك دفعها بنفسك كـ <strong>دفعة أولى</strong>.
          </li>
          <li>
            <strong>متطلبات التقسيط:</strong> إذا كان القرض أكثر من 50% من قيمة المسكن،
            يجب عليك التقسيط.
          </li>
          <li>
            <strong>الفائدة:</strong> يمكن أن تكون ثابتة أو متغيرة. كثيرون يختارون مزيجًا
            لتوزيع المخاطر.
          </li>
          <li>
            <strong>حساسية الفائدة:</strong> ارتفاع الفوائد (كما حدث خلال 2022–2023) قد
            يجعل من الصعب تغطية التكاليف.
          </li>
        </ul>

        <h3 className={classes.subHeading}>قروض الاستهلاك</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> قروض صغيرة لتمويل الاستهلاك. تُعرف أيضًا باسم
            ائتمانات المستهلك، قروض شخصية، قروض سريعة، قروض SMS، وقروض بدون ضمان.
          </li>
          <li>
            <strong>الخصائص:</strong> غالبًا <strong>بدون ضمان</strong> ولكن في المقابل
            <strong>فوائد ورسوم مرتفعة</strong>.
          </li>
          <li>
            <strong>أمثلة:</strong> الدفع بالتقسيط، الشراء بالتقسيط، والشراء عن طريق الفاتورة.
          </li>
          <li>
            <strong>المخاطر:</strong> زيادة المديونية، خاصة بين الشباب الذين هم جدد في
            الاقتصاد الشخصي. عروض مثل "قرض بدون تدقيق ائتماني" قد تكون صعبة المقاومة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>تحصيل الديون</h3>
        <ul className={classes.list}>
          <li>
            <strong>الخطوة 1 – تذكير الدفع:</strong> ترسل الشركة تذكيرًا مع رسوم تأخير
            وفائدة تأخير.
          </li>
          <li>
            <strong>الخطوة 2 – شركة التحصيل:</strong> تُحول القضية إلى شركة تحصيل متخصصة
            في استرداد الديون. تضاف فوائد ورسوم إضافية.
          </li>
          <li>
            <strong>الخطوة 3 – هيئة التنفيذ (Kronofogden):</strong> تتحقق الهيئة من صحة
            الدين وتبدأ إجراءات التحصيل. قد يؤدي ذلك إلى حجز جزء من الراتب أو مصادرة
            الممتلكات أو الأموال في البنك.
          </li>
          <li>
            <strong>الخطوة 4 – إشعار المدفوعات المتأخرة:</strong> تسجيل في سجل يبقى لمدة
            <strong>ثلاث سنوات</strong>. يؤثر على إمكانية الحصول على اشتراكات واستئجار
            مسكن وغير ذلك.
          </li>
          <li>
            <strong>الخطوة 5 – إعادة هيكلة الديون:</strong> خطة سداد لدى هيئة التنفيذ
            تصبح فيها خاليًا من الديون بعد عدد معين من السنوات. خلال هذه الفترة، يجب
            أن تعيش على <strong>حد الكفاف</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الديون كمشكلة مجتمعية</h3>
        <ul className={classes.list}>
          <li>
            في مطلع عام 2023/2024، كان لدى <strong>أكثر من 400,000 سويدي</strong> دين
            لدى هيئة التنفيذ – أي واحد من كل عشرين بالغًا.
          </li>
          <li>
            <strong>الأسباب الشائعة:</strong> البطالة، المرض، الطلاق، التضخم، وارتفاع
            الفوائد.
          </li>
          <li>
            <strong>العواقب:</strong> علاقة قوية بين الديون و<strong>الصحة النفسية</strong>.
            لذلك، الديون ليست مجرد مشكلة فردية بل أيضًا مشكلة مجتمعية.
          </li>
          <li>
            <strong>المساعدة:</strong> توجد استشارات الميزانية والديون في كل بلدية.
            يمكن لهيئة التنفيذ المساعدة في إعادة هيكلة الديون.
          </li>
        </ul>
      </section>

      {/* ===== 3. السكن ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. السكن</h2>
        <p className={classes.paragraph}>
          يتناول هذا القسم أشكال السكن المختلفة، والفرق بين التملك والإيجار، بالإضافة
          إلى الجوانب القانونية للعيش مع شريك.
        </p>

        <h3 className={classes.subHeading}>أشكال السكن</h3>
        <ul className={classes.list}>
          <li>
            <strong>الإيجار:</strong> تستأجر مسكنًا من مالك. لا تشتري – تدفع إيجارًا كل شهر.
          </li>
          <li>
            <strong>حق السكن (Bostadsrätt):</strong> تشتري <strong>حق</strong> السكن في
            الشقة من خلال شراء حصة في جمعية حق السكن. تدفع رسومًا شهرية للجمعية.
          </li>
          <li>
            <strong>فيلا / ملكية:</strong> تملك <strong>العقار نفسه</strong>. تتحمل مسؤولية
            الصيانة والإصلاحات وجميع التكاليف بنفسك.
          </li>
        </ul>

        <h3 className={classes.subHeading}>التأجير من الباطن</h3>
        <ul className={classes.list}>
          <li>
            <strong>التصريح:</strong> تحقق من أن المؤجر لديه تصريح من المالك الأصلي أو
            جمعية حق السكن. وإلا فأنتما معرضان للإخلاء.
          </li>
          <li>
            <strong>عقد مكتوب:</strong> احرص على الحصول على عقد إيجار مكتوب، حتى لو
            استأجرت من صديق أو قريب.
          </li>
          <li>
            <strong>إيجار معقول:</strong> لشقة الإيجار، يمكن للمالك إضافة <strong>10–15%</strong>
            كحد أقصى إذا كانت مفروشة. إذا كانت غير مفروشة، لا تضاف أي رسوم. في حالة
            الإيجار المبالغ فيه، يمكنك التقدم بشكوى إلى لجنة الإيجار.
          </li>
        </ul>

        <h3 className={classes.subHeading}>تأمين المنزل</h3>
        <ul className={classes.list}>
          <li>
            <strong>مهم:</strong> يحمي من الحريق، السرقة، تسرب المياه، وغيرها من الأحداث
            غير المتوقعة.
          </li>
          <li>
            بدون تأمين منزلي، تخاطر بالوقوع في موقف صعب جدًا.
          </li>
        </ul>

        <h3 className={classes.subHeading}>العيش كشريكين غير متزوجين (Sambo)</h3>
        <ul className={classes.list}>
          <li>
            <strong>قانون الشراكة (1980):</strong> صدر لحماية الطرف الأضعف في علاقات
            الشراكة.
          </li>
          <li>
            <strong>محايد جندريًا:</strong> يشمل الأزواج من نفس الجنس ومن جنسين مختلفين
            (منذ 2003).
          </li>
          <li>
            <strong>ينطبق فقط على علاقات الحب:</strong> الأصدقاء أو الأقارب الذين يتشاركون
            السكن لا يعتبرون شركاء قانونيًا.
          </li>
          <li>
            <strong>القاعدة الأساسية عند الانفصال:</strong> المسكن والأثاث والأدوات
            المنزلية التي تم شراؤها <strong>للاستخدام المشترك</strong> تُقسم بالتساوي –
            بغض النظر عن من دفع. ينطبق هذا بعد العيش معًا لمدة <strong>ستة أشهر</strong>
            تقريبًا.
          </li>
          <li>
            <strong>اتفاق الشراكة:</strong> يمكن كتابته للاستثناء من قانون الشراكة، مثلاً
            إذا كان أحد الطرفين قد استثمر الكثير من المال في المسكن.
          </li>
          <li>
            <strong>ملاحظة!</strong> الشركاء غير المتزوجين <strong>لا يرثون</strong>
            بعضهم البعض – هناك حاجة إلى وصية. للحصول على حضانة مشتركة للأطفال، يجب
            إثبات الأبوة لدى مجلس الرعاية الاجتماعية.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الخطوبة</h3>
        <ul className={classes.list}>
          <li>
            <strong>ليس لها</strong> أي أهمية قانونية – إنها مجرد قرار شخصي.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الزواج</h3>
        <ul className={classes.list}>
          <li>
            <strong>حق الملكية المشتركة:</strong> كقاعدة عامة، يحق لكل زوج الحصول على نصف
            ممتلكات الآخر عند الطلاق (<strong>شراكة الممتلكات الزوجية</strong>).
          </li>
          <li>
            <strong>استثناء:</strong> <strong>الممتلكات المنفردة</strong> – ممتلكات يملكها
            أحد الزوجين منذ ما قبل الزواج ولا تدخل في تقسيم الممتلكات.
          </li>
          <li>
            <strong>اتفاق ما قبل الزواج:</strong> يمكن كتابته للاستثناء من شراكة الممتلكات
            الزوجية.
          </li>
          <li>
            <strong>حق الإرث:</strong> يرث الأزواج بعضهم البعض كقاعدة عامة. لكن أطفال
            الزوج من علاقة سابقة لديهم الحق في ميراثهم مباشرة.
          </li>
          <li>
            <strong>الحضانة:</strong> الوالدان المتزوجان لديهما <strong>حضانة مشتركة
            تلقائيًا</strong> للطفل.
          </li>
          <li>
            <strong>الفرق عن الشراكة:</strong> الزواج يوفر حماية قانونية أقوى في حالة
            الوفاة والأطفال، بالإضافة إلى الحضانة المشتركة التلقائية.
          </li>
        </ul>
      </section>

      {/* ===== 4. الحياة كمستهلك ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. الحياة كمستهلك</h2>
        <p className={classes.paragraph}>
          يتناول هذا القسم حقوقك كمستهلك وكيف يمكنك الاستهلاك بشكل أكثر استدامة.
        </p>

        <h3 className={classes.subHeading}>حقوق المستهلك</h3>
        <ul className={classes.list}>
          <li>
            <strong>قانون شراء المستهلك:</strong> ينطبق على شراء <strong>السلع</strong>.
          </li>
          <li>
            <strong>قانون خدمات المستهلك:</strong> ينطبق على شراء <strong>الخدمات</strong>.
          </li>
          <li>
            <strong>الاعتراض (إعادة المطالبة):</strong> يحق لك الاعتراض على سلعة أو خدمة
            لا تفي بالوعود.
          </li>
          <li>
            <strong>مدة الاعتراض:</strong> تصل إلى <strong>ثلاث سنوات</strong>. يجب عليك
            الإبلاغ عن العيب في <strong>وقت معقول</strong> بعد اكتشافه.
          </li>
          <li>
            <strong>الضمان:</strong> اختياري للشركات، لكنه ملزم إذا قدمته. الضمان لا يحل
            محل مدة الاعتراض البالغة ثلاث سنوات.
          </li>
        </ul>

        <h3 className={classes.subHeading}>حق الإلغاء في المشتريات عن بُعد</h3>
        <ul className={classes.list}>
          <li>
            عند الشراء عبر <strong>الإنترنت</strong> أو <strong>الهاتف</strong>، لديك
            <strong>حق الإلغاء لمدة 14 يومًا</strong> بموجب قانون عقود المسافات.
          </li>
          <li>
            ينطبق أيضًا على المنتجات الرقمية والاشتراكات طالما لم يبدأ استخدامها.
          </li>
          <li>
            <strong>لا يوجد حق إلغاء</strong> عند الشراء من متجر فعلي – لكن العديد من
            المتاجر تقدم <strong>شراء مفتوح</strong> أو <strong>حق الاستبدال</strong>
            بشكل تطوعي.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الحماية من الإعلانات المضللة</h3>
        <ul className={classes.list}>
          <li>
            <strong>قانون التسويق:</strong> يحمي من الإعلانات المضللة. لا يجوز الادعاء
            بشيء دون دليل.
          </li>
          <li>
            <strong>الغسل الأخضر (Greenwashing):</strong> تقديم المنتج على أنه أكثر
            صداقة للبيئة مما هو عليه – ممنوع.
          </li>
          <li>
            <strong>أسعار الإغراء:</strong> ممنوع استخدام أسعار إغراء إذا لم يكن المنتج
            متوفرًا في المخزون بكميات كافية.
          </li>
          <li>
            <strong>المؤثرون:</strong> يجب أن يوضحوا بوضوح عندما تكون المنشورات مدفوعة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الحق في المساعدة في النزاعات</h3>
        <ul className={classes.list}>
          <li>
            <strong>ARN (هيئة المطالبات العامة):</strong> يمكنها النظر في النزاعات بين
            المستهلكين والشركات. القرارات <strong>غير ملزمة</strong>، لكن الشركات الجادة
            تتبع توصيات ARN.
          </li>
          <li>
            <strong>هيئة المستهلك:</strong> تقدم التوجيه والمعلومات.
          </li>
          <li>
            <strong>مستشار المستهلك في البلدية:</strong> يمكنه مساعدتك بالنصائح والدعم.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الاستهلاك المستدام</h3>
        <ul className={classes.list}>
          <li>
            <strong>الاستهلاك المفرط:</strong> نحن في العالم الغربي نشتري أكثر بكثير مما
            نحتاج وأكثر مما هو مستدام بيئيًا.
          </li>
          <li>
            إذا استهلك الجميع مثل السويد، لكنا بحاجة إلى <strong>4.2 كرة أرضية</strong>.
          </li>
          <li>
            <strong>المواد الغذائية:</strong> تشكل جزءًا كبيرًا من التأثير المناخي للأسر.
            تربية الحيوانات تتطلب مساحات شاسعة من الأرض والماء والطاقة.
          </li>
          <li>
            <strong>نصائح للاستهلاك المستدام:</strong> اشترِ أقل، اختر منتجات معتمدة
            بيئيًا، تناول كميات أقل من اللحوم، أصلح بدلاً من التخلص، تسوق من المحلات
            المستعملة.
          </li>
        </ul>
      </section>

      {/* ===== 5. أسئلة على النص ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. أسئلة على النص</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>1. ما الفرق بين الراتب الإجمالي والراتب الصافي؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الراتب الإجمالي</strong> هو الراتب <strong>قبل</strong> خصم الضريبة.
              <strong>الراتب الصافي</strong> هو الراتب <strong>بعد</strong> خصم الضريبة –
              أي المبلغ الذي تحصل عليه فعليًا في حسابك البنكي.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. ما الفرق بين النفقات الثابتة والمتغيرة؟ أعط أمثلة لكل منهما.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>النفقات الثابتة</strong> هي تكاليف ثابتة تتكرر شهريًا.
                <strong>أمثلة:</strong> السكن (الإيجار/الرسوم)، الاشتراكات (الهاتف،
                البث)، التأمينات، وأقساط القروض.
              </li>
              <li>
                <strong>النفقات المتغيرة</strong> تختلف حسب عاداتك وأسلوب حياتك.
                <strong>أمثلة:</strong> الطعام، الترفيه، الملابس، النظافة، الهدايا،
                والنفقات غير المتوقعة.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>3. ما هي الميزانية وما هدفها؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الميزانية</strong> هي خطة للدخل والنفقات خلال فترة معينة (مثل شهر).
              الهدف منها:
            </p>
            <ul className={classes.list}>
              <li>خلق <strong>سيطرة</strong> على اقتصادك.</li>
              <li>مساعدتك على <strong>تحديد الأولويات</strong> بين نفقاتك.</li>
              <li>تحديد ما إذا كنت تنفق مبالغ غير معقولة على بند معين.</li>
              <li>مساعدتك على تحقيق أهداف، مثل سداد دين أو الادخار لشيء ما.</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>4. لماذا من الجيد أن يكون لديك احتياطي مالي وكم يجب أن تدخر؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الاحتياطي المالي</strong> هو "وسادة اقتصادية" تحميك من النفقات غير
              المتوقعة مثل تعطل الكمبيوتر، الحاجة إلى إصلاح السيارة، أو فاتورة طبيب
              أسنان غير متوقعة.
            </p>
            <p className={classes.paragraph}>
              يجب أن تدخر ما يكفي لتغطية <strong>نفقات عدة أشهر</strong>. يجب أن تكون
              الأموال <strong>متاحة بسهولة</strong> في حساب توفير، وليست مقيدة في أسهم
              أو صناديق حيث قد تفقد قيمتها عندما تحتاجها.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>5. ما الفرق بين الأسهم وصناديق الاستثمار؟</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>الأسهم:</strong> تشتري <strong>حصة</strong> في شركة معينة. القيمة
                تتبع أداء الشركة. <strong>مخاطرة عالية</strong> – إذا ساء أداء الشركة،
                قد تخسر المال.
              </li>
              <li>
                <strong>صناديق الاستثمار:</strong> <strong>مزيج</strong> من أسهم وأوراق
                مالية من <strong>شركات مختلفة عديدة</strong>. المخاطر <strong>موزعة</strong>
                – إذا ساء أداء شركة، قد تعوضها شركة أخرى. <strong>مخاطرة أقل</strong> من
                الأسهم المنفردة.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>6. اشرح مفهومي التقسيط والفائدة.</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>التقسيط:</strong> <strong>دفعة</strong> على مبلغ القرض نفسه.
                عندما تقسط، تقل ديونك تدريجيًا.
              </li>
              <li>
                <strong>الفائدة:</strong> <strong>تكلفة</strong> تدفعها مقابل اقتراض
                المال. تحسب الفائدة كـ <strong>نسبة مئوية</strong> من المبلغ الذي اقترضته.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>7. ما الفرق بين الفائدة الثابتة والمتغيرة؟</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>فائدة ثابتة:</strong> الفائدة <strong>ثابتة</strong> خلال فترة
                معينة (مثل 3 أو 5 سنوات). تعرف بالضبط كم ستكون تكلفة الفائدة طوال الفترة.
              </li>
              <li>
                <strong>فائدة متغيرة:</strong> الفائدة <strong>تتبع أسعار السوق</strong>
                وتتغير عادة كل ثلاثة أشهر. قد تزيد أو تنقص التكلفة بمرور الوقت.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. ما الفرق بين قرض الدراسة والقرض السكني وقرض الاستهلاك؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>قرض الدراسة (CSN):</strong> فائدة منخفضة (أقل من 2%)، فترة سداد
                طويلة (25 سنة)، لا يوجد تدقيق ائتماني. يُؤخذ لتمويل <strong>الدراسة</strong>.
              </li>
              <li>
                <strong>القرض السكني:</strong> أكبر قرض في الحياة. المسكن يشكل
                <strong>ضمانًا</strong>. يصل إلى 85% من قيمة المسكن. متطلبات تقسيط عند
                الاقتراض العالي.
              </li>
              <li>
                <strong>قرض الاستهلاك:</strong> قروض صغيرة لتمويل <strong>الاستهلاك</strong>.
                بدون ضمان، ولكن في المقابل <strong>فوائد ورسوم مرتفعة</strong>.
                أمثلة: قروض سريعة، قروض SMS، دفعات بالتقسيط.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>9. كيف تتم عملية تحصيل الدين خطوة بخطوة؟</h3>
          <div className={classes.answer}>
            <ol className={classes.list}>
              <li>
                <strong>تذكير الدفع:</strong> ترسل الشركة تذكيرًا برسوم تأخير وفائدة تأخير.
              </li>
              <li>
                <strong>شركة التحصيل:</strong> تُحول القضية إلى شركة تحصيل. تضاف فوائد
                ورسوم إضافية.
              </li>
              <li>
                <strong>هيئة التنفيذ:</strong> تتحقق الهيئة من صحة الدين وتبدأ إجراءات
                التحصيل (مثل حجز الراتب أو مصادرة الممتلكات).
              </li>
              <li>
                <strong>إشعار المدفوعات المتأخرة:</strong> تسجيل في سجل يبقى لمدة
                <strong>ثلاث سنوات</strong> ويؤثر على إمكانية الحصول على اشتراكات
                واستئجار مسكن.
              </li>
              <li>
                <strong>إعادة هيكلة الديون:</strong> خطة سداد لدى هيئة التنفيذ – تصبح
                خاليًا من الديون بعد عدد من السنوات، لكن يجب أن تعيش على حد الكفاف
                خلال هذه الفترة.
              </li>
            </ol>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. ما هو إشعار المدفوعات المتأخرة وما هي عواقبه؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>إشعار المدفوعات المتأخرة</strong> هو تسجيل في سجل هيئة التنفيذ
              يظهر أن لديك دينًا غير مدفوع. يبقى لمدة <strong>ثلاث سنوات</strong> ويؤثر
              على حياتك بعدة طرق:
            </p>
            <ul className={classes.list}>
              <li>قد <strong>تمنع</strong> من الحصول على اشتراكات هاتف.</li>
              <li>قد تواجه صعوبة في <strong>استئجار مسكن</strong>.</li>
              <li>قد تواجه صعوبة في <strong>الحصول على قروض</strong> (مثل القروض السكنية).</li>
              <li>بعض أصحاب العمل يقومون بفحوصات ائتمانية – قد تخسر فرص عمل.</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. لماذا تعتبر الديون ليست مجرد مشكلة فردية بل أيضًا مشكلة مجتمعية؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>الانتشار:</strong> أكثر من 400,000 سويدي لديهم ديون لدى هيئة
                التنفيذ – واحد من كل عشرين بالغًا.
              </li>
              <li>
                <strong>الأطفال يتأثرون:</strong> واحد من كل اثني عشر طفلًا ينشأ مع
                والده لديه ديون أو إعادة هيكلة ديون جارية.
              </li>
              <li>
                <strong>الصحة النفسية:</strong> هناك علاقة قوية بين الديون والصحة النفسية
                (القلق، الاكتئاب).
              </li>
              <li>
                <strong>تكاليف مجتمعية:</strong> تؤدي الديون إلى زيادة تكاليف الخدمات
                الاجتماعية والرعاية الصحية والنظام القضائي.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>12. ما هي أشكال السكن المختلفة؟</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>الإيجار:</strong> تستأجر المسكن من مالك. تدفع إيجارًا كل شهر
                لكنك لا تملك المسكن.
              </li>
              <li>
                <strong>حق السكن:</strong> تشتري <strong>حق</strong> السكن في الشقة من
                خلال شراء حصة في جمعية حق السكن. تدفع رسومًا شهرية للجمعية.
              </li>
              <li>
                <strong>فيلا / ملكية:</strong> تملك <strong>العقار نفسه</strong>. تتحمل
                مسؤولية الصيانة والإصلاحات وجميع التكاليف بنفسك.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>13. ما المهم مراعاته عند التأجير من الباطن؟</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>التصريح:</strong> تحقق من أن المالك الأصلي أو جمعية حق السكن قد
                أعطوا تصريحًا. وإلا فأنتما معرضان للإخلاء.
              </li>
              <li>
                <strong>عقد مكتوب:</strong> احرص على الحصول على عقد إيجار مكتوب لتجنب
                سوء الفهم.
              </li>
              <li>
                <strong>إيجار معقول:</strong> لشقة الإيجار، يمكن للمالك إضافة
                <strong>10–15%</strong> كحد أقصى إذا كانت مفروشة. إذا كانت غير مفروشة،
                لا تضاف أي رسوم.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>14. ماذا يقول قانون الشراكة (Sambo)?</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>لمن ينطبق؟</strong> الأزواج الذين يعيشون معًا في
                <strong>علاقة حب</strong> (محايد جندريًا منذ 2003).
              </li>
              <li>
                <strong>القاعدة الأساسية:</strong> المسكن والأثاث والأدوات المنزلية التي
                تم شراؤها <strong>للاستخدام المشترك</strong> تُقسم <strong>بالتساوي</strong>
                عند الانفصال – بغض النظر عن من دفع. ينطبق هذا بعد حوالي
                <strong>ستة أشهر</strong>.
              </li>
              <li>
                <strong>اتفاق الشراكة:</strong> يمكن كتابته للاستثناء (مثل إذا كان أحد
                الطرفين قد استثمر الكثير من المال في المسكن).
              </li>
              <li>
                <strong>ملاحظة!</strong> الشركاء غير المتزوجين <strong>لا يرثون</strong>
                بعضهم البعض – هناك حاجة إلى وصية.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            15. ما الفرق بين قانون الشراكة وقانون الزواج؟
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>الجانب</th>
                    <th className={classes.th}>شريك غير متزوج (Sambo)</th>
                    <th className={classes.th}>متزوج</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>تقسيم الممتلكات عند الانفصال</strong>
                    </td>
                    <td className={classes.td}>
                      تُقسم بالتساوي الأشياء المشتراة للاستخدام المشترك (مسكن، أثاث،
                      أدوات منزلية).
                    </td>
                    <td className={classes.td}>
                      <strong>شراكة الممتلكات الزوجية:</strong> جميع الممتلكات (باستثناء
                      الممتلكات المنفردة) تُقسم بالتساوي.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>حق الإرث</strong>
                    </td>
                    <td className={classes.td}>
                      <strong>لا يرث</strong> بعضهما البعض. وصية مطلوبة.
                    </td>
                    <td className={classes.td}>
                      <strong>يرث</strong> بعضهما البعض كقاعدة عامة (لكن أطفال الزوج من
                      علاقة سابقة لهم حق الأولوية).
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>حضانة الأطفال</strong>
                    </td>
                    <td className={classes.td}>
                      الأم لديها الحضانة المنفردة في البداية. الحضانة المشتركة تتطلب
                      إثباتًا لدى مجلس الرعاية الاجتماعية.
                    </td>
                    <td className={classes.td}>
                      <strong>حضانة مشتركة تلقائيًا</strong>.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>الاتفاقيات</strong>
                    </td>
                    <td className={classes.td}>
                      <strong>اتفاق الشراكة</strong> للاستثناء من قانون الشراكة.
                    </td>
                    <td className={classes.td}>
                      <strong>اتفاق ما قبل الزواج</strong> للاستثناء من شراكة الممتلكات
                      الزوجية.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            16. ماذا يعني شراكة الممتلكات الزوجية والممتلكات المنفردة؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>شراكة الممتلكات الزوجية:</strong> القاعدة الأساسية في الزواج.
                جميع ممتلكات الزوجين عند الطلاق تُقسم <strong>بالتساوي</strong> بينهما
                كقاعدة عامة.
              </li>
              <li>
                <strong>الممتلكات المنفردة:</strong> ممتلكات كان يملكها أحد الزوجين
                <strong>قبل</strong> الزواج وليست مخصصة لدخول تقسيم الممتلكات. قد تشمل
                أيضًا ممتلكات حصل عليها أحد الزوجين كهدية أو ميراث.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>17. ما هي القوانين التي تحميك كمستهلك؟</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>قانون شراء المستهلك:</strong> يحميك عند شراء <strong>السلع</strong>.
                يحق لك الاعتراض على سلعة لا تفي بالوعود.
              </li>
              <li>
                <strong>قانون خدمات المستهلك:</strong> يحميك عند شراء <strong>الخدمات</strong>
                (مثل أعمال البناء، الحلاقة).
              </li>
              <li>
                <strong>قانون عقود المسافات:</strong> يمنحك <strong>حق الإلغاء لمدة 14
                يومًا</strong> عند الشراء عبر الإنترنت أو الهاتف.
              </li>
              <li>
                <strong>قانون التسويق:</strong> يحميك من <strong>الإعلانات المضللة</strong>
                (مثل الغسل الأخضر، أسعار الإغراء).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>18. ما الفرق بين الاعتراض والضمان؟</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>الاعتراض (إعادة المطالبة):</strong> <strong>حق قانوني</strong>
                لك بموجب قانون شراء المستهلك. ينطبق لمدة تصل إلى <strong>ثلاث سنوات</strong>
                ويعني أنه يمكنك الإبلاغ عن عيب في سلعة أو خدمة.
              </li>
              <li>
                <strong>الضمان:</strong> <strong>تعهد اختياري</strong> من الشركة بأن
                السلعة ستعمل خلال فترة معينة. ملزم إذا قدمته الشركة، لكنه
                <strong>لا يحل</strong> محل مدة الاعتراض البالغة ثلاث سنوات.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>19. ما هو حق الإلغاء ومتى ينطبق؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>حق الإلغاء</strong> هو الحق في إلغاء عملية شراء خلال
              <strong>14 يومًا</strong>. ينطبق على:
            </p>
            <ul className={classes.list}>
              <li>الشراء عبر <strong>الإنترنت</strong> (عقود المسافات).</li>
              <li>الشراء عبر <strong>الهاتف</strong>.</li>
              <li>شراء <strong>المنتجات الرقمية</strong> والاشتراكات، طالما لم يبدأ
                استخدامها.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>ملاحظة!</strong> لا يوجد حق إلغاء عند الشراء من <strong>متجر
              فعلي</strong>. لكن العديد من المتاجر تقدم تطوعيًا <strong>شراء مفتوحًا</strong>
              أو <strong>حق الاستبدال</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>20. ما هو الغسل الأخضر ولماذا هو ممنوع؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الغسل الأخضر</strong> يعني أن الشركة <strong>تقدم منتجًا على أنه
              أكثر صداقة للبيئة مما هو عليه</strong> لجذب العملاء.
            </p>
            <p className={classes.paragraph}>
              وهو <strong>ممنوع</strong> بموجب <strong>قانون التسويق</strong> لأنه شكل
              من أشكال <strong>الإعلان المضلل</strong>. لا يجوز للشركات الادعاء بأن
              المنتج صديق للبيئة دون دليل على ذلك.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>21. ماذا يمكنك أن تفعل إذا وقعت في نزاع مع شركة؟</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>ARN (هيئة المطالبات العامة):</strong> قدم شكواك إليهم. يفحصون
                النزاع مجانًا. القرارات <strong>غير ملزمة</strong> لكن الشركات الجادة
                تتبع توصيات ARN.
              </li>
              <li>
                <strong>هيئة المستهلك:</strong> تقدم التوجيه والمعلومات حول حقوقك.
              </li>
              <li>
                <strong>مستشار المستهلك في البلدية:</strong> يمكنه تقديم استشارات شخصية.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            22. لماذا يعتبر الاستهلاك المفرط مشكلة من الناحية المناخية؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                نحن في العالم الغربي نشتري <strong>أكثر بكثير مما نحتاج</strong> وأكثر
                مما هو مستدام بيئيًا.
              </li>
              <li>
                إذا استهلك الجميع مثل السويد، لكنا بحاجة إلى <strong>4.2 كرة أرضية</strong>.
              </li>
              <li>
                <strong>المواد الغذائية</strong> تشكل جزءًا كبيرًا من التأثير المناخي
                للأسر. تربية الحيوانات تتطلب مساحات شاسعة من الأرض والماء والطاقة.
              </li>
              <li>
                <strong>العواقب:</strong> زيادة انبعاثات غازات الدفيئة، استنزاف الموارد
                الطبيعية، فقدان التنوع البيولوجي.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>23. أعط أمثلة على كيفية الاستهلاك بشكل أكثر استدامة.</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li><strong>اشترِ أقل:</strong> فكر قبل الشراء – هل تحتاج حقًا هذا المنتج؟</li>
              <li><strong>اختر منتجات معتمدة بيئيًا:</strong> مثل KRAV، العضوية الأوروبية،
                علامة البجعة.</li>
              <li><strong>تناول كميات أقل من اللحوم:</strong> إنتاج اللحوم له تأثير مناخي
                كبير.</li>
              <li><strong>أصلح بدلاً من التخلص:</strong> أصلح الملابس والإلكترونيات
                التالفة.</li>
              <li><strong>تسوق من المحلات المستعملة:</strong> اشترِ ملابس وأثاثًا
                وإلكترونيات مستعملة.</li>
              <li><strong>تجنب المنتجات ذات الاستخدام الواحد:</strong> استخدم بدائل
                قابلة لإعادة الاستخدام.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 6. أسئلة التحليل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. أسئلة التحليل</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. قارن بين مزايا وعيوب الادخار في الأسهم مقابل صناديق الاستثمار.
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>طريقة الادخار</th>
                    <th className={classes.th}>المزايا</th>
                    <th className={classes.th}>العيوب</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>الأسهم</strong>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li>عائد محتمل <strong>مرتفع</strong>.</li>
                        <li>تملك <strong>جزءًا من الشركة</strong>.</li>
                        <li>قد يعطي <strong>أرباحًا</strong>.</li>
                      </ul>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li><strong>مخاطرة عالية</strong> – قد تنخفض القيمة بسرعة.</li>
                        <li>يتطلب معرفة – يجب <strong>تحليل</strong> الشركات.</li>
                        <li><strong>صعب توزيع المخاطر</strong> بمبالغ صغيرة.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>صناديق الاستثمار</strong>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li><strong>توزيع المخاطر</strong> على عدة شركات → مخاطرة أقل.</li>
                        <li><strong>سهل</strong> للمبتدئين – مدير الصندوق يتولى التحليل.</li>
                        <li>مناسب لـ <strong>الادخار طويل الأجل</strong>.</li>
                      </ul>
                    </td>
                    <td className={classes.td}>
                      <ul className={classes.list}>
                        <li>عائد محتمل أقل من الأسهم.</li>
                        <li><strong>رسوم</strong> للإدارة.</li>
                        <li><strong>لا تحكم مباشر</strong> في الشركات المدرجة.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> لمن هو جديد في الادخار ويريد مخاطرة أقل، فإن
              <strong>صناديق الاستثمار</strong> خيار أفضل. لمن لديه المعرفة ومستعد لتحمل
              مخاطرة أعلى لعائد محتمل أعلى، قد تكون <strong>الأسهم</strong> بديلاً.
              كثيرون يختارون <strong>مزيجًا</strong> من الاثنين.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. لماذا تعتبر قروض الاستهلاك مشكلة خاصة للشباب؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>قلة الخبرة:</strong> الشباب مبتدئون في التعامل مع الاقتصاد
                الشخصي والفواتير والقروض.
              </li>
              <li>
                <strong>سهولة الوصول:</strong> تُقدم القروض عبر التطبيقات والإنترنت مع
                "المال في حسابك خلال نصف ساعة".
              </li>
              <li>
                <strong>معلومات غير واضحة:</strong> كثيرون لا يفهمون أن "اشترِ الآن –
                ادفع لاحقًا" هو قرض بفائدة ورسوم.
              </li>
              <li>
                <strong>إعلانات موجهة:</strong> تتخصص شركات في الوصول إلى الفئات التي
                تواجه صعوبة في الحصول على قروض بطرق أخرى.
              </li>
              <li>
                <strong>تكاليف عالية:</strong> قروض الاستهلاك غالبًا ما تكون
                <strong>فوائد ورسوم مرتفعة جدًا</strong> (قد تتجاوز الفائدة الفعلية 100%).
              </li>
              <li>
                <strong>العواقب:</strong> يخاطر الشباب بالوقوع في <strong>دوامة ديون</strong>
                قد تؤدي إلى إشعارات مدفوعات متأخرة وصحة نفسية متضررة.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A3. هل من المعقول أن يكون قرض الدراسة بمزايا كبيرة كما هو؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>حجج لصالح أن قرض الدراسة معقول:</strong>
            </p>
            <ul className={classes.list}>
              <li>التعليم هو <strong>استثمار مجتمعي</strong> – التعليم العالي يؤدي إلى
                إيرادات ضريبية أعلى.</li>
              <li>يعطي <strong>الجميع</strong> فرصة للدراسة بغض النظر عن الخلفية
                الاقتصادية.</li>
              <li>الفائدة المنخفضة وفترة السداد الطويلة تجعل الطلاب <strong>لا يبدأون
                حياتهم البالغة بديون غير مستدامة</strong>.</li>
              <li>مقارنة بالدول الأخرى، السويد لديها واحد من <strong>أنظمة الدعم الدراسي
                الأكثر سخاء</strong> في العالم.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>حجج ضد أن قرض الدراسة مزايا كبيرة جدًا:</strong>
            </p>
            <ul className={classes.list}>
              <li><strong>مكلف</strong> للدولة – أموال يمكن استخدامها لأغراض أخرى.</li>
              <li>بعض الطلاب يدرسون <strong>أطول من اللازم</strong> لأن القرض مزايا
                كبيرة جدًا.</li>
              <li>كثير من الطلاب يأخذون <strong>الحد الأقصى من القرض</strong> حتى لو
                لا يحتاجونه، مما يزيد إجمالي عبء الديون في المجتمع.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> قرض الدراسة جزء مهم من نظام الرعاية الاجتماعية
              السويدي ويمكن الكثيرين من التعليم. في نفس الوقت، من المهم أن يكون الطلاب
              <strong>واعين</strong> بأنه قرض يجب سداده وأن لا يقترضوا أكثر من اللازم.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A4. ما هي عواقب إشعار المدفوعات المتأخرة على مستقبل شاب؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>السكن:</strong> صعوبة في <strong>استئجار مسكن</strong> – العديد
                من الملاك يقومون بفحوصات ائتمانية.
              </li>
              <li>
                <strong>القروض:</strong> صعوبة في الحصول على <strong>قروض</strong>
                (مثل القروض السكنية، قرض الدراسة لا يتأثر لكن القروض الأخرى تتأثر).
              </li>
              <li>
                <strong>الاشتراكات:</strong> لا يمكن الحصول على <strong>اشتراكات هاتف</strong>
                أو عقود أخرى مع مسؤولية دفع.
              </li>
              <li>
                <strong>العمل:</strong> بعض أصحاب العمل يقومون <strong>بفحوصات ائتمانية</strong>
                – قد تخسر فرص عمل، خاصة في المالية أو البنوك أو المهن الأمنية.
              </li>
              <li>
                <strong>الصحة النفسية:</strong> الديون وإشعارات المدفوعات المتأخرة تؤدي
                غالبًا إلى <strong>التوتر والقلق والاكتئاب</strong>.
              </li>
              <li>
                <strong>عواقب طويلة المدى:</strong> يبقى الإشعار لمدة <strong>ثلاث سنوات</strong>،
                لكن قد يؤثر على <strong>سمعتك المالية</strong> وفرصك المستقبلية لفترة
                طويلة.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A5. هل يجب فرض قواعد أكثر صرامة على إعلانات قروض الاستهلاك؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>حجج لصالح قواعد أكثر صرامة:</strong>
            </p>
            <ul className={classes.list}>
              <li>تحمي <strong>الشباب والفئات الاقتصادية الضعيفة</strong> الأكثر عرضة
                لهذا النوع من الإعلانات.</li>
              <li>تقلل من خطر <strong>الإفراط في الديون</strong> وعواقبه المجتمعية
                السلبية.</li>
              <li>الإعلانات غالبًا <strong>مضللة</strong> – تجعل الأمر يبدو وكأنه
                "أموال مجانية" دون عرض التكاليف المرتفعة بوضوح.</li>
              <li>هيئة الرقابة المالية اقترحت بالفعل <strong>قواعد أكثر صرامة</strong>
                لتسويق الائتمانات.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>حجج ضد قواعد أكثر صرامة:</strong>
            </p>
            <ul className={classes.list}>
              <li>إنها <strong>مسؤولية الفرد</strong> ألا يأخذ قروضًا لا يستطيع تحملها.</li>
              <li>القواعد الأكثر صرامة قد تجعل من <strong>الصعب على الشركات الجادة</strong>
                التسويق.</li>
              <li><strong>الحظر</strong> قد يدفع النشاط إلى <strong>قنوات غير منظمة</strong>
                ويجعل المشكلة أسوأ.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> توجد أسباب قوية لتشديد التنظيم، خاصة مع زيادة
              المديونية بين الشباب. <strong>متطلبات معلومات أكثر وضوحًا</strong> – حيث
              يجب عرض الفائدة الفعلية والتكلفة الإجمالية بوضوح – ستكون إجراءً معقولاً.
              قد يكون حظر إعلانات قروض الاستهلاك بالكامل صعب التنفيذ.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 7. أسئلة المناقشة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. أسئلة المناقشة</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. هل من الأفضل استئجار أو امتلاك مسكنك؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>حجج لصالح الإيجار:</strong>
            </p>
            <ul className={classes.list}>
              <li><strong>مرونة:</strong> سهولة الانتقال – لست مرتبطًا بمسكن معين.</li>
              <li><strong>لا مسؤولية صيانة:</strong> المالك مسؤول عن الإصلاحات والصيانة.</li>
              <li><strong>تكلفة أولية أقل:</strong> لا حاجة لدفعة أولى.</li>
              <li><strong>مخاطرة أقل:</strong> لا تتأثر بانخفاض قيمة سوق المساكن.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>حجج لصالح التملك (حق السكن/فيلا):</strong>
            </p>
            <ul className={classes.list}>
              <li><strong>ادخار طويل الأجل:</strong> المسكن هو <strong>استثمار</strong>
                قد يزيد قيمته.</li>
              <li><strong>حرية:</strong> يمكنك التجديد والتأثيث كما تشاء.</li>
              <li><strong>تكلفة سكن مستقرة:</strong> مع حق السكن، الرسوم غالبًا أقل من
                الإيجار، وخصم الفائدة يجعل القرض أرخص.</li>
              <li><strong>شعور بالملكية:</strong> كثيرون يقدرون العيش في شيء يملكونه.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> يعتمد على <strong>الوضع الحياتي والأولويات</strong>.
              لمن هو شاب ويريد مرونة، قد يكون <strong>الإيجار</strong> أفضل. لمن يريد
              <strong>ادخارًا طويل الأجل</strong> ويخطط للبقاء فترة طويلة، قد يكون
              <strong>التملك</strong> مفيدًا. يجب أيضًا مراعاة <strong>خطر ارتفاع
              الفوائد</strong> و<strong>الحاجة إلى احتياطي مالي للصيانة</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. هل يجب أن يُسمح للشباب بأخذ قروض استهلاك؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>حجج لصالح أن يُسمح للشباب بأخذ قروض استهلاك:</strong>
            </p>
            <ul className={classes.list}>
              <li>هم <strong>بالغون</strong> ولهم الحق في اتخاذ قراراتهم الخاصة.</li>
              <li>قد يكون <strong>ضروريًا</strong> في بعض الحالات (مثل رعاية أسنان
                طارئة، كمبيوتر معطل للدراسة).</li>
              <li>القروض قد تساعد في <strong>بناء سجل ائتماني</strong> قد يكون إيجابيًا
                في المستقبل (إذا تم سدادها في الوقت المحدد).</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>حجج ضد أن يُسمح للشباب بأخذ قروض استهلاك:</strong>
            </p>
            <ul className={classes.list}>
              <li>الشباب غالبًا ما يفتقرون إلى <strong>الخبرة</strong> و<strong>المعرفة</strong>
                بالاقتصاد الشخصي.</li>
              <li>هم <strong>خاصة عرضة</strong> للإعلانات المضللة وعروض "اشترِ الآن –
                ادفع لاحقًا".</li>
              <li>قروض الاستهلاك لها <strong>فوائد مرتفعة</strong> وقد تؤدي إلى
                <strong>دوامة ديون</strong> يصعب كسرها.</li>
              <li>العواقب (إشعار المدفوعات المتأخرة، الصحة النفسية) قد تكون
                <strong>مدمرة</strong> لمستقبل الشاب.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> الحظر الكامل صعب التنفيذ، ولكن <strong>قواعد
              أكثر صرامة</strong> حول التسويق و<strong>متطلبات معلومات أكثر وضوحًا</strong>
              (معلومات إلزامية عن الفائدة الفعلية والتكلفة الإجمالية) يجب أن تُفرض.
              <strong>الاقتصاد الشخصي</strong> كمادة في المدرسة قد يساعد الشباب على
              اتخاذ قرارات أفضل.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D3. هل يجب أن يُسمح للشركات بإرسال إعلانات للقروض السريعة عبر الرسائل القصيرة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>حجج لصالح حظر إعلانات الرسائل القصيرة للقروض السريعة:</strong>
            </p>
            <ul className={classes.list}>
              <li>تحمي <strong>الشباب والفئات الاقتصادية الضعيفة</strong> الأكثر عرضة
                لهذا النوع من الإعلانات.</li>
              <li>إعلانات الرسائل القصيرة <strong>متطفلة</strong> وتصل للجميع، سواء
                كانوا مهتمين أم لا.</li>
              <li>تقلل من خطر <strong>القروض الاندفاعية</strong> – السهولة تجعل الناس
                يقترضون دون تفكير.</li>
              <li>العديد من الدول الأخرى <strong>حظرت</strong> هذا النوع من الإعلانات.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>حجج ضد حظر إعلانات الرسائل القصيرة للقروض السريعة:</strong>
            </p>
            <ul className={classes.list}>
              <li>إنه <strong>تدخل في حرية التجارة</strong> – للشركات الحق في تسويق
                منتجاتها.</li>
              <li>إنها <strong>مسؤولية الفرد</strong> ألا يقترض أكثر مما يستطيع تحمله.</li>
              <li>الحظر قد يدفع النشاط إلى <strong>قنوات غير منظمة</strong> ويجعل
                المشكلة أصعب في السيطرة عليها.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> إعلانات الرسائل القصيرة للقروض السريعة
              <strong>مشكلة</strong> لأنها تستهدف فئات واسعة وقد تغري الناس في أوضاع
              مالية صعبة. <strong>حظر</strong> أو <strong>قيود صارمة</strong> سيكون
              إجراءً معقولاً لحماية المستهلكين، خاصة الشباب.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D4. هل يجب أن يكون الاقتصاد الشخصي مادة إلزامية في المدرسة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>حجج لصالح الاقتصاد الشخصي الإلزامي في المدرسة:</strong>
            </p>
            <ul className={classes.list}>
              <li>يعطي الشباب <strong>معرفة أساسية</strong> بالاقتصاد – شيء يفيدهم
                طوال الحياة.</li>
              <li>يمكن أن <strong>يمنع الإفراط في الديون</strong> من خلال تعليم
                الميزانية والفوائد والقروض.</li>
              <li>يعلم <strong>التفكير النقدي</strong> حول الإعلانات والاستهلاك.</li>
              <li>كثير من الشباب <strong>يفتقرون</strong> لهذه المعرفة اليوم ولا
                يتعلمونها في المنزل.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>حجج ضد الاقتصاد الشخصي الإلزامي في المدرسة:</strong>
            </p>
            <ul className={classes.list}>
              <li>المدرسة لديها بالفعل <strong>عدة مواد</strong> – من الصعب تغطية كل شيء.</li>
              <li>يمكن دمج الاقتصاد الشخصي في <strong>الدراسات الاجتماعية</strong>
                أو <strong>الرياضيات</strong>.</li>
              <li>إنها <strong>مسؤولية الوالدين</strong> تعليم الأطفال عن الاقتصاد.</li>
              <li>الطلاب لديهم <strong>اهتمامات مختلفة</strong> – لا يحتاج الجميع
                معرفة متعمقة بالأسهم والصناديق.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> <strong>نعم</strong>، يجب أن يكون الاقتصاد
              الشخصي جزءًا إلزاميًا من التعليم المدرسي. المعرفة الأساسية
              <strong>بالميزانية والقروض والفوائد وحقوق المستهلك</strong> هي شيء
              يحتاجه الجميع في الحياة البالغة. لا يتعلق الأمر بجعل الطلاب
              <strong>خبراء ماليين</strong>، بل بإعطائهم <strong>أدوات لتجنب
              فخاخ الديون</strong> واتخاذ قرارات مستنيرة.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 8. المفاهيم الأساسية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. المفاهيم الأساسية</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>التقسيط (سداد القرض):</span> دفعة على القرض
            تقلل من مبلغ القرض نفسه.
          </li>
          <li>
            <span className={classes.keyword}>حق الإلغاء:</span> الحق في إلغاء عملية شراء
            خلال 14 يومًا في المشتريات عن بُعد (إنترنت، هاتف).
          </li>
          <li>
            <span className={classes.keyword}>الأسهم:</span> حصة في شركة. القيمة ترتفع أو
            تنخفض مع أداء الشركة.
          </li>
          <li>
            <span className={classes.keyword}>ARN (هيئة المطالبات العامة):</span> هيئة
            تفحص النزاعات بين المستهلكين والشركات.
          </li>
          <li>
            <span className={classes.keyword}>إشعار المدفوعات المتأخرة:</span> تسجيل لدى
            هيئة التنفيذ يظهر أن لديك دينًا غير مدفوع. يبقى لمدة ثلاث سنوات.
          </li>
          <li>
            <span className={classes.keyword}>الكفالة:</span> شخص يتحمل مسؤولية الدفع إذا
            لم تستطع سداد قرض.
          </li>
          <li>
            <span className={classes.keyword}>حق السكن:</span> تشتري حق السكن في الشقة من
            خلال شراء حصة في جمعية حق السكن.
          </li>
          <li>
            <span className={classes.keyword}>الراتب الإجمالي:</span> الراتب قبل الضريبة.
          </li>
          <li>
            <span className={classes.keyword}>الميزانية:</span> خطة للدخل والنفقات خلال
            فترة معينة.
          </li>
          <li>
            <span className={classes.keyword}>الاحتياطي المالي:</span> "وسادة اقتصادية" –
            أموال مدخرة للنفقات غير المتوقعة.
          </li>
          <li>
            <span className={classes.keyword}>فائدة ثابتة:</span> الفائدة ثابتة خلال فترة
            معينة (مثل 3 أو 5 سنوات).
          </li>
          <li>
            <span className={classes.keyword}>الدخل المتاح:</span> الراتب الصافي + أي
            إعانات. المال الذي يمكنك إنفاقه.
          </li>
          <li>
            <span className={classes.keyword}>الفائدة الفعلية:</span> التكلفة الإجمالية
            للقرض، بما في ذلك الفائدة والرسوم الإدارية.
          </li>
          <li>
            <span className={classes.keyword}>النفقات الثابتة:</span> تكاليف ثابتة تتكرر
            شهريًا.
          </li>
          <li>
            <span className={classes.keyword}>صناديق الاستثمار:</span> مزيج من أسهم وأوراق
            مالية توزع المخاطر.
          </li>
          <li>
            <span className={classes.keyword}>الضمان:</span> تعهد اختياري من الشركة بأن
            السلعة ستعمل خلال فترة معينة.
          </li>
          <li>
            <span className={classes.keyword}>شراكة الممتلكات الزوجية:</span> القاعدة
            الأساسية في الزواج – تقسيم جميع الممتلكات بالتساوي عند الطلاق.
          </li>
          <li>
            <span className={classes.keyword}>الغسل الأخضر:</span> تقديم منتج على أنه
            أكثر صداقة للبيئة مما هو عليه.
          </li>
          <li>
            <span className={classes.keyword}>الإيجار:</span> تستأجر المسكن من مالك.
            تدفع إيجارًا لكنك لا تملك المسكن.
          </li>
          <li>
            <span className={classes.keyword}>شركة التحصيل:</span> شركة متخصصة في استرداد
            الديون لحساب شركات أخرى.
          </li>
          <li>
            <span className={classes.keyword}>قانون شراء المستهلك:</span> يحميك عند شراء
            السلع.
          </li>
          <li>
            <span className={classes.keyword}>قرض الاستهلاك:</span> قروض صغيرة لتمويل
            الاستهلاك، غالبًا بفوائد ورسوم مرتفعة.
          </li>
          <li>
            <span className={classes.keyword}>التدقيق الائتماني:</span> فحص مالي يجريه
            المقرض للتأكد من قدرتك على سداد القرض.
          </li>
          <li>
            <span className={classes.keyword}>هيئة التنفيذ (Kronofogden):</span> هيئة
            تتحصّل الديون غير المدفوعة.
          </li>
          <li>
            <span className={classes.keyword}>الراتب الصافي:</span> الراتب بعد الضريبة –
            المبلغ الذي تحصل عليه فعليًا.
          </li>
          <li>
            <span className={classes.keyword}>الاعتراض (إعادة المطالبة):</span> الإبلاغ
            عن عيب في سلعة أو خدمة. ينطبق لمدة تصل إلى ثلاث سنوات.
          </li>
          <li>
            <span className={classes.keyword}>النفقات المتغيرة:</span> تكاليف تختلف حسب
            عاداتك وأسلوب حياتك.
          </li>
          <li>
            <span className={classes.keyword}>فائدة متغيرة:</span> الفائدة تتبع أسعار
            السوق وتتغير بانتظام.
          </li>
          <li>
            <span className={classes.keyword}>الفائدة:</span> تكلفة اقتراض المال، تحسب
            كنسبة مئوية من مبلغ القرض.
          </li>
          <li>
            <span className={classes.keyword}>اتفاق الشراكة:</span> اتفاق يستثني من
            قانون الشراكة.
          </li>
          <li>
            <span className={classes.keyword}>قانون الشراكة:</span> القانون الذي ينظم
            العلاقات المالية للشركاء غير المتزوجين عند الانفصال.
          </li>
          <li>
            <span className={classes.keyword}>إعادة هيكلة الديون:</span> خطة سداد لدى
            هيئة التنفيذ تصبح فيها خاليًا من الديون بعد عدد معين من السنوات.
          </li>
          <li>
            <span className={classes.keyword}>الضمان:</span> أصول يمكن الاستيلاء عليها
            إذا لم تستطع سداد قرض.
          </li>
          <li>
            <span className={classes.keyword}>اتفاق ما قبل الزواج:</span> اتفاق يستثني
            من شراكة الممتلكات الزوجية.
          </li>
        </ul>
      </section>
    </div>
  );
}