

export type Platform = 'android' | 'ios' | 'windows' | 'macos' | 'linux';
export type Browser = 'chrome' | 'firefox' | 'safari' | 'edge' | 'brave' | 'tor' | 'other';
export type SearchEngine = 'google' | 'bing' | 'duckduckgo' | 'startpage' | 'kagi';
export type EmailProvider = 'gmail' | 'outlook' | 'yahoo' | 'proton' | 'tutanota' | 'icloud' | 'other';
export type Social = 'facebook' | 'instagram' | 'tiktok' | 'twitter' | 'linkedin' | 'reddit' | 'none';
export type Risk = 'wifi' | 'password-reuse' | 'location' | 'bluetooth' | 'public-charging' | 'none';
export type MessagingApp = 'whatsapp' | 'telegram' | 'signal' | 'messenger' | 'sms' | 'imessage' | 'none';
export type CloudService = 'google-drive' | 'icloud' | 'onedrive' | 'dropbox' | 'nextcloud' | 'none';
export type IotDevice = 'alexa' | 'google-home' | 'ring' | 'smart-tv' | 'none';
export type DefenseTool = 'password-manager' | 'vpn' | '2fa-app' | 'adblocker' | 'antivirus' | 'privacy-screen' | 'none';
export type UpdateHabit = 'automatic' | 'manual-soon' | 'manual-late' | 'never';
export type BackupHabit = 'cloud-auto' | 'external-drive' | 'both' | 'none';
export type TwoFactorMethod = 'app' | 'sms' | 'email' | 'hardware-key' | 'none';
export type PhishingHabit = 'check-url' | 'open-everything' | 'check-sender';

export type ThemeColor = 'teal' | 'blue' | 'violet' | 'rose' | 'amber';

// Supported Languages - Reduced to ES and EN
export type Language = 'es' | 'en';

export interface UserProfile {
  platforms: Platform[];
  updateHabit: UpdateHabit;
  browsers: Browser[];
  searchEngines: SearchEngine[]; // Multi-select
  emailProviders: EmailProvider[]; // Multi-select
  socials: Social[];
  messaging: MessagingApp[];
  cloud: CloudService[];
  iot: IotDevice[];
  risks: Risk[];
  passwordHabit: 'unique' | 'mostly-unique' | 'reused';
  twoFactor: TwoFactorMethod;
  phishing: PhishingHabit;
  backup: BackupHabit;
  defense: DefenseTool[];
  score: number;
  completed: boolean;
}

export interface Recommendation {
  id: string;
  category: string;
  title: string;
  description: string;
  impact: 'Crítico' | 'Alto' | 'Medio' | 'Bajo';
  actionUrl?: string;
}

// Legal & FAQ Types
export interface LegalSection {
  heading: string;
  content: string;
  list?: string[];
}

export interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export interface FAQItemData {
  question: string;
  answer: string;
  icon: string;
}

export interface FAQData {
  title: string;
  subtitle: string;
  items: FAQItemData[];
  contactTitle: string;
  contactBtn: string;
}

// --- NEW FEATURES TYPES ---

export interface HubApp {
    id: string;
    name: string;
    description: string;
    replaces: string;
    category: 'browser' | 'email' | 'messaging' | 'cloud' | 'os' | 'search' | 'vpn' | 'password-manager' | 'dns' | 'store' | 'productivity' | 'utilities';
    icon: string;
    url: string;
    badge?: 'Open Source' | 'Encrypted' | 'Decentralized';
    pricing: 'Free' | 'Freemium' | 'Paid';
}

export type TrainerScenarioType = 'email' | 'sms' | 'wifi' | 'password';

export interface PhishingScenario {
    id: number;
    type: TrainerScenarioType;
    isSafe: boolean; // true = Safe, false = Threat/Phishing
    explanation: string;
    // Email/SMS specific
    subject?: string;
    sender?: string;
    body?: string; 
    // WiFi specific
    networkName?: string;
    security?: 'WPA2' | 'Open' | 'WEP';
    // Password/Login specific
    url?: string;
}

