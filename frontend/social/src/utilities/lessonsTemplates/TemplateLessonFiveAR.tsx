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
    direction: "rtl",
  },

  title: {
    fontSize: "32px",
    marginBottom: "8px",
    color: "#1a1a1a",
    borderBottom: "3px solid #2c6e9c",
    paddingBottom: "12px",
    textAlign: "right",
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginTop: "4px",
    marginBottom: "32px",
    textAlign: "right",
  },

  section: {
    marginBottom: "40px",
  },

  heading: {
    fontSize: "24px",
    marginBottom: "16px",
    color: "#1a3a5c",
    borderRight: "4px solid #2c6e9c",
    paddingRight: "12px",
    textAlign: "right",
  },

  subHeading: {
    fontSize: "20px",
    marginTop: "24px",
    marginBottom: "12px",
    color: "#1a3a5c",
    textAlign: "right",
  },

  paragraph: {
    marginBottom: "12px",
    textAlign: "right",
  },

  list: {
    paddingRight: "24px",
    marginBottom: "16px",
    listStyle: "none",
  },

  listItem: {
    marginBottom: "8px",
    textAlign: "right",
    paddingRight: "8px",
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
    textAlign: "right",
    backgroundColor: "#f0f4f8",
    fontWeight: "600",
    color: "#1a3a5c",
  },

  td: {
    border: "1px solid #ddd",
    padding: "12px",
    verticalAlign: "top",
    textAlign: "right",
  },

  question: {
    marginTop: "28px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    borderRight: "4px solid #2c6e9c",
  },

  questionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1a3a5c",
    marginBottom: "10px",
    textAlign: "right",
  },

  answer: {
    marginTop: "8px",
    textAlign: "right",
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

export default function TemplateLessonFiveAR() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        الفصل 5: دولة القانون والمبادئ القانونية
      </h1>
      <p className={classes.subtitle}>ملخص كامل</p>

      {/* ===== 1. دولة القانون ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. دولة القانون – المبادئ الأساسية</h2>

        <h3 className={classes.subHeading}>تعريف دولة القانون</h3>
        <ul className={classes.list}>
          <li>السويد هي دولة قانون (بالإنجليزية: rule of law)</li>
          <li>جزء أساسي من الديمقراطية الليبرالية الغربية</li>
          <li>
            تقوم على ركيزتين رئيسيتين:
            <ul className={classes.list}>
              <li>إرادة الشعب (الانتخابات الحرة)</li>
              <li>وجود دولة قانون</li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>خصائص دولة القانون</h3>
        <ul className={classes.list}>
          <li>جميع ممارسات السلطة العامة تخضع للمبادئ القانونية</li>
          <li>خاصة عندما تكون ممارسة السلطة موجهة ضد الأفراد</li>
        </ul>
      </section>

      {/* ===== 2. الجهاز القضائي ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. الجهاز القضائي</h2>

        <h3 className={classes.subHeading}>التعريف</h3>
        <ul className={classes.list}>
          <li>
            السلطات المسؤولة عن الأمن القانوني والضمان القانوني في المجتمع
          </li>
        </ul>

        <h3 className={classes.subHeading}>أهداف السياسة الجنائية</h3>
        <ul className={classes.list}>
          <li>تقليل الجريمة</li>
          <li>زيادة أمان الناس</li>
        </ul>

        <h3 className={classes.subHeading}>السلطات ضمن الجهاز القضائي</h3>
        <ul className={classes.list}>
          <li>محاكم السويد (حوالي 80 محكمة + هيئات ولجان)</li>
          <li>الشرطة – الوقاية من الجريمة والتحقيق فيها</li>
          <li>هيئة النيابة العامة</li>
          <li>هيئة السجون والإفراج المشروط</li>
          <li>مجلس منع الجريمة (Brå)</li>
          <li>هيئة ضحايا الجريمة</li>
        </ul>
      </section>

      {/* ===== 3. المحاكم في السويد ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. المحاكم في السويد</h2>

        <h3 className={classes.subHeading}>ثلاثة أنواع من المحاكم</h3>

        <h4 className={classes.subHeading}>أ. المحاكم العامة</h4>
        <ul className={classes.list}>
          <li>تفصل في قضايا القانون المدني (قضايا بين الأفراد)</li>
          <li>
            تفصل في قضايا القانون العام (قضايا بين السلطة العامة والأفراد)
          </li>
          <li>تشمل القضايا الجنائية (مثل السطو)</li>
        </ul>

        <h4 className={classes.subHeading}>ب. محاكم الإدارة</h4>
        <ul className={classes.list}>
          <li>
            تنظر في النزاعات بين الأفراد/الشركات والسلطات (مثل الضرائب أو قرارات
            الإعانة)
          </li>
          <li>
            الدرجات: محكمة الإدارة، محكمة الاستئناف الإدارية، والمحكمة الإدارية
            العليا
          </li>
        </ul>

        <h4 className={classes.subHeading}>ج. المحاكم الخاصة</h4>
        <ul className={classes.list}>
          <li>
            تنظر في مجالات قانونية محددة، مثل محكمة العمل أو محاكم العقارات
          </li>
        </ul>

        <h3 className={classes.subHeading}>المحكمة العليا</h3>
        <ul className={classes.list}>
          <li>أعلى درجة بين المحاكم العامة</li>
          <li>تتطلب إذنًا بالنظر لقبول القضية</li>
          <li>
            يُمنح إذن النظر فقط إذا كانت القضية ذات أهمية لتقييم قضايا أخرى ذات
            طابع مماثل (سابقة قضائية)
          </li>
          <li>المحكمة العامة الوحيدة في المحكمة العليا هي المحكمة العليا</li>
        </ul>
      </section>

      {/* ===== 4. الديمقراطية وتطبيق العدالة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. الديمقراطية وتطبيق العدالة</h2>

        <h3 className={classes.subHeading}>
          متطلبات الديمقراطية (بالإضافة إلى الانتخابات الحرة)
        </h3>
        <ul className={classes.list}>
          <li>انتخابات حرة</li>
          <li>حرية تكوين الرأي</li>
          <li>سلطة قضائية مستقلة</li>
        </ul>

        <h3 className={classes.subHeading}>قانون الحكم (RF 11:3)</h3>
        <p className={classes.paragraph}>
          <em>
            "لا يحق لأي سلطة، ولا حتى البرلمان، أن تقرر كيف يجب أن تحكم المحكمة
            في قضية فردية."
          </em>
        </p>

        <h3 className={classes.subHeading}>التحديات التي تواجه دولة القانون</h3>
        <ul className={classes.list}>
          <li>
            ترغب بعض الأحزاب الحكومية في أوروبا في تغيير منظور دولة القانون
          </li>
          <li>
            مثال: يريد السياسيون تعيين قضاة موالين للحكومة الحالية في القضايا
            الحساسة
          </li>
          <li>الهدف: تمرير المقترحات السياسية دون أن تعرقلها المحاكم</li>
        </ul>
      </section>

      {/* ===== 5. المبادئ القانونية الأساسية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. المبادئ القانونية الأساسية</h2>

        <h4 className={classes.subHeading}>أ. ممارسة السلطة وفقًا للقانون</h4>
        <ul className={classes.list}>
          <li>"لا عقوبة بدون قانون"</li>
          <li>يجب أن يستند قرار العقوبة إلى القانون</li>
        </ul>

        <h4 className={classes.subHeading}>ب. الحق في المحاكمة</h4>
        <ul className={classes.list}>
          <li>يجب أن يتمكن الفرد من عرض قضيته أمام المحكمة</li>
          <li>الحق في محاكمة خلال فترة معقولة</li>
          <li>محاكمة علنية</li>
          <li>محكمة محايدة</li>
        </ul>

        <h4 className={classes.subHeading}>ج. مساواة الجميع أمام القانون</h4>
        <ul className={classes.list}>
          <li>
            يجب على المحاكم والسلطات العامة معاملة الناس بالتساوي من الناحية
            القانونية
          </li>
          <li>الموضوعية والحياد</li>
        </ul>

        <h4 className={classes.subHeading}>د. حظر التشريع بأثر رجعي</h4>
        <ul className={classes.list}>
          <li>لا يجوز فرض عقوبة على فعل لم يكن إجراميًا عند ارتكابه</li>
        </ul>

        <h4 className={classes.subHeading}>هـ. عدم قابلية عزل القضاة</h4>
        <ul className={classes.list}>
          <li>لا تستطيع الحكومة عزل القضاة</li>
          <li>
            لا يمكن لأحد تحديد أو التأثير على كيفية حكم القاضي في قضية فردية
          </li>
        </ul>

        <h4 className={classes.subHeading}>
          و. "تبرئة بدلاً من الإدانة" (In dubio pro reo)
        </h4>
        <ul className={classes.list}>
          <li>لا يجب إدانة المتهم إذا كان هناك شك في ذنبه</li>
        </ul>
      </section>

      {/* ===== 6. مبادئ قانونية إضافية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. مبادئ قانونية إضافية</h2>

        <h4 className={classes.subHeading}>أ. مبدأ التناسب</h4>
        <ul className={classes.list}>
          <li>لا يجوز أن يكون الإجراء أكثر تدخلاً من اللازم</li>
          <li>يجب أن تتناسب شدة العقوبة مع خطورة الجريمة</li>
        </ul>

        <h4 className={classes.subHeading}>ب. مبدأ الذنب</h4>
        <ul className={classes.list}>
          <li>الشخص الذي ارتكب فعلاً بقصد أو بإهمال</li>
          <li>وبالتالي أظهر ذنبًا يمكن محاكمته ومعاقبته</li>
        </ul>

        <h4 className={classes.subHeading}>ج. مبدأ المعاملة المتساوية</h4>
        <ul className={classes.list}>
          <li>يجب معاملة الحالات المماثلة بشكل مماثل</li>
        </ul>

        <h4 className={classes.subHeading}>د. مبدأ الشرعية</h4>
        <ul className={classes.list}>
          <li>"تمارس السلطة العامة بموجب القوانين" (RF 1:2)</li>
          <li>يجب أن يكون لجميع القرارات أو الإجراءات سند قانوني</li>
          <li>
            ينطبق على كل من القرارات الإيجابية (مثل الإعانة المالية) والقرارات
            السلبية (مثل العقوبة)
          </li>
          <li>ضمان للأمن القانوني للفرد</li>
        </ul>

        <h3 className={classes.subHeading}>علنية المحاكمات</h3>
        <ul className={classes.list}>
          <li>المبدأ الأساسي: جميع المحاكمات في السويد علنية</li>
          <li>يمكن للجمهور عادةً حضورها كمتفرجين</li>
          <li>
            استثناء: يمكن عقد أجزاء من المحاكمة خلف أبواب مغلقة في حالات
            المعلومات الحساسة
          </li>
        </ul>
      </section>

      {/* ===== 7. الأنظمة القضائية في السويد ودول أخرى ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          7. الأنظمة القضائية في السويد ودول أخرى
        </h2>

        <h3 className={classes.subHeading}>
          المشاركة غير القانونية (خلفية تاريخية)
        </h3>
        <ul className={classes.list}>
          <li>نشأت في اليونان القديمة</li>
          <li>الفكرة: "أن يُحكم من قبل أقرانه"</li>
        </ul>

        <h4 className={classes.subHeading}>
          أ. نظام الأعضاء المنتخبين من غير القضاة (السويد)
        </h4>
        <ul className={classes.list}>
          <li>
            <strong>عضو منتخب من غير القضاة:</strong> شخص غير قانوني (ليس
            محامياً، هاوٍ)
          </li>
          <li>يحكم مع قضاة محترفين</li>
          <li>نفس صلاحية القاضي العادي</li>
          <li>يُنتخب لمدة أربع سنوات</li>
          <li>يُنتخب من بين مرشحين ترشحهم الأحزاب السياسية</li>
          <li>يسعى لتكوين تركيبة متوازنة (العمر، الجنس، المهنة)</li>
          <li>
            <strong>الميزة:</strong> ضمان أن نشاط المحكمة يتبع الضمير القانوني
            العام
          </li>
          <li>
            يمكن للأعضاء المنتخبين من غير القضاة تقديم رؤية مختلفة عن المحامين
          </li>
        </ul>

        <h4 className={classes.subHeading}>
          ب. نظام هيئة المحلفين (الولايات المتحدة وبريطانيا)
        </h4>
        <ul className={classes.list}>
          <li>هيئة المحلفين تحكم ما إذا كان المتهم مذنباً أم لا</li>
          <li>
            يجب أن تكون الأحكام بالإدانة إجماعية (ليس دائمًا أحكام البراءة)
          </li>
          <li>القاضي يحدد العقوبة</li>
          <li>
            <strong>الميزة:</strong> تضيف بعدًا أخلاقيًا
          </li>
          <li>تعكس المجتمع (مواطنون عاديون)</li>
          <li>
            تقوم بتقييم العدالة (على عكس المحاكم السويدية التي تقيم فقط ما هو
            صحيح وفقًا للقانون)
          </li>
        </ul>
      </section>

      {/* ===== 8. نظريات العقاب ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. نظريات العقاب</h2>

        <h3 className={classes.subHeading}>التعريف</h3>
        <ul className={classes.list}>
          <li>مفهوم في القانون يتعلق بأغراض العقوبات وتأثيرها</li>
        </ul>

        <h3 className={classes.subHeading}>الردع (الرؤية الحديثة)</h3>
        <p className={classes.paragraph}>يجب أن تؤثر العقوبة على سلوكنا</p>

        <h4 className={classes.subHeading}>أ. الردع العام</h4>
        <ul className={classes.list}>
          <li>يجب أن تكون العقوبة رادعة</li>
          <li>تجعل الناس في المجتمع يمتنعون عن ارتكاب الجرائم</li>
          <li>الهدف: تصبح المواقف تجاه التجريم أكثر ندرة</li>
          <li>شائع في السويد</li>
        </ul>

        <h4 className={classes.subHeading}>ب. الردع الفردي</h4>
        <ul className={classes.list}>
          <li>الهدف: تغيير سلوك المخالف الفردي</li>
          <li>
            ثلاث طرق:
            <ol className={classes.list}>
              <li>
                <strong>الردع الفردي</strong>
              </li>
              <li>
                <strong>التوقيف</strong> – منع الأفعال الإجرامية عن طريق حبس
                المجرم
              </li>
              <li>
                <strong>إعادة التأهيل</strong> – الاستثمار في الرعاية أو العلاج
              </li>
            </ol>
          </li>
        </ul>

        <h3 className={classes.subHeading}>
          الانتقام/القصاص (الرؤية القديمة، موجودة في الولايات المتحدة)
        </h3>
        <ul className={classes.list}>
          <li>"عين بعين، سن بسن" (العهد القديم)</li>
          <li>إنزال العدالة من خلال إلحاق معاناة مماثلة بالمجرم</li>
          <li>المجرم يكفر عن جريمته</li>
          <li>لا هدف مباشر سوى إنزال العدالة</li>
        </ul>
      </section>

      {/* ===== 9. الشهود المجهولون ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. الشهود المجهولون</h2>

        <h3 className={classes.subHeading}>التعريف</h3>
        <ul className={classes.list}>
          <li>شهود لا تُعرف هويتهم للمشتبه به</li>
        </ul>

        <h3 className={classes.subHeading}>الوضع الحالي في السويد</h3>
        <ul className={classes.list}>
          <li>لا يمكن للشاهد تقديم معلومات مجهولة أثناء المحاكمة</li>
        </ul>

        <h3 className={classes.subHeading}>خلفية الاقتراح</h3>
        <ul className={classes.list}>
          <li>زيادة الجماعات والشبكات الإجرامية (آخر 20 عامًا)</li>
          <li>زيادة عمليات إطلاق النار المميتة</li>
          <li>ثقافة الصمت الواسعة حول الشبكات الإجرامية</li>
          <li>انخفاض الثقة في الشرطة</li>
          <li>الخوف والإحجام عن المشاركة في العملية القضائية</li>
          <li>العنف والتهديد ضد الشهود والمجني عليهم والمبلغين</li>
        </ul>

        <h3 className={classes.subHeading}>عواقب ثقافة الصمت</h3>
        <ul className={classes.list}>
          <li>إغلاق التحقيقات الجنائية</li>
          <li>المرتكبون يفلتون من العقاب بسبب نقص الأدلة</li>
          <li>تقويض ثقة الجمهور في الجهاز القضائي</li>
          <li>تهديد للديمقراطية ودولة القانون</li>
        </ul>

        <h3 className={classes.subHeading}>الاقتراح التشريعي (نوفمبر 2023)</h3>
        <ul className={classes.list}>
          <li>
            <strong>المحقق:</strong> فريدريك ويرسال
          </li>
          <li>
            <strong>شروط الشهود المجهولين:</strong>
            <ul className={classes.list}>
              <li>الحد الأدنى لعقوبة الجريمة: سنتان سجن</li>
              <li>
                خطر ملموس على الشاهد أو العائلة للتعرض لجريمة ضد الحياة أو الصحة
                أو الحرية أو السلام
              </li>
            </ul>
          </li>
          <li>لا تعرف المحكمة ولا المحامي ولا المشتبه به هوية الشاهد</li>
        </ul>

        <h3 className={classes.subHeading}>
          الانتقادات الموجهة للشهود المجهولين
        </h3>

        <h4 className={classes.subHeading}>
          من المحكمة الأوروبية لحقوق الإنسان
        </h4>
        <ul className={classes.list}>
          <li>
            تتعلق بالمبدأ: يجب أن يتمكن المشتبه به من فحص والرد على المعلومات
            المقدمة ضده
          </li>
        </ul>

        <h4 className={classes.subHeading}>
          من ستيفان يوهانسون (قاضي في المحكمة العليا)
        </h4>
        <ul className={classes.list}>
          <li>الشهود المجهولون لن يكسروا ثقافة الصمت</li>
          <li>ليس حلاً لمشاكل عمليات إطلاق النار والتفجيرات</li>
          <li>لا يمكن استخدامه إلا في "حالات قليلة جداً"</li>
          <li>قيمة إثباتية منخفضة</li>
          <li>يخاطر بإيهام الشهود بثقة زائفة</li>
          <li>
            المبدأ: للمتهم الحق في الاطلاع على المعلومات التي تشكل أساس الاتهام
          </li>
          <li>
            لا يمكن للمتهم معرفة ما إذا كان الشاهد لديه:
            <ul className={classes.list}>
              <li>أجندة شخصية</li>
              <li>عداوة تجاه المتهم</li>
              <li>ظروف أخرى تؤثر على المصداقية</li>
            </ul>
          </li>
        </ul>

        <h4 className={classes.subHeading}>من المحقق ويرسال</h4>
        <ul className={classes.list}>
          <li>
            واقع الجريمة التي يصعب السيطرة عليها يفرض الانحراف عن المبادئ
            العادية
          </li>
          <li>خطر أكبر إذا أفلت المجرمون الخطيرون من العقاب</li>
        </ul>

        <h3 className={classes.subHeading}>مزايا الشهود المجهولين</h3>
        <ul className={classes.list}>
          <li>يمكن للشهود الشعور بالأمان في تقديم المعلومات</li>
          <li>كسر ثقافة الصمت</li>
          <li>زيادة الملاحقات القضائية</li>
          <li>يمكن للجهاز القضائي تقديم الحماية</li>
        </ul>

        <h3 className={classes.subHeading}>عيوب الشهود المجهولين</h3>
        <ul className={classes.list}>
          <li>ينتهك حق المتهم في الرد على الأدلة</li>
          <li>خطر الشهادات الكاذبة</li>
          <li>قيمة إثباتية منخفضة</li>
          <li>يمكن أن يخلق أمانًا زائفًا للشهود</li>
          <li>يقوض المبادئ القانونية الأساسية</li>
        </ul>
      </section>

      {/* ===== 10. قائمة المصطلحات ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          10. قائمة المصطلحات – المفاهيم الأساسية
        </h2>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>المصطلح</th>
                <th className={classes.th}>الشرح</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>دولة القانون</strong>
                </td>
                <td className={classes.td}>
                  دولة تخضع فيها جميع ممارسات السلطة العامة للمبادئ القانونية
                  (rule of law)
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>المحاكم العامة</strong>
                </td>
                <td className={classes.td}>
                  تفصل في القضايا المدنية وقضايا القانون العام، بما في ذلك
                  القضايا الجنائية
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>القانون المدني</strong>
                </td>
                <td className={classes.td}>قضايا بين الأفراد</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>القانون العام</strong>
                </td>
                <td className={classes.td}>قضايا بين السلطة العامة والأفراد</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>القضايا الجنائية</strong>
                </td>
                <td className={classes.td}>قضايا تتعلق بجرائم ارتكبت</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>عضو منتخب من غير القضاة</strong>
                </td>
                <td className={classes.td}>
                  شخص غير قانوني (ليس محامياً) يحكم مع قضاة محترفين
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>هيئة المحلفين</strong>
                </td>
                <td className={classes.td}>
                  مجموعة من غير القانونيين تحدد الذنب في القضايا الجنائية
                  (الولايات المتحدة/بريطانيا)
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الردع العام</strong>
                </td>
                <td className={classes.td}>
                  العقوبة يجب أن تردع العامة عن الجريمة
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الردع الفردي</strong>
                </td>
                <td className={classes.td}>
                  العقوبة يجب أن تغير سلوك المجرم الفردي
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>التوقيف</strong>
                </td>
                <td className={classes.td}>منع الجريمة عن طريق حبس المجرم</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>إعادة التأهيل</strong>
                </td>
                <td className={classes.td}>رعاية/علاج المجرم</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>إذن النظر</strong>
                </td>
                <td className={classes.td}>إذن لقبول قضية في درجة أعلى</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>السابقة القضائية</strong>
                </td>
                <td className={classes.td}>حكم يكون مرشدًا لقضايا مماثلة</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>مبدأ التناسب</strong>
                </td>
                <td className={classes.td}>
                  لا يجوز أن يكون الإجراء أكثر تدخلاً من اللازم
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>مبدأ الذنب</strong>
                </td>
                <td className={classes.td}>العقوبة تتطلب القصد أو الإهمال</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>مبدأ الشرعية</strong>
                </td>
                <td className={classes.td}>
                  جميع ممارسات السلطة العامة يجب أن يكون لها سند قانوني
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>التشريع بأثر رجعي</strong>
                </td>
                <td className={classes.td}>قانون يسري بأثر رجعي (محظور)</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>In dubio pro reo</strong>
                </td>
                <td className={classes.td}>
                  "تبرئة بدلاً من الإدانة" – الشك يجب أن يعود بالنفع على المتهم
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>المشاركة غير القانونية</strong>
                </td>
                <td className={classes.td}>
                  نظام يشارك فيه غير القانونيين في الحكم
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الشهود المجهولون</strong>
                </td>
                <td className={classes.td}>شهود تُخفى هويتهم عن المشتبه به</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>ثقافة الصمت</strong>
                </td>
                <td className={classes.td}>
                  أن الشهود لا يجرؤون على تقديم معلومات خوفًا
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== الأسئلة والأجوبة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>الأسئلة والأجوبة</h2>

        {/* سؤال 1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            1. توصف السويد غالبًا بأنها دولة قانون. ماذا يعني ذلك؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يعني ذلك أن جميع السلطات العامة تمارس بموجب القوانين. يسن
              السياسيون القوانين بينما تطبقها المحاكم والسلطات المستقلة.
              المواطنون محميون من تجاوزات الدولة، والجميع متساوون أمام القانون،
              ولا يمكن معاقبة أي شخص دون سند قانوني.
            </p>
          </div>
        </div>

        {/* سؤال 2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. ما المقصود بالجهاز القضائي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              السلطات المسؤولة عن الأمن القانوني والضمان القانوني في المجتمع.
              ويشمل ذلك الشرطة، هيئة النيابة العامة، محاكم السويد، هيئة السجون
              والإفراج المشروط، مجلس منع الجريمة (Brå) وهيئة ضحايا الجريمة.
            </p>
          </div>
        </div>

        {/* سؤال 3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. ما هي المحاكم الموجودة وما الفرق بينها؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>المحاكم العامة:</strong> تنظر في القانون المدني (قضايا
                نزاعية بين الأفراد) والقانون العام (القضايا الجنائية). الدرجات:
                محكمة الدرجة الأولى، محكمة الاستئناف والمحكمة العليا.
              </li>
              <li>
                <strong>محاكم الإدارة:</strong> تنظر في النزاعات بين
                الأفراد/الشركات والسلطات (مثل الضرائب أو قرارات الإعانة).
                الدرجات: محكمة الإدارة، محكمة الاستئناف الإدارية والمحكمة
                الإدارية العليا.
              </li>
              <li>
                <strong>المحاكم الخاصة:</strong> تنظر في مجالات قانونية محددة،
                مثل محكمة العمل أو محاكم العقارات.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. ما المقصود بالضمير القانوني العام؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تصور العامة (المواطن العادي) لما يجب أن يكون إجرامياً ومدى شدة
              العقوبات. يتغير بمرور الوقت ويؤثر على التشريع.
            </p>
          </div>
        </div>

        {/* سؤال 5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            5. اذكر بعض المبادئ الأساسية لدولة القانون.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مبدأ الشرعية:</strong> لا عقوبة بدون قانون وجميع ممارسات
                السلطة يجب أن يكون لها سند قانوني.
              </li>
              <li>
                <strong>حظر التشريع بأثر رجعي:</strong> لا يمكن معاقبة شخص على
                شيء لم يكن غير قانوني عند ارتكابه.
              </li>
              <li>
                <strong>مساواة الجميع أمام القانون:</strong> يجب على المحاكم
                والسلطات معاملة الجميع بحياد ومساواة.
              </li>
              <li>
                <strong>In dubio pro reo:</strong> "تبرئة بدلاً من الإدانة" –
                إذا كان هناك شك في الذنب، يجب تبرئة المشتبه به.
              </li>
              <li>
                <strong>مبدأ التناسب:</strong> لا يجوز أن يكون الإجراء أو
                العقوبة أكثر تدخلاً من اللازم.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. ما الفرق بين نظام الأعضاء المنتخبين من غير القضاة ونظام هيئة
            المحلفين؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              في <strong>نظام الأعضاء المنتخبين من غير القضاة</strong> السويدي،
              يحكم غير القانونيين (الأعضاء المنتخبين) مع قضاة محترفين ولهم نفس
              الصلاحية. في <strong>نظام هيئة المحلفين</strong> (كما في الولايات
              المتحدة)، تحدد هيئة المحلفين من غير القانونيين وحدها ما إذا كان
              المتهم مذنباً أم لا، ثم يحدد القاضي العقوبة. تقوم هيئة المحلفين
              بتقييم أكثر أخلاقية وعدالة.
            </p>
          </div>
        </div>

        {/* سؤال 7 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. ما الفرق بين الردع العام والردع الفردي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الردع العام</strong> يتعلق بأن تكون العقوبة رادعة للسكان
              بشكل عام حتى يمتنع الناس عن ارتكاب الجرائم.{" "}
              <strong>الردع الفردي</strong> يركز على منع المخالف الفردي من
              ارتكاب جرائم جديدة (من خلال الردع أو إعادة التأهيل/العلاج أو
              التوقيف).
            </p>
          </div>
        </div>
      </section>

      {/* ===== أسئلة التحليل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>أسئلة التحليل</h2>

        {/* سؤال 8 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>8. ما المقصود بالتوقيف؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              منع شخص من ارتكاب جرائم جديدة عن طريق إزالة الإمكانية جسدياً،
              غالباً من خلال سجن الشخص.
            </p>
          </div>
        </div>

        {/* سؤال 9 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>9. ما هو دور مجلس القانون؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              مجلس القانون الذي يتكون من قضاة من المحكمة العليا والمحكمة
              الإدارية العليا يراجع مقترحات الحكومة التشريعية قبل أن تصبح
              قوانين. يتحققون من أن القوانين لا تتعارض مع القوانين الأساسية أو
              الاتفاقية الأوروبية لحقوق الإنسان أو تخلق مشاكل تطبيق قانونية.
            </p>
          </div>
        </div>

        {/* سؤال 10 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. اذكر بعض الأنواع المختلفة للشبكات الإجرامية.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الشبكات الإجرامية المحلية (غالباً مرتبطة بتجارة المخدرات ومنطقة
              جغرافية)، التطرف العنيف (اليمين المتطرف، اليسار المستقل، التطرف
              الإسلامي)، بالإضافة إلى الفاعلين الإجراميين البارزين الذين يستغلون
              الهياكل التجارية القانونية والمتخصصين.
            </p>
          </div>
        </div>

        {/* سؤال 11 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. أعط أمثلة على بعض العوامل التي قد تساهم في وقوع الشباب في
            الجريمة.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تعاطي الكحول والمخدرات، العلاقات الإشكالية مع الأصدقاء، ضعف الأداء
              المدرسي، فرط النشاط/الاندفاعية/صعوبات التركيز، بالإضافة إلى صعوبات
              الوالدين أو نقص مشاركتهم.
            </p>
          </div>
        </div>

        {/* سؤال 12 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. ما المقصود بجرائم الرفاهية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              عندما يستغل فاعلون خارجيون (شركات أو أفراد) الأموال العامة/أموال
              الضرائب ويستولون عليها بشكل غير قانوني لتحقيق مكاسب شخصية. يمكن أن
              يشمل ذلك الاحتيال في الإعانات مثل تعويض المرض أو تعويض المساعدة،
              مراكز اختبار وهمية، أو مجرمين يديرون مراكز الرعاية الصحية ودور
              الرعاية والصيدليات.
            </p>
          </div>
        </div>

        {/* سؤال 13 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. يُستخدم أحياناً مصطلح "متعدد الجرائم" عن المجرمين الاقتصاديين.
            ما المقصود بذلك؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يعني أن نفس الأشخاص/المجرمين يرتكبون عدة أنواع مختلفة تماماً من
              الجرائم. على سبيل المثال، أن الأشخاص الذين ينفذون عمليات إطلاق نار
              وجرائم مخدرات يمارسون في نفس الوقت الاحتيال الاقتصادي وغسيل
              الأموال لإعادة الاستثمار في الأسلحة والمخدرات.
            </p>
          </div>
        </div>
      </section>

      {/* ===== إضافي: القانون المدني مقابل القانون العام ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          الفرق بين القانون المدني والقانون العام
        </h2>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>المعيار</th>
                <th className={classes.th}>القانون المدني</th>
                <th className={classes.th}>القانون العام</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>الأطراف</strong>
                </td>
                <td className={classes.td}>فرد–فرد، فرد–شركة، شركة–شركة</td>
                <td className={classes.td}>
                  الدولة/السلطات–المواطن أو الدولة–دول أخرى
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>طبيعة العلاقة</strong>
                </td>
                <td className={classes.td}>أطراف متكافئة</td>
                <td className={classes.td}>
                  أطراف غير متكافئة (السلطة لها مركز أعلى)
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>أمثلة</strong>
                </td>
                <td className={classes.td}>
                  قانون العقود، قانون البيع، التعويضات، قانون الأسرة (الحضانة)
                </td>
                <td className={classes.td}>
                  القانون الجنائي، قانون الضرائب، القانون الإداري، القانون
                  الدستوري
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>من يبدأ الدعوى</strong>
                </td>
                <td className={classes.td}>
                  الطرف الخاص (المدعي) يقاضي الطرف الآخر (المدعى عليه)
                </td>
                <td className={classes.td}>
                  الدولة من خلال النيابة العامة (في الجرائم) أو سلطة من خلال
                  قرار/تدقيق
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>نوع القضية</strong>
                </td>
                <td className={classes.td}>قضايا نزاعية (قضايا مدنية)</td>
                <td className={classes.td}>
                  قضايا جنائية (في القانون الجنائي) أو قضايا إدارية
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>طبيعة التشريع</strong>
                </td>
                <td className={classes.td}>
                  غالباً اختياري (القوانين تنطبق إذا لم يتفق الطرفان على خلاف
                  ذلك)
                </td>
                <td className={classes.td}>
                  غالباً إلزامي (لا يمكن للأفراد الاتفاق على خلافه)
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الهدف</strong>
                </td>
                <td className={classes.td}>
                  حل نزاع اقتصادي أو شخصي واستعادة التوازن بين طرفين
                </td>
                <td className={classes.td}>
                  الحفاظ على النظام العام، حماية المجتمع أو ضمان الأمن القانوني
                  ضد تجاوزات الدولة
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.subHeading}>
          القواعد الاختيارية مقابل القواعد الإلزامية
        </h3>
        <ul className={classes.list}>
          <li>
            <strong>القانون المدني:</strong> العديد من القوانين اختيارية. وهذا
            يعني أن الأطراف لديهم حرية التعاقد ويمكنهم الاتفاق على شروط تختلف عن
            القانون. مثال: عند بيع سيارة مستعملة بين فردين، يمكن للمشتري والبائع
            الاتفاق على بيع السيارة بدون ضمان أو بحالتها الراهنة.
          </li>
          <li>
            <strong>القانون العام:</strong> القواعد القانونية إلزامية دائماً
            تقريباً. لا يمكن للمواطن الاتفاق مع الدولة على عدم دفع الضرائب أو أن
            فعلاً معيناً لا يعتبر جريمة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>حالات حدودية وتداخلات</h3>
        <p className={classes.paragraph}>
          <strong>حادث مروري:</strong> إذا صدم الشخص A الشخص B، يمكن أن يؤدي ذلك
          إلى إجراءات في كلا المجالين القانونيين:
        </p>
        <ul className={classes.list}>
          <li>
            <strong>القانون العام (القانون الجنائي):</strong> يمكن للدولة
            (النيابة العامة) رفع دعوى ضد الشخص A بتهمة الإهمال في المرور في
            المحكمة العامة.
          </li>
          <li>
            <strong>القانون المدني (قانون التعويضات):</strong> يمكن للشخص B
            المطالبة بالتعويض من الشخص A (أو شركة التأمين الخاصة به) عن تكاليف
            الإصلاح والإصابات الجسدية.
          </li>
        </ul>
      </section>
    </div>
  );
}
