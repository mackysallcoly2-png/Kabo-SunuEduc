export interface LevelInfo {
  id: string;
  name: string;
  age: string;
  duration: string;
  description: string;
  exam?: string;
}

export const EDUCATION_LEVELS: LevelInfo[] = [
  {
    id: 'preschool',
    name: 'Préscolaire',
    age: '3 - 6 ans',
    duration: '3 ans',
    description: 'Petite, Moyenne et Grande Section. Focus sur l\'éveil, la socialisation et la préparation à l\'élémentaire.'
  },
  {
    id: 'elementary',
    name: 'Élémentaire',
    age: '6 - 12 ans',
    duration: '6 ans',
    description: 'CI, CP, CE1, CE2, CM1, CM2. Apprentissage des bases fondamentales via le Curriculum de l\'Éducation de Base (CEB).',
    exam: 'CFEE (Certificat de Fin d\'Études Élémentaires)'
  },
  {
    id: 'middle',
    name: 'Moyen',
    age: '12 - 16 ans',
    duration: '4 ans',
    description: '6ème à la 3ème. Approfondissement des connaissances disciplinaires et orientation.',
    exam: 'BFEM (Brevet de Fin d\'Études Moyennes)'
  },
  {
    id: 'secondary',
    name: 'Secondaire',
    age: '16 - 19 ans',
    duration: '3 ans',
    description: '2nde, 1ère, Terminale. Spécialisation poussée en séries L (Littéraire), S (Scientifique) ou G (Gestion).',
    exam: 'Baccalauréat'
  },
  {
    id: 'literacy',
    name: 'Alphabétisation',
    age: '15 ans +',
    duration: 'Variable',
    description: 'Éducation non-formelle pour les jeunes et adultes hors système scolaire classique.'
  }
];

export const ALL_CLASSES = [
  { id: 'ps', name: 'Petite Section', level: 'preschool' },
  { id: 'ms', name: 'Moyenne Section', level: 'preschool' },
  { id: 'gs', name: 'Grande Section', level: 'preschool' },
  { id: 'ci', name: 'CI (Cours Initial)', level: 'elementary' },
  { id: 'cp', name: 'CP (Cours Préparatoire)', level: 'elementary' },
  { id: 'ce1', name: 'CE1 (Cours Élémentaire 1)', level: 'elementary' },
  { id: 'ce2', name: 'CE2 (Cours Élémentaire 2)', level: 'elementary' },
  { id: 'cm1', name: 'CM1 (Cours Moyen 1)', level: 'elementary' },
  { id: 'cm2', name: 'CM2 (Cours Moyen 2)', level: 'elementary' },
  { id: '6eme', name: '6ème', level: 'middle' },
  { id: '5eme', name: '5ème', level: 'middle' },
  { id: '4eme', name: '4ème', level: 'middle' },
  { id: '3eme', name: '3ème', level: 'middle' },
  { id: '2nde', name: 'Seconde', level: 'secondary' },
  { id: '1ere', name: 'Première', level: 'secondary' },
  { id: 'term', name: 'Terminale', level: 'secondary' }
];

export interface ResourceItem {
  title: string;
  type: string;
  description: string;
  link?: string;
}

export interface ResourceCategory {
  category: string;
  items: ResourceItem[];
}