// Translation Structure
export interface Translation {
  common: {
    appName: string;
    tagline: string;
    start: string;
    next: string;
    back: string;
    close: string;
    loading: string;
    error: string;
    viewGuide: string;
    seeMore: string;
    free: string;
    openSource: string;
    all: string;
  };
  nav: {
    home: string;
    tools: string;
    assessment: string;
    hub: string;
    faq: string;
    about: string;
    theme: string;
    legal: string;
    terms: string;
    privacy: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroDesc: string;
    ctaCheck: string;
    ctaGuides: string; 
    featuresTitle: string;
    featuresDesc: string;
    featDiagnosis: string;
    featDiagnosisDesc: string;
    featTools: string;
    featToolsDesc: string;
    trustTitle: string;
    trustNoTrackers: string;
    trustNoTrackersDesc: string;
    trustLocal: string;
    trustLocalDesc: string;
    trustOpen: string;
    trustOpenDesc: string;
    openSourceSectionTitle: string;
    openSourceSectionDesc: string;
    openSourceSectionBtn: string;
    mapLabel: string;
    
    // New Feature Cards
    featHub: string;
    featHubDesc: string;
    featLab: string;
    featLabDesc: string;
    featPhishing: string;
    featPhishingDesc: string;
  };
  about: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionP1: string;
    missionP2: string;
    pillars: {
      privacy: { title: string, desc: string };
      opensource: { title: string, desc: string };
      free: { title: string, desc: string };
      education: { title: string, desc: string };
    };
    ctaTitle: string;
    ctaDesc: string;
    ctaHome: string;
    ctaGit: string;
  };
  assessment: {
    title: string;
    subtitle: string;
    deviceStep: string;
    identityStep: string;
    securityStep: string;
    defenseStep: string;
    startBtn: string;
    phase1: string;
    phase2: string;
    phase3: string;
    phase4: string;
    phase5: string;
    viewReport: string;
    questions: {
      os: string;
      osDesc: string;
      updates: string;
      updatesDesc: string;
      backups: string;
      backupsDesc: string;
      browsers: string;
      browsersDesc: string;
      search: string;
      searchDesc: string;
      email: string;
      emailDesc: string;
      social: string;
      socialDesc: string;
      messaging: string;
      messagingDesc: string;
      cloud: string;
      cloudDesc: string;
      iot: string;
      iotDesc: string;
      passwords: string;
      passwordsDesc: string;
      twoFactor: string;
      twoFactorDesc: string;
      phishing: string;
      phishingDesc: string;
      risks: string;
      risksDesc: string;
      defense: string;
      defenseDesc: string;
    };
    options: {
      none: string;
      auto: string;
      manual: string;
      never: string;
      yes: string;
      no: string;
    }
  };
  results: {
    securityLevel: string;
    score: string;
    actionPlan: string;
    personalizedRecs: string;
    perfectTitle: string;
    perfectDesc: string;
    critical: string;
    suggestion: string;
    retest: string;
    areasToImprove: string;
    labels: {
        excellent: string;
        improvable: string;
        vulnerable: string;
    }
  };
  tools: {
    title: string;
    subtitle: string;
    tabKeys: string;
    tabPrivacy: string;
    tabUtils: string;
    genTitle: string;
    genDesc: string;
    auditTitle: string;
    auditDesc: string;
    leaksTitle: string;
    leaksDesc: string;
    fingerprintTitle: string;
    fingerprintDesc: string;
    cleanerTitle: string;
    cleanerDesc: string;
    msgTitle: string;
    msgDesc: string;
    tokenTitle: string;
    tokenDesc: string;
    permissionsTitle: string;
    permissionsDesc: string;
    
    // Actions
    copy: string;
    copied: string;
    regenerate: string;
    encrypt: string;
    decrypt: string;
    cleanUrl: string;
    check: string;
    analyze: string;
    
    // Feedback
    weak: string;
    medium: string;
    strong: string;
    excellent: string;
    compromised: string;
    
    // Scanner
    safetyScore: string;
    riskSafe: string;
    riskSuspicious: string;
    riskDangerous: string;
    analysis: string;

    // New Features
    vaultTitle: string;
    vaultDesc: string;
    vaultDrop: string;
    vaultPassPlaceholder: string;
    vaultEncryptBtn: string;
    vaultDecryptBtn: string;
    vaultDownload: string;
    vaultError: string;
    
    socialTitle: string;
    socialDesc: string;
    
    entropyBits: string;
    crackTime: string;
    instant: string;
    
    // Cleaner UI
    cleanerPlaceholder: string;
    cleanerResults: string;
    paramsRemoved: string;
    
    // Device Info UI
    deviceInfo: {
        browser: string;
        os: string;
        deviceType: string;
        screen: string;
        battery: string;
        connection: string;
        mobile: string;
        desktop: string;
    };
    
    // Permissions UI
    perms: {
        mic: string;
        location: string;
        notifications: string;
        camera: string;
    };
    
    // Secure Message UI
    msgPlaceholderEnc: string;
    msgPlaceholderDec: string;
    msgKeyPlaceholder: string;
    msgProcess: string;
    msgErrorKey: string;
    msgErrorInvalid: string;
  };
  // New Pages
  hub: {
      title: string;
      subtitle: string;
      searchPlaceholder: string;
      replacesLabel: string;
      noAppsFound: string;
      clearFilters: string;
      cats: {
          browser: string;
          email: string;
          messaging: string;
          cloud: string;
          search: string;
          os: string;
          vpn: string;
          pass: string;
          dns: string;
          store: string;
          productivity: string;
          utilities: string;
      };
      apps: HubApp[];
  };
  lab: {
      title: string;
      subtitle: string;
      dropzone: string;
      noMeta: string;
      metaFound: string;
      gpsFound: string;
      cleanBtn: string;
      downloadBtn: string;
      warning: string;
      analyzing: string;
      analyzeAnother: string;
      cleanGenerated: string;
      cleanDesc: string;
      original: string;
      meta: {
          camera: string;
          software: string;
          date: string;
      }
  };
  phishing: {
      title: string;
      subtitle: string;
      startGame: string;
      safe: string;
      unsafe: string;
      correct: string;
      wrong: string;
      completed: string;
      score: string;
      case: string;
      of: string;
      ui: {
          messages: string;
          networks: string;
          unsecured: string;
          encrypted: string;
          signin: string;
          username: string;
          password: string;
          login: string;
          today: string;
          viewDetails: string;
      };
      scenarios: PhishingScenario[];
  };
  // Legal
  legal: {
    terms: LegalContent;
    privacy: LegalContent;
  };
  // FAQ
  faq: FAQData;
  recs: {
    android: { title: string, desc: string };
    updates: { title: string };
    passwords: { title: string };
    generic: { title: string, desc: string };
  };
}