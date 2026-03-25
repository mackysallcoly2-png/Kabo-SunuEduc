import { EDUCATION_LEVELS, CEB_STRUCTURE, EDUCATIONAL_RESOURCES } from './constants';

export const TRANSLATIONS = {
  fr: {
    dashboard: 'Système',
    curriculum: 'Curriculum',
    resources: 'Ressources',
    assistant: 'Assistant IA',
    future: 'Futur & Vision',
    about: 'À propos',
    welcome: 'Bienvenue sur Kabo SunuÉduc',
    tagline: 'L\'excellence éducative au Sénégal',
    startFiche: 'Commencer une fiche',
    generateFiche: 'Générer la Fiche Pédagogique',
    lessonObject: 'Objet de la leçon',
    discipline: 'Discipline',
    level: 'Classe',
    clearChat: 'Vider la discussion',
    copy: 'Copier',
    print: 'Imprimer',
    send: 'Envoyer',
    exportWord: 'Exporter en Word',
    saveDrive: 'Enregistrer sur Google Drive',
    saveDriveSuccess: 'Enregistré sur Google Drive avec succès !',
    saveDriveError: 'Échec de l\'enregistrement sur Google Drive.',
    login: 'Connexion',
    logout: 'Déconnexion',
    myFiches: 'Mes Fiches',
    noFiches: 'Aucune fiche enregistrée.',
    loading: 'Chargement...',
    saveToFirestore: 'Enregistrer dans mes fiches',
    saveSuccess: 'Fiche enregistrée avec succès !',
    saveError: 'Erreur lors de l\'enregistrement.',
    search: 'Rechercher...',
    noResults: 'Aucun résultat trouvé.',
    confirmDeleteTitle: 'Supprimer la fiche',
    confirmDeleteDesc: 'Êtes-vous sûr de vouloir supprimer cette fiche ? Cette action est irréversible.',
    cancel: 'Annuler',
    delete: 'Supprimer',
    selectFiche: 'Sélectionnez une fiche pour l\'afficher',
    placeholderLesson: 'Ex: La multiplication des décimaux',
    placeholderChat: 'Posez votre question ici...',
    assistantIntro: "Bonjour ! Je suis votre Inspecteur-Formateur virtuel. Comment puis-je vous aider aujourd'hui ? Utilisez le formulaire ci-dessus pour générer une fiche de préparation complète ou posez-moi vos questions directement.",
    errorGemini: "Désolé, une erreur est survenue lors de la connexion à l'expertise centrale.",
    errorFiche: "Désolé, une erreur est survenue lors de la génération de la fiche.",
    stats: {
      students: 'Élèves (Élémentaire)',
      studentsValue: '~1,9M',
      schooling: 'Taux de Scolarisation',
      schoolingValue: '86,8%',
      schools: 'Écoles Élémentaires',
      schoolsValue: '9 977',
      exam: 'Réussite CFEE (Moy.)',
      examValue: '58%',
      francoArabe: 'Part Franco-Arabe',
      francoArabeValue: '18%'
    },
    generatorTitle: 'Générateur de Fiches Pédagogiques',
    generatorDesc: 'Automatisez la conception de vos fiches de préparation selon les standards du MEN. Choisissez votre classe, votre discipline et laissez l\'IA faire le reste.',
    expertise: 'Expertise MEN',
    system: 'Système CEB-APC',
    panorama: 'Panorama du Système',
    panoramaDesc: 'L\'éducation au Sénégal est structurée pour répondre aux défis de qualité, d\'équité et de transparence (PAQUET-EF), incluant les modèles classiques et franco-arabes.',
    paquetTitle: 'PAQUET-EF 2013-2025',
    paquetDesc: 'Le Programme d\'Amélioration de la Qualité, de l\'Équité et de la Transparence est le socle de la transformation actuelle.',
    quality: 'Qualité',
    equity: 'Équité',
    transparency: 'Transparence',
    qualitySub: 'Apprentissages',
    equitySub: 'Accès pour tous',
    transparencySub: 'Gouvernance',
    assistantExpert: 'Assistant Expert',
    assistantDesc: 'Posez vos questions sur le CEB, l\'APC ou les réformes en cours.',
    curriculumTitle: 'Curriculum CEB-APC',
    curriculumDesc: 'Le Curriculum de l\'Éducation de Base (CEB) repose sur l\'Approche Par Compétences (APC), décliné pour les modèles classiques et franco-arabes.',
    classicElementaire: 'Élémentaire Classique',
    francoArabeModel: 'Franco-Arabe',
    competenciesBase: 'Compétences de Base (CB)',
    exportFiche: 'Exporter la Fiche',
    modelFiche: 'Modèle de Fiche Pédagogique',
    ficheModel: {
      header: '[EN-TÊTE] École, Classe, Discipline, Durée',
      framework: '[CADRE] CB, Palier, OA, Objectif Spécifique (OS)',
      step1: '1. Mise en situation (5-10 min)',
      step2: '2. Présentation situation-problème',
      step3: '3. Analyse / Exploration (Travail de groupe)',
      step4: '4. Production / Confrontation',
      step5: '5. Structuration (Trace écrite)',
      step6: '6. Évaluation / Application',
      step7: '7. Réinvestissement'
    },
    resourcesTitle: 'Ressources Éducatives',
    resourcesDesc: 'Accédez aux documents officiels, guides pédagogiques et manuels agréés par le Ministère de l\'Éducation Nationale.',
    futureTitle: 'Horizon 2035',
    futureDesc: 'Vers une école de la réussite, ancrée dans ses valeurs et ouverte sur le monde numérique.',
    futureHeroTitle: 'L\'École du Futur',
    futureHeroDesc: 'Une éducation inclusive, résiliente et connectée, garantissant à chaque enfant sénégalais les compétences du 21ème siècle.',
    futureAlt: 'L\'éducation du futur au Sénégal',
    aboutTitle: 'À propos de Kabo SunuÉduc',
    aboutDesc: 'Kabo SunuÉduc est une plateforme expérimentale conçue pour centraliser la connaissance du système éducatif sénégalais. Elle s\'adresse aux enseignants, aux inspecteurs, aux parents et aux étudiants.',
    dataSources: 'Sources de données',
    sourcesList: [
      'Ministère de l\'Éducation Nationale (MEN) - Guides 2016',
      'Rapports PASEC 2014 & 2019',
      'Programme PAQUET-EF 2013-2025',
      'Plan Sénégal Émergent (PSE)'
    ],
    aboutFooter: 'Développé avec passion pour l\'excellence éducative au Sénégal.',
    levelsList: ['Petite Section', 'Moyenne Section', 'Grande Section', 'CI', 'CP', 'CE1', 'CE2', 'CM1', 'CM2', '6ème', '5ème', '4ème', '3ème', 'Seconde', 'Première', 'Terminale'],
    visions: {
      digital: { title: 'Digitalisation & Codage', desc: 'Intégration progressive de l\'informatique et du codage dès l\'élémentaire pour préparer les élèves à l\'économie numérique.' },
      bilingual: { title: 'Bilinguisme National', desc: 'Généralisation de l\'enseignement bilingue (Français + Langues Nationales) pour améliorer les taux de réussite initiaux.' },
      technical: { title: 'Enseignement Technique', desc: 'Rééquilibrage vers les séries S et les lycées techniques pour répondre aux besoins du Plan Sénégal Émergent.' },
      daaras: { title: 'Modernisation des Daaras', desc: 'Intégration des écoles coraniques dans le système formel via le modèle franco-arabe pour assurer un socle commun.' }
    },
    educationLevels: EDUCATION_LEVELS.map(l => ({
      ...l,
      name: l.id === 'preschool' ? 'Préscolaire' : 
            l.id === 'elementary' ? 'Élémentaire' : 
            l.id === 'middle' ? 'Moyen' : 
            l.id === 'secondary' ? 'Secondaire' : 'Alphabétisation',
      age: l.age,
      duration: l.duration,
      description: l.id === 'preschool' ? 'Petite, Moyenne et Grande Section. Focus sur l\'éveil et la socialisation.' : 
                   l.id === 'elementary' ? 'Du CI au CM2. Apprentissage des fondamentaux via le CEB.' :
                   l.id === 'middle' ? 'De la 6ème à la 3ème. Approfondissement des savoirs disciplinaires.' :
                   l.id === 'secondary' ? 'De la 2nde à la Terminale. Spécialisation en séries L, S ou G.' :
                   'Éducation non-formelle pour adultes et jeunes déscolarisés.'
    })),
    cebStructure: {
      ...CEB_STRUCTURE,
      stages: CEB_STRUCTURE.stages.map(s => ({
        ...s,
        name: s.id === 'preschool' ? 'Préscolaire (PS, MS, GS)' : 
              s.id === 'etape1' ? 'Étape 1 (CI - CP)' : 
              s.id === 'etape2' ? 'Étape 2 (CE1 - CE2)' : 
              s.id === 'etape3' ? 'Étape 3 (CM1 - CM2)' :
              s.id === 'middle' ? 'Moyen (6ème - 3ème)' :
              s.id === 'secondary' ? 'Secondaire (2nde - Terminale)' : 'Alphabétisation'
      })),
      domains: CEB_STRUCTURE.domains.map(d => {
        const frNames: Record<string, string> = {
          lc: 'Langue et Communication',
          math: 'Mathématiques',
          esvs: 'Éducation à la Science et à la Vie Sociale',
          svt: 'SVT / Sciences',
          pc: 'Physique-Chimie',
          hg: 'Histoire-Géographie',
          philo: 'Philosophie',
          eps: 'Éducation Physique, Sportive et Artistique',
          arabe: 'Langue Arabe',
          anglais: 'Anglais',
          islam: 'Éducation Religieuse',
          arts: 'Éducation Artistique',
          tic: 'Informatique / TIC',
          eco_fam: 'Économie Familiale'
        };
        return {
          ...d,
          name: frNames[d.id] || d.name
        };
      })
    },
    educationalResources: EDUCATIONAL_RESOURCES
  },
  ar: {
    dashboard: 'النظام',
    curriculum: 'المنهج',
    resources: 'الموارد',
    assistant: 'مساعد الذكاء الاصطناعي',
    future: 'المستقبل والرؤية',
    about: 'حول المنصة',
    welcome: 'مرحباً بكم في كابو سونو إيدوك',
    tagline: 'التميز التعليمي في السنغال',
    startFiche: 'ابدأ تحضير درس',
    generateFiche: 'توليد جذاذة تربوية',
    lessonObject: 'موضوع الدرس',
    discipline: 'المادة',
    level: 'القسم',
    clearChat: 'مسح المحادثة',
    copy: 'نسخ',
    print: 'طباعة',
    send: 'إرسال',
    exportWord: 'Exporter بصيغة Word',
    saveDrive: 'حفظ في Google Drive',
    saveDriveSuccess: 'تم الحفظ في Google Drive بنجاح!',
    saveDriveError: 'فشل الحفظ في Google Drive.',
    login: 'تسجيل الدخول',
    logout: 'تسجيل الخروج',
    myFiches: 'جذاذاتي',
    noFiches: 'لا توجد جذاذات محفوظة.',
    loading: 'جاري التحميل...',
    saveToFirestore: 'حفظ في جذاذاتي',
    saveSuccess: 'تم حفظ الجذاذة بنجاح!',
    saveError: 'خطأ أثناء الحفظ.',
    search: 'بحث...',
    noResults: 'لم يتم العثور على نتائج.',
    confirmDeleteTitle: 'حذف البطاقة',
    confirmDeleteDesc: 'هل أنت متأكد أنك تريد حذف هذه البطاقة؟ لا يمكن التراجع عن هذا الإجراء.',
    cancel: 'إلغاء',
    delete: 'حذف',
    selectFiche: 'اختر بطاقة لعرضها',
    placeholderLesson: 'مثال: ضرب الأعداد العشرية',
    placeholderChat: 'اطرح سؤالك هنا...',
    assistantIntro: "مرحباً! أنا مفتشك ومكونك الافتراضي. كيف يمكنني مساعدتك اليوم؟ استخدم النموذج أعلاه لتوليد جذاذة تحضير كاملة أو اطرح أسئلتك مباشرة.",
    errorGemini: "عذراً، حدث خطأ أثناء الاتصال بالخبرة المركزية.",
    errorFiche: "عذراً، حدث خطأ أثناء توليد الجذاذة.",
    stats: {
      students: 'تلاميذ (الابتدائي)',
      studentsValue: '~1,9 مليون',
      schooling: 'معدل التمدرس',
      schoolingValue: '86,8%',
      schools: 'المدارس الابتدائية',
      schoolsValue: '9 977',
      exam: 'النجاح في الشهادة (متوسط)',
      examValue: '58%',
      francoArabe: 'حصة التعليم الفرنسي العربي',
      francoArabeValue: '18%'
    },
    generatorTitle: 'مولد الجذاذات التربوية',
    generatorDesc: 'أتمتة تصميم جذاذات التحضير الخاصة بك وفقاً لمعايير وزارة التربية الوطنية. اختر قسمك ومادتك واترك الذكاء الاصطناعي يقوم بالباقي.',
    expertise: 'خبرة الوزارة',
    system: 'نظام CEB-APC',
    panorama: 'بانوراما النظام',
    panoramaDesc: 'تم هيكلة التعليم في السنغال للاستجابة لتحديات الجودة والإنصاف والشفافية (PAQUET-EF)، بما في ذلك النماذج الكلاسيكية والفرنسية العربية.',
    paquetTitle: 'برنامج PAQUET-EF 2013-2025',
    paquetDesc: 'برنامج تحسين الجودة والإنصاف والشفافية هو أساس التحول الحالي.',
    quality: 'الجودة',
    equity: 'الإنصاف',
    transparency: 'الشفافية',
    qualitySub: 'التعلمات',
    equitySub: 'الوصول للجميع',
    transparencySub: 'الحكامة',
    assistantExpert: 'المساعد الخبير',
    assistantDesc: 'اطرح أسئلتك حول المنهج أو المقاربة بالكفايات أو الإصلاحات الجارية.',
    curriculumTitle: 'منهج CEB-APC',
    curriculumDesc: 'يعتمد منهج التعليم الأساسي (CEB) على المقاربة بالكفايات (APC)، وهو متاح للنماذج الكلاسيكية والفرنسية العربية.',
    classicElementaire: 'الابتدائي الكلاسيكي',
    francoArabeModel: 'الفرنسي العربي',
    competenciesBase: 'الكفايات الأساسية (CB)',
    exportFiche: 'تصدير الجذاذة',
    modelFiche: 'نموذج الجذاذة التربوية',
    ficheModel: {
      header: '[الترويسة] المدرسة، القسم، المادة، المدة',
      framework: '[الإطار] الكفاية الأساسية، المرحلة، هدف التعلم، الهدف الخاص',
      step1: '1. وضعية الانطلاق (5-10 دقائق)',
      step2: '2. عرض الوضعية المشكلة',
      step3: '3. التحليل / الاستكشاف (عمل مجموعات)',
      step4: '4. الإنتاج / المواجهة',
      step5: '5. الهيكلة (الأثر الكتابي)',
      step6: '6. التقويم / التطبيق',
      step7: '7. الاستثمار'
    },
    resourcesTitle: 'الموارد التعليمية',
    resourcesDesc: 'الوصول إلى الوثائق الرسمية والأدلة البيداغوجية والكتب المدرسية المعتمدة من قبل وزارة التربية الوطنية.',
    futureTitle: 'أفق 2035',
    futureDesc: 'نحو مدرسة النجاح، المتجذرة في قيمها والمنفتحة على العالم الرقمي.',
    futureHeroTitle: 'مدرسة المستقبل',
    futureHeroDesc: 'تعليم شامل ومرن ومتصل، يضمن لكل طفل سنغالي مهارات القرن الحادي والعشرين.',
    futureAlt: 'تعليم المستقبل في السنغال',
    aboutTitle: 'حول كابو سونو إيدوك',
    aboutDesc: 'كابو سونو إيدوك هي منصة تجريبية مصممة لمركزية المعرفة بالنظام التعليمي السنغالي. وهي موجهة للمعلمين والمفتشين وأولياء الأمور والطلاب.',
    dataSources: 'مصادر البيانات',
    sourcesList: [
      'وزارة التربية الوطنية (MEN) - أدلة 2016',
      'تقارير PASEC 2014 و 2019',
      'برنامج PAQUET-EF 2013-2025',
      'خطة السنغال الناشئة (PSE)'
    ],
    aboutFooter: 'تم تطويره بشغف من أجل التميز التعليمي في السنغال.',
    levelsList: ['القسم الأصغر', 'القسم المتوسط', 'القسم الأكبر', 'التحضيري (CI)', 'الابتدائي الأول (CP)', 'الابتدائي الثاني (CE1)', 'الابتدائي الثالث (CE2)', 'الابتدائي الرابع (CM1)', 'الابتدائي الخامس (CM2)', 'السادس متوسط', 'الخامس متوسط', 'الرابع متوسط', 'الثالث متوسط', 'الثاني ثانوي', 'الأول ثانوي', 'النهائي (باكالوريا)'],
    visions: {
      digital: { title: 'الرقمنة والبرمجة', desc: 'الدمج التدريجي للمعلوماتية والبرمجة منذ المرحلة الابتدائية لإعداد التلاميذ للاقتصاد الرقمي.' },
      bilingual: { title: 'الثنائية اللغوية الوطنية', desc: 'تعميم التعليم ثنائي اللغة (الفرنسية + اللغات الوطنية) لتحسين معدلات النجاح الأولية.' },
      technical: { title: 'التعليم التقني', desc: 'إعادة التوازن نحو الشعب العلمية والثانويات التقنية لتلبية احتياجات خطة السنغال الناشئة.' },
      daaras: { title: 'تحديث الكتاتيب (الخلاوي)', desc: 'دمج المدارس القرآنية في النظام الرسمي عبر النموذج الفرنسي العربي لضمان قاعدة مشتركة.' }
    },
    educationLevels: EDUCATION_LEVELS.map(l => ({
      ...l,
      name: l.id === 'preschool' ? 'ما قبل المدرسي' : 
            l.id === 'elementary' ? 'الابتدائي' : 
            l.id === 'middle' ? 'المتوسط' : 
            l.id === 'secondary' ? 'الثانوي' : 'محو الأمية',
      age: l.age.replace('ans', 'سنوات'),
      duration: l.duration.replace('ans', 'سنوات'),
      description: l.id === 'preschool' ? 'الأقسام الصغرى والمتوسطة والكبرى. التركيز على الإيقاظ والتنشئة الاجتماعية.' : 
                   l.id === 'elementary' ? 'من التحضيري إلى السادس. تعلم الأساسيات عبر منهج CEB.' :
                   l.id === 'middle' ? 'من السنة الأولى إلى الرابعة متوسط. تعميق المعارف التخصصية.' :
                   l.id === 'secondary' ? 'من السنة الأولى ثانوي إلى البكالوريا. التخصص في الشعب الأدبية أو العلمية أو التقنية.' :
                   'التعليم غير النظامي للكبار والشباب خارج المدرسة.'
    })),
    cebStructure: {
      ...CEB_STRUCTURE,
      stages: CEB_STRUCTURE.stages.map(s => ({
        ...s,
        name: s.id === 'preschool' ? 'التمهيدي (PS, MS, GS)' : 
              s.id === 'etape1' ? 'المرحلة 1 (CI - CP)' : 
              s.id === 'etape2' ? 'المرحلة 2 (CE1 - CE2)' : 
              s.id === 'etape3' ? 'المرحلة 3 (CM1 - CM2)' :
              s.id === 'middle' ? 'المتوسط (6ème - 3ème)' :
              s.id === 'secondary' ? 'الثانوي (2nde - Terminale)' : 'محو الأمية'
      })),
      domains: CEB_STRUCTURE.domains.map(d => {
        const arNames: Record<string, string> = {
          lc: 'اللغة والتواصل',
          math: 'الرياضيات',
          esvs: 'التربية على العلم والحياة الاجتماعية',
          svt: 'علوم الحياة والأرض / العلوم',
          pc: 'الفيزياء والكيمياء',
          hg: 'التاريخ والجغرافيا',
          philo: 'الفلسفة',
          eps: 'التربية البدنية والرياضية والفنية',
          arabe: 'اللغة العربية',
          anglais: 'اللغة الإنجليزية',
          islam: 'التربية الدينية',
          arts: 'التربية الفنية',
          tic: 'المعلوماتية / تكنولوجيا المعلومات',
          eco_fam: 'الاقتصاد المنزلي'
        };
        const arDescs: Record<string, string> = {
          lc: 'إتقان اللغة الفرنسية واللغات الوطنية.',
          math: 'الأنشطة العددية، الهندسة، القياس وحل المشكلات.',
          esvs: 'اكتشاف العالم، البيئة، الصحة والمواطنة.',
          svt: 'دراسة الكائنات الحية والظواهر الطبيعية.',
          pc: 'دراسة المادة والطاقة والظواهر الفيزيائية.',
          hg: 'دراسة الماضي والمجتمعات والمجالات الجغرافية.',
          philo: 'تفكير نقدي في الوجود والمعرفة والعمل.',
          eps: 'تطوير القدرات البدنية وروح الفريق والتعبير الفني.',
          arabe: 'تعلم اللغة العربية والثقافة الإسلامية.',
          anglais: 'تعلم اللغة الإنجليزية.',
          islam: 'التربية الدينية الإسلامية (خاص بالفرنسي العربي).',
          arts: 'الفنون التشكيلية والموسيقى والتعبير الجسدي.',
          tic: 'إتقان الأدوات الرقمية والمعلومات.',
          eco_fam: 'التربية على الحياة الأسرية والخياطة والطبخ.'
        };
        return {
          ...d,
          name: arNames[d.id] || d.name,
          description: arDescs[d.id] || d.description
        };
      })
    },
    educationalResources: EDUCATIONAL_RESOURCES.map(r => ({
      ...r,
      category: r.category === 'Guides Pédagogiques' ? 'الأدلة البيداغوجية' : 
                r.category === 'Manuels Agréés' ? 'الكتب المدرسية المعتمدة' :
                r.category === 'Évaluations & Examens' ? 'التقييمات والامتحانات' :
                r.category === 'Politiques & Vision (PSE)' ? 'السياسات والرؤية (PSE)' :
                r.category === 'Langues & Culture' ? 'اللغات والثقافة' : 'خصوصيات التعليم الفرنسي العربي'
    }))
  },
  en: {
    dashboard: 'System',
    curriculum: 'Curriculum',
    resources: 'Resources',
    assistant: 'AI Assistant',
    future: 'Future & Vision',
    about: 'About',
    welcome: 'Welcome to Kabo SunuÉduc',
    tagline: 'Educational Excellence in Senegal',
    startFiche: 'Start a lesson plan',
    generateFiche: 'Generate Lesson Plan',
    lessonObject: 'Lesson Object',
    discipline: 'Subject',
    level: 'Class',
    clearChat: 'Clear Chat',
    copy: 'Copy',
    print: 'Print',
    send: 'Send',
    exportWord: 'Export as Word',
    saveDrive: 'Save to Google Drive',
    saveDriveSuccess: 'Saved to Google Drive successfully!',
    saveDriveError: 'Failed to save to Google Drive.',
    login: 'Login',
    logout: 'Logout',
    myFiches: 'My Sheets',
    noFiches: 'No saved sheets.',
    loading: 'Loading...',
    saveToFirestore: 'Save to my sheets',
    saveSuccess: 'Sheet saved successfully!',
    saveError: 'Error saving sheet.',
    search: 'Search...',
    noResults: 'No results found.',
    confirmDeleteTitle: 'Delete Fiche',
    confirmDeleteDesc: 'Are you sure you want to delete this fiche? This action cannot be undone.',
    cancel: 'Cancel',
    delete: 'Delete',
    selectFiche: 'Select a fiche to display it',
    placeholderLesson: 'Ex: Multiplication of decimals',
    placeholderChat: 'Ask your question here...',
    assistantIntro: "Hello! I am your virtual Inspector-Trainer. How can I help you today? Use the form above to generate a complete preparation sheet or ask me your questions directly.",
    errorGemini: "Sorry, an error occurred while connecting to the central expertise.",
    errorFiche: "Sorry, an error occurred while generating the sheet.",
    stats: {
      students: 'Students (Elementary)',
      studentsValue: '~1.9M',
      schooling: 'Schooling Rate',
      schoolingValue: '86.8%',
      schools: 'Elementary Schools',
      schoolsValue: '9,977',
      exam: 'CFEE Success (Avg.)',
      examValue: '58%',
      francoArabe: 'Franco-Arabic Share',
      francoArabeValue: '18%'
    },
    generatorTitle: 'Lesson Plan Generator',
    generatorDesc: 'Automate the design of your preparation sheets according to MEN standards. Choose your class, your subject and let the AI do the rest.',
    expertise: 'MEN Expertise',
    system: 'CEB-APC System',
    panorama: 'System Overview',
    panoramaDesc: 'Education in Senegal is structured to meet the challenges of quality, equity and transparency (PAQUET-EF), including classical and Franco-Arabic models.',
    paquetTitle: 'PAQUET-EF 2013-2025',
    paquetDesc: 'The Quality, Equity and Transparency Improvement Program is the foundation of the current transformation.',
    quality: 'Quality',
    equity: 'Equity',
    transparency: 'Transparency',
    qualitySub: 'Learning',
    equitySub: 'Access for all',
    transparencySub: 'Governance',
    assistantExpert: 'Expert Assistant',
    assistantDesc: 'Ask your questions about CEB, APC or ongoing reforms.',
    curriculumTitle: 'CEB-APC Curriculum',
    curriculumDesc: 'The Basic Education Curriculum (CEB) is based on the Competency-Based Approach (APC), available for classical and Franco-Arabic models.',
    classicElementaire: 'Classical Elementary',
    francoArabeModel: 'Franco-Arabic',
    competenciesBase: 'Core Competencies (CB)',
    exportFiche: 'Export Sheet',
    modelFiche: 'Lesson Plan Model',
    ficheModel: {
      header: '[HEADER] School, Class, Subject, Duration',
      framework: '[FRAMEWORK] CB, Stage, LO, Specific Objective (SO)',
      step1: '1. Warm-up / Context (5-10 min)',
      step2: '2. Presentation of problem-situation',
      step3: '3. Analysis / Exploration (Group work)',
      step4: '4. Production / Confrontation',
      step5: '5. Structuring (Written record)',
      step6: '6. Evaluation / Application',
      step7: '7. Reinvestment'
    },
    resourcesTitle: 'Educational Resources',
    resourcesDesc: 'Access official documents, pedagogical guides and textbooks approved by the Ministry of National Education.',
    futureTitle: 'Horizon 2035',
    futureDesc: 'Towards a school of success, rooted in its values and open to the digital world.',
    futureHeroTitle: 'The School of the Future',
    futureHeroDesc: 'An inclusive, resilient and connected education, guaranteeing every Senegalese child 21st century skills.',
    futureAlt: 'Future of education in Senegal',
    aboutTitle: 'About Kabo SunuÉduc',
    aboutDesc: 'Kabo SunuÉduc is an experimental platform designed to centralize knowledge of the Senegalese educational system. It is intended for teachers, inspectors, parents and students.',
    dataSources: 'Data Sources',
    sourcesList: [
      'Ministry of National Education (MEN) - 2016 Guides',
      'PASEC Reports 2014 & 2019',
      'PAQUET-EF Program 2013-2025',
      'Emerging Senegal Plan (PSE)'
    ],
    aboutFooter: 'Developed with passion for educational excellence in Senegal.',
    levelsList: ['Nursery 1', 'Nursery 2', 'Nursery 3', 'Preparatory', 'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', '6th Grade', '5th Grade', '4th Grade', '3rd Grade', '10th Grade', '11th Grade', '12th Grade'],
    visions: {
      digital: { title: 'Digitalization & Coding', desc: 'Progressive integration of IT and coding from elementary school to prepare students for the digital economy.' },
      bilingual: { title: 'National Bilingualism', desc: 'Generalization of bilingual education (French + National Languages) to improve initial success rates.' },
      technical: { title: 'Technical Education', desc: 'Rebalancing towards S series and technical high schools to meet the needs of the Emerging Senegal Plan.' },
      daaras: { title: 'Modernization of Daaras', desc: 'Integration of Koranic schools into the formal system via the Franco-Arabic model to ensure a common base.' }
    },
    educationLevels: EDUCATION_LEVELS.map(l => ({
      ...l,
      name: l.id === 'preschool' ? 'Preschool' : 
            l.id === 'elementary' ? 'Elementary' : 
            l.id === 'middle' ? 'Middle School' : 
            l.id === 'secondary' ? 'Secondary' : 'Literacy',
      age: l.age.replace('ans', 'years'),
      duration: l.duration.replace('ans', 'years'),
      description: l.id === 'preschool' ? 'Small, Medium and Large Section. Focus on awakening and socialization.' : 
                   l.id === 'elementary' ? 'CI, CP, CE1, CE2, CM1, CM2. Learning the basics via the CEB.' :
                   l.id === 'middle' ? '6th to 3rd grade. Deepening of disciplinary knowledge.' :
                   l.id === 'secondary' ? '2nd, 1st, Terminale. Specialization in L, S or G series.' :
                   'Non-formal education for adults and out-of-school youth.'
    })),
    cebStructure: {
      ...CEB_STRUCTURE,
      stages: CEB_STRUCTURE.stages.map(s => ({
        ...s,
        name: s.id === 'preschool' ? 'Preschool (PS, MS, GS)' :
              s.id === 'etape1' ? 'Stage 1 (CI - CP)' : 
              s.id === 'etape2' ? 'Stage 2 (CE1 - CE2)' : 
              s.id === 'etape3' ? 'Stage 3 (CM1 - CM2)' :
              s.id === 'middle' ? 'Middle School (6th - 3rd)' :
              s.id === 'secondary' ? 'Secondary (2nd - Terminale)' : 'Literacy'
      })),
      domains: CEB_STRUCTURE.domains.map(d => {
        const enNames: Record<string, string> = {
          lc: 'Language and Communication',
          math: 'Mathematics',
          esvs: 'Science and Social Life Education',
          svt: 'Life and Earth Sciences / Science',
          pc: 'Physics and Chemistry',
          hg: 'History and Geography',
          philo: 'Philosophy',
          eps: 'Physical, Sports and Artistic Education',
          arabe: 'Arabic Language',
          anglais: 'English Language',
          islam: 'Religious Education',
          arts: 'Artistic Education',
          tic: 'IT / ICT',
          eco_fam: 'Home Economics'
        };
        const enDescs: Record<string, string> = {
          lc: 'Mastery of French and national languages.',
          math: 'Numerical activities, geometry, measurement and problem solving.',
          esvs: 'Discovery of the world, environment, health and citizenship.',
          svt: 'Study of living organisms and natural phenomena.',
          pc: 'Study of matter, energy and physical phenomena.',
          hg: 'Study of the past, societies and geographical areas.',
          philo: 'Critical reflection on existence, knowledge and action.',
          eps: 'Development of physical capacities, team spirit and artistic expression.',
          arabe: 'Learning the Arabic language and Islamic culture.',
          anglais: 'Learning the English language.',
          islam: 'Islamic religious education (Franco-Arabic specific).',
          arts: 'Visual arts, music and body expression.',
          tic: 'Mastery of digital tools and information.',
          eco_fam: 'Education for family life, sewing, cooking and hygiene.'
        };
        return {
          ...d,
          name: enNames[d.id] || d.name,
          description: enDescs[d.id] || d.description
        };
      })
    },
    educationalResources: EDUCATIONAL_RESOURCES.map(r => ({
      ...r,
      category: r.category === 'Guides Pédagogiques' ? 'Pedagogical Guides' : 
                r.category === 'Manuels Agréés' ? 'Approved Textbooks' :
                r.category === 'Évaluations & Examens' ? 'Evaluations & Exams' :
                r.category === 'Politiques & Vision (PSE)' ? 'Policies & Vision (PSE)' :
                r.category === 'Langues & Culture' ? 'Languages & Culture' : 'Franco-Arabic Specifics'
    }))
  }
};