export const EDUCATIONAL_RESOURCES: ResourceCategory[] = [
  {
    category: 'Guides Pédagogiques Officiels',
    items: [
      { title: 'Guide Pédagogique Étape 1 (CI-CP)', type: 'PDF', description: 'APC, Langue et Communication, Mathématiques, ESVS, Éducation de Base.' },
      { title: 'Guide Pédagogique Étape 2 (CE1-CE2)', type: 'PDF', description: 'Développement des compétences de lecture, calcul et découverte du monde.' },
      { title: 'Guide Pédagogique Étape 3 (CM1-CM2)', type: 'PDF', description: 'Préparation au CFEE et à l\'entrée en 6ème.' },
      { title: 'Guide de l\'Enseignant - Éducation Religieuse', type: 'PDF', description: 'Spécifique au modèle franco-arabe et aux Daaras modernes.' },
      { title: 'Guide de l\'Enseignant - Langues Nationales', type: 'PDF', description: 'Appui au bilinguisme (Wolof, Pulaar, Serer, etc.).' }
    ]
  },
  {
    category: 'Manuels Scolaires Agréés',
    items: [
      { title: 'Collection Coquelicot (Français)', type: 'Livre', description: 'Manuels de lecture et d\'expression pour le cycle élémentaire.' },
      { title: 'Collection Arc-en-ciel (Maths)', type: 'Livre', description: 'Approche contextuelle des mathématiques au Sénégal.' },
      { title: 'Sidi et Rama (Lecture CI-CP)', type: 'Livre', description: 'Manuel historique et efficace pour l\'apprentissage de la lecture.' },
      { title: 'Calcul Rapide (Sénégal)', type: 'Livre', description: 'Exercices de calcul mental et de rapidité.' }
    ]
  },
  {
    category: 'Évaluations & Examens Nationaux',
    items: [
      { title: 'Annales CFEE (2010-2024)', type: 'Archive', description: 'Sujets et corrigés officiels pour la préparation à l\'examen.' },
      { title: 'Annales BFEM (2015-2024)', type: 'Archive', description: 'Sujets de mathématiques, français, anglais, etc.' },
      { title: 'Banque d\'items INEADE', type: 'Outil', description: 'Base de données d\'exercices calibrés par l\'INEADE.' },
      { title: 'Rapports de Performance PASEC', type: 'Document', description: 'Évaluation des acquis scolaires au Sénégal.' }
    ]
  },
  {
    category: 'Politiques & Vision (PSE/PAQUET)',
    items: [
      { title: 'PAQUET-EF 2013-2030', type: 'Document', description: 'Programme d\'Amélioration de la Qualité, de l\'Équité et de la Transparence.' },
      { title: 'Plan Sénégal Émergent (PSE)', type: 'Document', description: 'Vision stratégique du développement national.' },
      { title: 'Lettre de Politique Générale du Secteur', type: 'Officiel', description: 'Orientations stratégiques du Ministère de l\'Éducation.' }
    ]
  }
];

export interface Competency {
  stage: string;
  title: string;
  desc: string;
  content?: {
    savoirs: string[];
    savoirFaire: string[];
    savoirEtre: string[];
  };
  paliers?: string[];
}

export interface Domain {
  id: string;
  name: string;
  color: string;
  description: string;
  competencies: Competency[];
  type?: 'classique' | 'franco-arabe' | 'both';
}

export interface CEBStructure {
  stages: { id: string; name: string; description: string; }[];
  domains: Domain[];
}

