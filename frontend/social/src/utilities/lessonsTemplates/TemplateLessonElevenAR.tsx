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

export default function TemplateLessonElevenAR() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        الفصل 11: مجتمع الرفاهية (الرعاية الاجتماعية)
      </h1>
      <p className={classes.subtitle}>
        ملخص شامل مع الأسئلة والتحليل والمناقشة والمفاهيم الأساسية
      </p>

      {/* ===== 1. نماذج الرفاهية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. نماذج الرفاهية</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم النماذج الرئيسية الثلاثة للرفاهية في العالم وفقًا لعالم
          الاجتماع السويدي غوستا إسبينغ أندرسن. الرفاهية تعني الجهود التي يبذلها
          المجتمع لمنح المواطنين الأمان الاقتصادي والخدمات الاجتماعية مثل
          الرعاية الصحية والتعليم ورعاية المسنين.
        </p>

        <h3 className={classes.subHeading}>ثلاثة نماذج للرفاهية</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>النموذج</th>
                <th className={classes.th}>الخصائص</th>
                <th className={classes.th}>أمثلة على الدول</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  <strong>1. النموذج المحافظ</strong>
                </td>
                <td className={classes.td}>
                  <ul className={classes.list}>
                    <li>الأسرة لها أهمية كبيرة في الرفاهية.</li>
                    <li>تتدخل الدولة فقط عندما لا تكفي الأسرة.</li>
                    <li>
                      الإعانات غالبًا ما تكون مشروطة بالحاجة وقائمة على العمل
                      (قائمة على التأمين).
                    </li>
                    <li>يحافظ على الفروق الطبقية والمكانة.</li>
                  </ul>
                </td>
                <td className={classes.td}>ألمانيا، فرنسا، النمسا، اليابان</td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>2. النموذج الليبرالي</strong>
                </td>
                <td className={classes.td}>
                  <ul className={classes.list}>
                    <li>دور الدولة ضئيل.</li>
                    <li>
                      يجب أن يحل السوق والمبادرات الخاصة احتياجات الرفاهية.
                    </li>
                    <li>
                      خدمات الرفاهية غالبًا ما تكون مشروطة بالحاجة وموجهة
                      للأفقر.
                    </li>
                    <li>ضرائب منخفضة وشبكة أمان ضعيفة.</li>
                  </ul>
                </td>
                <td className={classes.td}>
                  الولايات المتحدة، بريطانيا (إلى حد ما)، أستراليا
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  <strong>3. النموذج الديمقراطي الاجتماعي</strong>
                </td>
                <td className={classes.td}>
                  <ul className={classes.list}>
                    <li>إعانات عامة (شاملة) تشمل جميع المواطنين.</li>
                    <li>درجة عالية من إعادة التوزيع عبر الضرائب.</li>
                    <li>
                      تتحمل الدولة مسؤولية كبيرة عن رفاهية المواطنين من "المهد
                      إلى اللحد".
                    </li>
                    <li>الهدف هو تقليل التفاوتات وخلق المساواة.</li>
                  </ul>
                </td>
                <td className={classes.td}>
                  السويد، النرويج، الدنمارك، فنلندا
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== 2. نظام الرفاهية السويدي ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. نظام الرفاهية السويدي</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم كيفية بناء نظام الرفاهية السويدي لدعم المواطنين في مراحل
          الحياة المختلفة.
        </p>

        <h3 className={classes.subHeading}>سياسة الطفل والأسرة</h3>
        <ul className={classes.list}>
          <li>
            <strong>إعانة الطفل:</strong> إعانة عامة (لا تحتاج إلى اختبار) تُدفع
            لجميع العائلات التي لديها أطفال دون سن 16 عامًا.
          </li>
          <li>
            <strong>بدل الوالدين:</strong> يعوض فقدان الدخل عندما يكون الوالدان
            في المنزل مع أطفال صغار. يعتمد على الدخل (يعوض حوالي 80% من الراتب
            حتى حد معين).
          </li>
          <li>
            <strong>بدل الوالدين المؤقت (VAB):</strong> تعويض عندما يضطر
            الوالدان للبقاء في المنزل لرعاية أطفال مرضى.
          </li>
          <li>
            <strong>دعم النفقة:</strong> دعم مالي للوالدين الوحيدين.
          </li>
          <li>
            <strong>رعاية الأطفال المدعومة:</strong> روضة أطفال ومراكز ما بعد
            المدرسة برسوم محددة (حد أقصى للرسوم).
          </li>
        </ul>

        <h3 className={classes.subHeading}>سياسة سوق العمل</h3>
        <ul className={classes.list}>
          <li>
            <strong>مكتب العمل (Arbetsförmedlingen):</strong> مسؤول عن مطابقة
            الباحثين عن عمل مع الوظائف الشاغرة وتقديم الدعم للمجموعات التي تواجه
            صعوبة في الاندماج في سوق العمل (مثل الأشخاص ذوي الإعاقة، الوافدين
            الجدد، العاطلين عن العمل لفترة طويلة).
          </li>
          <li>
            <strong>صندوق البطالة (A-kassa):</strong> تعويض قائم على الدخل في
            حال البطالة. يتطلب عضوية واستيفاء شروط معينة (مثل العمل لفترة
            معينة).
          </li>
        </ul>

        <h3 className={classes.subHeading}>الرعاية الصحية والتأمين الصحي</h3>
        <ul className={classes.list}>
          <li>
            <strong>بدل المرض:</strong> يعوض فقدان الدخل في حالة المرض. يعتمد
            على الدخل (حوالي 80% من الراتب). تدفعه هيئة التأمين الاجتماعي
            (Försäkringskassan).
          </li>
          <li>
            <strong>الرعاية الصحية:</strong> مدعومة عبر الضرائب. رسوم المرضى
            منخفضة مقارنة بالتكلفة الفعلية.
          </li>
          <li>
            <strong>الحماية من التكاليف المرتفعة:</strong> تحمي من التكاليف
            المرتفعة لزيارات الأطباء والأدوية (بطاقة مجانية).
          </li>
        </ul>

        <h3 className={classes.subHeading}>رعاية المسنين والمعاشات</h3>
        <ul className={classes.list}>
          <li>
            <strong>نظام المعاشات (ثلاثة أجزاء):</strong>
            <ol className={classes.list}>
              <li>
                <strong>معاش الدخل:</strong> الجزء الأكبر، يعتمد على دخل حياتك.
                تأتي الأموال من رسوم أصحاب العمل.
              </li>
              <li>
                <strong>معاش الأقساط (PPM):</strong> جزء من معاش الدخل يمكنك
                استثماره بنفسك في صناديق.
              </li>
              <li>
                <strong>معاش الضمان:</strong> حماية أساسية لمن كان لديه دخل
                منخفض أو معدوم. يخضع جزئيًا لاختبار الحاجة. يُصرف من عمر 66
                عامًا.
              </li>
            </ol>
          </li>
          <li>
            <strong>معاش الخدمة:</strong> معاش إضافي يدفعه صاحب العمل (وفقًا
            للاتفاقيات الجماعية). مهم جدًا لمعظم الموظفين.
          </li>
          <li>
            <strong>رعاية المسنين:</strong> الرعاية المنزلية، سكن الخدمة، دور
            المسنين. برسوم ولكن مدعومة عبر الضرائب.
          </li>
        </ul>

        <h3 className={classes.subHeading}>
          دعم الإعالة (المساعدات الاجتماعية)
        </h3>
        <ul className={classes.list}>
          <li>
            <strong>دعم الإعالة:</strong> الخطوة الأخيرة في شبكة الأمان
            الاجتماعي. مساعدة مالية تُعطى مؤقتًا لمن لا يستطيع إعالة نفسه بنفسه.
          </li>
          <li>
            <strong>الشروط:</strong> تديرها الخدمات الاجتماعية في البلدية. تتطلب
            تحقيقًا في الوضع المالي والحياتي. يجب ألا يكون لدى المتقدم أصول
            (أسهم، أموال في البنك) ويجب أن يكون متاحًا لسوق العمل.
          </li>
        </ul>
      </section>

      {/* ===== 3. تمويل الرفاهية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. تمويل الرفاهية</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم كيفية تمويل الرفاهية السويدية.
        </p>

        <h3 className={classes.subHeading}>القطاع العام</h3>
        <ul className={classes.list}>
          <li>
            الدولة، المناطق، والبلديات تمول الرفاهية من خلال{" "}
            <strong>الضرائب والرسوم</strong>.
          </li>
          <li>
            <strong>نظام ضريبي تصاعدي:</strong> من لديهم دخل أعلى يدفعون نسبة
            أكبر من الضريبة مقارنة بمن لديهم دخل أقل (إعادة توزيع).
          </li>
        </ul>

        <h3 className={classes.subHeading}>الضرائب والرسوم الشائعة</h3>
        <ul className={classes.list}>
          <li>
            <strong>ضريبة البلدية:</strong> تُدفع للبلدية (والمنطقة). أكبر ضريبة
            بالنسبة لمعظم الناس.
          </li>
          <li>
            <strong>ضريبة الدخل الحكومية:</strong> يدفعها من لديهم دخل مرتفع
            (فوق حد معين).
          </li>
          <li>
            <strong>ضريبة القيمة المضافة (مومس):</strong> ضريبة على الاستهلاك
            (السلع والخدمات). المعدل القياسي 25%.
          </li>
          <li>
            <strong>ضريبة المكوس:</strong> ضريبة على سلع محددة مثل الكحول والتبغ
            والبنزين (غالبًا بهدف توجيه الاستهلاك أو زيادة السعر).
          </li>
          <li>
            <strong>رسوم صاحب العمل:</strong> رسوم يدفعها صاحب العمل عن كل موظف
            (حوالي 31.42% من الراتب الإجمالي). تستخدم بشكل أساسي للمعاشات
            والتأمينات الاجتماعية (بدل المرض، بدل الوالدين، إلخ).
          </li>
        </ul>

        <h3 className={classes.subHeading}>التأمينات الاجتماعية</h3>
        <ul className={classes.list}>
          <li>
            نظام يساهم فيه الجميع (عبر الضرائب/الرسوم) ويمكن للجميع الحصول على
            تعويض عند الحاجة (المرض، البطالة، إجازة الوالدين، إلخ).
          </li>
        </ul>
      </section>

      {/* ===== 4. خصخصة الرفاهية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. خصخصة الرفاهية</h2>
        <p className={classes.paragraph}>
          يتناول هذا القسم الجهات الربحية في قطاع الرفاهية.
        </p>

        <h3 className={classes.subHeading}>ما هي الخصخصة؟</h3>
        <ul className={classes.list}>
          <li>
            منذ التسعينيات، أتيحت الفرصة للشركات الخاصة لتشغيل خدمات الرفاهية
            مثل المدارس ودور المسنين ومراكز الرعاية الصحية، مع
            <strong>تمويل عام</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>
          حجج لصالح الشركات الربحية في الرفاهية
        </h3>
        <ul className={classes.list}>
          <li>
            <strong>الكفاءة:</strong> الشركات الخاصة غالبًا ما تكون أكثر كفاءة
            ووعيًا بالتكاليف.
          </li>
          <li>
            <strong>حرية الاختيار:</strong> يحصل المواطنون على حرية أكبر في
            الاختيار بين مقدمي الخدمات.
          </li>
          <li>
            <strong>الابتكار:</strong> يمكن للجهات الخاصة دفع التطور بأفكار
            جديدة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>
          حجج ضد الشركات الربحية في الرفاهية
        </h3>
        <ul className={classes.list}>
          <li>
            <strong>مصلحة الربح مقابل الجودة:</strong> خطر انخفاض الجودة عندما
            يكون التركيز على تعظيم الربح بدلاً من تقديم أفضل رعاية/رعاية/تعليم
            ممكن.
          </li>
          <li>
            <strong>عدم المساواة:</strong> يمكن أن يؤدي إلى تفاوت أكبر بين
            المناطق والمجموعات المختلفة.
          </li>
          <li>
            <strong>"تهريب الضرائب":</strong> قد تذهب الأرباح إلى مالكين في دول
            أخرى بدلاً من إعادة استثمارها في النشاط.
          </li>
          <li>
            <strong>نقص الشفافية:</strong> الشركات الخاصة ليست منفتحة على
            التدقيق العام مثل الأنشطة العامة.
          </li>
        </ul>
      </section>

      {/* ===== 5. تحديات مجتمع الرفاهية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. تحديات مجتمع الرفاهية</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم أكبر التحديات التي تواجه مجتمع الرفاهية.
        </p>

        <h3 className={classes.subHeading}>شيخوخة السكان</h3>
        <ul className={classes.list}>
          <li>
            نعيش لفترة أطول، مما يعني أن عددًا <strong>أقل من العاملين</strong>
            (الذين يدفعون الضرائب) يجب أن يعيلوا عددًا{" "}
            <strong>أكبر من المتقاعدين</strong> (الذين يكلفون أموالاً).
          </li>
          <li>
            <strong>النتيجة:</strong> خطر زيادة الضغط على نظام المعاشات والرعاية
            الصحية ورعاية المسنين.
          </li>
        </ul>

        <h3 className={classes.subHeading}>مشاكل المناطق النائية</h3>
        <ul className={classes.list}>
          <li>
            في بلديات المناطق النائية، يتناقص عدد السكان (الشباب يهاجرون إلى
            المدن الكبرى)، بينما تزداد نسبة كبار السن.
          </li>
          <li>
            <strong>النتيجة:</strong> صعوبة في الحفاظ على نفس المستوى من خدمات
            الرفاهية (المدارس، مراكز الرعاية، رعاية المسنين) مع عدد أقل من دافعي
            الضرائب.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الغش في الإعانات وجرائم الرفاهية</h3>
        <ul className={classes.list}>
          <li>
            الغش المتعمد في الإعانات (مثل العمل في القطاع غير الرسمي أثناء
            الحصول على بدل مرض أو إعانة بطالة) <strong>يقوض الثقة</strong> في
            نظام الرفاهية.
          </li>
          <li>
            <strong>النتيجة:</strong> انخفاض الثقة قد يؤدي إلى إثارة الشكوك حول
            المستحقين الشرعيين للإعانات وقيام السياسيين بتشديد القواعد.
          </li>
        </ul>

        <h3 className={classes.subHeading}>المجتمع الموازي</h3>
        <ul className={classes.list}>
          <li>
            <strong>عديمو الأوراق</strong> (الأشخاص بدون تصريح إقامة) يعيشون
            خارج شبكة أمان نظام الرفاهية.
          </li>
          <li>
            <strong>النتيجة:</strong> غالبًا ما يتم استغلالهم في سوق العمل
            (العمل غير الرسمي، ظروف شبيهة بالرق) وليس لديهم إمكانية الوصول إلى
            الرعاية الصحية أو الدعم الاجتماعي.
          </li>
        </ul>

        <h3 className={classes.subHeading}>المعلومات المضللة (مثل حملة LVU)</h3>
        <ul className={classes.list}>
          <li>
            حملات المعلومات المضللة (مثل حملة LVU التي زعمت أن الخدمات
            الاجتماعية "تختطف" الأطفال) يمكن أن تخلق{" "}
            <strong>عدم ثقة بالسلطات</strong> وتؤدي إلى أن المجموعات الضعيفة لا
            تطلب الدعم الذي يحق لها.
          </li>
        </ul>
      </section>

      {/* ===== 6. أسئلة على النص ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. أسئلة على النص</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            1. صف المكونات الرئيسية لنماذج الرفاهية الثلاثة.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>أ) النموذج المحافظ:</strong> الأسرة لها أهمية كبيرة.
                تتدخل الدولة فقط عندما لا تكفي الأسرة. الإعانات غالبًا ما تكون
                مشروطة بالحاجة وقائمة على العمل. يحافظ على الفروق الطبقية.
              </li>
              <li>
                <strong>ب) النموذج الليبرالي:</strong> دور الدولة ضئيل. يجب أن
                يحل السوق والمبادرات الخاصة احتياجات الرفاهية. خدمات الرفاهية
                موجهة للأفقر. ضرائب منخفضة وشبكة أمان ضعيفة.
              </li>
              <li>
                <strong>ج) النموذج الديمقراطي الاجتماعي:</strong> إعانات عامة
                تشمل الجميع. درجة عالية من إعادة التوزيع عبر الضرائب. تتحمل
                الدولة مسؤولية كبيرة عن رفاهية المواطنين من "المهد إلى اللحد".
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>2. أعط أمثلة على:</h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>أ) إعانة عامة:</strong> إعانة الطفل (تُدفع لجميع
                العائلات التي لديها أطفال).
              </li>
              <li>
                <strong>ب) إعانة مشروطة بالحاجة:</strong> دعم الإعالة، معاش
                الضمان (يُختبر حسب الحاجة).
              </li>
              <li>
                <strong>ج) إعانة تعوض فقدان الدخل:</strong> بدل المرض، بدل
                الوالدين، إعانة البطالة (صندوق البطالة).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. ما الدعم الذي يمكن أن تحصل عليه المجموعات التي تواجه صعوبة في
            الاندماج في سوق العمل؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              دعم من <strong>مكتب العمل (Arbetsförmedlingen)</strong> مثل:
            </p>
            <ul className={classes.list}>
              <li>برامج تدريبية لسوق العمل</li>
              <li>فرص تدريب عملي</li>
              <li>إعانات الأجور</li>
              <li>برامج خاصة للأشخاص ذوي الإعاقة</li>
              <li>برامج تأسيسية للوافدين الجدد</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. صف الأجزاء المختلفة لنظام المعاشات.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>معاش الدخل:</strong> يعتمد على دخل حياتك. الجزء الأكبر
                من المعاش.
              </li>
              <li>
                <strong>معاش الأقساط (PPM):</strong> جزء من معاش الدخل يمكنك
                استثماره بنفسك في صناديق.
              </li>
              <li>
                <strong>معاش الضمان:</strong> حماية أساسية لمن كان لديه دخل
                منخفض أو معدوم. يخضع جزئيًا لاختبار الحاجة.
              </li>
              <li>
                <strong>معاش الخدمة:</strong> معاش إضافي من صاحب العمل (وفقًا
                للاتفاقيات الجماعية).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>5. ماذا يعني دعم الإعالة؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>دعم الإعالة</strong> (ويسمى أيضًا المساعدات الاجتماعية) هو
              مساعدة مالية تُعطى مؤقتًا لمن لا يستطيع إعالة نفسه بنفسه. إنها
              <strong>الخطوة الأخيرة</strong> في شبكة الأمان الاجتماعي وتديرها
              الخدمات الاجتماعية في البلدية.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. السويد لديها نظام ضريبي تصاعدي. ماذا يعني ذلك؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يعني أن من لديهم <strong>دخل أعلى</strong> يدفعون{" "}
              <strong>نسبة أكبر</strong> من الضريبة مقارنة بمن لديهم دخل أقل.
              وهذا يساهم في
              <strong>إعادة توزيع</strong> الموارد.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. ما هو الغرض من ضريبة المكوس؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>ضريبة المكوس</strong> هي ضريبة إضافية على سلع محددة مثل
              الكحول والتبغ والبنزين. الهدف غالبًا هو:
            </p>
            <ul className={classes.list}>
              <li>تقليل استهلاك هذه السلع (أسباب صحية، بيئية)</li>
              <li>زيادة السعر لتوجيه السلوك</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. ماذا تعني خصخصة الرفاهية التي بدأت في التسعينيات؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يعني أن <strong>الشركات الخاصة</strong> أتيحت لها الفرصة لتشغيل
              خدمات الرفاهية (مثل المدارس ودور المسنين ومراكز الرعاية الصحية) مع{" "}
              <strong>تمويل عام</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. اذكر بعض الحجج الشائعة لصالح وضد الشركات الربحية في قطاع
            الرفاهية.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>لصالح:</strong> الكفاءة، حرية الاختيار للمواطنين،
                الابتكار والتطوير.
              </li>
              <li>
                <strong>ضد:</strong> مصلحة الربح قد تسبق الجودة، زيادة الفجوات،
                قد تذهب الأرباح إلى الخارج، ونقص الشفافية.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. لماذا يشكل طول العمر تحديًا للرفاهية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              عدد أكبر من <strong>المتقاعدين</strong> (الذين يكلفون أموالاً) يجب
              أن يعيلهم عدد أقل من <strong>العاملين</strong> (الذين يدفعون
              الضرائب). وهذا يخلق ضغطًا على نظام المعاشات والرعاية الصحية ورعاية
              المسنين.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. لماذا من الصعب الحفاظ على مستوى الرفاهية في بلديات المناطق
            النائية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يهاجر الشباب إلى المدن الكبرى، مما{" "}
              <strong>يقلل القاعدة الضريبية</strong>
              وعدد العاملين، بينما تزداد نسبة كبار السن الذين يحتاجون إلى خدمات
              الرفاهية.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. اذكر بعض الأسباب التي تجعل الأشخاص الذين يحق لهم الحصول على
            الدعم يضطرون إلى طلب المساعدة من المنظمات غير الربحية.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>نقص المعلومات عن الحقوق</li>
              <li>فترات معالجة طويلة</li>
              <li>عقبات إدارية</li>
              <li>الخوف من السلطات</li>
              <li>صعوبات لغوية</li>
              <li>أن احتياجاتهم لا تغطيها المنظومة العامة</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. كيف يؤثر الغش في الإعانات وجرائم الرفاهية على الثقة في دولة
            الرفاهية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              إنه <strong>يقوض الثقة</strong> في النظام ويمكن أن يؤدي إلى إثارة
              الشكوك حول المستحقين الشرعيين للإعانات وقيام السياسيين بتشديد
              القواعد، مما قد يجعل الأمر أكثر صعوبة لمن يحتاجون حقًا إلى الدعم.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. بأي طريقة يمكن لحملات المعلومات المضللة مثل حملة LVU أن تؤدي إلى
            استبعاد مجموعات من مجتمع الرفاهية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              المعلومات المضللة تخلق <strong>الخوف وعدم الثقة</strong> بالسلطات
              مثل الخدمات الاجتماعية. قد تتجنب المجموعات الضعيفة (مثل المهاجرين)
              طلب الدعم الذي يحق لهم، خوفًا من أن تأخذ السلطات أطفالهم.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 7. أسئلة التحليل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. أسئلة التحليل</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. حلل كيف يؤثر العمل غير الرسمي (السوق السوداء) على إمكانية
            الاستفادة من مزايا نظام الرفاهية السويدي.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>سياسة الطفل والأسرة:</strong> العمل غير الرسمي يعني عدم
                الإبلاغ عن الدخل. وهذا يؤثر على بدل الوالدين (تعويض أقل أو
                معدوم) ودعم النفقة (قد يصبح غير صحيح).
              </li>
              <li>
                <strong>سياسة سوق العمل:</strong> لا تحصل على إعانة بطالة أو دعم
                نشاط قائم على العمل غير الرسمي، لأنها قائمة على الدخل.
              </li>
              <li>
                <strong>الرعاية الصحية والتأمين الصحي:</strong> بدل المرض يعتمد
                على الدخل المبلغ عنه. يؤدي العمل غير الرسمي إلى بدل مرض أقل أو
                عدم التأهل على الإطلاق.
              </li>
              <li>
                <strong>رعاية المسنين والمعاشات:</strong> معاش الدخل ومعاش
                الأقساط يعتمدان على دخل الحياة. العمل غير الرسمي يعطي معاشًا أقل
                (ولا يوجد معاش خدمة). معاش الضمان يتأثر بشكل أقل.
              </li>
              <li>
                <strong>الخلاصة:</strong> يؤدي العمل غير الرسمي إلى{" "}
                <strong>تعويضات أقل</strong> من جميع التأمينات الاجتماعية
                القائمة على الدخل تقريبًا. إنها{" "}
                <strong>صفقة سيئة على المدى الطويل</strong>، ولكنها قد تبدو
                جذابة على المدى القصير للحصول على المزيد من المال في اليد
                مباشرةً.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. حلل كيف تؤثر الإعانات القائمة على الدخل على النساء اللواتي يخترن
            البقاء في المنزل مع الأطفال أو العمل بدوام جزئي.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>بدل المرض:</strong> دخل أقل → بدل مرض أقل عند المرض.
              </li>
              <li>
                <strong>بدل الوالدين:</strong> دخل أقل → بدل والدين أقل. قد يؤثر
                هذا على خيارات النساء للبقاء في المنزل (ضغط اقتصادي للعودة إلى
                العمل مبكرًا).
              </li>
              <li>
                <strong>المعاش:</strong> دخل حياة أقل → معاش دخل ومعاش أقساط
                أقل. سنوات أقل في سوق العمل (أو دوام جزئي) يعطي أيضًا معاشًا
                أقل. وهذا أحد الأسباب التي تجعل النساء غالبًا لديهن{" "}
                <strong>معاش أقل من الرجال</strong> ("فجوة المعاشات").
              </li>
              <li>
                <strong>الخلاصة:</strong> النظام السويدي، مع الإعانات القائمة
                على الدخل، <strong>يضر بالنساء</strong> اللواتي يعملن بدوام جزئي
                أو يأخذن إجازة والدين بدرجة أكبر من الرجال. قد يساهم هذا في
                ترسيخ الفروق الاقتصادية بين الجنسين.
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
            D1. ما هي برأيك أهم أسباب انخفاض معدل المواليد؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>عدم اليقين الاقتصادي:</strong> غلاء تكاليف إنجاب الأطفال
                (السكن، رعاية الأطفال، الإعالة).
              </li>
              <li>
                <strong>المسيرة المهنية والتعليم:</strong> يؤجل الكثيرون إنجاب
                الأطفال لصالح الدراسة والمهنة.
              </li>
              <li>
                <strong>أزمة السكن:</strong> صعوبة العثور على مسكن كبير وبسعر
                معقول.
              </li>
              <li>
                <strong>القلق المجتمعي:</strong> القلق المناخي، القلق على
                المستقبل، الأوضاع العالمية.
              </li>
              <li>
                <strong>تغير المعايير:</strong> المزيد يختارون حياة العزوبية أو
                عدم إنجاب الأطفال تمامًا (العقم الاختياري).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. رعاية الأطفال والمسنين – مسؤولية الدولة أم مسؤولية الأسرة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>النموذج الديمقراطي الاجتماعي (مسؤولية الدولة):</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>المزايا:</strong> يحرر النساء من الأدوار التقليدية،
                ويعزز المساواة بين الجنسين، ويضمن الجودة وإمكانية الوصول للجميع
                بغض النظر عن الوضع العائلي.
              </li>
              <li>
                <strong>العيوب:</strong> ضرائب مرتفعة، خطر الرعاية المؤسسية
                بدلاً من البيئة المنزلية.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>النموذج المحافظ (مسؤولية الأسرة):</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>المزايا:</strong> علاقات وثيقة، ضرائب أقل، يقوي الروابط
                العائلية.
              </li>
              <li>
                <strong>العيوب:</strong> النساء (في الغالب) يتحملن العبء الأكبر،
                حرية اختيار أقل، خطر إساءة معاملة المسنين إذا لم يستطع الأقارب
                أو لم يتمكنوا من ذلك.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D3. هل رفع سن التقاعد هو الحل؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>لصالح:</strong> يزيد عدد العاملين الذين يدفعون الضرائب،
                ويقلل عدد المتقاعدين (التكلفة)، ويجعل النظام أكثر استدامة.
              </li>
              <li>
                <strong>ضد:</strong> صعب على الأشخاص ذوي الوظائف المتعبة جسديًا
                أو نفسيًا أن يتحملوا العمل لفترة أطول. يتطلب تكييفات في أماكن
                العمل وبيئة عمل أفضل.
              </li>
              <li>
                <strong>الخلاصة:</strong> رفع سن التقاعد هو جزء من الحل، ولكن
                يجب دمجه مع إجراءات أخرى مثل بيئة عمل أفضل، تحسين الصحة، وزيادة
                الهجرة.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D4. ناقش الأرباح في الرفاهية.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>مزايا الشركات الربحية:</strong>
            </p>
            <ul className={classes.list}>
              <li>زيادة الكفاءة والمنافسة، مما قد يخفض التكاليف.</li>
              <li>زيادة حرية الاختيار للمواطنين.</li>
              <li>الابتكار والتفكير الجديد.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>العيوب:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                مصلحة الربح قد تؤدي إلى جودة أقل (عدد أقل من الموظفين، طعام
                أسوأ، إلخ).
              </li>
              <li>
                خطر أن تذهب أموال الضرائب إلى جيوب مالكين أجانب بدلاً من إعادة
                استثمارها في النشاط.
              </li>
              <li>
                زيادة عدم المساواة – قد تختار الجهات الخاصة الحالات
                السهلة/الرخيصة وتترك الحالات الصعبة/المكلفة للقطاع العام.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> القضية معقدة. إنها تتعلق بالتوازن – كيف
              يمكن الاستفادة من مزايا الجهات الخاصة مع ضمان الجودة والمساواة
              والشفافية.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D5. ما مدى خطورة الغش في الإعانات؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>خطير:</strong> يقوض الثقة في نظام الرفاهية. إذا غش
                الجميع، ينهار النظام. كان من الممكن استخدام الأموال التي تختفي
                في رعاية وتعليم وخدمات أفضل.
              </li>
              <li>
                <strong>أقل خطورة:</strong> يرى البعض أنه "غش صغير" (مثل العمل
                لبضع ساعات في القطاع غير الرسمي أثناء الحصول على إعانة مرض).
                يرون أن النظام معقد وأن الغش هو نوع من الاحتجاج أو استراتيجية
                للبقاء.
              </li>
              <li>
                <strong>الخلاصة:</strong> بغض النظر عن كيفية النظر إليه، فإن
                الغش في الإعانات هو <strong>غير قانوني وضار للمجتمع</strong>.
                يقلل الموارد لمن يحتاجون حقًا إلى المساعدة ويخلق عدم ثقة.
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
            <span className={classes.keyword}>رسوم صاحب العمل:</span> رسم (حوالي
            31.42% من الراتب الإجمالي) يدفعه صاحب العمل عن كل موظف. يستخدم
            للمعاشات والتأمين الصحي وتأمين الوالدين والتأمينات الاجتماعية
            الأخرى.
          </li>
          <li>
            <span className={classes.keyword}>الإعانات المشروطة بالحاجة:</span>
            إعانات تُدفع فقط لمن يستطيع إثبات أن لديه حاجة مالية (مثل دعم
            الإعالة، معاش الضمان).
          </li>
          <li>
            <span className={classes.keyword}>دعم الإعالة:</span> مساعدة مالية
            من الخدمات الاجتماعية لمن لا يستطيع إعالة نفسه. شبكة الأمان الأخيرة.
          </li>
          <li>
            <span className={classes.keyword}>الإعانات العامة:</span> إعانات
            تُدفع للجميع، دون اختبار الحاجة (مثل إعانة الطفل).
          </li>
          <li>
            <span className={classes.keyword}>الإعانات القائمة على الدخل:</span>
            إعانات تعتمد على دخلك السابق (مثل بدل المرض، بدل الوالدين، إعانة
            البطالة).
          </li>
          <li>
            <span className={classes.keyword}>ضريبة البلدية:</span> الضريبة التي
            تُدفع للبلدية والمنطقة. تختلف بين البلديات المختلفة.
          </li>
          <li>
            <span className={classes.keyword}>
              ضريبة القيمة المضافة (مومس):
            </span>
            ضريبة على الاستهلاك (السلع والخدمات). المستوى القياسي 25%.
          </li>
          <li>
            <span className={classes.keyword}>القطاع العام:</span> الجزء من
            الاقتصاد الذي يمول بالضرائب وتديره الدولة والمناطق والبلديات (خدمات
            الرفاهية).
          </li>
          <li>
            <span className={classes.keyword}>معاش الأقساط (PPM):</span> جزء من
            المعاش العام يمكنك استثماره بنفسك في صناديق.
          </li>
          <li>
            <span className={classes.keyword}>الخصخصة:</span> إعطاء الشركات
            الخاصة فرصة لتشغيل أنشطة كانت تُدار سابقًا من قبل القطاع العام (مثل
            المدارس، مراكز الرعاية الصحية).
          </li>
          <li>
            <span className={classes.keyword}>نظام ضريبي تصاعدي:</span> من لديهم
            دخل أعلى يدفعون نسبة أكبر من الضريبة مقارنة بمن لديهم دخل أقل.
          </li>
          <li>
            <span className={classes.keyword}>ضريبة المكوس:</span> ضريبة إضافية
            على سلع محددة مثل الكحول والتبغ والبنزين، غالبًا لتوجيه الاستهلاك.
          </li>
          <li>
            <span className={classes.keyword}>التأمينات الاجتماعية:</span> أنظمة
            تأمين تمول عبر الضرائب/الرسوم وتعطي تعويضًا عند المرض والبطالة
            وإجازة الوالدين وغيرها.
          </li>
          <li>
            <span className={classes.keyword}>معاش الخدمة:</span> معاش إضافي
            يدفعه صاحب العمل وفقًا للاتفاقيات الجماعية. مهم جدًا لمعظم الموظفين.
          </li>
          <li>
            <span className={classes.keyword}>نماذج الرفاهية:</span> طرق مختلفة
            لتنظيم الرفاهية (محافظ، ليبرالي، ديمقراطي اجتماعي).
          </li>
          <li>
            <span className={classes.keyword}>خدمات الرفاهية:</span> خدمات
            تمولها القطاع العام (المدرسة، الرعاية الصحية، رعاية المسنين، رعاية
            الأطفال، إلخ).
          </li>
        </ul>
      </section>
    </div>
  );
}
