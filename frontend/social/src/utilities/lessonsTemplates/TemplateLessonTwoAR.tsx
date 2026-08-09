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

export default function TemplateLessonTwoAR() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>ملخص – الفصلين 1 و 2</h1>
      <p className={classes.subtitle}>الدراسات الاجتماعية 1b</p>

      {/* ===== الفصل 1 ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>الفصل 1: دراسة الدراسات الاجتماعية</h2>

        {/* 1.1 */}
        <h3 className={classes.subHeading}>1.1 ما هو المجتمع؟</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            المجتمع هو مجموعة من الأشخاص يعيشون معًا بطريقة منظمة.
          </li>
          <li className={classes.listItem}>
            نحن ننتمي إلى عدة تكوينات مجتمعية في نفس الوقت:
            <ul className={classes.list}>
              <li>العائلة – مجتمع مصغر</li>
              <li>المجتمع المحلي – بلديتك</li>
              <li>الأمة – السويد</li>
              <li>سياقات أوسع – الشمال الأوروبي وأوروبا والعالم</li>
            </ul>
          </li>
        </ul>

        {/* 1.2 */}
        <h3 className={classes.subHeading}>
          1.2 العلوم الاجتماعية والمادة الدراسية
        </h3>
        <ul className={classes.list}>
          <li>
            <strong>العلوم السياسية</strong> – تدرس السياسة والسلطة
          </li>
          <li>
            <strong>علم الاجتماع</strong> – يدرس الهياكل الاجتماعية والعلاقات
          </li>
          <li>
            <strong>الاقتصاد الوطني</strong> – يدرس الاقتصاد وتوزيع الموارد
          </li>
        </ul>
        <p className={classes.paragraph}>
          الهدف من الدراسات العلمية هو الوصول إلى الحقيقة – معرفة جديدة عن
          الواقع.
        </p>
        <p className={classes.paragraph}>
          تشكل العلوم الاجتماعية أساس مادة الدراسات الاجتماعية.
        </p>

        <h4 className={classes.subHeading}>
          وثائق التوجيه من الهيئة الوطنية للتعليم
        </h4>
        <ul className={classes.list}>
          <li>
            <strong>الخطة الدراسية</strong> – الهدف العام
          </li>
          <li>
            <strong>المحتوى المركزي</strong> – ما يجب تعلمه في كل مستوى
          </li>
          <li>
            <strong>معايير التقييم</strong> – ما هو مطلوب للحصول على درجات
            مختلفة
          </li>
        </ul>

        <h4 className={classes.subHeading}>التدرج في المادة</h4>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>المستوى</th>
                <th className={classes.th}>المحتوى</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>1b</td>
                <td className={classes.td}>
                  الديمقراطية كفكرة مجتمعية، الدوافع الديمقراطية المجتمعية،
                  الحماية من الأنظمة الاستبدادية والشمولية. الدفاع الشامل
                  للسويد.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>2</td>
                <td className={classes.td}>
                  السياسة المقارنة، الأنظمة السياسية والمبادئ القانونية في مختلف
                  البلدان فيما يتعلق بحقوق الإنسان ووسائل الإعلام.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>3</td>
                <td className={classes.td}>
                  السياسة الدولية، القانون الدولي، أنظمة السلام والأمن، النزاعات
                  والحروب وإدارة النزاعات.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 1.3 */}
        <h3 className={classes.subHeading}>
          1.3 القدرات في الدراسات الاجتماعية
        </h3>
        <p className={classes.paragraph}>يجب أن يطور التعليم القدرة على:</p>
        <ol className={classes.list}>
          <li>
            تحليل ومناقشة القضايا الاجتماعية باستخدام المفاهيم والنظريات ونماذج
            التحليل والأساليب ذات الصلة.
          </li>
          <li>
            البحث عن المعلومات من المصادر ومراجعتها بشكل نقدي وتفسيرها
            واستخدامها.
          </li>
        </ol>

        {/* 1.4 */}
        <h3 className={classes.subHeading}>1.4 كيفية دراسة قضية اجتماعية</h3>
        <p className={classes.paragraph}>
          <strong>مثال:</strong> الجريمة المنظمة في السويد.
        </p>

        <h4 className={classes.subHeading}>
          الخطوة 1: صياغة المشكلة والهدف والأسئلة
        </h4>
        <ul className={classes.list}>
          <li>
            <strong>الهدف:</strong> ماذا تريد تحقيق؟ مثال: "تسليط الضوء على
            الجريمة المنظمة في السويد".
          </li>
          <li>
            <strong>أسئلة البحث:</strong> أسئلة واضحة ومحددة وموجهة.
          </li>
          <li>
            <strong>التحديدات:</strong>
            <ul className={classes.list}>
              <li>الفترة الزمنية (مثل السنوات 5-10 الماضية)</li>
              <li>المنطقة الجغرافية (مثل بلديتك مقارنة بمدينة كبيرة)</li>
              <li>تعريف المفهوم: ماذا تقصد بـ "الجريمة المنظمة"؟</li>
              <li>الفئة العمرية (مثل 12-15 سنة، 15-18 سنة)</li>
            </ul>
          </li>
        </ul>

        <h4 className={classes.subHeading}>الخطوة 2: اختيار المنهج والمواد</h4>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>المنهج</th>
                <th className={classes.th}>الوصف</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>المنهج النوعي</strong>
                </td>
                <td className={classes.td}>
                  التفسير والفهم. مثال: المقابلات، الملاحظات.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>المنهج الكمي</strong>
                </td>
                <td className={classes.td}>
                  بيانات قابلة للقياس بالأرقام. مثال: الاستبيانات، الإحصاءات.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className={classes.subHeading}>المواد</h4>
        <ul className={classes.list}>
          <li>الأدبيات في الموضوع</li>
          <li>الإحصاءات (مثل من مجلس مكافحة الجريمة – BRÅ)</li>
          <li>المقابلات</li>
          <li>الاستبيانات</li>
        </ul>

        <h4 className={classes.subHeading}>الخطوة 3: تحليل القضية</h4>
        <p className={classes.paragraph}>
          التحليل يعني "تقليب" المشكلة من جميع الجوانب. يمكن أن يعني:
        </p>
        <ul className={classes.list}>
          <li>دراسة الأسباب والعواقب</li>
          <li>اقتراح الحلول/الإجراءات</li>
          <li>النظر إلى القضية من منظور قصير أو طويل المدى</li>
          <li>النظر إلى المشكلة من وجهات نظر مختلفة</li>
        </ul>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>المنظور</th>
                <th className={classes.th}>التركيز</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>اقتصادي</td>
                <td className={classes.td}>تكاليف مثل عمليات القتل بالرصاص</td>
              </tr>
              <tr>
                <td className={classes.td}>قانوني</td>
                <td className={classes.td}>
                  ما يقوله القانون وما إذا كان قد تغير
                </td>
              </tr>
              <tr>
                <td className={classes.td}>اجتماعي</td>
                <td className={classes.td}>
                  الظروف الاجتماعية في المناطق السكنية
                </td>
              </tr>
              <tr>
                <td className={classes.td}>منظور الفرد</td>
                <td className={classes.td}>ماذا تعني الجريمة للجاني</td>
              </tr>
              <tr>
                <td className={classes.td}>منظور المجتمع</td>
                <td className={classes.td}>
                  ما يمكن للمجتمع فعله لمنع الجريمة
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 1.5 */}
        <h3 className={classes.subHeading}>1.5 أساليب جمع البيانات</h3>

        <h4 className={classes.subHeading}>المقابلة</h4>
        <ul className={classes.list}>
          <li>
            <strong>مقابلة شبه منظمة:</strong> محادثة مع بعض الأسئلة المحددة
            وأسئلة متابعة مفتوحة. أكثر غير رسمية.
          </li>
          <li>
            <strong>مقابلة منظمة:</strong> أسئلة محددة مع خيارات إجابة محددة.
          </li>
        </ul>
        <p className={classes.paragraph}>
          <em>مثال على سؤال افتتاحي:</em> "كيف تعمل كسياسي بلدي ضد الجريمة
          المنظمة في بلديتنا؟"
        </p>

        <h4 className={classes.subHeading}>الاستبيان</h4>
        <ul className={classes.list}>
          <li>استمارة أسئلة موحدة تقدم للعديد من الأشخاص في نفس الوقت.</li>
          <li>يجب أن تكون الأسئلة قصيرة ودقيقة مع خيارات إجابة واضحة.</li>
          <li>يمكن دمجها مع خيارات إجابة مفتوحة (نص حر).</li>
          <li>
            <strong>الانقطاع</strong> = عندما لا تحصل على إجابات من الجميع.
            الانقطاع الكبير يقلل من قيمة الاستبيان.
          </li>
        </ul>

        <h4 className={classes.subHeading}>الملاحظة</h4>
        <p className={classes.paragraph}>
          تستخدم لدراسة السلوكيات في المجموعات الاجتماعية. مثال: مراقبة التنمر
          في ساحة المدرسة.
        </p>

        {/* 1.6 */}
        <h3 className={classes.subHeading}>
          1.6 القضايا الأخلاقية (إرشادات مجلس البحوث)
        </h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>المتطلب</th>
                <th className={classes.th}>المعنى</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>متطلب الإعلام</strong>
                </td>
                <td className={classes.td}>
                  يجب إعلام المشاركين بهدف الدراسة قبل المشاركة.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>متطلب الموافقة</strong>
                </td>
                <td className={classes.td}>
                  يجب أن يوافق المشاركون ("موافقة مطلعة").
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>متطلب السرية</strong>
                </td>
                <td className={classes.td}>
                  يجب معالجة المواد بحيث يظل المشاركون مجهولي الهوية. مثال:
                  تسمية المعلمين بـ "معلم في مقاطعة 3". غالبًا ما يتم حذف المواد
                  بعد المشروع.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>متطلب الاستخدام</strong>
                </td>
                <td className={classes.td}>
                  لا يجوز استخدام المواد إلا للغرض المحدد وليس لدراسات أخرى.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 1.7 */}
        <h3 className={classes.subHeading}>1.7 نقد المصادر</h3>
        <ul className={classes.list}>
          <li>نقد المصادر يعني مراجعة جميع المواد التي تستخدمها بشكل نقدي.</li>
          <li>
            <strong>المصادر المكتوبة:</strong> الكتب، الصحف، المجلات، الرسائل،
            الملاحظات.
          </li>
          <li>
            <strong>تحليل الصور:</strong> يجب أيضًا تحليل الصور.
            <ul className={classes.list}>
              <li>ما هو الشعور الذي تهدف الصورة إلى إيصاله؟</li>
              <li>ما هو الهدف من نشر الصورة؟</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ===== الفصل 2 ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>الفصل 2: الفرد والهوية</h2>

        {/* 2.1 */}
        <h3 className={classes.subHeading}>2.1 الهوية – مقدمة</h3>
        <p className={classes.paragraph}>
          يتناول الفصل كيف تتأثر هويتنا وظروف حياتنا بالمجموعات الاجتماعية التي
          ننتمي إليها.
        </p>

        <div className={classes.question}>
          <p className={classes.paragraph}>
            <strong>مثال: مريم</strong>
          </p>
          <p className={classes.paragraph}>
            عمرها 21 عامًا، تدرس القانون في جامعة أوميو. الجنسية: سويدية (ولدت
            في السويد). العرقية: صومالية (كلا الوالدين من الصومال). الثقافة:
            تتحدث الصومالية في المنزل، تأكل الطعام الصومالي، تحتفل بالأعياد
            الصومالية – وفي نفس الوقت الثقافة السويدية من المدرسة والأصدقاء.
            رحلة طبقية: كان الوالدان من الطبقة العليا في الصومال لكنهما فقدا كل
            شيء في الحرب الأهلية. في السويد، عملا في وظائف بسيطة وغيرا طبقتهم
            الاجتماعية. الجنس والدين: تواجه أحكامًا مسبقة كامرأة مسلمة محجبة.
            مزيج الجنس والدين والعرق يجعلها تضاعف جهدها.
          </p>
        </div>

        {/* 2.2 */}
        <h3 className={classes.subHeading}>2.2 الأعراف</h3>
        <ul className={classes.list}>
          <li>
            <strong>الأعراف</strong> = قواعد غير مكتوبة لكيفية توقعنا أن نكون
            ونتصرف.
          </li>
          <li>
            <strong>الأعراف الوظيفية:</strong> تساعد المجتمع على العمل (مثل عدم
            التزاحم في الطابور).
          </li>
          <li>
            <strong>الأعراف الإشكالية:</strong> يمكن أن تكون مقيدة وغير عادلة.
          </li>
        </ul>

        {/* 2.3 */}
        <h3 className={classes.subHeading}>2.3 الجندر</h3>
        <ul className={classes.list}>
          <li>
            <strong>الجندر</strong> = الجنس المُبني اجتماعيًا (على عكس الجنس
            البيولوجي).
          </li>
          <li>
            <strong>الاستيعاب الداخلي</strong> = العملية التي يدمج بها الإنسان
            أعراف المجتمع ويجعلها جزءًا من شخصيته.
            <ul className={classes.list}>
              <li>
                مثال: تشعر المرأة بـ"أنوثتها" عندما ترتدي فستانًا أو تخبز الكعك.
                يشعر الرجل بـ"رجولته" عندما يدفع الفاتورة في المطعم أو يلعب كرة
                القدم.
              </li>
            </ul>
          </li>
        </ul>

        <h4 className={classes.subHeading}>نظام الجندر (إيفون هيردمان)</h4>
        <p className={classes.paragraph}>
          نظام قوة ينظم العلاقة بين الجنسين. يقوم على مبدأين:
        </p>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>المبدأ</th>
                <th className={classes.th}>المعنى</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>الفصل</strong>
                </td>
                <td className={classes.td}>
                  ينظر إلى الرجال والنساء كأضداد لبعضهم البعض. أعراف كيفية تصرف
                  الرجال والنساء مختلفة تمامًا.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>التفوق الذكوري</strong>
                </td>
                <td className={classes.td}>
                  ما يُنظر إليه على أنه ذكوري يُقيَّم أعلى مما يُنظر إليه على
                  أنه أنثوي.
                  <br />
                  <em>مثال:</em> يكسب التقني أكثر من معلم الروضة، رغم نفس مدة
                  التعليم.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className={classes.list}>
          <li>
            <strong>النظام الهيكلي للسلطة</strong> = السلطة على مستوى المجموعة.
            الرجال كمجموعة متفوقون على النساء كمجموعة. هذا لا يعني أن كل رجل
            لديه سلطة على كل امرأة.
          </li>
        </ul>

        {/* 2.4 */}
        <h3 className={classes.subHeading}>2.4 الجندر والجنسانية</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>السنة</th>
                <th className={classes.th}>الحدث</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>1944</td>
                <td className={classes.td}>
                  إلغاء القانون الذي كان يحظر الأفعال المثلية.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>1950s</td>
                <td className={classes.td}>
                  تأسيس RFSL (الاتحاد الوطني للمساواة الجنسية).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>1979</td>
                <td className={classes.td}>
                  إزالة المثلية الجنسية من سجل الأمراض لهيئة الصحة العامة.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={classes.paragraph}>
          <strong>اليوم:</strong>
        </p>
        <ul className={classes.list}>
          <li>يمكن للأزواج المثليين تبني الأطفال والزواج في الكنيسة.</li>
          <li>التمييز على أساس التوجه الجنسي محظور.</li>
        </ul>

        <p className={classes.paragraph}>
          <strong>المعيارية المغايرة</strong> = المعيار الذي يتوقع أن يشكل الناس
          أزواجًا وعائلات مع أشخاص من الجنس الآخر. من يخالف المعيار المغاير
          يخاطر بأن يُنظر إليه على أنه منحرف.
        </p>

        <h4 className={classes.subHeading}>مجتمع الميم عين</h4>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>الحرف</th>
                <th className={classes.th}>المعنى</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>م</td>
                <td className={classes.td}>مثليون جنسياً</td>
              </tr>
              <tr>
                <td className={classes.td}>ي</td>
                <td className={classes.td}>مثليات جنسياً</td>
              </tr>
              <tr>
                <td className={classes.td}>ع</td>
                <td className={classes.td}>مزدوجو الميول الجنسية</td>
              </tr>
              <tr>
                <td className={classes.td}>ن</td>
                <td className={classes.td}>متحولون جنسياً</td>
              </tr>
              <tr>
                <td className={classes.td}>كيو</td>
                <td className={classes.td}>
                  كوير (أشخاص ذوو تعبيرات وهويات كويرية)
                </td>
              </tr>
              <tr>
                <td className={classes.td}>إنتر</td>
                <td className={classes.td}>أشخاص بين الجنسين</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className={classes.list}>
          <li>
            <strong>كوير</strong> = مصطلح كان يعني في الأصل "غريب" أو "عجيب"
            واستخدم كشتيمة. استعاد الناشطون المصطلح لتحدي المعايير.
          </li>
          <li>
            <strong>برايد</strong> = الفخر. الهدف هو الاحتفال بالهوية الذاتية
            وتنوع التعبيرات الجنسية كشيء إيجابي.
          </li>
        </ul>

        {/* 2.5 */}
        <h3 className={classes.subHeading}>2.5 المساواة بين الجنسين</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>المصطلح</th>
                <th className={classes.th}>المعنى</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>المساواة</strong>
                </td>
                <td className={classes.td}>
                  جميع الناس متساوون في القيمة ولهم نفس الحقوق القانونية.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>المساواة بين الجنسين</strong>
                </td>
                <td className={classes.td}>
                  المساواة بين الجنسين. للرجال والنساء نفس الحقوق والفرص
                  والواجبات.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>النسوية</strong>
                </td>
                <td className={classes.td}>
                  النضال من أجل المساواة بين الجنسين.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className={classes.subHeading}>سوق العمل</h4>
        <ul className={classes.list}>
          <li>
            <strong>الفصل الأفقي بين الجنسين:</strong> يعمل الرجال والنساء في
            مهن وقطاعات مختلفة.
            <ul className={classes.list}>
              <li>
                مثال: تهيمن النساء على الرعاية الصحية والاجتماعية. يهيمن الرجال
                على الصناعة والبناء.
              </li>
              <li>
                فقط 4 من أكبر 30 مهنة في السويد لها توزيع متوازن بين الجنسين
                (40-60٪).
              </li>
            </ul>
          </li>
          <li>
            <strong>الفصل العمودي بين الجنسين:</strong> عدد أقل من النساء في
            المناصب العليا. يشغل الرجال مناصب سلطة أكثر.
          </li>
          <li>
            <strong>التمييز القيمي:</strong> المهن التي تهيمن عليها النساء لها
            رواتب أقل من المهن التي يهيمن عليها الرجال مع نفس مستوى التعليم.
            <ul className={classes.list}>
              <li>
                مثال: يكسب أخصائي تكنولوجيا المعلومات حوالي 6000 كرون أكثر من
                القابلة.
              </li>
              <li>المنطق: كلما زاد عدد النساء في مهنة ما، انخفض الراتب.</li>
            </ul>
          </li>
        </ul>

        <p className={classes.paragraph}>
          <strong>العمل المنزلي غير المدفوع:</strong> لا تزال النساء تقمن بجزء
          أكبر من العمل المنزلي غير المدفوع.
        </p>
        <p className={classes.paragraph}>
          <em>مثال على الاحتجاج:</em> "أجر طوال اليوم" – تظاهرن النساء لأنهن
          "يعملن مجانًا" من الساعة 16:12 كل يوم (إذا كان يوم العمل من 8 إلى 17).
        </p>

        {/* 2.6 */}
        <h3 className={classes.subHeading}>2.6 العرقية</h3>
        <ul className={classes.list}>
          <li>
            <strong>العرقية</strong> = الخصوصية الثقافية لمجموعة، بما في ذلك
            اللغة والتقاليد والأعياد والأصول.
          </li>
        </ul>

        <h4 className={classes.subHeading}>الأقليات الوطنية في السويد</h4>
        <ul className={classes.list}>
          <li>اليهود</li>
          <li>الغجر/الروما</li>
          <li>السويديون الفنلنديون</li>
          <li>السامي</li>
          <li>سكان وادي تورن</li>
        </ul>

        <p className={classes.paragraph}>
          <strong>متطلبات اعتبار المجموعة أقلية وطنية:</strong>
        </p>
        <ul className={classes.list}>
          <li>للمجموعة هوية خاصة كمجموعة عرقية.</li>
          <li>للمجموعة تاريخ طويل من العيش والعمل داخل حدود السويد.</li>
        </ul>
        <p className={classes.paragraph}>
          <strong>الحقوق:</strong> للأقليات الوطنية الحق في الحفاظ على لغتها
          وثقافتها وتطويرها.
        </p>

        {/* 2.7 */}
        <h3 className={classes.subHeading}>
          2.7 الهجرة إلى السويد – المراحل التاريخية
        </h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>الفترة</th>
                <th className={classes.th}>نوع الهجرة</th>
                <th className={classes.th}>بلدان المنشأ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>1845–1930</td>
                <td className={classes.td}>
                  الهجرة من السويد إلى أمريكا الشمالية (أكثر من مليون سويدي)
                </td>
                <td className={classes.td}>-</td>
              </tr>
              <tr>
                <td className={classes.td}>بعد الحرب العالمية الثانية</td>
                <td className={classes.td}>هجرة الحرب</td>
                <td className={classes.td}>دول البلطيق، أوروبا الشرقية</td>
              </tr>
              <tr>
                <td className={classes.td}>1950–1960</td>
                <td className={classes.td}>هجرة العمالة</td>
                <td className={classes.td}>فنلندا، اليونان، يوغوسلافيا</td>
              </tr>
              <tr>
                <td className={classes.td}>1980s</td>
                <td className={classes.td}>هجرة اللاجئين</td>
                <td className={classes.td}>تشيلي، لبنان، تركيا</td>
              </tr>
              <tr>
                <td className={classes.td}>2000s</td>
                <td className={classes.td}>هجرة اللاجئين</td>
                <td className={classes.td}>
                  العراق، أفغانستان، الصومال، سوريا
                </td>
              </tr>
              <tr>
                <td className={classes.td}>2015</td>
                <td className={classes.td}>عام الذروة ("أزمة اللاجئين")</td>
                <td className={classes.td}>
                  162,000 طلب لجوء، كثيرون من سوريا
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2.8 */}
        <h3 className={classes.subHeading}>2.8 الاندماج والفصل</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>المصطلح</th>
                <th className={classes.th}>المعنى</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>الاندماج</strong>
                </td>
                <td className={classes.td}>
                  عملية تلتقي فيها مجموعات مختلفة وتعيش معًا.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الفصل</strong>
                </td>
                <td className={classes.td}>
                  العكس – تعيش المجموعات منفصلة (سوق الإسكان، سوق العمل، الحياة
                  الاجتماعية).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الاستيعاب</strong>
                </td>
                <td className={classes.td}>
                  تتخلى الأقلية العرقية عن ثقافتها الأصلية وتندمج في ثقافة
                  الأغلبية.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>التعددية الثقافية</strong>
                </td>
                <td className={classes.td}>
                  توجد ثقافات مختلفة بشكل متوازي ويسمح لها بالحفاظ على خصائصها.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>بوتقة الانصهار الثقافي</strong>
                </td>
                <td className={classes.td}>تختلط الثقافات وينشأ شيء جديد.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className={classes.subHeading}>الفصل السكني العرقي</h4>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> يعيش المولودون في الخارج بدرجة كبيرة في
            مناطق معينة، بينما يعيش السويديون العرقيون في مناطق أخرى.
          </li>
          <li>
            <strong>مقياس الفصل (هيئة الإسكان):</strong> زاد الفصل في السويد
            خلال الـ 25 سنة الماضية.
          </li>
          <li>
            <strong>الأسباب:</strong>
            <ul className={classes.list}>
              <li>
                <strong>تفضيلات فردية:</strong> يختار الوافدون الجدد العيش حيث
                يعيش آخرون من نفس البلد.
              </li>
              <li>
                <strong>أسباب هيكلية:</strong> نقص الموارد الاقتصادية – يُوجهون
                إلى مناطق بها شقق إيجارية.
              </li>
            </ul>
          </li>
          <li>
            <strong>العواقب:</strong> تتميز المناطق بانخفاض الدخل وارتفاع
            البطالة والجريمة والاكتظاظ. وهذا يعيق الاندماج.
          </li>
        </ul>

        <h4 className={classes.subHeading}>الانتماء بين ثقافتين</h4>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> أن تكون بين ثقافتين ولا تشعر بأنك في بيتك
            حقًا في أي منهما.
          </li>
          <li>
            <em>مثال (ميلودي فارشين):</em> تُنظر إليها كإيرانية في السويد ولكن
            كسويدية في إيران.
          </li>
          <li>
            <strong>الجانب الإيجابي:</strong> يمكن أن تكون ثروة أن تمتلك عدة
            لغات وتعبيرات ثقافية.
          </li>
          <li>
            <strong>الجانب السلبي:</strong> يمكن أن يخلق مشاكل هوية.
          </li>
          <li>
            <strong>حركة الضواحي:</strong> تهدف إلى إبراز الثقافة الغنية في
            مناطق المليون برنامج ومكافحة الصور النمطية السلبية.
          </li>
        </ul>

        {/* 2.9 */}
        <h3 className={classes.subHeading}>2.9 الدراسات وسوق العمل</h3>
        <ul className={classes.list}>
          <li>
            <strong>شهادة الثانوية العامة خلال 3 سنوات:</strong>
            <ul className={classes.list}>
              <li>الطلاب من خلفية أجنبية: أقل من 50٪</li>
              <li>الطلاب من خلفية سويدية: 77٪</li>
            </ul>
          </li>
          <li>
            <strong>الأسباب:</strong> نقص المعرفة السابقة والمهارات اللغوية.
          </li>
          <li>
            <strong>دراسة بحثية (المسار المهني والحاجز، 2023):</strong>
            <ul className={classes.list}>
              <li>
                يعوض الشباب من خلفية أجنبية الصعوبات الأولية بطموحات عالية
                والتزام كبير.
              </li>
              <li>يختارون برامج صعبة ويبدأون الدراسة الجامعية في وقت أبكر.</li>
              <li>
                بعد 7 سنوات في الجامعة، حصل المزيد من المولودين في الخارج على
                شهادات مقارنة بالسويديين.
              </li>
              <li>الأصعب: الذين هاجروا في عمر 9-15 سنة.</li>
            </ul>
          </li>
        </ul>

        {/* 2.10 */}
        <h3 className={classes.subHeading}>2.10 الطبقة الاجتماعية</h3>
        <ul className={classes.list}>
          <li>
            <strong>الطبقة الاجتماعية:</strong> مجموعة ذات ظروف اقتصادية
            واجتماعية متشابهة.
          </li>
        </ul>

        <h4 className={classes.subHeading}>علامات الطبقة</h4>
        <p className={classes.paragraph}>
          رموز تشير إلى الطبقة التي تنتمي إليها – نمط الحياة، الذوق، المعاشرة.
        </p>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>الطبقة</th>
                <th className={classes.th}>علامات الطبقة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>الطبقة العليا</td>
                <td className={classes.td}>الأوبرا، المحار</td>
              </tr>
              <tr>
                <td className={classes.td}>الطبقة العاملة</td>
                <td className={classes.td}>البيرة، رحلات السفر المستأجرة</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={classes.paragraph}>
          <em>ملاحظة:</em> علامات الطبقة تتغير بمرور الوقت. كانت الغولف سابقًا
          رياضة للطبقة العليا، لكنها أصبحت شعبية.
        </p>

        <h4 className={classes.subHeading}>الانتقال الطبقي</h4>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> تغيير الطبقة الاجتماعية.
          </li>
          <li>
            <strong>الأكثر شيوعًا:</strong> من الطبقة العاملة إلى الطبقة
            المتوسطة عبر التعليم.
          </li>
          <li>
            <strong>الظروف في السويد:</strong> التعليم المجاني وقروض الدراسة
            يجعلان الانتقال الطبقي أسهل مما هو عليه في العديد من البلدان الأخرى.
          </li>
          <li>
            <strong>التحديات:</strong> صعوبة التكيف مع "قوانين" وثقافة الطبقة
            الجديدة.
          </li>
          <li>
            <strong>الانتقال الطبقي التنازلي:</strong> المهاجرون الذين كانوا في
            مناصب عالية في بلدهم الأصلي لكنهم أجبروا على البدء من الصفر في
            السويد (مثل والدي مريم).
          </li>
        </ul>

        {/* 2.11 */}
        <h3 className={classes.subHeading}>2.11 التفاوت الاقتصادي</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>المصطلح</th>
                <th className={classes.th}>المعنى</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>الفقر المطلق</strong>
                </td>
                <td className={classes.td}>
                  يفتقر إلى موارد الاحتياجات الأساسية (الغذاء، السكن، التدفئة).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الفقر النسبي</strong>
                </td>
                <td className={classes.td}>
                  لديه مستوى اقتصادي أدنى من المتوسط في المجتمع ولا يمكنه
                  المشاركة الكاملة في الحياة المجتمعية.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={classes.paragraph}>
          في السويد: انخفض الفقر المطلق، لكن الفقر النسبي زاد. اتسعت الفجوات.
        </p>
        <ul className={classes.list}>
          <li>
            <strong>الفئات الأكثر تضررًا:</strong> المولودون في الخارج والنساء
            العازبات مع أطفال.
          </li>
          <li>
            <strong>معامل جيني</strong> = مقياس لفروق الدخل في بلد ما.
          </li>
        </ul>

        {/* 2.12 */}
        <h3 className={classes.subHeading}>2.12 المدينة والريف</h3>
        <ul className={classes.list}>
          <li>
            <strong>سكان السويد:</strong>
            <ul className={classes.list}>
              <li>
                وفقًا لمكتب الإحصاء (المنطقة الحضرية = 200 نسمة على الأقل): 88٪
                يعيشون في مناطق حضرية، 12٪ في الريف.
              </li>
              <li>وفقًا لهيئة الزراعة: 34٪ في الريف.</li>
            </ul>
          </li>
        </ul>

        <h4 className={classes.subHeading}>المعيار الحضري</h4>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> المدينة هي المعيار، والريف هو الانحراف.
          </li>
          <li>ترتبط المدينة بقيم إيجابية مثل الحداثة والمستقبل.</li>
          <li>يرتبط الريف بقيم سلبية مثل الجمود ونقص الطموح.</li>
          <li>
            <strong>أولوية التفسير الحضري:</strong> المدينة تحدد جدول الأعمال
            لما يعتبر قضايا مهمة.
          </li>
        </ul>

        <h4 className={classes.subHeading}>مغذي أم مستنزف؟</h4>
        <ul className={classes.list}>
          <li>
            تُوصف المدن بأنها <strong>مغذية</strong> (نمو وتطور).
          </li>
          <li>
            يُوصف الريف بأنه <strong>مستنزف</strong> (يستهلك موارد أكثر مما
            ينتج).
          </li>
          <li>
            في الواقع، هما يعتمدان على بعضهما البعض:
            <ul className={classes.list}>
              <li>تحتاج المدن إلى غذاء الريف وطاقته ومواده الخام.</li>
              <li>
                مثال: تشكل ستوكهولم 0.1٪ من مساحة السويد لكنها تتطلب 19٪ لإنتاج
                الموارد و93٪ للتعامل مع النفايات والانبعاثات.
              </li>
            </ul>
          </li>
        </ul>

        <h4 className={classes.subHeading}>التفاوت الإقليمي</h4>
        <ul className={classes.list}>
          <li>التطور: اتسعت الفجوات منذ الثمانينيات.</li>
          <li>
            يبلغ الناتج المحلي الإجمالي لستوكهولم اليوم 40٪ أعلى من المتوسط
            الوطني.
          </li>
          <li>
            <strong>السياسة الإقليمية:</strong> سياسة لخلق ظروف متكافئة في جميع
            أنحاء البلاد.
            <ul className={classes.list}>
              <li>
                مثال: استثمارات في الأعمال التجارية والسياحة والبنية التحتية.
              </li>
              <li>نظام المعادلة البلدي.</li>
              <li>برامج السياسة الإقليمية للاتحاد الأوروبي.</li>
            </ul>
          </li>
        </ul>

        <h4 className={classes.subHeading}>
          العواقب السياسية للتفاوت الإقليمي
        </h4>
        <ul className={classes.list}>
          <li>
            <strong>"الأماكن المتخلفة" (أندريس رودريغيز-بوز):</strong> مناطق لم
            تستفد من النمو في المدن الكبرى.
          </li>
          <li>يشعر سكانها بأن النخبة تخلت عنهم.</li>
          <li>
            يمكن أن يؤدي ذلك إلى احتجاج شعبوي:
            <ul className={classes.list}>
              <li>مارين لوبان في فرنسا</li>
              <li>بريكست في بريطانيا</li>
              <li>ترامب في الولايات المتحدة</li>
            </ul>
          </li>
          <li>
            في السويد: خط الصراع بين المدينة والريف ليس قويًا بنفس القدر. لكن
            يمكن أن يتغير إذا زاد التفاوت.
          </li>
        </ul>

        {/* 2.13 */}
        <h3 className={classes.subHeading}>2.13 نورلاند والتحول الأخضر</h3>
        <ul className={classes.list}>
          <li>نورلاند: 60٪ من مساحة السويد، 1.2 مليون نسمة.</li>
          <li>موارد طبيعية كبيرة: الغابات، خام الحديد، الطاقة الكهرومائية.</li>
          <li>
            خلفية تاريخية: محرك التصنيع في السويد. عندما أتمتة الصناعة، اختفت
            العديد من الوظائف.
          </li>
          <li>
            مشاكل: هجرة الشباب، شيخوخة السكان، انخفاض الإيرادات الضريبية، بنية
            تحتية مكلفة.
          </li>
        </ul>

        <p className={classes.paragraph}>
          <strong>التحول الأخضر</strong> = الانتقال من الوقود الأحفوري إلى
          الطاقة المتجددة.
        </p>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>الفرص</th>
                <th className={classes.th}>التحديات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>وظائف جديدة (تقديراً 50,000)</td>
                <td className={classes.td}>
                  حاجة سريعة للمساكن والبنية التحتية
                </td>
              </tr>
              <tr>
                <td className={classes.td}>إيرادات ضريبية أعلى</td>
                <td className={classes.td}>مخاطر استثمارية كبيرة للبلديات</td>
              </tr>
              <tr>
                <td className={classes.td}>نمو اقتصادي</td>
                <td className={classes.td}>
                  خطر "الدخول الجوي – الخروج الجوي"
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={classes.paragraph}>
          <strong>"الدخول الجوي – الخروج الجوي":</strong>
        </p>
        <ul className={classes.list}>
          <li>يتنقل الموظفون إلى العمل لكنهم يعيشون في مكان آخر.</li>
          <li>يُدفع الضرائب في مكان السكن، وليس في مكان العمل.</li>
          <li>تتحمل البلدية تكاليف الخدمات ولكن لا تحصل على إيرادات ضريبية.</li>
        </ul>

        <p className={classes.paragraph}>
          <strong>المقترحات:</strong>
        </p>
        <ul className={classes.list}>
          <li>يجب على الدولة تحمل مسؤولية أكبر عن التكاليف والمخاطر.</li>
          <li>
            فرض ضريبة على الموارد الطبيعية (كما في فنلندا والنرويج والدنمارك).
          </li>
        </ul>

        {/* 2.14 */}
        <h3 className={classes.subHeading}>2.14 هياكل السلطة والتمييز</h3>

        <h4 className={classes.subHeading}>النظام الهيكلي للسلطة</h4>
        <ul className={classes.list}>
          <li>السلطة على مستوى المجموعة، وليس فقط بين الأفراد.</li>
          <li>مثال: نظام الجندر، المعيار الحضري، الفصل السكني العرقي.</li>
        </ul>

        <h4 className={classes.subHeading}>قانون مكافحة التمييز</h4>
        <p className={classes.paragraph}>
          <strong>سبع أسس للتمييز:</strong>
        </p>
        <ol className={classes.list}>
          <li>الجنس</li>
          <li>الهوية الجندرية أو التعبير الجندري</li>
          <li>الانتماء العرقي</li>
          <li>الدين أو المعتقد الآخر</li>
          <li>الإعاقة</li>
          <li>التوجه الجنسي</li>
          <li>العمر</li>
        </ol>

        <p className={classes.paragraph}>
          <strong>أمين المظالم لمكافحة التمييز (DO):</strong>
        </p>
        <ul className={classes.list}>
          <li>هيئة حكومية تعمل من أجل الحقوق المتساوية.</li>
          <li>يمكنها مراجعة القضايا والمطالبة بالتعويضات.</li>
        </ul>

        <h4 className={classes.subHeading}>التحليل التقاطعي</h4>
        <ul className={classes.list}>
          <li>فهم كيفية تفاعل أنظمة السلطة المختلفة.</li>
          <li>
            مثال: تتعرض مريم للتمييز كامرأة ومسلمة وصومالية – وليس فقط لأحد هذه
            العوامل.
          </li>
        </ul>

        {/* 2.15 */}
        <h3 className={classes.subHeading}>2.15 القيم السويدية</h3>
        <ul className={classes.list}>
          <li>تمت مناقشة مفهوم "القيم السويدية" في السياسة.</li>
          <li>
            طريقة لفهم القيم هي عبر مقياس:
            <ul className={classes.list}>
              <li>
                <strong>القيم التقليدية:</strong> المعتقدات الدينية، الاحترام
                للسلطات.
              </li>
              <li>
                <strong>القيم العلمانية والعقلانية:</strong> تأثير ديني أقل،
                أكثر فردية.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ===== قائمة المصطلحات ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>
          قائمة المصطلحات – المفاهيم الأساسية (الفصلين 1 و 2)
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
                  <strong>الفقر المطلق</strong>
                </td>
                <td className={classes.td}>
                  يفتقر إلى موارد الاحتياجات الأساسية.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الاستيعاب</strong>
                </td>
                <td className={classes.td}>
                  تتخلى الأقلية عن ثقافتها لثقافة الأغلبية.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>التحول الأخضر</strong>
                </td>
                <td className={classes.td}>
                  الانتقال من الوقود الأحفوري إلى الطاقة المتجددة.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>التمييز</strong>
                </td>
                <td className={classes.td}>
                  معاملة شخص بشكل أسوأ بسبب أساس تمييزي.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الفصل السكني العرقي</strong>
                </td>
                <td className={classes.td}>
                  يعيش المولودون في الخارج بدرجة كبيرة في مناطق معينة.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>النسوية</strong>
                </td>
                <td className={classes.td}>
                  النضال من أجل المساواة بين الجنسين.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الدخول الجوي – الخروج الجوي</strong>
                </td>
                <td className={classes.td}>
                  يتنقل الموظفون إلى العمل ويُدفع الضرائب في مكان آخر.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الأحكام المسبقة</strong>
                </td>
                <td className={classes.td}>تصورات سلبية عن مجموعة من الناس.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الجندر</strong>
                </td>
                <td className={classes.td}>الجنس المبني اجتماعياً.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>نظام الجندر</strong>
                </td>
                <td className={classes.td}>
                  نظام سلطة حيث يعلو الذكوري على الأنثوي.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>معامل جيني</strong>
                </td>
                <td className={classes.td}>مقياس لفروق الدخل.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>مجتمع الميم عين</strong>
                </td>
                <td className={classes.td}>
                  مظلة للمثليين جنسياً، ومزدوجي الميول، والمتحولين جنسياً،
                  والكوير، وبين الجنسين.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>المعيارية المغايرة</strong>
                </td>
                <td className={classes.td}>
                  المعيار أن الجميع مغايرون جنسياً.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الفصل الأفقي بين الجنسين</strong>
                </td>
                <td className={classes.td}>
                  يعمل الرجال والنساء في مهن/قطاعات مختلفة.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الاندماج</strong>
                </td>
                <td className={classes.td}>
                  عملية تلتقي فيها مجموعات مختلفة وتعيش معًا.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>المساواة</strong>
                </td>
                <td className={classes.td}>
                  الجميع متساوون في القيمة والحقوق.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>المساواة بين الجنسين</strong>
                </td>
                <td className={classes.td}>المساواة بين الجنسين.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الأقليات الوطنية</strong>
                </td>
                <td className={classes.td}>
                  اليهود، الغجر/الروما، السويديون الفنلنديون، السامي، سكان وادي
                  تورن.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الأعراف</strong>
                </td>
                <td className={classes.td}>قواعد غير مكتوبة للسلوك.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>كوير</strong>
                </td>
                <td className={classes.td}>
                  تعبيرات تتحدى معايير الجندر والجنسانية.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>التفاوت الإقليمي</strong>
                </td>
                <td className={classes.td}>
                  فروق بين المناطق في النمو ومستوى المعيشة.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>السياسة الإقليمية</strong>
                </td>
                <td className={classes.td}>
                  سياسة لخلق ظروف متكافئة في جميع أنحاء البلاد.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الفقر النسبي</strong>
                </td>
                <td className={classes.td}>مستوى اقتصادي أدنى من المتوسط.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الفصل</strong>
                </td>
                <td className={classes.td}>تعيش المجموعات منفصلة.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>القوالب النمطية</strong>
                </td>
                <td className={classes.td}>صور مبسطة عن مجموعة.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>النظام الهيكلي للسلطة</strong>
                </td>
                <td className={classes.td}>السلطة على مستوى المجموعة.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>المعيار الحضري</strong>
                </td>
                <td className={classes.td}>
                  المدينة هي المعيار، والريف هو الانحراف.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الفصل العمودي بين الجنسين</strong>
                </td>
                <td className={classes.td}>
                  عدد أقل من النساء في المناصب العليا.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>التمييز القيمي</strong>
                </td>
                <td className={classes.td}>
                  المهن التي تهيمن عليها النساء لها رواتب أقل.
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
            1. كيف ترتبط الأحكام المسبقة والتمييز؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الأحكام المسبقة</strong> هي تصورات سلبية أو قوالب نمطية عن
              مجموعة من الناس لا نملك معرفة عنهم. <strong>التمييز</strong> هو
              عندما يُعامل شخص بشكل أسوأ بسبب انتمائه لمجموعة معينة.
            </p>
            <p className={classes.paragraph}>
              العلاقة هي أن الأحكام المسبقة غالبًا ما تكون أساس التمييز. عندما
              يكون لدى صاحب العمل، على سبيل المثال، حكم مسبق بأن النساء المسلمات
              المحجبات غير مستقلات (كما في حالة مريم)، يمكن أن يؤدي ذلك إلى عدم
              حصول الشخص على وظيفة – وهذا هو التمييز. الأحكام المسبقة إذن هي
              مواقف وتصورات، بينما التمييز هو الفعل أو السلوك الذي يضر بالشخص.
            </p>
          </div>
        </div>

        {/* سؤال 2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>2. ماذا يعني مصطلح الأعراف؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الأعراف هي قواعد غير مكتوبة وتوقعات حول كيف يجب أن يكون الناس
              ويتصرفوا في سياقات مختلفة. تحكم الأعراف سلوكنا وتصوراتنا حول ما هو
              "طبيعي" أو "منحرف". يمكن أن تتعلق بكل شيء من كيفية لبسنا والمهن
              التي نختارها، إلى كيف نتوقع أن نكون كرجال ونساء. غالبًا ما تكون
              الأعراف متأصلة لدرجة أننا لا نفكر فيها، لكنها تؤثر علينا طوال
              الوقت.
            </p>
          </div>
        </div>

        {/* سؤال 3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. أعط أمثلة على أعراف وظيفية وأخرى قد تكون إشكالية.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>أمثلة على أعراف وظيفية:</strong>
            </p>
            <ul className={classes.list}>
              <li>عدم التزاحم في الطابور – يجعل المجتمع يعمل بسلاسة أكبر.</li>
              <li>الشكر عند تلقي شيء – يخلق الأدب والنظام الاجتماعي.</li>
              <li>
                عدم التحدث بصوت عالٍ على الهاتف في المكتبة – يسمح للآخرين بالعمل
                في هدوء.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>أمثلة على أعراف إشكالية:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                توقع أن تكون النساء مهتمات ولطيفات، بينما يُتوقع من الرجال أن
                يكونوا أقوياء ومتمكنين تقنيًا – هذا يحد من خيارات الأفراد ويؤدي
                إلى الفصل الأفقي بين الجنسين في سوق العمل.
              </li>
              <li>
                المعيارية المغايرة – توقع أن يكون الجميع مغايرين جنسياً، مما قد
                يؤدي إلى شعور مجتمع الميم عين بأنهم منحرفون وتعرضهم للتمييز.
              </li>
              <li>أن لا يظهر الرجال مشاعرهم – يمكن أن يؤدي إلى مشاكل نفسية.</li>
            </ul>
          </div>
        </div>

        {/* سؤال 4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. صف كيف يرتبط الجندر والسلطة وفقًا للمؤرخة إيفون هيردمان.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              وفقًا لإيفون هيردمان، يرتبط الجندر والسلطة من خلال{" "}
              <strong>نظام الجندر</strong>، وهو هيكل سلطة ينظم العلاقة بين
              الجنسين. يقوم نظام الجندر على مبدأين:
            </p>
            <ol className={classes.list}>
              <li>
                <strong>الفصل</strong> – ينظر إلى الرجال والنساء كأضداد لبعضهم
                البعض. أعراف كيف يجب أن يكون الرجال والنساء مختلفة تمامًا.
              </li>
              <li>
                <strong>التفوق الذكوري</strong> – ما يُنظر إليه على أنه ذكوري
                يُقيَّم أعلى مما يُنظر إليه على أنه أنثوي. يتجلى هذا في أن المهن
                التي يهيمن عليها الرجال عمومًا لها رواتب ومكانة أعلى من المهن
                التي تهيمن عليها النساء، حتى عندما يكون مستوى التعليم متساويًا
                (مثل التقني مقابل معلم الروضة).
              </li>
            </ol>
            <p className={classes.paragraph}>
              هذا هو <strong>النظام الهيكلي للسلطة</strong>، مما يعني أن السلطة
              موجودة على مستوى المجموعة – الرجال كمجموعة متفوقون على النساء
              كمجموعة. لكن هذا لا يعني أن كل رجل لديه سلطة على كل امرأة.
            </p>
          </div>
        </div>

        {/* سؤال 5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            5. ماذا تمثل الحروف في مصطلح مجتمع الميم عين؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>م</strong> – مثليون جنسياً
              </li>
              <li>
                <strong>ي</strong> – مثليات جنسياً
              </li>
              <li>
                <strong>ع</strong> – مزدوجو الميول الجنسية
              </li>
              <li>
                <strong>ن</strong> – متحولون جنسياً
              </li>
              <li>
                <strong>كيو</strong> – كوير (أشخاص ذوو تعبيرات وهويات كويرية)
              </li>
              <li>
                <strong>إنتر</strong> – أشخاص بين الجنسين
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. عاما 1944 و 1979 هما عامان مهمان لحقوق مجتمع الميم. ماذا حدث في
            هذين العامين؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>1944:</strong> إلغاء القانون الذي كان يحظر الأفعال
                المثلية.
              </li>
              <li>
                <strong>1979:</strong> إزالة المثلية الجنسية من سجل الأمراض
                لهيئة الصحة العامة.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 7 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. اشرح الفرق بين مفهومي المساواة والمساواة بين الجنسين.
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>المصطلح</th>
                    <th className={classes.th}>المعنى</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>المساواة</strong>
                    </td>
                    <td className={classes.td}>
                      جميع الناس متساوون في القيمة ولهم نفس الحقوق القانونية.
                      مصطلح واسع يشمل جميع أشكال المعاملة المتساوية.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>المساواة بين الجنسين</strong>
                    </td>
                    <td className={classes.td}>
                      المساواة بين الجنسين. للرجال والنساء نفس الحقوق والفرص
                      والواجبات في جميع مجالات الحياة الهامة. المساواة بين
                      الجنسين هي شكل محدد من المساواة.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* سؤال 8 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>8. ماذا يعني:</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>أ) الفصل الأفقي بين الجنسين؟</strong>
            </p>
            <p className={classes.paragraph}>
              أن يعمل الرجال والنساء في مهن وقطاعات مختلفة. تهيمن النساء مثلاً
              على الرعاية الصحية والاجتماعية، بينما يهيمن الرجال على الصناعة
              والبناء. فقط 4 من أكبر 30 مهنة في السويد لها توزيع متوازن بين
              الجنسين (40-60٪ من كل جنس).
            </p>
            <p className={classes.paragraph}>
              <strong>ب) الفصل العمودي بين الجنسين؟</strong>
            </p>
            <p className={classes.paragraph}>
              أن يكون عدد النساء أقل في المناصب العليا وأن يشغل الرجال مناصب
              سلطة أكثر. النساء ممثلات بشكل ناقص في المناصب القيادية وفي مواقع
              السلطة في المجتمع.
            </p>
          </div>
        </div>

        {/* سؤال 9 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. ما هي الأقليات الوطنية في السويد؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الأقليات الوطنية المعترف بها في السويد هي خمس:
            </p>
            <ol className={classes.list}>
              <li>اليهود</li>
              <li>الغجر/الروما</li>
              <li>السويديون الفنلنديون</li>
              <li>السامي</li>
              <li>سكان وادي تورن</li>
            </ol>
          </div>
        </div>

        {/* سؤال 10 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. ما المطلوب لاعتبار مجموعة أقلية وطنية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              لاعتبار مجموعة أقلية وطنية، يجب:
            </p>
            <ol className={classes.list}>
              <li>أن يكون للمجموعة هوية خاصة كمجموعة عرقية.</li>
              <li>
                أن يكون للمجموعة تاريخ طويل من العيش والعمل داخل حدود السويد.
              </li>
            </ol>
            <p className={classes.paragraph}>
              للأقليات الوطنية الحق في الحفاظ على لغتها وثقافتها وتطويرها حسب
              القانون.
            </p>
          </div>
        </div>

        {/* سؤال 11 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. اشرح مفهومي الاندماج والفصل.
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>المصطلح</th>
                    <th className={classes.th}>المعنى</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>الاندماج</strong>
                    </td>
                    <td className={classes.td}>
                      عملية تلتقي فيها مجموعات مختلفة وتعيش معًا على قدم
                      المساواة. وهذا يعني أن الوافدين الجدد والمجموعات المقيمة
                      يتعاونون ويشتركون في موارد المجتمع وفرصه.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>الفصل</strong>
                    </td>
                    <td className={classes.td}>
                      عكس الاندماج. يعني أن المجموعات تعيش منفصلة عن بعضها
                      البعض، مثلاً في سوق الإسكان، سوق العمل، وفي السياقات
                      الاجتماعية. الفصل السكني العرقي هو مثال حيث يعيش المولودون
                      في الخارج بدرجة كبيرة في مناطق معينة.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* سؤال 12 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. ما الفرق بين الاستيعاب والتعددية الثقافية وبوتقة الانصهار
            الثقافي؟
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>المصطلح</th>
                    <th className={classes.th}>المعنى</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>الاستيعاب</strong>
                    </td>
                    <td className={classes.td}>
                      عملية تتخلى فيها الأقلية العرقية تمامًا عن ثقافتها الأصلية
                      وتندمج في ثقافة الأغلبية. يتكيف الشخص تمامًا مع طريقة حياة
                      مجتمع الأغلبية.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>التعددية الثقافية</strong>
                    </td>
                    <td className={classes.td}>
                      توجد ثقافات مختلفة بشكل متوازي ويسمح لها بالحفاظ على
                      خصائصها الثقافية. لا يتوقع أن تختفي أي ثقافة أو تحل محل
                      الأخرى.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>بوتقة الانصهار الثقافي</strong>
                    </td>
                    <td className={classes.td}>
                      تختلط الثقافات بحيث ينشأ شيء جديد. هو مزيج من تعبيرات
                      ثقافية مختلفة تخلق ثقافة مشتركة جديدة.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* سؤال 13 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. ما هي أسباب الفصل السكني العرقي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              وفقًا لهيئة الإسكان، هناك أسباب هيكلية وتفضيلات فردية:
            </p>
            <p className={classes.paragraph}>
              <strong>التفضيلات الفردية:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                يختار الوافدون الجدد غالبًا السكن والبقاء في مناطق حيث يعيش
                آخرون من نفس البلد (شوهد نمط مشابه عندما هاجر السويديون إلى
                أمريكا).
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>الأسباب الهيكلية:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                الشخص القادم الجديد إلى بلد ما يفتقر غالبًا إلى الموارد
                الاقتصادية وبالتالي يُوجه إلى مناطق أقل جاذبية بها العديد من
                الشقق الإيجارية.
              </li>
              <li>
                ينتمي المولودون في الخارج غالبًا إلى مجموعات ذات ظروف اقتصادية
                أسوأ، مما يتزامن مع توجيههم إلى هذه المناطق.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 14 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. ماذا يعني أن تكون في حالة انتماء بين ثقافتين؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الانتماء بين ثقافتين يعني أن تكون بين ثقافتين ولا تشعر بأنك في
              بيتك حقًا في أي منهما. يُنظر إليك كأجنبي في السويد ولكن كسويدي في
              بلدك الأصلي. يمكن أن يخلق هذا مشاكل هوية.
            </p>
            <p className={classes.paragraph}>
              <strong>الجوانب الإيجابية:</strong> يمكن أن تكون ثروة أن تمتلك عدة
              لغات وتعبيرات ثقافية.
            </p>
            <p className={classes.paragraph}>
              <strong>مثال:</strong> تصف ميلودي فارشين أنها تعرف نفسها بقوة
              بضواحيها هوسبي بدلاً من السويد أو إيران. إنها "مزيج من كل شيء"
              متأثرة بأصدقاء من بلدان مختلفة.
            </p>
          </div>
        </div>

        {/* سؤال 15 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            15. صف كيف رأى كارل ماركس المجتمع الطبقي.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              رأى كارل ماركس المجتمع الطبقي من خلال صراع بين طبقتين رئيسيتين:
            </p>
            <ul className={classes.list}>
              <li>
                <strong>الرأسماليون/طبقة المالكين</strong> – الذين يملكون وسائل
                الإنتاج (المصانع، الآلات، المواد الخام).
              </li>
              <li>
                <strong>الطبقة العاملة</strong> – الذين يبيعون قوة عملهم للبقاء
                على قيد الحياة.
              </li>
            </ul>
            <p className={classes.paragraph}>
              وفقًا لماركس، يتسم المجتمع الطبقي بصراع هيكلي بين هذه المجموعات،
              لأن الرأسماليين يريدون تعظيم أرباحهم بينما يريد العمال رواتب أعلى
              وظروف أفضل. رأى ماركس أن هذا الصراع سيؤدي في النهاية إلى قيام
              الطبقة العاملة وإنشاء مجتمع بلا طبقات.
            </p>
          </div>
        </div>

        {/* سؤال 16 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            16. صف الفرق بين الفقر المطلق والفقر النسبي.
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>المصطلح</th>
                    <th className={classes.th}>المعنى</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>الفقر المطلق</strong>
                    </td>
                    <td className={classes.td}>
                      يفتقر الشخص إلى موارد تلبية الاحتياجات الأساسية كالغذاء
                      والسكن والتدفئة. يتعلق بالبقاء.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>الفقر النسبي</strong>
                    </td>
                    <td className={classes.td}>
                      لدى الشخص مستوى اقتصادي أدنى من المتوسط في المجتمع الذي
                      يعيش فيه. قد يكون لديه سقف وطعام، لكن لا يمكنه المشاركة في
                      الحياة المجتمعية بنفس طريقة الآخرين (مثل عدم القدرة على
                      تحمل تكاليف الهاتف المحمول، الأنشطة الترفيهية للأطفال، أو
                      الذهاب إلى المطاعم).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={classes.paragraph}>
              في السويد: انخفض الفقر المطلق، لكن الفقر النسبي زاد – أي أن
              السويديين حصلوا على المزيد في محافظهم لكن الفجوات اتسعت.
            </p>
          </div>
        </div>

        {/* سؤال 17 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>17. ما هي علامة الطبقة؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              علامة الطبقة هي رمز أو سلوك يظهر الطبقة الاجتماعية التي ينتمي
              إليها الشخص. يمكن أن تتعلق بنمط الحياة، الذوق، المعاشرة، نمط
              الملابس أو الأنشطة الترفيهية.
            </p>
            <p className={classes.paragraph}>
              <strong>أمثلة:</strong>
            </p>
            <ul className={classes.list}>
              <li>ارتياد الأوبرا وتناول المحار يرتبط غالبًا بالطبقة العليا.</li>
              <li>
                البيرة ورحلات السفر المستأجرة ترتبط غالبًا بالطبقة العاملة.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <em>ملاحظة:</em> علامات الطبقة تتغير بمرور الوقت. كانت الغولف
              سابقًا رياضة للطبقة العليا لكنها أصبحت اليوم أكثر شعبية وفقدت
              مكانتها كعلامة طبقية.
            </p>
          </div>
        </div>

        {/* سؤال 18 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            18. في الأوساط البحثية، يتحدثون عن أولوية التفسير الحضري. ماذا يعني
            ذلك؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              أولوية التفسير الحضري تعني أن المدينة هي التي تحدد جدول الأعمال
              لما يعتبر قضايا مجتمعية مهمة وكيف يجب مناقشة هذه القضايا. المدينة
              ومنظورها هما المعيار، بينما يتم تهميش منظور الريف.
            </p>
            <p className={classes.paragraph}>
              هذا جزء من المعيار الحضري، حيث ترتبط المدينة بقيم إيجابية مثل
              الحداثة والمستقبل، بينما يرتبط الريف بالجمود ونقص الطموح. هذا يؤدي
              إلى عدم إعطاء أولوية لقضايا الريف في النقاش العام.
            </p>
          </div>
        </div>

        {/* سؤال 19 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            19. ما هو هدف السياسة الإقليمية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              هدف السياسة الإقليمية هو خلق ظروف متكافئة للتنمية المجتمعية في
              أجزاء مختلفة من البلاد. عمليًا، يتعلق الأمر بـ:
            </p>
            <ul className={classes.list}>
              <li>
                دعم المناطق الأقل حظًا من خلال استثمارات في الأعمال التجارية
                والسياحة والبنية التحتية.
              </li>
              <li>تسوية الفروق بين المناطق.</li>
            </ul>
            <p className={classes.paragraph}>
              يتم ذلك من خلال نظام المعادلة البلدي ومن خلال برامج السياسة
              الإقليمية للاتحاد الأوروبي التي تقدم دعمًا للمناطق المتخلفة
              اقتصاديًا.
            </p>
          </div>
        </div>

        {/* سؤال 20 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            20. كيف يتأثر شمال السويد بالتحول الأخضر؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يتأثر شمال السويد بطرق إيجابية وسلبية:
            </p>
            <p className={classes.paragraph}>
              <strong>الفرص:</strong>
            </p>
            <ul className={classes.list}>
              <li>خلق وظائف جديدة (تقديراً 50,000 فرصة عمل جديدة).</li>
              <li>إيرادات ضريبية أعلى للبلديات.</li>
              <li>نمو اقتصادي وتفاؤل أكبر بالمستقبل.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>التحديات:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                يجب على البلديات توفير المساكن والبنية التحتية والخدمات
                المجتمعية بسرعة.
              </li>
              <li>
                مخاطر استثمارية كبيرة – إذا انتقلت الشركات أو أفلست، قد تتحمل
                البلديات تكاليف خدمات لم تعد مطلوبة.
              </li>
              <li>خطر "الدخول الجوي – الخروج الجوي".</li>
              <li>
                قد تؤدي الاستثمارات إلى أضرار كبيرة في الطبيعة وتقليل إمكانيات
                رعي الرنة.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 21 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            21. ما هو "الدخول الجوي – الخروج الجوي" ولماذا يمثل مشكلة للبلديات
            في الشمال؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              "الدخول الجوي – الخروج الجوي" هو ظاهرة حيث يتنقل الموظفون إلى
              عملهم (مثل في صناعة جديدة في نورلاند) لكنهم يعيشون في مكان آخر.
              "يدخلون جواً" للعمل و"يخرجون جواً" عندما ينتهي وردية العمل.
            </p>
            <p className={classes.paragraph}>
              <strong>المشكلة للبلديات:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                يُدفع الضرائب من الموظفين في مكان السكن، وليس في مكان العمل.
              </li>
              <li>
                تتحمل البلدية التي يقع فيها المصنع تكاليف تطوير البنية التحتية
                والمساكن والخدمات، لكنها لا تحصل على إيرادات ضريبية من الموظفين.
              </li>
              <li>يشكل ذلك عبئًا اقتصاديًا على البلدية.</li>
            </ul>
          </div>
        </div>

        {/* سؤال 22 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            22. ماذا يعني إجراء تحليل تقاطعي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              التحليل التقاطعي يعني دراسة كيفية تفاعل أنظمة السلطة المختلفة وأسس
              التمييز لخلق تجارب فريدة للفرد. ينظر في كيفية تأثير عدة عوامل مثل
              الجندر، العرقية، الطبقة، الدين، العمر، الإعاقة، والتوجه الجنسي على
              بعضها البعض.
            </p>
            <p className={classes.paragraph}>
              <strong>مثال (مريم):</strong> لا تتعرض للتمييز فقط لأنها امرأة، أو
              لأنها مسلمة، أو لأنها صومالية – تتعرض لمزيج من كل هذه العوامل في
              نفس الوقت. هذا المزيج يخلق تجربة فريدة من التمييز تختلف عن مثلاً
              امرأة سويدية عرقية مسلمة أو رجل صومالي.
            </p>
          </div>
        </div>

        {/* سؤال 23 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            23. ما هي أسس التمييز السبعة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              أسس التمييز السبعة وفقًا لقانون مكافحة التمييز هي:
            </p>
            <ol className={classes.list}>
              <li>الجنس</li>
              <li>الهوية الجندرية أو التعبير الجندري</li>
              <li>الانتماء العرقي</li>
              <li>الدين أو المعتقد الآخر</li>
              <li>الإعاقة</li>
              <li>التوجه الجنسي</li>
              <li>العمر</li>
            </ol>
            <p className={classes.paragraph}>
              من يعتقد أنه تعرض للتمييز على أي من هذه الأسس يمكنه الإبلاغ إلى
              أمين المظالم لمكافحة التمييز (DO).
            </p>
          </div>
        </div>

        {/* سؤال 24 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>24. ماذا تعني سياسة الهوية؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              سياسة الهوية تعني أن القضايا والحركات السياسية تنطلق من هويات
              الناس وانتمائهم لمجموعات مختلفة – مثل الجنس، العرقية، الجنسانية أو
              الدين. بدلاً من التركيز على الطبقة أو القضايا الاقتصادية، تبرز
              سياسة الهوية كيف تحتاج تجارب المجموعات المختلفة من التمييز والقمع
              إلى الاهتمام.
            </p>
            <p className={classes.paragraph}>
              <strong>أمثلة:</strong> حركة مجتمع الميم عين، الحركات النسوية
              والحركات المناهضة للعنصرية يمكن اعتبارها أشكالاً من سياسة الهوية.
              يرى النقاد أن سياسة الهوية يمكن أن تفرق المجتمع، بينما يرى
              المؤيدون أنها ضرورية لكشف التمييز الهيكلي.
            </p>
          </div>
        </div>

        {/* سؤال 25 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            25. لماذا تعتبر الثقة الاجتماعية شرطًا مهمًا لعمل المجتمع بشكل جيد؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الثقة الاجتماعية تعني أن الناس يثقون ببعضهم البعض وبمؤسسات المجتمع
              (مثل الشرطة والمحاكم والمدارس والرعاية الصحية).
            </p>
            <p className={classes.paragraph}>
              <strong>لماذا هو مهم:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>يقلل النزاعات:</strong> عندما يثق الناس ببعضهم البعض
                وبالسلطات، يقل خطر النزاعات الاجتماعية والعنف.
              </li>
              <li>
                <strong>يسهل التعاون:</strong> الثقة تجعل الناس قادرين على
                التعاون والعمل معًا عبر حدود المجموعات.
              </li>
              <li>
                <strong>يخلق الأمان:</strong> يشعر الناس بالأمان في مجتمع ذي ثقة
                عالية.
              </li>
              <li>
                <strong>أساس الديمقراطية:</strong> بدون الثقة في النظام القانوني
                والسياسة، لا تعمل الديمقراطية.
              </li>
              <li>
                <strong>النمو الاقتصادي:</strong> تظهر الأبحاث أن البلدان ذات
                الثقة الاجتماعية العالية لديها تنمية اقتصادية أفضل.
              </li>
            </ul>
            <p className={classes.paragraph}>
              في السويد، الثقة الاجتماعية عالية بشكل عام، وهو شرط مهم لعمل مجتمع
              الرفاهية والديمقراطية.
            </p>
          </div>
        </div>
      </section>

      {/* ===== أسئلة التحليل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>أسئلة التحليل (صفحة 54)</h2>

        {/* A1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            أ1. انطلق من مفهوم الانتماء بين ثقافتين كما هو معرف في النص. ما هي
            الأسباب التي تجعل الناس يقعون في حالة الانتماء بين ثقافتين؟ وما هي
            عواقب ذلك على المستوى الفردي والمستوى المجتمعي؟ هل الانتماء بين
            ثقافتين سلبي فقط أم يمكن أن تكون هناك جوانب إيجابية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>أسباب الانتماء بين ثقافتين:</strong>
            </p>
            <ul className={classes.list}>
              <li>الهجرة والانتقال – عندما ينتقل الناس من بلد إلى آخر.</li>
              <li>
                النشأة مع آباء من ثقافة واحدة مع العيش في ثقافة أخرى في المدرسة
                والمجتمع.
              </li>
              <li>أن تكون بين ثقافتين حيث لا يتم قبولك بالكامل في أي منهما.</li>
              <li>امتلاك خلفية عرقية تختلف عن غالبية السكان.</li>
              <li>
                تجربة أن يُنظر إليك كـ"أجنبي" في السويد ولكن كـ"سويدي" في بلدك
                الأصلي.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>العواقب على المستوى الفردي:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>سلبية:</strong> مشاكل هوية، شعور بالانقطاع، مشاكل نفسية،
                تهميش، عدم الشعور بالانتماء في أي مكان.
              </li>
              <li>
                <strong>إيجابية:</strong> الوصول إلى عدة لغات وتعبيرات ثقافية،
                منظور أوسع، القدرة على التنقل بين ثقافات مختلفة (كفاءة ثقافية).
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>العواقب على المستوى المجتمعي:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>سلبية:</strong> الفصل، توترات اجتماعية، انخفاض الثقة
                الاجتماعية، خطر الاستقطاب السياسي.
              </li>
              <li>
                <strong>إيجابية:</strong> التنوع الثقافي، الابتكار والإبداع
                عندما تلتقي وجهات نظر مختلفة.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>هل الانتماء بين ثقافتين سلبي فقط؟</strong>
            </p>
            <p className={classes.paragraph}>
              لا، يمكن النظر إلى الانتماء بين ثقافتين أيضًا كمورد. كما تصف
              ميلودي فارشين: أن تكون "مزيجًا من كل شيء" يمكن أن يكون ثروة. يمكن
              لأولئك الذين يعيشون بين ثقافتين غالبًا التنقل بين ثقافات مختلفة،
              وهي قدرة قيمة في عالم معولم.
            </p>
          </div>
        </div>

        {/* A2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            أ2. قم بإجراء تحليل تقاطعي لكيفية تأثير قرار سياسي على مجموعات
            مختلفة في المجتمع. انطلق من اثنتين على الأقل من الفئات: الجندر،
            العرقية، الطبقة، المدينة/الريف.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>مثال: النقل العام المجاني للجميع</strong>
            </p>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>الفئة</th>
                    <th className={classes.th}>التأثير</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>الطبقة</strong>
                    </td>
                    <td className={classes.td}>
                      إيجابي للأشخاص ذوي المستوى الاقتصادي المنخفض (الطبقة
                      العاملة، ذوو الدخل المنخفض) الذين يجدون صعوبة في تحمل
                      تكاليف التذاكر الشهرية. يزيد التنقل وإمكانية البحث عن عمل
                      خارج المنطقة. أقل إيجابية لذوي الدخل المرتفع الذين لديهم
                      المال وقد يفضلون استخدام السيارة.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>المدينة/الريف</strong>
                    </td>
                    <td className={classes.td}>
                      إيجابي جدًا في المدن الكبرى حيث النقل العام متطور ويعمل.
                      في الريف حيث النقل العام ضعيف أو غير موجود، يكون للقرار
                      تأثير ضئيل أو معدوم. تخاطر الفروق بين المدينة والريف
                      بالتعمق.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>الجندر</strong>
                    </td>
                    <td className={classes.td}>
                      تستخدم النساء النقل العام بدرجة أكبر من الرجال (جزئيًا
                      بسبب انخفاض ملكية السيارات). وبالتالي فإن القرار يفيد
                      النساء أكثر من الرجال. يمكن أن يزيد أيضًا من تنقل النساء
                      وإمكانية حصولهن على وظائف، مما يساهم في المساواة بين
                      الجنسين.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>العرقية</strong>
                    </td>
                    <td className={classes.td}>
                      المولودون في الخارج غالبًا ما يكون دخلهم أقل وممثلون بشكل
                      زائد في النقل العام. وبالتالي يفيد القرار هذه المجموعة.
                      لكن – إذا كان النقل العام أسوأ في المناطق ذات النسبة
                      العالية من المولودين في الخارج (الضواحي المنفصلة)، تقل
                      الفائدة.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> يفيد القرار بشكل أساسي النساء، وذوي
              الدخل المنخفض، والأشخاص في المدن الكبرى. له تأثير أقل على الريف
              والرجال ذوي الدخل المرتفع. يظهر التحليل التقاطعي أن القرار يمكن أن
              يساهم في زيادة المساواة في بعض المجالات ولكنه يخاطر أيضًا بتعميق
              الفجوة بين المدينة والريف.
            </p>
          </div>
        </div>
      </section>

      {/* ===== أسئلة النقاش ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>أسئلة النقاش (صفحة 54)</h2>

        {/* D1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            د1. ناقش مفاهيم الاستيعاب، التعددية الثقافية، وبوتقة الانصهار
            الثقافي. أي من النماذج تعتقد أنها الأفضل لخلق مجتمع يعمل بشكل جيد؟
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>النموذج</th>
                    <th className={classes.th}>المزايا</th>
                    <th className={classes.th}>العيوب</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>الاستيعاب</strong>
                    </td>
                    <td className={classes.td}>
                      يخلق هوية وطنية موحدة، يقلل خطر النزاعات الثقافية.
                    </td>
                    <td className={classes.td}>
                      يتطلب من الأقليات التخلي عن ثقافتها – يمكن أن يؤدي إلى
                      فقدان الهوية ومشاكل نفسية. تاريخياً، كان الاستيعاب غالبًا
                      مفروضًا وقاسياً (مثل ضد السامي).
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>التعددية الثقافية</strong>
                    </td>
                    <td className={classes.td}>
                      تحترم وتحافظ على الثقافات المختلفة، تعطي الناس الحق في
                      الحفاظ على هويتهم.
                    </td>
                    <td className={classes.td}>
                      يمكن أن تؤدي إلى مجتمعات متوازية وفصل إذا لم تلتقي
                      المجموعات. يمكن أن تعيق القيم المشتركة.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={classes.paragraph}>
              <strong>أي نموذج هو الأفضل؟</strong>
            </p>
            <p className={classes.paragraph}>
              مزيج من التعددية الثقافية والاندماج هو غالبًا النموذج الأكثر
              نجاحًا. يجب أن يُسمح للناس بالحفاظ على هويتهم الثقافية (التعددية
              الثقافية) بينما يخلق المجتمع أماكن لقاء وساحات مشتركة حيث يمكن
              لمجموعات مختلفة أن تلتقي وتتعرف على بعضها البعض (الاندماج). الكثير
              من الاستيعاب يمكن أن يؤدي إلى مقاومة، بينما الكثير من التعددية
              الثقافية بدون أماكن لقاء مشتركة يمكن أن يؤدي إلى الفصل. استثمرت
              السويد تاريخيًا في نموذج تعددية ثقافية، لكن النقاش حول الاندماج
              والفصل يظهر أن هناك تحديات.
            </p>
          </div>
        </div>

        {/* D2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            د2. انظر إلى الجدول الذي يظهر المستوى الاقتصادي المنخفض لمختلف
            الفئات المجتمعية. لماذا بعض الفئات أكثر تضررًا وكيف يؤثر ذلك على
            الطفل الذي ينشأ في ظل مستوى اقتصادي منخفض؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>لماذا بعض الفئات أكثر تضررًا:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>المولودون في الخارج:</strong> غالبًا ما يجدون صعوبة في
                الاندماج في سوق العمل بسبب نقص المهارات اللغوية، وانعدام
                الشبكات، وعدم الاعتراف بالشهادات الأجنبية في السويد.
              </li>
              <li>
                <strong>النساء العازبات مع أطفال:</strong> غالبًا ما يكون دخلهن
                أقل، ويعملن بدوام جزئي، ولديهن فرصة أقل للعمل بدوام كامل بسبب
                مسؤولية الأطفال.
              </li>
              <li>
                <strong>الأشخاص ذوو الإعاقة:</strong> يجدون صعوبة أكبر في الحصول
                على عمل وبالتالي هم ممثلون بشكل زائد بين ذوي الدخل المنخفض.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>كيف يؤثر المستوى الاقتصادي المنخفض على الطفل؟</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>القيود المادية:</strong> قد لا يكون لدى الطفل مال
                للأنشطة الترفيهية، الرحلات، الملابس الجديدة أو الهاتف المحمول –
                مما قد يؤدي إلى التهميش الاجتماعي.
              </li>
              <li>
                <strong>ظروف السكن:</strong> الاكتظاظ وسوء البيئة السكنية يؤثران
                على التركيز الدراسي والصحة.
              </li>
              <li>
                <strong>التأثير النفسي:</strong> التوتر والقلق بشأن الوضع المالي
                للوالدين يؤثر على الصحة النفسية للأطفال.
              </li>
              <li>
                <strong>النتائج الدراسية:</strong> تظهر الأبحاث أن الأطفال من
                الأسر منخفضة الدخل عمومًا لديهم نتائج دراسية أسوأ، مما يؤثر على
                فرصهم المستقبلية.
              </li>
              <li>
                <strong>الإرث الاجتماعي:</strong> خطر أكبر أن يقع الطفل نفسه في
                وضع اقتصادي صعب كبالغ.
              </li>
            </ul>
          </div>
        </div>

        {/* D3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            د3. أي من الفئات المذكورة في النص (الجندر، العرقية، الطبقة،
            المدينة/الريف) تعتقد أن لها الأثر الأكبر على فرص الشخص في الحياة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              جميع الفئات تتفاعل (التقاطعية)، لكن هنا تحليل لكل منها:
            </p>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>الفئة</th>
                    <th className={classes.th}>الأهمية للفرص الحياتية</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>الطبقة</strong>
                    </td>
                    <td className={classes.td}>
                      ذات أهمية كبيرة جدًا – تحدد الموارد الاقتصادية، الشبكة
                      الاجتماعية، وفرص التعليم. تؤثر الطبقة بشكل كبير على الصحة،
                      السكن، التعليم والفرص المهنية.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>الجندر</strong>
                    </td>
                    <td className={classes.td}>
                      يؤثر على كل شيء من مستوى الراتب إلى المهن التي تعتبر
                      "مناسبة". لا تزال النساء تواجه عقبات هيكلية مثل السقف
                      الزجاجي والتمييز القيمي.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>العرقية</strong>
                    </td>
                    <td className={classes.td}>
                      تؤثر على فرص سوق العمل، الفصل السكني، وخطر التعرض للتمييز.
                      المولودون في الخارج عمومًا لديهم ظروف اقتصادية أسوأ.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>المدينة/الريف</strong>
                    </td>
                    <td className={classes.td}>
                      تؤثر على الوصول إلى التعليم، العمل والخدمات. تقدم المدن
                      الكبرى فرصًا أكثر، بينما يمكن أن يعني الريف خيارات أقل
                      ولكن تكاليف معيشة أقل.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> قد يجادل الكثيرون بأن الطبقة لها الأثر
              الأكبر، لأنها تؤثر على جميع جوانب الحياة الأخرى تقريبًا. لكن
              التحليل التقاطعي يظهر أن مزيج هذه العوامل هو الذي يحدد الفرص
              الفعلية للفرد. كونك امرأة (جندر) من خلفية أجنبية (عرقية) ومن عائلة
              من الطبقة العاملة (طبقة) وتعيش في الريف (مدينة/ريف) يخلق وضعًا
              حياتيًا مختلفًا تمامًا عن كونك رجلاً سويديًا من الطبقة العليا يعيش
              في ستوكهولم.
            </p>
          </div>
        </div>
      </section>

      {/* ===== أسئلة التعمق ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>أسئلة التعمق (صفحة 54)</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ت1. أهداف السويد للسياسة المتعلقة بالمساواة بين الجنسين
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>المهمة:</strong> ادخل إلى موقع هيئة المساواة بين الجنسين
              واقرأ عن أهداف السويد للسياسة المتعلقة بالمساواة بين الجنسين. اختر
              أحد الأهداف وتعمق في ما يعنيه وكيف يبدو التطور.
            </p>
            <p className={classes.paragraph}>
              <strong>التوجيه:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                هدف السويد للسياسة المتعلقة بالمساواة بين الجنسين هو أن يكون
                للرجال والنساء نفس السلطة في تشكيل المجتمع وحياتهم الخاصة.
              </li>
              <li>
                ينقسم هذا إلى أهداف فرعية: توزيع متوازن للسلطة والنفوذ، المساواة
                الاقتصادية، التعليم المتساوي، توزيع متوازن للعمل المنزلي غير
                المدفوع، الصحة المتساوية، ووقف عنف الرجال ضد النساء.
              </li>
              <li>
                اختر هدفًا فرعيًا، مثلاً "توزيع متوازن للعمل المنزلي والرعاية
                غير المدفوع". ابحث في الإحصاءات – لا تزال النساء تقمن بجزء أكبر
                من الأعمال المنزلية. ناقش التطور والإجراءات المقترحة.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>ت2. الأقليات الوطنية</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>المهمة:</strong> ابحث عن المزيد حول إحدى الأقليات الوطنية
              في السويد. استخدم موقع minoritet.se
            </p>
            <p className={classes.paragraph}>
              <strong>التوجيه:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                اختر مثلاً السامي. ابحث عن: تاريخهم، حرفهم التقليدية (رعي
                الرنة)، لغتهم (السامية)، تعرضهم تاريخياً (التهجير القسري، حظر
                التحدث بالسامية في المدرسة)، حقوقهم اليوم وتحدياتهم (مثل
                النزاعات بين رعي الرنة والتعدين/طاقة الرياح).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>ت3. الفصل السكني في بلديتك</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>المهمة:</strong> ادخل إلى موقع مقياس الفصل
              (segregationsbarometern.boverket.se) واكتشف كيف يبدو الفصل السكني
              في البلدية التي تعيش فيها.
            </p>
            <p className={classes.paragraph}>
              <strong>التوجيه:</strong>
            </p>
            <ul className={classes.list}>
              <li>ابحث عن بلديتك على الخريطة.</li>
              <li>
                انظر إلى توزيع المولودين في الخارج على مناطق البلدية المختلفة.
              </li>
              <li>
                ابحث في الاختلافات في مستويات الدخل، ومستويات التعليم، والبطالة
                بين المناطق السكنية المختلفة.
              </li>
              <li>تأمل في العواقب التي يترتب على ذلك على ظروف حياة الناس.</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>ت4. مراجعة قضية تمييز</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>المهمة:</strong> انطلق من موقع أمين المظالم لمكافحة
              التمييز (do.se) وانتقل إلى "النزاعات والأحكام وقرارات الرقابة".
              تعمق في إحدى القضايا التي تعامل معها DO خلال العام الماضي. صف
              القضية، أسس التمييز المعنية، التقييم الذي قام به DO، والعواقب.
            </p>
            <p className={classes.paragraph}>
              <strong>التوجيه:</strong>
            </p>
            <ul className={classes.list}>
              <li>ابحث عن قضية حالية على موقع DO.</li>
              <li>صف القضية: عن ماذا كانت؟ من قدم الشكوى؟ ضد من؟</li>
              <li>
                أساس التمييز: أي من الأسس السبعة (الجنس، العرقية، الدين، إلخ)
                كانت معنية؟
              </li>
              <li>تقييم DO: هل خلصوا إلى أن التمييز قد حدث أم لا؟</li>
              <li>العواقب: هل كان هناك تعويض؟ تسوية؟ حكم قضائي؟ بأي مبلغ؟</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== الكلمات الرئيسية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>الكلمات الرئيسية – شروحات مختصرة</h2>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>الكلمة الرئيسية</th>
                <th className={classes.th}>الشرح</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>الفقر المطلق</strong>
                </td>
                <td className={classes.td}>
                  يفتقر إلى موارد الاحتياجات الأساسية (الغذاء، السكن، التدفئة).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الاستيعاب</strong>
                </td>
                <td className={classes.td}>
                  تتخلى الأقلية عن ثقافتها وتندمج في ثقافة الأغلبية.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>التحول الأخضر</strong>
                </td>
                <td className={classes.td}>
                  الانتقال من الوقود الأحفوري إلى الطاقة المتجددة.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>التمييز</strong>
                </td>
                <td className={classes.td}>
                  معاملة شخص بشكل أسوأ بسبب أساس تمييزي.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الفصل السكني العرقي</strong>
                </td>
                <td className={classes.td}>
                  يعيش المولودون في الخارج بدرجة كبيرة في مناطق سكنية معينة.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>النسوية</strong>
                </td>
                <td className={classes.td}>
                  النضال من أجل المساواة بين الجنسين.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الدخول الجوي – الخروج الجوي</strong>
                </td>
                <td className={classes.td}>
                  يتنقل الموظفون إلى العمل ويُدفع الضرائب في مكان آخر.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الأحكام المسبقة</strong>
                </td>
                <td className={classes.td}>تصورات سلبية عن مجموعة من الناس.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الجندر</strong>
                </td>
                <td className={classes.td}>
                  الجنس المبني اجتماعياً (على عكس البيولوجي).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>نظام الجندر</strong>
                </td>
                <td className={classes.td}>
                  نظام سلطة حيث يعلو الذكوري على الأنثوي (هيردمان).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>معامل جيني</strong>
                </td>
                <td className={classes.td}>مقياس لفروق الدخل في بلد ما.</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>مجتمع الميم عين</strong>
                </td>
                <td className={classes.td}>
                  مظلة: مثليون جنسياً، مزدوجو الميول، متحولون جنسياً، كوير، بين
                  الجنسين.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>المعيارية المغايرة</strong>
                </td>
                <td className={classes.td}>
                  المعيار أن الجميع مغايرون جنسياً ويشكلون عائلة مع الجنس الآخر.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الفصل الأفقي بين الجنسين</strong>
                </td>
                <td className={classes.td}>
                  يعمل الرجال والنساء في مهن/قطاعات مختلفة.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الأقليات الوطنية</strong>
                </td>
                <td className={classes.td}>
                  اليهود، الغجر/الروما، السويديون الفنلنديون، السامي، سكان وادي
                  تورن.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الأعراف</strong>
                </td>
                <td className={classes.td}>
                  قواعد غير مكتوبة لكيفية توقعنا أن نكون ونتصرف.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>كوير</strong>
                </td>
                <td className={classes.td}>
                  تعبيرات تتحدى معايير الجندر والجنسانية.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>التفاوت الإقليمي</strong>
                </td>
                <td className={classes.td}>
                  فروق بين المناطق في النمو ومستوى المعيشة والخدمات.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>السياسة الإقليمية</strong>
                </td>
                <td className={classes.td}>
                  سياسة لخلق ظروف متكافئة في جميع أنحاء البلاد.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الفقر النسبي</strong>
                </td>
                <td className={classes.td}>
                  مستوى اقتصادي أدنى من المتوسط في المجتمع.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الفصل</strong>
                </td>
                <td className={classes.td}>
                  تعيش المجموعات منفصلة (مثل الفصل السكني).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>القوالب النمطية</strong>
                </td>
                <td className={classes.td}>
                  صور مبسطة وغالبًا غير صحيحة عن مجموعة.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>النظام الهيكلي للسلطة</strong>
                </td>
                <td className={classes.td}>
                  السلطة على مستوى المجموعة (مثل تفوق الرجال على النساء
                  كمجموعة).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>المعيار الحضري</strong>
                </td>
                <td className={classes.td}>
                  المدينة هي المعيار، والريف هو الانحراف.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>الفصل العمودي بين الجنسين</strong>
                </td>
                <td className={classes.td}>
                  عدد أقل من النساء في المناصب العليا.
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>التمييز القيمي</strong>
                </td>
                <td className={classes.td}>
                  المهن التي تهيمن عليها النساء لها رواتب أقل من المهن التي
                  يهيمن عليها الرجال.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