export const CEB_STRUCTURE: CEBStructure = {
  stages: [
    { id: 'preschool', name: 'Préscolaire (PS, MS, GS)', description: 'Éveil, socialisation et motricité.' },
    { id: 'etape1', name: 'Étape 1 (CI - CP)', description: 'Acquisition des bases fondamentales.' },
    { id: 'etape2', name: 'Étape 2 (CE1 - CE2)', description: 'Consolidation et développement.' },
    { id: 'etape3', name: 'Étape 3 (CM1 - CM2)', description: 'Approfondissement et préparation au CFEE.' },
    { id: 'middle', name: 'Moyen (6ème - 3ème)', description: 'Approfondissement disciplinaire et BFEM.' },
    { id: 'secondary', name: 'Secondaire (2nde - Terminale)', description: 'Spécialisation et Baccalauréat.' }
  ],
  domains: [
    {
      id: 'lc',
      name: 'Langue et Communication',
      color: 'bg-blue-500',
      description: 'Maîtrise du français, des langues nationales et de la littérature.',
      type: 'both',
      competencies: [
        { 
          stage: 'preschool', 
          title: 'CB: Communiquer oralement', 
          desc: 'S\'exprimer de façon compréhensible dans des situations de communication variées.',
          content: {
            savoirs: ['Vocabulaire de la famille', 'Formules de politesse', 'Noms des objets de la classe'],
            savoirFaire: ['Saluer', 'Se présenter', 'Demander la permission'],
            savoirEtre: ['Écoute active', 'Respect de la parole d\'autrui']
          },
          paliers: ['Palier 1: Salutations et présentations simples', 'Palier 2: Demandes et réponses en contexte scolaire']
        },
        { 
          stage: 'etape1', 
          title: 'CB1: Communiquer oralement', 
          desc: 'S\'exprimer de façon compréhensible dans des situations de communication variées.',
          content: {
            savoirs: ['Vocabulaire de la famille', 'Formules de politesse', 'Noms des objets de la classe'],
            savoirFaire: ['Saluer', 'Se présenter', 'Demander la permission'],
            savoirEtre: ['Écoute active', 'Respect de la parole d\'autrui']
          },
          paliers: ['Palier 1: Salutations et présentations simples', 'Palier 2: Demandes et réponses en contexte scolaire']
        },
        { 
          stage: 'etape2', 
          title: 'CB1: Produire des textes narratifs', 
          desc: 'Raconter un événement ou une histoire simple de manière cohérente.',
          content: {
            savoirs: ['Structure du récit (début, milieu, fin)', 'Indicateurs de temps (hier, aujourd\'hui)', 'Verbes d\'action'],
            savoirFaire: ['Ordonner des phrases', 'Utiliser les temps du passé', 'Ponctuer un texte'],
            savoirEtre: ['Imagination', 'Clarté d\'expression']
          },
          paliers: ['Palier 1: Récit d\'un événement vécu', 'Palier 2: Invention d\'une courte histoire']
        },
        { 
          stage: 'etape3', 
          title: 'CB2: Lire et comprendre des textes', 
          desc: 'Lire et comprendre des textes informatifs, explicatifs et argumentatifs.',
          content: {
            savoirs: ['Structure du texte argumentatif', 'Connecteurs logiques', 'Types de discours'],
            savoirFaire: ['Dégager l\'idée générale', 'Identifier les arguments', 'Reformuler le message'],
            savoirEtre: ['Esprit critique', 'Curiosité intellectuelle']
          },
          paliers: ['Palier 1: Analyse de textes informatifs', 'Palier 2: Compréhension de textes argumentatifs simples']
        }
      ]
    },
    {
      id: 'math',
      name: 'Mathématiques',
      color: 'bg-emerald-500',
      description: 'Activités numériques, géométrie, mesure et résolution de problèmes.',
      type: 'both',
      competencies: [
        { 
          stage: 'etape1', 
          title: 'CB1: Nombres et Calcul', 
          desc: 'Maîtriser les nombres de 0 à 100 et les opérations de base.',
          content: {
            savoirs: ['Nombres de 0 à 100', 'Addition et soustraction simples', 'Signes <, >, ='],
            savoirFaire: ['Dénombrer une collection', 'Comparer des nombres', 'Calculer mentalement'],
            savoirEtre: ['Rigueur', 'Ordre']
          },
          paliers: ['Palier 1: Les nombres de 0 à 20', 'Palier 2: Addition sans retenue']
        },
        { 
          stage: 'etape2', 
          title: 'CB1: Géométrie', 
          desc: 'Identifier et tracer des figures géométriques planes.',
          content: {
            savoirs: ['Carré, rectangle, triangle', 'Angle droit', 'Côté, sommet'],
            savoirFaire: ['Utiliser la règle et l\'équerre', 'Tracer des parallèles', 'Reconnaître des formes'],
            savoirEtre: ['Soin', 'Précision']
          },
          paliers: ['Palier 1: Les polygones de base', 'Palier 2: Propriétés du carré et du rectangle']
        },
        { 
          stage: 'etape3', 
          title: 'CB2: Opérations', 
          desc: 'Résoudre des problèmes complexes mobilisant les quatre opérations.',
          content: {
            savoirs: ['Priorités opératoires', 'Propriétés des opérations', 'Techniques opératoires'],
            savoirFaire: ['Poser et effectuer des divisions complexes', 'Calculer avec des décimaux', 'Vérifier un résultat'],
            savoirEtre: ['Rigueur', 'Précision', 'Persévérance']
          },
          paliers: ['Palier 1: La division à deux chiffres', 'Palier 2: Situations-problèmes complexes (4 opérations)']
        }
      ]
    },
    {
      id: 'svt',
      name: 'SVT / Sciences',
      color: 'bg-orange-600',
      description: 'Sciences de la Vie et de la Terre, Biologie et Écologie.',
      type: 'both',
      competencies: [
        { 
          stage: 'etape1', 
          title: 'CB1: Hygiène et Santé', 
          desc: 'Pratiquer des règles d\'hygiène corporelle et alimentaire.',
          content: {
            savoirs: ['Lavage des mains', 'Brossage des dents', 'Aliments sains'],
            savoirFaire: ['Se laver correctement', 'Nettoyer son environnement', 'Choisir des aliments propres'],
            savoirEtre: ['Propreté', 'Responsabilité']
          },
          paliers: ['Palier 1: L\'hygiène corporelle', 'Palier 2: L\'hygiène de l\'eau et des aliments']
        }
      ]
    },
    {
      id: 'hg',
      name: 'Histoire - Géographie',
      color: 'bg-stone-500',
      description: 'Étude du passé, des sociétés et des espaces géographiques.',
      type: 'both',
      competencies: [
        { 
          stage: 'etape3', 
          title: 'CB1: Histoire et Géographie du Sénégal', 
          desc: 'Connaître l\'histoire du Sénégal et sa géographie physique.',
          content: {
            savoirs: ['Les empires du Soudan occidental', 'La colonisation au Sénégal', 'Relief et climat du Sénégal'],
            savoirFaire: ['Lire une carte', 'Situer des événements', 'Décrire un paysage'],
            savoirEtre: ['Patriotisme', 'Identité culturelle']
          },
          paliers: ['Palier 1: Le Sénégal précolonial', 'Palier 2: Géographie régionale']
        }
      ]
    },
    {
      id: 'arabe',
      name: 'Arabe',
      color: 'bg-teal-600',
      description: 'Apprentissage de la langue arabe et culture islamique.',
      type: 'both',
      competencies: [
        { 
          stage: 'etape1', 
          title: 'CB1: Communication Orale', 
          desc: 'Comprendre et produire des messages oraux simples en arabe.',
          content: {
            savoirs: ['Alphabet arabe', 'Chiffres 1-10', 'Salutations'],
            savoirFaire: ['Prononcer les lettres', 'Compter', 'Répondre aux salutations'],
            savoirEtre: ['Respect', 'Application']
          },
          paliers: ['Palier 1: Sons et lettres', 'Palier 2: Vocabulaire quotidien']
        }
      ]
    },
    {
      id: 'islam',
      name: 'Éducation Religieuse',
      color: 'bg-emerald-700',
      description: 'Enseignement religieux islamique (Spécifique Franco-Arabe).',
      type: 'franco-arabe',
      competencies: [
        { 
          stage: 'etape1', 
          title: 'CB1: Pratiques Cultuelles', 
          desc: 'Apprendre les bases de la prière et des ablutions.',
          content: {
            savoirs: ['Les 5 piliers', 'Petites sourates', 'Ablutions'],
            savoirFaire: ['Faire ses ablutions', 'Réciter la Fatiha', 'Positions de prière'],
            savoirEtre: ['Piété', 'Discipline']
          },
          paliers: ['Palier 1: Mémorisation sourates', 'Palier 2: Pratique de la prière']
        }
      ]
    }
  ]
};

