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

export default function TemplateLessonThreeAR() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>الفصل 3: وسائل الإعلام والمجتمع</h1>
      <p className={classes.subtitle}>ملخص كامل</p>

      {/* ===== 1. مقدمة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>1. مقدمة: وسائل الإعلام في الحياة اليومية</h2>
        <p className={classes.paragraph}>
          تشكل وسائل الإعلام جزءًا مهيمنًا من حياتنا اليومية. يختلف الاستخدام بشكل كبير بين الأجيال، لكن إجمالاً، يقضي الشعب السويدي الكثير من الوقت في استهلاك وسائل الإعلام.
        </p>

        <h3 className={classes.subHeading}>مفاهيم وحقائق مهمة:</h3>
        <ul className={classes.list}>
          <li>
            <strong>استخدام وسائل الإعلام:</strong> في عام 2023، قضى السكان في المتوسط ما يقرب من 7 ساعات يوميًا في استخدام وسائل الإعلام.
          </li>
          <li>
            <strong>الانتشار:</strong>
            <ul className={classes.list}>
              <li>الصور المتحركة (تلفزيون/بث): 95% من السكان يستخدمونها يوميًا.</li>
              <li>خدمات الشبكات الاجتماعية: 85% انتشار يومي.</li>
              <li>الراديو: 77% انتشار يومي.</li>
              <li>الصحف اليومية: 66% انتشار يومي.</li>
            </ul>
          </li>
          <li>
            <strong>الفجوة بين الأجيال:</strong> يستخدم الشباب وسائل التواصل الاجتماعي بشكل أكبر بكثير من كبار السن.
          </li>
          <li>
            <strong>مكانة الأخبار:</strong> تحتل الأخبار مكانة واضحة وبارزة في الديمقراطيات الحديثة.
          </li>
        </ul>
      </section>

      {/* ===== 2. وسائل الإعلام والديمقراطية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>2. وسائل الإعلام والديمقراطية</h2>
        <p className={classes.paragraph}>
          لكي تعمل الديمقراطية، يجب أن يكون المواطنون على اطلاع. وسائل الإعلام هي القناة الأكثر أهمية لذلك. يُسمى هذا <strong>"الفهم المستنير"</strong> – يجب أن يكون لدى المواطنين معلومات ومعرفة حول السياسة والمجتمع للقيام بدورهم.
        </p>

        <h3 className={classes.subHeading}>المهام الديمقراطية الثلاث لوسائل الإعلام (وفقًا للبرلمان السويدي):</h3>
        <ol className={classes.list}>
          <li>
            <strong>الإعلام:</strong> تقديم الحقائق والمعلومات للمواطنين حتى يتمكنوا من اتخاذ مواقف في القضايا المجتمعية.
          </li>
          <li>
            <strong>التعليق:</strong> تحليل وشرح ووضع الأحداث في سياق أوسع.
          </li>
          <li>
            <strong>الرقابة:</strong> مراقبة وممارسة النقد ضد كل من أصحاب السلطة في القطاعين الخاص والعام.
          </li>
        </ol>

        <h3 className={classes.subHeading}>الدعم الدستوري:</h3>
        <ul className={classes.list}>
          <li>
            ينص قانون الحكم (أحد القوانين الأساسية للسويد) على أن لكل مواطن حرية التعبير، أي "حرية الإعلام عن المعلومات والتعبير عن الأفكار والآراء والمشاعر في الكلام أو الكتابة أو الصورة أو بأي طريقة أخرى".
          </li>
        </ul>
      </section>

      {/* ===== 3. نماذج الإعلام ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>3. نماذج الإعلام</h2>
        <p className={classes.paragraph}>
          يمكن تنظيم وتمويل وسائل الإعلام بطرق مختلفة. هناك نموذجان رئيسيان يصفان ذلك.
        </p>

        <h3 className={classes.subHeading}>مفاهيم وشروحات:</h3>

        <h4 className={classes.subHeading}>النموذج التحرري:</h4>
        <ul className={classes.list}>
          <li>إيجابي تجاه التأسيس الحر لوسائل الإعلام.</li>
          <li>موجه تجاريًا.</li>
          <li>يمول بشكل أساسي من خلال عائدات الإعلانات.</li>
          <li>يهيمن على البرامج تلفزيون الواقع والترفيه الخفيف.</li>
        </ul>

        <h4 className={classes.subHeading}>نموذج الخدمة العامة:</h4>
        <ul className={classes.list}>
          <li>ممول من الضرائب (من خلال رسوم خاصة).</li>
          <li>يدار في خدمة المصلحة العامة.</li>
          <li>
            تفرض الدولة متطلبات من خلال القوانين والاتفاقيات:
            <ul className={classes.list}>
              <li>برامج متنوعة.</li>
              <li>الحياد والموضوعية.</li>
              <li>برامج إخبارية إقليمية.</li>
              <li>مهمة مراقبة السلطات والمنظمات والشركات.</li>
            </ul>
          </li>
        </ul>

        <p className={classes.paragraph}>
          <strong>السويد:</strong> لديها الخدمة العامة كنموذج رئيسي (SVT، SR، UR)، ولكن مع وجود واضح للقنوات الإذاعية والتلفزيونية الخاصة (مثل TV4، Viaplay).
        </p>
      </section>

      {/* ===== 4. الاتصال في وسائل الإعلام ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>4. الاتصال في وسائل الإعلام</h2>
        <p className={classes.paragraph}>
          هنا يتم شرح أساسيات كيفية عمل الاتصال وكيفية استخدامه للتأثير على الرأي العام.
        </p>

        <h3 className={classes.subHeading}>أ. نموذج الاتصال</h3>

        <h4 className={classes.subHeading}>مفاهيم أساسية:</h4>
        <ul className={classes.list}>
          <li><strong>المرسل:</strong> من ينقل الرسالة.</li>
          <li><strong>الرسالة:</strong> الرسالة أو المعلومات التي يتم إرسالها.</li>
          <li><strong>الوسيط:</strong> الأداة أو القناة المستخدمة لنقل الرسالة (مثل الصوت، الصحيفة، الراديو، التلفزيون، الإنترنت).</li>
          <li><strong>المستقبل:</strong> الشخص أو الأشخاص الذين يستقبلون الرسالة.</li>
        </ul>

        <h4 className={classes.subHeading}>تطور الاتصال:</h4>
        <ul className={classes.list}>
          <li>
            <strong>الاتصال أحادي الاتجاه:</strong> النموذج التقليدي حيث يرسل المرسل رسالة ويتلقى القليل جدًا أو لا يتلقى أي رد مباشر من المستقبل. كان هذا شائعًا في الصحف والراديو والتلفزيون سابقًا.
          </li>
          <li>
            <strong>الاتصال ثنائي الاتجاه:</strong> النموذج الحديث حيث يكون المرسل أيضًا مستقبلاً والعكس صحيح. مثال على ذلك وسائل التواصل الاجتماعي، وحقول التعليقات، والدردشات.
          </li>
          <li>
            <strong>رؤية مهمة:</strong> حتى في الاتصال ثنائي الاتجاه، هناك تبسيط للواقع. قد يكون من الصعب معرفة ما إذا كان المستقبل قد فهم الرسالة كما أرادها المرسل.
          </li>
        </ul>

        <h3 className={classes.subHeading}>ب. تكوين الرأي</h3>

        <h4 className={classes.subHeading}>مفاهيم:</h4>
        <ul className={classes.list}>
          <li>
            <strong>الرأي:</strong> تسمية موجزة لرأي مشترك لدى مجموعة أكبر من الناس.
          </li>
          <li>
            <strong>تكوين الرأي:</strong> العملية التي تتشكل فيها الآراء لدى الأفراد والجماعات. وهي عادة نتيجة تفاعل بين الفرد والبيئة المحيطة.
          </li>
          <li>
            <strong>مصادر تكوين الرأي:</strong>
            <ol className={classes.list}>
              <li>التجارب الشخصية.</li>
              <li>المحادثات مع الأصدقاء والعائلة وزملاء العمل.</li>
              <li>وسائل الإعلام المختلفة (المصدر الأهم).</li>
            </ol>
          </li>
          <li>
            <strong>الرأي العام:</strong> الموقف في قضية معينة يتبناه مجموعة كبيرة من الناس. يظهر بشكل أوضح في استطلاعات الرأي.
          </li>
        </ul>

        <h3 className={classes.subHeading}>ج. الإعلام أم التأثير (المعلومات مقابل الدعاية)</h3>

        <h4 className={classes.subHeading}>مفاهيم:</h4>
        <ul className={classes.list}>
          <li>
            <strong>الاتصال الجماهيري:</strong> وسائل الإعلام التي تصل إلى الجماهير (مثل التلفزيون والصحف). غالبًا ما تتميز بالاتصال أحادي الاتجاه.
          </li>
          <li>
            <strong>المعلومات (الإعلام):</strong> رسائل في شكل حقائق بحتة تهدف إلى تقديم المعرفة. يُنظر إليها على أنها شيء إيجابي.
          </li>
          <li>
            <strong>الدعاية:</strong>
            <ul className={classes.list}>
              <li>
                <em>معنى واسع:</em> رسالة يريد فيها المرسل تغيير رأي المستقبل. يمكن أن تكون تسويقًا تجاريًا أو تأثيرًا سياسيًا.
              </li>
              <li>
                <em>معنى ضيق:</em> رسائل مضللة تنتشر بأساليب غير أخلاقية – مثل مرسلين مزيفين ومحتوى متلاعب به. الهدف هو التلاعب بآراء وأفعال الآخرين، غالبًا من خلال إثارة مشاعر سلبية قوية. يُنظر إليها غالبًا على أنها شيء سلبي.
              </li>
            </ul>
          </li>
          <li>
            <strong>الإدراك الانتقائي:</strong> يشارك الناس بشكل انتقائي في الرسائل. نرى، نسمع، نقرأ ونتذكر ما "نريد" أن نراه، نسمعه، نقرأه ونتذكره. هذا يجعل الدعاية والتأثير السياسي غالبًا ما يعززان الآراء التي لدينا بالفعل بدلاً من تغييرها.
          </li>
        </ul>
      </section>

      {/* ===== 5. أصحاب النفوذ الجدد ومناخ النقاش ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>5. أصحاب النفوذ الجدد ومناخ النقاش</h2>
        <p className={classes.paragraph}>
          خلقت الإنترنت ووسائل التواصل الاجتماعي أشكالًا جديدة من صناع الرأي وغيرت مناخ النقاش.
        </p>

        <h3 className={classes.subHeading}>أ. المؤثرون (Influencer)</h3>

        <h4 className={classes.subHeading}>مفاهيم:</h4>
        <ul className={classes.list}>
          <li>
            <strong>المؤثر:</strong> شخص (غالبًا مدون، يوتيوبر، إنستغرامر أو تيكتوكر) وصل تدريجيًا إلى جمهور كبير وحصل على العديد من المتابعين من خلال مشاركة حياته وأفكاره بطريقة جذابة.
          </li>
          <li>
            <strong>مصادر الدخل:</strong>
            <ol className={classes.list}>
              <li>تدفع الشركات لوضع إعلانات على منصاتهم.</li>
              <li>يبرزون ويذكرون المنتجات والعلامات التجارية بطريقة إيجابية (محتوى برعاية).</li>
            </ol>
          </li>
          <li>
            <strong>الدور:</strong> المؤثر هو zarówno بائع وصانع رأي.
          </li>
          <li>
            <strong>التغيير:</strong> السلطات التقليدية (الخبراء، السياسيون) أصبحت أقل أهمية. العلاقات تلعب دورًا أكبر. في الحياة الواقعية، هم العائلة والأصدقاء، وعلى الإنترنت هم المؤثرون الذين "تتابعهم".
          </li>
          <li>
            <strong>المشاكل:</strong> وجود متابعين مزيفين، تعليقات مزيفة، وإعجابات مزيفة تباع بأسعار زهيدة.
          </li>
          <li>
            <strong>الجوانب الإيجابية:</strong> يبرز بعض المؤثرين مواضيع كانت مخفية سابقًا مثل الصحة النفسية، والانتهاكات، وظروف النشأة السيئة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>ب. ممر الآراء ومناخ النقاش</h3>

        <h4 className={classes.subHeading}>مفاهيم:</h4>
        <ul className={classes.list}>
          <li>
            <strong>ممر الآراء:</strong> مصطلح صاغه عالم السياسة هنريك إيكينغرين أوسكارسون. يصف حدود الآراء التي تعتبر مقبولة بشكل عام في النقاش العام السويدي. بعض الآراء الشائعة بين العامة نادرًا ما تظهر في النقاش العام.
          </li>
          <li>
            <strong>أمثلة على آراء كانت سابقًا "خارج" الممر:</strong>
            <ul className={classes.list}>
              <li>تقليل الهجرة (7 من 10 وافقوا).</li>
              <li>منع المثليين من التبني (نصف السويديين وافقوا).</li>
              <li>فرض عقوبة الإعدام للقتل (1 من 5 وافقوا).</li>
            </ul>
          </li>
          <li>
            <strong>نقد آسا ويكفورس (فيلسوفة):</strong> مصطلح "ممر الآراء" عفا عليه الزمن ويجب تقاعده. المشكلة الكبيرة اليوم ليست أن بعض الآراء لا تُسمع – بفضل وسائل التواصل الاجتماعي، هناك تعددية آراء كبيرة. المشكلة الكبيرة هي بدلاً من ذلك الجودة المنخفضة للنقاش.
          </li>
          <li>
            <strong>عواقب الجودة المنخفضة للنقاش:</strong>
            <ul className={classes.list}>
              <li>إذا كان النقاش غير موضوعي وغير متوازن، فإن ذلك يؤثر على جودة صنع القرار.</li>
              <li>الاستقطاب العاطفي في المجتمع يخاطر بالازدياد.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ===== 6. الإعلام والمال ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>6. الإعلام والمال</h2>
        <p className={classes.paragraph}>
          اقتصاد وسائل الإعلام حاسم لمحتواها واستقلاليتها. غيّرت الرقمنة تدفقات الإيرادات بشكل جذري.
        </p>

        <h3 className={classes.subHeading}>أ. إيرادات من المستخدمين</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> الأموال التي تأتي مباشرة من المستهلكين.
          </li>
          <li>
            <strong>الأشكال:</strong> اشتراكات الصحف، التراخيص ومدفوعات خدمات البث (مثل نتفليكس، ماكس، ديزني+).
          </li>
          <li>
            <strong>الاتجاه:</strong> تنفق الأسر السويدية المزيد على وسائل الإعلام. ينتقل الناس من الخدمات المجانية مع الإعلانات إلى الخدمات المدفوعة ويحصلون على عدة اشتراكات في نفس الوقت.
          </li>
        </ul>

        <h3 className={classes.subHeading}>ب. عائدات الإعلانات</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> الأموال من الشركات التي تريد الإعلان في وسائل الإعلام. هذا هو مصدر الإيرادات الأكثر أهمية لشركات الإعلام التجارية.
          </li>
          <li>
            <strong>تأثير الرقمنة:</strong> يتم وضع حصة متزايدة من استثمارات الإعلانات على الإنترنت بدلاً من الصحف والتلفزيون. السبب هو أن الإنترنت رخيص وفعال وأن المستهلكين موجودون هناك.
          </li>
          <li>
            <strong>clickbait / طعم النقر:</strong> عناوين أو صور مثيرة للانتباه يجب النقر عليها لمعرفة المزيد. الهدف هو جذب العديد من الزوار حتى يرغب المعلنون في دفع ثمن وضع إعلاناتهم هناك.
          </li>
        </ul>

        <h3 className={classes.subHeading}>ج. الإعلانات المخصصة</h3>
        <ul className={classes.list}>
          <li>
            <strong>الخوارزمية:</strong> "كتاب قواعد" لكيفية ترتيب الأنشطة المختلفة. تجمع الخوارزميات بيانات عن عاداتنا واهتماماتنا وتضمن وصولنا إلى رسائل مصممة خصيصًا لنا.
          </li>
          <li>
            <strong>الكوكيز:</strong> ملفات نصية تمكن من تتبع كيفية تصفح المستخدم. غالبًا ما يجب على المستخدم الموافقة عليها.
          </li>
          <li>
            <strong>جمع البيانات:</strong> تجمع منصات مثل إنستغرام وتيكتوك معلومات حول سلوكيات المستخدمين وتبيعها للمعلنين.
          </li>
        </ul>

        <h3 className={classes.subHeading}>د. تأثيرات على الإعلام السويدي</h3>
        <ul className={classes.list}>
          <li>
            <strong>النتيجة:</strong> أموال الإعلانات التي توضع لدى عمالقة التكنولوجيا مثل ميتا (فيسبوك، إنستغرام)، بايت دانس (تيكتوك) وجوجل تذهب إلى الخارج.
          </li>
          <li>
            <strong>المشكلة:</strong> ليست الصحف السويدية اليومية (مثل داغينز نيهيتر، سفينسكا داغبلادت) هي التي تحصل على الأموال لتطوير صحافتها. هذا يضعف وسائل الإعلام التي تحمل الأخبار وتنخفض حصتها من إجمالي عائدات الإعلانات.
          </li>
        </ul>
      </section>

      {/* ===== 7. سلطة الإعلام ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>7. سلطة الإعلام</h2>
        <p className={classes.paragraph}>
          لوسائل الإعلام سلطة، لكنها ليست غير محدودة. تتأثر بفاعلين خارجيين وعمليات انتقاء داخلية.
        </p>

        <h3 className={classes.subHeading}>أ. وجهات نظر مختلفة حول السلطة</h3>
        <ul className={classes.list}>
          <li>
            <strong>باحث الإعلام كينت آسب:</strong> وسائل الإعلام هي الأكثر قوة عندما تكون لها سلطة على كل من الجمهور والمحتوى.
            <ul className={classes.list}>
              <li>
                <strong>السلطة على الجمهور:</strong> صورة الواقع التي يتم نقلها تؤثر على تصور الناس وتقييمهم للقضايا المجتمعية.
              </li>
              <li>
                <strong>السلطة على المحتوى:</strong> لا تملك وسائل الإعلام دائمًا سيطرة كاملة. تتأثر بالمصالح الاقتصادية (مثل المعلنين في مجال الديكور المنزلي والسفر).
              </li>
            </ul>
          </li>
          <li>
            <strong>التأثير النهائي:</strong> المنتج الصحفي يحدد من خلال تفاعل بين وسائل الإعلام والفاعلين الخارجيين (أصحاب السلطة الاقتصادية والسياسية). لكن وسائل الإعلام تقوم بالاختيار النهائي وتقرر ماذا ومتى وكيف يتم النشر.
          </li>
        </ul>

        <h3 className={classes.subHeading}>ب. تقييم الأخبار</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> العملية التي تقوم فيها وسائل الإعلام بالاختيار من بين جميع الأحداث لتحديد ما يصبح خبرًا. يتم ذلك بسبب نقص الوقت والمال والمساحة.
          </li>
          <li>
            <strong>النموذج الكلاسيكي لبراك:</strong> يتم تحديد القيمة الإخبارية من خلال ثلاثة جوانب. كلما اقتربت من المركز (المثالي، ثقافتنا، هنا)، زادت القيمة الإخبارية.
            <ol className={classes.list}>
              <li>
                <strong>البعد الزمني:</strong> ما مدى حداثته؟ (المثالي = حدث للتو، غير المثالي = منذ فترة أطول).
              </li>
              <li>
                <strong>البعد الثقافي:</strong> ما مدى أهميته لنا ولثقافتنا؟
              </li>
              <li>
                <strong>البعد المكاني:</strong> ما مدى قربه جغرافيًا؟ (المركز = هنا، الأطراف = بعيدًا).
              </li>
            </ol>
          </li>
        </ul>

        <h3 className={classes.subHeading}>ج. منطق الإعلام</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> تقنية سردية طورتها وسائل الإعلام لجذب الانتباه.
          </li>
          <li>
            <strong>معايير منطق الإعلام:</strong> كلما كان الخبر أكثر قدرة على التشكيل وفقًا لهذه المعايير، زادت احتمالية نشره.
            <ol className={classes.list}>
              <li>التركيز على الأشخاص (المشاهير، السياسيين البارزين وشخصيات الأعمال).</li>
              <li>التركيز على الأحداث الدراماتيكية (الكوارث، الحوادث).</li>
              <li>التركيز على المواجهة والتناقضات بين الأطراف.</li>
            </ol>
          </li>
        </ul>

        <h3 className={classes.subHeading}>د. دور حارس البوابة</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> شخص أو عملية تقوم بتصفية المعلومات قبل وصولها إلى الجمهور. يتحكم حراس البوابة في اختيار الأخبار.
          </li>
          <li>
            <strong>أمثلة على حراس البوابة:</strong>
            <ol className={classes.list}>
              <li>
                <strong>مصادر الأخبار:</strong> السياسيون وممثلو المجتمع على المستوى الوطني والمحلي. لديهم وصول إلى معلومات حصرية ويمكنهم الضغط لإدراج قضية معينة على جدول الأعمال.
              </li>
              <li>
                <strong>وكالات الأنباء الوطنية والدولية:</strong> لا تستطيع شركات الإعلام الصغيرة تحمل تكاليف مراسليها الخاصين في كل مكان، لذا تشتري الأخبار من الوكالات (مثل TT). هذا يؤثر على ما يصبح أخبارًا.
              </li>
            </ol>
          </li>
        </ul>
      </section>

      {/* ===== 8. القواعد والشروط للإعلام السويدي ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>8. القواعد والشروط للإعلام السويدي</h2>
        <p className={classes.paragraph}>
          حرية التعبير أساسية ولكنها ليست غير محدودة. تنظمها القوانين (القوانين الأساسية) والقواعد الأخلاقية الطوعية.
        </p>

        <h3 className={classes.subHeading}>أ. قانون حرية الطباعة (TF) – 1949</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> أحد القوانين الأساسية الأربعة للسويد. ينظم حرية التعبير في وسائل الإعلام المطبوعة (الصحف والكتب والمجلات).
          </li>
          <li>
            <strong>اقتباس من TF:</strong> "بحرية الطباعة يُفهم حق كل مواطن سويدي، دون أي عائق تفرضه سلطة أو هيئة عامة أخرى، في نشر المطبوعات، بحيث لا يمكن محاكمته لاحقًا إلا أمام محكمة قانونية بسبب محتواها..."
          </li>
          <li>
            <strong>خمس نقاط رئيسية:</strong>
            <ol className={classes.list}>
              <li>
                <strong>حظر الرقابة:</strong> لا يحق للدولة أو أي هيئة عامة أخرى مراجعة المطبوعات مسبقًا. يحظر منع الطباعة أو التوزيع بشكل فعال. ومع ذلك، يمكن رفع دعوى قضائية بعد ذلك.
              </li>
              <li>
                <strong>حرية التأسيس:</strong> لكل مواطن سويدي الحق في بدء وإصدار صحيفة دون عوائق من الدولة. يجب أن يكون للصحيفة ناشر مسؤول يتحمل مسؤولية المحتوى.
              </li>
              <li>
                <strong>حماية المبلغين والحق في عدم الكشف عن الهوية:</strong>
                <ul className={classes.list}>
                  <li>لكل شخص الحق في تقديم معلومات لصحيفة دون أن يتم الكشف عن هويته ودون الحاجة إلى الكشف عن اسمه.</li>
                  <li>للصحفيين الحق في عدم الكشف عن هويتهم وحماية مصادرهم.</li>
                </ul>
              </li>
              <li>
                <strong>نظام قضائي خاص:</strong> في قضايا حرية الطباعة، يتم تطبيق إجراء خاص حيث يمكن لهيئة محلفين أن تقرر مسألة الذنب. القاعدة الرئيسية هي "تبرئة بدلاً من الإدانة".
              </li>
              <li>
                <strong>مبدأ العلانية:</strong> يجب أن تكون جميع الوثائق المحفوظة لدى السلطات متاحة للجمهور (مع بعض الاستثناءات مثل السرية).
              </li>
            </ol>
          </li>
        </ul>

        <h3 className={classes.subHeading}>ب. قانون حرية التعبير الأساسي (YGL) – 1991</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> قانون أساسي يحمي حرية الكلمة في الراديو والتلفزيون ووسائل الإعلام المماثلة بنفس الطريقة التي يحمي بها TF وسائل الإعلام المطبوعة.
          </li>
          <li>
            <strong>المحتوى:</strong> تنطبق نفس المبادئ كما في TF (حماية عدم الكشف عن الهوية، حماية المبلغين، حظر الرقابة المسبقة، إجراءات قضائية خاصة).
          </li>
          <li>
            <strong>الفرق:</strong> بالنسبة للراديو والتلفزيون الأرضي، لا توجد حرية تأسيس. يتم تنظيم ذلك بدلاً من ذلك من خلال قانون خاص، ويمكن للدولة فرض متطلبات على المحتوى (مثل الحياد).
          </li>
        </ul>

        <h3 className={classes.subHeading}>ج. استثناءات من حرية التعبير (في كل من TF و YGL)</h3>
        <ul className={classes.list}>
          <li>أمن الدولة.</li>
          <li>الافتراء والتشهير.</li>
          <li>التحريض ضد مجموعة عرقية.</li>
          <li>جرائم المواد الإباحية للأطفال.</li>
        </ul>

        <h3 className={classes.subHeading}>د. القواعد الصحفية (القواعد الأخلاقية)</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> قواعد أخلاقية اتفق عليها الصحفيون وأرباب العمل في الصحافة والإذاعة والتلفزيون لاتباعها. هي طوعية ولكنها مهمة جدًا للثقة.
          </li>
          <li>
            <strong>القواعد باختصار:</strong>
            <ol className={classes.list}>
              <li>
                <strong>تقديم أخبار صحيحة:</strong> مراجعة المصادر بشكل نقدي. يجب أن يكون للعناوين والمقدمات تغطية في النص.
              </li>
              <li>
                <strong>لا تحكم على أحد دون سماعه:</strong> إعطاء من يتعرض للنقد فرصة للرد. لا تسبق قرارات المحاكم.
              </li>
              <li>
                <strong>احترام الخصوصية الشخصية:</strong> الامتناع عن النشر الذي يتعدى على الخصوصية ما لم يكن هناك مصلحة عامة واضحة تتطلب ذلك.
              </li>
              <li>
                <strong>الحذر في نشر الأسماء:</strong> لا تنشر أسماء أو معلومات تعريفية أخرى (الجنس، اللقب، المهنة) ما لم يكن ذلك ضروريًا.
              </li>
              <li>
                <strong>الحذر مع الصور:</strong> تجنب الصور التي يمكن أن تؤذي أو تسيء. لا تزيف الصور من خلال القص أو التجميع.
              </li>
              <li>
                <strong>إعطاء مساحة للرد:</strong> تصحيح الأخطاء بسرعة وإعطاء مساحة للرد.
              </li>
            </ol>
          </li>
          <li>
            <strong>أمين المظالم العام للإعلام (MO):</strong> هيئة يمكن للجمهور التوجه إليها إذا رأى أن صحيفة انتهكت القواعد. يمكن لـ MO إدانة صحيفة لـ "انتهاك العرف الصحفي الجيد".
          </li>
          <li>
            <strong>إحصاءات (2023):</strong> يرى MO أن وسائل الإعلام السويدية تتصرف بشكل جيد بشكل عام. أكثر الإدانات شيوعًا تتعلق بـ:
            <ul className={classes.list}>
              <li>"أخبار صحيحة" (عدم الدقة).</li>
              <li>"إعطاء مساحة للرد" (عدم إعطاء وقت للرد).</li>
              <li>"الحذر في نشر الأسماء".</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ===== 9. الإنترنت – تحدي للقواعد ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>9. الإنترنت – تحدي للقواعد</h2>
        <p className={classes.paragraph}>
          تخلق الإنترنت ووسائل التواصل الاجتماعي تحديات جديدة لأنها لا تخضع لنفس القواعد التي تخضع لها وسائل الإعلام التقليدية.
        </p>

        <h3 className={classes.subHeading}>أ. المسؤولية على الإنترنت</h3>
        <ul className={classes.list}>
          <li>
            <strong>الناشر المسؤول:</strong> بالنسبة لوسائل الإعلام المطبوعة وإصداراتها على الويب، يلزم وجود ناشر مسؤول يمكن محاسبته.
          </li>
          <li>
            <strong>اللوحات الإلكترونية (المنتديات، المدونات):</strong> ينظمها قانون BBS (قانون المسؤولية عن اللوحات الإلكترونية). يجب على من يقدم الخدمة أن يراقب ويزيل الرسائل غير القانونية (التحريض ضد مجموعة عرقية، مواد إباحية للأطفال، انتهاكات حقوق النشر).
          </li>
          <li>
            <strong>وسائل التواصل الاجتماعي (فيسبوك، إنستغرام، تيكتوك، إكس):</strong> ليس لديها ناشر مسؤول. المستخدم هو المسؤول جنائيًا عن ما ينشره. "مشاركة" شيء ما ليس قانونيًا تلقائيًا – قد لا يزال تشهيرًا.
          </li>
        </ul>

        <h3 className={classes.subHeading}>ب. الجرائم الشائعة على الإنترنت (الكراهية على الإنترنت)</h3>
        <ul className={classes.list}>
          <li>
            <strong>التهديد غير القانوني:</strong> رفع سلاح ضد شخص آخر أو التهديد بفعل إجرامي يشكل خطرًا على حياة أو صحة شخص ما.
          </li>
          <li>
            <strong>التشهير:</strong> اتهام شخص بارتكاب جريمة أو سلوك مذموم ونشر ذلك. النشر هو الجريمة، وليس كتابته لأول مرة. حتى المشاركة مرة أخرى جريمة.
          </li>
          <li>
            <strong>المضايقة:</strong> الاتصال بشخص ما بشكل متكرر (بريد إلكتروني، رسائل نصية، اتصالات) ضد إرادته، أو إرسال رسالة واحدة مسيئة جدًا.
          </li>
          <li>
            <strong>مشكلة التشريع:</strong> الحماية ضعيفة لأنها غالبًا ما تكون جريمة خاصة – يجب على الضحية رفع الدعوى بنفسه. يريد الكثيرون تغيير هذا إلى دعوى عامة حتى تتمكن الشرطة والنيابة من متابعة القضايا.
          </li>
        </ul>

        <h3 className={classes.subHeading}>ج. العقوبات والتعويضات</h3>
        <ul className={classes.list}>
          <li>
            <strong>المسؤولية الجنائية:</strong> إذا ارتكب شخص جريمة، يمكن الحكم عليه بالسجن أو رعاية الأحداث أو الغرامة.
          </li>
          <li>
            <strong>المسؤولية عن التعويض:</strong> من يرتكب جريمة (مثل التشهير) يصبح ملزمًا بدفع تعويض للضحية.
          </li>
        </ul>

        <h3 className={classes.subHeading}>د. قائمة مرجعية للكراهية على الإنترنت (من المحامي مارتن شولتز)</h3>
        <ol className={classes.list}>
          <li>
            <strong>تأمين الأدلة:</strong> خذ لقطة شاشة. من الأفضل أن يشهد شخص آخر (ليس من العائلة) على صحة لقطة الشاشة.
          </li>
          <li>
            <strong>الإبلاغ للشرطة:</strong> قم بتقديم بلاغ للشرطة. إذا كان الانتهاك مرتبطًا بالمدرسة، يجب أيضًا إبلاغ المدرسة (لديهم واجب التحقيق).
          </li>
          <li>
            <strong>طلب التعويض:</strong> قم برفع دعوى قضائية خاصة للمطالبة بالتعويض.
          </li>
        </ol>

        <h3 className={classes.subHeading}>هـ. الحياد تجاه العواقب</h3>
        <ul className={classes.list}>
          <li>
            <strong>التعريف:</strong> مصطلح صاغه الصحفي إريك فيكتيليوس. يعني أن مراسل الأخبار يجب أن يبلغ بأفضل ما لديه بما هو صحيح وذو صلة دون النظر إلى من يستفيد أو يتضرر من الخبر. لا يجب أن يدفع المراسل أجندة سياسية خاصة.
          </li>
          <li>
            <strong>اقتباس من كارل بيرنشتاين (صحفي ووترغيت):</strong> "ليس من وظيفتنا أن نطلق النار على أي شخص [...]. نحن هنا لنقدم التقارير. وإذا سقط وحش كبير في البرية أثناء التغطية، فهذا جزء من العملية. [...] لا ينبغي للصحفيين تعيين رؤساء أو عزل مديرين. يجب أن نروي ما نعرفه."
          </li>
        </ul>
      </section>

      {/* ===== قائمة المصطلحات ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>قائمة المصطلحات – المفاهيم الأساسية</h2>

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
                <td className={classes.td}><strong>الخوارزمية</strong></td>
                <td className={classes.td}>كتاب قواعد يرتب الأنشطة عبر الإنترنت ويخصص المحتوى (مثل الإعلانات) وفقًا لسلوك المستخدم.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>الرأي العام</strong></td>
                <td className={classes.td}>الموقف السائد في قضية محددة لدى مجموعة كبيرة من الناس.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>الناشر المسؤول</strong></td>
                <td className={classes.td}>الشخص المسؤول قانونيًا عن محتوى صحيفة أو برنامج.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>قانون BBS</strong></td>
                <td className={classes.td}>قانون ينظم اللوحات الإلكترونية؛ يتطلب من يدير الخدمة إزالة المحتوى غير القانوني بشكل واضح.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>حظر الرقابة</strong></td>
                <td className={classes.td}>حظر على السلطات مراجعة المطبوعات مسبقًا أو منع الطباعة.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>طعم النقر</strong></td>
                <td className={classes.td}>عناوين أو صور مثيرة للانتباه تجذب المستخدمين للنقر لتوليد إيرادات إعلانية.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>الكوكيز</strong></td>
                <td className={classes.td}>ملف نصي يمكن من تتبع سلوك تصفح المستخدم على الإنترنت.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>النموذج التحرري</strong></td>
                <td className={classes.td}>نموذج إعلامي تجاري يمول عبر الإعلانات ويركز على الترفيه.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>الاتصال أحادي الاتجاه</strong></td>
                <td className={classes.td}>اتصال تقليدي حيث يرسل المرسل رسالة دون رد مباشر من المستقبل.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>حرية التأسيس</strong></td>
                <td className={classes.td}>حق كل مواطن سويدي في بدء وإصدار صحيفة دون عوائق حكومية.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>التشهير</strong></td>
                <td className={classes.td}>اتهام شخص بارتكاب جريمة أو سلوك مذموم ونشر ذلك؛ جريمة وفقًا لقانون العقوبات.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>الرد</strong></td>
                <td className={classes.td}>حق الرد والرد على النقد المقدم في وسيلة إعلامية.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>حارس البوابة</strong></td>
                <td className={classes.td}>شخص أو عملية تقوم بتصفية المعلومات وتحديد الأخبار التي تصل للجمهور.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>التحريض ضد مجموعة عرقية</strong></td>
                <td className={classes.td}>نشر تصريحات تهدد أو تعبر عن ازدراء لمجموعة عرقية؛ غير قانوني.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>المؤثر</strong></td>
                <td className={classes.td}>شخص لديه جمهور كبير على وسائل التواصل الاجتماعي يؤثر على آراء متابعيه وعاداتهم الاستهلاكية.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>المعلومات (الإعلام)</strong></td>
                <td className={classes.td}>حقائق ومعرفة تُنقل لغرض موضوعي بحت؛ يُنظر إليها بشكل إيجابي.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>الحياد تجاه العواقب</strong></td>
                <td className={classes.td}>مبدأ صحفي بتقديم الحقيقة دون النظر إلى من يستفيد أو يتضرر.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>الاتصال الجماهيري</strong></td>
                <td className={classes.td}>اتصال يصل إلى الجماهير عبر وسائل الإعلام مثل التلفزيون والراديو والصحف.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>حماية المبلغين</strong></td>
                <td className={classes.td}>حق الشخص الذي يقدم معلومات لصحيفة في عدم الكشف عن هويته وعدم إمكانية كشفها.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>منطق الإعلام</strong></td>
                <td className={classes.td}>تقنية سردية تركز على الأشخاص والدراما والصراعات لجذب الانتباه.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>أمين المظالم العام للإعلام</strong></td>
                <td className={classes.td}>هيئة تراقب التزام وسائل الإعلام بالقواعد الأخلاقية الصحفية ويمكنها إصدار انتقادات.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>تقييم الأخبار</strong></td>
                <td className={classes.td}>العملية التي تختار فيها وسائل الإعلام من بين جميع الأحداث لتحديد ما يصبح أخبارًا.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>مبدأ العلانية</strong></td>
                <td className={classes.td}>مبدأ أن جميع وثائق السلطات يجب أن تكون متاحة للجمهور (مع استثناءات تتعلق بالسرية).</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>المضايقة</strong></td>
                <td className={classes.td}>الاتصال بشخص ما بشكل متكرر ضد إرادته، أو إرسال رسائل مسيئة جدًا.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>التهديد غير القانوني</strong></td>
                <td className={classes.td}>تهديد شخص بفعل إجرامي يشكل خطرًا على الحياة أو الصحة.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>الرأي</strong></td>
                <td className={classes.td}>رأي مشترك لدى مجموعة أكبر من الناس في قضية معينة.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>تكوين الرأي</strong></td>
                <td className={classes.td}>العملية التي تتشكل فيها الآراء لدى الأفراد والجماعات من خلال التجارب والمحادثات ووسائل الإعلام.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>الدعاية</strong></td>
                <td className={classes.td}>رسائل تهدف إلى التأثير على تصور المستقبل، غالبًا بأساليب مضللة أو غير أخلاقية.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>نموذج الخدمة العامة</strong></td>
                <td className={classes.td}>نموذج إعلامي ممول من الضرائب يُدار في خدمة المصلحة العامة مع متطلبات الحياد والتنوع.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>القواعد الصحفية</strong></td>
                <td className={classes.td}>قواعد أخلاقية اتفق عليها الصحفيون أنفسهم للحفاظ على الثقة.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>قانون الحكم</strong></td>
                <td className={classes.td}>أحد القوانين الأساسية للسويد الذي يقرر من بين أمور أخرى حرية التعبير.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>الإدراك الانتقائي</strong></td>
                <td className={classes.td}>أن نشارك في الرسائل التي تؤكد آرائنا الخاصة ونستبعد ما لا يتوافق معها.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>قانون حرية الطباعة (TF)</strong></td>
                <td className={classes.td}>القانون الأساسي الذي ينظم حرية التعبير في وسائل الإعلام المطبوعة.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>الاتصال ثنائي الاتجاه</strong></td>
                <td className={classes.td}>اتصال حديث حيث يمكن للطرفين أن يكونا مرسلين ومستقبلين (مثل وسائل التواصل الاجتماعي).</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>قانون حرية التعبير الأساسي (YGL)</strong></td>
                <td className={classes.td}>القانون الأساسي الذي ينظم حرية التعبير في الراديو والتلفزيون ووسائل الإعلام المماثلة.</td>
              </tr>
              <tr>
                <td className={classes.td}><strong>ممر الآراء</strong></td>
                <td className={classes.td}>مصطلح للحدود غير المرئية للآراء التي تعتبر مقبولة في النقاش العام.</td>
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
            1. ما هي أهم مهام وسائل الإعلام وفقًا للبرلمان السويدي؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>الإعلام:</strong> يجب على وسائل الإعلام تزويد المواطنين بالمعلومات التي يحتاجونها لاتخاذ مواقف في القضايا المجتمعية المختلفة.
              </li>
              <li>
                <strong>الرقابة:</strong> يجب على وسائل الإعلام مراقبة أصحاب السلطة في المجتمع (السياسيون والسلطات والشركات).
              </li>
              <li>
                <strong>خلق النقاش / تكوين الرأي:</strong> يجب أن تشكل وسائل الإعلام ساحة للنقاش حيث تلتقي الآراء المختلفة وتتناقش.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            2. كيف يبدو استخدام وسائل الإعلام للسكان في يوم متوسط عام 2023؟ كيف يتطور الوضع بمرور الوقت؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>يغطي الاستخدام جزءًا كبيرًا من اليوم، حيث تهيمن وسائل الإعلام الرقمية والإنترنت بشكل كامل.</li>
              <li>
                بمرور الوقت، انخفض استهلاك وسائل الإعلام المطبوعة التقليدية (مثل الصحف اليومية) وكذلك التلفزيون الخطي والراديو بشكل مطرد. في الوقت نفسه، زاد استخدام الإنترنت وخدمات البث ووسائل التواصل الاجتماعي بشكل كبير.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            3. اشرح بإيجاز مفاهيم تكوين الرأي، والرأي العام، وممر الآراء.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>تكوين الرأي:</strong> العملية التي تتشكل فيها الآراء لدى الأفراد والجماعات من خلال تفاعل بين التجارب الشخصية والمحادثات ووسائل الإعلام.
              </li>
              <li>
                <strong>الرأي العام:</strong> الموقف المجمع أو الرأي في قضية محددة يتبناه مجموعة كبيرة من الناس في المجتمع.
              </li>
              <li>
                <strong>ممر الآراء:</strong> حدود ما يعتبر مقبولاً بشكل عام للتعبير عنه في النقاش العام دون التعرض لرفض قوي.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            4. ما هو الفرق بين المعلومات والدعاية؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>المعلومات:</strong> تهدف إلى الإعلام ونقل المعرفة الموضوعية.
              </li>
              <li>
                <strong>الدعاية:</strong> تهدف إلى التأثير المتعمد لجعل الناس يفكرون أو يتصرفون بطريقة معينة.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 5 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            5. ماذا يعني أننا نشارك في الرسائل بشكل انتقائي؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يعني ذلك أن الناس يختارون ويفسرون ويتذكرون المعلومات بناءً على قيمهم واهتماماتهم وخبراتهم السابقة. غالبًا ما نختار ما لا يتوافق مع رؤيتنا للعالم.
            </p>
          </div>
        </div>

        {/* سؤال 6 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            6. ما الذي يميز النموذج التحرري عن نموذج الخدمة العامة؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>النموذج التحرري:</strong> يقوم على وسائل إعلام تجارية تمول عبر عائدات الإعلانات والمستخدمين. السوق ينظم العرض وغالبًا ما يكون التركيز على الترفيه.
              </li>
              <li>
                <strong>نموذج الخدمة العامة:</strong> يمول من أموال عامة (مثل الضرائب) ويجب أن يُدار في خدمة المصلحة العامة بشكل مستقل عن المصالح التجارية. لديه متطلبات للموضوعية والحياد وتنوع واسع للجميع.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 7 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            7. ماذا تعني وسائل التواصل الاجتماعي وما الذي يميزها عن وسائل الإعلام التقليدية؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>وسائل التواصل الاجتماعي</strong> هي منصات قائمة على الويب حيث يقوم المستخدمون أنفسهم بإنشاء المحتوى ومشاركته والتعليق عليه (اتصال ثنائي الاتجاه).
              </li>
              <li>
                <strong>وسائل الإعلام التقليدية</strong> (التلفزيون والراديو والصحافة) تعتمد بشكل أساسي على مواد محررة تُبث من مرسل إلى العديد من المستقبلين (اتصال أحادي الاتجاه).
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 8 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            8. كيف تختلف طرق حصول أنواع وسائل الإعلام المختلفة على الإيرادات؟ قارن بين وسائل التواصل الاجتماعي ووسائل الإعلام التقليدية.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>وسائل الإعلام التقليدية:</strong> تمول تاريخيًا من خلال الاشتراكات، مبيعات الأعداد المفردة، الدعم الصحفي/الإعلامي، وعائدات الإعلانات المحلية والوطنية. تمول الخدمة العامة من خلال الضرائب.
              </li>
              <li>
                <strong>وسائل التواصل الاجتماعي:</strong> تمول بشكل أساسي من خلال الإعلانات المستهدفة للجمهور بناءً على بيانات المستخدم المجمعة والخوارزميات.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 9 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            9. تعتمد صناعة الأخبار الآن بشكل أكبر على "ثقافة المشاركة" في وسائل التواصل الاجتماعي. لماذا؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              لأن عائدات الإعلانات التقليدية انتقلت إلى عمالقة التكنولوجيا، تحتاج وسائل الإعلام الإخبارية إلى الوصول إلى المزيد من القراء لدفع الزيارات إلى مواقعها الخاصة وبالتالي الحصول على إيرادات من النقرات أو الاشتراكات أو الإعلانات.
            </p>
          </div>
        </div>

        {/* سؤال 10 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            10. ماذا تعني فقاعة التصفية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              حالة تقوم فيها الخوارزميات بتخصيص المحتوى الذي تراه بناءً على عمليات البحث والنقرات السابقة. هذا يعني أنك تتعرض بشكل أساسي للمعلومات التي تؤكد آرائك الحالية وتستبعد وجهات النظر الأخرى.
            </p>
          </div>
        </div>

        {/* سؤال 11 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            11. يستخدم مصطلح الخوارزمية كثيرًا في سياق وسائل التواصل الاجتماعي. ماذا يعني؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تعليمات رياضية أو كتاب قواعد يحلل بيانات المستخدمين لفرز وترتيب وتخصيص المحتوى الذي يظهر في خلاصة المستخدم.
            </p>
          </div>
        </div>

        {/* سؤال 12 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            12. اذكر بعض الانتقادات الموجهة للإنترنت ووسائل التواصل الاجتماعي.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>انتشار المعلومات المضللة والكراهية على الإنترنت:</strong> نقص النقد للمصادر يجعل الأخبار الكاذبة والتنمر ينتشران بسرعة.
              </li>
              <li>
                <strong>الصحة النفسية:</strong> خاصة بين الأطفال والشباب نتيجة وقت الشاشة والبحث عن التقدير.
              </li>
              <li>
                <strong>تركيز السلطة:</strong> عدد قليل من عمالقة التكنولوجيا الأجانب يسيطرون على المنصات وأموال الإعلانات.
              </li>
              <li>
                <strong>غرف الصدى / فقاعات التصفية:</strong> مساحة أقل للنقاش المتوازن.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 13 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            13. ماذا يعني (أ) وظيفة تحديد الأولويات؟ (ب) منطق الإعلام؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>وظيفة تحديد الأولويات:</strong> سلطة وسائل الإعلام في تحديد القضايا التي يتم تناولها للنشر وبالتالي إبرازها للجمهور والسياسيين.
              </li>
              <li>
                <strong>منطق الإعلام:</strong> المبادئ والقواعد التي تحدد ما يصبح خبرًا (مثل التبسيط، التكثيف، التخصيص والدراما).
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 14 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            14. ما الذي يميز نموذج هنك براك لاختيار الأخبار؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يوضح كيف يتأثر اختيار الأخبار بالبعد الزمني والمكاني (الجغرافي) والثقافي بين الحدث والمستقبل. كلما كان الحدث أقرب، زادت قيمته الإخبارية.
            </p>
          </div>
        </div>

        {/* سؤال 15 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            15. ما هو حارس البوابة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              دور مهني (مثل محرر أو صحفي) يختار الأخبار التي سيتم نشرها والتي سيتم استبعادها.
            </p>
          </div>
        </div>

        {/* سؤال 16 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            16. ما هو المحتوى الرئيسي لقانوني TF و YGL؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>قانون حرية الطباعة (TF):</strong> ينطبق على المطبوعات. يحتوي على حظر الرقابة، حرية التأسيس، حماية المبلغين، مبدأ العلانية وقواعد الناشر المسؤول.
              </li>
              <li>
                <strong>قانون حرية التعبير الأساسي (YGL):</strong> يعطي حماية مماثلة لـ TF ولكن لوسائل الإعلام الإذاعية والرقمية (التلفزيون، الراديو، مواقع الويب).
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 17 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            17. ما هي القيود على حرية التعبير في السويد؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تُنظم القيود من خلال جرائم حرية التعبير مثل التشهير، والتحريض ضد مجموعة عرقية، والتهديد غير القانوني، والخيانة العظمى، والتجسس، وجرائم المواد الإباحية للأطفال.
            </p>
          </div>
        </div>

        {/* سؤال 18 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            18. ما هي القواعد الأخلاقية التي يجب على الصحفي اتباعها في عمله؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>تقديم أخبار صحيحة.</li>
              <li>لا تحكم على أحد دون سماعه (احترام الخصوصية الشخصية).</li>
              <li>اسمع كلا الطرفين.</li>
              <li>كن حذرًا مع الأسماء والصور عند النشر.</li>
            </ul>
          </div>
        </div>

        {/* سؤال 19 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            19. أعط مثالاً على التحدي الذي يشكله الإنترنت للقواعد الصحفية.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              على الإنترنت، يتم النشر مباشرة دون مراجعة تحريرية، مما يجعل المعلومات المضللة والمواد التي تنتهك الخصوصية تنتشر بسرعة. من الصعب محاسبة المنصات الأجنبية أو الحسابات المجهولة.
            </p>
          </div>
        </div>

        {/* سؤال 20 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            20. ماذا يعني الحياد تجاه العواقب في التقارير الإخبارية؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              أن يقدم الصحفيون الحقيقة والأخبار ذات الصلة بغض النظر عن العواقب التي قد تترتب على النشر للأشخاص المعنيين أو المجتمع.
            </p>
          </div>
        </div>
      </section>

      {/* ===== أسئلة التحليل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>أسئلة التحليل</h2>

        {/* سؤال 21 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            21. نموذج المرسل والاتصال ثنائي الاتجاه في النقاشات
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>أ)</strong> المرسل (مثل SVT/مقدم النقاش وقادة الأحزاب) يرسل رسالة عبر وسيط التلفزيون. يصبح المستقبلون (المشاهدون/الصحفيون) بدورهم مرسلين عندما يتفاعلون ويعلقون على وسائل التواصل الاجتماعي (إكس، خيوط، غرف دردشة). يتم التقاط هذه التفاعلات من قبل مشاهدين ووسائل إعلام أخرى وتشكل تدفق اتصال ثنائي الاتجاه في الوقت الفعلي.
            </p>
            <p className={classes.paragraph}>
              <strong>ب)</strong> التحديات أكبر اليوم بسبب الضوضاء والسرعة ونقص السيطرة على كيفية تفسير الرسالة. يجب على المرسل الآن التنافس على الاهتمام والرد على التغذية الراجعة الفورية والأخطاء أو التفسيرات الخاطئة على وسائل التواصل الاجتماعي.
            </p>
          </div>
        </div>

        {/* سؤال 22 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            22. مقارنة بين الخدمة العامة والنموذج التحرري
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>نموذج الخدمة العامة:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>المزايا:</strong> يضمن الاستقلال والحياد والتنوع في العرض وتغطية البلاد بأكملها.
              </li>
              <li>
                <strong>العيوب:</strong> يمول من أموال الضرائب ويمكن أن يُنظر إليه من قبل النقاد على أنه موجه من الدولة أو بطيء الحركة.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>النموذج التحرري:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>المزايا:</strong> عرض كبير، موجه للسوق ولا يتطلب أموالاً ضريبية.
              </li>
              <li>
                <strong>العيوب:</strong> خطر انخفاض الجودة، طعم النقر والترفيه السطحي لأن الربح هو التركيز.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 23 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            23. تطبيق الموضوعية والحياد
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>الموضوعية:</strong> تتطلب أن تكون جميع الحقائق قابلة للتحقق (متطلب الصدق) وذات صلة بالموضوع.
              </li>
              <li>
                <strong>الحياد:</strong> يتطلب أن يُسمح لكلا طرفي النزاع بالتحدث بلغة محايدة دون أن يضيف المعلم أو مقدم الأخبار تقييماته الخاصة.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 24 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            24. مقارنة بين وسائل الإعلام التقليدية ووسائل التواصل الاجتماعي
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>وسائل الإعلام التقليدية:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>المزايا:</strong> مصداقية عالية، مراجعة نقدية للمصادر وناشر مسؤول قانونيًا.
              </li>
              <li>
                <strong>العيوب:</strong> تدفق أخبار أبطأ وثقافة مشاركة أقل.
              </li>
            </ul>
            <p className={classes.paragraph}>
              <strong>وسائل التواصل الاجتماعي:</strong>
            </p>
            <ul className={classes.list}>
              <li>
                <strong>المزايا:</strong> نقل أخبار سريع جدًا وتفاعلية.
              </li>
              <li>
                <strong>العيوب:</strong> خطر كبير للمعلومات المضللة والكراهية على الإنترنت وفقاعات التصفية.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== أسئلة النقاش ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>أسئلة النقاش</h2>

        {/* سؤال 25 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            25. حرية الطباعة والتعبير في السويد مقارنة بالعالم الخارجي
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تمتلك السويد واحدة من أقوى حريات الطباعة والتعبير في العالم مع مبدأ العلانية المحمي دستوريًا وحظر الرقابة. في الدول الاستبدادية، غالبًا ما تكون وسائل الإعلام خاضعة للسيطرة الحكومية أو خاضعة لرقابة صارمة.
            </p>
          </div>
        </div>

        {/* سؤال 26 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            26. مراقبة الشخصيات العامة والخصوصية
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>تبرر متطلبات الشخصيات العامة بأن لديهم سلطة ويديرون موارد مشتركة.</li>
              <li>يجب مراعاة أفراد العائلة إذا لم يظهروا هم أنفسهم في العلن. يجب موازنة القيمة الإخبارية والمصلحة العامة مقابل الضرر الشخصي.</li>
            </ul>
          </div>
        </div>

        {/* سؤال 27 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            27. تأثير وسائل التواصل الاجتماعي على الديمقراطية
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li>
                <strong>إيجابي:</strong> ديمقراطية متزايدة حيث تُسمع أصوات أكثر مباشرة بدون حراس بوابة.
              </li>
              <li>
                <strong>سلبي:</strong> انتشار المعلومات المضللة والاستقطاب والتأثير السياسي عبر حسابات وهمية أو خوارزميات.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال 28 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            28. عواقب إغلاق الصحف المحلية ونقص الرقابة
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              عندما تُغلق الصحف المحلية، تنشأ "ظلال إخبارية". يُترك أصحاب السلطة على المستوى المحلي دون رقابة، مما يزيد من خطر الفساد. كما يصعب مراقبة النخبة في البيئات الصغيرة بسبب علاقات الصداقة والاعتماد الاجتماعي.
            </p>
          </div>
        </div>
      </section>

      {/* ===== أسئلة التعمق ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>أسئلة التعمق</h2>

        {/* سؤال 29 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            29. دراسة صفحة رسائل القراء في الصحيفة المحلية
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              غالبًا ما تظهر دراسة صفحة رسائل القراء أن النقاشات المحلية تدور حول الأمن والمدارس والرعاية الصحية والمرور وقضايا البناء. تعمل كمنفذ ديمقراطي مهم للمواطنين.
            </p>
          </div>
        </div>

        {/* سؤال 30 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            30. مقارنة بين صفحات الافتتاحيات السياسية
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              لصفحات الافتتاحيات ألوان سياسية محددة (مثل ليبرالية محافظة، ديمقراطية اجتماعية) مما يظهر في استنتاجاتها حول الضرائب أو الرفاهية، حتى لو كانت تعلق غالبًا على نفس الأحداث الإخبارية الحالية.
            </p>
          </div>
        </div>

        {/* سؤال 31 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            31. معايير ما يشكل خبرًا
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              غالبًا ما يُعرَّف الخبر بمعايير مثل البعد (جغرافيًا/ثقافيًا)، عنصر المفاجأة، الدراما، شخصيات النخبة، وعدد المتأثرين.
            </p>
          </div>
        </div>

        {/* سؤال 32 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            32. الثقة في وسائل الإعلام المختلفة (مقياس الثقة)
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يُظهر مقياس الثقة غالبًا أن الخدمة العامة (SVT/SR) تحظى بأعلى ثقة، بينما تحظى وسائل التواصل الاجتماعي بأدنى ثقة. تفسر الثقة العالية في الخدمة العامة بمتطلبات الحياد والموضوعية.
            </p>
          </div>
        </div>

        {/* سؤال 33 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            33. قانون التجسس وتأثيره على حرية التعبير
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>قانون التجسس (التجسس الخارجي):</strong> يجرم التعامل غير المصرح به مع معلومات سرية يمكن أن تضر بعلاقة السويد مع دول أو منظمات أخرى (مثل الأمم المتحدة/الناتو). يزعم النقاد أنه يمكن أن يعيق المبلغين عن الفساد والصحفيين من كشف المخالفات.
            </p>
          </div>
        </div>

        {/* سؤال 34 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            34. مراجعة الحياد تجاه العواقب
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>الحياد تجاه العواقب:</strong> مبدأ نشر الحقيقة بغض النظر عن النتائج. ليس دائمًا مطلقًا لأن القواعد الأخلاقية للصحافة تتطلب مراعاة مثل خطر الانتحار أو فضح الأبرياء.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}