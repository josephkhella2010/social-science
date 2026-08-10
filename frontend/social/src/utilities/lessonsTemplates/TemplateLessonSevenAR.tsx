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
    paddingRight: "20px",
    position: "relative",
    "&:before": {
      content: '"•"',
      position: "absolute",
      right: 0,
      color: "#2c6e9c",
    },
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

export default function TemplateLessonSevenAR() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>الفصل السابع: 7- كيف تُدار البلدية</h1>
      <p className={classes.subtitle}>
        ملخص شامل مع الأسئلة والتحليل والنقاش والمفاهيم الأساسية
      </p>

      {/* ===== 1. الحكم الذاتي المحلي ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>١. الحكم الذاتي المحلي</h2>
        <p className={classes.paragraph}>
          الحكم الذاتي المحلي محمي بموجب الدستور السويدي (الفصل ١، المادة ١ من
          قانون الحكم) ويعتبر جزءًا أساسيًا من نظام الحكم الديمقراطي، بنفس أهمية
          المستوى الوطني. هناك ٢٩٠ بلدية و٢١ إقليمًا يديرون العديد من القضايا
          المهمة.
        </p>

        <h3 className={classes.subHeading}>ماذا يعني الحكم الذاتي؟</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            للبلديات والأقاليم الحق في تقرير شؤونها بنفسها ضمن إطار القوانين
            التي يسنها البرلمان.
          </li>
          <li className={classes.listItem}>
            تنتخب ممثليها في انتخابات ديمقراطية.
          </li>
          <li className={classes.listItem}>تحدد معدل الضريبة الخاص بها.</li>
          <li className={classes.listItem}>
            توزع مواردها بنفسها على مختلف الأنشطة.
          </li>
          <li className={classes.listItem}>
            <strong>ملاحظة مهمة:</strong> الحكم الذاتي <em>لا</em> يعني أن
            البلديات يمكنها فعل ما تشاء – فهي ملزمة باتباع القوانين.
          </li>
        </ul>

        <h3 className={classes.subHeading}>
          ما الذي يجب على البلديات فعله؟ (المهام الإلزامية)
        </h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            حوالي <strong>٨٠٪</strong> من إيرادات البلديات تذهب للأنشطة المنصوص
            عليها قانونيًا.
          </li>
          <li className={classes.listItem}>
            <strong>قانون الرعاية الاجتماعية (SoL):</strong> ينظم رعاية المسنين،
            دعم المعيشة، والخدمات الاجتماعية الأخرى.
          </li>
          <li className={classes.listItem}>
            <strong>قانون التعليم:</strong> ينظم رعاية الأطفال، رياض الأطفال،
            المدارس الابتدائية والثانوية.
          </li>
          <li className={classes.listItem}>
            <strong>قانون التخطيط والبناء (PBL):</strong> ينظم كيفية استخدام
            البلدية للأراضي وتخطيط المباني.
          </li>
          <li className={classes.listItem}>
            <strong>قانون البلديات (KL):</strong> يحدد القواعد والالتزامات
            العامة للبلديات.
          </li>
        </ul>

        <h3 className={classes.subHeading}>
          ما الذي يمكن للبلديات فعله إذا أرادت؟ (المهام الطوعية)
        </h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>خدمات المكتبات</li>
          <li className={classes.listItem}>
            الأنشطة الثقافية كالمسارح ودور الأوبرا
          </li>
          <li className={classes.listItem}>حمامات السباحة والمنتجعات الصحية</li>
          <li className={classes.listItem}>مراكز الشباب والأنشطة الترفيهية</li>
          <li className={classes.listItem}>الحدائق والمناطق الخضراء</li>
          <li className={classes.listItem}>دعم الجمعيات والمنشآت الرياضية</li>
        </ul>

        <h3 className={classes.subHeading}>ما الذي يُحظر على البلديات فعله</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <strong>لا</strong> يجوز للبلديات دعم الشركات الفردية بطريقة تشوه
            المنافسة.
          </li>
          <li className={classes.listItem}>
            هذا محظور بموجب كل من القانون السويدي وقواعد الاتحاد الأوروبي بشأن
            المساعدات الحكومية.
          </li>
          <li className={classes.listItem}>
            يمكن للبلدية خلق ظروف عامة جيدة للأعمال (مثل البنية التحتية، أراضي
            البناء).
          </li>
        </ul>
      </section>

      {/* ===== 2. تنظيم البلدية والسياسة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٢. تنظيم البلدية والسياسة</h2>

        <h3 className={classes.subHeading}>المجلس البلدي ("برلمان" البلدية)</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>هو أعلى هيئة قرار في البلدية.</li>
          <li className={classes.listItem}>
            ينتخبه سكان البلدية في الانتخابات البلدية كل أربع سنوات.
          </li>
          <li className={classes.listItem}>
            يحدد الأهداف العامة للبلدية والميزانية ومعدل الضريبة.
          </li>
          <li className={classes.listItem}>
            اجتماعاته علنية، مما يتيح للجمهور الإطلاع على أعماله.
          </li>
        </ul>

        <h3 className={classes.subHeading}>
          اللجان ("الهيئات التنفيذية" للبلدية)
        </h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            مجموعات سياسية مسؤولة عن مجالات نشاط محددة.
          </li>
          <li className={classes.listItem}>
            أمثلة: لجنة الرعاية الاجتماعية، لجنة التعليم، اللجنة الفنية.
          </li>
          <li className={classes.listItem}>
            <strong>لجنتان إلزاميتان:</strong> اللجنة التنفيذية للبلدية ولجنة
            الانتخابات.
          </li>
          <li className={classes.listItem}>
            اجتماعات اللجان ليست علنية بشكل عام، لكن المحاضر تُنشر.
          </li>
          <li className={classes.listItem}>
            بعض القضايا (التي تخضع للسرية، ممارسة السلطة العامة) تُقرر خلف
            الأبواب المغلقة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>
          اللجنة التنفيذية للبلدية ("حكومة" البلدية)
        </h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            هي اللجنة الأكثر أهمية – "حكومة موحدة".
          </li>
          <li className={classes.listItem}>
            تتكون من سياسيين من جميع الأحزاب.
          </li>
          <li className={classes.listItem}>
            رئيسها هو السياسي الأبرز في البلدية ويمثل حزب الأغلبية.
          </li>
          <li className={classes.listItem}>
            <strong>المهام الرئيسية:</strong>
            <ul className={classes.list}>
              <li className={classes.listItem}>التخطيط المالي والمادي.</li>
              <li className={classes.listItem}>
                إعداد مقترح الميزانية للمجلس البلدي.
              </li>
              <li className={classes.listItem}>
                تحديد أولويات طلبات اللجان المختلفة.
              </li>
            </ul>
          </li>
        </ul>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>المجلس البلدي</th>
                <th className={classes.th}>اللجنة التنفيذية للبلدية</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>أعلى هيئة قرار في البلدية</td>
                <td className={classes.td}>اللجنة الأهم، "حكومة" البلدية</td>
              </tr>
              <tr>
                <td className={classes.td}>يوجد في جميع البلديات الـ ٢٩٠</td>
                <td className={classes.td}>يوجد في جميع البلديات</td>
              </tr>
              <tr>
                <td className={classes.td}>ينتخب مباشرة من قبل السكان</td>
                <td className={classes.td}>يعين من قبل المجلس البلدي</td>
              </tr>
              <tr>
                <td className={classes.td}>يحدد الميزانية والأهداف والضرائب</td>
                <td className={classes.td}>يقترح الميزانية وينفذ القرارات</td>
              </tr>
              <tr>
                <td className={classes.td}>اجتماعاته علنية</td>
                <td className={classes.td}>اجتماعاته ليست علنية عادةً</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.subHeading}>
          موظفو الخدمة المدنية ("المسؤولون" في البلدية)
        </h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            موظفون خبراء غير سياسيين (مثل مدير الرعاية الاجتماعية، مدير
            الإدارة).
          </li>
          <li className={classes.listItem}>
            يعدون القضايا ويقدمون المعلومات للسياسيين.
          </li>
          <li className={classes.listItem}>
            لا يشاركون في القرارات، لكن لهم تأثير كبير من خلال خبراتهم.
          </li>
          <li className={classes.listItem}>
            <strong>"حكم المسؤولين":</strong> نقد مفاده أن المسؤولين يحكمون
            فعليًا بينما السياسيون يتخذون القرارات رسميًا.
          </li>
        </ul>

        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>سياسي</th>
                <th className={classes.th}>موظف خدمة مدنية</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>منتخب من قبل السكان</td>
                <td className={classes.td}>موظف في البلدية</td>
              </tr>
              <tr>
                <td className={classes.td}>يتخذ القرارات السياسية</td>
                <td className={classes.td}>يحضر وينفذ القرارات</td>
              </tr>
              <tr>
                <td className={classes.td}>يمثل حزبًا وأيديولوجية</td>
                <td className={classes.td}>غير سياسي وموضوعي</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  مثال: رئيس لجنة الرعاية الاجتماعية
                </td>
                <td className={classes.td}>مثال: مدير الرعاية الاجتماعية</td>
              </tr>
              <tr>
                <td className={classes.td}>ينتخب لفترة ولاية</td>
                <td className={classes.td}>لديه وظيفة دائمة</td>
              </tr>
              <tr>
                <td className={classes.td}>يمكن استبداله بعد الانتخابات</td>
                <td className={classes.td}>
                  يبقى بغض النظر عن الأغلبية السياسية
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.subHeading}>الشركات البلدية</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            يمكن للبلديات امتلاك شركات مساهمة لإدارة بعض الأنشطة بكفاءة أكبر.
          </li>
          <li className={classes.listItem}>
            أمثلة: الخدمات الفنية، شركات الإسكان، شركات الطاقة.
          </li>
          <li className={classes.listItem}>
            يتم تعيين أعضاء مجالس الإدارة من قبل المجلس البلدي.
          </li>
          <li className={classes.listItem}>
            يتطلب قانون البلديات الشفافية في الشركات البلدية.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الحكم السياسي</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            تاريخيًا: إما الكتل الاشتراكية أو البرجوازية كانت تحكم.
          </li>
          <li className={classes.listItem}>
            بعد عام ٢٠٠٦: أصبحت <strong>التعاونات跨قطاعية</strong> أكثر شيوعًا.
          </li>
          <li className={classes.listItem}>
            مثال: بعد عام ٢٠٢٢، تعاون حزب العمال (S) وحزب الوسط (M) في حوالي ٥٠
            بلدية. في ديغرفوش، يحكم حزب العمال (S) وحزب اليسار (V) معًا.
          </li>
          <li className={classes.listItem}>
            <strong>الكيمياء الشخصية</strong> والتركيز على القضايا المحلية
            غالبًا ما يكونان أهم من السياسة الوطنية.
          </li>
          <li className={classes.listItem}>
            مقولة:{" "}
            <em>
              "في البلدية، نعمل من أجل مصلحة البلدية ونضع الخلافات السياسية
              الوطنية جانبًا."
            </em>
          </li>
        </ul>
      </section>

      {/* ===== 3. اقتصاد البلديات ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٣. اقتصاد البلديات</h2>

        <h3 className={classes.subHeading}>إيرادات البلديات</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <strong>الضريبة البلدية:</strong> أكبر مصدر للإيرادات (حوالي ٧٠٪).
            يدفع السكان في المتوسط حوالي ٣٢٪ من دخلهم كضريبة بلدية.
          </li>
          <li className={classes.listItem}>
            <strong>الإعانات الحكومية:</strong> أموال من الدولة، سواء كانت عامة
            أو مخصصة.
          </li>
          <li className={classes.listItem}>
            <strong>الرسوم والمبيعات:</strong> رسوم رعاية الأطفال، رعاية
            المسنين، تراخيص البناء، مواقف السيارات، والنقل العام.
          </li>
        </ul>

        <h3 className={classes.subHeading}>
          نظام توزيع الإيرادات الضريبية ("ضريبة روبن هود")
        </h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <strong>الهدف:</strong> خلق ظروف اقتصادية متكافئة لجميع البلديات.
          </li>
          <li className={classes.listItem}>
            <strong>الآلية:</strong> البلديات ذات القدرة الضريبية العالية تدفع
            رسومًا للدولة. تقوم الدولة بتوزيع هذه الأموال على البلديات ذات
            القدرة الضريبية المنخفضة.
          </li>
          <li className={classes.listItem}>
            مثال عام ٢٠٢٤: دانديريد دفعت أكثر (٢٦٬٢٤٠ كرونًا لكل ساكن). دوروتيا
            تلقت أكثر (٣٦٬٢١٢ كرونًا لكل ساكن). مالمو تلقت أكثر إجمالاً (٦٫٣
            مليار كرون).
          </li>
        </ul>

        <h3 className={classes.subHeading}>
          دراسة حالة: ليوسنارسبيرج ضد ليدينغو
        </h3>

        <p className={classes.paragraph}>
          <strong>
            إيوا-لينا يوهانسون (S)، ليوسنارسبيرج (متلقية للإعانة):
          </strong>
        </p>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            النظام يعوض غياب الدولة في المناطق الريفية.
          </li>
          <li className={classes.listItem}>
            البلديات الصغيرة تفتقر إلى المؤسسات الحكومية والجامعات والشركات
            المتخصصة.
          </li>
          <li className={classes.listItem}>
            الشباب المتعلمون يضطرون للانتقال إلى مدن أكبر.
          </li>
          <li className={classes.listItem}>
            النظام يخلق ظروفًا لتقديم الرعاية الاجتماعية والخدمات.
          </li>
        </ul>

        <p className={classes.paragraph}>
          <strong>دانيال كالينفورس (M)، ليدينغو (دافعة للرسوم):</strong>
        </p>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            "كل خامس كرونة يدفعها سكان ليدينغو كضريبة بلدية تُرسل بعيدًا."
          </li>
          <li className={classes.listItem}>
            النظام غير عادل – سكان ليدينغو المجتهدون يُعاقبون.
          </li>
          <li className={classes.listItem}>
            النظام يقوض الحوافز للبلديات لتصبح أكثر كفاءة اقتصاديًا.
          </li>
          <li className={classes.listItem}>
            "البلدية التي تُساء إدارتها تُكافأ فورًا بإعانات جديدة."
          </li>
        </ul>
      </section>

      {/* ===== 4. تحديات البلديات ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٤. تحديات البلديات</h2>

        <h3 className={classes.subHeading}>تحديات البلديات الصغيرة</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            أصغر ١٠٠ بلدية في السويد <strong>انخفض</strong> عدد سكانها في
            المتوسط منذ عام ٢٠٠٠.
          </li>
          <li className={classes.listItem}>
            من المتوقع أن يستمر هذا الاتجاه حتى عام ٢٠٤٠.
          </li>
          <li className={classes.listItem}>صعوبة في جذب العمالة والشركات.</li>
          <li className={classes.listItem}>
            تطلب زيادة التعاون (اتحادات بلدية، لجان مشتركة) وتقليل التفاصيل
            المفروضة من الدولة.
          </li>
          <li className={classes.listItem}>
            <strong>مثال:</strong> قضية حماية الشواطئ – أريبلوغ لديها ٣ كم من
            الشاطئ لكل ساكن لكن لا يُسمح لها بالبناء بالقرب من الماء لجذب السكان
            الجدد.
          </li>
        </ul>

        <h3 className={classes.subHeading}>دور الأقاليم</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>السويد لديها ٢١ إقليمًا.</li>
          <li className={classes.listItem}>
            <strong>المهمة الرئيسية:</strong> الرعاية الصحية (إدارة المستشفيات
            ومراكز الرعاية الصحية، طب الأسنان).
          </li>
          <li className={classes.listItem}>
            <strong>مهام أخرى:</strong> النقل العام، الثقافة، التنمية الإقليمية.
          </li>
          <li className={classes.listItem}>
            تُدار الأقاليم بطريقة مشابهة من خلال المجالس الإقليمية واللجان
            التنفيذية الإقليمية.
          </li>
        </ul>
      </section>

      {/* ===== 5. الأسئلة والأجوبة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٥. أسئلة حول النص</h2>

        {/* سؤال 1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ١. ماذا يعني الحكم الذاتي المحلي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الحكم الذاتي المحلي يعني أن البلديات والأقاليم لها الحق في تقرير
              شؤونها بنفسها ضمن إطار القوانين التي يسنها البرلمان. وهو محمي
              دستوريًا في قانون الحكم (الفصل ١، المادة ١).
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                تنتخب ممثليها في انتخابات ديمقراطية.
              </li>
              <li className={classes.listItem}>تحدد معدل الضريبة الخاص بها.</li>
              <li className={classes.listItem}>
                توزع مواردها بنفسها على الأنشطة المختلفة.
              </li>
            </ul>
            <p className={classes.paragraph}>
              ومع ذلك، الحكم الذاتي ليس مطلقًا – البلديات ملزمة باتباع القوانين
              ولا يمكنها فعل ما تشاء أو ترك ما هو منصوص عليه قانونيًا.
            </p>
          </div>
        </div>

        {/* سؤال 2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ٢. اذكر بعض القوانين الملزمة للبلديات
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <strong>قانون الرعاية الاجتماعية (SoL):</strong> ينظم رعاية
                المسنين، دعم المعيشة، والخدمات الاجتماعية الأخرى.
              </li>
              <li className={classes.listItem}>
                <strong>قانون التعليم:</strong> ينظم رعاية الأطفال، رياض
                الأطفال، المدارس الابتدائية والثانوية.
              </li>
              <li className={classes.listItem}>
                <strong>قانون التخطيط والبناء (PBL):</strong> ينظم استخدام
                الأراضي وتخطيط المباني.
              </li>
              <li className={classes.listItem}>
                <strong>قانون البلديات (KL):</strong> يحدد القواعد العامة
                والالتزامات للبلديات.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ٣. أعط أمثلة على الأنشطة الطوعية للبلديات
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li className={classes.listItem}>خدمات المكتبات</li>
              <li className={classes.listItem}>
                الأنشطة الثقافية كالمسارح ودور الأوبرا
              </li>
              <li className={classes.listItem}>
                حمامات السباحة والمنتجعات الصحية
              </li>
              <li className={classes.listItem}>
                مراكز الشباب والأنشطة الترفيهية
              </li>
              <li className={classes.listItem}>الحدائق والمناطق الخضراء</li>
              <li className={classes.listItem}>
                دعم الجمعيات والمنشآت الرياضية
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ٤. متى يجوز للبلدية دعم شركة ومتى يُحظر ذلك؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>لا</strong> يجوز للبلدية دعم الشركات الفردية بطريقة تشوه
              المنافسة. هذا محظور بموجب القانون السويدي وقواعد الاتحاد الأوروبي
              بشأن المساعدات الحكومية.
            </p>
            <p className={classes.paragraph}>يمكن للبلدية بدلاً من ذلك:</p>
            <ul className={classes.list}>
              <li className={classes.listItem}>خلق ظروف عامة جيدة للأعمال.</li>
              <li className={classes.listItem}>
                تقديم دعم عام ينطبق بالتساوي على جميع الشركات.
              </li>
              <li className={classes.listItem}>
                في حالات استثنائية، تقديم دعم لإنقاذ الوظائف في الأزمات الحادة،
                لكن هذا منظم بشكل صارم.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ٥. ما الفرق بين اللجنة التنفيذية للبلدية والمجلس البلدي؟
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>المجلس البلدي</th>
                    <th className={classes.th}>اللجنة التنفيذية للبلدية</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>أعلى هيئة قرار في البلدية</td>
                    <td className={classes.td}>
                      اللجنة الأهم، "حكومة" البلدية
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>ينتخب مباشرة من قبل السكان</td>
                    <td className={classes.td}>يعين من قبل المجلس البلدي</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      يحدد الميزانية والأهداف والضرائب
                    </td>
                    <td className={classes.td}>
                      يقترح الميزانية وينفذ القرارات
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>اجتماعاته علنية</td>
                    <td className={classes.td}>اجتماعاته ليست علنية عادةً</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* سؤال 6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ٦. ما الفرق بين السياسي وموظف الخدمة المدنية؟
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>سياسي</th>
                    <th className={classes.th}>موظف خدمة مدنية</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>منتخب من قبل السكان</td>
                    <td className={classes.td}>موظف في البلدية</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>يتخذ القرارات السياسية</td>
                    <td className={classes.td}>يحضر وينفذ القرارات</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>يمثل حزبًا سياسيًا</td>
                    <td className={classes.td}>غير سياسي وموضوعي</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      مثال: رئيس لجنة الرعاية الاجتماعية
                    </td>
                    <td className={classes.td}>
                      مثال: مدير الرعاية الاجتماعية
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>ينتخب لفترة ولاية</td>
                    <td className={classes.td}>لديه وظيفة دائمة</td>
                  </tr>
                  <tr>
                    <td className={classes.td}>يمكن استبداله بعد الانتخابات</td>
                    <td className={classes.td}>
                      يبقى بغض النظر عن الأغلبية السياسية
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={classes.paragraph}>
              لموظفي الخدمة المدنية تأثير كبير من خلال خبراتهم – وهذا ما يُسمى
              أحيانًا <strong>"حكم المسؤولين"</strong>.
            </p>
          </div>
        </div>

        {/* سؤال 7 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ٧. أعط مثالاً على ممارسة السلطة العامة من قبل لجنة الرعاية
            الاجتماعية
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              ممارسة السلطة العامة هي عندما تتخذ البلدية قرارًا يؤثر على حقوق أو
              التزامات المواطنين الأفراد.
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                قرار بشأن تراخيص الكحول للمطاعم
              </li>
              <li className={classes.listItem}>
                قرار بشأن دعم المعيشة (المساعدة المالية)
              </li>
              <li className={classes.listItem}>
                قرار بشأن احتجاز الأطفال قسرًا (LVU)
              </li>
              <li className={classes.listItem}>
                قرار بشأن خدمات رعاية المسنين كالرعاية المنزلية أو السكن الخاص
              </li>
            </ul>
            <p className={classes.paragraph}>
              غالبًا ما تُعالج هذه القضايا خلف الأبواب المغلقة بسبب السرية.
            </p>
          </div>
        </div>

        {/* سؤال 8 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>٨. ما هي إيرادات البلديات؟</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <strong>الضريبة البلدية:</strong> أكبر مصدر للإيرادات (حوالي
                ٧٠٪).
              </li>
              <li className={classes.listItem}>
                <strong>الإعانات الحكومية:</strong> أموال من الدولة، عامة أو
                مخصصة.
              </li>
              <li className={classes.listItem}>
                <strong>الرسوم والمبيعات:</strong> رسوم رعاية الأطفال، رعاية
                المسنين، تراخيص البناء، مواقف السيارات، إلخ.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 9 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ٩. ما هي المهمة الرئيسية للأقاليم؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              المهمة الرئيسية للأقاليم هي <strong>الرعاية الصحية</strong>.
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                إدارة المستشفيات ومراكز الرعاية الصحية
              </li>
              <li className={classes.listItem}>المسؤولية عن طب الأسنان</li>
              <li className={classes.listItem}>
                تخطيط وتنظيم الرعاية الصحية في الإقليم
              </li>
            </ul>
            <p className={classes.paragraph}>
              بالإضافة إلى ذلك، الأقاليم مسؤولة عن:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>النقل العام</li>
              <li className={classes.listItem}>الثقافة</li>
              <li className={classes.listItem}>التنمية الإقليمية</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 6. أسئلة التحليل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٦. أسئلة التحليل</h2>

        {/* A1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            أ١. أيام انتخاب منفصلة للبرلمان والبلديات – الإيجابيات والسلبيات
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>إيجابيات الأيام الانتخابية المنفصلة:</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <strong>التركيز المحلي:</strong> يركز الناخبون على القضايا
                المحلية بدلاً من السياسة الوطنية.
              </li>
              <li className={classes.listItem}>
                <strong>انتخابات بلدية أقل تأثرًا بالسياسة الوطنية:</strong> لا
                تصبح الانتخابات البلدية استفتاءً وطنيًا على الحكومة.
              </li>
              <li className={classes.listItem}>
                <strong>الاستقلالية:</strong> تصبح البلديات أقل اعتمادًا على
                تقلبات السياسة الوطنية.
              </li>
              <li className={classes.listItem}>
                <strong>اهتمام إعلامي أكبر:</strong> يمكن لوسائل الإعلام المحلية
                التركيز على القضايا البلدية.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>سلبيات الأيام الانتخابية المنفصلة:</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <strong>انخفاض المشاركة:</strong> عدد أقل من الناخبين يصوتون
                عندما تكون الانتخابات بلدية فقط (قبل عام ١٩٧٠، كانت المشاركة في
                الانتخابات البلدية أقل بكثير).
              </li>
              <li className={classes.listItem}>
                <strong>تكاليف أعلى:</strong> تنظيم انتخابات منفصلة أكثر تكلفة.
              </li>
              <li className={classes.listItem}>
                <strong>نقاش سياسي أقل:</strong> بدون السياسة الوطنية كمحرك، يقل
                الاهتمام.
              </li>
              <li className={classes.listItem}>
                <strong>عدم الاستقرار:</strong> يمكن أن تتغير الأغلبيات السياسية
                بشكل متكرر، مما يعيق التخطيط طويل المدى.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> الأيام المنفصلة تعطي ديمقراطية محلية
              أكثر لكنها تخاطر بانخفاض المشاركة. اختارت السويد أيامًا انتخابية
              مشتركة عام ١٩٧٠ تحديدًا لزيادة المشاركة في الانتخابات البلدية.
            </p>
          </div>
        </div>

        {/* A2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            أ٢. التعاون跨قطاعي – الإيجابيات والسلبيات
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الإيجابيات:</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <strong>الاستقرار:</strong> أغلبية أوسع تعطي قرارات أكثر أمانًا
                وقابلية للتنبؤ.
              </li>
              <li className={classes.listItem}>
                <strong>صراع أقل:</strong> يُجبرون على الاستماع لبعضهم البعض
                وإيجاد حلول وسط.
              </li>
              <li className={classes.listItem}>
                <strong>التركيز المحلي:</strong> يضعون الخلافات الوطنية جانبًا
                ويعملون من أجل "مصلحة البلدية".
              </li>
              <li className={classes.listItem}>
                <strong>تقليل خطر المساومات:</strong> يقلل من خطر استغلال
                الأحزاب الفردية لدورها كحزب توازن.
              </li>
              <li className={classes.listItem}>
                <strong>تعزيز الديمقراطية:</strong> يظهر أن السياسة يمكن أن تكون
                حول القضايا والتعاون.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>السلبيات:</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <strong>الغموض بالنسبة للناخبين:</strong> يصوت الناخبون لحزب
                لكنهم يحصلون على حل وسط مع الخصوم.
              </li>
              <li className={classes.listItem}>
                <strong>معارضة ضعيفة:</strong> عندما تتعاون الأحزاب الكبيرة،
                تضعف قدرة المعارضة على الرقابة.
              </li>
              <li className={classes.listItem}>
                <strong>انقسام داخلي:</strong> قد يصبح أعضاء الحزب غير راضين
                عندما يتعاون حزبهم مع خصوم تقليديين.
              </li>
              <li className={classes.listItem}>
                <strong>نقاش سياسي أقل:</strong> خيارات أقل وضوحًا قد تقلل من
                المشاركة السياسية.
              </li>
              <li className={classes.listItem}>
                <strong>خطر "سياسة الممرات":</strong> تُتخذ القرارات المهمة في
                مجموعات صغيرة خلف الأبواب المغلقة.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>مثال:</strong> بعد عام ٢٠٢٢، تعاون حزب العمال وحزب الوسط
              في حوالي ٥٠ بلدية، وفي ديغرفوش يحكم حزب العمال وحزب اليسار معًا.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 7. أسئلة النقاش ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٧. أسئلة النقاش</h2>

        {/* D1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            د١. هل يجب دعم حمامات السباحة/المسارح من الضرائب؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الحجج المؤيدة للدعم الضريبي:</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <strong>المساواة:</strong> يجب أن يكون للجميع القدرة على
                المشاركة في الأنشطة الثقافية والترفيهية.
              </li>
              <li className={classes.listItem}>
                <strong>الصحة العامة:</strong> السباحة مهمة للصحة، خاصة لمهارات
                السباحة لدى الأطفال وسلامتهم.
              </li>
              <li className={classes.listItem}>
                <strong>المنفعة العامة:</strong> الثقافة والرياضة تخلقان أماكن
                للالتقاء وتعزز التماسك المجتمعي.
              </li>
              <li className={classes.listItem}>
                <strong>استثمار للمستقبل:</strong> الأطفال الذين يتعلمون السباحة
                ويمارسون الثقافة يصبحون أفرادًا آمنين ومتطورين.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>الحجج المعارضة للدعم الضريبي:</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <strong>غير عادل:</strong> أولئك الذين لا يسبحون أو يذهبون إلى
                المسرح يدفعون مقابل ترفيه الآخرين.
              </li>
              <li className={classes.listItem}>
                <strong>الكفاءة:</strong> يمكن للسوق تشغيل هذه الأنشطة بكفاءة
                أكبر.
              </li>
              <li className={classes.listItem}>
                <strong>الأولوية:</strong> يجب أن تذهب أموال البلدية إلى الأنشطة
                الأساسية مثل التعليم ورعاية المسنين.
              </li>
              <li className={classes.listItem}>
                <strong>المسؤولية الشخصية:</strong> يمكن للأفراد اختيار ما
                ينفقون أموالهم عليه.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> تختار معظم البلديات دعم هذه الأنشطة
              لضمان إمكانية الوصول، لكن درجة الدعم تختلف.
            </p>
          </div>
        </div>

        {/* D2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            د٢. ما الذي قد يدفعك للانضمام إلى حزب سياسي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>ما الذي يدفع الشباب للمشاركة:</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                يرون شيئًا ملموسًا في بلديتهم يريدون تغييره.
              </li>
              <li className={classes.listItem}>
                لديهم رأي شخصي قوي ويريدون التأثير.
              </li>
              <li className={classes.listItem}>
                تمت دعوتهم أو تشجيعهم من قبل شخص ما.
              </li>
              <li className={classes.listItem}>
                يريدون إحداث فرق في المجتمع والشعور بالمعنى.
              </li>
              <li className={classes.listItem}>
                يرون أن السياسة تؤثر فعليًا على حياتهم اليومية.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>عوائق المشاركة:</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                الشعور بأن السياسيين "لا يستمعون" للشباب.
              </li>
              <li className={classes.listItem}>
                ضيق الوقت والتنافس مع أنشطة أخرى.
              </li>
              <li className={classes.listItem}>
                الشعور بأن صوتهم لا يحدث فرقًا.
              </li>
              <li className={classes.listItem}>
                السياسة الحزبية تبدو مليئة بالصراعات ومملة.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> القضايا المحلية الملموسة والاتصالات
              الشخصية غالبًا ما تكون أكثر أهمية من الرؤى الأيديولوجية الكبيرة.
            </p>
          </div>
        </div>

        {/* D3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            د٣. هل يجب أن يُسمح للبلدية بدعم الشركات الخاصة لمنع البطالة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>ما يقوله القانون:</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <strong>قواعد الاتحاد الأوروبي بشأن المساعدات الحكومية:</strong>
                تحظر الدعم العام للشركات الفردية الذي يشوه المنافسة.
              </li>
              <li className={classes.listItem}>
                <strong>القانون السويدي:</strong> لا يجوز للبلديات أن تصبح مالكة
                أو تمنح مزايا خاصة لشركات فردية.
              </li>
              <li className={classes.listItem}>
                <strong>استثناءات:</strong> في حالات الأزمات الحادة، قد تسمح
                الدولة بـ "دعم الأزمات".
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>ما يمكن للبلدية فعله:</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                خلق ظروف عامة (طرق، أراضي، إنترنت عريض).
              </li>
              <li className={classes.listItem}>
                تقديم خدمات استشارية ودعم عامة للجميع.
              </li>
              <li className={classes.listItem}>
                استخدام المشتريات البلدية لدعم الشركات المحلية.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>ما لا يمكن للبلدية فعله:</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                منح شركة إيجارًا أو ضرائب أقل من غيرها.
              </li>
              <li className={classes.listItem}>إقراض أموال لشركة محددة.</li>
              <li className={classes.listItem}>أن تصبح شريكًا في شركة خاصة.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 8. المفاهيم الأساسية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٨. المفاهيم الأساسية</h2>

        <ul className={classes.list}>
          <li className={classes.listItem}>
            <span className={classes.keyword}>الحكم الذاتي المحلي:</span> حق
            البلديات والأقاليم في تقرير شؤونها بنفسها ضمن إطار القانون. محمي
            دستوريًا.
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>الاتحاد البلدي:</span> منظمة
            تعاونية بين عدة بلديات لحل المهام المشتركة، مثل خدمات الطوارئ أو
            إدارة النفايات.
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>قانون البلديات:</span> القانون
            (KL) الذي ينظم كيفية إدارة البلديات والأقاليم.
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>المجلس البلدي:</span> أعلى هيئة
            قرار في البلدية، ينتخب مباشرة من قبل السكان. يمثل "البرلمان" على
            المستوى البلدي.
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>اللجنة التنفيذية للبلدية:</span>{" "}
            أهم لجنة في البلدية، تعمل كـ "حكومة". مسؤولة عن الاقتصاد والتخطيط
            وتنفيذ قرارات المجلس البلدي.
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>ممارسة السلطة العامة:</span>{" "}
            قرارات تؤثر على حقوق أو التزامات المواطنين الأفراد، مثل قرارات
            تراخيص الكحول أو دعم المعيشة.
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>لجنة:</span> مجموعة سياسية مسؤولة
            عن مجال نشاط محدد، مثل لجنة الرعاية الاجتماعية أو لجنة التعليم.
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>سياسي:</span> شخص منتخب يتخذ
            قرارات سياسية. ينتخب من قبل السكان في الانتخابات.
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>المجلس الإقليمي:</span> أعلى هيئة
            قرار في الإقليم، يماثل المجلس البلدي على المستوى الإقليمي.
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>اللجنة التنفيذية الإقليمية:</span>
            اللجنة القيادية في الإقليم، تماثل اللجنة التنفيذية للبلدية على
            المستوى الإقليمي.
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>التمثيلية:</span> مبدأ أن
            السياسيين المنتخبين يمثلون ويعملون من أجل مصلحة السكان.
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>القدرة الضريبية:</span> مقياس
            لمتوسط الدخل الخاضع للضريبة للسكان في بلدية/إقليم. قدرة ضريبية عالية
            = سكان أكثر ثراءً.
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>
              إعانة توزيع الإيرادات الضريبية:
            </span>
            أموال توزع من البلديات الغنية إلى الفقيرة لخلق ظروف اقتصادية
            متكافئة. تُسمى "ضريبة روبن هود".
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>الإعانات الحكومية:</span> أموال من
            الدولة للبلديات/الأقاليم، إما عامة (حرة) أو مخصصة لأغراض محددة.
          </li>
          <li className={classes.listItem}>
            <span className={classes.keyword}>موظف خدمة مدنية:</span> موظف مسؤول
            يحضر وينفذ قرارات السياسيين. غير سياسي وخبير.
          </li>
        </ul>
      </section>
    </div>
  );
}
