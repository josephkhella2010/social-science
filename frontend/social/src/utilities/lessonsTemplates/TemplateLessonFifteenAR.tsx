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

export default function TemplateLessonFifteenAR() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}> الفصل 15: التعاون الدولي</h1>
      <p className={classes.subtitle}>
        ملخص شامل مع الأسئلة والتحليل والمناقشة والمفاهيم الأساسية
      </p>

      {/* ===== 1. السياسة الخارجية والأمنية السويدية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          1. السياسة الخارجية والأمنية السويدية
        </h2>
        <p className={classes.paragraph}>
          يصف هذا القسم كيفية عمل السويد في علاقاتها مع الدول الأخرى.
        </p>

        <h3 className={classes.subHeading}>
          الدبلوماسية – أساس التعاون بين الدول
        </h3>
        <ul className={classes.list}>
          <li>
            <strong>السياسة الخارجية:</strong> علاقات السويد وسياساتها تجاه
            الدول الأخرى.
          </li>
          <li>
            <strong>السياسة الأمنية:</strong> جزء من السياسة الخارجية يهدف إلى
            منع المخاطر والتهديدات.
          </li>
          <li>
            <strong>الدبلوماسية:</strong> الأداة الأكثر أهمية لتجنب الحروب
            وتحقيق حلول سلمية للنزاعات من خلال المحادثات والمفاوضات.
          </li>
          <li>
            <strong>القنوات الدبلوماسية:</strong> الاتصال عبر الدبلوماسيين
            المتمركزين في الخارج.
          </li>
          <li>
            <strong>السفير:</strong> أعلى ممثل رسمي لدولة ما.
          </li>
          <li>
            <strong>مهام الدبلوماسي:</strong>
            <ul className={classes.list}>
              <li>الإبلاغ عن التطورات السياسية والاقتصادية.</li>
              <li>معالجة قضايا الحرب والسلام والقضايا التجارية.</li>
              <li>رعاية المواطنين الذين يواجهون صعوبات في الخارج.</li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>الخط السياسي الأمني للسويد</h3>
        <ul className={classes.list}>
          <li>
            <strong>عدم الانحياز:</strong> كانت السويد تاريخياً غير منحازة
            ومحايدة.
          </li>
          <li>
            <strong>التعاون مع العالم الخارجي:</strong> تتعاون السويد مع دول
            ومنظمات أخرى (الأمم المتحدة، الاتحاد الأوروبي، الناتو بعد 2024).
          </li>
          <li>
            <strong>عضوية السويد في الناتو:</strong> تقدمت السويد بطلب للانضمام
            إلى الناتو في 2022 بعد الغزو الروسي لأوكرانيا وأصبحت عضواً رسمياً في
            2024.
          </li>
          <li>
            <strong>الدفاع الشامل:</strong> أعادت السويد بناء الدفاع الشامل
            (الدفاع العسكري والمدني) بعد تدهور الوضع الأمني في أوروبا.
          </li>
        </ul>
      </section>

      {/* ===== 2. الأمم المتحدة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. الأمم المتحدة</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم هيكل الأمم المتحدة وأجهزتها ووظائفها.
        </p>

        <h3 className={classes.subHeading}>أهداف الأمم المتحدة الأساسية</h3>
        <ol className={classes.list}>
          <li>الحفاظ على السلم والأمن الدوليين.</li>
          <li>تطوير علاقات ودية بين الأمم.</li>
          <li>
            تعزيز التعاون لحل المشاكل الدولية (الاقتصادية والاجتماعية والثقافية
            والإنسانية).
          </li>
          <li>العمل من أجل حقوق الإنسان والحريات الأساسية.</li>
        </ol>

        <h3 className={classes.subHeading}>أجهزة الأمم المتحدة الرئيسية</h3>

        <h4 className={classes.subHeading}>1. الجمعية العامة</h4>
        <ul className={classes.list}>
          <li>جميع الدول الأعضاء الـ 193 ممثلة.</li>
          <li>لكل دولة صوت واحد.</li>
          <li>تجتمع سنوياً في نيويورك.</li>
          <li>تتطلب القرارات في المسائل المهمة أغلبية الثلثين.</li>
          <li>
            يمكنها اعتماد توصيات وبيانات (غير ملزمة قانونياً ولكن لها ثقل كبير).
          </li>
        </ul>

        <h4 className={classes.subHeading}>2. مجلس الأمن</h4>
        <ul className={classes.list}>
          <li>
            <strong>15 عضواً إجمالاً:</strong>
            <ul className={classes.list}>
              <li>
                <strong>5 أعضاء دائمين (P5):</strong> الولايات المتحدة، روسيا،
                الصين، بريطانيا، فرنسا.
              </li>
              <li>
                <strong>10 أعضاء آخرين:</strong> تنتخبهم الجمعية العامة لمدة
                عامين.
              </li>
            </ul>
          </li>
          <li>
            <strong>حق النقض (الفيتو):</strong> يمكن لكل عضو دائم إيقاف القرار
            بالتصويت ضده.
          </li>
          <li>
            <strong>للقرارات:</strong> يلزم 9 أصوات مؤيدة ولا يوجد فيتو من
            الأعضاء الدائمين.
          </li>
        </ul>

        <h4 className={classes.subHeading}>3. الأمانة العامة</h4>
        <ul className={classes.list}>
          <li>
            بقيادة <strong>الأمين العام</strong> (أنطونيو غوتيريش، البرتغال،
            أعيد انتخابه 2022).
          </li>
          <li>يُنتخب لمدة خمس سنوات.</li>
          <li>له الحق في لفت انتباه مجلس الأمن إلى تهديدات السلم والأمن.</li>
          <li>حوالي 36,000 موظف حول العالم.</li>
        </ul>

        <h4 className={classes.subHeading}>4. محكمة العدل الدولية (ICJ)</h4>
        <ul className={classes.list}>
          <li>توجد في لاهاي، هولندا.</li>
          <li>تفصل في النزاعات بين الدول (وليس الأفراد).</li>
          <li>الأحكام ملزمة للدول التي قبلت ولاية المحكمة.</li>
        </ul>

        <h3 className={classes.subHeading}>
          إجراءات الأمم المتحدة في مواجهة تهديدات السلام
        </h3>
        <ol className={classes.list}>
          <li>
            <strong>إجراءات دبلوماسية:</strong> وساطة، توصيات، محادثات.
          </li>
          <li>
            <strong>بعثات حفظ السلام:</strong> نشر جنود الأمم المتحدة (الخوذ
            الزرقاء) في مناطق النزاع.
          </li>
          <li>
            <strong>عقوبات غير عسكرية:</strong> ضغوط اقتصادية ودبلوماسية.
          </li>
          <li>
            <strong>إجراءات عسكرية إجبارية:</strong> إذا لم تكن العقوبات كافية،
            يمكن لمجلس الأمن أن يقرر التدخل العسكري (مثل كوريا 1950، العراق
            1990، ليبيا 2011).
          </li>
        </ol>
      </section>

      {/* ===== 3. الناتو ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. الناتو – حلف شمال الأطلسي</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم الناتو ودوره في الأمن الدولي.
        </p>

        <h3 className={classes.subHeading}>الناتو</h3>
        <ul className={classes.list}>
          <li>
            <strong>الناتو (منظمة حلف شمال الأطلسي):</strong> تحالف دفاعي تأسس
            عام 1949.
          </li>
          <li>
            <strong>الفكرة الأساسية:</strong> الهجوم على عضو واحد هو هجوم على
            الجميع (<strong>الدفاع الجماعي</strong> بموجب المادة 5).
          </li>
          <li>
            <strong>الدول الأعضاء:</strong> 32 دولة (2024)، بما في ذلك السويد
            (عضوة منذ 2024).
          </li>
        </ul>

        <h3 className={classes.subHeading}>طريق السويد إلى الناتو</h3>
        <ul className={classes.list}>
          <li>تاريخياً غير منحازة ومحايدة.</li>
          <li>تقدمت بطلب في 2022 بعد الغزو الروسي لأوكرانيا.</li>
          <li>عضوة رسمياً في 2024.</li>
          <li>
            <strong>الهدف:</strong> ضمان أمن الدول الأعضاء من خلال الردع والدفاع
            الجماعي.
          </li>
        </ul>
      </section>

      {/* ===== 4. تعاونات دولية أخرى ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. تعاونات دولية أخرى</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم منظمات دولية مهمة أخرى.
        </p>

        <ul className={classes.list}>
          <li>
            <strong>الاتحاد الأوروبي (EU):</strong> تعاون اقتصادي وسياسي يضم 27
            دولة عضو.
          </li>
          <li>
            <strong>مجلس أوروبا:</strong> 46 دولة عضواً، يعمل من أجل حقوق
            الإنسان والديمقراطية وسيادة القانون. أنشأ الاتفاقية الأوروبية لحقوق
            الإنسان.
          </li>
          <li>
            <strong>منظمة الأمن والتعاون في أوروبا (OSCE):</strong> 57 دولة
            عضواً، تعمل على منع النزاعات وبناء الثقة والتعاون الأمني في أوروبا.
          </li>
          <li>
            <strong>منظمة الصحة العالمية (WHO):</strong> جهاز تابع للأمم المتحدة
            يعمل من أجل الصحة العالمية.
          </li>
          <li>
            <strong>منظمة التجارة العالمية (WTO):</strong> تنظم التجارة الدولية.
          </li>
          <li>
            <strong>منظمة التعاون الاقتصادي والتنمية (OECD):</strong> 38 دولة
            عضواً، تعمل من أجل النمو الاقتصادي والتنمية.
          </li>
          <li>
            <strong>صندوق النقد الدولي (IMF):</strong> يراقب النظام المالي
            الدولي.
          </li>
          <li>
            <strong>البنك الدولي:</strong> يقدم قروضاً للدول النامية.
          </li>
        </ul>
      </section>

      {/* ===== 5. القانون الدولي ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. القانون الدولي</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم القوانين والقواعد التي تحكم العلاقات بين الدول.
        </p>

        <h3 className={classes.subHeading}>القانون الدولي</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> القوانين والقواعد التي تنظم سيادة الدول
            والعلاقات بين الدول.
          </li>
          <li>
            <strong>أهداف القانون الدولي:</strong>
            <ul className={classes.list}>
              <li>جعل العلاقات بين الدول تعمل بشكل جيد.</li>
              <li>حماية الأفراد من انتهاكات الدولة.</li>
              <li>تجنب الحروب.</li>
              <li>حماية الأفراد إذا حدثت الحرب.</li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>جزآن من القانون الدولي</h3>

        <h4 className={classes.subHeading}>
          1. القانون الإنساني (قوانين الحرب)
        </h4>
        <ul className={classes.list}>
          <li>
            يحمي ليس فقط الجنود ولكن أيضاً <strong>المدنيين</strong> والمرضى
            والجرحى وأسرى الحرب.
          </li>
          <li>
            <strong>اتفاقيات جنيف (1949):</strong> تدون القواعد، وتسمى أيضاً
            قواعد الصليب الأحمر.
          </li>
          <li>
            <strong>الفكرة الأساسية:</strong> "يجب أن يقاتل الجنود الجنود" – يجب
            إبعاد المدنيين.
          </li>
          <li>
            <strong>المقاتلون غير الشرعيين:</strong> الأشخاص الذين يشنون "حروباً
            خاصة" لديهم حماية دولية أضعف.
          </li>
        </ul>

        <h4 className={classes.subHeading}>2. حقوق الإنسان</h4>
        <ul className={classes.list}>
          <li>
            حقوق تحمي الأفراد من <strong>انتهاكات الدولة</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>مفهومان مهمان في القانون الدولي</h3>
        <ul className={classes.list}>
          <li>
            <strong>قانون المعاهدات:</strong> اتفاقيات مكتوبة بين الدول
            (معاهدات، مواثيق، بروتوكولات). تصبح ملزمة فقط بعد
            <strong>التصديق</strong> (موافقة الدولة).
          </li>
          <li>
            <strong>القانون العرفي:</strong> قواعد غير مكتوبة ملزمة لجميع الدول
            لأنها تعتبر عملية وصحيحة أخلاقياً (مثل الحق في الحياة، حظر التعذيب).
          </li>
        </ul>

        <h3 className={classes.subHeading}>محكمة العدل الدولية (ICJ)</h3>
        <ul className={classes.list}>
          <li>الجهاز القضائي الرئيسي للأمم المتحدة في لاهاي.</li>
          <li>تفصل في النزاعات بين الدول (وليس الأفراد).</li>
          <li>
            <strong>أمثلة على الأحكام:</strong>
            <ul className={classes.list}>
              <li>ترسيم الحدود بين الدنمارك (جرينلاند) والنرويج.</li>
              <li>
                2024: قرار بالمضي قدماً في اتهامات أوكرانيا بأن روسيا انتهكت
                اتفاقية الإبادة الجماعية.
              </li>
              <li>
                2024: قرار بأن تتوقف إسرائيل عن أعمال بموجب اتفاقية الإبادة
                الجماعية في غزة.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>المحكمة الجنائية الدولية (ICC)</h3>
        <ul className={classes.list}>
          <li>
            تحاكم <strong>الأفراد</strong> بتهم جرائم الحرب والجرائم ضد
            الإنسانية والإبادة الجماعية.
          </li>
        </ul>
      </section>

      {/* ===== 6. تحديات التعاون الدولي ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. تحديات التعاون الدولي</h2>
        <ul className={classes.list}>
          <li>
            <strong>الحروب والصراعات:</strong> الغزو الروسي لأوكرانيا، حرب غزة،
            الحروب الأهلية.
          </li>
          <li>
            <strong>أزمة المناخ:</strong> الاحتباس الحراري، التدهور البيئي.
          </li>
          <li>
            <strong>الفقر وعدم المساواة:</strong> فجوات كبيرة بين الدول الغنية
            والفقيرة.
          </li>
          <li>
            <strong>الهجرة:</strong> تدفقات اللاجئين من مناطق الحروب والكوارث.
          </li>
          <li>
            <strong>انتهاكات حقوق الإنسان:</strong> القمع والتمييز والإبادة
            الجماعية.
          </li>
          <li>
            <strong>المعلومات المضللة:</strong> نشر الأخبار الكاذبة التي تقوض
            الثقة في التعاون الدولي.
          </li>
          <li>
            <strong>المصالح الوطنية:</strong> غالباً ما تفضل الدول مصالحها
            الخاصة على التعاون الدولي.
          </li>
        </ul>
      </section>

      {/* ===== 7. أسئلة على النص ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. أسئلة على النص</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            1. ما هي الدبلوماسية ولماذا هي مهمة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الدبلوماسية هي فن <strong>المحادثات والمفاوضات</strong> بين الدول
              لتجنب النزاعات وتحقيق حلول سلمية. وهي مهمة لأنها
              <strong>الأداة الأساسية</strong> لمنع الحروب وتعزيز التعاون.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. ما المقصود بالالتزام التلقائي / الاتفاقات الملزمة في التعاونات؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يعني أن القرارات أو الاتفاقيات المتخذة ضمن تعاون دولي تصبح
              <strong>ملزمة قانونياً</strong> مباشرة للدول الأعضاء دون حاجة كل
              دولة إلى الموافقة على القرار في برلمانها لاحقاً. في المنظمات{" "}
              <strong>الحكومية الدولية</strong> (مثل الأمم المتحدة) هذا عادة ما
              يكون مفقوداً، بينما يوجد في المنظمات
              <strong>الفوق وطنية</strong> (مثل الاتحاد الأوروبي).
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. ما هي الاختلافات بين المفاوضات الثنائية والمتعددة الأطراف؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>المفاوضات الثنائية:</strong> تجري{" "}
                <strong>بين طرفين مباشرين</strong> أو دولتين (مثل اتفاقية تجارة
                حرة بين السويد والولايات المتحدة).
              </li>
              <li>
                <strong>المفاوضات المتعددة الأطراف:</strong> تشمل{" "}
                <strong>أكثر من دولتين</strong> في وقت واحد، غالباً ضمن منظمة
                دولية (مثل مفاوضات المناخ في الأمم المتحدة أو قواعد منظمة
                التجارة العالمية).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. ما هو الهدف الأساسي للسياسة الخارجية والأمنية السويدية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الهدف الأساسي هو <strong>الحفاظ</strong> على استقلال السويد
              الوطني، <strong>حماية</strong> سيادة البلاد وأراضيها،
              <strong>والحفاظ</strong> على أمن السكان وحريتهم وديمقراطيتهم.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            5. ماذا يعني أن السويد بعد انضمامها إلى الاتحاد الأوروبي تحدثت عن
            سياسة خارجية ذات "هوية أوروبية"؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يعني أن السويد لم تعد تعمل بشكل منعزل أو محايد تماماً على الساحة
              الدولية، بل قامت بتكييف سياستها الخارجية مع
              <strong>
                السياسة الخارجية والأمنية المشتركة للاتحاد الأوروبي (CFSP)
              </strong>{" "}
              وشاركت في القيم والمصالح الأمنية الأوروبية المشتركة.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. اذكر بعض الحجج في النقاش لصالح وعضوية السويد في الناتو.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>لصالح العضوية:</strong> الدفاع الجماعي بموجب المادة 5
                يعطي <strong>تأثيراً ردعياً</strong> أقوى ضد الهجمات؛ أمن عسكري
                أكبر من خلال التعاون مع الحلفاء.
              </li>
              <li>
                <strong>ضد العضوية:</strong> نهاية لتقليد طويل من
                <strong>عدم الانحياز</strong>؛ خطر زيادة التوتر والصراع مع
                روسيا؛ خطر تدهور فرص العمل كـ <strong>وسيط غير منحاز</strong>
                في السياسة العالمية.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. ينقسم الدفاع الشامل إلى قسمين. ما هما؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>الدفاع العسكري:</strong> يتكون من القوات المسلحة (الجيش،
                القوات الجوية، البحرية، الدفاع السيبراني والحرس الوطني).
              </li>
              <li>
                <strong>الدفاع المدني:</strong> يشمل <strong>مرونة</strong>
                المجتمع بأكمله (الرعاية الصحية، النقل، توفير الغذاء، البلديات
                وغيرها) للحفاظ على وظائف المجتمع الأساسية في الأزمات أو الحرب.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. ما هي الدول الأعضاء في الناتو؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الناتو لديه <strong>32 دولة عضواً</strong> (بما في ذلك الولايات
              المتحدة وبريطانيا وفرنسا وألمانيا وتركيا والنرويج والدنمارك،
              وآخرهم فنلندا والسويد).
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. يتخذ الناتو القرارات وفق مبدأ الإجماع. ماذا يعني ذلك؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يعني أن <strong>جميع الدول الأعضاء</strong> يجب أن تكون
              <strong>متوافقة تماماً</strong> لاتخاذ القرار. لكل دولة عملياً
              <strong>حق النقض (الفيتو)</strong>؛ إذا قالت دولة واحدة لا، لا يتم
              تمرير القرار.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. تعتبر معاهدة الناتو ذات مبدأ ملزم في التعاون (المادة 5). ماذا
            يعني هذا المبدأ؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              مبدأ <strong>الدفاع الجماعي</strong> ("الكل من أجل واحد، واحد من
              أجل الكل"). الهجوم المسلح على دولة عضو يعتبر هجوماً على
              <strong>جميع الأعضاء</strong>، مما يلزم الدول الأخرى بمساعدة
              الدولة التي تعرضت للهجوم.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. اشرح بإيجاز معنى هيئات التعاون التالية:
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>المجلس الشمالي:</strong> هيئة <strong>برلمانية</strong>
                للتعاون بين برلمانات الدول الشمالية لتعزيز التعاون الإقليمي في
                السياسة والثقافة والتشريع.
              </li>
              <li>
                <strong>مجلس الوزراء الشمالي:</strong>{" "}
                <strong>تعاون حكومي</strong>
                بين الدول الشمالية حيث يجتمع الوزراء لاتخاذ قرارات مشتركة في
                مجالات محددة.
              </li>
              <li>
                <strong>منظمة التجارة العالمية (WTO):</strong> منظمة عالمية تضع{" "}
                <strong>النظام القواعد</strong> للتجارة الدولية وتحل النزاعات
                التجارية بين الدول.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. ما هو هدف الأمم المتحدة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الحفاظ</strong> على السلم والأمن الدوليين،
              <strong>تطوير</strong> علاقات ودية بين الدول،
              <strong>تعزيز</strong> حقوق الإنسان و <strong>حل</strong>
              المشاكل الاقتصادية والاجتماعية والإنسانية العالمية.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. اشرح طريقة عمل الجمعية العامة ومجلس الأمن على التوالي.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>الجمعية العامة:</strong> جميع الدول الأعضاء الـ 193 لها
                <strong>صوت واحد</strong> لكل دولة. تناقش القضايا العالمية
                وتتبنى قرارات تعمل كـ <strong>توصيات</strong> (غير ملزمة
                قانونياً).
              </li>
              <li>
                <strong>مجلس الأمن:</strong> مسؤول عن السلم والأمن الدوليين.
                يمكنه اتخاذ قرارات <strong>ملزمة قانونياً</strong> (مثل العقوبات
                أو العمليات العسكرية).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>14. كيف يتكون مجلس الأمن؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يتكون من <strong>15 دولة عضواً</strong>:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>5 أعضاء دائمين:</strong> الولايات المتحدة وروسيا والصين
                وبريطانيا وفرنسا (جميعهم لديهم <strong>حق النقض</strong>).
              </li>
              <li>
                <strong>10 أعضاء غير دائمين:</strong> تنتخبهم الجمعية العامة لـ{" "}
                <strong>فترات سنتين</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            15. ماذا تعني المصطلحات التالية؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>أ) أجندة 2030:</strong> خطة عمل عالمية للأمم المتحدة بـ{" "}
                <strong>17 هدفاً للتنمية المستدامة</strong> للقضاء على الفقر
                المدقع وتقليل التفاوتات وحل أزمة المناخ بحلول عام 2030.
              </li>
              <li>
                <strong>
                  ب) الهيئة الحكومية الدولية المعنية بتغير المناخ (IPCC):
                </strong>
                <strong>الهيئة العلمية</strong> للمناخ التابعة للأمم المتحدة
                التي تجمع وتقيّم أبحاث المناخ العالمية.
              </li>
              <li>
                <strong>ج) اتفاقية باريس:</strong> اتفاقية مناخية عالمية من 2015
                حيث تعهدت دول العالم بإبقاء الاحتباس الحراري أقل بكثير من 2 درجة
                مئوية، ويفضل أن يكون أقل من 1.5 درجة مئوية.
              </li>
              <li>
                <strong>
                  د) المساهمات المحددة وطنياً (NDC) / مؤتمر الأطراف (COP):
                </strong>
                <ul className={classes.list}>
                  <li>
                    <strong>مؤتمر الأطراف (COP):</strong> مؤتمر المناخ السنوي
                    للأمم المتحدة (مثل COP28).
                  </li>
                  <li>
                    <strong>المساهمات المحددة وطنياً (NDC):</strong>
                    <strong>خطط المناخ الوطنية المحددة</strong> لكل دولة وأهداف
                    الانبعاثات بموجب اتفاقية باريس.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            16. أ) ما هو الهدف الرئيسي للقانون الدولي؟ ب) من أي جزأين يتكون؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>أ) الهدف الرئيسي:</strong> تنظيم كيفية تصرف الدول تجاه
                بعضها البعض وتجاه مواطنيها لخلق نظام دولي
                <strong>مستقر وقانوني</strong>.
              </li>
              <li>
                <strong>ب) جزأين:</strong> <strong>القانون الإنساني</strong>
                (قوانين الحرب) و <strong>حقوق الإنسان</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            17. ما هي أنواع الجرائم التي يمكن للمحكمة الجنائية الدولية (ICC)
            معالجتها؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تحقق وتحاكم <strong>الأفراد</strong> على أخطر الجرائم الدولية:
              <strong>الإبادة الجماعية</strong>،{" "}
              <strong>الجرائم ضد الإنسانية</strong>،{" "}
              <strong>جرائم الحرب</strong> و<strong>جرائم العدوان</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            18. ما هي المهمة الرئيسية لمحكمة العدل الدولية (ICJ)؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الفصل في النزاعات القانونية</strong> بين الدول التي اختارت
              الخضوع لولاية المحكمة، بالإضافة إلى تقديم
              <strong>آراء استشارية</strong> في المسائل القانونية لهيئات الأمم
              المتحدة.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 8. أسئلة التحليل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. أسئلة التحليل</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. غالباً ما تواجه الأمم المتحدة صعوبة في فرض إرادتها في قضايا
            الحرب والسلام. اذكر بعض الأسباب المحتملة لذلك. ما هي عواقب صعوبة
            تحرك الأمم المتحدة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الأسباب:</strong> <strong>حق النقض (الفيتو)</strong> في
              مجلس الأمن يجعل من الممكن للقوى الكبرى (الولايات المتحدة وروسيا
              والصين وبريطانيا وفرنسا) إيقاف أي إجراء يتعارض مع مصالحها أو مصالح
              حلفائها. كما تفتقر الأمم المتحدة إلى جيش دائم خاص بها وتعتمد كلياً
              على مساهمات الدول الأعضاء بالجنود والتمويل بشكل تطوعي.
            </p>
            <p className={classes.paragraph}>
              <strong>العواقب على المدى القصير:</strong> شلل في العمل في الأزمات
              الحادة، مما يؤدي إلى إطالة أمد الحروب والتسبب في معاناة إنسانية
              كبيرة (مثل في سوريا أو أوكرانيا).
            </p>
            <p className={classes.paragraph}>
              <strong>العواقب على المدى الطويل:</strong> انخفاض الثقة في الأمم
              المتحدة كجهة فاعلة للسلام العالمي. وهذا يجعل الدول تبحث عن الأمان
              في تحالفات عسكرية (مثل الناتو) أو تعمل بشكل منفرد، مما يضعف
              القانون الدولي والتعاون متعدد الأطراف.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. ما هي العواقب الأمنية السياسية لعضوية فنلندا والسويد في الناتو
            على منطقة الشمال؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تتحد منطقة الشمال بأكملها تحت{" "}
              <strong>ضمان دفاع جماعي واحد</strong>
              (المادة 5)، مما يتيح <strong>تخطيطاً عسكرياً مشتركاً</strong>،
              وتنسيقاً للدفاع الجوي، ولوجستيات أكثر فعالية عبر الحدود. يصبح بحر
              البلطيق عملياً <strong>"بحر الناتو"</strong>، مما يعزز بشكل كبير{" "}
              <strong>الردع</strong> ضد روسيا ويسهل الدفاع عن دول البلطيق.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 9. أسئلة المناقشة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. أسئلة المناقشة</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. "إذا انجرت السويد إلى حرب، فلدينا كعضو في الناتو فرص كبيرة
            للدفاع عن أنفسنا."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> نحن مشمولون بالمادة 5 من الناتو ونحصل على
                <strong>دعم عسكري مباشر</strong> ومعدات ودعم جوي من أقوى تحالف
                عسكري في العالم.
              </li>
              <li>
                <strong>ضد:</strong> تصبح السويد أيضاً{" "}
                <strong>هدفاً أوضح</strong>
                للعدو في صراع كبير بين الناتو وروسيا، ويجب علينا إرسال قواتنا
                الخاصة للدفاع عن دول أخرى.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. "يجب أن يكون لدينا جنود يختارون المسار العسكري بناءً على
            اهتمامهم الشخصي وبالتالي جيش محترف وليس نموذج الخدمة العسكرية
            الإلزامية للرجال والنساء."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> الضباط والجنود المحترفون لديهم
                <strong>دافع أعلى</strong> وكفاءة أفضل ومتاحون بشكل أسرع للمهام
                الدولية.
              </li>
              <li>
                <strong>ضد:</strong> يفقد الدفاع <strong>جذوره الشعبية</strong>
                الواسعة، ومن الصعب جداً ومكلف توظيف عدد كافٍ من الجنود المتفرغين
                في وقت السلم.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D3. "بعد الغزو الروسي لأوكرانيا، زاد إنتاج الأسلحة والإنفاق العسكري
            في معظم الدول الأوروبية. هذا يعني أن خطر الحرب يزداد أكثر."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> <strong>حلبات التسلح</strong> تخلق شكوكاً
                ("معضلة الأمن") حيث يشعر الطرف الآخر بالتهديد ويرد بمزيد من
                التسلح، مما قد يؤدي إلى تصعيد غير مقصود.
              </li>
              <li>
                <strong>ضد:</strong> القدرة العسكرية القوية تعمل كـ
                <strong>رادع</strong> (مبدأ الردع) وتمنع الدول الاستبدادية من
                المخاطرة بالهجوم.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D4. "التدمير البيئي هو تهديد أكبر لمستقبلنا من الأسلحة النووية."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> تغير المناخ وانقراض الأنواع يحدثان
                <strong>عالمياً كل يوم</strong>، ويؤثران على جميع الناس ويهددان
                أساس توفير الغذاء والماء على المدى الطويل.
              </li>
              <li>
                <strong>ضد:</strong> يمكن للحرب النووية أن تدمر الحضارة
                الإنسانية بأكملها والنظام البيئي في{" "}
                <strong>غضون ساعات قليلة</strong> ("الشتاء النووي").
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D5. "من غير الأخلاقي أن تتاجر الدول والشركات بالأسلحة."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> تجارة الأسلحة{" "}
                <strong>تغذي الصراعات</strong>، تقتل المدنيين وتحول الموارد
                بعيداً عن الرفاهية والتعليم ومكافحة الأزمات.
              </li>
              <li>
                <strong>ضد:</strong> للدول الديمقراطية الحق بموجب القانون الدولي
                في <strong>الدفاع عن نفسها</strong> وتحتاج إلى شراء الأسلحة
                لحماية سيادتها.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D6. "عضوية السويد في الناتو قد تعني فرصاً أقل للعمل من أجل الانفراج
            ونزع السلاح والتعاون الدولي والتنمية الديمقراطية في دول أخرى."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> تفقد السويد دورها التاريخي كـ
                <strong>وسيط غير منحاز ومحايد</strong> ومن المتوقع الآن أن تتبع
                الخط المشترك للحلف.
              </li>
              <li>
                <strong>ضد:</strong> كعضو في الناتو والاتحاد الأوروبي، تتمتع
                السويد <strong>بوزن وقوة أكبر</strong> للتأثير على القرارات من
                داخل أقوى المنظمات الدولية.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D7. "الولايات المتحدة لديها نفوذ كبير جداً في السياسة العالمية. لذلك
            هناك حاجة إلى ثقل أوروبي مضاد، على سبيل المثال سياسة خارجية وأمنية
            مشتركة."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> يجب على أوروبا أن تتحمل مسؤولية
                <strong>منطقتها القريبة</strong> وألا تعتمد كلياً على دافعي
                الضرائب الأميركيين أو الرؤساء الأميركيين المتغيرين.
              </li>
              <li>
                <strong>ضد:</strong> الانقسام داخل العالم الغربي{" "}
                <strong>يضعف تماسك الديمقراطيات</strong> ضد الدول الاستبدادية
                مثل الصين وروسيا.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D8. "سيزداد التعاون الشمالي أهمية عندما تكون جميع الدول الشمالية
            الخمس أعضاء في الناتو."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> تشترك منطقة الشمال في نفس
                <strong>التحديات الجغرافية والثقافية والأمنية</strong>، مما يجعل
                التعاون الدفاعي الإقليمي فعالاً جداً.
              </li>
              <li>
                <strong>ضد:</strong> تنتقل القرارات العسكرية الأكثر أهمية إلى
                <strong>مقر الناتو في بروكسل</strong>، مما يجعل التعاون الشمالي
                البحت في الظل.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D9. "من الخطأ تماماً أن تُعتبر الصين والهند والدول الغنية بالنفط في
            الشرق الأوسط دولاً نامية في مفاوضات المناخ."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> هذه الدول هي اليوم{" "}
                <strong>اقتصادات كبيرة</strong> وتصدر انبعاثات كربونية هائلة،
                لذلك يجب أن تتحمل نفس المسؤولية الاقتصادية التي يتحملها العالم
                الغربي.
              </li>
              <li>
                <strong>ضد:</strong> العالم الغربي مسؤول عن معظم
                <strong>الانبعاثات التاريخية المتراكمة</strong> منذ الثورة
                الصناعية، ولا تزال الدول النامية لديها{" "}
                <strong>انبعاثات أقل للفرد</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D10. "الأمم المتحدة هي الهيئة الوحيدة التي يمكنها تأمين السلام
            العالمي بطريقة مستدامة."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> الأمم المتحدة هي المنظمة الوحيدة التي تضم{" "}
                <strong>جميع دول العالم</strong> كلها أعضاء ولديها قواعد عالمية
                موحدة (القانون الدولي).
              </li>
              <li>
                <strong>ضد:</strong> غالباً ما تكون الأمم المتحدة
                <strong>مشلولة</strong> بسبب حق النقض وتفتقر إلى الوسائل الخاصة
                بها لإجبار الدول على السلام إذا رفضت.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D11. "نظراً لأن سياسة المناخ العالمية تخضع للأمم المتحدة، فإنها تصبح
            مهمة جداً."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> تغير المناخ هو{" "}
                <strong>مشكلة عالمية</strong>
                تتطلب اتفاقيات عالمية (مثل اتفاقية باريس) حيث تلتزم جميع الدول
                بتخفيض انبعاثاتها.
              </li>
              <li>
                <strong>ضد:</strong> تعتمد قرارات الأمم المتحدة على
                <strong>الإجماع</strong> وغالباً ما تصبح حلولاً وسطاً مخففة دون
                عقوبات قوية على الدول التي لا تلتزم بالاتفاقيات.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D12. "من الصواب أن يتدخل الناتو ويحاول حل نزاع حيث لا تستطيع الأمم
            المتحدة أو لا تريد ذلك."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> يمنع{" "}
                <strong>الإبادة الجماعية والمعاناة الإنسانية الجسيمة</strong>{" "}
                عندما تكون الأمم المتحدة مشلولة بحق النقض.
              </li>
              <li>
                <strong>ضد:</strong> ينتهك <strong>القانون الدولي</strong> إذا
                تم دون تفويض من الأمم المتحدة، مما يقوض احترام القواعد الدولية
                ويمكن أن يُنظر إليه على أنه إمبريالية غربية.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D13. "كان ينبغي أن تجري السويد استفتاءً حول عضوية الناتو."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> مثل هذا التغيير الحاسم في السياسة الأمنية
                السويدية يتطلب <strong>تفويضاً شعبياً مباشراً</strong> ليكون
                راسخاً ديمقراطياً.
              </li>
              <li>
                <strong>ضد:</strong> تطلب الوضع الأمني{" "}
                <strong>قرارات سريعة</strong>، وغالباً ما يفتقر الجمهور إلى
                الوصول إلى المعلومات الاستخباراتية السرية المطلوبة للقرار.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D14. "يجب على الغرب (أوروبا والولايات المتحدة) التخلي عن مهمته
            التبشيرية بشأن الديمقراطية وحقوق الإنسان لأنه لم يعد يمتلك الموارد
            العسكرية أو الاقتصادية المطلوبة لتقرير أنظمة حكم الآخرين."
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مع:</strong> غالباً ما خلقت تدخلات الغرب
                <strong>زعزعة استقرار</strong> (مثل في العراق أو ليبيا) واعتبرت
                <strong>معايير مزدوجة</strong> في الجنوب العالمي.
              </li>
              <li>
                <strong>ضد:</strong> حقوق الإنسان <strong>عالمية</strong> وفقاً
                لميثاق الأمم المتحدة، وللغرب واجب أخلاقي{" "}
                <strong>لدعم الحركات الديمقراطية</strong> ضد الديكتاتوريات.
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
            <span className={classes.keyword}>أجندة 2030:</span> خطة عمل عالمية
            للأمم المتحدة بـ 17 هدفاً للتنمية المستدامة بحلول عام 2030.
          </li>
          <li>
            <span className={classes.keyword}>سفير:</span> أعلى ممثل دبلوماسي
            لدولة في دولة أخرى.
          </li>
          <li>
            <span className={classes.keyword}>ثنائي:</span> اتفاق أو مفاوضات
            تجري مباشرة بين دولتين.
          </li>
          <li>
            <span className={classes.keyword}>مؤتمر الأطراف (COP):</span> مؤتمر
            المناخ السنوي للأمم المتحدة حيث تتفاوض الدول على أهداف المناخ (مثل
            COP28).
          </li>
          <li>
            <span className={classes.keyword}>الدبلوماسية:</span> الاتصال الرسمي
            وأساليب المحادثات والمفاوضات بين الدول لحل النزاعات.
          </li>
          <li>
            <span className={classes.keyword}>الأمم المتحدة:</span> منظمة حكومية
            دولية عالمية تأسست عام 1945 لتعزيز السلام والأمن وحقوق الإنسان.
          </li>
          <li>
            <span className={classes.keyword}>القانون الدولي:</span> قواعد
            واتفاقيات تحكم كيف يمكن للدول التصرف تجاه بعضها البعض وتجاه سكانها.
          </li>
          <li>
            <span className={classes.keyword}>الجمعية العامة:</span> الهيئة
            الرئيسية للأمم المتحدة حيث لكل دولة من الدول الأعضاء الـ 193 صوت
            واحد.
          </li>
          <li>
            <span className={classes.keyword}>
              المحكمة الجنائية الدولية (ICC):
            </span>
            محكمة في لاهاي تحاكم الأفراد بتهم الإبادة الجماعية وجرائم الحرب
            والجرائم ضد الإنسانية.
          </li>
          <li>
            <span className={classes.keyword}>محكمة العدل الدولية (ICJ):</span>
            الهيئة القضائية الرئيسية للأمم المتحدة لحل النزاعات القانونية بين
            الدول.
          </li>
          <li>
            <span className={classes.keyword}>
              الهيئة الحكومية الدولية المعنية بتغير المناخ (IPCC):
            </span>{" "}
            الهيئة العلمية للمناخ التابعة للأمم المتحدة التي تجمع أبحاث المناخ
            العالمية.
          </li>
          <li>
            <span className={classes.keyword}>الإجماع:</span> شكل من أشكال اتخاذ
            القرار حيث يجب أن تكون جميع الأطراف المشاركة متوافقة تماماً (لا يوجد
            حق نقض).
          </li>
          <li>
            <span className={classes.keyword}>الدولة الأكثر رعاية:</span> مبدأ
            في منظمة التجارة العالمية يعني أن المزايا التجارية الممنوحة لدولة ما
            يجب أن تُمنح تلقائياً لجميع الدول المتعاقدة.
          </li>
          <li>
            <span className={classes.keyword}>حكومي دولي:</span> تعاون حيث تحتفظ
            الدول بسيادتها وغالباً ما تتطلب القرارات إجماعاً.
          </li>
          <li>
            <span className={classes.keyword}>متعدد الأطراف:</span> تعاون أو
            مفاوضات تشمل أكثر من دولتين في وقت واحد.
          </li>
          <li>
            <span className={classes.keyword}>الناتو:</span> تحالف دفاع عسكري
            غربي يقوم على الدفاع الجماعي بموجب المادة 5.
          </li>
          <li>
            <span className={classes.keyword}>
              المجلس الشمالي / مجلس الوزراء الشمالي:
            </span>{" "}
            هيئات للتعاون البرلماني والحكومي على التوالي بين الدول الشمالية.
          </li>
          <li>
            <span className={classes.keyword}>سياسة الحياد:</span> عدم الانحياز
            العسكري في زمن السلم بهدف الحياد في زمن الحرب.
          </li>
          <li>
            <span className={classes.keyword}>
              منظمة الأمن والتعاون في أوروبا (OSCE):
            </span>{" "}
            منظمة للأمن والتعاون في أوروبا.
          </li>
          <li>
            <span className={classes.keyword}>اتفاقية باريس:</span> اتفاقية
            مناخية عالمية من 2015 للحد من الاحتباس الحراري.
          </li>
          <li>
            <span className={classes.keyword}>مجلس الأمن:</span> أقوى هيئة في
            الأمم المتحدة تضم 15 عضواً مسؤولة عن السلم والأمن.
          </li>
          <li>
            <span className={classes.keyword}>الدفاع الشامل:</span> مصطلح شامل
            للدفاع العسكري والدفاع المدني الذي يتم تفعيله في حالات الخطر الحربي.
          </li>
          <li>
            <span className={classes.keyword}>حق النقض (الفيتو):</span> حق
            الأعضاء الخمسة الدائمين في مجلس الأمن التابع للأمم المتحدة في إيقاف
            القرار بمفردهم.
          </li>
          <li>
            <span className={classes.keyword}>
              منظمة التجارة العالمية (WTO):
            </span>
            منظمة التجارة العالمية التي تضع قواعد التجارة العالمية.
          </li>
        </ul>
      </section>
    </div>
  );
}
