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

export default function TemplateLessonFourteenAR() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>الفصل 14: السياسة الاقتصادية</h1>
      <p className={classes.subtitle}>
        ملخص شامل مع الأسئلة والتحليل والمناقشة والمفاهيم الأساسية
      </p>

      {/* ===== 1. أهداف وأدوات السياسة الاقتصادية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. أهداف وأدوات السياسة الاقتصادية</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم الأهداف التي تسعى السياسة الاقتصادية لتحقيقها.
        </p>

        <h3 className={classes.subHeading}>الأهداف الاقتصادية الخمسة للسياسة</h3>
        <ol className={classes.list}>
          <li>
            <strong>انخفاض البطالة وارتفاع نسبة التشغيل</strong>
          </li>
          <li>
            <strong>استقرار قيمة النقود (انخفاض التضخم)</strong> – منصوص عليه
            في القانون ويجب على البنك المركزي اتباعه
          </li>
          <li>
            <strong>النمو الاقتصادي وارتفاع مستوى المعيشة</strong> (زيادة الناتج
            المحلي الإجمالي)
          </li>
          <li>
            <strong>توازن التجارة الخارجية</strong> – يجب أن يتوازن التصدير
            والاستيراد على المدى الطويل
          </li>
          <li>
            <strong>مراعاة البيئة من أجل التنمية المستدامة</strong> (مكرس في
            نظام الحكم)
          </li>
        </ol>

        <h3 className={classes.subHeading}>تعارض الأهداف</h3>
        <ul className={classes.list}>
          <li>
            السياسيون متفقون على الأهداف ولكن <strong>ليس</strong> على تحديد
            الأولويات بينها.
          </li>
          <li>
            <strong>أمثلة على تعارض الأهداف:</strong>
            <ul className={classes.list}>
              <li>
                <strong>البطالة مقابل التضخم:</strong> سابقاً كان التعارض كبيراً
                – مكافحة التضخم كانت قد تزيد البطالة. اليوم أصبح التعارض أقل
                حدة بعد استقلال البنك المركزي في التسعينيات.
              </li>
              <li>
                <strong>البطالة مقابل عجز الميزانية:</strong> هل يجب على الدولة
                زيادة الإنفاق لتقليل البطالة حتى لو زاد عجز الميزانية؟
              </li>
              <li>
                <strong>النمو مقابل البيئة:</strong> قد يتعارض النمو الاقتصادي
                مع الاعتبارات البيئية.
              </li>
              <li>
                <strong>التوازن الإقليمي مقابل النمو:</strong> هل يجب على الدولة
                دعم المناطق النائية أم الاستثمار في مناطق المدن الكبرى حيث تكون
                الربحية أكبر؟
              </li>
              <li>
                <strong>التوزيع العادل مقابل الحوافز:</strong> هل يجب على الدولة
                العمل بنشاط لتقليل الفجوات بين الأغنياء والفقراء؟
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ===== 2. الدورة الاقتصادية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. الدورة الاقتصادية</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم كيف يتقلب الاقتصاد بين فترات الازدهار والركود.
        </p>

        <h3 className={classes.subHeading}>الدورة الاقتصادية</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> التقلبات المنتظمة في الاقتصاد بين فترات
            الازدهار والركود.
          </li>
          <li>
            <strong>الازدهار:</strong> الاقتصاد في القمة – طلب مرتفع، بطالة
            منخفضة، أسعار متزايدة.
          </li>
          <li>
            <strong>الركود:</strong> الاقتصاد في القاع – طلب منخفض، بطالة مرتفعة،
            أسعار منخفضة.
          </li>
          <li>
            <strong>الاتجاه:</strong> التطور طويل الأجل للاقتصاد (عادة تصاعدي).
          </li>
        </ul>

        <h3 className={classes.subHeading}>لماذا يتحول الازدهار إلى ركود؟</h3>
        <ul className={classes.list}>
          <li>
            زيادة الطلب تؤدي إلى <strong>اختناقات</strong> (نقص في العمالة،
            المواد الخام، الآلات).
          </li>
          <li>
            تتنافس الشركات على الموارد → ترتفع الأسعار والأجور.
          </li>
          <li>
            ارتفاع الأسعار يؤدي إلى انخفاض الطلب → يتباطأ الاقتصاد.
          </li>
          <li>
            السويد كـ <strong>اقتصاد مفتوح</strong> تتأثر بدورات الاقتصاد
            في العالم الخارجي (مثل ألمانيا).
          </li>
        </ul>
      </section>

      {/* ===== 3. التضخم والانكماش ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. التضخم والانكماش</h2>
        <p className={classes.paragraph}>
          يشرح هذا القسم ما هما التضخم والانكماش ولماذا هما مشكلتان.
        </p>

        <h3 className={classes.subHeading}>التضخم</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> ارتفاع <strong>مستمر في الأسعار</strong>
            – تنخفض قيمة النقود.
          </li>
          <li>
            <strong>يحدث:</strong> عندما يكون الطلب الكلي في الاقتصاد أكبر من
            العرض (<strong>فائض الطلب</strong>).
          </li>
          <li>
            <strong>الهدف:</strong> تضخم منخفض ومستقر (هدف التضخم للبنك المركزي
            هو <strong>2%</strong>).
          </li>
        </ul>

        <h3 className={classes.subHeading}>الانكماش</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> انخفاض <strong>مستمر في الأسعار</strong>
            – تزداد قيمة النقود.
          </li>
          <li>
            <strong>الخطر:</strong> يؤجل المستهلكون الشراء (ينتظرون أسعاراً أقل)،
            مما يؤدي إلى انخفاض الإنتاج وزيادة البطالة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>لماذا التضخم ليس جيداً؟</h3>
        <ul className={classes.list}>
          <li>يقلل <strong>القوة الشرائية</strong> (تصبح النقود أقل قيمة).</li>
          <li>
            يؤثر بشدة على الأشخاص ذوي <strong>الدخل الثابت</strong> (المتقاعدين،
            الطلاب).
          </li>
          <li>
            يخلق <strong>عدم يقين</strong> ويعيق التخطيط طويل الأجل للشركات
            والأسر.
          </li>
        </ul>

        <h3 className={classes.subHeading}>مؤشر أسعار المستهلك (KPI) وقاعدة السعر الأساسي</h3>
        <ul className={classes.list}>
          <li>
            <strong>مؤشر أسعار المستهلك (KPI):</strong> مقياس يبين تطور الأسعار
            على <strong>سلة سلع</strong> من السلع والخدمات التي يشتريها المستهلك
            العادي. يستخدم لقياس التضخم.
          </li>
          <li>
            <strong>قاعدة السعر الأساسي:</strong> مبلغ يستخدم لحساب المزايا
            الاجتماعية المختلفة (مثل المعاشات، بدل المرض). يتم تعديله سنوياً
            وفقاً لتطور الأسعار (KPI).
          </li>
        </ul>
      </section>

      {/* ===== 4. السياسة الاقتصادية - مجالات السياسة المختلفة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. السياسة الاقتصادية - مجالات السياسة المختلفة</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم الأدوات المختلفة التي تستخدمها الدولة لتوجيه الاقتصاد.
        </p>

        <h3 className={classes.subHeading}>السياسة المالية</h3>
        <ul className={classes.list}>
          <li>
            <strong>من المسؤول:</strong> الحكومة والبرلمان (وزارة المالية).
          </li>
          <li>
            <strong>ماذا تعني:</strong> توجيه <strong>إيرادات</strong> الدولة
            (الضرائب) و <strong>نفقاتها</strong> (الاستهلاك العام، الاستثمارات،
            التحويلات).
          </li>
          <li>
            <strong>الهدف:</strong> التأثير على <strong>الطلب الكلي</strong>
            في الاقتصاد.
          </li>
          <li>
            <strong>تأثير المضاعف:</strong> زيادة مبدئية في الإنفاق العام تؤدي
            إلى <strong>زيادة كلية أكبر</strong> في الناتج المحلي الإجمالي،
            لأن الأموال تُنفق عدة مرات في الاقتصاد.
          </li>
          <li>
            <strong>الإطار المالي:</strong> القواعد التي توجه السياسة المالية
            السويدية، وتشمل:
            <ul className={classes.list}>
              <li>
                <strong>هدف الفائض:</strong> يجب أن تظهر مالية الدولة فائضاً
                على المدى الطويل (1/3% من الناتج المحلي الإجمالي).
              </li>
              <li>
                <strong>سقف الإنفاق:</strong> حد أعلى لنفقات الدولة.
              </li>
              <li>
                <strong>شرط التوازن:</strong> يجب أن يكون للبلديات والمناطق
                توازن في ميزانياتها.
              </li>
            </ul>
          </li>
          <li>
            <strong>ميزانية غير متوازنة:</strong> عندما تكون نفقات الدولة أكبر
            من إيراداتها (عجز في الميزانية).
          </li>
        </ul>

        <h3 className={classes.subHeading}>السياسة النقدية</h3>
        <ul className={classes.list}>
          <li>
            <strong>من المسؤول:</strong> <strong>البنك المركزي</strong> (مستقل
            عن السياسة).
          </li>
          <li>
            <strong>ماذا تعني:</strong> توجيه <strong>كمية النقود</strong> و
            <strong>سعر الفائدة</strong> للحفاظ على قيمة مستقرة للنقود
            (تضخم منخفض).
          </li>
          <li>
            <strong>سعر الفائدة الرئيسي:</strong> سعر الفائدة الذي يحدده البنك
            المركزي والذي يؤثر على أسعار الفائدة الأخرى في المجتمع (مثل
            أسعار الفائدة على الرهون العقارية).
            <ul className={classes.list}>
              <li>
                <strong>خفض سعر الفائدة الرئيسي:</strong> يحفز الاقتصاد (يفيد
                المقترضين، يزيد الاستهلاك).
              </li>
              <li>
                <strong>رفع سعر الفائدة الرئيسي:</strong> يكبح الاقتصاد (يكافح
                التضخم، يضر المقترضين).
              </li>
            </ul>
          </li>
          <li>
            <strong>كيف يؤثر سعر الفائدة الرئيسي على الاقتصاد الشخصي؟</strong>
            <ul className={classes.list}>
              <li>
                رفع الفائدة → قروض سكنية أغلى → أموال أقل للاستهلاك.
              </li>
              <li>
                خفض الفائدة → قروض سكنية أرخص → أموال أكثر للاستهلاك.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>سياسة سعر الصرف</h3>
        <ul className={classes.list}>
          <li>
            <strong>ماذا تعني:</strong> سياسة الدولة للتأثير على
            <strong>سعر الصرف</strong>.
          </li>
          <li>
            <strong>سعر صرف ثابت:</strong> قيمة العملة مرتبطة بعملة أخرى
            (مثل اليورو).
          </li>
          <li>
            <strong>سعر صرف مرن:</strong> قيمة العملة تحددها <strong>العرض
            والطلب</strong> في السوق (النظام الذي تتبعه السويد اليوم).
          </li>
          <li>
            <strong>تخفيض العملة:</strong> خفض متعمد لقيمة العملة في ظل سعر
            صرف ثابت (<strong>قرار سياسي</strong>).
          </li>
          <li>
            <strong>انخفاض العملة:</strong> انخفاض قيمة العملة في ظل سعر صرف
            مرن (بسبب <strong>قوى السوق</strong>).
          </li>
          <li>
            <strong>الفرق:</strong> تخفيض العملة هو قرار سياسي؛ انخفاض العملة
            يحدث تلقائياً من قبل السوق.
          </li>
        </ul>

        <h3 className={classes.subHeading}>سياسة سوق العمل</h3>
        <ul className={classes.list}>
          <li>
            <strong>ماذا تعني:</strong> إجراءات لتقليل البطالة وزيادة التشغيل.
          </li>
          <li>
            <strong>أمثلة:</strong> برامج تدريبية لسوق العمل، فرص تدريب عملي،
            إعانات الأجور، دعم للشركات الناشئة.
          </li>
          <li>
            <strong>بطالة هيكلية:</strong> بطالة ناتجة عن عدم توازن بين العرض
            والطلب على العمالة (مثل مهارات خاطئة أو موقع جغرافي خاطئ).
          </li>
        </ul>

        <h3 className={classes.subHeading}>سياسة التثبيت</h3>
        <ul className={classes.list}>
          <li>
            مفهوم شامل لـ <strong>السياسة المالية</strong> و
            <strong>السياسة النقدية</strong>. الهدف هو <strong>تسوية الدورة
            الاقتصادية</strong> – كبح فترات الازدهار وتحفيز فترات الركود.
          </li>
        </ul>
      </section>

      {/* ===== 5. السوق المالية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. السوق المالية</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم كيف تعمل السوق المالية وكيف يتم مراقبتها.
        </p>

        <h3 className={classes.subHeading}>وظيفة السوق المالية</h3>
        <ul className={classes.list}>
          <li>
            وساطة <strong>المدخرات</strong> من الأسر والشركات إلى
            <strong>الإقراض</strong> و <strong>الاستثمارات</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الفاعلون</h3>
        <ul className={classes.list}>
          <li>
            البنوك، شركات التأمين، شركات المعاشات، شركات الصناديق
            (<strong>الوسطاء الماليون</strong>).
          </li>
        </ul>

        <h3 className={classes.subHeading}>هيئة الرقابة المالية (FI)</h3>
        <ul className={classes.list}>
          <li>
            هيئة <strong>تراقب</strong> السوق المالية (البنوك، شركات التأمين،
            شركات سوق الائتمان).
          </li>
          <li>
            <strong>سقف القروض العقارية (2010):</strong> توصية من FI بأن لا
            تتجاوز القروض <strong>85%</strong> من سعر المسكن (غير ملزم ولكن
            تتبعه البنوك).
          </li>
          <li>
            <strong>متطلبات التقسيط:</strong> متطلبات <strong>ملزمة</strong>
            من FI تضمن أن الأسر تسدد (تسدد) قروضها. الهدف هو تقليل مديونية
            الأسر.
          </li>
        </ul>

        <h3 className={classes.subHeading}>ضمان الودائع</h3>
        <ul className={classes.list}>
          <li>
            تضمن إدارة الدين الحكومي الودائع في البنوك حتى
            <strong>100,000 يورو</strong> لكل شخص.
          </li>
          <li>
            يحمي من الأزمات المصرفية (يمنع <strong>"اندفاع البنوك"</strong>).
          </li>
        </ul>

        <h3 className={classes.subHeading}>إدارة الدين الحكومي</h3>
        <ul className={classes.list}>
          <li>
            مسؤولة عن <strong>مديونية</strong> الدولة و <strong>ضمان
            الودائع</strong>.
          </li>
        </ul>
      </section>

      {/* ===== 6. الدين الحكومي والميزانية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. الدين الحكومي والميزانية</h2>

        <h3 className={classes.subHeading}>الدين الحكومي</h3>
        <ul className={classes.list}>
          <li>
            المبلغ الإجمالي الذي اقترضته الدولة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>هدف الفائض</h3>
        <ul className={classes.list}>
          <li>
            يجب أن تظهر مالية الدولة فائضاً على المدى الطويل لتقليل الدين
            الحكومي.
          </li>
        </ul>

        <h3 className={classes.subHeading}>سقف الإنفاق</h3>
        <ul className={classes.list}>
          <li>
            حد أعلى لنفقات الدولة.
          </li>
        </ul>
      </section>

      {/* ===== 7. أسئلة على النص ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. أسئلة على النص</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>1. كيف يُقاس النمو الاقتصادي؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يقاس النمو الاقتصادي كـ <strong>تغير في الناتج المحلي الإجمالي</strong>
              بمرور الوقت، عادة سنوياً أو ربع سنوياً. يُعبر عن النمو
              بـ <strong>النسبة المئوية</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>2. ما هي خصائص الازدهار؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يتميز الازدهار بـ <strong>طلب مرتفع</strong>،
              <strong>بطالة منخفضة</strong>، <strong>إنتاج متزايد</strong>،
              <strong>أسعار متزايدة</strong> (تضخم) وشركات متفائلة تستثمر.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>3. ما هي الدورة الاقتصادية؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الدورة الاقتصادية هي <strong>التقلبات المنتظمة</strong> في
              الاقتصاد بين الازدهار والركود. الفترة بين قمتين أو قاعين تسمى
              دورة اقتصادية.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. اشرح لماذا يتحول منحنى الدورة الاقتصادية بعد فترة من الازدهار
            إلى الركود. والعكس، من الركود إلى الازدهار.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>ازدهار→ركود:</strong> زيادة الطلب تؤدي إلى
                <strong>اختناقات</strong> (نقص في الموارد). تتنافس الشركات
                على الموارد → ترتفع الأسعار والأجور → ينخفض الطلب → يتباطأ
                الاقتصاد.
              </li>
              <li>
                <strong>ركود→ازدهار:</strong> الأسعار المنخفضة تحفز الطلب.
                تبدأ الشركات بالاستثمار مرة أخرى، مما يزيد الإنتاج والتشغيل.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>5. ماذا يظهر ميزان العرض والطلب؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يظهر ميزان العرض والطلب العلاقة بين إجمالي
              <strong>العرض</strong> من السلع والخدمات (الإنتاج + الواردات)
              و <strong>الاستخدام</strong> (الاستهلاك + الاستثمارات + الصادرات).
              يبين ما إذا كانت السويد مصدراً صافياً أم مستورداً صافياً.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>6. ما هو التضخم ولماذا يحدث؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>التضخم</strong> هو <strong>ارتفاع مستمر في الأسعار</strong>.
              يحدث عندما يكون الطلب الكلي في الاقتصاد أكبر من العرض
              (<strong>فائض الطلب</strong>)، أو عندما تزيد تكاليف الإنتاج
              (مثل ارتفاع أسعار المواد الخام).
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>7. ما هو الانكماش؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الانكماش</strong> هو <strong>انخفاض مستمر في الأسعار</strong>.
              تزداد قيمة النقود، مما قد يؤدي إلى تأجيل المستهلكين للشراء،
              مما يقلل الإنتاج ويزيد البطالة.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>8. لماذا التضخم ليس جيداً؟</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>يقلل <strong>القوة الشرائية</strong> (تصبح النقود أقل قيمة).</li>
              <li>
                يؤثر بشدة على الأشخاص ذوي <strong>الدخل الثابت</strong>
                (المتقاعدين، الطلاب).
              </li>
              <li>
                يخلق <strong>عدم يقين</strong> ويعيق التخطيط طويل الأجل.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>9. ما هما KPI وقاعدة السعر الأساسي؟</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مؤشر أسعار المستهلك (KPI):</strong> مقياس يبين تطور
                الأسعار على <strong>سلة سلع</strong> من السلع والخدمات التي
                يشتريها المستهلك العادي.
              </li>
              <li>
                <strong>قاعدة السعر الأساسي:</strong> مبلغ يستخدم لحساب المزايا
                الاجتماعية المختلفة (مثل المعاشات، بدل المرض). يتم تعديله
                سنوياً وفقاً لـ KPI.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>10. ما الفرق بين KPI و KPIF؟</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>KPI</strong> يشمل <strong>تغيرات أسعار الفائدة</strong>.
              </li>
              <li>
                <strong>KPIF</strong> (مؤشر أسعار المستهلك بسعر فائدة ثابت)
                <strong>يستبعد</strong> تغيرات أسعار الفائدة.
              </li>
              <li>
                يستخدم البنك المركزي <strong>KPIF</strong> كهدف للتضخم (2%)
                لأنه يعكس بشكل أفضل <strong>تطور الأسعار الأساسي</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>11. ماذا يظهر ميزان المدفوعات؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يظهر ميزان المدفوعات <strong>جميع معاملات</strong> الدولة مع
              العالم الخارجي خلال فترة معينة، بما في ذلك تجارة السلع والخدمات
              وتدفقات رأس المال والتحويلات.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>12. من المسؤول عن السياسة المالية؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الحكومة والبرلمان</strong> (وزارة المالية) مسؤولان عن
              السياسة المالية – توجيه <strong>إيرادات</strong> الدولة
              (الضرائب) و <strong>نفقاتها</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>13. ما هو تأثير المضاعف؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>تأثير المضاعف</strong> يعني أن زيادة مبدئية في الإنفاق
              العام تؤدي إلى <strong>زيادة كلية أكبر</strong> في الناتج
              المحلي الإجمالي، لأن الأموال تُنفق عدة مرات في الاقتصاد.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>14. ما الذي يشمل الإطار المالي؟</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>هدف الفائض</strong> – يجب أن تظهر مالية الدولة فائضاً
                على المدى الطويل.
              </li>
              <li>
                <strong>سقف الإنفاق</strong> – حد أعلى لنفقات الدولة.
              </li>
              <li>
                <strong>شرط التوازن</strong> للبلديات والمناطق.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>15. ماذا تعني سياسة سوق العمل؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              سياسة سوق العمل هي <strong>إجراءات</strong> لتقليل البطالة وزيادة
              التشغيل، مثل برامج التدريب لسوق العمل، فرص التدريب العملي،
              إعانات الأجور ودعم الشركات الناشئة.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>16. كيف يمارس البنك المركزي السياسة النقدية؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يوجه البنك المركزي السياسة النقدية من خلال تحديد
              <strong>سعر الفائدة الرئيسي</strong> والتأثير على
              <strong>كمية النقود</strong>. من خلال رفع أو خفض سعر الفائدة،
              يؤثر البنك المركزي على التضخم والنشاط الاقتصادي.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            17. كيف يؤثر سعر الفائدة الرئيسي للبنك المركزي على الاقتصاد الشخصي
            للشعب السويدي؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>رفع سعر الفائدة الرئيسي:</strong> قروض سكنية أغلى →
                أموال أقل للاستهلاك.
              </li>
              <li>
                <strong>خفض سعر الفائدة الرئيسي:</strong> قروض سكنية أرخص →
                أموال أكثر للاستهلاك.
              </li>
              <li>
                يؤثر أيضاً على <strong>أسعار الفائدة على المدخرات</strong> و
                <strong>تكاليف اقتراض الشركات</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            18. كيف تؤثر هيئة الرقابة المالية على الاقتصاد الشخصي للشعب السويدي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تؤثر هيئة الرقابة المالية (FI) على الاقتصاد الشخصي من خلال:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>سقف القروض العقارية:</strong> توصية بأن لا تتجاوز القروض
                85% من سعر المسكن.
              </li>
              <li>
                <strong>متطلبات التقسيط:</strong> متطلبات ملزمة تجبر الأسر على
                سداد قروضها، مما يقلل المديونية.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            19. اشرح لماذا تمثل العملات المعدنية والورقية جزءاً صغيراً فقط من
            كمية النقود.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الجزء الأكبر من كمية النقود موجود كـ <strong>نقود رقمية</strong>
              في الحسابات المصرفية. عندما تدفع ببطاقة أو بـ Swish، تستخدم
              <strong>نقوداً رقمية</strong>، وليست عملات ورقية ومعدنية مادية.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>20. كيف تخلق البنوك النقود؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تخلق البنوك النقود من خلال <strong>الإقراض</strong>. عندما يمنح
              البنك قرضاً، تُودع الأموال في حساب المقترض – <strong>تُخلق نقود
              جديدة</strong>. يُسمى هذا <strong>تأثير مضاعف الائتمان</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>21. ما هي السوق المالية؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>السوق المالية</strong> هي السوق التي تُتداول فيها الأموال
              والائتمانات والأوراق المالية. هنا يتم وساطة المدخرات من الأسر
              والشركات إلى الإقراض والاستثمارات.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>22. ماذا يعني نظام سعر الصرف الثابت؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>سعر الصرف الثابت</strong> يعني أن قيمة العملة
              <strong>مرتبطة</strong> بعملة أخرى (مثل اليورو). يجب على البنك
              المركزي عندها شراء وبيع العملات للحفاظ على السعر ثابتاً.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>23. ماذا يعني نظام سعر الصرف المرن؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>سعر الصرف المرن</strong> يعني أن قيمة العملة تحددها
              <strong>العرض والطلب</strong> في سوق العملات. السويد تتبع نظام
              سعر الصرف المرن.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            24. ما هو التشابه والاختلاف بين تخفيض العملة وانخفاض العملة؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>التشابه:</strong> كلاهما يعني <strong>انخفاضاً</strong>
                في قيمة العملة.
              </li>
              <li>
                <strong>الاختلاف:</strong> <strong>تخفيض العملة</strong> هو
                <strong>قرار سياسي</strong> (في ظل سعر صرف ثابت).
                <strong>انخفاض العملة</strong> يحدث <strong>تلقائياً</strong>
                بواسطة قوى السوق (في ظل سعر صرف مرن).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 8. أسئلة التحليل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. أسئلة التحليل</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. تعتمد مقترحات الاقتصاديين جزئياً على قيمهم السياسية. أعط أمثلة
            على كيف يمكن أن يبدو ذلك.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                اقتصادي <strong>مائل لليسار</strong> قد يقترح
                <strong>ضرائب أعلى</strong> على أصحاب الدخل المرتفع لتمويل
                توسيع الرفاهية وتقليل الفجوات.
              </li>
              <li>
                اقتصادي <strong>مائل لليمين</strong> قد يقترح
                <strong>خفض الضرائب</strong> وتقليل الإنفاق العام لتحفيز
                الأعمال والنمو.
              </li>
              <li>
                كلاهما يستخدم نفس النظرية الاقتصادية لكن <strong>يعطي أولوية
                لأهداف مختلفة</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. في أي مرحلة من الدورة الاقتصادية توجد السويد حالياً؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <em>(هذا يتطلب بيانات حالية. كذكاء اصطناعي بدون وصول إلى بيانات
              فورية، لا يمكنني إعطاء إجابة دقيقة. ولكن يمكنك زيارة موقع معهد
              الدورة الاقتصادية (www.konj.se) لرؤية التقييمات الحالية. بشكل
              عام: انظر إلى نمو الناتج المحلي الإجمالي والبطالة والتضخم لتحديد
              ما إذا كانت السويد في ازدهار أو ركود أو بينهما.)</em>
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A3. هل يجب على السويد تقديم يوم عمل من ست ساعات لتشغيل المزيد من الناس؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>المزايا:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                يمكن تقسيم المهام على عدد أكبر من الأشخاص → بطالة أقل.
              </li>
              <li>بيئة عمل وصحة أفضل للموظفين.</li>
              <li>وقت أكثر للعائلة والترفيه والاستشفاء.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>العيوب:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                تكاليف أعلى لأصحاب العمل (موظفون أكثر، نفس الإنتاج).
              </li>
              <li>خطر انخفاض الإنتاجية.</li>
              <li>قد يؤدي إلى أسعار أعلى للسلع والخدمات.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>المجموعات التي قد ترى ذلك إيجابياً:</strong> النقابات
              العمالية، الموظفون في المهن المجهدة، آباء الأطفال الصغار.
            </p>
            <p className={classes.paragraph}>
              <strong>المجموعات التي قد ترى ذلك سلبياً:</strong> أصحاب العمل،
              أصحاب المشاريع الصغيرة، ذوو التعليم العالي والرواتب المرتفعة
              (الذين قد يحصلون على دخل أقل).
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A4. لماذا من الصعب سياسياً تنفيذ متطلبات تقسيط صارمة جداً؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مقاومة من الأسر:</strong> العديد من الأسر لديها قروض
                عالية وقد تجد صعوبة في تلبية متطلبات تقسيط أكثر صرامة.
              </li>
              <li>
                <strong>خطر انهيار سوق الإسكان:</strong> متطلبات أكثر صرامة
                قد تؤدي إلى انخفاض أسعار المساكن، مما يؤثر على ثروة الأسر.
              </li>
              <li>
                <strong>خطر سياسي:</strong> الناخبون ذوو القروض العقارية العالية
                قد يعاقبون السياسيين الذين يفرضون قواعد أكثر صرامة.
              </li>
              <li>
                <strong>مصلحة البنوك:</strong> البنوك تربح من الإقراض ولا تريد
                تقليل أعمالها.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A5. اقتصاد عائلة غليرونغ – كيف تتأثر؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>تصبح آنا عاطلة عن العمل:</strong> دخل أسرة أقل →
                صعوبة في دفع الفوائد والأقساط.
              </li>
              <li>
                <strong>ترفع هيئة الرقابة المالية متطلب التقسيط:</strong> يجب
                على الأسرة دفع المزيد في التقسيط → أموال أقل للاستهلاك.
              </li>
              <li>
                <strong>ترتفع الفائدة بمقدار 2 نقطة مئوية خلال عامين:</strong>
                زيادة تكلفة الفائدة (على 3 ملايين = 60,000 كرونة أكثر سنوياً)
                → تدهور حاد في الاقتصاد.
              </li>
              <li>
                <strong>ترتفع ضريبة البلدية 30 أورة:</strong> انخفاض الدخل
                المتاح.
              </li>
              <li>
                <strong>ينخفض الكرونا 10% مقابل اليورو:</strong> تصبح الرحلة
                إلى إسبانيا أغلى بنسبة 10%.
              </li>
              <li>
                <strong>الخلاصة:</strong> تعاني الأسرة من <strong>عاصفة مثالية</strong>
                – انخفاض الدخل، زيادة النفقات وعطلة أغلى.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 9. أسئلة المناقشة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. أسئلة المناقشة</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. أعط أمثلة على منتجات يتم الترويج لها في إعلانات التلفزيون أو
            على الإنترنت. هل هي أمثلة على المنافسة الاحتكارية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              نعم، معظم المنتجات التي يتم الترويج لها (مثل الملابس، الإلكترونيات،
              المواد الغذائية) هي أمثلة على <strong>المنافسة الاحتكارية</strong>
              – تبيع شركات عديدة منتجات متشابهة لكن مختلفة، وتتنافس من خلال
              العلامات التجارية والتصميم والتسويق.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. لماذا من الصعب قياس الاقتصاد الأسود؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الاقتصاد الأسود <strong>مخفي وغير مسجل</strong> – المشاركون فيه
              لا يريدون أن تكتشفه السلطات. يمكن تقديره بطرق غير مباشرة أو
              استبيانات أو مراجعات ضريبية، ولكن <strong>جميع الطرق غير مؤكدة</strong>.
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
              <strong>إيجابية:</strong> يمكن أن تضمن خدمة متساوية في جميع أنحاء
              البلاد، وتجنب الاستثمارات المتداخلة (مثل شبكات الكهرباء، السكك
              الحديدية).
            </p>
            <p className={classes.paragraph}>
              <strong>سلبية:</strong> غياب المنافسة → كفاءة أقل، ابتكار أقل،
              جودة أسوأ وأسعار أعلى (إذا لم يتم تنظيمها).
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D4. ما هو حق العاطلين عن العمل في أن يكونوا عاطلين مع الحفاظ على
            اقتصاد معقول؟ وما هو حق المواطنين الآخرين في عدم دفع ضرائب لأولئك
            الذين لا يبذلون قصارى جهدهم للعثور على وظيفة جديدة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>للعاطلين عن العمل:</strong> لكل شخص الحق في
              <strong>وجود كريم</strong> وفقاً لشبكات الأمان الاجتماعي. البطالة
              قد تصيب أي شخص (مرض، فصل، تحول). المجتمع لديه مسؤولية للمساعدة.
            </p>
            <p className={classes.paragraph}>
              <strong>ضد:</strong> أولئك الذين لا يبحثون بنشاط عن عمل أو يرفضون
              العروض قد <strong>يسيئون استخدام النظام</strong>. لدافعي الضرائب
              الحق في توقع أن تذهب الإعانات لمن يحتاجون حقاً ويبذلون جهداً.
            </p>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> يجب على النظام موازنة
              <strong>الأمان</strong> لمن يحتاجه مع <strong>الحوافز</strong>
              للبحث عن عمل. <strong>متطلبات النشاط</strong> و
              <strong>الرقابة</strong> مهمة.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D5. كيف يمكن قياس الإنتاجية مثلاً في مصنع درابزينات؟ في مدرسة أو
            في دار للمسنين؟ أي مكان عمل يبدو الأسهل للقياس؟ الأصعب؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مصنع درابزينات (الأسهل):</strong> قياس
                <strong>عدد الدرابزينات المنتجة</strong> لكل عامل وساعة.
                الإنتاج ملموس وقابل للقياس.
              </li>
              <li>
                <strong>مدرسة (الأصعب):</strong> قياس
                <strong>تطور معرفة الطلاب</strong> (مثل الامتحانات الوطنية)،
                ولكن من الصعب عزل مساهمة المعلم عن عوامل أخرى (الظروف المنزلية،
                دافع الطالب).
              </li>
              <li>
                <strong>دار مسنين (صعب):</strong> قياس عدد
                <strong>جهود الرعاية</strong> لكل شخص، ولكن
                <strong>الجودة</strong> (الأمان، الرفاهية) صعبة القياس.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 10. المفاهيم الأساسية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>10. المفاهيم الأساسية</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>متطلبات التقسيط:</span> متطلبات
            ملزمة من هيئة الرقابة المالية تجبر الأسر على سداد قروضها.
          </li>
          <li>
            <span className={classes.keyword}>ميزان المدفوعات:</span> جميع
            معاملات الدولة مع العالم الخارجي (تجارة، تدفقات رأس المال).
          </li>
          <li>
            <span className={classes.keyword}>سقف القروض العقارية:</span> توصية
            (من 2010) بأن لا تتجاوز القروض 85% من سعر المسكن.
          </li>
          <li>
            <span className={classes.keyword}>الانكماش:</span> انخفاض مستمر في
            الأسعار – تزداد قيمة النقود.
          </li>
          <li>
            <span className={classes.keyword}>انخفاض العملة:</span> انخفاض قيمة
            العملة في ظل سعر صرف مرن (بسبب قوى السوق).
          </li>
          <li>
            <span className={classes.keyword}>الكساد:</span> ركود عميق وطويل
            الأمد.
          </li>
          <li>
            <span className={classes.keyword}>تخفيض العملة:</span> خفض متعمد
            لقيمة العملة في ظل سعر صرف ثابت (قرار سياسي).
          </li>
          <li>
            <span className={classes.keyword}>النقود الرقمية:</span> نقود موجودة
            كأرقام في الحسابات المصرفية (تُستخدم في الدفع بالبطاقة، Swish
            إلخ).
          </li>
          <li>
            <span className={classes.keyword}>سعر صرف ثابت:</span> قيمة العملة
            مرتبطة بعملة أخرى.
          </li>
          <li>
            <span className={classes.keyword}>اختناق:</span> عندما يصبح مورد
            (عمالة، مواد خام، آلات) نادراً ويعوق الإنتاج.
          </li>
          <li>
            <span className={classes.keyword}>السوق المالية:</span> سوق تُتداول
            فيها الأموال والائتمانات والأوراق المالية.
          </li>
          <li>
            <span className={classes.keyword}>هيئة الرقابة المالية (FI):</span>
            هيئة تراقب السوق المالية (البنوك، شركات التأمين إلخ).
          </li>
          <li>
            <span className={classes.keyword}>السياسة المالية:</span> توجيه
            الدولة للإيرادات (الضرائب) والنفقات.
          </li>
          <li>
            <span className={classes.keyword}>التضخم:</span> ارتفاع مستمر في
            الأسعار – تنخفض قيمة النقود.
          </li>
          <li>
            <span className={classes.keyword}>الدورة الاقتصادية:</span> تقلبات
            منتظمة في الاقتصاد بين الازدهار والركود.
          </li>
          <li>
            <span className={classes.keyword}>مؤشر أسعار المستهلك (KPI):</span>
            مقياس لتطور الأسعار على السلع والخدمات.
          </li>
          <li>
            <span className={classes.keyword}>تأثير المضاعف:</span> زيادة مبدئية
            في الإنفاق تؤدي إلى زيادة كلية أكبر في الناتج المحلي الإجمالي.
          </li>
          <li>
            <span className={classes.keyword}>السياسة النقدية:</span> توجيه
            البنك المركزي لسعر الفائدة وكمية النقود.
          </li>
          <li>
            <span className={classes.keyword}>قاعدة السعر الأساسي:</span> مبلغ
            يستخدم لحساب المزايا الاجتماعية، يُعدل وفقاً لـ KPI.
          </li>
          <li>
            <span className={classes.keyword}>الإنتاجية:</span> الإنتاج لكل مدخلات
            (مثل عدد السلع لكل عامل وساعة).
          </li>
          <li>
            <span className={classes.keyword}>البنك المركزي:</span> البنك المركزي
            السويدي، المسؤول عن السياسة النقدية.
          </li>
          <li>
            <span className={classes.keyword}>سعر صرف مرن:</span> قيمة العملة
            تحددها العرض والطلب.
          </li>
          <li>
            <span className={classes.keyword}>سياسة التثبيت:</span> مفهوم شامل
            للسياسة المالية والنقدية لتسوية الدورة الاقتصادية.
          </li>
          <li>
            <span className={classes.keyword}>الدين الحكومي:</span> المبلغ
            الإجمالي الذي اقترضته الدولة.
          </li>
          <li>
            <span className={classes.keyword}>بطالة هيكلية:</span> بطالة ناتجة
            عن عدم توازن بين العرض والطلب على العمالة.
          </li>
          <li>
            <span className={classes.keyword}>إعادة الهيكلة الهيكلية:</span>
            إعادة هيكلة الاقتصاد لزيادة الكفاءة.
          </li>
          <li>
            <span className={classes.keyword}>سعر الفائدة الرئيسي:</span> سعر
            الفائدة الذي يحدده البنك المركزي ويؤثر على أسعار الفائدة الأخرى.
          </li>
          <li>
            <span className={classes.keyword}>ميزانية غير متوازنة:</span> عندما
            تكون نفقات الدولة أكبر من إيراداتها (عجز في الميزانية).
          </li>
          <li>
            <span className={classes.keyword}>سياسة سعر الصرف:</span> سياسة
            الدولة للتأثير على سعر الصرف.
          </li>
          <li>
            <span className={classes.keyword}>هدف الفائض:</span> هدف أن تظهر
            مالية الدولة فائضاً على المدى الطويل.
          </li>
        </ul>
      </section>
    </div>
  );
}