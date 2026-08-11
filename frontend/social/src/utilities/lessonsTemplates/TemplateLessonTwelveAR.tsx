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

export default function TemplateLessonTwelveAR() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>الفصل 12: الحياة العملية</h1>
      <p className={classes.subtitle}>
        ملخص شامل مع الأسئلة والتحليل والمناقشة والمفاهيم الأساسية
      </p>

      {/* ===== 1. أهمية العمل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. أهمية العمل</h2>
        <p className={classes.paragraph}>
          يشرح هذا القسم ما هو العمل وأي وظيفة يلعبها للفرد والمجتمع.
        </p>

        <h3 className={classes.subHeading}>تعريف أساسي</h3>
        <ul className={classes.list}>
          <li>
            العمل هو ما نقوم به لتأمين <strong>قوتنا</strong> (مال للطعام والسكن
            والملابس وما إلى ذلك).
          </li>
        </ul>

        <h3 className={classes.subHeading}>أكثر من مجرد توفير القوت</h3>
        <ul className={classes.list}>
          <li>
            <strong>التواصل الاجتماعي:</strong> الزملاء، رفقاء العمل، التآلف.
          </li>
          <li>
            <strong>الهيكل في الحياة اليومية:</strong> الروتين، أوقات منتظمة،
            معنى.
          </li>
          <li>
            <strong>الشعور بالمعنى:</strong> المساهمة في المشترك، فعل الخير.
          </li>
          <li>
            <strong>الهوية:</strong> في السويد، "ماذا تعمل؟" غالبًا أحد الأسئلة
            الأولى التي نطرحها عند مقابلة أشخاص جدد.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الأهمية المجتمعية</h3>
        <ul className={classes.list}>
          <li>
            سوق عمل فعال <strong>حاسم</strong> لاقتصاد المجتمع واستقراره.
          </li>
          <li>البطالة وظروف العمل السيئة تؤدي إلى الاستياء والصراعات.</li>
        </ul>
      </section>

      {/* ===== 2. النموذج السويدي ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. النموذج السويدي</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم النظام السويدي الفريد في سوق العمل.
        </p>

        <h3 className={classes.subHeading}>النموذج السويدي</h3>
        <ul className={classes.list}>
          <li>
            نظام حيث <strong>أطراف</strong> سوق العمل (أصحاب العمل والنقابات
            العمالية) نفسها تنظم ظروف سوق العمل من خلال
            <strong>الاتفاقيات الجماعية</strong>، مع{" "}
            <strong>تدخل حكومي ضئيل</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>أطراف سوق العمل</h3>
        <ul className={classes.list}>
          <li>
            <strong>جانب العمال (النقابات العمالية):</strong> ينظم العمال.
            أمثلة:
            <strong>LO</strong> (للعمّال)، <strong>TCO</strong> و
            <strong>Saco</strong> (للموظفين والأكاديميين).
          </li>
          <li>
            <strong>جانب أصحاب العمل:</strong> ينظم أصحاب العمل. أمثلة:
            <strong>Svenskt Näringsliv</strong> (للشركات الخاصة)،
            <strong>SKR</strong> (للبلديات والمناطق)، والدولة كصاحب عمل.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الاتفاقيات الجماعية</h3>
        <ul className={classes.list}>
          <li>
            <strong>تعريف:</strong> اتفاقيات مكتوبة بين النقابات العمالية
            ومنظمات أصحاب العمل تنظم <strong>الأجور</strong>،{" "}
            <strong>ساعات العمل</strong>،<strong>الإجازات</strong>،{" "}
            <strong>تعويض العمل الإضافي</strong>،<strong>فترات الإشعار</strong>{" "}
            وغير ذلك.
          </li>
          <li>
            <strong>القواعد الرئيسية وفقًا للاتفاقيات الجماعية:</strong>
            <ul className={classes.list}>
              <li>
                <strong>الأجر:</strong> على الأقل المتفق عليه.
              </li>
              <li>
                <strong>ساعات العمل:</strong> غالبًا 40 ساعة/أسبوع.
              </li>
              <li>
                <strong>الإجازة:</strong> 25 يومًا على الأقل/سنة.
              </li>
              <li>
                <strong>العمل الإضافي:</strong> تعويض إضافي عن العمل فوق الوقت
                العادي.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>واجب السلم</h3>
        <ul className={classes.list}>
          <li>
            عندما تكون الاتفاقية الجماعية سارية، يسود{" "}
            <strong>واجب السلم</strong> – لا يجوز للأطراف استخدام إجراءات نضالية
            (إضراب أو إغلاق) لحل النزاعات خلال فترة الاتفاقية.
          </li>
          <li>
            بدلاً من ذلك، تحل النزاعات من خلال <strong>المفاوضات</strong> أو في
            <strong>محكمة العمل</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>حق النزاع</h3>
        <ul className={classes.list}>
          <li>
            في حالة <strong>غياب الاتفاقية</strong> (عند انتهاء الاتفاقيات
            القديمة وعدم توقيع اتفاقيات جديدة)، يحق للنقابات{" "}
            <strong>الإضراب</strong>
            ويحق لأصحاب العمل <strong>الإغلاق</strong>.
          </li>
        </ul>
      </section>

      {/* ===== 3. القوانين المنظمة لسوق العمل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. القوانين المنظمة لسوق العمل</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم أهم ثلاثة قوانين في سوق العمل.
        </p>

        <h3 className={classes.subHeading}>قانون حماية العمال (LAS)</h3>
        <ul className={classes.list}>
          <li>
            <strong>الهدف:</strong> خلق <strong>أمان</strong> للعمال من خلال
            تنظيم الفصل وأشكال التوظيف.
          </li>
          <li>
            <strong>القاعدة الأساسية:</strong> العقود هي{" "}
            <strong>عقود دائمة</strong>
            (ثابتة). العقود المحددة المدة هي <strong>استثناء</strong>.
          </li>
          <li>
            <strong>ترتيب الأولوية ("الآخر دخولاً أول خروجاً"):</strong> في حالة
            نقص العمل (فصل لأسباب اقتصادية)، يجب فصل من كان موظفًا لأقصر فترة
            أولاً. يمكن الاستثناء إذا كان لدى صاحب العمل أسباب خاصة للإبقاء على
            بعض الأشخاص (بسبب الكفاءة أو المؤهلات الخاصة).
          </li>
          <li>
            <strong>التزام التفاوض:</strong> يجب على صاحب العمل التفاوض مع
            النقابة قبل الفصل.
          </li>
          <li>
            <strong>حق إعادة التوظيف:</strong> من تم فصله بسبب نقص العمل له
            <strong>أولوية</strong> في إعادة التوظيف خلال فترة معينة (9-12
            شهرًا).
          </li>
          <li>
            <strong>إعادة الهيكلة:</strong> في حالة نقل الأعمال (مثل بيع شركة)،
            يحق للموظفين الانتقال مع صاحب العمل الجديد بنفس الشروط.
          </li>
        </ul>

        <h3 className={classes.subHeading}>قانون المشاركة في القرار (MBL)</h3>
        <ul className={classes.list}>
          <li>
            <strong>الهدف:</strong> منح النقابات العمالية والموظفين
            <strong>تأثيرًا</strong> على القرارات المتخذة في مكان العمل.
          </li>
          <li>
            <strong>المبدأ الأساسي:</strong> يجب على صاحب العمل
            <strong>التفاوض</strong> مع النقابة قبل اتخاذ قرار بشأن تغييرات مهمة
            (تكنولوجيا جديدة، جداول جديدة، مباني، إلخ).
          </li>
          <li>
            <strong>حق المعلومات:</strong> يجب على صاحب العمل إبلاغ الموظفين عن
            الوضع الاقتصادي للشركة وخططها.
          </li>
          <li>
            <strong>حرية التنظيم:</strong> تحمي حق التنظيم النقابي – لا يجوز
            <strong>التمييز</strong> ضدك أو فصلك لأنك عضو في نقابة عمالية.
          </li>
        </ul>

        <h3 className={classes.subHeading}>قانون بيئة العمل (AML)</h3>
        <ul className={classes.list}>
          <li>
            <strong>الهدف:</strong> ضمان بيئة عمل <strong>صحية وآمنة</strong>.
          </li>
          <li>
            <strong>ثلاثة أنواع من بيئة العمل:</strong>
            <ol className={classes.list}>
              <li>
                <strong>المادية:</strong> التهوية، الضوضاء، معدات السلامة،
                المواد الكيميائية.
              </li>
              <li>
                <strong>التنظيمية:</strong> القيادة، التواصل، عبء العمل.
              </li>
              <li>
                <strong>الاجتماعية:</strong> العلاقات مع الزملاء، منع التنمر،
                الصراعات والضغط النفسي.
              </li>
            </ol>
          </li>
          <li>
            <strong>مسؤولية صاحب العمل:</strong> القيام{" "}
            <strong>بعمل منهجي في بيئة العمل</strong> – الوقاية من الأمراض
            والحوادث.
          </li>
          <li>
            <strong>مسؤولية العامل:</strong> اتباع تعليمات السلامة واستخدام
            معدات الحماية.
          </li>
          <li>
            <strong>مندوب السلامة:</strong> شخص تعينه النقابة لمراقبة بيئة
            العمل.
          </li>
          <li>
            <strong>ينطبق أيضًا على طلاب المدارس:</strong> من المرحلة الإعدادية،
            يكون مدير المدرسة مسؤولاً عن بيئة عمل الطلاب.
          </li>
        </ul>
      </section>

      {/* ===== 4. أنواع التوظيف المختلفة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. أنواع التوظيف المختلفة</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم أشكال التوظيف المختلفة وما هو مطلوب.
        </p>

        <h3 className={classes.subHeading}>عقد دائم (توظيف دائم)</h3>
        <ul className={classes.list}>
          <li>
            أكثر أشكال التوظيف <strong>أمانًا</strong>.
          </li>
          <li>
            ليس له تاريخ انتهاء – تعمل حتى تستقيل، أو تُفصل، أو تصل إلى سن
            التقاعد.
          </li>
          <li>يتيح التخطيط المالي، الحصول على قروض، إلخ.</li>
          <li>
            يمكن أن يبدأ بـ <strong>فترة تجربة</strong> بحد أقصى 6 أشهر. بعد
            فترة التجربة، تتحول إلى عقد دائم إذا كان الطرفان راضيين.
          </li>
        </ul>

        <h3 className={classes.subHeading}>عقد محدد المدة</h3>
        <ul className={classes.list}>
          <li>عقد ينتهي في تاريخ معين أو عند الانتهاء من عمل معين.</li>
          <li>
            <strong>أنواع مختلفة:</strong>
            <ul className={classes.list}>
              <li>
                <strong>عقد محدد المدة خاص:</strong> عقود مشاريع، فترات ذروة
                العمل.
              </li>
              <li>
                <strong>وكالة (Vikariat):</strong> يحل محل شخص في إجازة مرضية،
                إجازة والدية، إلخ.
              </li>
              <li>
                <strong>عمل موسمي:</strong> منتجعات التزلج، التخييم، البستنة.
              </li>
            </ul>
          </li>
          <li>
            <strong>حق "الحجز" (التحول إلى عقد دائم):</strong>
            <ul className={classes.list}>
              <li>
                بعد <strong>12 شهرًا</strong> (لعقد محدد المدة خاص) خلال فترة 5
                سنوات.
              </li>
              <li>
                بعد <strong>24 شهرًا</strong> (للوكالة) خلال فترة 5 سنوات.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>دوام جزئي مقابل دوام كامل</h3>
        <ul className={classes.list}>
          <li>
            <strong>دوام جزئي:</strong> العمل أقل من الدوام الكامل (غالبًا أقل
            من 40 ساعة/أسبوع).
          </li>
          <li>
            <strong>دوام كامل:</strong> 40 ساعة/أسبوع (أو المدة التي تعتبر
            الدوام الكامل الطبيعي).
          </li>
        </ul>

        <h3 className={classes.subHeading}>التزامات صاحب العمل عند التوظيف</h3>
        <ul className={classes.list}>
          <li>
            <strong>عقد توظيف</strong> (مكتوب).
          </li>
          <li>
            <strong>فترة تجربة مدفوعة</strong> (لا يوجد عمل مجاني أبدًا!).
          </li>
          <li>
            دفع <strong>الضريبة</strong> و <strong>رسوم صاحب العمل</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>وظائف غير مستقرة</h3>
        <ul className={classes.list}>
          <li>
            <strong>
              شركات التوظيف المؤقت، عقود بدون ساعات، العمل عبر المنصات
            </strong>
            (مثل Foodora، Uber).
          </li>
          <li>
            غالبًا <strong>أمان أقل</strong>، <strong>ظروف أسوأ</strong> و
            <strong>حقوق أقل</strong>.
          </li>
        </ul>
      </section>

      {/* ===== 5. مستقبل الحياة العملية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. مستقبل الحياة العملية</h2>
        <p className={classes.paragraph}>
          يتناول هذا القسم كيفية تغير الحياة العملية.
        </p>

        <h3 className={classes.subHeading}>الرقمنة والأتمتة</h3>
        <ul className={classes.list}>
          <li>
            العديد من <strong>الأعمال الروتينية</strong> ستتم أتمتتها وتختفي.
          </li>
          <li>
            في نفس الوقت، تظهر <strong>وظائف جديدة</strong> في التكنولوجيا
            والبيانات والذكاء الاصطناعي.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الذكاء الاصطناعي (AI)</h3>
        <ul className={classes.list}>
          <li>
            يؤثر على المهن <strong>البسيطة والمتقدمة</strong> على حد سواء.
          </li>
          <li>
            يمكن أن <strong>يحل محل</strong> أو <strong>يغير</strong> المهام
            الوظيفية.
          </li>
        </ul>

        <h3 className={classes.subHeading}>قطاعات جديدة</h3>
        <ul className={classes.list}>
          <li>
            <strong>وظائف خضراء:</strong> تكنولوجيا البيئة، الطاقة المتجددة.
          </li>
          <li>
            <strong>شركات تقنية ناشئة:</strong> خدمات رقمية وابتكارات.
          </li>
          <li>
            <strong>الرعاية الصحية والاجتماعية:</strong> بسبب شيخوخة السكان.
          </li>
        </ul>

        <h3 className={classes.subHeading}>التعلم مدى الحياة</h3>
        <ul className={classes.list}>
          <li>
            أهمية <strong>تحديث المعرفة باستمرار</strong> وكونك{" "}
            <strong>مرنًا</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>
          اقتصاد الوظائف المؤقتة والعمل عبر المنصات
        </h3>
        <ul className={classes.list}>
          <li>
            المزيد يعملون كـ <strong>أصحاب عمل مستقلين</strong> أو عبر
            <strong>تطبيقات</strong> (Foodora، Uber).
          </li>
          <li>
            هذا يعني <strong>أمانًا أقل</strong> و <strong>مزايا أقل</strong>.
          </li>
        </ul>
      </section>

      {/* ===== 6. أسئلة على النص ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. أسئلة على النص</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>1. لماذا العمل مهم للإنسان؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              العمل مهم لتأمين <strong>القوت</strong> (مال للطعام والسكن
              وغيرها)، وأيضًا لإعطاء <strong>التواصل الاجتماعي</strong>،{" "}
              <strong>الهيكل</strong>
              في الحياة اليومية، <strong>الشعور بالمعنى</strong> والمساهمة في
              <strong>الهوية</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. ماذا يعني النموذج السويدي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              نظام حيث <strong>أطراف</strong> سوق العمل (أصحاب العمل والنقابات
              العمالية) نفسها تنظم ظروف العمل من خلال
              <strong>الاتفاقيات الجماعية</strong>، مع{" "}
              <strong>تدخل حكومي ضئيل</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. لماذا الاتفاقيات الجماعية مهمة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تنظم <strong>الأجور</strong>، <strong>ساعات العمل</strong>،
              <strong>الإجازات</strong>، <strong>العمل الإضافي</strong>،
              <strong>فترات الإشعار</strong> وغيرها من ظروف العمل. تعطي
              <strong>أمانًا</strong> وحدودًا دنيا مشتركة للموظفين.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. ما الفرق بين الإضراب والإغلاق؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>الإضراب:</strong> عندما يوقف <strong>العمال</strong>
                (النقابة) العمل لإجبار صاحب العمل على الموافقة على مطالبهم.
              </li>
              <li>
                <strong>الإغلاق:</strong> عندما يمنع <strong>صاحب العمل</strong>
                العمال من دخول مكان العمل للضغط عليهم لقبول شروط صاحب العمل.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>5. ماذا يعني واجب السلم؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              خلال فترة سريان <strong>الاتفاقية الجماعية</strong>، لا يجوز
              للأطراف استخدام إجراءات نضالية (إضراب أو إغلاق). تحل النزاعات
              بدلاً من ذلك من خلال <strong>المفاوضات</strong> أو في{" "}
              <strong>محكمة العمل</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. لماذا قانون LAS مهم للعمال؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              قانون حماية العمال (LAS) يعطي <strong>أمانًا</strong> وحماية ضد
              <strong>الفصل التعسفي</strong>. ينظم أيضًا أشكال التوظيف وترتيب
              الأولوية عند الفصل.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. ما هو هدف قانون المشاركة في القرار؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              إعطاء النقابات العمالية والموظفين <strong>تأثيرًا</strong> على
              القرارات في مكان العمل (مثل التكنولوجيا الجديدة، الجداول) و
              <strong>الحق في المعلومات</strong> عن اقتصاد الشركة وخططها.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. ما هي قواعد ترتيب الأولوية ("الآخر دخولاً أول خروجاً") عند الفصل؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              في حالة <strong>نقص العمل</strong> (فصل لأسباب اقتصادية)، يجب فصل
              من كان موظفًا <strong>لأقصر فترة</strong> أولاً. يمكن الاستثناء
              إذا كان لدى صاحب العمل <strong>أسباب خاصة</strong> للإبقاء على بعض
              الأشخاص (بسبب الكفاءة أو المؤهلات الخاصة).
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. ما الفرق بين بيئة العمل المادية والتنظيمية والاجتماعية؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>المادية:</strong> التهوية، الضوضاء، السلامة، المواد
                الكيميائية.
              </li>
              <li>
                <strong>التنظيمية:</strong> القيادة، التواصل، عبء العمل.
              </li>
              <li>
                <strong>الاجتماعية:</strong> العلاقات مع الزملاء، التنمر،
                الصراعات، الضغط النفسي.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. ما الفرق بين العقد الدائم والعقد محدد المدة؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>العقد الدائم:</strong> عقد <strong>ثابت</strong> بدون
                تاريخ انتهاء. يستمر حتى تستقيل بنفسك، أو تُفصل، أو تصل إلى سن
                التقاعد.
              </li>
              <li>
                <strong>العقد محدد المدة:</strong> له{" "}
                <strong>تاريخ انتهاء محدد</strong>
                أو ينتهي عند الانتهاء من عمل معين (مثل وكالة، مشروع).
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. متى يحق لك "الحجز" (التحول من عقد محدد المدة إلى عقد دائم)؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                بعد <strong>12 شهرًا</strong> من العقد محدد المدة الخاص (مشروع)
                خلال <strong>فترة 5 سنوات</strong>.
              </li>
              <li>
                بعد <strong>24 شهرًا</strong> من الوكالة خلال{" "}
                <strong>فترة 5 سنوات</strong>.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. لماذا فترة التجربة دائمًا مدفوعة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              لأن جميع عقود العمل في السويد يجب أن تكون <strong>مدفوعة</strong>
              وفقًا للقانون والاتفاقيات الجماعية. الشركات التي تقدم فترة تجربة
              <strong>غير مدفوعة</strong> هي{" "}
              <strong>أصحاب عمل غير جادين</strong>.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. لماذا يمكن أن تعني شركات التوظيف المؤقت واقتصاد الوظائف المؤقتة
            عقودًا أقل أمانًا؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              هذه الأشكال من التوظيف تعني غالبًا <strong>أمانًا أقل</strong>،
              <strong>ظروفًا أسوأ</strong>، <strong>أجرًا أقل</strong>،
              <strong>تأثيرًا أقل</strong> و <strong>لا أمان وظيفي</strong>. أنت
              لست موظفًا دائمًا في الشركة التي تعمل فيها فعليًا.
            </p>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. أعط أمثلة على كيف يمكن للذكاء الاصطناعي أن يؤثر على سوق العمل في
            المستقبل.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                يمكن للذكاء الاصطناعي <strong>أتمتة</strong> العديد من المهام
                الروتينية، مما قد يجعل بعض المهن{" "}
                <strong>زائدة عن الحاجة</strong>.
              </li>
              <li>
                في نفس الوقت، تظهر <strong>وظائف جديدة</strong> في التكنولوجيا
                والبيانات والذكاء الاصطناعي.
              </li>
              <li>
                ستتغير العديد من المهن وستتطلب <strong>معارف جديدة</strong>
                (التعلم مدى الحياة).
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
            A1. حلل الاختلافات بين النموذج السويدي ونموذج حيث تنظم الدولة سوق
            العمل.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>النموذج السويدي (الاتفاقيات الجماعية):</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>المزايا:</strong> المرونة، التكيف مع مختلف القطاعات،
                نقابات عمالية قوية، درجة عالية من الأمان والمساواة.
              </li>
              <li>
                <strong>العيوب:</strong> قد يكون من الصعب تحقيق التوافق، قد تنشأ
                صراعات، بعض المجموعات (غير المنظمة نقابيًا) قد تُهمش.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>التنظيم الحكومي:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>المزايا:</strong> قواعد متساوية للجميع، بسيط وواضح، يمكن
                للدولة ضمان الحقوق الأساسية.
              </li>
              <li>
                <strong>العيوب:</strong> مرونة أقل، صعوبة في تكييف القواعد مع
                مختلف القطاعات، خطر الإفراط في التنظيم والبيروقراطية.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. لماذا يواجه الشباب والمولودون في الخارج صعوبة أكبر في الحصول على
            عقود عمل دائمة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الأسباب:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>نقص الخبرة:</strong> يفضل أصحاب العمل غالبًا الأشخاص ذوي
                الخبرة الأكبر.
              </li>
              <li>
                <strong>العوائق اللغوية:</strong> قد يواجه المولودون في الخارج
                صعوبة في اللغة السويدية، مما قد يشكل عائقًا في سوق العمل.
              </li>
              <li>
                <strong>التمييز:</strong> تمييز واعٍ أو غير واعٍ على أساس العرق
                أو الجنس أو العمر.
              </li>
              <li>
                <strong>الشبكات:</strong> غالبًا ما يكون لدى الشباب والمولودين
                في الخارج شبكة مهنية أصغر.
              </li>
              <li>
                <strong>عقود غير مستقرة:</strong> غالبًا ما يُعرض على الشباب
                عقود محددة المدة مثل الوكالات وعقود المشاريع بدلاً من الوظائف
                الدائمة.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>العواقب:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>الضعف الاقتصادي:</strong> صعوبة في التخطيط المالي،
                الحصول على قروض، الادخار للسكن.
              </li>
              <li>
                <strong>ظروف عمل أسوأ:</strong> أجر أقل، مزايا أقل.
              </li>
              <li>
                <strong>مستقبل غير مؤكد:</strong> صعوبة في الحصول على عقد دائم
                وبناء مسيرة مهنية.
              </li>
              <li>
                <strong>الإقصاء الاجتماعي:</strong> فرصة أقل للاندماج في
                المجتمع.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A3. حلل كيف يؤثر تطور الذكاء الاصطناعي والأتمتة على قطاعات سوق العمل
            المختلفة.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>التأثير:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>الأعمال الروتينية:</strong> تُأتمت وتختفي (مثل العمل في
                المصانع، الإدارة، عمل الصرافين).
              </li>
              <li>
                <strong>المهن المؤهلة:</strong> تتغير وتُكمل بالذكاء الاصطناعي
                (مثل الأطباء، المحامون، الصحفيون يحصلون على مساعدة في التحليل
                والبحث عن المعلومات).
              </li>
              <li>
                <strong>وظائف جديدة:</strong> تظهر في التكنولوجيا، البيانات،
                تطوير الذكاء الاصطناعي، الأخلاق والتعليم.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>العواقب:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>فجوات متزايدة:</strong> من لديهم تعليم عال ومعارف تقنية
                يزدهرون أكثر من ذوي التعليم المنخفض.
              </li>
              <li>
                <strong>التعلم مدى الحياة:</strong> يزداد أهمية تحديث المعرفة
                باستمرار.
              </li>
              <li>
                <strong>تغير الأدوار المهنية:</strong> ستتضمن العديد من المهن
                تعاونًا وثيقًا مع الذكاء الاصطناعي.
              </li>
              <li>
                <strong>تحدي سياسي:</strong> كيف سنعيد توزيع الموارد وتدريب
                الناس لسوق العمل في المستقبل؟
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
            D1. هل الاتفاقيات الجماعية نموذج جيد لتنظيم سوق العمل؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>لصالح:</strong>
            </p>
            <ul className={classes.list}>
              <li>تعطي درجة عالية من الأمان وشروطًا دنيا مشتركة.</li>
              <li>تعمل بشكل جيد في السويد وساهمت في سوق عمل متساوٍ وفعال.</li>
              <li>مرنة – يمكن تكييفها مع مختلف القطاعات.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>ضد:</strong>
            </p>
            <ul className={classes.list}>
              <li>قد يكون من الصعب تحقيق التوافق بين الأطراف.</li>
              <li>بعض المجموعات (غير المنظمة نقابيًا) قد تُهمش.</li>
              <li>تقلل من تأثير الدولة وسيطرتها.</li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. هل من المعقول أن تكون العقود محددة المدة شائعة جدًا في بعض
            القطاعات؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>نعم:</strong>
            </p>
            <ul className={classes.list}>
              <li>تعطي صاحب العمل مرونة في فترات الذروة والمشاريع.</li>
              <li>يمكن أن تكون طريقة لاختبار موظفين جدد.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>لا:</strong>
            </p>
            <ul className={classes.list}>
              <li>تخلق عدم أمان للعمال.</li>
              <li>تعيق التخطيط المالي والحياتي.</li>
              <li>
                يمكن أن يستخدمها أصحاب عمل غير جادين لتجنب العقود الدائمة.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D3. هل يجب أن يكون التدريب غير المدفوع غير قانوني؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>نعم:</strong>
            </p>
            <ul className={classes.list}>
              <li>العمل يخلق قيمة لصاحب العمل ويجب أن يُكافأ عليه.</li>
              <li>
                التدريب غير المدفوع يستغل الناس، خاصة الشباب والمولودين في
                الخارج.
              </li>
              <li>يساهم في عدم المساواة والتهميش.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>لا:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                يمكن أن يكون التدريب وسيلة لاكتساب الخبرة والدخول إلى سوق العمل.
              </li>
              <li>
                التدريب غير المدفوع القصير يمكن أن يكون استثمارًا في المستقبل.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D4. ما هي مسؤولية الدولة في خلق عقود عمل آمنة؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>مسؤولية كبيرة:</strong> يجب على الدولة سن قوانين لحماية
                العمال، مكافحة التمييز، تمويل التعليم وبرامج سوق العمل، وتعزيز
                سوق عمل سليم.
              </li>
              <li>
                <strong>مسؤولية أقل:</strong> تقع المسؤولية بشكل أساسي على أطراف
                سوق العمل (النقابات وأصحاب العمل). لا ينبغي للدولة أن تتدخل
                بالتفصيل.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D5. هل من الصواب أن النقابات العمالية يمكنها الإضراب؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>نعم:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                حق الإضراب هو <strong>حق أساسي</strong> في الديمقراطية.
              </li>
              <li>الطريقة الوحيدة للعمال للحصول على استجابة لمطالبهم.</li>
            </ul>
            <p className={classes.paragraph}>
              <strong>لا:</strong>
            </p>
            <ul className={classes.list}>
              <li>يمكن أن تضر الإضرابات بالشركات واقتصاد المجتمع.</li>
              <li>
                يمكن أن تؤثر على أطراف ثالثة غير معنية (مثل المرضى في الرعاية
                الصحية).
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
            <span className={classes.keyword}>محكمة العمل:</span> محكمة خاصة
            تنظر في النزاعات المتعلقة بالاتفاقيات الجماعية وقوانين العمل.
          </li>
          <li>
            <span className={classes.keyword}>قانون بيئة العمل (AML):</span>{" "}
            القانون الذي يهدف إلى ضمان بيئة عمل صحية وآمنة.
          </li>
          <li>
            <span className={classes.keyword}>هيئة بيئة العمل:</span> هيئة تشرف
            على بيئة العمل وتقدم المشورة بشأن قضايا بيئة العمل.
          </li>
          <li>
            <span className={classes.keyword}>الأتمتة:</span> عندما تتولى الآلات
            وأجهزة الكمبيوتر المهام التي كان يؤديها البشر سابقًا.
          </li>
          <li>
            <span className={classes.keyword}>شركات التوظيف المؤقت:</span> شركات
            تستأجر موظفين لشركات أخرى.
          </li>
          <li>
            <span className={classes.keyword}>عقد دوام جزئي:</span> عقد تعمل فيه
            أقل من الدوام الكامل (غالبًا أقل من 40 ساعة/أسبوع).
          </li>
          <li>
            <span className={classes.keyword}>النقابة العمالية:</span> منظمة
            تمثل العمال في قضايا الأجور وظروف العمل والأمان.
          </li>
          <li>
            <span className={classes.keyword}>عقد دائم:</span> انظر عقد دائم.
          </li>
          <li>
            <span className={classes.keyword}>واجب السلم:</span> حظر الإضراب
            والإغلاق خلال فترة سريان الاتفاقية الجماعية.
          </li>
          <li>
            <span className={classes.keyword}>أولوية إعادة التوظيف:</span> حق من
            تم فصله بسبب نقص العمل في استعادة وظيفته إذا احتاج صاحب العمل إلى
            تعيين جديد خلال فترة معينة.
          </li>
          <li>
            <span className={classes.keyword}>اقتصاد الوظائف المؤقتة:</span> سوق
            عمل حيث يعمل الناس في مهام قصيرة ومؤقتة ("gig") عبر تطبيقات ومنصات.
          </li>
          <li>
            <span className={classes.keyword}>عقد دوام كامل:</span> عقد بـ 40
            ساعة في الأسبوع (أو المدة التي تعتبر الدوام الكامل الطبيعي).
          </li>
          <li>
            <span className={classes.keyword}>الاتفاقية الجماعية:</span> اتفاق
            مكتوب بين النقابات العمالية ومنظمات أصحاب العمل ينظم ظروف الموظفين.
          </li>
          <li>
            <span className={classes.keyword}>حق النزاع:</span> حق النقابة في
            الإضراب وحق صاحب العمل في الإغلاق في حالة غياب الاتفاقية.
          </li>
          <li>
            <span className={classes.keyword}>قانون حماية العمال (LAS):</span>
            القانون الذي ينظم أشكال التوظيف والفصل وترتيب الأولوية.
          </li>
          <li>
            <span className={classes.keyword}>الإغلاق:</span> عندما يمنع صاحب
            العمل العمال من دخول مكان العمل للضغط عليهم لقبول شروط صاحب العمل.
          </li>
          <li>
            <span className={classes.keyword}>
              قانون المشاركة في القرار (MBL):
            </span>
            القانون الذي يعطي النقابات العمالية والموظفين تأثيرًا على القرارات
            في مكان العمل.
          </li>
          <li>
            <span className={classes.keyword}>العمل عبر المنصات:</span> عمل يتم
            التوسط له عبر منصات رقمية (مثل Foodora، Uber).
          </li>
          <li>
            <span className={classes.keyword}>فترة التجربة:</span> عقد ابتدائي
            بحد أقصى 6 أشهر يتحول إلى عقد دائم إذا كان الطرفان راضيين.
          </li>
          <li>
            <span className={classes.keyword}>النموذج السويدي:</span> نظام حيث
            تنظم أطراف سوق العمل ظروف العمل من خلال الاتفاقيات الجماعية.
          </li>
          <li>
            <span className={classes.keyword}>عقد محدد المدة خاص:</span> عقد
            محدد المدة (عقد مشروع، فترات ذروة العمل).
          </li>
          <li>
            <span className={classes.keyword}>عمل موسمي:</span> عمل يمكن أداؤه
            فقط خلال جزء معين من السنة (مثل منتجعات التزلج، التخييم).
          </li>
          <li>
            <span className={classes.keyword}>عمل منهجي في بيئة العمل:</span>{" "}
            عمل صاحب العمل المستمر للوقاية من الأمراض والحوادث.
          </li>
          <li>
            <span className={classes.keyword}>عقد دائم:</span> عقد ثابت بدون
            تاريخ انتهاء.
          </li>
          <li>
            <span className={classes.keyword}>ترتيب الأولوية:</span> قاعدة أن من
            كان موظفًا لأقصر فترة يُفصل أولاً في حالة نقص العمل ("الآخر دخولاً
            أول خروجاً").
          </li>
          <li>
            <span className={classes.keyword}>وكالة (Vikariat):</span> عقد محدد
            المدة ليحل محل شخص في إجازة مرضية، إجازة والدية، إلخ.
          </li>
          <li>
            <span className={classes.keyword}>العمل الإضافي:</span> عمل يتجاوز
            وقت العمل العادي، عادة ما يعطي تعويضًا إضافيًا.
          </li>
        </ul>
      </section>
    </div>
  );
}
