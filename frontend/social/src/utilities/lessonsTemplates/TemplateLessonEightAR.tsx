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
    textAlign: "right",
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

export default function TemplateLessonEightAR() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>الفصل الثامن: الاتحاد الأوروبي والاتحاد الاقتصادي والنقدي</h1>
      <p className={classes.subtitle}>
        تلخيص كامل مع الأسئلة والتحليل والمناقشة والمصطلحات الأساسية
      </p>

      {/* ===== 1. من اتحاد الفحم والصلب إلى الاتحاد الأوروبي ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>١. من اتحاد الفحم والصلب إلى الاتحاد الأوروبي</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم التطور التاريخي من مساعي السلام في فترة ما بعد الحرب إلى الاتحاد الأوروبي الحالي.
        </p>

        <h3 className={classes.subHeading}>الخلفية والدوافع</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • كان حلم أوروبا الموحدة موجودًا منذ قرون، لكنه ارتبط بالحروب والفتوحات (مثل شارلمان ونابليون وهتلر).
          </li>
          <li className={classes.listItem}>
            • بعد الحرب العالمية الثانية، أصبح <strong>السلام</strong> الدافع الرئيسي للتعاون، خاصة بين فرنسا وألمانيا.
          </li>
        </ul>

        <h3 className={classes.subHeading}>إعلان شومان (١٩٥٠)</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • اقترح وزير الخارجية الفرنسي روبرت شومان وضع صناعة <strong>الفحم والصلب</strong> في فرنسا وألمانيا الغربية تحت سيطرة مشتركة.
          </li>
          <li className={classes.listItem}>
            • كان الهدف تأمين السلام، لأن هذه الصناعات كانت أساس الصناعات الحربية. يعتبر هذا بداية التعاون الأوروبي الحالي، ويُحتفل باليوم الأوروبي في ٩ مايو تخليدًا لهذا الإعلان.
          </li>
        </ul>

        <h3 className={classes.subHeading}>اتحاد الفحم والصلب (١٩٥١)</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • وقعت ست دول (بلجيكا، فرنسا، إيطاليا، لوكسمبورغ، هولندا، ألمانيا الغربية) الاتفاقية وأنشأت أول جماعة أوروبية.
          </li>
        </ul>

        <h3 className={classes.subHeading}>معاهدة روما (١٩٥٧)</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • اتخذت الخطوة التالية نحو التعاون الاقتصادي من خلال إنشاء:
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <strong>الجماعة الاقتصادية الأوروبية (EEC):</strong> أنشأت اتحادًا جمركيًا بين الدول الأعضاء (إلغاء الرسوم الجمركية الداخلية، وتعريفة جمركية موحدة تجاه العالم الخارجي)، واتخذت قرارات بشأن سياسة زراعية وتجارية ونقل مشتركة.
              </li>
              <li className={classes.listItem}>
                <strong>يوراتوم (Euratom):</strong> هدفت إلى الاستخدام السلمي للطاقة النووية.
              </li>
            </ul>
          </li>
          <li className={classes.listItem}>
            • تطورت هذه التعاونات الثلاثة (اتحاد الفحم والصلب، والجماعة الاقتصادية الأوروبية، ويوراتوم) لتصبح <strong>الجماعة الأوروبية (EC)</strong>.
          </li>
          <li className={classes.listItem}>
            • أصبحت <strong>السويد</strong> عضوًا في الاتحاد الأوروبي عام <strong>١٩٩٥</strong>.
          </li>
        </ul>

        <h3 className={classes.subHeading}>قانون الوحدة الأوروبية (١٩٨٦)</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • في عهد رئيس المفوضية جاك ديلور، تم اتخاذ خطوة كبيرة نحو تكامل أقوى.
          </li>
          <li className={classes.listItem}>
            • كان الهدف تحقيق <strong>السوق الداخلية</strong> قبل نهاية عام ١٩٩٢ من خلال ضمان <strong>"الحريات الأربع"</strong>: حرية حركة السلع والخدمات والعمالة ورؤوس الأموال.
          </li>
        </ul>
      </section>

      {/* ===== 2. مؤسسات الاتحاد الأوروبي وعمليات اتخاذ القرار ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٢. مؤسسات الاتحاد الأوروبي وعمليات اتخاذ القرار</h2>
        <p className={classes.paragraph}>
          يشرح هذا القسم كيفية إدارة الاتحاد الأوروبي وكيفية وضع القوانين واتخاذ القرارات.
        </p>

        <h3 className={classes.subHeading}>المجلس الأوروبي</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • يتكون من رؤساء الدول أو الحكومات في الدول الأعضاء بالإضافة إلى رئيس المفوضية.
          </li>
          <li className={classes.listItem}>
            • يجتمع أربع مرات على الأقل سنويًا (القمم).
          </li>
          <li className={classes.listItem}>
            • <strong>المهمة الرئيسية:</strong> توجيه الاتحاد الأوروبي سياسيًا وتطويره، لكنه <em>لا</em> يسن القوانين.
          </li>
        </ul>

        <h3 className={classes.subHeading}>المفوضية الأوروبية</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • تعمل كـ <strong>"حكومة"</strong> الاتحاد الأوروبي ولها <strong>الحصرية</strong> في اقتراح تشريعات جديدة.
          </li>
          <li className={classes.listItem}>
            • تراقب التزام الدول الأعضاء بقوانين الاتحاد الأوروبي وتدير ميزانية الاتحاد.
          </li>
          <li className={classes.listItem}>
            • لها رئيس وأعضاء من كل دولة عضو.
          </li>
        </ul>

        <h3 className={classes.subHeading}>مجلس الوزراء</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • الهيئة الرئيسية <strong>لاتخاذ القرارات</strong> في الاتحاد الأوروبي.
          </li>
          <li className={classes.listItem}>
            • يتكون من وزراء من الدول الأعضاء (يختلف التكوين حسب الموضوع).
          </li>
          <li className={classes.listItem}>
            • غالبًا ما يتم التصويت بـ <strong>الأغلبية المزدوجة</strong> (موافقة ٥٥٪ على الأقل من الدول الأعضاء التي تمثل ٦٥٪ على الأقل من سكان الاتحاد الأوروبي).
          </li>
        </ul>

        <h3 className={classes.subHeading}>البرلمان الأوروبي</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • المؤسسة الوحيدة المنتخبة مباشرة من قبل مواطني الاتحاد الأوروبي كل خمس سنوات.
          </li>
          <li className={classes.listItem}>
            • يشارك في السلطة التشريعية مع مجلس الوزراء من خلال <strong>الإجراء التشريعي العادي</strong>.
          </li>
          <li className={classes.listItem}>
            • ليس له الحق الحصري في اقتراح القوانين، بل يوافق على مقترحات المفوضية أو يعدلها أو يرفضها. يعتبر البعض هذا مشكلة ديمقراطية.
          </li>
          <li className={classes.listItem}>
            • يوافق أيضًا على انضمام دول جديدة، والاتفاقيات الدولية، والمفوضية ككل.
          </li>
        </ul>

        <h3 className={classes.subHeading}>محكمة العدل الأوروبية</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • يوجد قاضٍ من كل دولة عضو، يتم تعيينهم من قبل الحكومات لمدة ست سنوات.
          </li>
          <li className={classes.listItem}>
            • <strong>المهمة الرئيسية:</strong> تفسير قوانين الاتحاد الأوروبي وضمان تطبيقها بشكل موحد في جميع الدول الأعضاء.
          </li>
          <li className={classes.listItem}>
            • تراقب امتثال قرارات مجلس الوزراء وتصرفات الدول الأعضاء لقواعد الاتحاد الأوروبي.
          </li>
          <li className={classes.listItem}>
            • تحل النزاعات بين مؤسسات الاتحاد الأوروبي وبين المؤسسات والدول الأعضاء.
          </li>
          <li className={classes.listItem}>
            • ليس لها صلاحيات في سياسة الخارجية والأمن أو في الشؤون الداخلية والقضائية (مثل اللجوء والهجرة).
          </li>
        </ul>

        <h3 className={classes.subHeading}>القرارات فوق الوطنية مقابل القرارات بين الحكومات</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <strong>القرارات فوق الوطنية:</strong> يمكن للاتحاد الأوروبي اتخاذ قرارات بالأغلبية تلزم جميع الدول الأعضاء، حتى تلك التي صوتت ضدها. ينطبق هذا على المجالات التي تنازلت فيها الدول الأعضاء عن سلطة اتخاذ القرار، مثل السياسة التجارية والزراعة والسوق الداخلية والسياسة البيئية. <em>"القانون الأوروبي يتجاوز القانون الوطني"</em>.
          </li>
          <li className={classes.listItem}>
            <strong>القرارات بين الحكومات:</strong> قرارات تتطلب <strong>الإجماع</strong>، حيث يكون لكل دولة حق النقض (الفيتو). ينطبق هذا على المجالات الحساسة مثل السياسة الخارجية والأمنية والدفاعية والضريبية.
          </li>
        </ul>
      </section>

      {/* ===== 3. سياسات الاتحاد الأوروبي وعمله في الحياة اليومية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٣. سياسات الاتحاد الأوروبي وعمله في الحياة اليومية</h2>
        <p className={classes.paragraph}>
          يصف هذا القسم بعض مجالات السياسة المركزية التي تؤثر بشكل مباشر على المواطنين والشركات.
        </p>

        <h3 className={classes.subHeading}>سياسة المناخ</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • يهدف الاتحاد الأوروبي لأن يكون <strong>أول قارة محايدة مناخيًا</strong> بحلول عام ٢٠٥٠، تماشيًا مع اتفاقية باريس.
          </li>
          <li className={classes.listItem}>
            • أداة مهمة هي <strong>تداول انبعاثات الكربون (ETS)</strong>، والتي تشمل الإنتاج الصناعي والطاقي. تحصل الشركات على كمية معينة من حصص الانبعاثات ويمكنها المتاجرة بها، مما يخلق حافزًا لتقليل الانبعاثات.
          </li>
          <li className={classes.listItem}>
            • <strong>"Fit for 55"</strong> هي حزمة تشريعية لتقليل صافي الانبعاثات بنسبة ٥٥٪ على الأقل بحلول ٢٠٣٠. <strong>ETS 2</strong> هو جزء جديد ينظم الانبعاثات من النقل البري والمباني.
          </li>
        </ul>

        <h3 className={classes.subHeading}>حرية تنقل الأشخاص (اتفاقية شنغن)</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • تمنح مواطني الاتحاد الأوروبي الحق في السفر والإقامة بحرية في دولة عضو أخرى (لمدة ثلاثة أشهر، ثم يشترط القدرة على إعالة النفس).
          </li>
          <li className={classes.listItem}>
            • تعني أن معظم الدول الأعضاء (بما في ذلك السويد) ألغت ضوابط الحدود الداخلية (<strong>اتفاقية شنغن</strong>).
          </li>
          <li className={classes.listItem}>
            • تنطوي أيضًا على مشاكل مثل الجريمة عبر الحدود والهجرة غير الشرعية، مما قد يؤدي إلى فرض ضوابط حدودية مؤقتة في حالات استثنائية.
          </li>
        </ul>

        <h3 className={classes.subHeading}>حرية حركة السلع والخدمات ورؤوس الأموال</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • يجب أن يكون المنتج الذي يباع بشكل قانوني في دولة عضو قابلاً للبيع في جميع الدول الأخرى (باستثناء التهديدات للحياة أو الصحة أو البيئة). على سبيل المثال، سمح للسويد بالاحتفاظ بحظرها على السعوط والإعلان عن الكحول عند الانضمام.
          </li>
        </ul>

        <h3 className={classes.subHeading}>سياسة اللجوء والهجرة</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • تشكل تحديًا كبيرًا للاتحاد الأوروبي. يهدف اتفاق جديد من عام ٢٠٢٤ إلى:
            <ul className={classes.list}>
              <li className={classes.listItem}>
                إنشاء مراكز لجوء على الحدود الخارجية للاتحاد الأوروبي لفحص طلبات اللجوء بسرعة (في غضون ١٢ أسبوعًا) والتمييز بين الأشخاص الذين لديهم أسباب للحماية وغيرهم.
              </li>
              <li className={classes.listItem}>
                فرض <strong>تضامن إلزامي في توزيع اللاجئين</strong>، حيث يجب على الدول التي ترفض استقبال المهاجرين المساهمة ماليًا أو بالمعدات للدول التي تستقبلهم.
              </li>
              <li className={classes.listItem}>
                تبقى مبدأ <strong>اتفاقية دبلن</strong> ساريًا: الدولة العضو الأولى التي يصل إليها اللاجئ هي المسؤولة عن فحص الطلب. وهذا يثقل كاهل دول جنوب أوروبا غالبًا.
              </li>
            </ul>
          </li>
          <li className={classes.listItem}>
            • يؤدي عدم وجود حد خارجي يمكن التحكم فيه أحيانًا إلى إعادة الدول الأعضاء فرض ضوابط حدودية خاصة بها، وهو أمر مسموح به في حالات استثنائية.
          </li>
        </ul>
      </section>

      {/* ===== 4. الاتحاد الاقتصادي والنقدي (EMU) ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٤. الاتحاد الاقتصادي والنقدي (EMU)</h2>
        <p className={classes.paragraph}>
          يركز هذا القسم على التعاون حول اليورو وقواعده وتحدياته.
        </p>

        <h3 className={classes.subHeading}>أساسيات الاتحاد الاقتصادي والنقدي</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • الاتحاد الاقتصادي والنقدي هو اتحاد نقدي تم إنشاؤه عام ١٩٩٩. جميع دول الاتحاد الأوروبي أعضاء في الاتحاد الاقتصادي والنقدي، لكن ٢٠ دولة من أصل ٢٧ تستخدم <strong>اليورو</strong> كعملة لها (آخرها كرواتيا عام ٢٠٢٣).
          </li>
          <li className={classes.listItem}>
            • للانضمام إلى منطقة اليورو، يجب على الدولة استيفاء خمسة <strong>معايير تقارب</strong> تتعلق باستقرار الأسعار وأسعار الفائدة والدين العام.
          </li>
        </ul>

        <h3 className={classes.subHeading}>مزايا وعيوب اليورو</h3>
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.th}>المزايا</th>
                <th className={classes.th}>العيوب</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.td}>
                  سهولة مقارنة الأسعار والأجور، وزيادة استقرار الأسعار.
                </td>
                <td className={classes.td}>
                  تفقد الدول الأعضاء السيطرة على <strong>سياساتها النقدية</strong> (لا يمكنها تغيير أسعار الفائدة أو أسعار الصرف لتحفيز الاقتصاد).
                </td>
              </tr>
              <tr>
                <td className={classes.td}>
                  عملة أكبر وأكثر أمانًا (أقل عرضة للتقلبات من العملة الوطنية الصغيرة).
                </td>
                <td className={classes.td}>—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={classes.subHeading}>دور البنوك المركزية</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • <strong>البنك المركزي الأوروبي (ECB):</strong> مقره في فرانكفورت وهو مسؤول عن السياسة النقدية في منطقة اليورو.
          </li>
          <li className={classes.listItem}>
            • <strong>مجلس البنك المركزي الأوروبي:</strong> أعلى هيئة لاتخاذ القرارات، ويحدد أسعار الفائدة لمنطقة اليورو بأكملها.
          </li>
          <li className={classes.listItem}>
            • <strong>مجموعة اليورو:</strong> اجتماع غير رسمي لوزراء المالية من دول اليورو لتنسيق السياسة الاقتصادية.
          </li>
        </ul>

        <h3 className={classes.subHeading}>ميثاق الاستقرار والنمو</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • تم وضعه لضمان مالية عامة سليمة داخل الاتحاد الاقتصادي والنقدي. يحدد سقفًا لعجز الميزانية والدين العام للدول الأعضاء:
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <strong>عجز الميزانية:</strong> حد أقصى ٣٪ من الناتج المحلي الإجمالي.
              </li>
              <li className={classes.listItem}>
                <strong>الدين العام:</strong> حد أقصى ٦٠٪ من الناتج المحلي الإجمالي.
              </li>
            </ul>
          </li>
          <li className={classes.listItem}>
            <strong>النقد:</strong> كان الميثاق تاريخيًا صعب التطبيق. خرقت العديد من الدول، بما في ذلك فرنسا وألمانيا، القواعد. في عام ٢٠٢٤، بلغ الدين العام في منطقة اليورو حوالي ٩٠٪ من الناتج المحلي الإجمالي، أي أعلى بكثير من الحد المسموح به.
          </li>
        </ul>

        <h3 className={classes.subHeading}>تحديات الاتحاد الاقتصادي والنقدي</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • <strong>عدم التماثل الاقتصادي:</strong> تُحدد السياسة النقدية مركزياً من قبل البنك المركزي الأوروبي (فوق وطني)، بينما تظل السياسة المالية (الضرائب والإنفاق) بيد كل دولة عضو (وطني). وهذا يخلق توترًا داخليًا.
          </li>
          <li className={classes.listItem}>
            • <strong>ارتفاع الديون:</strong> دول مثل اليونان وإيطاليا لديها ديون عامة تتجاوز بكثير ١٠٠٪ من الناتج المحلي الإجمالي، مما يقلل من مجال التحفيز المالي في الأزمات. للسويد دين عام منخفض نسبيًا حوالي ٣١٪.
          </li>
          <li className={classes.listItem}>
            • لمواجهة الأزمات، أنشأ الاتحاد الأوروبي <strong>آلية الاستقرار الأوروبية (ESM)</strong> لدعم دول اليورو في الأزمات الاقتصادية، بالإضافة إلى <strong>اتحاد مصرفي</strong> لاستقرار النظام المصرفي.
          </li>
        </ul>
      </section>

      {/* ===== 5. مستقبل الاتحاد الأوروبي ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٥. مستقبل الاتحاد الأوروبي</h2>
        <p className={classes.paragraph}>
          يناقش هذا القسم توسع الاتحاد الأوروبي، وشروط العضوية، وعملية الخروج من الاتحاد.
        </p>

        <h3 className={classes.subHeading}>التوسع والدول المرشحة</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • نما الاتحاد الأوروبي من ٦ إلى ٢٧ دولة عضو. في بداية عام ٢٠٢٥، كان هناك ٩ دول مرشحة، بما في ذلك أوكرانيا ومولدوفا ودول غرب البلقان.
          </li>
          <li className={classes.listItem}>
            • أدى الغزو الروسي لأوكرانيا عام ٢٠٢٢ إلى تسريع المناقشات حول التوسع، مع التأكيد على أنه لا ينبغي أن يستغرق وقتًا طويلاً لأسباب جيوسياسية.
          </li>
        </ul>

        <h3 className={classes.subHeading}>شروط العضوية (معايير كوبنهاغن لعام ١٩٩٣)</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • <strong>المتطلبات السياسية:</strong> احترام المبادئ الديمقراطية، وسيادة القانون، وحقوق الإنسان.
          </li>
          <li className={classes.listItem}>
            • <strong>المتطلبات الإدارية:</strong> وجود إدارة عامة قادرة على تنفيذ تشريعات الاتحاد الأوروبي.
          </li>
          <li className={classes.listItem}>
            • <strong>المتطلبات الاقتصادية:</strong> وجود اقتصاد سوقي قادر على تحمل المنافسة داخل السوق الداخلية للاتحاد الأوروبي.
          </li>
          <li className={classes.listItem}>
            • تضيف معاهدة لشبونة أن الدولة يجب أن تحترم قيم الاتحاد (الحرية والديمقراطية والمساواة...) لكنها لا تحدد ما يعنيه "أوروبي". إنه تقدير سياسي في كل حالة على حدة.
          </li>
        </ul>

        <h3 className={classes.subHeading}>الخروج من الاتحاد الأوروبي</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • ينظمه <strong>المادة ٥٠ من معاهدة لشبونة</strong>. يجب على الدولة التي تريد مغادرة الاتحاد الأوروبي إبلاغ المجلس الأوروبي بقرارها، والذي يتفاوض بعد ذلك على اتفاقية الانسحاب.
          </li>
          <li className={classes.listItem}>
            • <strong>بريكست (٢٠٢٠):</strong> كانت بريطانيا أول دولة تستخدم المادة ٥٠ وتغادر الاتحاد الأوروبي بعد استفتاء عام ٢٠١٦.
          </li>
        </ul>

        <h3 className={classes.subHeading}>التحديات المركزية للمستقبل</h3>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            • <strong>قدرة الاندماج:</strong> هل يمكن للاتحاد الأوروبي أن يعمل بكفاءة مع أكثر من ٣٠ دولة عضو؟ يتعلق الأمر بقدرة المؤسسات وعمليات اتخاذ القرار.
          </li>
          <li className={classes.listItem}>
            • <strong>القيم الأساسية:</strong> كيف يجب أن يتعامل الاتحاد الأوروبي مع الدول الأعضاء التي تنتهك قيمه الديمقراطية؟
          </li>
          <li className={classes.listItem}>
            • <strong>التعميق مقابل التوسع:</strong> هل يمكن للاتحاد الأوروبي مواصلة تعميق التعاون (مثل سياسة الدفاع) مع قبول العديد من الأعضاء الجدد؟
          </li>
        </ul>
      </section>

      {/* ===== 6. أسئلة النص ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٦. أسئلة النص</h2>

        {/* سؤال ١ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>١. ماذا تعني خطة شومان؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              خطة شومان (أو إعلان شومان) كانت اقتراحًا قدمه وزير الخارجية الفرنسي روبرت شومان في مايو ١٩٥٠. نصت الخطة على وضع صناعة <strong>الفحم والصلب</strong> في فرنسا وألمانيا الغربية تحت سيطرة مشتركة. نظرًا لأن الفحم والصلب كانا أساس الصناعة الحربية، هدفت الخطة إلى تأمين السلام في أوروبا من خلال جعل الحرب مستحيلة اقتصاديًا بين هذه الدول. كانت المنظمة مفتوحة أيضًا لدول أوروبية أخرى. يعتبر هذا بداية التعاون الأوروبي الحالي، ويُحتفل باليوم الأوروبي في ٩ مايو تخليدًا لهذا الإعلان.
            </p>
          </div>
        </div>

        {/* سؤال ٢ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ٢. في معاهدة روما، أنشأت ست دول من الدول الأعضاء الحالية في الاتحاد الأوروبي اتحادًا جمركيًا. ماذا يعني ذلك؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الاتحاد الجمركي يعني أن الدول الأعضاء:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>تلغي الرسوم الجمركية</strong> على السلع المتداولة بين الدول الأعضاء.
              </li>
              <li className={classes.listItem}>
                • <strong>لديها تعريفة جمركية موحدة</strong> تجاه العالم الخارجي، أي أن جميع الدول خارج الاتحاد تواجه نفس معدلات الرسوم الجمركية عند التصدير إلى أي من الدول الأعضاء.
              </li>
            </ul>
            <p className={classes.paragraph}>
              كانت هذه إحدى الركائز الأساسية للجماعة الاقتصادية الأوروبية (EEC) التي أنشئت بموجب معاهدة روما عام ١٩٥٧. كان الهدف زيادة التجارة والتعاون الاقتصادي بين الدول الست المؤسسة (بلجيكا، فرنسا، إيطاليا، لوكسمبورغ، هولندا، وألمانيا الغربية).
            </p>
          </div>
        </div>

        {/* سؤال ٣ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ٣. ما الذي تم تحديده بشكل أساسي في (أ) قانون الوحدة الأوروبية؟ (ب) معاهدة ماستريخت؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>(أ) قانون الوحدة الأوروبية (١٩٨٦):</strong> كان هذا تعديلاً لمعاهدة روما يهدف إلى تعزيز التكامل. كان القرار الرئيسي هو تحقيق <strong>السوق الداخلية</strong> قبل نهاية عام ١٩٩٢ من خلال ضمان <strong>"الحريات الأربع"</strong>: حرية حركة السلع والخدمات والعمالة ورؤوس الأموال.
            </p>
            <p className={classes.paragraph}>
              <strong>(ب) معاهدة ماستريخت (١٩٩٢):</strong> أنشأت هذه المعاهدة رسميًا <strong>الاتحاد الأوروبي (EU)</strong>. وضعت الأساس للتعاون المستقبلي في سياسة الخارجية والأمن وكذلك في الشؤون الداخلية والقضائية. الأهم من ذلك، قررت إنشاء <strong>اتحاد اقتصادي ونقدي (EMU)</strong> بعملة موحدة هي اليورو، وحددت معايير التقارب للدول الراغبة في الانضمام إلى التعاون حول اليورو.
            </p>
          </div>
        </div>

        {/* سؤال ٤ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ٤. اذكر بعض المهام المهمة لـ (أ) المفوضية (ب) مجلس الوزراء (ج) البرلمان الأوروبي (د) المجلس الأوروبي (هـ) محكمة العدل الأوروبية.
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <strong>(أ) المفوضية:</strong> "حكومة" الاتحاد الأوروبي. لها <strong>الحصرية في اقتراح</strong> القوانين الجديدة. تراقب امتثال الدول الأعضاء لقواعد الاتحاد الأوروبي وتدير ميزانيته.
              </li>
              <li className={classes.listItem}>
                <strong>(ب) مجلس الوزراء:</strong> الهيئة الرئيسية <strong>لاتخاذ القرارات</strong> في الاتحاد الأوروبي. يسن القوانين بالتنسيق مع البرلمان الأوروبي ويُنسق سياسات الدول الأعضاء. يتم التصويت غالبًا بأغلبية مؤهلة (أغلبية مزدوجة).
              </li>
              <li className={classes.listItem}>
                <strong>(ج) البرلمان الأوروبي:</strong> ينتخب مباشرة من قبل مواطني الاتحاد الأوروبي. <strong>يشارك في السلطة التشريعية</strong> مع مجلس الوزراء. يوافق على المقترحات التشريعية أو يعدلها أو يرفضها. له أيضًا صلاحيات في الميزانية ويوافق على المفوضية ككل.
              </li>
              <li className={classes.listItem}>
                <strong>(د) المجلس الأوروبي:</strong> يتكون من رؤساء الدول والحكومات. يقدم <strong>التوجيه السياسي</strong> للاتحاد الأوروبي ويحدد الأهداف والأولويات العامة. <em>لا</em> يسن القوانين.
              </li>
              <li className={classes.listItem}>
                <strong>(هـ) محكمة العدل الأوروبية:</strong> تضمن <strong>تفسير وتطبيق قوانين الاتحاد الأوروبي بشكل موحد</strong> في جميع الدول الأعضاء. تفحص ما إذا كانت الدول الأعضاء أو مؤسسات الاتحاد الأوروبي تنتهك قواعده وتحل النزاعات بين هذه الأطراف.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال ٥ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ٥. يتخذ مجلس الوزراء أحيانًا قرارات بالأغلبية المزدوجة. ماذا يعني ذلك؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الأغلبية المزدوجة هي نظام تصويت يستخدم في مجلس الوزراء لتمرير القرارات. يتطلب تحقيق شرطين في وقت واحد:
            </p>
            <ol className={classes.list}>
              <li className={classes.listItem}>
                • يحظى القرار بدعم <strong>٥٥٪</strong> على الأقل من الدول الأعضاء (أي ١٥ دولة على الأقل من أصل ٢٧).
              </li>
              <li className={classes.listItem}>
                • تمثل هذه الدول <strong>٦٥٪</strong> على الأقل من إجمالي سكان الاتحاد الأوروبي.
              </li>
            </ol>
            <p className={classes.paragraph}>
              صمم هذا النظام لضمان أن القرارات لا تحظى بدعم أغلبية الدول فحسب، بل أيضًا بأغلبية مواطني الاتحاد الأوروبي.
            </p>
          </div>
        </div>

        {/* سؤال ٦ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>٦. ماذا يعني الإجراء التشريعي العادي؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              الإجراء التشريعي العادي (المعروف سابقًا بإجراء المشاركة في اتخاذ القرار) هو الطريقة الأكثر شيوعًا لسن قوانين الاتحاد الأوروبي. يعني أن <strong>البرلمان الأوروبي ومجلس الوزراء</strong> لهما سلطة متساوية ويجب أن يتفقا على أي اقتراح تشريعي. العملية كالتالي:
            </p>
            <ol className={classes.list}>
              <li className={classes.listItem}>
                • تقدم <strong>المفوضية</strong> اقتراحًا تشريعيًا.
              </li>
              <li className={classes.listItem}>
                • يُرسل الاقتراح إلى <strong>البرلمان الأوروبي</strong> و<strong>مجلس الوزراء</strong>.
              </li>
              <li className={classes.listItem}>
                • تقرأ كلتا المؤسستين الاقتراح وتقترحان تعديلات. يمكنهما اعتماد الاقتراح في القراءة الأولى إذا اتفقا.
              </li>
              <li className={classes.listItem}>
                • إذا لم يتفقا، ينتقل الاقتراح إلى قراءة ثانية ثم إلى <strong>لجنة التوفيق</strong> التي تتكون من عدد متساو من ممثلي كلتا المؤسستين.
              </li>
              <li className={classes.listItem}>
                • تعمل اللجنة على صياغة نص مشترك يجب أن يوافق عليه كل من البرلمان والمجلس لاعتماد القانون.
              </li>
            </ol>
          </div>
        </div>

        {/* سؤال ٧ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ٧. ما الفرق بين القرارات فوق الوطنية والقرارات بين الحكومات؟
          </h3>
          <div className={classes.answer}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <strong>القرارات فوق الوطنية:</strong> تُتخذ بـ <strong>أغلبية الأصوات</strong> (مثل الأغلبية المزدوجة) داخل مؤسسات الاتحاد الأوروبي. القرارات <strong>ملزمة</strong> لجميع الدول الأعضاء، حتى تلك التي صوتت ضدها. تنازلت الدول الأعضاء عن جزء من سلطتها في اتخاذ القرار للاتحاد الأوروبي في هذه المجالات. ينطبق هذا بشكل أساسي على قضايا السوق الداخلية، والسياسة الزراعية، والسياسة التجارية، وقضايا المنافسة، والسياسة البيئية. <em>"القانون الأوروبي يتجاوز القانون الوطني"</em>.
              </li>
              <li className={classes.listItem}>
                <strong>القرارات بين الحكومات:</strong> تتطلب <strong>الإجماع</strong> بين الدول الأعضاء. لكل دولة حق النقض (الفيتو). ينطبق هذا على المجالات الحساسة التي لا ترغب الدول في التخلي عن نفوذها الوطني فيها، مثل السياسة الخارجية والأمنية والدفاعية والضريبية.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال ٨ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>٨. ما هي مجالات الإنفاق الرئيسية للاتحاد الأوروبي؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              مجالات الإنفاق الرئيسية للاتحاد الأوروبي هي:
            </p>
            <ol className={classes.list}>
              <li className={classes.listItem}>
                • <strong>السياسة الزراعية (الدعم الأساسي):</strong> لا تزال بندًا كبيرًا يقدم دعماً مباشراً للمزارعين ويمول تدابير التنمية الريفية.
              </li>
              <li className={classes.listItem}>
                • <strong>السياسة الإقليمية وسياسة التماسك:</strong> تذهب مبالغ كبيرة لتقليص الفروق بين المناطق الغنية والفقيرة في الاتحاد الأوروبي من خلال الاستثمار في البنية التحتية والبحث والتوظيف.
              </li>
              <li className={classes.listItem}>
                • <strong>البحث والابتكار (أفق أوروبا):</strong> تمويل البحث العلمي والتطوير التكنولوجي.
              </li>
              <li className={classes.listItem}>
                • <strong>العلاقات الدولية:</strong> المساعدات للدول خارج الاتحاد الأوروبي والجهود المبذولة للتنمية العالمية.
              </li>
              <li className={classes.listItem}>
                • <strong>الإدارة:</strong> تكاليف تشغيل مؤسسات الاتحاد الأوروبي ورواتب الموظفين.
              </li>
            </ol>
          </div>
        </div>

        {/* سؤال ٩ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ٩. ماذا يعني اتفاق عام ٢٠٢٤ بشأن سياسة اللجوء والهجرة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              اتفاق عام ٢٠٢٤ هو إصلاح لنظام اللجوء والهجرة في الاتحاد الأوروبي. النقاط الرئيسية هي:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>الفحص السريع على الحدود الخارجية:</strong> سيتم احتجاز المهاجرين من البلدان ذات معدلات القبول المنخفضة (مثل تونس وتركيا والهند) في مراكز لجوء على الحدود الخارجية للاتحاد الأوروبي، حيث سيتم فحص طلباتهم في غضون <strong>اثني عشر أسبوعًا</strong>.
              </li>
              <li className={classes.listItem}>
                • <strong>التضامن الإلزامي:</strong> إدخال نظام حيث يجب على الدول الأعضاء التي ترفض استقبال حصص اللاجئين أن تساهم بدلاً من ذلك بـ <strong>الدعم المالي أو المعدات</strong> للدول التي تستقبلهم.
              </li>
              <li className={classes.listItem}>
                • <strong>الحفاظ على مبدأ دبلن:</strong> يظل مبدأ اتفاقية دبلن ساريًا، مما يعني أن أول دولة عضو يصل إليها طالب اللجوء هي المسؤولة عن فحص طلبه. هذا لمنع تنقل طالبي اللجوء بين الدول ("التسوق للحصول على اللجوء").
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال ١٠ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ١٠. ما هي السمات الرئيسية لتداول انبعاثات الكربون؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              نظام تداول انبعاثات الكربون (EU ETS) هو نظام تم تقديمه في عام ٢٠٠٥ لتقليل انبعاثات غازات الدفيئة بطريقة فعالة من حيث التكلفة. السمات الرئيسية هي:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • يشمل النظام آلاف المنشآت في الصناعة وإنتاج الطاقة التي تمثل ما يقرب من نصف انبعاثات ثاني أكسيد الكربون في الاتحاد الأوروبي.
              </li>
              <li className={classes.listItem}>
                • تُخصص للشركات كمية معينة من <strong>حصص الانبعاثات</strong> تحدد كمية ثاني أكسيد الكربون التي يُسمح لها بإطلاقها خلال عام.
              </li>
              <li className={classes.listItem}>
                • يمكن للشركات التي تطلق أقل من حصتها أن <strong>تبيع</strong> حصصها الفائضة.
              </li>
              <li className={classes.listItem}>
                • يجب على الشركات التي تطلق أكثر من حصتها أن <strong>تشتري</strong> حصصًا إضافية أو تقلل من انبعاثاتها.
              </li>
              <li className={classes.listItem}>
                • تنخفض الكمية الإجمالية لحصص الانبعاثات كل عام، مما يجبر تدريجياً على تحقيق كفاءات وتقليل الانبعاثات. تُلغى الحصص غير المستخدمة.
              </li>
              <li className={classes.listItem}>
                • يتم تقديم نظام جديد، <strong>ETS 2</strong>، للنقل البري والمباني والصناعات الصغيرة لتغطية انبعاثات إضافية.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال ١١ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>١١. ماذا يعني تعاون شنغن؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تعاون شنغن هو اتفاقية بين معظم دول الاتحاد الأوروبي (وبعض الدول خارجها) تعني أن <strong>ضوابط الحدود الداخلية</strong> بين الدول <strong>ملغاة</strong>. هذا يعني عمليًا منطقة حدودية واحدة كبيرة حيث يمكن للناس السفر بحرية دون فحص جوازات السفر. في الوقت نفسه، عززت الدول التعاون المشترك في ضوابط <strong>الحدود الخارجية</strong> للتعويض عن إلغاء الحدود الداخلية. في حالات استثنائية، مثل تدفقات اللاجئين الكبيرة أو التهديدات الإرهابية، يمكن لدولة عضو إعادة فرض ضوابط حدودية داخلية مؤقتة.
            </p>
          </div>
        </div>

        {/* سؤال ١٢ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>١٢. ماذا تعني اتفاقية دبلن؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              اتفاقية دبلن هي لائحة أوروبية تحدد <strong>الدولة العضو المسؤولة عن فحص طلب اللجوء</strong>. المبدأ الأساسي هو أن أول دولة أوروبية يصل إليها طالب اللجوء هي المسؤولة عن معالجة الطلب. الهدف هو منع تنقل طالبي اللجوء بين الدول ("التسوق للحصول على اللجوء") وضمان فحص كل طلب من قبل دولة. النقد الرئيسي للاتفاقية هو أنها تثقل كاهل دول جنوب أوروبا (مثل إيطاليا واليونان ومالطا)، حيث يصل العديد من اللاجئين أولاً عبر البحر المتوسط.
            </p>
          </div>
        </div>

        {/* سؤال ١٣ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>١٣. أعط أمثلة على كيفية تأثير الاتحاد الأوروبي على حياتنا اليومية.</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              يؤثر الاتحاد الأوروبي على حياتنا اليومية بطرق عديدة، منها:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>السفر:</strong> إمكانية السفر بحرية بدون جواز سفر داخل منطقة شنغن. قواعد مشتركة لحقوق ركاب الطيران (مثل التعويض عن التأخير).
              </li>
              <li className={classes.listItem}>
                • <strong>الغذاء والاستهلاك:</strong> قواعد سلامة الغذاء ووضع العلامات (مثل علامة المنشأ على اللحوم). قواعد مشتركة للإلكترونيات والألعاب. مقارنة الأسعار وإمكانية التسوق عبر الإنترنت من دول الاتحاد الأوروبي الأخرى.
              </li>
              <li className={classes.listItem}>
                • <strong>الدراسة والعمل:</strong> إمكانية الدراسة أو العمل في دولة أخرى من دول الاتحاد الأوروبي دون الحاجة إلى تصريح عمل. الاعتراف بالشهادات والمؤهلات المهنية.
              </li>
              <li className={classes.listItem}>
                • <strong>البيئة:</strong> قواعد الاتحاد الأوروبي لمعايير انبعاثات السيارات، وإعادة التدوير، وحظر البلاستيك أحادي الاستخدام.
              </li>
              <li className={classes.listItem}>
                • <strong>الهاتف:</strong> إلغاء رسوم التجوال داخل الاتحاد الأوروبي، مما يسمح باستخدام الهاتف المحمول في دول الاتحاد الأوروبي الأخرى بنفس تكلفة الدولة الأصلية.
              </li>
            </ul>
          </div>
        </div>

        {/* سؤال ١٤ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ١٤. ما هي معايير التقارب الخمسة للانضمام إلى منطقة اليورو؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              للانضمام إلى منطقة اليورو، يجب على الدولة تلبية خمسة معايير تقارب اقتصادية (تُعرف أيضًا بمعايير ماستريخت):
            </p>
            <ol className={classes.list}>
              <li className={classes.listItem}>
                • <strong>استقرار الأسعار:</strong> يجب ألا يتجاوز التضخم ١.٥ نقطة مئوية فوق متوسط الدول الثلاث في الاتحاد الأوروبي ذات التضخم الأدنى.
              </li>
              <li className={classes.listItem}>
                • <strong>أسعار الفائدة طويلة الأجل:</strong> يجب ألا يتجاوز سعر الفائدة طويل الأجل (على السندات الحكومية) ٢ نقطة مئوية فوق متوسط الدول الثلاث ذات أسعار الفائدة الأدنى.
              </li>
              <li className={classes.listItem}>
                • <strong>استقرار أسعار الصرف:</strong> يجب أن يكون سعر صرف العملة الوطنية مستقرًا مقابل اليورو لمدة عامين على الأقل دون تخفيض.
              </li>
              <li className={classes.listItem}>
                • <strong>عجز الميزانية:</strong> يجب ألا يتجاوز عجز الميزانية السنوي ٣٪ من الناتج المحلي الإجمالي.
              </li>
              <li className={classes.listItem}>
                • <strong>الدين العام:</strong> يجب ألا يتجاوز إجمالي الدين العام ٦٠٪ من الناتج المحلي الإجمالي.
              </li>
            </ol>
          </div>
        </div>

        {/* سؤال ١٥ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>١٥. ماذا يعني ميثاق الاستقرار والنمو؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              ميثاق الاستقرار والنمو هو مجموعة من القواعد التي وُضعت لضمان مالية عامة سليمة داخل الاتحاد الاقتصادي والنقدي. يضع سقفًا لعجز الميزانية والدين العام للدول الأعضاء:
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>عجز الميزانية:</strong> حد أقصى ٣٪ من الناتج المحلي الإجمالي.
              </li>
              <li className={classes.listItem}>
                • <strong>الدين العام:</strong> حد أقصى ٦٠٪ من الناتج المحلي الإجمالي.
              </li>
            </ul>
            <p className={classes.paragraph}>
              الهدف هو منع الدول من العيش فوق إمكانياتها وبالتالي خلق مشاكل للعملة الموحدة (اليورو). ومع ذلك، واجه الميثاق انتقادات شديدة لأن العديد من الدول، بما في ذلك دول كبيرة مثل فرنسا وألمانيا، خالفت القواعد دون عقوبات جادة.
            </p>
          </div>
        </div>

        {/* سؤال ١٦ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ١٦. اشرح المصطلحين (أ) مجلس البنك المركزي الأوروبي (ب) مجموعة اليورو؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>(أ) مجلس البنك المركزي الأوروبي:</strong> هو أعلى هيئة لاتخاذ القرارات في <strong>البنك المركزي الأوروبي (ECB)</strong>. يتكون من أعضاء اللجنة التنفيذية للبنك المركزي الأوروبي ومحافظي البنوك المركزية الوطنية للدول التي تستخدم اليورو. المهمة الرئيسية لمجلس البنك المركزي الأوروبي هي تحديد <strong>السياسة النقدية</strong> لمنطقة اليورو، والتي تعني بشكل أساسي تحديد <strong>أسعار الفائدة</strong> للحفاظ على استقرار الأسعار لليورو.
            </p>
            <p className={classes.paragraph}>
              <strong>(ب) مجموعة اليورو:</strong> هذا <strong>اجتماع غير رسمي</strong> يجمع وزراء المالية من دول اليورو لتنسيق السياسة الاقتصادية. تُناقش هنا القضايا المتعلقة باقتصاد منطقة اليورو، والسياسة المالية، وتطوير الاتحاد الاقتصادي والنقدي. مجموعة اليورو ليست مؤسسة رسمية للاتحاد الأوروبي ولكن لها أهمية كبيرة في تنسيق السياسات بين دول اليورو.
            </p>
          </div>
        </div>

        {/* سؤال ١٧ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>١٧. ما هي متطلبات انضمام دولة إلى الاتحاد الأوروبي؟</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              للانضمام إلى الاتحاد الأوروبي، يجب على الدولة تلبية ما يسمى بـ <strong>معايير كوبنهاغن</strong> لعام ١٩٩٣، والتي تتكون من ثلاثة متطلبات رئيسية:
            </p>
            <ol className={classes.list}>
              <li className={classes.listItem}>
                • <strong>المتطلبات السياسية:</strong> يجب أن يكون للدولة مؤسسات مستقرة تضمن الديمقراطية، وسيادة القانون، وحقوق الإنسان، واحترام وحماية الأقليات.
              </li>
              <li className={classes.listItem}>
                • <strong>المتطلبات الإدارية:</strong> يجب أن يكون للدولة إدارة عامة فعالة قادرة على تنفيذ وتطبيق تشريعات الاتحاد الأوروبي.
              </li>
              <li className={classes.listItem}>
                • <strong>المتطلبات الاقتصادية:</strong> يجب أن يكون للدولة اقتصاد سوقي فعال قادر على تحمل المنافسة داخل السوق الداخلية للاتحاد الأوروبي.
              </li>
            </ol>
            <p className={classes.paragraph}>
              بالإضافة إلى ذلك، يجب أن تكون الدولة مستعدة لتبني ما يسمى بـ <em>مجموعة قوانين الاتحاد الأوروبي</em>. تضيف معاهدة لشبونة أن الدولة يجب أن تحترم قيم الاتحاد. علاوة على ذلك، يجب على المجلس الأوروبي أن يقرر بالإجماع بدء المفاوضات والموافقة النهائية على العضوية، وهو ما يجب أن يفعله البرلمان الأوروبي أيضًا.
            </p>
          </div>
        </div>

        {/* سؤال ١٨ */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            ١٨. ما هي أحكام المادة ٥٠ من معاهدة لشبونة؟
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              تنظم المادة ٥٠ من معاهدة لشبونة عملية <strong>الانسحاب الطوعي</strong> لدولة عضو من الاتحاد الأوروبي. الأحكام الرئيسية هي:
            </p>
            <ol className={classes.list}>
              <li className={classes.listItem}>
                • يجب على الدولة العضو التي ترغب في مغادرة الاتحاد الأوروبي أن <strong>تخطر</strong> <strong>المجلس الأوروبي</strong> بقرارها.
              </li>
              <li className={classes.listItem}>
                • بعد ذلك، سيتفاوض الاتحاد الأوروبي ويبرم <strong>اتفاقية انسحاب</strong> مع الدولة. يجب أن تحدد الاتفاقية شروط الانسحاب وإطار العلاقة المستقبلية للدولة مع الاتحاد الأوروبي.
              </li>
              <li className={classes.listItem}>
                • تجري المفاوضات وفقًا للمبادئ التوجيهية التي يحددها المجلس الأوروبي (الذي يتخذ القرارات بالإجماع).
              </li>
              <li className={classes.listItem}>
                • يحدد <strong>المجلس الأوروبي</strong> موقف الاتحاد الأوروبي التفاوضي، بينما تجري المفاوضات بواسطة <strong>المفوضية</strong>.
              </li>
              <li className={classes.listItem}>
                • يجب أن توافق <strong>البرلمان الأوروبي</strong> بأغلبية بسيطة و<strong>مجلس الوزراء</strong> بأغلبية مؤهلة على اتفاقية الانسحاب.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===== 7. أسئلة التحليل ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٧. أسئلة التحليل</h2>

        {/* A1 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            أ١. استخرج مزايا وعيوب عضوية السويد في الاتحاد الأوروبي. أيهما ترجح؟ كيف تؤثر عضوية السويد في الاتحاد الأوروبي عليك شخصيًا؟
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>المزايا</th>
                    <th className={classes.th}>العيوب</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>الوصول إلى السوق الداخلية:</strong> يمكن للشركات السويدية تصدير السلع والخدمات بحرية إلى ٢٧ دولة بدون رسوم جمركية، مما يزيد النمو والوظائف.
                    </td>
                    <td className={classes.td}>
                      <strong>التأثير القطاعي:</strong> قد تتأثر بعض القطاعات، مثل الزراعة والغابات، سلبًا بالمنافسة من دول الاتحاد الأوروبي الأخرى أو بسياسة الزراعة المشتركة.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>حرية التنقل:</strong> يمكن للمواطنين السويديين الإقامة والدراسة والعمل والسفر بحرية داخل الاتحاد الأوروبي دون متاعب التأشيرات أو تصاريح العمل.
                    </td>
                    <td className={classes.td}>
                      <strong>فقدان السيادة:</strong> يجب على السويد اتباع قوانين وأنظمة الاتحاد الأوروبي التي تُقر في بروكسل، حتى في المجالات التي صوتت ضدها (قرارات فوق وطنية). فقدت جزءًا من حقها في تقرير المصير الوطني.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>إمكانية التأثير:</strong> كعضو، للسويد مقعد على الطاولة ويمكنها المشاركة في تشكيل القواعد والقوانين التي تؤثر على أوروبا بأكملها.
                    </td>
                    <td className={classes.td}>
                      <strong>التكلفة:</strong> السويد هي واحدة من أكبر الدول المساهمة الصافية في ميزانية الاتحاد الأوروبي، مما يعني أننا ندفع أكثر مما نتلقاه في الدعم المباشر (على الرغم من أننا نسترد الكثير عبر قنوات أخرى).
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>زيادة الأمن والاستقرار:</strong> يساهم التعاون داخل الاتحاد الأوروبي في السلام والديمقراطية وتطوير سيادة القانون، مما يعود بالفائدة على السويد.
                    </td>
                    <td className={classes.td}>
                      <strong>البيروقراطية:</strong> قد تبدو قواعد الاتحاد الأوروبي معقدة وبيروقراطية، خاصة للشركات الصغيرة التي لا تملك موارد للتعامل مع جميع اللوائح.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>صوت أقوى عالميًا:</strong> كجزء من الاتحاد الأوروبي، تمتلك السويد موقعًا تفاوضيًا أقوى بكثير في القضايا الدولية مثل التجارة والمناخ مما لو كانت دولة صغيرة منفردة.
                    </td>
                    <td className={classes.td}>
                      <strong>خطر الإغراق الاجتماعي:</strong> قد تؤدي حرية تنقل العمالة إلى منافسة العمال من دول الاتحاد الأوروبي الأخرى للعمال السويديين بشروط تقوض النموذج السويدي.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={classes.paragraph}>
              <strong>أيهما يرجح؟</strong> غالبًا ما تعتبر مزايا الوصول إلى السوق وإمكانية التأثير أثقل من العيوب. القدرة على التأثير في القواعد التي تؤثر علينا هي مكسب كبير، وكانت السوق الداخلية حاسمة للنمو الاقتصادي السويدي.
            </p>

            <p className={classes.paragraph}>
              <strong>التأثير الشخصي:</strong> أتأثر شخصيًا بعضوية السويد في الاتحاد الأوروبي. كطالب/موظف، لدي القدرة على السفر والعمل في الخارج دون متاعب. عند السفر داخل منطقة شنغن، لا أحتاج لفحص جواز السفر. أسعار الغذاء والإلكترونيات أقل بفضل التجارة الحرة، وأعلم أن هناك قواعد سلامة مشتركة للمنتجات التي أشتريها. حتى كمستهلك، لدي حقوق مثل الضمانات عند شراء سلع عبر الحدود الوطنية.
            </p>
          </div>
        </div>

        {/* A2 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            أ٢. التهديدات الإرهابية وإعادة فرض ضوابط حدودية وطنية.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>حجج لصالح إعادة فرض كل دولة أوروبية ضوابط حدودية وطنية:</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>زيادة السيطرة:</strong> يمكن مراقبة من يدخل البلاد بشكل أفضل، مما قد يقلل من خطر دخول الإرهابيين أو المجرمين.
              </li>
              <li className={classes.listItem}>
                • <strong>الأمن الوطني:</strong> في أوقات التهديد المتزايد، يمكن النظر إلى الضوابط الوطنية كوسيلة لتعزيز أمن السكان وإظهار أن الحكومة تأخذ الوضع على محمل الجد.
              </li>
              <li className={classes.listItem}>
                • <strong>السيطرة على الهجرة غير الشرعية:</strong> يمكن أن تقلل الضوابط الحدودية من التدفق غير القانوني للأشخاص وتجعل الإقامة غير القانونية أكثر صعوبة.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>حجج ضد إعادة فرض كل دولة أوروبية ضوابط حدودية وطنية:</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>تقويض شنغن:</strong> يتم تعطيل جوهر التعاون الأوروبي، وهو حرية التنقل. يصبح السفر والتجارة والعمل عبر الحدود أكثر صعوبة للمواطنين العاديين.
              </li>
              <li className={classes.listItem}>
                • <strong>العواقب الاقتصادية:</strong> يؤدي بطء عبور الحدود إلى تأخير البضائع وزيادة تكاليف النقل، مما يضر بالاقتصاد والسوق الداخلية.
              </li>
              <li className={classes.listItem}>
                • <strong>خسارة رمزية:</strong> إعادة فرض الحدود الداخلية تمثل نكسة كبيرة لفكرة أوروبا الموحدة وقد تزيد من القومية.
              </li>
              <li className={classes.listItem}>
                • <strong>إجمالاً:</strong> نادرًا ما يعتمد الإرهابيون على عبور الحدود بشكل قانوني. يمكنهم استخدام وثائق مزورة أو طرق أخرى. الخطر هو خلق مشاكل كبيرة لمواطني الاتحاد الأوروبي والاقتصاد، مع عدم إعاقة الإرهابيين بشكل كبير.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>الخلاصة:</strong> الضوابط الحدودية المؤقتة في حالات استثنائية (مثل التهديدات الإرهابية أو تدفقات اللاجئين الكبيرة) مسموح بها وقد تكون مبررة. لكن العودة الدائمة إلى الضوابط الوطنية ستكون كارثية لمشروع الاتحاد الأوروبي والسوق الداخلية، دون بالضرورة زيادة الأمن بشكل فعال.
            </p>
          </div>
        </div>

        {/* A3 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>أ٣. تحليل الصورة (صورة بداية الفصل).</h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <em>
                [ملاحظة: نظرًا لأنني لا أرى الصورة، أقدم تحليلاً عامًا بناءً على أن صورة البداية غالبًا ما تصور الدمار من الحرب العالمية الثانية، وهو أمر شائع في سياق الاتحاد الأوروبي]
              </em>
            </p>
            <ol className={classes.list}>
              <li className={classes.listItem}>
                • <strong>ماذا تصور الصورة؟</strong> من المحتمل أن تصور الصورة مدينة مدمرة أو منظرًا طبيعيًا من الحرب العالمية الثانية، ربما أنقاض مباني، أو جسرًا مدمرًا، أو عمودًا من اللاجئين. قد تظهر أشخاصًا يخرجون من الأنقاض.
              </li>
              <li className={classes.listItem}>
                • <strong>ما هو الغرض من نشر مثل هذه الصورة؟</strong> الهدف هو تقديم <strong>مقدمة تاريخية قوية وعاطفية</strong> للفصل. تهدف الصورة إلى تذكير القارئ بأهوال الحرب والدمار الذي يمكن أن تسببه.
              </li>
              <li className={classes.listItem}>
                • <strong>ما هو الشعور الذي تهدف الصورة إلى إثارةه؟</strong> تهدف الصورة إلى إثارة مشاعر <strong>الفقدان، الحزن، اليأس</strong> ولكن أيضًا <strong>التصميم والحاجة إلى التغيير</strong>. تؤكد على أهمية عدم تكرار أخطاء التاريخ.
              </li>
              <li className={classes.listItem}>
                • <strong>ماذا تقول الصورة عن تحديات قادة ألمانيا في ذلك الوقت؟</strong> واجه قادة ألمانيا تحديات هائلة بعد الحرب: إعادة بناء بلد مدمر بالكامل، جسديًا ونفسيًا، التعامل مع سكان مصابين بصدمات ونازحين، وإعادة دمج ألمانيا في مجتمع أوروبي سلمي. كان قرار الانضمام إلى خطة شومان للفحم والصلب خطوة تاريخية للتغلب على هذه التحديات وبناء مستقبل جديد وسلمي.
              </li>
            </ol>
          </div>
        </div>

        {/* A4 */}
        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            أ٤. مزايا وعيوب اعتماد اليورو كعملة في السويد.
          </h3>
          <div className={classes.answer}>
            <div className={classes.tableWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.th}>المزايا</th>
                    <th className={classes.th}>العيوب</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.td}>
                      <strong>انخفاض تكاليف المعاملات:</strong> لا توجد رسوم تحويل عملات أو مخاطر أسعار الصرف عند السفر والتجارة مع دول اليورو الأخرى.
                    </td>
                    <td className={classes.td}>
                      <strong>فقدان السيطرة على السياسة النقدية:</strong> لا تستطيع السويد تحديد أسعار الفائدة بشكل مستقل لتحفيز الاقتصاد في الأزمات أو كبح التضخم. تنتقل هذه السلطة إلى البنك المركزي الأوروبي.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>زيادة قابلية مقارنة الأسعار:</strong> يصبح من الأسهل للمستهلكين مقارنة الأسعار بين الدول، مما قد يؤدي إلى انخفاض الأسعار وزيادة المنافسة.
                    </td>
                    <td className={classes.td}>
                      <strong>سعر صرف مقيد:</strong> لا يمكن للدولة استخدام سعر الصرف (مثل تخفيض قيمة الكرونا) لجعل الصادرات السويدية أرخص في الخارج.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>استقرار أكبر:</strong> اليورو عملة كبيرة ومستقرة وأقل عرضة للمضاربة من الكرونا السويدية، مما قد يوفر استقرارًا اقتصاديًا أكبر.
                    </td>
                    <td className={classes.td}>
                      <strong>خطر "مقاس واحد لا يناسب الجميع":</strong> تحدد السياسة النقدية للبنك المركزي الأوروبي لمنطقة اليورو بأكملها. قد تكون "متشددة" جدًا لاقتصاد سويدي ضعيف أو "متراخية" جدًا لاقتصاد قوي، مما قد يخلق اختلالات.
                    </td>
                  </tr>
                  <tr>
                    <td className={classes.td}>
                      <strong>زيادة النفوذ:</strong> ستحصل السويد على مقعد في مجلس البنك المركزي الأوروبي وبالتالي تشارك في تشكيل السياسة النقدية لمنطقة اليورو.
                    </td>
                    <td className={classes.td}>
                      <strong>خسارة رمزية:</strong> الكرونا جزء من الهوية السويدية. قد يُنظر إلى اعتماد اليورو كخطوة أخرى نحو فقدان السيادة الوطنية.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={classes.paragraph}>
              <strong>أيهما يرجح؟</strong> بالنسبة للسويد، كانت الحجج ضد اليورو حتى الآن أثقل. منحت الكرونا السويدية مرونة لاتباع سياسة نقدية مستقلة، وهو ما كان مهمًا خلال الأزمات الاقتصادية. يُنظر إلى مخاطر فقدان هذه السيطرة واتباع سياسة نقدية مصممة لمنطقة اليورو بأكملها على أنها كبيرة. بالإضافة إلى ذلك، يُظهر تاريخ اليورو أزمات عميقة وتوترات بين الدول الأعضاء.
            </p>

            <p className={classes.paragraph}>
              <strong>التأثير الشخصي:</strong> بالنسبة لي شخصيًا، يعني التحول إلى اليورو راحة مثل عدم الحاجة لتغيير العملات عند السفر في أوروبا وسهولة مقارنة الأسعار عبر الإنترنت. بالمقابل، قد يجعل اليورو القوي رحلاتي إلى دول خارج منطقة اليورو أرخص. لكنه يعني أيضًا أن مدخراتي وقيمة راتبي ستتأثر بسياسة نقدية ليست مصممة خصيصًا للسويد. قد أحصل على سعر فائدة أسوأ على قرضي العقاري إذا رفع البنك المركزي الأوروبي أسعار الفائدة لمكافحة التضخم في ألمانيا، بينما تحتاج السويد في الحقيقة إلى سعر فائدة أقل.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 8. مناقشة ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٨. أسئلة المناقشة</h2>

        <div className={classes.question}>
          <h3 className={classes.questionTitle}>
            د١. اتخذ موقفًا من العبارات التالية.
          </h3>
          <div className={classes.answer}>
            <p className={classes.paragraph}>
              <strong>"جميع الدول الأعضاء في الاتحاد الأوروبي مدفوعة في المقام الأول بمصالحها الذاتية في التعاون الأوروبي..."</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>أوافق:</strong> من السذاجة الاعتقاد بخلاف ذلك. المهمة الأساسية لكل حكومة هي خدمة مصالح مواطنيها. لذلك، تكافح الدول للحصول على أكبر قدر ممكن من الاتحاد، اقتصاديًا وسياسيًا. مثال: الدول المساهمة الصافية تريد رسومًا أقل، بينما الدول المتلقية الصافية تريد دعمًا أكثر.
              </li>
              <li className={classes.listItem}>
                • <strong>لا أوافق:</strong> إذا كان الأمر يتعلق فقط بالأنانية، لما نجح التعاون. هناك شعور قوي بـ "التضامن الأوروبي" وإدراك أن الاتحاد الأوروبي هو وضع "مكسب للجميع". الاستثمار في المناطق الأفقر يفيد الاتحاد بأكمله على المدى الطويل من خلال زيادة الاستقرار والأسواق الجديدة. التعاون هو توازن بين المصلحة الذاتية والأهداف المشتركة.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"من المهم أن تُظهر الدول الأعضاء القديمة في الاتحاد الأوروبي تضامنًا اقتصاديًا مع الدول الجديدة..."</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>أوافق:</strong> هذا أمر حاسم لتقليص الفروق الاقتصادية الهائلة داخل الاتحاد. بدون التضامن، ستبقى الدول الجديدة فقيرة وغير مستقرة، مما يضر بالجميع في النهاية. الاستثمار في الطرق والسكك الحديدية والبيئة في أوروبا الشرقية يخلق نموًا وأسواقًا جديدة تفيد الاتحاد الأوروبي بأكمله. إنه استثمار في المستقبل.
              </li>
              <li className={classes.listItem}>
                • <strong>لا أوافق:</strong> التضامن مهم، لكن لا يجب أن يكون مفرطًا. هناك خطر من أن الدول القديمة، التي غالبًا ما تكون مساهمة صافية، ستتعب من دفع ثمن أخطاء أو فساد الدول الأخرى. يجب أن يكون الدعم مشروطًا بتنفيذ الدول الجديدة لإصلاحات وخلق اقتصادات سليمة.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"السياسيون والمتعلمون تعليمًا عاليًا وكبار رجال الأعمال هم المستفيدون الرئيسيون من عضوية الاتحاد الأوروبي."</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>أوافق:</strong> هناك بعض الحقيقة في هذا. يحصل السياسيون على مسرح سياسي أكبر. يستفيد المتعلمون تعليمًا عاليًا من دراسات إيراسموس وفرصة العمل في جميع أنحاء أوروبا. لدى الشركات الكبيرة الموارد للتعامل مع لوائح الاتحاد الأوروبي والاستفادة من السوق الكبيرة.
              </li>
              <li className={classes.listItem}>
                • <strong>لا أوافق:</strong> هذه صورة ضيقة للغاية. يفيد الاتحاد الأوروبي المواطنين العاديين بطرق عديدة: أسعار أقل للغذاء والإلكترونيات، حقوق المستهلك، إلغاء رسوم التجوال، حرية السفر، وقواعد بيئية مشتركة تحسن جودة الهواء والماء. حتى العمال محميون بالحد الأدنى من متطلبات بيئة العمل وساعات العمل.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"العملة الأوروبية الموحدة تجعل السفر داخل أوروبا أسهل للأشخاص الذين يسافرون كثيرًا."</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>أوافق:</strong> هذا واضح. عدم الحاجة لتغيير العملات عند السفر بين دول اليورو يوفر الوقت والمال (لا رسوم تحويل) والجهد. يسهل ذلك على المتقاعدين الذين يعيشون في دول مختلفة ورجال الأعمال.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"العملة الموحدة تجلب اتصالات جديدة بين الأوروبيين."</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>أوافق:</strong> العملة في حد ذاتها لا تجلب اتصالات مباشرة، لكنها رمز للتكامل وتسهله. عندما تصبح الأسعار قابلة للمقارنة ويصبح السفر أسهل، يزداد التفاعل الاقتصادي والاجتماعي، مما يؤدي في النهاية إلى اتصالات جديدة بين الناس والشركات والمنظمات في دول مختلفة.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"العملة الموحدة ستفرض على المدى الطويل سياسة مالية موحدة."</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>أوافق:</strong> هذا أحد أكبر تحديات الاتحاد الاقتصادي والنقدي. وجود سياسة نقدية موحدة (أسعار الفائدة) وسياسات مالية مختلفة (الميزانيات والضرائب) يخلق توترًا داخليًا. لكي يبقى الاتحاد الاقتصادي والنقدي على قيد الحياة على المدى الطويل، من المحتمل أن يتطلب تنسيقًا أوثق للضرائب والإنفاق العام، أي سياسة مالية موحدة عمليًا، لمنع اختلالات مثل تلك التي حدثت في اليونان. يرى العديد من الخبراء هذا تطورًا حتميًا.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"يجب أن يصبح الاتحاد الأوروبي في المستقبل اتحادًا فيدراليًا مثل الولايات المتحدة الأمريكية."</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>أوافق:</strong> سيمنح الاتحاد الفيدرالي الاتحاد الأوروبي القوة والوحدة اللازمة للتعامل مع التحديات العالمية مثل الصين والولايات المتحدة وأزمة المناخ.这意味着 سياسة خارجية ودفاعية ومالية مشتركة.
              </li>
              <li className={classes.listItem}>
                • <strong>لا أوافق:</strong> يتكون الاتحاد الأوروبي من دول ذات هويات وطنية وثقافات ولغات راسخة. "دولة عظمى" على الطراز الأمريكي ليست مرغوبة ولا واقعية. لا يريد غالبية الأوروبيين التخلي عن هويتهم الوطنية. يجب أن يظل الاتحاد الأوروبي اتحادًا للدول ذات السيادة التي تتعاون حيثما يكون ذلك ضروريًا، وليس اتحادًا فيدراليًا جديدًا.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"الحفاظ على السلام في أوروبا لا يزال المهمة الأكثر أهمية للتعاون الأوروبي."</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>أوافق:</strong> ذكرتنا الحرب في أوكرانيا بأن السلام ليس أمرًا مفروغًا منه. أنشئ الاتحاد الأوروبي لجعل الحرب "مستحيلة" بين الدول الأعضاء. ضمان قارة سلمية ومستقرة هو الأساس والمغزى الأكثر أهمية الذي لا يزال قائمًا.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"سيأتي يوم يتعارض فيه توسع الاتحاد الأوروبي مع تعميق التعاون."</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>أوافق:</strong> هذا توتر كلاسيكي. المزيد من الأعضاء يجعل اتخاذ القرارات بالإجماع أكثر صعوبة ويتطلب المزيد من الموارد من ميزانية الاتحاد الأوروبي لتقليص الفروق. في نفس الوقت، قد يجعل تنوع المصالح المتزايد تعميق التعاون في المجالات الحساسة مثل الدفاع والضرائب أكثر صعوبة. إنه توازن صعب.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"حان الوقت لإجراء استفتاء جديد حول اليورو."</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>أوافق:</strong> تغيرت الظروف منذ عام ٢٠٠٣. كان سعر صرف الكرونا السويدية ضعيفًا، وقد يكون اليورو الآن بديلاً أكثر استقرارًا. قد تكون أزمات الاتحاد الأوروبي والقواعد الجديدة قد غيرت المعطيات. السؤال مهم بما يكفي لاستفتاء جديد.
              </li>
              <li className={classes.listItem}>
                • <strong>لا أوافق:</strong> الاستفتاء سيخلق عدم يقين ويقسم البلاد. لا يوجد رأي عام قوي لصالح اليورو الآن، ومخاطر فقدان السيطرة على السياسة النقدية واضحة. من الأفضل الانتظار ورؤية كيف يتطور الاتحاد الاقتصادي والنقدي.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"بالنظر إلى أن ٢٧ دولة عضو في الاتحاد الأوروبي، فإنه يعمل بشكل جيد إلى حد ما."</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>أوافق:</strong> على الرغم من كل التحديات (الأزمات، تدفقات الهجرة، خروج بريطانيا، حرب أوكرانيا)، تعمل مؤسسات الاتحاد الأوروبي. تعمل السوق الداخلية، وعمليات اتخاذ القرار راسخة، والاتحاد الأوروبي فاعل عالمي. أن ٢٧ دولة ذات تاريخ وثقافة مختلفة يمكنها التعاون هو في حد ذاته نجاح هائل.
              </li>
            </ul>

            <p className={classes.paragraph}>
              <strong>"يحتاج الاتحاد الأوروبي إلى تنسيق سياساته الدفاعية بشكل أكبر."</strong>
            </p>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                • <strong>أوافق:</strong> أظهرت الحرب في أوكرانيا أن الاتحاد الأوروبي لا يمكنه الاعتماد على الولايات المتحدة لأمنه. دفاع أوروبي أقوى وأكثر تنسيقًا سيزيد من الاستقلالية الأوروبية، ويجعل الدفاع أكثر فعالية، ويرسل إشارة وحدة إلى العالم الخارجي.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 9. المصطلحات الأساسية ===== */}
      <section className={classes.section}>
        <h2 className={classes.heading}>٩. المصطلحات الأساسية</h2>

        <ul className={classes.list}>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>بريكست (Brexit):</span> اختصار لـ "الخروج البريطاني"، ويشير إلى انسحاب المملكة المتحدة من الاتحاد الأوروبي، والذي تم رسميًا في ٣١ يناير ٢٠٢٠.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>كوربير (Coreper):</span> اختصار لـ{" "}
            <em>Comité des représentants permanents</em> (لجنة الممثلين الدائمين). هي مجموعة من سفراء الدول الأعضاء لدى الاتحاد الأوروبي تقوم بإعداد وتنسيق العمل قبل اجتماعات مجلس الوزراء.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>التوجيهات (Directives):</span> أحد النوعين الرئيسيين من القوانين في الاتحاد الأوروبي (الآخر هو اللوائح). التوجيه <strong>ملزم</strong> للدول الأعضاء فيما يتعلق بالـ <strong>نتيجة</strong> التي يجب تحقيقها، لكنه يترك لكل دولة عضو تحديد <strong>الشكل والوسائل</strong> لتحقيق الهدف، أي كيفية دمجه في القانون الوطني.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>الأغلبية المزدوجة:</span> نظام تصويت في مجلس الوزراء حيث يتطلب القرار دعم أغلبية الدول الأعضاء (٥٥٪ على الأقل) التي تمثل في نفس الوقت أغلبية سكان الاتحاد الأوروبي (٦٥٪ على الأقل). يحل هذا محل نظام الترجيح السابق ويهدف إلى منح القرارات شرعية أكبر.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>اتفاقية دبلن:</span> لائحة أوروبية تحدد الدولة العضو المسؤولة عن فحص طلب اللجوء. القاعدة الرئيسية هي أن المسؤولية تقع على أول دولة أوروبية يصل إليها طالب اللجوء.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>مجلس البنك المركزي الأوروبي:</span> أعلى هيئة لاتخاذ القرارات في البنك المركزي الأوروبي. يتكون من اللجنة التنفيذية ومحافظي البنوك المركزية الوطنية لدول اليورو. يحدد السياسة النقدية في منطقة اليورو.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>الاتحاد الاقتصادي والنقدي (EMU):</span> هو التعاون حول عملة موحدة (اليورو) وسياسة اقتصادية منسقة داخل الاتحاد الأوروبي.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>محكمة العدل الأوروبية:</span> إحدى المؤسسات الرئيسية للاتحاد الأوروبي. مهمتها تفسير قوانين الاتحاد الأوروبي وضمان تطبيقها بشكل موحد في جميع الدول الأعضاء. تنظر في النزاعات بين الدول الأعضاء ومؤسسات الاتحاد الأوروبي والشركات/الأفراد.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>مجموعة اليورو:</span> اجتماع غير رسمي لوزراء المالية من دول اليورو. يناقشون وينسقون القضايا المتعلقة باقتصاد منطقة اليورو.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>المحكمة الأوروبية لحقوق الإنسان:</span>{" "}
            <strong>ملاحظة:</strong> هذا سوء فهم شائع! المحكمة الأوروبية لحقوق الإنسان ليست مؤسسة تابعة للاتحاد الأوروبي. إنها تابعة لمجلس أوروبا (منظمة مختلفة تمامًا) وتنظر في قضايا انتهاكات الاتفاقية الأوروبية لحقوق الإنسان.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>البرلمان الأوروبي:</span> المؤسسة الوحيدة المنتخبة مباشرة في الاتحاد الأوروبي، حيث ينتخب الأعضاء من قبل مواطني الاتحاد الأوروبي كل خمس سنوات. مهامه الرئيسية هي مشاركة السلطة التشريعية مع مجلس الوزراء، واعتماد ميزانية الاتحاد الأوروبي، وممارسة الرقابة الديمقراطية على المفوضية.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>المجلس الأوروبي:</span> قمة رؤساء الدول والحكومات في الاتحاد الأوروبي، برفقة رئيس المفوضية. يحدد التوجه السياسي والأولويات للاتحاد الأوروبي، لكنه لا يسن القوانين.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>Fit for 55:</span> حزمة تشريعية قدمتها المفوضية الأوروبية لتقليل صافي انبعاثات غازات الدفيئة في الاتحاد الأوروبي بنسبة ٥٥٪ على الأقل بحلول ٢٠٣٠ (مقارنة بمستويات ١٩٩٠)، وهي خطوة نحو أن تصبح محايدة مناخيًا بحلول ٢٠٥٠.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>السوق الداخلية:</span> جوهر التعاون الأوروبي. منطقة بدون حدود داخلية حيث يتم ضمان <strong>"الحريات الأربع"</strong> (حرية حركة السلع والأشخاص والخدمات ورؤوس الأموال).
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>المفوضية الأوروبية:</span> الهيئة التنفيذية للاتحاد الأوروبي، غالبًا ما تسمى "حكومة الاتحاد الأوروبي". مهامها الرئيسية هي اقتراح القوانين، ومراقبة الامتثال لقوانين الاتحاد الأوروبي، وإدارة ميزانية الاتحاد.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>معايير التقارب:</span> الشروط الاقتصادية الخمسة التي يجب على الدولة المستوفية لاعتماد اليورو. تتعلق باستقرار الأسعار، وأسعار الفائدة، واستقرار سعر الصرف، وعجز الميزانية، والدين العام.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>معاهدة لشبونة:</span> المعاهدة التي تم توقيعها عام ٢٠٠٧ ودخلت حيز التنفيذ عام ٢٠٠٩. هي آخر معاهدة رئيسية أصلحت مؤسسات الاتحاد الأوروبي وعمليات اتخاذ القرار. تتضمن <strong>المادة ٥٠</strong> بشأن الانسحاب من الاتحاد الأوروبي.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>مجموعة ضغط (لوبي):</span> منظمة، غالبًا ذات مصالح اقتصادية، تحاول التأثير على القرارات السياسية والتشريعية. تعمل كحلقة وصل بين رجال الأعمال ومنظمات المصالح وصناع القرار.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>معاهدة ماستريخت:</span> المعاهدة التي تم توقيعها عام ١٩٩٢ وأنشأت الاتحاد الأوروبي. وضعت الأساس للاتحاد الاقتصادي والنقدي واليورو والتعاون الموسع في السياسة الخارجية والداخلية.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>القرارات بين الحكومات:</span> قرارات تتخذها حكومات الدول الأعضاء (وليس مؤسسات الاتحاد الأوروبي) وتتطلب <strong>الإجماع</strong>. لكل دولة حق النقض. تنطبق على المجالات الحساسة مثل السياسة الخارجية والدفاعية والضريبية.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>مجلس الوزراء:</span> الهيئة الرئيسية لاتخاذ القرارات في الاتحاد الأوروبي، حيث يجتمع وزراء من الدول الأعضاء حسب الموضوع. يسن القوانين بالتنسيق مع البرلمان الأوروبي ويُنسق سياسات الدول الأعضاء.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>معاهدة روما:</span> المعاهدة التي تم توقيعها عام ١٩٥٧ وأنشأت الجماعة الاقتصادية الأوروبية (EEC) ويوراتوم. وضعت الأساس للاتحاد الجمركي والتعاون الاقتصادي.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>اتفاقية شنغن:</span> التعاون الذي يعني إلغاء ضوابط الحدود الداخلية بين الدول المشاركة، مما يخلق منطقة لحرية تنقل الأشخاص.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>خطة شومان:</span> الخطة التي قدمها وزير الخارجية الفرنسي روبرت شومان عام ١٩٥٠ لوضع إنتاج الفحم والصلب في فرنسا وألمانيا الغربية تحت سيطرة مشتركة. يعتبر هذا بداية التعاون الأوروبي.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>ميثاق الاستقرار والنمو:</span> مجموعة من القواعد التي تحد من عجز الميزانية والدين العام للدول الأعضاء (حد أقصى ٣٪ و ٦٠٪ من الناتج المحلي الإجمالي على التوالي) لضمان استقرار الاتحاد الاقتصادي والنقدي.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>حصص الانبعاثات:</span> سلعة قابلة للتداول ضمن نظام الاتحاد الأوروبي لتداول الانبعاثات. تمنح حصة الانبعاثات حاملها الإذن بإطلاق طن واحد من ثاني أكسيد الكربون أو ما يعادله من غازات دفيئة أخرى.
          </li>
          <li className={classes.listItem}>
            • <span className={classes.keyword}>القرارات فوق الوطنية:</span> قرارات تتخذها مؤسسات الاتحاد الأوروبي وتكون ملزمة لجميع الدول الأعضاء، حتى تلك التي صوتت ضدها. هذا ممكن في المجالات التي تنازلت فيها الدول الأعضاء عن سلطتها في اتخاذ القرار، وتتطلب القرارات أغلبية، وليس إجماعًا.
          </li>
        </ul>
      </section>
    </div>
  );
}