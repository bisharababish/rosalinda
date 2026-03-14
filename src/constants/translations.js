// ─────────────────────────────────────────────────────────────
//  translations.js
//  All AR + EN copy for every page.
//  To add a language: duplicate one object and change the keys.
// ─────────────────────────────────────────────────────────────

const translations = {
  ar: {
    dir: "rtl", lang: "ar", toggle: "EN",
    navName: "روساليندا عبدربه",
    links: [
      { id: "home",     label: "الرئيسية",      page: "home" },
      { id: "about",    label: "عني",            page: "home", anchor: "about" },
      { id: "sessions", label: "لقاءات عن بعد",  page: "sessions" },
      { id: "contact",  label: "تواصل معنا",     page: "contact" },
      { id: "pub",      label: "اصدارات",        page: null, soon: true },
    ],

    // ── Hero ──────────────────────────────────────────────────
    heroGreeting: "أهلاً وسهلاً،",
    heroName:     "روساليندا عبدربه",
    heroSub:      "مدرّبة تحوّلية · معلمة وعي · متحدثة عامة",
    heroTagline:  "رحلتكِ نحو نفسكِ الحقيقية\nتبدأ من هنا.",
    heroBtn:      "اكتشفي المزيد",
    heroScroll:   "تمرير للأسفل",

    // ── About ─────────────────────────────────────────────────
    aboutLbl:   "من أنا",
    aboutTitle: "روساليندا\nعبدربه",
    aboutIntro: "«الناس بحاجة لمن يسمعهم ويفهمهم بصدق، ليس فقط لمن يسمع كلماتهم»",
    aboutBody:
      "تعرّفي على روساليندا، المعروفة باسم «روزا»\n\n" +
      "معالجة نفسية تؤمن بأن لكل إنسان قصة تستحق أن تُفهم بعمق واحترام. تعمل على مساعدة الأفراد في فهم أنفسهم بشكل أعمق، واكتشاف قوتهم الداخلية.\n\n" +
      "تركّز في عملها على نشر الوعي النفسي، وتعزيز السلام الداخلي، ومرافقة الأشخاص في رحلتهم للتعامل مع تحدياتهم. كما تسعى إلى كسر الوصمة الاجتماعية المرتبطة بالعلاج النفسي، وتشجيع الأفراد على طلب الدعم النفسي كخطوة نحو القوة.",
    aboutTags: ["معالجة نفسية", "وعي", "استماع", "دعم نفسي", "تطوير ذات"],

    // ── Mission ───────────────────────────────────────────────
    missionLbl:   "رسالتي",
    missionTitle: "رحلة نحو حياة أكثر سلامًا",
    missionSub:   "",
    missionBody1: "نشر الوعي النفسي ومساعدة الأفراد على فهم أنفسهم واكتشاف قوتهم الداخلية للوصول إلى حياة أكثر توازنًا وسلامًا.",
    missionBody2: "مهمتي: تمكين الأفراد من تطوير وعيهم النفسي والعاطفي ليصبحوا أشخاصًا أكثر وعيًا وتأثيرًا في حياتهم ومجتمعهم، والمساهمة في بناء جيل واعٍ قادر على القيادة بإنسانية.",
    missionBtn:   "تواصلي معنا",

    // ── Testimonials ──────────────────────────────────────────
    testiLbl:   "آراء الناس",
    testiTitle: "ما يقوله الناس\nعن روساليندا",
    testimonials: [
      { text: "العمل مع روساليندا كان أفضل استثمار عملتُه في آخر عشر سنوات. كل جلسة تشعر وكأنها سحر حقيقي.", name: "سارة المنصور", role: "رائدة أعمال" },
      { text: "روساليندا تمتلك موهبة فطرية في نقل المعلومات بعمق عالٍ جداً، وساعدتني على الخروج من المعاناة إلى الراحة والتوازن.", name: "ليلى خوري", role: "كاتبة ومتحدثة" },
      { text: "الكوتشينج مع روساليندا مثل الطيران بين عوالم. صدقها في التعامل اختصر علي الكثير من الوقت.", name: "هيفاء بسيسو", role: "صانعة محتوى" },
      { text: "التدريب مع روساليندا غيّر حياتي على كل المستويات، وزادت ثقتي بنفسي بطريقة هائلة.", name: "كريم الأحمد", role: "ريادي أعمال" },
      { text: "روساليندا هي أكثر متحدثة صادقة رأيتُها. تحمل حكمةً وعلماً يلمس القلب قبل العقل.", name: "محمد تهامي", role: "كاتب الأكثر مبيعاً" },
    ],

    // ── Story ─────────────────────────────────────────────────
    storyLbl:   "قصتي",
    storyQuote: "«مرحبًا بكِ هنا… كل من يزور هذا المكان هو جزء من رحلتي لتطوير الوعي»",
    storyChapters: [
      { lbl: "الفصل الأول · البداية", h: "السؤال الذي غيّر كل شيء", b: "بدأت قصتي لما كان دايمًا يجيني تساؤل: «كيف يمكن الإنسان يفهم الإنسان اللي قدامه؟ شو يفكر؟ شو يحس؟» كنت أحاول أفهمهم وأعرف شو يمروا فيه.", b2: "ومع الوقت اكتشفت شيء مهم جدًا: الاستماع مش بس سماع الكلام، بل فهم الشخص فعليًا بما يشعر به وما يحتاجه." },
      { lbl: "الفصل الثاني · الاكتشاف", h: "مهارة الاستماع الحقيقي", b: "تعلمت مهارة الاستماع الحقيقي، يعني تكون حاضر مع الشخص بكل قلبك وعقلك، تلاحظ مشاعره واحتياجاته، وتشعر بما يمر فيه، بدل ما تسمعه بس وذهنك في مكان تاني.", b2: "ومن هنا فهمت إن الناس بحاجة لحد يسمعهم ويفهمهم بصدق، يكون معهم ويدعمهم في رحلتهم لفهم أنفسهم والتعامل مع حياتهم بطريقة أكثر وعيًا." },
      { lbl: "الفصل الثالث · الإرث", h: "كلام أبي الذي بقي معي", b: "أكثر شيء ترك أثر كبير علي كان كلام أبي قبل وفاته، كان دايمًا يقول لي: «الله خلق للإنسان أذنين عشان يسمع فيهم وفم واحد عشان يحكي فيه، ولو الإنسان يسمع أكثر ويفهم قبل ما يحكي أو يتسرع، كانت كثير من الأمور في الحياة اختلفت للأفضل.»", b2: "هذا الكلام علمني الصبر وفهم الآخرين قبل الحكم عليهم، وغير طريقة نظرتي للحياة." },
    ],

    // ── Beliefs ───────────────────────────────────────────────
    beliefsLbl:   "الوعي",
    beliefsTitle: "الوعي",
    beliefsIntro: "بصراحة، الوعي ما بيجي بيوم وليلة. الحوارات، التساؤلات، والمواقف الكثيرة اللي نمر فيها، كلها بتخلق فينا شكوك وتجارب مختلفة.",
    beliefs: [
      "ما في إنسان يصير واعي مرة وحدة — الوعي رحلة تراكمية لا تنتهي.",
      "الخبرات والتجارب وكثرة التعامل مع الناس هي اللي تعطيك وعيًا أكبر في حياتك.",
      "المجتمع واسع ومليان ناس كل يوم أفكارهم تتجول في رؤوسهم — كن جزءًا من هذا الاتصال.",
      "الاستماع الحقيقي هو أن تكون حاضرًا بكل قلبك وعقلك مع الشخص الذي أمامك.",
      "طلب الدعم النفسي ليس ضعفًا — بل هو خطوة شجاعة نحو القوة والوعي.",
    ],

    // ── Pledge ────────────────────────────────────────────────
    pledgeLbl:   "عهدي",
    pledgeTitle: "عهدي لكِ",
    pledgeBody:  "عهدي لكِ في رسالة «كوني أنتِ» أن أكون مخلصةً في عملي على قدر ما أستطيع، وصادقةً مع ذاتي على قدر ما أستطيع، ومعبِّرةً عن حقيقتي على قدر ما أستطيع. ساعيةً أن تكون هذه الحقيقة كالملهِم لكِ، لتعيشي حقيقتكِ الأصلية على الأرض.",
    pledgeSig:   "روساليندا",

    // ── Sessions page ─────────────────────────────────────────
    sesHeroTitle: "لقاءات عن بعد",
    sesHeroSub:   "تواصلي مع روساليندا من أي مكان في العالم",
    sesHowTitle:  "كيف تعمل الجلسات؟",
    sesSteps: [
      { n: "١", title: "احجزي موعدكِ",       desc: "اختاري الجلسة المناسبة واضغطي على زر الحجز لتحديد الوقت المناسب لكِ." },
      { n: "٢", title: "استلمي رابط الجلسة", desc: "ستصلكِ رسالة تأكيد مع رابط الجلسة وأي تعليمات تحضيرية مفيدة." },
      { n: "٣", title: "عيشي التجربة",       desc: "تواصلي مع روساليندا في جلسة دافئة وعميقة تفتح لكِ آفاقاً جديدة." },
      { n: "٤", title: "واصلي الرحلة",       desc: "بعد الجلسة تحصلين على ملخص وخطوات عملية لتطبيقها في حياتكِ." },
    ],
    sesTestiTitle: "تجارب من جلسات عن بعد",
    sesTestis: [
      { text: "لم أكن أتوقع أن جلسة أونلاين ستكون بهذا العمق. شعرتُ بحضور روساليندا الكامل رغم المسافة، وخرجتُ بتحوّل حقيقي.", name: "سارة - من السعودية", role: "جلسة فردية" },
      { text: "البرنامج الشهري مع روساليندا كان نقطة تحوّل في حياتي. أنصح به بشدة لكل من يبحث عن تغيير حقيقي.", name: "ليلى - من مصر", role: "برنامج الشهر" },
      { text: "الجلسة الأولى كانت مجانية وفتحت لي أبواباً ما تخيّلتُ وجودها. الآن أنا في رحلة التحوّل العميق ولا أستطيع التوقف!", name: "هند - من الإمارات", role: "برنامج التحوّل" },
    ],
    sesBookTitle: "احجزي جلستكِ الآن",
    sesBookSub:   "ابدئي رحلتكِ اليوم",
    sesBookBtn:   "تواصلي معنا للحجز",

    // ── Contact page ──────────────────────────────────────────
    conHeroTitle: "تواصل معنا",
    conHeroSub:   "يسعدنا الرد على جميع استفساراتكِ",
    conInfoTitle: "معلومات التواصل",
    conFormTitle: "أرسلي رسالتكِ",
    conFormSub:   "سنرد عليكِ في غضون ٢٤ ساعة",
    conEmailLbl:  "البريد الإلكتروني", conEmailVal: "rosalindaabedrabbo0@gmail.com",
    conPhoneLbl:  "الهاتف / واتساب",  conPhoneVal: "‎+970 592 282 913",
    conSocialLbl: "تابعينا على السوشيال ميديا",
    conAvailLbl:  "ساعات التواصل",    conAvailVal: "الأحد – الخميس · ٩ص – ٦م",
    fName:    "الاسم الكامل",        fNamePh:  "اسمكِ",
    fEmail:   "البريد الإلكتروني",   fEmailPh: "بريدكِ الإلكتروني",
    fSubj:    "الموضوع",             fSubjPh:  "كيف يمكنني مساعدتكِ؟",
    fMsg:     "رسالتكِ",            fMsgPh:   "اكتبي رسالتكِ هنا...",
    fBtn:     "إرسال الرسالة ←",
    fSuccess: "شكراً جزيلاً! سنتواصل معكِ قريباً 🌸",

    // ── PNN Interview ─────────────────────────────────────────
    interviewLbl:   "في الإعلام",
    interviewTitle: "لقاء مع شبكة PNN",
    interviewSub:   "الصدمات المتنقلة عبر الأجيال",
    interviewBody:  "استضافت شبكة PNN الأخصائية النفسية روساليندا عبدربه في لقاء تناول موضوع الصدمات المتنقلة عبر الأجيال، حيث تحدثت عن كيفية انتقال آثار التجارب الصادمة من جيل إلى آخر وتأثيرها على الصحة النفسية للأفراد والعائلات.",
    interviewNote:  "أوضحت عبدربه أن الصدمة النفسية لا تظهر دائمًا بشكل مباشر بعد الحدث، بل قد تتأخر أعراضها لتظهر بعد أسابيع أو حتى أشهر. كما أشارت إلى أن منظمة الصحة العالمية تُظهر ارتفاعًا في معدلات الضغوط النفسية في المجتمعات التي تتعرض لظروف صعبة، ما يبرز أهمية الوعي المجتمعي والدعم النفسي المبكر.",
    interviewWatch: "مشاهدة اللقاء على فيسبوك",

    // ── Footer ────────────────────────────────────────────────
    footerTagline: "معالجة نفسية · داعمة للوعي والتطوير الذاتي",
    footerRights: "جميع الحقوق محفوظة",
    footerCo:     "روساليندا عبدربه",
  },

  // ────────────────────────────────────────────────────────────
  en: {
    dir: "ltr", lang: "en", toggle: "ع",
    navName: "Rosalinda Abedrabbo",
    links: [
      { id: "home",     label: "Home",            page: "home" },
      { id: "about",    label: "About",           page: "home", anchor: "about" },
      { id: "sessions", label: "Remote Sessions", page: "sessions" },
      { id: "contact",  label: "Contact",         page: "contact" },
      { id: "pub",      label: "Publications",    page: null, soon: true },
    ],

    heroGreeting: "Welcome, I'm glad you're here.",
    heroName:     "Rosalinda Abedrabbo",
    heroSub:      "Transformational Coach · Consciousness Teacher · Speaker",
    heroTagline:  "Your journey back to your\ntruest self begins here.",
    heroBtn:      "Discover More",
    heroScroll:   "Scroll Down",

    aboutLbl:   "Who I Am",
    aboutTitle: "Rosalinda\nAbedrabbo",
    aboutIntro: '"People need someone who truly listens and understands them — not just someone who hears their words."',
    aboutBody:
      "Meet Rosalinda, known as \"Rosa\"\n\n" +
      "A psychologist who believes every person has a story that deserves to be understood with depth and respect. She works to help individuals understand themselves more deeply and discover their inner strength.\n\n" +
      "Her work focuses on spreading psychological awareness, fostering inner peace, and accompanying people on their journey through life's challenges. She is also dedicated to breaking the social stigma around therapy and encouraging people to seek support as a step toward strength.",
    aboutTags: ["Psychologist", "Awareness", "Listening", "Support", "Growth"],

    missionLbl:   "My Mission",
    missionTitle: "Awareness & Balance",
    missionSub:   "A journey toward a more peaceful life",
    missionBody1: "Spreading psychological awareness and helping individuals understand themselves, discover their inner strength, and reach a more balanced and peaceful life.",
    missionBody2: "My purpose: empowering individuals to develop their psychological and emotional awareness — becoming more conscious and impactful in their lives and communities, contributing to building a conscious generation capable of leading with humanity.",
    missionBtn:   "Contact Us",

    testiLbl:   "Testimonials",
    testiTitle: "What People Say\nabout Rosalinda",
    testimonials: [
      { text: "Working with Rosalinda was the single best investment I've made in the last ten years. Every session feels like real magic.", name: "Sarah Al-Mansour", role: "Entrepreneur" },
      { text: "Rosalinda has a rare gift for conveying information at a very deep level, and she helped me go from suffering to peace and balance.", name: "Lena Khoury", role: "Author & Speaker" },
      { text: "Coaching with Rosalinda is like flying between worlds. Her honesty in how she sees you saved me so much time.", name: "Haifa Bsiso", role: "Content Creator" },
      { text: "Training with Rosalinda changed my life on every level, and my self-confidence grew in a massive way.", name: "Kareem Al-Ahmad", role: "Entrepreneur" },
      { text: "Rosalinda is the most honest speaker I've encountered. She carries a wisdom and depth that touches the heart before the mind.", name: "Mohammed Tihami", role: "Bestselling Author" },
    ],

    storyLbl:   "My Story",
    storyQuote: '"Welcome here… everyone who visits this place is part of my journey to grow awareness."',
    storyChapters: [
      { lbl: "Chapter 1 · The Beginning",   h: "The Question That Changed Everything", b: "My story began with a question that always came to me: \"How can a person truly understand the person in front of them? What do they think? What do they feel?\" I was always trying to understand people and know what they were going through.", b2: "Over time I discovered something very important: listening is not just hearing words — it is truly understanding a person through what they feel and what they need." },
      { lbl: "Chapter 2 · The Discovery",   h: "The Art of True Listening",            b: "I learned the skill of genuine listening — being fully present with someone, with your whole heart and mind, noticing their feelings and needs, sensing what they are going through, rather than hearing them while your mind is somewhere else.", b2: "From that I understood that people need someone who truly listens and understands them, someone who is with them and supports them on their journey to know themselves." },
      { lbl: "Chapter 3 · The Legacy",      h: "My Father's Words",                   b: "The most impactful thing in my life were my father's words before he passed. He always told me: \"God gave every person two ears to listen with and one mouth to speak with — and if people listened more and understood before speaking or rushing, many things in life would have turned out for the better.\"", b2: "Those words taught me patience and understanding others before judging them — and they changed the way I see the world." },
    ],

    beliefsLbl:   "Awareness",
    beliefsTitle: "Awareness",
    beliefsIntro: "Honestly, awareness doesn't come overnight. Conversations, questions, and the many moments we go through all create doubts and different experiences within us.",
    beliefs: [
      "No one becomes aware all at once — awareness is a lifelong accumulation.",
      "Experiences and constant connection with people give you greater wisdom and awareness in life.",
      "Society is vast and full of people whose thoughts wander through their minds every day — be part of that connection.",
      "True listening means being fully present with someone — with your whole heart and mind.",
      "Seeking psychological support is not weakness — it is a courageous step toward strength and awareness.",
    ],

    pledgeLbl:   "My Pledge",
    pledgeTitle: "My Pledge to You",
    pledgeBody:  "My pledge to you in the Be You mission is to be as faithful to my work as I am capable of being, as honest with myself as I am capable of being, and as expressive of my deepest truth as I am capable of being. I seek for this truth to be the spark that lights your own — so you may live your most original, luminous life on this earth.",
    pledgeSig:   "Rosalinda",

    sesHeroTitle: "Remote Sessions",
    sesHeroSub:   "Connect with Rosalinda from anywhere in the world",
    sesHowTitle:  "How Do Sessions Work?",
    sesSteps: [
      { n: "1", title: "Book Your Slot",        desc: "Choose your session and click the booking button to schedule a time that works for you." },
      { n: "2", title: "Receive Your Link",     desc: "You'll get a confirmation message with the session link and any useful preparation notes." },
      { n: "3", title: "Live the Experience",   desc: "Connect with Rosalinda in a warm, deep session that opens new horizons for you." },
      { n: "4", title: "Continue the Journey",  desc: "After the session you receive a summary and practical steps to apply in your daily life." },
    ],
    sesTestiTitle: "Stories from Remote Sessions",
    sesTestis: [
      { text: "I didn't expect an online session to be this deep. I felt Rosalinda's complete presence despite the distance, and I left with a real transformation.", name: "Sarah – from Saudi Arabia", role: "Private Session" },
      { text: "The monthly program with Rosalinda was a turning point in my life. I highly recommend it to anyone seeking real change.", name: "Lena – from Egypt", role: "Monthly Program" },
      { text: "The first session was free and opened doors I never imagined existed. Now I'm on the deep transformation journey and I can't stop!", name: "Hind – from UAE", role: "Transformation Program" },
    ],
    sesBookTitle: "Book Your Session Now",
    sesBookSub:   "Begin your journey today",
    sesBookBtn:   "Contact Us to Book",

    conHeroTitle: "Contact Us",
    conHeroSub:   "We're happy to answer all your questions",
    conInfoTitle: "Contact Information",
    conFormTitle: "Send Your Message",
    conFormSub:   "We'll reply within 24 hours",
    conEmailLbl:  "Email",            conEmailVal: "rosalindaabedrabbo0@gmail.com",
    conPhoneLbl:  "Phone / WhatsApp", conPhoneVal: "+970 592282913",
    conSocialLbl: "Follow Us on Social Media",
    conAvailLbl:  "Available Hours",  conAvailVal: "Sunday – Thursday · 9am – 6pm",
    fName:    "Full Name",       fNamePh:  "Your name",
    fEmail:   "Email Address",  fEmailPh: "Your email",
    fSubj:    "Subject",        fSubjPh:  "How can I help you?",
    fMsg:     "Your Message",   fMsgPh:   "Write your message here...",
    fBtn:     "Send Message →",
    fSuccess: "Thank you! We'll be in touch very soon 🌸",

    // ── PNN Interview ─────────────────────────────────────────
    interviewLbl:   "In the Media",
    interviewTitle: "Interview with PNN Network",
    interviewSub:   "Intergenerational Trauma",
    interviewBody:  "PNN Network hosted psychologist Rosalinda Abedrabbo in an interview about intergenerational trauma — exploring how the effects of traumatic experiences are passed from one generation to the next and their impact on the mental health of individuals and families.",
    interviewNote:  "Rosalinda explained that psychological trauma does not always appear immediately after an event; symptoms may be delayed by weeks or even months. She also referenced WHO data showing elevated stress levels in communities facing difficult circumstances, highlighting the importance of community awareness and early psychological support.",
    interviewWatch: "Watch the Interview on Facebook",

    footerTagline: "Psychologist · Supporting Awareness & Personal Growth",
    footerRights: "All rights reserved",
    footerCo:     "Rosalinda Abedrabbo",
  },
};

export default translations;