// Detailed Curriculum Database
export const CURRICULUM_DATABASE = {
  elementary: {
    ci: {
      lc: {
        oa: 'Communiquer oralement dans des situations familières',
        os: [
          'Saluer et prendre congé',
          'Se présenter et présenter quelqu\'un',
          'Identifier les objets de la classe',
          'Exprimer un besoin ou un sentiment'
        ]
      },
      math: {
        oa: 'Maîtriser les nombres de 0 à 20',
        os: [
          'Dénombrer des collections d\'objets',
          'Lire et écrire les chiffres de 0 à 9',
          'Comparer des quantités (plus que, moins que)',
          'Effectuer des additions simples sans retenue'
        ]
      }
    },
    cp: {
      lc: {
        oa: 'Lire et comprendre des mots et des phrases simples',
        os: [
          'Distinguer les sons et les lettres',
          'Lire des syllabes et des mots usuels',
          'Produire une phrase correcte à l\'oral',
          'Recopier un court texte sans erreur'
        ]
      },
      math: {
        oa: 'Maîtriser les nombres de 0 à 100',
        os: [
          'Lire et écrire les nombres jusqu\'à 100',
          'Maîtriser l\'addition avec retenue',
          'Identifier les formes géométriques de base',
          'Utiliser la règle pour tracer un trait'
        ]
      }
    },
    ce1: {
      lc: {
        oa: 'Produire des textes narratifs simples',
        os: [
          'Raconter un événement vécu',
          'Utiliser les temps du passé (passé composé)',
          'Accorder le sujet et le verbe',
          'Utiliser la ponctuation de base'
        ]
      },
      math: {
        oa: 'Maîtriser les nombres jusqu\'à 1000',
        os: [
          'Effectuer des soustractions avec retenue',
          'Apprendre les tables de multiplication (2, 5, 10)',
          'Mesurer des longueurs en cm et m',
          'Résoudre des problèmes à une étape'
        ]
      }
    },
    ce2: {
      lc: {
        oa: 'Lire et comprendre des textes informatifs',
        os: [
          'Identifier l\'idée principale d\'un texte',
          'Utiliser les connecteurs logiques (et, mais, car)',
          'Conjuguer les verbes du 1er groupe à l\'imparfait',
          'Rédiger une lettre simple'
        ]
      },
      math: {
        oa: 'Maîtriser les quatre opérations',
        os: [
          'Effectuer des multiplications à deux chiffres',
          'Introduire la notion de division (partage)',
          'Calculer le périmètre d\'un carré et d\'un rectangle',
          'Lire l\'heure et utiliser la monnaie (FCFA)'
        ]
      }
    },
    cm1: {
      lc: {
        oa: 'Produire des textes descriptifs et explicatifs',
        os: [
          'Décrire un lieu ou un personnage',
          'Utiliser des adjectifs qualificatifs variés',
          'Maîtriser le futur simple',
          'Faire un résumé de texte'
        ]
      },
      math: {
        oa: 'Maîtriser les grands nombres et les fractions',
        os: [
          'Lire et écrire les nombres jusqu\'au million',
          'Comprendre et manipuler les fractions simples',
          'Calculer des surfaces (m2)',
          'Résoudre des problèmes à plusieurs étapes'
        ]
      }
    },
    cm2: {
      lc: {
        oa: 'Produire des textes argumentatifs et préparer le CFEE',
        os: [
          'Défendre un point de vue avec des arguments',
          'Maîtriser la concordance des temps',
          'Analyser la structure d\'un texte complexe',
          'Réussir l\'épreuve de rédaction du CFEE'
        ]
      },
      math: {
        oa: 'Maîtriser la résolution de problèmes complexes',
        os: [
          'Calculer des pourcentages et des intérêts',
          'Maîtriser les volumes (m3, litres)',
          'Utiliser la règle de trois',
          'Préparer l\'épreuve de mathématiques du CFEE'
        ]
      }
    }
  }
};

export const HORAIRES_ELEMENTAIRE = [
  { domaine: 'Langue et Communication', ci_cp: '10h', ce1_ce2: '9h', cm1_cm2: '8h' },
  { domaine: 'Mathématiques', ci_cp: '6h', ce1_ce2: '6h', cm1_cm2: '6h' },
  { domaine: 'ESVS (Histoire/Géo/Sciences)', ci_cp: '4h', ce1_ce2: '5h', cm1_cm2: '6h' },
  { domaine: 'Éducation de Base (ECM/EPS/Arts)', ci_cp: '4h', ce1_ce2: '4h', cm1_cm2: '4h' }
];
