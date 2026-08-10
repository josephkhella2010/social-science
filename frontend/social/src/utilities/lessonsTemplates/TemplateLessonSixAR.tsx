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

export default function StatsskickOchDemokratiArabic() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>الفصل السادس: 6-  هكذا تُحكم السويد</h1>
      <p className={classes.subtitle}>ملخص كامل</p>

      {/* ===== 1. القوانين الأساسية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. القوانين الأساسية</h2>
        <p className={classes.paragraph}>
          تمتلك السويد أربعة قوانين أساسية تشكل أساس حكم البلاد. يصعب تعديلها
          أكثر من القوانين العادية.
        </p>

        <h3 className={classes.subHeading}>ما هو القانون الأساسي؟</h3>
        <ul className={classes.list}>
          <li>قانون يعلو فوق جميع القوانين الأخرى وينظم كيفية حكم البلاد.</li>
        </ul>

        <h3 className={classes.subHeading}>القوانين الأساسية الأربعة:</h3>
        <ul className={classes.list}>
          <li>
            <strong>قانون الحكم (RF):</strong> أهم قانون أساسي. ينظم كيفية حكم
            البلاد، وحكم الشعب، وحقوق المواطنين.
          </li>
          <li>
            <strong>قانون حرية الطباعة (TF):</strong> يمنح الحق في إصدار
            المطبوعات ويحمي حماية المصادر.
          </li>
          <li>
            <strong>قانون حرية التعبير الأساسي (YGL):</strong> يحمي حرية التعبير
            في الراديو والتلفزيون والسينما والإنترنت.
          </li>
          <li>
            <strong>قانون خلافة العرش:</strong> ينظم خلافة العرش في الأسرة
            المالكة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>كيف يتم تعديل القانون الأساسي؟</h3>
        <ul className={classes.list}>
          <li>يجب على البرلمان اتخاذ قرارين متطابقين.</li>
          <li>يجب أن تكون هناك انتخابات برلمانية بين القرارين.</li>
          <li>يكفي الأغلبية البسيطة (أكثر من نصف المصوتين) في كلا القرارين.</li>
          <li>
            <strong>مثال:</strong> في عام 2010، تم تعديل قانون الحكم لتضمين
            "التنمية المستدامة" كهدف للسلطة العامة.
          </li>
          <li>
            <strong>انتقادات:</strong> قيل إنه من السهل جدًا تعديل القوانين
            الأساسية. اقترح تحقيق أنه في القرار الثاني يجب أن تكون هناك أغلبية
            الثلثين من جميع الأعضاء.
          </li>
        </ul>
      </section>

      {/* ===== 2. قانون الحكم ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. قانون الحكم (RF)</h2>
        <p className={classes.paragraph}>
          قانون الحكم هو أهم قانون أساسي ويصف كيفية توزيع السلطة.
        </p>

        <h3 className={classes.subHeading}>الفقرة التأسيسية (RF 1 kap. 1 §)</h3>
        <ul className={classes.list}>
          <li>
            تبدأ بعبارة: <em>"جميع السلطات العامة في السويد تنبع من الشعب."</em>
          </li>
          <li>هذا يؤكد أن السويد دولة ديمقراطية.</li>
        </ul>

        <h3 className={classes.subHeading}>الحقوق والحريات (RF 2 kap.)</h3>
        <ul className={classes.list}>
          <li>يسرد الفصل الحقوق الأساسية للمواطنين.</li>
          <li>
            <strong>حقوق مطلقة:</strong> لا يمكن تقييدها دون تعديل القانون
            الأساسي.
            <ul className={classes.list}>
              <li>
                مثال: حرية الدين، الحماية من العقوبات البدنية والتعذيب، الحماية
                من الإجبار على الكشف عن الآراء.
              </li>
            </ul>
          </li>
          <li>
            <strong>حقوق نسبية:</strong> يمكن تقييدها بقرارات برلمانية عادية،
            ولكن فقط لأغراض مقبولة في الديمقراطية.
            <ul className={classes.list}>
              <li>
                مثال: حرية التعبير، حرية المعلومات، حرية التجمع، حرية التظاهر.
              </li>
              <li>
                <strong>القيود:</strong> لا يجوز تقييد حرية التعبير والمعلومات
                إلا مراعاة لأمن الدولة، أو تموين الشعب، أو النظام العام، أو حرمة
                الحياة الخاصة، أو لمنع الجريمة.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className={classes.subHeading}>الاتفاقيات الدولية</h3>
        <ul className={classes.list}>
          <li>
            وقعت السويد على اتفاقية مجلس أوروبا لحقوق الإنسان واتفاقية حقوق
            الطفل، مما يعني أن القوانين السويدية يجب أن تتبع هذه الاتفاقيات.
          </li>
        </ul>
      </section>

      {/* ===== 3. البرلمان ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. البرلمان</h2>
        <p className={classes.paragraph}>
          البرلمان هو الممثل الأول للشعب ويمتلك السلطة التشريعية.
        </p>

        <h3 className={classes.subHeading}>سلطات البرلمان:</h3>
        <ul className={classes.list}>
          <li>تعيين رئيس الوزراء.</li>
          <li>مراقبة الحكومة والإدارة.</li>
          <li>سن القوانين.</li>
          <li>اتخاذ القرارات بشأن مالية الدولة (الميزانية).</li>
        </ul>

        <h3 className={classes.subHeading}>
          اختيار رئيس الوزراء (البرلمانية السلبية):
        </h3>
        <ul className={classes.list}>
          <li>يقترح رئيس البرلمان مرشحًا لرئاسة الوزراء.</li>
          <li>
            يصوت البرلمان. يتم قبول الاقتراح إذا صوت أقل من 175 عضوًا بـ"لا". أي
            أنه لا حاجة لأغلبية نشطة للاقتراح، فقط أن الأغلبية ليست ضده.
          </li>
          <li>
            إذا رُفض اقتراح رئيس البرلمان أربع مرات، يتم إجراء انتخابات مبكرة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>البرلمانية وسلطة الرقابة:</h3>
        <ul className={classes.list}>
          <li>
            <strong>البرلمانية:</strong> يجب أن تحظى الحكومة بثقة البرلمان
            للبقاء في منصبها. إذا اختلف البرلمان والحكومة، فالبرلمان هو المنتصر.
          </li>
          <li>
            <strong>تصويت حجب الثقة:</strong> يمكن للبرلمان إجبار وزير أو رئيس
            الوزراء على الاستقالة إذا صوت أكثر من نصف الأعضاء (175) لصالح ذلك.
            إذا سقط رئيس الوزراء، تسقط الحكومة بأكملها (ما لم يعلن رئيس الوزراء
            عن انتخابات مبكرة).
            <ul className={classes.list}>
              <li>
                مثال: في عام 2021، أُجبرت حكومة ستيفان لوفين على الاستقالة بعد
                تصويت بحجب الثقة.
              </li>
            </ul>
          </li>
          <li>
            <strong>لجنة الدستور (KU):</strong> تراقب عمل الوزراء وتتأكد من
            التزامهم بالقوانين وقرارات البرلمان. انتقادات KU ليس لها عواقب
            قانونية ولكنها قد تكون خسارة في المكانة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>عمل البرلمان في القاعة:</h3>
        <ul className={classes.list}>
          <li>
            يتم إعداد مقترحات من الحكومة (مقترحات تشريعية) أو من أعضاء فرديين
            (مقترحات) في اللجان.
          </li>
          <li>
            تكتب اللجنة تقريرًا مع اقتراحها للقرار. يمكن للأحزاب الصغيرة كتابة
            تحفظات (آراء مخالفة).
          </li>
          <li>يناقش التقرير في القاعة ثم يتم التصويت عليه.</li>
          <li>
            يُبلغ قرار البرلمان بعد ذلك إلى الحكومة، التي تتولى مسؤولية تنفيذه.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الانضباط الحزبي:</h3>
        <ul className={classes.list}>
          <li>
            على الرغم من أن الأعضاء رسميًا لهم الحق في التصويت وفقًا لضميرهم،
            إلا أن الضغط من قيادة الحزب للتصويت وفقًا لخط الحزب قوي. وهذا ما
            يسمى بالانضباط الحزبي.
          </li>
        </ul>

        <h3 className={classes.subHeading}>مفاهيم مهمة:</h3>
        <ul className={classes.list}>
          <li>
            <strong>مقترح تشريعي:</strong> اقتراح قانون من الحكومة إلى البرلمان.
          </li>
          <li>
            <strong>مقترح:</strong> اقتراح من عضو برلماني فردي أو مجموعة حزبية.
          </li>
          <li>
            <strong>تقرير اللجنة:</strong> اقتراح اللجنة للقرار في قضية ما.
          </li>
          <li>
            <strong>تحفظ:</strong> رأي مخالف لأقلية في تقرير لجنة.
          </li>
          <li>
            <strong>تصويت:</strong> الاقتراع في قاعة البرلمان.
          </li>
        </ul>
      </section>

      {/* ===== 4. الانتخابات النسبية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. الانتخابات النسبية للبرلمان</h2>
        <p className={classes.paragraph}>
          تجري السويد انتخابات نسبية، مما يعني أن الأحزاب تحصل على عدد من
          المقاعد يتناسب تقريبًا مع عدد الأصوات التي تحصل عليها.
        </p>

        <ul className={classes.list}>
          <li>
            <strong>عتبة 4%:</strong> يجب أن يحصل الحزب على 4.0% على الأقل من
            الأصوات في البلاد بأكملها (أو 12% في دائرة انتخابية) للحصول على أي
            مقاعد.
          </li>
          <li>
            <strong>الدوائر الانتخابية:</strong> تنقسم السويد إلى 29 دائرة
            انتخابية (غالبًا مقاطعات). 310 من المقاعد هي مقاعد ثابتة توزع بين
            الدوائر الانتخابية بناءً على عدد الناخبين المؤهلين هناك.
          </li>
          <li>
            <strong>مقاعد التوازن:</strong> المقاعد الـ 39 المتبقية هي مقاعد
            توازن توزع في جميع أنحاء البلاد لجعل التوزيع أكثر عدالة وإعطاء
            الأحزاب الصغيرة فرصة. غالبًا ما تحصل الأحزاب الصغيرة على حصة كبيرة
            من مقاعد التوازن.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الانتخابات البرلمانية 2022:</h3>
        <ul className={classes.list}>
          <li>
            <strong>الفائزون:</strong> ديمقراطيو السويد (الأكثر زيادة)، الحزب
            الاشتراكي الديمقراطي وحزب البيئة.
          </li>
          <li>
            <strong>الخاسرون:</strong> حزب المحافظين (أصبح أصغر من SD)، حزب
            الوسط، الديمقراطيون المسيحيون والليبراليون.
          </li>
          <li>
            <strong>اتفاقية تيدو:</strong> بعد الانتخابات، تشكلت حكومة من M وKD
            وL بدعم من SD. أبرمت الأحزاب الأربعة اتفاقية تيدو، التي تصف سياسة
            التعاون. يحصل SD على نفوذ كبير على الرغم من عدم مشاركتهم في الحكومة.
          </li>
        </ul>
      </section>

      {/* ===== 5. الحكومة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. الحكومة</h2>
        <p className={classes.paragraph}>
          تحكم الحكومة البلاد وهي مسؤولة أمام البرلمان. (RF 1 kap. 6 §)
        </p>

        <h3 className={classes.subHeading}>أنواع الحكومات المختلفة:</h3>
        <ul className={classes.list}>
          <li>
            <strong>حكومة حزب واحد:</strong> تتكون من حزب واحد فقط (مثل أندرسون
            2021-2022).
          </li>
          <li>
            <strong>حكومة ائتلافية:</strong> تتكون من حزبين أو أكثر (مثل
            كريسترسون 2022).
          </li>
          <li>
            <strong>حكومة أغلبية:</strong> تحظى بدعم أكثر من نصف أعضاء البرلمان.
            هذا أمر نادر.
          </li>
          <li>
            <strong>حكومة أقلية:</strong> تحظى بدعم بحد أقصى 174 عضوًا. هذا هو
            الوضع الطبيعي في السويد.
          </li>
        </ul>

        <h3 className={classes.subHeading}>كيف تُشكل الحكومة؟</h3>
        <ul className={classes.list}>
          <li>يقترح رئيس البرلمان رئيسًا للوزراء.</li>
          <li>يوافق البرلمان على الاقتراح.</li>
          <li>يعين رئيس الوزراء بنفسه وزراءه (الحكومة).</li>
        </ul>

        <h3 className={classes.subHeading}>سلطات الحكومة (سلطة التوجيه):</h3>
        <ul className={classes.list}>
          <li>
            <strong>مبادرة التشريع:</strong> تقدم الحكومة مقترحات تشريعية
            للبرلمان.
          </li>
          <li>
            <strong>التحقيقات:</strong> يمكن للحكومة تعيين محققين (غالبًا من
            كبار المسؤولين، وأحيانًا برلمانيين) للتحقيق في قضية قبل تقديم مقترح
            تشريعي.
          </li>
          <li>
            <strong>اللوائح:</strong> يمكن للحكومة نفسها سن لوائح، وهي قواعد
            أكثر تفصيلاً في إطار القوانين.
          </li>
          <li>
            <strong>التعيينات:</strong> تعين الحكومة رؤساء السلطات الحكومية
            (المديرين العامين).
          </li>
        </ul>

        <h3 className={classes.subHeading}>لماذا تستقيل الحكومة؟</h3>
        <ul className={classes.list}>
          <li>
            <strong>بعد الانتخابات:</strong> عادةً ما يكون هناك تغيير حكومي بعد
            الانتخابات، لكنه ليس تلقائيًا.
          </li>
          <li>
            <strong>حجب الثقة:</strong> إذا سقط رئيس الوزراء.
          </li>
          <li>
            <strong>الهزيمة في قضية مهمة:</strong> إذا خسر رئيس الوزراء تصويتًا
            حيث طرح سؤالاً وزاريًا (هدد بالاستقالة).
          </li>
          <li>
            <strong>الخلافات الداخلية:</strong> خلاف داخل حكومة ائتلافية.
          </li>
        </ul>
      </section>

      {/* ===== 6. رئيس الدولة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. رئيس الدولة (الملك)</h2>
        <ul className={classes.list}>
          <li>
            <strong>الدور:</strong> الملك (كارل السادس عشر غوستاف) هو رئيس
            الدولة ولكن ليس له سلطة سياسية. مهامه احتفالية وتمثيلية في المقام
            الأول.
          </li>
          <li>
            <strong>المهام:</strong>
            <ul className={classes.list}>
              <li>يمثل السويد في الزيارات الرسمية.</li>
              <li>يعلن افتتاح جلسة البرلمان (بناءً على طلب رئيس البرلمان).</li>
              <li>
                يرأس مجلس الشؤون الخارجية والمجلس الاستشاري (ولكن دون المشاركة
                في المناقشات السياسية).
              </li>
            </ul>
          </li>
          <li>
            <strong>قانون خلافة العرش:</strong> ينظم خلافة العرش. منذ عام 1980،
            يوجد في السويد خلافة كاملة للعرش، مما يعني أن الابن الأكبر يرث
            العرش، بغض النظر عن الجنس. جعل هذا فيكتوريا وليّة عهد بدلاً من
            شقيقها الأصغر كارل فيليب.
          </li>
          <li>
            <strong>حصانة من الملاحقة:</strong> لا يمكن محاكمة الملك بتهمة
            جنائية. هذا أمر نظري، ولكن عمليًا سيكون أزمة دستورية إذا ارتكب جريمة
            خطيرة. الملك هو واحد من القلائل في السويد الذين ليس لديهم حرية
            الدين؛ يجب أن ينتمي إلى الكنيسة اللوثرية.
          </li>
        </ul>
      </section>

      {/* ===== 7. الإدارة الحكومية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. الإدارة الحكومية</h2>
        <p className={classes.paragraph}>
          الإدارة الحكومية هي "الذراع الممدودة" للحكومة وتتولى تنفيذ قرارات
          البرلمان والحكومة.
        </p>

        <h3 className={classes.subHeading}>سلطات الإدارة:</h3>
        <ul className={classes.list}>
          <li>سلطات مثل الهيئة الوطنية للتعليم، CSN وهيئة الغذاء.</li>
          <li>
            <strong>مستقلة:</strong> لا يجوز للحكومة توجيهها في القضايا الفردية.
            وهذا ما يسمى بالتوجيه الوزاري وهو محظور. الغرض هو ضمان الأمن
            القانوني والحياد.
          </li>
          <li>
            <strong>مفتوحة:</strong> ينطبق مبدأ العلانية، مما يعني أن جميع
            الوثائق علنية ما لم تنطبق السرية. هذا يمنع الفساد.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الإدارة الحكومية الإقليمية:</h3>
        <ul className={classes.list}>
          <li>
            <strong>مجالس المحافظات</strong> هي أعلى سلطة في كل محافظة. تتحقق من
            التزام القوانين في المحافظة في مجالات مثل البيئة والغذاء والمرور.
          </li>
        </ul>

        <h3 className={classes.subHeading}>أمين المظالم البرلماني (JO):</h3>
        <ul className={classes.list}>
          <li>
            يتحقق من التزام السلطات والموظفين بالقوانين وعدم انتهاك حقوق
            المواطنين.
          </li>
        </ul>
      </section>

      {/* ===== 8. محاكم الإدارة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. محاكم الإدارة</h2>
        <p className={classes.paragraph}>
          تفحص محاكم الإدارة الطعون ضد القرارات التي تتخذها السلطات، مثل مصلحة
          الضرائب أو لجنة الرعاية الاجتماعية.
        </p>

        <ul className={classes.list}>
          <li>
            <strong>الهدف:</strong> أن يتمكن المواطنون من الطعن في قرارات
            السلطات. هذا ركيزة أساسية في دولة القانون.
          </li>
          <li>
            <strong>المستويات:</strong>
            <ol className={classes.list}>
              <li>
                <strong>محكمة الإدارة:</strong> الدرجة الأولى. توجد في 12 مكانًا
                في السويد.
              </li>
              <li>
                <strong>محكمة الاستئناف الإدارية:</strong> الدرجة الثانية. توجد
                في ستوكهولم وغوتنبرغ ويونشوبينغ وسوندسفال.
              </li>
              <li>
                <strong>المحكمة الإدارية العليا:</strong> أعلى درجة. تنظر بشكل
                أساسي فقط في القضايا ذات الأهمية السابقة (المرشدة للمحاكم
                الأخرى).
              </li>
            </ol>
          </li>
          <li>
            <strong>التكلفة:</strong> لا تكلف شيئًا للطعن في قرار سلطة، ولا
            يحتاج الخاسر إلى دفع تكاليف محاكمة الطرف الآخر (على عكس المحاكم
            العامة).
          </li>
        </ul>
      </section>

      {/* ===== 9. العصيان المدني ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. العصيان المدني</h2>
        <p className={classes.paragraph}>
          العصيان المدني يعني كسر القانون عمدًا للاحتجاج على شيء يعتبر غير عادل.
          يطرح الفصل سؤالاً حول ما إذا كان العصيان المدني جريمة أم تضامنًا.
        </p>

        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> موقف سياسي يتم تنفيذه علنًا وبلا عنف من
            قبل مواطن لإثارة الرأي العام. يكون الشخص مستعدًا لقبول عقوبة جريمته.
          </li>
          <li>
            <strong>أمثلة:</strong>
            <ul className={classes.list}>
              <li>نضال مارتن لوثر كينغ من أجل الحقوق المدنية.</li>
              <li>
                نشطاء المناخ الذين يقطعون الطرق (مثل استعادة الأراضي الرطبة).
              </li>
              <li>نشطاء حقوق الحيوان الذين يطلقون حيوانات المنك.</li>
            </ul>
          </li>
          <li>
            <strong>نقاش:</strong> هل يجب على المحاكم أن تأخذ في الاعتبار
            "الدوافع الأخلاقية" للناشطين؟ أم يجب معاقبة جميع انتهاكات القانون
            بالتساوي؟ يرى الناشطون أنهم يثيرون قضايا مهمة، بينما يرى النقاد أنهم
            يخلقون تهيجًا ويحولون التركيز عن القضية الأساسية.
          </li>
          <li>
            <strong>التقييم القانوني:</strong> في السويد، حكمت المحاكم في عدة
            قضايا على نشطاء المناخ بتهمة التخريب، الذي له عقوبات أعلى من التصرف
            التعسفي. هذه مناقشة قانونية مستمرة.
          </li>
        </ul>
      </section>

      {/* ===== الكلمات الرئيسية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>الكلمات الرئيسية</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>قانون أساسي:</span> أحد القوانين
            الأربعة التي تعلو فوق جميع القوانين الأخرى وتنظم كيفية حكم السويد.
          </li>
          <li>
            <span className={classes.keyword}>قانون الحكم (RF):</span> أهم قانون
            أساسي.
          </li>
          <li>
            <span className={classes.keyword}>البرلمانية السلبية:</span> النظام
            الذي يُقبل فيه مرشح رئاسة الوزراء إذا لم تعارضه أغلبية البرلمان.
          </li>
          <li>
            <span className={classes.keyword}>تصويت حجب الثقة:</span> إمكانية
            البرلمان إجبار وزير أو الحكومة بأكملها على الاستقالة.
          </li>
          <li>
            <span className={classes.keyword}>لجنة الدستور (KU):</span> لجنة
            البرلمان التي تراقب الحكومة.
          </li>
          <li>
            <span className={classes.keyword}>مقترح تشريعي:</span> اقتراح قانون
            من الحكومة.
          </li>
          <li>
            <span className={classes.keyword}>مقترح:</span> اقتراح من عضو
            برلماني فردي.
          </li>
          <li>
            <span className={classes.keyword}>تقرير اللجنة:</span> اقتراح اللجنة
            للقرار.
          </li>
          <li>
            <span className={classes.keyword}>تحفظ:</span> رأي مخالف لأقلية في
            لجنة.
          </li>
          <li>
            <span className={classes.keyword}>تصويت:</span> الاقتراع في قاعة
            البرلمان.
          </li>
          <li>
            <span className={classes.keyword}>انتخابات نسبية:</span> نظام
            انتخابي تحصل فيه الأحزاب على مقاعد تتناسب مع عدد الأصوات.
          </li>
          <li>
            <span className={classes.keyword}>عتبة 4%:</span> الحد الذي يجب على
            الحزب تجاوزه لدخول البرلمان.
          </li>
          <li>
            <span className={classes.keyword}>مقاعد التوازن:</span> مقاعد توزع
            في جميع أنحاء البلاد لجعل نتيجة الانتخابات أكثر تناسبًا.
          </li>
          <li>
            <span className={classes.keyword}>حكومة ائتلافية:</span> حكومة تتكون
            من عدة أحزاب.
          </li>
          <li>
            <span className={classes.keyword}>حكومة أقلية:</span> حكومة تفتقر
            إلى الأغلبية الخاصة في البرلمان.
          </li>
          <li>
            <span className={classes.keyword}>التوجيه الوزاري:</span> المحاولة
            غير المسموح بها لتوجيه سلطة في قضية فردية.
          </li>
          <li>
            <span className={classes.keyword}>محكمة إدارة:</span> محكمة تنظر في
            الطعون ضد قرارات السلطات.
          </li>
          <li>
            <span className={classes.keyword}>سابقة قضائية:</span> قضية تصبح
            مرشدة لقضايا مستقبلية مماثلة.
          </li>
          <li>
            <span className={classes.keyword}>العصيان المدني:</span> انتهاك
            متعمد للقانون كعمل احتجاجي للتأثير على المجتمع.
          </li>
        </ul>
      </section>

      {/* ===== الأسئلة والأجوبة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>الأسئلة والأجوبة</h2>

        {/* سؤال 1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            1. ما هي القوانين الأساسية الأربعة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              القوانين الأساسية الأربعة للسويد هي:
            </p>
            <ol className={classes.list}>
              <li>
                <strong>قانون الحكم (RF):</strong> ينظم كيفية حكم السويد، وحقوق
                المواطنين، وتوزيع السلطة العامة.
              </li>
              <li>
                <strong>قانون خلافة العرش (SO):</strong> ينظم خلافة العرش ومن
                يصبح رئيسًا للدولة في السويد.
              </li>
              <li>
                <strong>قانون حرية الطباعة (TF):</strong> يضمن حق طباعة ونشر
                المطبوعات دون رقابة وينظم مبدأ العلانية.
              </li>
              <li>
                <strong>قانون حرية التعبير الأساسي (YGL):</strong> يضمن حرية
                التعبير في الراديو والتلفزيون والسينما والتسجيلات التقنية
                والإنترنت.
              </li>
            </ol>
          </div>
        </div>

        {/* سؤال 2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. كيف يتم تعديل القانون الأساسي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              لتعديل قانون أساسي، يلزم قراران برلمانيان متطابقان مع انتخابات
              برلمانية بينهما. هذا موجود لحماية الديمقراطية وإعطاء الشعب فرصة
              لاتخاذ موقف من الاقتراح في الانتخابات.
            </p>
          </div>
        </div>

        {/* سؤال 3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. لخص الفقرة الأولى من قانون الحكم.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تبدأ الفقرة التأسيسية لقانون الحكم بعبارة:{" "}
              <em>"جميع السلطات العامة في السويد تنبع من الشعب"</em>. وتؤكد أن
              الحكم الشعبي السويدي يقوم على حرية تكوين الرأي، والاقتراع العام
              والمتساوي، والنظام التمثيلي، والبرلمانية، والحكم الذاتي المحلي،
              وسيادة القانون.
            </p>
          </div>
        </div>

        {/* سؤال 4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. كيف يتم اختيار رئيس الوزراء؟
          </h3>
          <div className={classes.answer}>
            <ol className={classes.list}>
              <li>يتشاور رئيس البرلمان مع قادة الأحزاب ونواب الرئيس.</li>
              <li>يقدم رئيس البرلمان اقتراحًا لرئيس الوزراء أمام البرلمان.</li>
              <li>
                يصوت البرلمان على الاقتراح. إذا لم تصوت أغلبية (175 عضوًا على
                الأقل) بـ"لا"، يُقبل الاقتراح.
              </li>
              <li>
                إذا رُفض اقتراح رئيس البرلمان أربع مرات، تُجرى انتخابات مبكرة
                خلال ثلاثة أشهر.
              </li>
            </ol>
          </div>
        </div>

        {/* سؤال 5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            5. ماذا تعني البرلمانية السلبية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              البرلمانية السلبية تعني أن رئيس الوزراء أو الحكومة لا يحتاج إلى
              أغلبية نشطة تصوت بـ"نعم" ليتم انتخابه أو البقاء في منصبه. يكفي أن
              أغلبية في البرلمان (175 عضوًا على الأقل) لا تصوت بـ"لا".
            </p>
          </div>
        </div>

        {/* سؤال 6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. ما هي المهام الرئيسية الأربعة للبرلمان؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              المهام الرئيسية الأربعة للبرلمان هي:
            </p>
            <ol className={classes.list}>
              <li>تعيين رئيس وزراء السويد.</li>
              <li>سن القوانين.</li>
              <li>اتخاذ القرارات بشأن مالية الدولة (ميزانية الدولة).</li>
              <li>مراقبة الحكومة وسلطات الدولة.</li>
            </ol>
          </div>
        </div>
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. ماذا تعني طريقة الانتخاب النسبي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تعني الانتخابات النسبية أن المقاعد في البرلمان السويدي (الريكسداغ)
              تُوزَّع بما يتناسب مع عدد الأصوات التي يحصل عليها كل حزب في
              الانتخابات. فإذا حصل حزب، على سبيل المثال، على 10٪ من الأصوات،
              فينبغي أن يحصل تقريبًا على 10٪ من مقاعد الريكسداغ. لكن لدخول
              البرلمان، يجب أن يصل الحزب إلى عتبة 4٪.
            </p>
          </div>
        </div>

        {/* السؤال 8 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. ما السلطة التي تملكها الحكومة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تتمتع الحكومة بالسلطة التنفيذية وتحكم البلاد. وتشمل سلطاتها ما
              يلي:
            </p>
            <ul className={classes.list}>
              <li>
                تقديم مقترحات القوانين (المشروعات الحكومية) ومقترحات الميزانية
                إلى الريكسداغ.
              </li>
              <li>إصدار اللوائح (قواعد تفصيلية لكيفية تطبيق القوانين).</li>
              <li>قيادة السياسة الخارجية والدفاع.</li>
              <li>إدارة وتعيين رؤساء الهيئات الحكومية الإدارية.</li>
              <li>منح العفو في بعض القضايا الجنائية.</li>
            </ul>
          </div>
        </div>

        {/* السؤال 9 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. ما الفرق بين وزارة التعليم، ولجنة التعليم في الريكسداغ، وهيئة
            المدارس السويدية (Skolverket)؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>وزارة التعليم:</strong> تتبع للحكومة. يعمل فيها وزير
                التعليم والموظفون على إعداد سياسة الحكومة بشأن المدارس
                والمقترحات الحكومية.
              </li>
              <li>
                <strong>لجنة التعليم:</strong> تتبع للريكسداغ. وتتكون من 17
                عضوًا من أعضاء البرلمان، يراجعون ويُعدّون جميع مقترحات القوانين
                والاقتراحات المتعلقة بالمدارس والتعليم قبل أن يتخذ الريكسداغ
                قرارًا.
              </li>
              <li>
                <strong>هيئة المدارس السويدية (Skolverket):</strong> هي هيئة
                حكومية إدارية. وتطبّق عمليًا القوانين والقرارات التي أقرّها
                الريكسداغ والحكومة.
              </li>
            </ul>
          </div>
        </div>

        {/* السؤال 10 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. ما اسم رئيس الدولة في السويد؟ ومن هو وريث العرش؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>رئيس الدولة:</strong> الملك كارل السادس عشر غوستاف.
              </li>
              <li>
                <strong>وريث العرش:</strong> ولية العهد الأميرة فيكتوريا.
              </li>
            </ul>
          </div>
        </div>

        {/* السؤال 11 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. ماذا تعني ممارسة السلطة الإدارية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تعني ممارسة السلطة الإدارية أن تتخذ هيئة حكومية قرارات ملزمة
              قانونيًا للأفراد أو الشركات استنادًا إلى القوانين السارية (مثل
              قرارات تصاريح البناء، وصرف الإعانات، والضرائب أو رخص القيادة).
            </p>
          </div>
        </div>

        {/* السؤال 12 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. ما أنواع القضايا التي يمكن للمحاكم الإدارية الفصل فيها؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تفصل المحاكم الإدارية في النزاعات بين الأفراد/الشركات والسلطات
              الحكومية. وتشمل الأمثلة الطعون المتعلقة بقرارات الضرائب، وتصاريح
              البناء، وقرارات الخدمات الاجتماعية (مثل دعم المعيشة)، والرعاية
              الإلزامية (LVU/LVM)، وقضايا الأجانب/طلبات اللجوء.
            </p>
          </div>
        </div>

        {/* السؤال 13 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. ما إجابات الأسئلة التمهيدية لهذا الفصل؟
          </h3>
          <div className={classes.answer}>
            <ol className={classes.list}>
              <li>
                <strong>
                  إذا أراد رئيس الوزراء استبدال وزير الدفاع بالقائد الأعلى
                  للقوات المسلحة:
                </strong>{" "}
                يتمتع رئيس الوزراء بحرية كاملة في تعيين الوزراء وإعفائهم من
                مناصبهم. لكن القائد الأعلى للقوات المسلحة سيحتاج إلى الاستقالة
                من خدمته العسكرية للانضمام إلى الحكومة.
              </li>
              <li>
                <strong>
                  إذا أراد وزير التعليم تعيين لجنة تحقيق بشأن تقصير العطلة
                  الصيفية:
                </strong>{" "}
                نعم، فالحكومة هي التي تقرر تعيين لجان التحقيق الحكومية وتحدد
                توجيهاتها.
              </li>
              <li>
                <strong>
                  إذا تحولت ولية العهد فيكتوريا إلى الكاثوليكية وأرادت الاستمرار
                  كولية للعهد:
                </strong>{" "}
                لا، فوفقًا لقانون الخلافة يجب أن ينتمي رئيس الدولة ووريث العرش
                إلى المذهب الإنجيلي اللوثري. ويؤدي التحول إلى فقدان الحق في
                العرش.
              </li>
            </ol>
          </div>
        </div>

        {/* السؤال 14 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. نحو 20 بالمئة من السويديين لا يصوتون عندما تجرى الانتخابات. ما
            النتائج المترتبة على ذلك؟ بالنسبة للسويد؟ بالنسبة للديمقراطية؟
            بالنسبة لقبول مقترحات القوانين؟ وما الأسباب التي يمكن أن تفسر لماذا
            لا يذهب بعض الناس للتصويت؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>العواقب على السويد والديمقراطية:</strong> تصبح الديمقراطية
              التمثيلية أضعف إذا تم استبعاد جزء كبير من السكان. وقد يؤدي ذلك إلى
              انحياز يجعل السياسيين يركزون أساسًا على الفئات التي تصوّت بالفعل.
            </p>
            <p className={classes.paragraph}>
              <strong>بالنسبة لقبول مقترحات القوانين:</strong> إذا كانت نسبة
              المشاركة في الانتخابات منخفضة، فقد يشعر المواطنون بأن القوانين
              التي تم سنّها تفتقر إلى التأييد الشعبي والشرعية.
            </p>
            <p className={classes.paragraph}>
              <strong>أسباب انخفاض المشاركة الانتخابية:</strong> انخفاض الثقة
              بالسياسيين، ونقص المعرفة بالنظام السياسي، والشعور بالتهميش، أو
              الاعتقاد بأن تصويت الفرد لن يحدث أي فرق.
            </p>
          </div>
        </div>
      </section>

      {/* ===== أسئلة التحليل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>أسئلة التحليل</h2>

        {/* A1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A1. كيف ستجري انتخابات الريكسداغ لعام 2026؟ ماذا تقول مؤسسات استطلاع
            التوقعات؟ وماذا تقولون أنتم؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>ما تظهره التوقعات:</strong> تُظهر معاهد استطلاع الرأي
              والتوقعات السياسية عادةً وضعًا متقاربًا بين كتلة اليمين الحاكمة
              وكتلة المعارضة اليسارية الوسطية. ويتغير الوضع في استطلاعات الرأي
              تبعًا للعوامل الاقتصادية (تطور التضخم، وأسعار الفائدة)، وقضايا
              الأمن والرفاهية.
            </p>
            <p className={classes.paragraph}>
              <strong>التحليل الخاص:</strong> تعتمد نتيجة الانتخابات على الكتلة
              التي تنجح أكثر في حشد ناخبيها، وعلى القضايا التي تهيمن على الحملة
              الانتخابية (الاقتصاد، والرعاية الصحية، والقانون والنظام).
            </p>
          </div>
        </div>

        {/* A2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A2. ما أسباب كون السويد ملكية؟ وما النتائج التي قد تترتب على
            الانتقال إلى جمهورية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>أسباب الملكية:</strong> التقاليد التاريخية والتسوية التي
              تم التوصل إليها في قانون الحكم لعام 1974 (تسوية توريكوف)، حيث
              احتُفظ بالملك كرمز وحدوي غير سياسي، لكن جُرّد من كل سلطة سياسية.
            </p>
            <p className={classes.paragraph}>
              <strong>نتائج الجمهورية:</strong> سيكون للسويد رئيس دولة منتخب
              (رئيس). وسيتطلب ذلك تعديل الدستور (قانون الحكم وإلغاء قانون
              الخلافة). كما سيغيّر الشكل الاحتفالي لنظام الدولة، وسيتطلب إجراءات
              انتخاب أو تعيين جديدة لمنصب رئيس الدولة.
            </p>
          </div>
        </div>

        {/* A3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            A3. هل ينبغي لعضو في الريكسداغ أن يصوت دائمًا وفقًا لضميره؟ ما مزايا
            وجود انضباط حزبي واضح؟ وما عيوبه؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>مزايا الانضباط الحزبي:</strong> يخلق القدرة على التنبؤ
              والاستقرار في البرلمان. ويعرف الناخبون ما سيحصلون عليه عند التصويت
              لحزب ما، كما يسهل تشكيل الحكومة وتنفيذ البرامج السياسية.
            </p>
            <p className={classes.paragraph}>
              <strong>عيوب الانضباط الحزبي:</strong> يقلل من حرية أعضاء البرلمان
              الشخصية في التصرف، وقد يؤدي إلى إخضاع مصالح الناخبين المحليين أو
              القناعات الشخصية لقيادة الحزب.
            </p>
          </div>
        </div>
      </section>

      {/* ===== أسئلة المناقشة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>أسئلة المناقشة</h2>

        {/* D1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D1. كم عدد الجرائم التي تسقط بالتقادم بالنسبة لوزير، وكم تبلغ مدة
            التقادم؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يخضع الوزراء للقوانين الجنائية السويدية العادية فيما يتعلق
              بالجرائم العادية. أما إساءة استخدام المنصب أو الجرائم المرتكبة
              أثناء ممارسة منصب الوزير، فتُراجع المسؤولية عنها من قبل اللجنة
              الدستورية (KU)، ويمكن رفعها أمام المحكمة العليا (عبر إجراءات
              محاكمة خاصة لأعضاء الحكومة). وتخضع مدة التقادم للقواعد العامة في
              قانون العقوبات بحسب خطورة الجريمة (من سنتين إلى 25 سنة، في حين أن
              بعض الجرائم شديدة الخطورة لا تسقط بالتقادم إطلاقًا).
            </p>
          </div>
        </div>

        {/* D2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D2. ماذا تكون النتيجة إذا لم يرتكب السياسيون أي حماقة أبدًا؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              من ناحية، يزداد ذلك من ثقة الناس بالسياسيين. ومن ناحية أخرى، قد
              تؤدي بيئة لا يُسمح فيها بارتكاب الأخطاء إلى تجنب المخاطر، بحيث
              يصبح السياسيون أكثر حذرًا من اللازم، ويتجنبون القرارات الصعبة أو
              المبتكرة، ويبدون بعيدين عن الناخبين من الناحية الإنسانية.
            </p>
          </div>
        </div>

        {/* D3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D3. في انتخابات الريكسداغ لعام 2024، كان سن التصويت في ألمانيا 16
            عامًا. هل سيكون من الجيد في السويد خفض سن التصويت في انتخابات
            الريكسداغ والأقاليم والبلديات؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>حجج لصالح الخفض:</strong> يعزز ذلك المشاركة الديمقراطية
              للشباب في سن مبكرة، ويمنح فئة عمرية تتأثر مباشرة بالقرارات
              المستقبلية (التعليم، والمناخ) صوتًا.
            </p>
            <p className={classes.paragraph}>
              <strong>حجج ضد الخفض:</strong> سن الرشد في السويد هو 18 عامًا.
              وهناك منطق في أن تتوافق الحقوق والواجبات (مثل المسؤولية الجنائية،
              وإبرام العقود، والتصويت) معًا في السن نفسها.
            </p>
          </div>
        </div>

        {/* D4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D4. يُطلق على أعضاء الريكسداغ الذين يتركون حزبهم لكن يواصلون البقاء
            في البرلمان حتى نهاية الدورة الانتخابية اسم «النواب المستقلين». وعلى
            الرغم من أنهم غالبًا ما يتعرضون للعزلة الاجتماعية، فإنهم يحتفظون
            بمزاياهم المالية. هل ينبغي إجبار النواب المستقلين على ترك مقاعدهم
            البرلمانية لصالح نائب احتياطي من الحزب نفسه الذي كانوا ينتمون إليه
            عند انتخابهم؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>نعم، ينبغي أن يغادروا:</strong> يصوّت الناخبون أساسًا
              للأحزاب وبرامجها في نظام الانتخابات النسبية. وعندما يترك عضو
              البرلمان الحزب، يتغير توزيع المقاعد الذي صوّت الناخبون من أجله.
            </p>
            <p className={classes.paragraph}>
              <strong>لا، ينبغي أن يبقوا:</strong> وفقًا لقانون الحكم، فإن الشخص
              المنتخب هو عضو الريكسداغ، وليس الحزب. وهذا يحمي استقلال العضو
              الفردي من تعسف قيادة الحزب.
            </p>
          </div>
        </div>

        {/* D5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            D5. لماذا، في رأيك، يخصص أعضاء الريكسداغ وقتًا لكتابة الاقتراحات
            البرلمانية بينما يُرفض معظمها تقريبًا؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تعمل الاقتراحات البرلمانية كأداة مهمة من أجل:
            </p>
            <ol className={classes.list}>
              <li>
                إظهار للناخبين وللدائرة الانتخابية القضايا التي يدافع عنها
                العضو.
              </li>
              <li>
                طرح قضايا أيديولوجية جديدة وبدء نقاش يمكن أن يؤثر على سياسة
                الحزب أو الحكومة على المدى الطويل.
              </li>
              <li>لفت انتباه وسائل الإعلام إلى مشكلات محددة في المجتمع.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===== أسئلة التعمق ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>أسئلة التعمق</h2>

        {/* F1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F1. ما الذي يدور حوله النقاش السياسي الداخلي حاليًا؟ تابع النقاش في
            الصحف والتلفزيون. كيف تختلف آراء الأحزاب السياسية عن بعضها؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يهيمن على النقاش السياسي الداخلي غالبًا موضوع جرائم
              العصابات/الأمن، وموارد الرعاية الصحية، والمدرسة، واقتصاد الأسر
              وإمدادات الطاقة. وتظهر الاختلافات في أن أحزاب اليمين تؤكد غالبًا
              على خفض الضرائب، وتشديد العقوبات، وحلول السوق، بينما تؤكد أحزاب
              اليسار على زيادة توجيه الدولة، وزيادة تمويل الرفاهية، وتعزيز أنظمة
              الحماية الاجتماعية.
            </p>
          </div>
        </div>

        {/* F2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F2. تواصل مع عضو في الريكسداغ من دائرتك الانتخابية واطلب منه أن
            يخبرك عن العمل البرلماني. ما مدى قوة الانضباط الحزبي؟ كيف يجري
            النقاش في اللجنة التي ينتمي إليها – هل يناقش الأعضاء الأمور دون شروط
            مسبقة أم تتفق الأحزاب فيما بينها قبل معالجة القضية في اللجنة؟ ما
            القضايا التي يدافع عنها عضو الريكسداغ؟ وما الاقتراحات التي قدمها عضو
            الريكسداغ خلال هذه الدورة الانتخابية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <em>(مهمة عملية)</em> في اجتماعات اللجان، تكون الأحزاب عادةً قد
              نسّقت مواقفها داخل مجموعاتها البرلمانية قبل الاجتماع، مما يجعل
              الخطوط العامة واضحة غالبًا. ويُنظر إلى الانضباط الحزبي على أنه قوي
              في التصويتات الحاسمة، لكن عمل اللجان يتيح مع ذلك مجالًا للتسويات
              في بعض المسائل التفصيلية.
            </p>
          </div>
        </div>

        {/* F3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F3. اختر قضية تراها أنت وبعض زملائك في الصف مهمة، مثل تنمية المناطق
            الريفية، أو البطالة بين المهاجرين، أو مستقبل الرياضة النسائية. تواصل
            مع بعض الأحزاب السياسية واطرح أسئلة مباشرة.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <em>(مهمة جماعية عملية)</em> من خلال توجيه أسئلة مجمعة إلى المكاتب
              المحلية أو الوطنية للأحزاب، يمكن مقارنة مدى تحديد مقترحاتها، وما
              إذا كانت الحلول تعتمد على تدخلات حكومية، أو حوافز اقتصادية، أو
              تغييرات قانونية.
            </p>
          </div>
        </div>

        {/* F4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F4. استخدم موقع البلاط الملكي لمعرفة ما فعله الملك أو أفراد الأسرة
            المالكة الآخرون خلال الأسابيع الماضية، أو ما سيفعلونه خلال الأسابيع
            القريبة القادمة.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يتكون عمل الأسرة المالكة أساسًا من مهام التمثيل، والزيارات
              الرسمية، وتوزيع الجوائز والمنح الدراسية، والمشاركة في المراسم
              الرسمية وفعاليات تبادل المعلومات مع السلطات والمنظمات.
            </p>
          </div>
        </div>

        {/* F5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F5. ليس السياسيون وحدهم من يملكون السلطة، بل أيضًا وسائل الإعلام،
            والمؤثرون، وكبار قادة الشركات، والنقابات العمالية وغيرهم. ما أدوات
            السلطة المتاحة لهؤلاء؟ وكيف يمارسون سلطتهم؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>وسائل الإعلام والمؤثرون:</strong> يمارسون سلطة تحديد
                الأجندة من خلال اختيار القضايا التي تحظى بالاهتمام وكيفية عرضها.
              </li>
              <li>
                <strong>قادة الشركات:</strong> يمارسون سلطة اقتصادية من خلال
                قرارات الاستثمار، وخلق الوظائف، والضغط على صناع القرار (اللوبي).
              </li>
              <li>
                <strong>النقابات العمالية:</strong> تمارس سلطة تنظيمية من خلال
                الاتفاقيات الجماعية، وحق الإضراب، والضغط على المشرّعين.
              </li>
            </ul>
          </div>
        </div>

        {/* F6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            F6. أي الوزراء يظهرون أكثر في وسائل الإعلام؟ راجع الصحف وأخبار
            الراديو والتلفزيون خلال أسبوع. وما القضايا التي تتعلق بها التغطية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              غالبًا ما يكون رئيس الوزراء، ووزير المالية، ووزير العدل هم أكثر
              الوزراء ظهورًا في وسائل الإعلام، لأن مجالات مسؤوليتهم تشمل السياسة
              العامة للدولة، واقتصاد الدولة، وقضايا الأمن/الجريمة.
            </p>
          </div>
        </div>
      </section>

      {/* ===== كلمات مفتاحية إضافية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>كلمات مفتاحية إضافية</h2>

        <ul className={classes.list}>
          <li>
            <span className={classes.keyword}>
              فترة تقديم الاقتراحات العامة:
            </span>{" "}
            الفترة خلال الخريف التي يُسمح فيها لأعضاء الريكسداغ بتقديم اقتراحات
            حول أي موضوع كان.
          </li>
          <li>
            <span className={classes.keyword}>
              الهيئة الإدارية الحكومية المركزية:
            </span>{" "}
            هيئة حكومية تغطي كامل البلاد (مثل مصلحة الضرائب السويدية أو هيئة
            المدارس السويدية).
          </li>
          <li>
            <span className={classes.keyword}>وزارة:</span> وحدة داخل الحكومة
            يقودها وزير وتُعدّ قضايا الحكومة.
          </li>
          <li>
            <span className={classes.keyword}>حكومة الحزب الواحد:</span> حكومة
            تتكون من حزب واحد فقط.
          </li>
          <li>
            <span className={classes.keyword}>انتخابات مبكرة:</span> انتخابات
            للريكسداغ تُجرى بين الانتخابات العادية.
          </li>
          <li>
            <span className={classes.keyword}>معالجة القضية:</span> إعداد القضية
            والتحقيق فيها واتخاذ قرار بشأنها لدى هيئة حكومية.
          </li>
          <li>
            <span className={classes.keyword}>استجواب برلماني:</span> سؤال أكثر
            تفصيلًا في الريكسداغ يوجهه عضو إلى وزير، ويؤدي إلى نقاش في القاعة.
          </li>
          <li>
            <span className={classes.keyword}>مسألة ثقة حكومية:</span> عندما
            تربط الحكومة مقترح قانون باستقالتها هي، لإجبار الريكسداغ على التصويت
            بالموافقة.
          </li>
          <li>
            <span className={classes.keyword}>لجنة تحقيق:</span> مجموعة من
            الأشخاص تكلفها الحكومة بالتحقيق في مسألة محددة (تحقيق حكومي).
          </li>
          <li>
            <span className={classes.keyword}>مجلس الدولة:</span> اجتماع تُطلع
            فيه الحكومة رئيس الدولة (الملك) على حالة البلاد برئاسة الملك.
          </li>
          <li>
            <span className={classes.keyword}>الدستور:</span> القوانين الأساسية
            ونظام الحكم في دولة ما.
          </li>
          <li>
            <span className={classes.keyword}>محافظ المقاطعة:</span> رئيس
            الإدارة الإقليمية، ويعينه الحكومة.
          </li>
          <li>
            <span className={classes.keyword}>الإدارة الإقليمية:</span> السلطة
            الإدارية الحكومية الإقليمية في إحدى المقاطعات.
          </li>
          <li>
            <span className={classes.keyword}>حكومة الأغلبية:</span> حكومة تحظى
            بدعم أكثر من نصف أعضاء الريكسداغ.
          </li>
          <li>
            <span className={classes.keyword}>مقعد برلماني:</span> مقعد في
            الريكسداغ أو في هيئة تملك سلطة اتخاذ القرار.
          </li>
          <li>
            <span className={classes.keyword}>مبدأ علنية الوثائق:</span> حق جميع
            المواطنين في الاطلاع على الوثائق العامة لدى السلطات الحكومية.
          </li>
          <li>
            <span className={classes.keyword}>تحقيق برلماني:</span> تحقيق يشارك
            فيه ممثلون عن أحزاب الريكسداغ.
          </li>
          <li>
            <span className={classes.keyword}>بيان الحكومة:</span> خطاب يعرض فيه
            رئيس الوزراء سياسة حكومته والوزراء فيها.
          </li>
          <li>
            <span className={classes.keyword}>إحالة للمراجعة:</span> إرسال مقترح
            قانون إلى السلطات والمنظمات المتخصصة لمراجعته قبل اتخاذ القرار.
          </li>
          <li>
            <span className={classes.keyword}>برلمان الساميين:</span> هيئة
            منتخبة وسلطة حكومية تمثل الساميين في السويد.
          </li>
          <li>
            <span className={classes.keyword}>سؤال خطي:</span> سؤال كتابي قصير
            من عضو في الريكسداغ إلى وزير.
          </li>
          <li>
            <span className={classes.keyword}>مكتب رئيس الوزراء:</span> الوزارة
            الخاصة برئيس الوزراء التي تقود وتنسق عمل الحكومة.
          </li>
          <li>
            <span className={classes.keyword}>حزب داعم:</span> حزب لا يشارك في
            الحكومة لكنه يتعاون معها ويصوّت إلى جانبها.
          </li>
          <li>
            <span className={classes.keyword}>اتفاق تيدو:</span> اتفاق التعاون
            المكتوب بين الحكومة (M وKD وL) وحزبها الداعم (SD) الذي أُبرم عام
            2022.
          </li>
          <li>
            <span className={classes.keyword}>تحقيق:</span> دراسة شاملة لمسألة
            ما قبل صياغة مقترح قانون.
          </li>
          <li>
            <span className={classes.keyword}>لجنة الشؤون الخارجية:</span> هيئة
            تتشاور فيها الحكومة مع الريكسداغ بشأن السياسة الخارجية برئاسة الملك.
          </li>
          <li>
            <span className={classes.keyword}>تقرير اللجنة:</span> تقرير مكتوب
            من لجنة يتضمن اقتراحًا بشأن كيفية تصويت الريكسداغ على مقترح قانون.
          </li>
          <li>
            <span className={classes.keyword}>الطعن:</span> طلب أن تقوم جهة أعلى
            أو محكمة أعلى بمراجعة ما إذا كان القرار أو الحكم صحيحًا.
          </li>
        </ul>
      </section>
    </div>
  );
}
