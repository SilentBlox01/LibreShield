

import { Translation, Language } from '../types';

const baseEN: Translation = {
  common: {
    appName: "LibreShield",
    tagline: "Reclaim your digital privacy",
    start: "Start",
    next: "Next",
    back: "Back",
    close: "Close",
    loading: "Loading...",
    error: "An error occurred",
    viewGuide: "View Guide",
    seeMore: "Visit Site",
    free: "Free",
    openSource: "Open Source",
    all: "All"
  },
  nav: {
    home: "Home",
    tools: "Tools",
    assessment: "Assessment",
    hub: "Privacy Hub",
    faq: "FAQ",
    about: "About",
    theme: "Theme",
    legal: "Legal",
    terms: "Terms",
    privacy: "Privacy"
  },
  about: {
    title: "About LibreShield",
    subtitle: "Democratizing digital privacy. A tool built by the community, for the community.",
    missionTitle: "Our Mission",
    missionP1: "The internet has become hostile to the average user. Between advertising tracking, data theft, and mass surveillance, privacy seems like a luxury reserved for technical experts.",
    missionP2: "LibreShield was born with a simple goal: to make cybersecurity accessible, understandable, and free for everyone, regardless of their technical level. We believe privacy is a fundamental human right, not a premium feature.",
    pillars: {
        privacy: { title: "Privacy First", desc: "We don't collect data. We have no user servers. All analysis happens locally on your device. We are transparent about what we do and what we don't." },
        opensource: { title: "Open Source", desc: "Our code is public. Anyone can audit, improve, or fork it. We don't trust 'security by obscurity', but rather community transparency." },
        free: { title: "Free Forever", desc: "No subscriptions, no paywalls, and no selling your data to third parties to fund us. This is an altruistic project maintained by volunteers." },
        education: { title: "Education vs Fear", desc: "We don't use fear to sell you products. We use education to empower you. We want you to understand how to protect yourself." }
    },
    ctaTitle: "Join the Cause",
    ctaDesc: "Share this tool with your friends and family. Help us build a safer internet, one user at a time.",
    ctaHome: "Go to Home",
    ctaGit: "View on GitHub"
  },
  home: {
    heroTitle: "Reclaim your",
    heroSubtitle: "Digital Freedom",
    heroDesc: "The internet has become a surveillance machine. LibreShield provides the knowledge and tools you need to protect your data, identity, and peace of mind. Free, open source, and local.",
    ctaCheck: "Check my Safety",
    ctaGuides: "Learn Privacy",
    featuresTitle: "Your Toolkit for Digital Sovereignty",
    featuresDesc: "We don't just tell you what's wrong. We give you the exact steps to fix it.",
    featDiagnosis: "Privacy Audit",
    featDiagnosisDesc: "A comprehensive 15-point analysis of your digital life. Find your weak spots before hackers do.",
    featTools: "Cyber Tools",
    featToolsDesc: "Generate uncrackable passwords, clean tracking links, and audit your browser fingerprint.",
    featHub: "Privacy Hub",
    featHubDesc: "A directory of safe, open-source alternatives to the apps you use every day.",
    featLab: "Image Lab",
    featLabDesc: "Remove hidden GPS metadata from your photos before sharing them online.",
    featPhishing: "Cyber Trainer",
    featPhishingDesc: "Train your eyes to spot scams, unsafe WiFi, and malicious login pages.",
    trustTitle: "Why Trust LibreShield?",
    trustNoTrackers: "No Trackers",
    trustNoTrackersDesc: "We practice what we preach. This site has zero analytics, cookies, or 3rd party scripts.",
    trustLocal: "Local Execution",
    trustLocalDesc: "Your data never leaves your device. All calculations happen in your browser.",
    trustOpen: "Open Source",
    trustOpenDesc: "Our code is public on GitHub. Anyone can audit it to verify our claims.",
    openSourceSectionTitle: "Built by the Community",
    openSourceSectionDesc: "Security through transparency, not obscurity. Join us on GitHub to contribute, audit, or fork the project.",
    openSourceSectionBtn: "View on GitHub",
    mapLabel: "Global Community (Simulation)"
  },
  assessment: {
    title: "Privacy Audit",
    subtitle: "Let's evaluate your digital posture.",
    deviceStep: "Devices",
    identityStep: "Identity",
    securityStep: "Security",
    defenseStep: "Defense",
    startBtn: "Start Analysis",
    phase1: "Phase 1: Foundation",
    phase2: "Phase 2: Identity",
    phase3: "Phase 3: Data",
    phase4: "Phase 4: Security",
    phase5: "Phase 5: Defense",
    viewReport: "View Report",
    questions: {
      os: "Operating Systems",
      osDesc: "What devices do you use daily?",
      updates: "Update Habits",
      updatesDesc: "When a system update is available...",
      backups: "Backup Strategy",
      backupsDesc: "If you lost your devices today...",
      browsers: "Browsers",
      browsersDesc: "Which window to the web do you use?",
      search: "Search Engines",
      searchDesc: "Who do you ask your questions to?",
      email: "Email Providers",
      emailDesc: "Where does your digital identity live?",
      social: "Social Media Footprint",
      socialDesc: "Where do you have active accounts?",
      messaging: "Messaging Apps",
      messagingDesc: "What do you use for private chats?",
      cloud: "Cloud Storage",
      cloudDesc: "Where do you store your files?",
      iot: "Smart Devices (IoT)",
      iotDesc: "Who is listening in your home?",
      passwords: "Password Habits",
      passwordsDesc: "Be honest, this is crucial.",
      twoFactor: "Two-Factor Auth (2FA)",
      twoFactorDesc: "When logging into a new device...",
      phishing: "Phishing Reaction",
      phishingDesc: "You get an email: 'Account Locked'...",
      risks: "Risks & Habits",
      risksDesc: "Which apply to you?",
      defense: "Defensive Tools",
      defenseDesc: "What protection software do you use?"
    },
    options: {
      none: "None",
      auto: "Automatic",
      manual: "Manual",
      never: "Never",
      yes: "Yes",
      no: "No"
    }
  },
  results: {
    securityLevel: "Security Level",
    score: "Score",
    actionPlan: "Action Plan",
    personalizedRecs: "Personalized Recommendations",
    perfectTitle: "Impecable!",
    perfectDesc: "We found no critical risks based on your answers. You are a privacy-conscious user. Keep it up!",
    critical: "Critical",
    suggestion: "Suggestion",
    retest: "Retake Assessment",
    areasToImprove: "Areas to Improve",
    labels: {
        excellent: "Excellent",
        improvable: "Improvable",
        vulnerable: "Vulnerable"
    }
  },
  tools: {
    title: "Cyber Tools",
    subtitle: "Utilities to secure your digital life.",
    tabKeys: "Keys & Passwords",
    tabPrivacy: "Identity & Privacy",
    tabUtils: "Utilities",
    genTitle: "Password Generator",
    genDesc: "Create high-entropy passwords locally.",
    auditTitle: "Password Auditor",
    auditDesc: "Analyze your password strength mathematically and check data breaches.",
    leaksTitle: "Data Breach Check",
    leaksDesc: "Check if your email or phone is compromised.",
    fingerprintTitle: "Browser Fingerprint",
    fingerprintDesc: "See what websites can learn about your device.",
    cleanerTitle: "Link Cleaner",
    cleanerDesc: "Remove tracking parameters from URLs.",
    msgTitle: "Secure Message",
    msgDesc: "Encrypt text with a shared key.",
    tokenTitle: "Token Generator",
    tokenDesc: "Generate random API keys or secrets.",
    permissionsTitle: "Browser Permissions",
    permissionsDesc: "Check what sites can access.",
    
    // Actions
    copy: "Copy",
    copied: "Copied!",
    regenerate: "Regenerate",
    encrypt: "Encrypt",
    decrypt: "Decrypt",
    cleanUrl: "Clean URL",
    check: "Check",
    analyze: "Analyze",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    excellent: "Excellent",
    compromised: "Compromised",
    safetyScore: "Safety Score",
    riskSafe: "Safe",
    riskSuspicious: "Suspicious",
    riskDangerous: "Dangerous",
    analysis: "Analysis",

    // New Features
    vaultTitle: "File Vault",
    vaultDesc: "Encrypt any file with a password using AES-GCM directly in your browser.",
    vaultDrop: "Drag a file here or click to select",
    vaultPassPlaceholder: "Encryption Password",
    vaultEncryptBtn: "Encrypt & Download",
    vaultDecryptBtn: "Decrypt & Download",
    vaultDownload: "Download File",
    vaultError: "Error: Incorrect password or damaged file.",
    
    socialTitle: "Privacy Shortcuts",
    socialDesc: "Direct links to hidden privacy settings.",

    entropyBits: "Entropy",
    crackTime: "Estimated Crack Time",
    instant: "Instantly",
    
    cleanerPlaceholder: "Paste your link here (e.g., https://site.com?utm_source=...)",
    cleanerResults: "Results will appear here",
    paramsRemoved: "tracking parameters removed",
    
    deviceInfo: {
        browser: "Browser",
        os: "System",
        deviceType: "Type",
        screen: "Screen",
        battery: "Battery",
        connection: "Connection",
        mobile: "Mobile",
        desktop: "Desktop"
    },
    
    perms: {
        mic: "Microphone",
        location: "Location",
        notifications: "Notifications",
        camera: "Camera"
    },
    
    msgPlaceholderEnc: "Message...",
    msgPlaceholderDec: "Code...",
    msgKeyPlaceholder: "Key (1234)",
    msgProcess: "Process",
    msgErrorKey: "Error: Missing message or key",
    msgErrorInvalid: "Error: Invalid code"
  },
  hub: {
      title: "Privacy Hub",
      subtitle: "Discover ethical, secure, and open-source alternatives to the software you use every day.",
      searchPlaceholder: "Search apps (e.g. Chrome, VPN...)",
      replacesLabel: "Replaces:",
      noAppsFound: "No apps found for this category.",
      clearFilters: "Clear filters",
      cats: {
          browser: "Browsers",
          email: "Email",
          messaging: "Messaging",
          cloud: "Cloud",
          search: "Search",
          os: "OS",
          vpn: "VPN",
          pass: "Passwords",
          dns: "DNS",
          store: "App Stores",
          productivity: "Productivity",
          utilities: "Utilities"
      },
      apps: [
          { id: 'firefox', name: 'Firefox', description: 'Powerful, open source, and owned by a non-profit.', replaces: 'Chrome', category: 'browser', icon: 'firefox', url: 'https://mozilla.org/firefox', badge: 'Open Source', pricing: 'Free' },
          { id: 'librewolf', name: 'LibreWolf', description: 'A fork of Firefox focused on privacy, security and freedom.', replaces: 'Chrome', category: 'browser', icon: 'shield', url: 'https://librewolf.net', badge: 'Open Source', pricing: 'Free' },
          { id: 'brave', name: 'Brave', description: 'Built-in ad blocker and tracking protection.', replaces: 'Chrome', category: 'browser', icon: 'shield', url: 'https://brave.com', badge: 'Open Source', pricing: 'Free' },
          { id: 'tor', name: 'Tor Browser', description: 'The gold standard for anonymity. Routes traffic through 3 nodes.', replaces: 'Any', category: 'browser', icon: 'ghost', url: 'https://torproject.org', badge: 'Open Source', pricing: 'Free' },
          { id: 'mullvad', name: 'Mullvad Browser', description: 'Privacy-focused browser developed in collaboration with Tor Project.', replaces: 'Chrome', category: 'browser', icon: 'lock', url: 'https://mullvad.net/browser', badge: 'Open Source', pricing: 'Free' },
          
          { id: 'proton', name: 'Proton Mail', description: 'End-to-end encrypted email based in Switzerland.', replaces: 'Gmail', category: 'email', icon: 'mail', url: 'https://proton.me/mail', badge: 'Encrypted', pricing: 'Freemium' },
          { id: 'tutanota', name: 'Tuta', description: 'Encrypted calendar, contacts and email.', replaces: 'Outlook', category: 'email', icon: 'mail', url: 'https://tuta.com', badge: 'Encrypted', pricing: 'Freemium' },
          { id: 'simplelogin', name: 'SimpleLogin', description: 'Open source email alias solution to protect your inbox.', replaces: 'Direct Email', category: 'email', icon: 'mail', url: 'https://simplelogin.io', badge: 'Open Source', pricing: 'Freemium' },
          
          { id: 'signal', name: 'Signal', description: 'No metadata, solid encryption. Used by journalists worldwide.', replaces: 'WhatsApp', category: 'messaging', icon: 'message-circle', url: 'https://signal.org', badge: 'Encrypted', pricing: 'Free' },
          { id: 'session', name: 'Session', description: 'Private messenger that minimizes metadata. No phone number needed.', replaces: 'WhatsApp', category: 'messaging', icon: 'shield', url: 'https://getsession.org', badge: 'Decentralized', pricing: 'Free' },
          { id: 'threema', name: 'Threema', description: 'Anonymous messaging. No phone number required.', replaces: 'WhatsApp', category: 'messaging', icon: 'lock', url: 'https://threema.ch', pricing: 'Paid' },
          { id: 'element', name: 'Element', description: 'Secure chat for teams. Built on Matrix.', replaces: 'Slack', category: 'messaging', icon: 'hash', url: 'https://element.io', badge: 'Decentralized', pricing: 'Freemium' },
          
          { id: 'duckduckgo', name: 'DuckDuckGo', description: 'A search engine that doesn\'t track your history.', replaces: 'Google', category: 'search', icon: 'search', url: 'https://duckduckgo.com', pricing: 'Free' },
          { id: 'startpage', name: 'Startpage', description: 'Google results without the tracking.', replaces: 'Google', category: 'search', icon: 'search', url: 'https://startpage.com', pricing: 'Free' },
          { id: 'searx', name: 'SearXNG', description: 'A free internet metasearch engine which aggregates results.', replaces: 'Google', category: 'search', icon: 'search', url: 'https://searx.space', badge: 'Open Source', pricing: 'Free' },
          
          { id: 'protondrive', name: 'Proton Drive', description: 'Secure storage for your files.', replaces: 'Google Drive', category: 'cloud', icon: 'cloud', url: 'https://proton.me/drive', badge: 'Encrypted', pricing: 'Freemium' },
          { id: 'nextcloud', name: 'Nextcloud', description: 'Self-hosted productivity platform.', replaces: 'Google Workspace', category: 'cloud', icon: 'server', url: 'https://nextcloud.com', badge: 'Open Source', pricing: 'Free' },
          
          { id: 'cryptpad', name: 'CryptPad', description: 'Collaborative office suite, end-to-end encrypted.', replaces: 'Google Docs', category: 'productivity', icon: 'file-text', url: 'https://cryptpad.fr', badge: 'Encrypted', pricing: 'Free' },
          { id: 'standardnotes', name: 'Standard Notes', description: 'A simple and private notes app.', replaces: 'Evernote', category: 'productivity', icon: 'file-text', url: 'https://standardnotes.com', badge: 'Encrypted', pricing: 'Freemium' },
          { id: 'joplin', name: 'Joplin', description: 'Open source note taking and to-do application.', replaces: 'Evernote', category: 'productivity', icon: 'file-text', url: 'https://joplinapp.org', badge: 'Open Source', pricing: 'Free' },
          
          { id: 'bitwarden', name: 'Bitwarden', description: 'Secure, open-source password manager for all devices.', replaces: 'LastPass', category: 'password-manager', icon: 'key', url: 'https://bitwarden.com', badge: 'Open Source', pricing: 'Freemium' },
          { id: 'keepassxc', name: 'KeePassXC', description: 'Offline password manager. You own the database.', replaces: '1Password', category: 'password-manager', icon: 'hard-drive', url: 'https://keepassxc.org', badge: 'Open Source', pricing: 'Free' },
          
          { id: 'mullvadvpn', name: 'Mullvad VPN', description: 'No email required. Proven track record. Fast.', replaces: 'Free VPNs', category: 'vpn', icon: 'shield', url: 'https://mullvad.net', pricing: 'Paid' },
          { id: 'protonvpn', name: 'Proton VPN', description: 'Secure VPN with a free tier.', replaces: 'Free VPNs', category: 'vpn', icon: 'shield', url: 'https://protonvpn.com', pricing: 'Freemium' },
          { id: 'ivpn', name: 'IVPN', description: 'Transparent, privacy-first VPN service.', replaces: 'NordVPN', category: 'vpn', icon: 'shield', url: 'https://ivpn.net', pricing: 'Paid' },
          
          { id: 'nextdns', name: 'NextDNS', description: 'Block ads and trackers at the DNS level.', replaces: 'Google DNS', category: 'dns', icon: 'activity', url: 'https://nextdns.io', pricing: 'Freemium' },
          { id: 'quad9', name: 'Quad9', description: 'Blocks malicious domains. No logging.', replaces: 'ISP DNS', category: 'dns', icon: 'activity', url: 'https://quad9.net', pricing: 'Free' },
          
          { id: 'fdroid', name: 'F-Droid', description: 'App store for open source Android apps.', replaces: 'Play Store', category: 'store', icon: 'smartphone', url: 'https://f-droid.org', badge: 'Open Source', pricing: 'Free' },
          { id: 'aurora', name: 'Aurora Store', description: 'Anonymous Google Play client.', replaces: 'Play Store', category: 'store', icon: 'smartphone', url: 'https://auroraoss.com', badge: 'Open Source', pricing: 'Free' },

          { id: 'linux', name: 'Linux Mint', description: 'A beginner-friendly operating system that respects your privacy.', replaces: 'Windows', category: 'os', icon: 'cpu', url: 'https://linuxmint.com', badge: 'Open Source', pricing: 'Free' },
          { id: 'graphene', name: 'GrapheneOS', description: 'Privacy and security focused mobile OS.', replaces: 'Android', category: 'os', icon: 'smartphone', url: 'https://grapheneos.org', badge: 'Open Source', pricing: 'Free' },
          
          { id: 'veracrypt', name: 'VeraCrypt', description: 'Free open source disk encryption software.', replaces: 'BitLocker', category: 'utilities', icon: 'lock', url: 'https://veracrypt.fr', badge: 'Open Source', pricing: 'Free' },
          { id: 'bleachbit', name: 'BleachBit', description: 'Disk cleaner and privacy manager.', replaces: 'CCleaner', category: 'utilities', icon: 'trash', url: 'https://bleachbit.org', badge: 'Open Source', pricing: 'Free' },
          { id: 'aegis', name: 'Aegis Authenticator', description: 'Secure 2FA app for Android.', replaces: 'Google Auth', category: 'utilities', icon: 'shield', url: 'https://getaegis.app', badge: 'Open Source', pricing: 'Free' },
          { id: 'raivo', name: 'Raivo OTP', description: 'Secure 2FA app for iOS.', replaces: 'Google Auth', category: 'utilities', icon: 'shield', url: 'https://github.com/raivo-otp/ios-application', badge: 'Open Source', pricing: 'Free' }
      ]
  },
  lab: {
      title: "Image Lab",
      subtitle: "Inspect and remove hidden EXIF metadata (GPS, Camera, Dates) from your photos locally.",
      dropzone: "Drag & drop an image here, or click to select",
      noMeta: "Good news! No sensitive metadata found.",
      metaFound: "Metadata Found!",
      gpsFound: "⚠️ GPS Coordinates Detected",
      cleanBtn: "Clean & Download",
      downloadBtn: "Download Clean Image",
      warning: "This process happens 100% in your browser. Your photos are not uploaded.",
      analyzing: "Analyzing...",
      analyzeAnother: "Analyze another image",
      cleanGenerated: "Clean Version Generated",
      cleanDesc: "We have created a new copy of your image without any hidden data. It is safe to share.",
      original: "Original",
      meta: {
          camera: "Camera",
          software: "Software",
          date: "Date"
      }
  },
  phishing: {
      title: "Cyber Trainer",
      subtitle: "Can you spot the threat? Test your skills against Phishing, Smishing, and insecure networks.",
      startGame: "Start Training",
      safe: "Safe / Legitimate",
      unsafe: "Unsafe / Scam",
      correct: "Correct!",
      wrong: "Wrong!",
      completed: "Training Complete",
      score: "Your Score",
      case: "Case",
      of: "of",
      ui: {
          messages: "Messages",
          networks: "Wi-Fi Networks",
          unsecured: "Unsecured Network",
          encrypted: "Encrypted (WPA2)",
          signin: "Sign In",
          username: "Username",
          password: "Password",
          login: "Log In",
          today: "Today 9:41 AM",
          viewDetails: "View Details"
      },
      scenarios: [
          { 
              id: 1, 
              type: 'email',
              subject: "URGENT: Your account has been suspended", 
              sender: "security@paypa1-support.com", 
              body: "We detected unusual activity. Click here to verify your identity within 24 hours or your account will be deleted permanently.", 
              isSafe: false, 
              explanation: "Look at the sender address: 'paypa1' instead of 'paypal'. Also, the sense of urgency ('24 hours') is a classic tactic." 
          },
          { 
              id: 2, 
              type: 'email',
              subject: "Your Weekly Screen Time Report", 
              sender: "no-reply@apple.com", 
              body: "Here is your weekly summary. You average screen time was 4h 30m. Log in to your dashboard to see more details.", 
              isSafe: true, 
              explanation: "The sender domain is correct (@apple.com), the tone is neutral, and it doesn't ask for sensitive info immediately." 
          },
          { 
              id: 3, 
              type: 'sms',
              sender: "+1-555-0199",
              body: "USPS: Your package US-9921 arrived at the warehouse but cannot be delivered due to incomplete address. Confirm here: http://usps-tracking-info.net",
              isSafe: false,
              explanation: "This is 'Smishing'. The link 'usps-tracking-info.net' is fake. Official notifications usually come from shortcodes, not full numbers, and link to usps.com."
          },
          { 
              id: 4, 
              type: 'wifi',
              networkName: "Free_Airport_WiFi",
              security: "Open",
              isSafe: false,
              explanation: "Open networks (no lock icon) are unencrypted. Anyone nearby can intercept your traffic. Never do banking on an open network without a VPN."
          },
          { 
              id: 5, 
              type: 'wifi',
              networkName: "Starbucks_Guest",
              security: "WPA2",
              isSafe: true,
              explanation: "WPA2/WPA3 (Lock icon) means the connection between you and the router is encrypted. While not 100% immune to attacks, it's standard for public places."
          },
          { 
              id: 6, 
              type: 'password',
              url: "http://bank-login-secure.com/auth",
              isSafe: false,
              explanation: "Look at the URL. It uses 'http://' instead of 'https://'. Any data sent here (like passwords) is sent in plain text and can be stolen."
          },
          { 
              id: 7, 
              type: 'sms',
              sender: "Facebook",
              body: "Tap to reset your Instagram password: https://ig.me/284h102",
              isSafe: true,
              explanation: "Short links like 'ig.me' or 'fb.me' are officially used by Meta services for password resets when you request them."
          },
          { 
              id: 8, 
              type: 'email', 
              subject: "HR: Open Enrollment Action Required",
              sender: "human-resources@company-internal-portal.net",
              body: "It is time to select your benefits for 2024. Please login to the new provider portal to confirm your choices.",
              isSafe: false,
              explanation: "This is a targeted 'Spear Phishing' attempt. The domain 'company-internal-portal.net' is likely fake. Always verify new HR links through internal channels."
          },
          {
              id: 9,
              type: 'wifi',
              networkName: "Hotel_Lobby_Secure",
              security: "WPA2",
              isSafe: true,
              explanation: "A WPA2 secured network in a hotel is generally safer than an open one, but verify the exact name with the front desk to avoid 'Evil Twin' hotspots."
          },
          {
              id: 10,
              type: 'sms',
              sender: "Uber",
              body: "Your Uber code is 4492. Do not share this code.",
              isSafe: true,
              explanation: "Legitimate 2FA codes often come from shortcodes and explicitly tell you NOT to share them. As long as you requested it, it's safe."
          },
          {
              id: 11,
              type: 'password',
              url: "https://paypal-support-center.net/login",
              isSafe: false,
              explanation: "The domain 'paypal-support-center.net' is NOT paypal.com. Even if it has HTTPS (lock icon), the domain itself is fraudulent."
          },
          {
              id: 12,
              type: 'email',
              subject: "New sign-in on Windows",
              sender: "no-reply@accounts.google.com",
              body: "We noticed a new sign-in to your Google Account on a Windows device. If this was you, you don't need to do anything.",
              isSafe: true,
              explanation: "This is a standard security alert from a verified Google domain. It doesn't ask for a password click, just informs you."
          },
          {
              id: 13,
              type: 'wifi',
              networkName: "Att_Free_Wifi",
              security: "Open",
              isSafe: false,
              explanation: "Attackers often set up open hotspots with common carrier names (AT&T, Verizon) to trick phones into auto-connecting. If it's Open, treat it as hostile."
          },
          {
              id: 14,
              type: 'sms',
              sender: "+1-888-0000",
              body: "IRS: You have a pending tax refund of $450. Claim it before it expires: http://gov-tax-refund-claim.com",
              isSafe: false,
              explanation: "The IRS does not send text messages about refunds with links. The URL is clearly not a .gov site."
          },
          {
              id: 15,
              type: 'password',
              url: "https://secure.bankofamerica.com/login",
              isSafe: true,
              explanation: "This is the correct URL structure. 'secure' is a subdomain of the legitimate 'bankofamerica.com' domain."
          },
          {
              id: 16,
              type: 'email',
              subject: "DocuSign: Invoice #2991 Shared with you",
              sender: "docs@docusign-docs-share.com",
              body: "Please review and sign the attached invoice regarding your recent purchase.",
              isSafe: false,
              explanation: "The domain 'docusign-docs-share.com' is fake. Real DocuSign emails come from @docusign.com or @docusign.net."
          },
          {
              id: 17,
              type: 'password',
              url: "https://netflix-account-update.com",
              isSafe: false,
              explanation: "Netflix hosts their login at netflix.com. Any other variation like 'netflix-account-update' is a phishing site designed to steal credentials."
          }
      ]
  },
  legal: {
    terms: {
        title: "Terms of Service",
        lastUpdated: "January 2024",
        sections: [
            {
                heading: "1. Acceptance of Terms",
                content: "By accessing and using LibreShield, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service."
            },
            {
                heading: "2. Educational Purpose & Disclaimer",
                content: "LibreShield is an educational tool designed to raise awareness about digital privacy and cybersecurity. It does not replace professional legal advice or a comprehensive security audit by a certified expert.",
                list: [
                    "The scores provided by the 'Assessment' are heuristic estimates based on your self-reported answers.",
                    "The 'Password Strength' meter is a mathematical estimation and does not guarantee a password cannot be hacked.",
                    "Use this tool as a starting point, not a definitive security solution."
                ]
            },
            {
                heading: "3. Use License & Open Source",
                content: "LibreShield is an open-source project licensed under the MIT License. Regarding the use of this specific hosted instance:",
                list: [
                    "You may freely copy, modify, and distribute the source code as per the MIT License.",
                    "You agree not to use this website for any unlawful purpose, including but not limited to cyberstalking, harassment, or testing stolen credentials.",
                    "You agree not to attempt to compromise the security or integrity of the website infrastructure."
                ]
            },
            {
                heading: "4. User Conduct",
                content: "You agree to use the tools provided (such as the Password Generator or Link Cleaner) responsibly. You must not use the 'Password Auditor' to test passwords that do not belong to you or for which you do not have authorization."
            },
            {
                heading: "5. Disclaimer of Warranties",
                content: "The materials on LibreShield's website are provided on an 'as is' basis. LibreShield makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.",
            },
            {
                heading: "6. Limitations of Liability",
                content: "In no event shall LibreShield or its contributors be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on LibreShield's website, even if LibreShield has been notified orally or in writing of the possibility of such damage."
            },
            {
                heading: "7. Accuracy of Materials",
                content: "The materials appearing on LibreShield's website could include technical, typographical, or photographic errors. LibreShield does not warrant that any of the materials on its website are accurate, complete, or current."
            },
            {
                heading: "8. Links to External Sites",
                content: "LibreShield has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by LibreShield. Use of any such linked website is at the user's own risk."
            },
            {
                heading: "9. Modifications",
                content: "LibreShield may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service."
            },
            {
                heading: "10. Governing Law",
                content: "These terms and conditions are governed by and construed in accordance with the laws of the open-source community norms and any applicable local laws where the project maintainers reside."
            }
        ]
    },
    privacy: {
        title: "Privacy Policy",
        lastUpdated: "January 2024",
        sections: [
            {
                heading: "1. Privacy by Design",
                content: "Our fundamental principle is simple: We cannot lose your data if we never collect it. LibreShield is designed as a 'Zero-Knowledge' web application."
            },
            {
                heading: "2. Information Collection",
                content: "We do not collect, store, or process any Personal Identifiable Information (PII) on our servers.",
                list: [
                    "We do not ask for your email address, name, or phone number.",
                    "We do not track your IP address for analytics.",
                    "We do not use Google Analytics, Facebook Pixel, or any third-party tracking cookies."
                ]
            },
            {
                heading: "3. Local Processing & Client-Side Execution",
                content: "All functional tools on this website execute entirely on your device (Client-Side).",
                list: [
                    "Password Generator & Vault: Uses the Web Crypto API. Encryption keys are created in your device's RAM and never sent over the network.",
                    "Privacy Audit: Your answers are stored in a temporary JavaScript state. They are wiped when you close the tab (unless saved to Local Storage).",
                    "Link Cleaner & Image Lab: File processing happens locally in your browser memory."
                ]
            },
            {
                heading: "4. Local Storage Usage",
                content: "We use the browser's 'Local Storage' feature to improve your user experience. This data remains on your device and is not accessible to us or anyone else unless they have physical access to your device.",
                list: [
                    "Theme Preference: To remember if you prefer Dark Mode or Light Mode.",
                    "Assessment Progress: To allow you to resume your audit if you close the page.",
                    "Language Preference: To remember your selected language."
                ]
            },
            {
                heading: "5. Hosting & Infrastructure Logs",
                content: "This website is hosted on a Content Delivery Network (CDN). These providers (e.g., Netlify, Vercel, Cloudflare) may automatically log basic request data (IP address, User Agent, Timestamp) for security purposes, such as DDoS protection. LibreShield developers do not access these logs for marketing."
            },
            {
                heading: "6. Data Security",
                content: "Because we do not store your data, we cannot decrypt your files if you lose your password. In the 'File Vault' feature, if you lose your encryption password, your data is irretrievably lost. We do not hold backup keys."
            },
            {
                heading: "7. Third-Party Links",
                content: "Our website contains links to other websites (e.g., in the Privacy Hub). If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. We strongly advise you to review the Privacy Policy of these websites."
            },
            {
                heading: "8. Rights (CCPA/GDPR)",
                content: "Since we do not collect personal data, we cannot sell it, nor do we have anything to delete upon request. You maintain full ownership and control of your data at all times."
            },
            {
                heading: "9. Children's Privacy",
                content: "LibreShield does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately, although technically impossible due to our no-collection policy."
            },
            {
                heading: "10. Contact Us",
                content: "If you have any questions about this Privacy Policy, you can contact us by opening an issue on our public GitHub repository."
            }
        ]
    }
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Common questions about privacy, security, and how this app works.",
    items: [
        { question: "Is LibreShield really free?", answer: "Yes. LibreShield is a non-profit, open-source project. We do not charge for access, we do not have a 'Premium' tier, and we do not show ads.", icon: "heart" },
        { question: "Do you store my data?", answer: "No. The application is built as a 'Static Web App'. This means when you load the site, the code runs entirely on your device. When you generate a password or answer the audit questions, that data never leaves your phone/computer.", icon: "database" },
        { question: "What happens if I lose my File Vault password?", answer: "If you encrypt a file and forget the password, the data is lost forever. We use AES-GCM encryption, which is mathematically impossible to break without the key. We do not store your passwords, so we cannot recover them for you.", icon: "lock" },
        { question: "Why is the map on the homepage 'Simulated'?", answer: "To respect user privacy, we do not track real user locations. The map visualizes our global mission abstractly, but the data points are randomized for aesthetic purposes only.", icon: "globe" },
        { question: "Can I trust the password generator?", answer: "Yes. It uses the `Crypto.getRandomValues()` API built into your browser, which is cryptographically secure. Since the code is open source, you can verify that we don't send the passwords anywhere.", icon: "key" },
        { question: "Why do you recommend paid VPNs?", answer: "Because running a VPN server costs money (bandwidth, electricity, maintenance). If a VPN is 'free', they are likely selling your browsing data to advertisers to pay the bills. We only recommend services with a proven track record and sustainable business models.", icon: "wifi" },
        { question: "What is 'Browser Fingerprinting'?", answer: "Fingerprinting is a technique used by websites to identify you without cookies. They look at your screen resolution, installed fonts, battery level, and hardware capabilities to create a unique ID. Our tool shows you what they see.", icon: "fingerprint" },
        { question: "Is it safe to paste my passwords here?", answer: "Technically yes, because the code runs locally and offline capability is supported. However, as a general security habit, we DO NOT recommend pasting your real banking or primary email passwords into any website tool, including ours. Use the Auditor only for testing old or potential passwords.", icon: "shield" },
        { question: "How does the Link Cleaner work?", answer: "Marketing emails and social media sites add parameters like `?utm_source=facebook` or `&fbclid=...` to links to track your clicks. Our tool parses the URL and strips out these known tracking parameters, leaving the destination link intact.", icon: "scissors" },
        { question: "Can I use this offline?", answer: "Yes! Once the site is loaded, you can disconnect your internet and all tools (Password Generator, Link Cleaner, etc.) will still work perfectly.", icon: "wifi" },
        { question: "I found a bug, where do I report it?", answer: "Please visit our GitHub repository (link in footer) and open an Issue. We welcome community feedback and contributions.", icon: "code" }
    ],
    contactTitle: "Still have questions?",
    contactBtn: "Contact on GitHub"
  },
  recs: {
    android: { title: "Harden your Android", desc: "Your Android device sends a lot of data to Google. Learn how to minimize it." },
    updates: { title: "Update your devices" },
    passwords: { title: "Stop reusing passwords" },
    generic: { title: "Improve your privacy", desc: "Check out our tools to learn more." }
  }
};

const baseES: Translation = {
  common: {
    appName: "LibreShield",
    tagline: "Recupera tu privacidad digital",
    start: "Empezar",
    next: "Siguiente",
    back: "Atrás",
    close: "Cerrar",
    loading: "Cargando...",
    error: "Ocurrió un error",
    viewGuide: "Ver Guía",
    seeMore: "Visitar Sitio",
    free: "Gratis",
    openSource: "Código Abierto",
    all: "Todos"
  },
  nav: {
    home: "Inicio",
    tools: "Herramientas",
    assessment: "Diagnóstico",
    hub: "Privacy Hub",
    faq: "FAQ",
    about: "Nosotros",
    theme: "Tema",
    legal: "Legal",
    terms: "Términos",
    privacy: "Privacidad"
  },
  about: {
    title: "Sobre LibreShield",
    subtitle: "Democratizando la privacidad digital. Una herramienta construida por la comunidad, para la comunidad.",
    missionTitle: "Nuestra Misión",
    missionP1: "Internet se ha vuelto hostil para el usuario promedio. Entre el rastreo publicitario, el robo de datos y la vigilancia masiva, la privacidad parece un lujo reservado para expertos técnicos.",
    missionP2: "LibreShield nace con un objetivo simple: hacer que la ciberseguridad sea accesible, comprensible y gratuita para todos, sin importar su nivel técnico. Creemos que la privacidad es un derecho humano fundamental, no una característica premium.",
    pillars: {
        privacy: { title: "Privacidad Primero", desc: "No recopilamos datos. No tenemos servidores de usuarios. Todo el análisis ocurre localmente en tu dispositivo. Somos transparentes sobre lo que hacemos y lo que no." },
        opensource: { title: "Código Abierto", desc: "Nuestro código es público. Cualquiera puede auditarlo, mejorarlo o copiarlo. No confiamos en la 'seguridad por oscuridad', sino en la transparencia comunitaria." },
        free: { title: "Gratis para Siempre", desc: "Sin suscripciones, sin 'paywalls' y sin vender tus datos a terceros para financiarnos. Este es un proyecto altruista mantenido por voluntarios." },
        education: { title: "Educación vs Miedo", desc: "No usamos el miedo para venderte productos. Usamos la educación para empoderarte. Queremos que entiendas cómo protegerte tú mismo." }
    },
    ctaTitle: "Únete a la causa",
    ctaDesc: "Comparte esta herramienta con tus amigos y familiares. Ayúdanos a construir un internet más seguro, un usuario a la vez.",
    ctaHome: "Ir al Inicio",
    ctaGit: "Ver en GitHub"
  },
  home: {
    heroTitle: "Recupera tu",
    heroSubtitle: "Libertad Digital",
    heroDesc: "Internet se ha convertido en una máquina de vigilancia. LibreShield te da el conocimiento y las herramientas para proteger tus datos, identidad y tranquilidad. Gratis, libre y local.",
    ctaCheck: "Revisar mi Seguridad",
    ctaGuides: "Aprender Privacidad",
    featuresTitle: "Tu Kit de Soberanía Digital",
    featuresDesc: "No solo te decimos qué está mal. Te damos los pasos exactos para arreglarlo.",
    featDiagnosis: "Auditoría de Privacidad",
    featDiagnosisDesc: "Un análisis exhaustivo de 15 puntos de tu vida digital. Encuentra tus puntos débiles antes que los hackers.",
    featTools: "Ciber Herramientas",
    featToolsDesc: "Genera claves inquebrantables, limpia enlaces de rastreo y audita tu huella digital.",
    featHub: "Directorio Privado",
    featHubDesc: "Encuentra alternativas éticas, seguras y de código abierto a las apps que usas a diario.",
    featLab: "Laboratorio de Imágenes",
    featLabDesc: "Detecta y elimina metadatos GPS ocultos en tus fotos antes de subirlas a internet.",
    featPhishing: "Ciber Entrenador",
    featPhishingDesc: "Entrena tu ojo para detectar estafas, redes WiFi inseguras y sitios falsos.",
    trustTitle: "¿Por qué confiar en LibreShield?",
    trustNoTrackers: "Sin Rastreadores",
    trustNoTrackersDesc: "Practicamos lo que predicamos. Este sitio tiene cero analíticas, cookies o scripts de terceros.",
    trustLocal: "Ejecución Local",
    trustLocalDesc: "Tus datos nunca salen de tu dispositivo. Todos los cálculos ocurren en tu navegador.",
    trustOpen: "Código Abierto",
    trustOpenDesc: "Nuestro código es público en GitHub. Cualquiera puede auditarlo para verificar nuestras promesas.",
    openSourceSectionTitle: "Construido por la Comunidad",
    openSourceSectionDesc: "Seguridad mediante transparencia, no oscuridad. Únete en GitHub para contribuir o auditar.",
    openSourceSectionBtn: "Ver en GitHub",
    mapLabel: "Comunidad Global (Simulación)"
  },
  assessment: {
    title: "Auditoría de Privacidad",
    subtitle: "Evaluemos tu postura digital.",
    deviceStep: "Dispositivos",
    identityStep: "Identidad",
    securityStep: "Seguridad",
    defenseStep: "Defensa",
    startBtn: "Iniciar Análisis",
    phase1: "Fase 1: Base",
    phase2: "Fase 2: Identidad",
    phase3: "Fase 3: Datos",
    phase4: "Fase 4: Seguridad",
    phase5: "Fase 5: Defensa",
    viewReport: "Ver Informe",
    questions: {
      os: "Sistemas Operativos",
      osDesc: "¿Qué dispositivos usas a diario?",
      updates: "Hábitos de Actualización",
      updatesDesc: "Cuando hay una actualización...",
      backups: "Estrategia de Backup",
      backupsDesc: "Si perdieras tus dispositivos hoy...",
      browsers: "Navegadores",
      browsersDesc: "¿Qué ventana a la web usas?",
      search: "Motores de Búsqueda",
      searchDesc: "¿A quién le preguntas tus dudas?",
      email: "Proveedores de Email",
      emailDesc: "¿Dónde vive tu identidad digital?",
      social: "Huella en Redes Sociales",
      socialDesc: "¿Dónde tienes cuenta activa?",
      messaging: "Apps de Mensajería",
      messagingDesc: "¿Qué usas para chats privados?",
      cloud: "Almacenamiento en Nube",
      cloudDesc: "¿Dónde guardas tus archivos?",
      iot: "Dispositivos Inteligentes (IoT)",
      iotDesc: "¿Quién escucha en tu casa?",
      passwords: "Hábitos de Contraseña",
      passwordsDesc: "Sé sincero, es crucial.",
      twoFactor: "Autenticación de Dos Pasos (2FA)",
      twoFactorDesc: "Al entrar en un dispositivo nuevo...",
      phishing: "Reacción ante Phishing",
      phishingDesc: "Recibes un email: 'Cuenta Bloqueada'...",
      risks: "Riesgos y Hábitos",
      risksDesc: "¿Cuáles aplican a ti?",
      defense: "Herramientas Defensivas",
      defenseDesc: "¿Qué software de protección usas?"
    },
    options: {
      none: "Ninguno",
      auto: "Automático",
      manual: "Manual",
      never: "Nunca",
      yes: "Sí",
      no: "No"
    }
  },
  results: {
    securityLevel: "Nivel de Seguridad",
    score: "Puntuación",
    actionPlan: "Plan de Acción",
    personalizedRecs: "Recomendaciones Personalizadas",
    perfectTitle: "¡Impecable!",
    perfectDesc: "No hemos encontrado riesgos críticos basados en tus respuestas. Eres un usuario consciente. ¡Sigue así!",
    critical: "Crítico",
    suggestion: "Sugerencia",
    retest: "Repetir Diagnóstico",
    areasToImprove: "Áreas a Mejorar",
    labels: {
        excellent: "Excelente",
        improvable: "Mejorable",
        vulnerable: "Vulnerable"
    }
  },
  tools: {
    title: "Ciber Herramientas",
    subtitle: "Utilidades para asegurar tu vida digital.",
    tabKeys: "Claves y Contraseñas",
    tabPrivacy: "Identidad y Privacidad",
    tabUtils: "Utilidades",
    genTitle: "Generador de Contraseñas",
    genDesc: "Crea claves de alta entropía localmente.",
    auditTitle: "Auditor de Contraseñas",
    auditDesc: "Analiza matemáticamente la fortaleza y verifica filtraciones de datos.",
    leaksTitle: "Verificar Filtraciones",
    leaksDesc: "Comprueba si tu email o teléfono está comprometido.",
    fingerprintTitle: "Huella del Navegador",
    fingerprintDesc: "Mira lo que las webs pueden saber de tu dispositivo.",
    cleanerTitle: "Limpiador de Enlaces",
    cleanerDesc: "Elimina parámetros de rastreo de las URLs.",
    msgTitle: "Mensaje Seguro",
    msgDesc: "Cifra texto con una clave compartida.",
    tokenTitle: "Generador de Tokens",
    tokenDesc: "Genera claves API o secretos aleatorios.",
    permissionsTitle: "Permisos del Navegador",
    permissionsDesc: "Revisa qué pueden acceder los sitios.",
    
    // Actions
    copy: "Copiar",
    copied: "¡Copiado!",
    regenerate: "Regenerar",
    encrypt: "Cifrar",
    decrypt: "Descifrar",
    cleanUrl: "Limpiar URL",
    check: "Comprobar",
    analyze: "Analizar",
    weak: "Débil",
    medium: "Medio",
    strong: "Fuerte",
    excellent: "Excelente",
    compromised: "Comprometida",
    safetyScore: "Puntuación de Seguridad",
    riskSafe: "Seguro",
    riskSuspicious: "Sospechoso",
    riskDangerous: "Peligroso",
    analysis: "Análisis",

    // New Features
    vaultTitle: "Bóveda de Archivos",
    vaultDesc: "Cifra cualquier archivo con contraseña usando AES-GCM directamente en tu navegador.",
    vaultDrop: "Arrastra un archivo aquí o haz clic para seleccionar",
    vaultPassPlaceholder: "Contraseña de cifrado",
    vaultEncryptBtn: "Cifrar y Descargar",
    vaultDecryptBtn: "Descifrar y Descargar",
    vaultDownload: "Descargar Archivo",
    vaultError: "Error: Contraseña incorrecta o archivo dañado.",
    
    socialTitle: "Atajos de Privacidad",
    socialDesc: "Enlaces directos a configuraciones ocultas.",

    entropyBits: "Entropía",
    crackTime: "Tiempo de Crackeo",
    instant: "Instantáneo",
    
    cleanerPlaceholder: "Pega tu enlace aquí (ej: https://site.com?utm_source=...)",
    cleanerResults: "Los resultados aparecerán aquí",
    paramsRemoved: "parámetros eliminados",
    
    deviceInfo: {
        browser: "Navegador",
        os: "Sistema",
        deviceType: "Tipo",
        screen: "Pantalla",
        battery: "Batería",
        connection: "Conexión",
        mobile: "Móvil",
        desktop: "Escritorio"
    },
    
    perms: {
        mic: "Micrófono",
        location: "Ubicación",
        notifications: "Notificaciones",
        camera: "Cámara"
    },
    
    msgPlaceholderEnc: "Mensaje...",
    msgPlaceholderDec: "Código...",
    msgKeyPlaceholder: "Clave (1234)",
    msgProcess: "Procesar",
    msgErrorKey: "Error: Falta mensaje o clave",
    msgErrorInvalid: "Error: Código inválido"
  },
  hub: {
      title: "Directorio Privado",
      subtitle: "Descubre alternativas éticas, seguras y de código abierto al software que usas a diario.",
      searchPlaceholder: "Buscar apps (ej. Chrome, VPN...)",
      replacesLabel: "Reemplaza a:",
      noAppsFound: "No se encontraron apps en esta categoría.",
      clearFilters: "Limpiar filtros",
      cats: {
          browser: "Navegadores",
          email: "Correo",
          messaging: "Mensajería",
          cloud: "Nube",
          search: "Búsqueda",
          os: "Sistemas",
          vpn: "VPN",
          pass: "Contraseñas",
          dns: "DNS",
          store: "Tiendas",
          productivity: "Productividad",
          utilities: "Utilidades"
      },
      apps: [
          { id: 'firefox', name: 'Firefox', description: 'Potente, código abierto y propiedad de una fundación sin ánimo de lucro.', replaces: 'Chrome', category: 'browser', icon: 'firefox', url: 'https://mozilla.org/firefox', badge: 'Open Source', pricing: 'Free' },
          { id: 'librewolf', name: 'LibreWolf', description: 'Un fork de Firefox enfocado en privacidad, seguridad y libertad.', replaces: 'Chrome', category: 'browser', icon: 'shield', url: 'https://librewolf.net', badge: 'Open Source', pricing: 'Free' },
          { id: 'brave', name: 'Brave', description: 'Bloqueador de anuncios y rastreadores integrado por defecto.', replaces: 'Chrome', category: 'browser', icon: 'shield', url: 'https://brave.com', badge: 'Open Source', pricing: 'Free' },
          { id: 'tor', name: 'Navegador Tor', description: 'El estándar de oro para el anonimato. Enruta tu tráfico por 3 nodos.', replaces: 'Cualquiera', category: 'browser', icon: 'ghost', url: 'https://torproject.org', badge: 'Open Source', pricing: 'Free' },
          { id: 'mullvad', name: 'Mullvad Browser', description: 'Navegador enfocado en privacidad desarrollado con Tor Project.', replaces: 'Chrome', category: 'browser', icon: 'lock', url: 'https://mullvad.net/browser', badge: 'Open Source', pricing: 'Free' },

          { id: 'proton', name: 'Proton Mail', description: 'Correo cifrado de extremo a extremo con sede en Suiza.', replaces: 'Gmail', category: 'email', icon: 'mail', url: 'https://proton.me/mail', badge: 'Encrypted', pricing: 'Freemium' },
          { id: 'tutanota', name: 'Tuta', description: 'Calendario, contactos y correo totalmente cifrados.', replaces: 'Outlook', category: 'email', icon: 'mail', url: 'https://tuta.com', badge: 'Encrypted', pricing: 'Freemium' },
          { id: 'simplelogin', name: 'SimpleLogin', description: 'Solución de alias de correo open source para proteger tu bandeja.', replaces: 'Direct Email', category: 'email', icon: 'mail', url: 'https://simplelogin.io', badge: 'Open Source', pricing: 'Freemium' },
          
          { id: 'signal', name: 'Signal', description: 'Sin metadatos, cifrado sólido. Usado por periodistas en todo el mundo.', replaces: 'WhatsApp', category: 'messaging', icon: 'message-circle', url: 'https://signal.org', badge: 'Encrypted', pricing: 'Free' },
          { id: 'session', name: 'Session', description: 'Mensajería privada que minimiza metadatos. Sin número de teléfono.', replaces: 'WhatsApp', category: 'messaging', icon: 'shield', url: 'https://getsession.org', badge: 'Decentralized', pricing: 'Free' },
          { id: 'threema', name: 'Threema', description: 'Mensajería anónima. No requiere número de teléfono.', replaces: 'WhatsApp', category: 'messaging', icon: 'lock', url: 'https://threema.ch', pricing: 'Paid' },
          { id: 'element', name: 'Element', description: 'Chat seguro para equipos. Construido sobre Matrix.', replaces: 'Slack', category: 'messaging', icon: 'hash', url: 'https://element.io', badge: 'Decentralized', pricing: 'Freemium' },
          
          { id: 'duckduckgo', name: 'DuckDuckGo', description: 'Un buscador que no rastrea tu historial de búsqueda.', replaces: 'Google', category: 'search', icon: 'search', url: 'https://duckduckgo.com', pricing: 'Free' },
          { id: 'startpage', name: 'Startpage', description: 'Resultados de Google sin el rastreo.', replaces: 'Google', category: 'search', icon: 'search', url: 'https://startpage.com', pricing: 'Free' },
          { id: 'searx', name: 'SearXNG', description: 'Metabuscador de internet gratuito que agrega resultados.', replaces: 'Google', category: 'search', icon: 'search', url: 'https://searx.space', badge: 'Open Source', pricing: 'Free' },
          
          { id: 'protondrive', name: 'Proton Drive', description: 'Almacenamiento seguro y cifrado para tus archivos.', replaces: 'Google Drive', category: 'cloud', icon: 'cloud', url: 'https://proton.me/drive', badge: 'Encrypted', pricing: 'Freemium' },
          { id: 'nextcloud', name: 'Nextcloud', description: 'Plataforma de productividad auto-alojada.', replaces: 'Google Workspace', category: 'cloud', icon: 'server', url: 'https://nextcloud.com', badge: 'Open Source', pricing: 'Free' },
          
          { id: 'cryptpad', name: 'CryptPad', description: 'Suite ofimática colaborativa, cifrada de extremo a extremo.', replaces: 'Google Docs', category: 'productivity', icon: 'file-text', url: 'https://cryptpad.fr', badge: 'Encrypted', pricing: 'Free' },
          { id: 'standardnotes', name: 'Standard Notes', description: 'Una app de notas simple y privada.', replaces: 'Evernote', category: 'productivity', icon: 'file-text', url: 'https://standardnotes.com', badge: 'Encrypted', pricing: 'Freemium' },
          { id: 'joplin', name: 'Joplin', description: 'Aplicación de notas y tareas de código abierto.', replaces: 'Evernote', category: 'productivity', icon: 'file-text', url: 'https://joplinapp.org', badge: 'Open Source', pricing: 'Free' },
          
          { id: 'bitwarden', name: 'Bitwarden', description: 'Gestor de contraseñas seguro y open-source para todos tus dispositivos.', replaces: 'LastPass', category: 'password-manager', icon: 'key', url: 'https://bitwarden.com', badge: 'Open Source', pricing: 'Freemium' },
          { id: 'keepassxc', name: 'KeePassXC', description: 'Gestor de contraseñas offline. Tú controlas la base de datos.', replaces: '1Password', category: 'password-manager', icon: 'hard-drive', url: 'https://keepassxc.org', badge: 'Open Source', pricing: 'Free' },
          
          { id: 'mullvadvpn', name: 'Mullvad VPN', description: 'Sin registro. Historial probado. Rápido.', replaces: 'VPNs Gratis', category: 'vpn', icon: 'shield', url: 'https://mullvad.net', pricing: 'Paid' },
          { id: 'protonvpn', name: 'Proton VPN', description: 'VPN segura con un nivel gratuito.', replaces: 'VPNs Gratis', category: 'vpn', icon: 'shield', url: 'https://protonvpn.com', pricing: 'Freemium' },
          { id: 'ivpn', name: 'IVPN', description: 'Servicio VPN transparente y enfocado en privacidad.', replaces: 'NordVPN', category: 'vpn', icon: 'shield', url: 'https://ivpn.net', pricing: 'Paid' },
          
          { id: 'nextdns', name: 'NextDNS', description: 'Bloquea anuncios y rastreadores a nivel DNS.', replaces: 'Google DNS', category: 'dns', icon: 'activity', url: 'https://nextdns.io', pricing: 'Freemium' },
          { id: 'quad9', name: 'Quad9', description: 'Bloquea dominios maliciosos. Sin registros.', replaces: 'ISP DNS', category: 'dns', icon: 'activity', url: 'https://quad9.net', pricing: 'Free' },
          
          { id: 'fdroid', name: 'F-Droid', description: 'Tienda de aplicaciones de código abierto para Android.', replaces: 'Play Store', category: 'store', icon: 'smartphone', url: 'https://f-droid.org', badge: 'Open Source', pricing: 'Free' },
          { id: 'aurora', name: 'Aurora Store', description: 'Cliente anónimo de Google Play.', replaces: 'Play Store', category: 'store', icon: 'smartphone', url: 'https://auroraoss.com', badge: 'Open Source', pricing: 'Free' },

          { id: 'linux', name: 'Linux Mint', description: 'Un sistema operativo fácil de usar que respeta tu privacidad.', replaces: 'Windows', category: 'os', icon: 'cpu', url: 'https://linuxmint.com', badge: 'Open Source', pricing: 'Free' },
          { id: 'graphene', name: 'GrapheneOS', description: 'Sistema operativo móvil enfocado en privacidad y seguridad.', replaces: 'Android', category: 'os', icon: 'smartphone', url: 'https://grapheneos.org', badge: 'Open Source', pricing: 'Free' },
          
          { id: 'veracrypt', name: 'VeraCrypt', description: 'Software gratuito de cifrado de disco de código abierto.', replaces: 'BitLocker', category: 'utilities', icon: 'lock', url: 'https://veracrypt.fr', badge: 'Open Source', pricing: 'Free' },
          { id: 'bleachbit', name: 'BleachBit', description: 'Limpiador de disco y administrador de privacidad.', replaces: 'CCleaner', category: 'utilities', icon: 'trash', url: 'https://bleachbit.org', badge: 'Open Source', pricing: 'Free' },
          { id: 'aegis', name: 'Aegis Authenticator', description: 'App de 2FA segura para Android.', replaces: 'Google Auth', category: 'utilities', icon: 'shield', url: 'https://getaegis.app', badge: 'Open Source', pricing: 'Free' },
          { id: 'raivo', name: 'Raivo OTP', description: 'App de 2FA segura para iOS.', replaces: 'Google Auth', category: 'utilities', icon: 'shield', url: 'https://github.com/raivo-otp/ios-application', badge: 'Open Source', pricing: 'Free' }
      ]
  },
  lab: {
      title: "Laboratorio de Imágenes",
      subtitle: "Inspecciona y elimina metadatos EXIF ocultos (GPS, Cámara, Fechas) de tus fotos localmente.",
      dropzone: "Arrastra una imagen aquí o haz clic para seleccionar",
      noMeta: "¡Buenas noticias! No se encontraron metadatos sensibles.",
      metaFound: "¡Metadatos Detectados!",
      gpsFound: "⚠️ Coordenadas GPS Detectadas",
      cleanBtn: "Limpiar y Descargar",
      downloadBtn: "Descargar Imagen Limpia",
      warning: "Este proceso ocurre 100% en tu navegador. Tus fotos no se suben a ningún sitio.",
      analyzing: "Analizando...",
      analyzeAnother: "Analizar otra imagen",
      cleanGenerated: "Versión Limpia Generada",
      cleanDesc: "Hemos creado una copia nueva de tu imagen sin ningún dato oculto. Es seguro compartirla.",
      original: "Original",
      meta: {
          camera: "Cámara",
          software: "Software",
          date: "Fecha"
      }
  },
  phishing: {
      title: "Ciber Entrenador",
      subtitle: "¿Puedes detectar la amenaza? Pon a prueba tus habilidades contra Phishing, Smishing y redes inseguras.",
      startGame: "Empezar Entrenamiento",
      safe: "Seguro / Legítimo",
      unsafe: "Inseguro / Estafa",
      correct: "¡Correcto!",
      wrong: "¡Incorrecto!",
      completed: "Entrenamiento Completado",
      score: "Tu Puntuación",
      case: "Caso",
      of: "de",
      ui: {
          messages: "Mensajes",
          networks: "Redes Wi-Fi",
          unsecured: "Red no segura",
          encrypted: "Cifrada (WPA2)",
          signin: "Iniciar Sesión",
          username: "Usuario",
          password: "Password",
          login: "Entrar",
          today: "Hoy 9:41 AM",
          viewDetails: "Ver Detalles"
      },
      scenarios: [
          { 
              id: 1, 
              type: 'email',
              subject: "URGENTE: Tu cuenta ha sido suspendida", 
              sender: "seguridad@paypa1-soporte.com", 
              body: "Detectamos actividad inusual. Haz clic aquí para verificar tu identidad en 24 horas o tu cuenta será eliminada permanentemente.", 
              isSafe: false, 
              explanation: "Mira la dirección: 'paypa1' en vez de 'paypal'. Además, el sentido de urgencia ('24 horas') es una táctica clásica." 
          },
          { 
              id: 2, 
              type: 'email',
              subject: "Tu informe semanal de tiempo en pantalla", 
              sender: "no-reply@apple.com", 
              body: "Aquí está tu resumen semanal. Tu tiempo promedio fue de 4h 30m. Inicia sesión en tu panel para ver más detalles.", 
              isSafe: true, 
              explanation: "El dominio del remitente es correcto (@apple.com), el tono es neutral y no pide información sensible de inmediato." 
          },
          { 
              id: 3, 
              type: 'sms',
              sender: "+34 600 123 456",
              body: "CORREOS: Su paquete ES-9921 ha llegado al almacen pero no se puede entregar por direccion incompleta. Confirme aqui: http://correos-tracking-info.net",
              isSafe: false, 
              explanation: "Esto es 'Smishing'. El enlace 'correos-tracking-info.net' es falso. Las notificaciones oficiales suelen venir de números cortos y enlazan a correos.es."
          },
          { 
              id: 4, 
              type: 'wifi',
              networkName: "WiFi_Gratis_Aeropuerto",
              security: "Open",
              isSafe: false, 
              explanation: "Las redes abiertas (sin candado) no están cifradas. Cualquiera cerca puede interceptar tu tráfico. Nunca hagas operaciones bancarias en una red abierta sin VPN."
          },
          { 
              id: 5, 
              type: 'wifi',
              networkName: "Starbucks_Clientes",
              security: "WPA2",
              isSafe: true, 
              explanation: "WPA2/WPA3 (Candado) significa que la conexión entre tú y el router está cifrada. Aunque no es 100% inmune, es el estándar de seguridad."
          },
          { 
              id: 6, 
              type: 'password',
              url: "http://banco-login-seguro.com/auth",
              isSafe: false, 
              explanation: "Fíjate en la URL. Usa 'http://' en lugar de 'https://'. Cualquier dato (como contraseñas) enviado aquí va en texto plano y puede ser robado."
          },
          { 
              id: 7, 
              type: 'sms',
              sender: "Facebook",
              body: "Toca para restablecer tu contraseña de Instagram: https://ig.me/284h102",
              isSafe: true, 
              explanation: "Enlaces cortos como 'ig.me' o 'fb.me' son usados oficialmente por servicios de Meta para restablecer contraseñas cuando tú lo solicitas."
          },
          { 
              id: 8, 
              type: 'email', 
              subject: "RRHH: Acción requerida para inscripción abierta",
              sender: "recursos-humanos@portal-interno-empresa.net",
              body: "Es hora de seleccionar sus beneficios para 2024. Inicie sesión en el nuevo portal para confirmar sus opciones.",
              isSafe: false, 
              explanation: "Este es un intento de 'Spear Phishing'. El dominio 'portal-interno-empresa.net' es falso. Siempre verifica enlaces de RRHH por canales internos."
          },
          {
              id: 9,
              type: 'wifi',
              networkName: "Lobby_Hotel_Seguro",
              security: "WPA2",
              isSafe: true, 
              explanation: "Una red WPA2 en un hotel es generalmente más segura que una abierta, pero verifica el nombre exacto en recepción para evitar puntos de acceso 'Gemelo Malvado'."
          },
          {
              id: 10,
              type: 'sms',
              sender: "Uber",
              body: "Tu código de Uber es 4492. No compartas este código.",
              isSafe: true, 
              explanation: "Los códigos legítimos de 2FA suelen venir de números cortos y te dicen explícitamente que NO los compartas. Si tú lo pediste, es seguro."
          },
          {
              id: 11,
              type: 'password',
              url: "https://paypal-centro-soporte.net/login",
              isSafe: false, 
              explanation: "El dominio 'paypal-centro-soporte.net' NO es paypal.com. Aunque tenga HTTPS (candado), el dominio en sí es fraudulento."
          },
          {
              id: 12,
              type: 'email',
              subject: "Nuevo inicio de sesión en Windows",
              sender: "no-reply@accounts.google.com",
              body: "Notamos un nuevo inicio de sesión en tu cuenta de Google en un dispositivo Windows. Si fuiste tú, no necesitas hacer nada.",
              isSafe: true, 
              explanation: "Esta es una alerta de seguridad estándar de un dominio verificado de Google. No pide clic ni contraseña, solo informa."
          },
          {
              id: 13,
              type: 'wifi',
              networkName: "Movistar_Wifi_Gratis",
              security: "Open",
              isSafe: false, 
              explanation: "Los atacantes crean redes abiertas con nombres de operadores comunes para engañar a los teléfonos. Si es Abierta, trátala como hostil."
          },
          {
              id: 14,
              type: 'sms',
              sender: "+34 600 000 000",
              body: "HACIENDA: Tienes una devolución pendiente de 450€. Reclámala antes de que expire: http://gob-devolucion-impuestos.com",
              isSafe: false, 
              explanation: "Hacienda nunca envía SMS con enlaces para devoluciones. La URL no es un sitio gubernamental oficial (.gob.es)."
          },
          {
              id: 15,
              type: 'password',
              url: "https://secure.bankofamerica.com/login",
              isSafe: true, 
              explanation: "Esta es la estructura de URL correcta. 'secure' es un subdominio del dominio legítimo 'bankofamerica.com'."
          },
          {
              id: 16,
              type: 'email',
              subject: "DocuSign: Factura #2991 Compartida contigo",
              sender: "docs@docusign-docs-share.com",
              body: "Por favor revisa y firma la factura adjunta sobre tu compra reciente.",
              isSafe: false, 
              explanation: "El dominio 'docusign-docs-share.com' es falso. Los correos reales de DocuSign vienen de @docusign.com o @docusign.net."
          },
          {
              id: 17,
              type: 'password',
              url: "https://netflix-actualizar-cuenta.com",
              isSafe: false, 
              explanation: "Netflix aloja su inicio de sesión en netflix.com. Cualquier variación como 'netflix-actualizar-cuenta' es un sitio de phishing."
          }
      ]
  },
  legal: {
    terms: {
        title: "Términos de Servicio",
        lastUpdated: "Enero 2024",
        sections: [
            {
                heading: "1. Aceptación de Términos",
                content: "Al acceder y usar LibreShield, aceptas estar sujeto a los términos y disposiciones de este acuerdo. Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices este servicio."
            },
            {
                heading: "2. Propósito Educativo y Descargo",
                content: "LibreShield es una herramienta educativa diseñada para crear conciencia sobre privacidad digital y ciberseguridad. No reemplaza el asesoramiento legal profesional ni una auditoría de seguridad exhaustiva realizada por un experto certificado.",
                list: [
                    "Las puntuaciones proporcionadas por el 'Diagnóstico' son estimaciones heurísticas basadas en tus respuestas.",
                    "El medidor de 'Fortaleza de Contraseña' es una estimación matemática y no garantiza que una contraseña no pueda ser hackeada.",
                    "Utiliza esta herramienta como punto de partida, no como solución de seguridad definitiva."
                ]
            },
            {
                heading: "3. Licencia de Uso y Código Abierto",
                content: "LibreShield es un proyecto de código abierto licenciado bajo la Licencia MIT. Con respecto al uso de esta instancia alojada:",
                list: [
                    "Eres libre de copiar, modificar y distribuir el código fuente según la Licencia MIT.",
                    "Aceptas no utilizar este sitio web para ningún propósito ilegal, incluyendo pero no limitado al ciberacoso, hostigamiento o prueba de credenciales robadas.",
                    "Aceptas no intentar comprometer la seguridad o integridad de la infraestructura del sitio web."
                ]
            },
            {
                heading: "4. Conducta del Usuario",
                content: "Aceptas utilizar las herramientas proporcionadas (como el Generador de Contraseñas o el Limpiador de Enlaces) de manera responsable. No debes usar el 'Auditor de Contraseñas' para probar contraseñas que no te pertenecen o para las cuales no tienes autorización."
            },
            {
                heading: "5. Renuncia de Garantías",
                content: "Los materiales en el sitio web de LibreShield se proporcionan 'tal cual'. LibreShield no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías.",
            },
            {
                heading: "6. Limitaciones de Responsabilidad",
                content: "En ningún caso LibreShield o sus colaboradores serán responsables de ningún daño (incluidos, entre otros, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surjan del uso o la imposibilidad de usar los materiales en el sitio web de LibreShield."
            },
            {
                heading: "7. Precisión de los Materiales",
                content: "Los materiales que aparecen en el sitio web de LibreShield podrían incluir errores técnicos, tipográficos o fotográficos. LibreShield no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual."
            },
            {
                heading: "8. Enlaces a Sitios Externos",
                content: "LibreShield no ha revisado todos los sitios vinculados a su sitio web y no es responsable de los contenidos de dichos sitios vinculados. El uso de cualquier sitio web vinculado es bajo el propio riesgo del usuario."
            },
            {
                heading: "9. Modificaciones",
                content: "LibreShield puede revisar estos términos de servicio en cualquier momento sin previo aviso. Al utilizar este sitio web, aceptas estar sujeto a la versión actual."
            },
            {
                heading: "10. Ley Aplicable",
                content: "Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de las normas de la comunidad de código abierto y cualquier ley local aplicable donde residan los mantenedores del proyecto."
            }
        ]
    },
    privacy: {
        title: "Política de Privacidad",
        lastUpdated: "Enero 2024",
        sections: [
            {
                heading: "1. Privacidad por Diseño",
                content: "Nuestro principio fundamental es simple: No podemos perder tus datos si nunca los recopilamos. LibreShield está diseñado como una aplicación web de 'Conocimiento Cero'."
            },
            {
                heading: "2. Recolección de Información",
                content: "No recopilamos, almacenamos ni procesamos ninguna Información de Identificación Personal (PII) en nuestros servidores.",
                list: [
                    "No pedimos tu dirección de correo electrónico, nombre ni teléfono.",
                    "No rastreamos tu dirección IP para análisis.",
                    "No utilizamos Google Analytics, Facebook Pixel ni cookies de rastreo de terceros."
                ]
            },
            {
                heading: "3. Procesamiento Local y Ejecución Cliente",
                content: "Todas las herramientas funcionales en este sitio web se ejecutan completamente en tu dispositivo (Lado del Cliente).",
                list: [
                    "Generador y Bóveda: Utiliza la API Web Crypto. Las claves de cifrado se crean en la RAM de tu dispositivo y nunca se envían por la red.",
                    "Auditoría de Privacidad: Tus respuestas se almacenan en un estado temporal de JavaScript. Se borran al cerrar la pestaña (a menos que se guarden en Local Storage).",
                    "Limpiador y Lab de Imágenes: El procesamiento de archivos ocurre localmente en la memoria de tu navegador."
                ]
            },
            {
                heading: "4. Uso de Almacenamiento Local (Local Storage)",
                content: "Utilizamos la función de 'Almacenamiento Local' del navegador para mejorar tu experiencia. Estos datos permanecen en tu dispositivo y no son accesibles para nosotros.",
                list: [
                    "Preferencia de Tema: Para recordar si prefieres el Modo Oscuro o Claro.",
                    "Progreso de Evaluación: Para permitirte reanudar tu auditoría si cierras la página.",
                    "Preferencia de Idioma: Para recordar tu idioma seleccionado."
                ]
            },
            {
                heading: "5. Alojamiento y Registros",
                content: "Este sitio web está alojado en una Red de Entrega de Contenido (CDN). Estos proveedores pueden registrar automáticamente datos básicos de solicitud (IP, User Agent, Timestamp) con fines de seguridad (como protección DDoS). Los desarrolladores de LibreShield no acceden a estos registros para marketing."
            },
            {
                heading: "6. Seguridad de Datos",
                content: "Debido a que no almacenamos tus datos, no podemos descifrar tus archivos si pierdes tu contraseña. En la función 'Bóveda de Archivos', si pierdes tu clave de cifrado, tus datos se pierden irremediablemente. No guardamos claves de respaldo."
            },
            {
                heading: "7. Enlaces de Terceros",
                content: "Nuestro sitio web contiene enlaces a otros sitios web (ej: en el Privacy Hub). Ten en cuenta que estos sitios externos no son operados por nosotros. Te recomendamos revisar sus Políticas de Privacidad."
            },
            {
                heading: "8. Derechos (CCPA/GDPR)",
                content: "Dado que no recopilamos datos personales, no podemos venderlos, ni tenemos nada que eliminar si lo solicitas. Mantienes la propiedad total y el control de tus datos en todo momento."
            },
            {
                heading: "9. Privacidad de los Niños",
                content: "LibreShield no recopila a sabiendas ninguna Información de Identificación Personal de niños menores de 13 años. Si crees que tu hijo proporcionó este tipo de información, contáctanos inmediatamente, aunque técnicamente es imposible debido a nuestra política de no recolección."
            },
            {
                heading: "10. Contacto",
                content: "Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos abriendo un 'issue' en nuestro repositorio público de GitHub."
            }
        ]
    }
  },
  faq: {
    title: "Preguntas Frecuentes",
    subtitle: "Dudas comunes sobre privacidad y seguridad.",
    items: [
        { question: "¿Es LibreShield realmente gratis?", answer: "Sí, 100% gratis y de código abierto. No tenemos 'Plan Premium' ni mostramos anuncios.", icon: "heart" },
        { question: "¿Guardáis mis datos?", answer: "No. Todo corre localmente en tu navegador. Somos una 'Static Web App', lo que significa que el código se descarga y ejecuta en tu máquina, no en la nuestra.", icon: "database" },
        { question: "¿Qué pasa si pierdo la clave de la Bóveda?", answer: "Si cifras un archivo y olvidas la contraseña, los datos se pierden para siempre. Usamos cifrado AES-GCM, que es matemáticamente imposible de romper sin la clave. No guardamos tus contraseñas, así que no podemos recuperarlas.", icon: "lock" },
        { question: "¿Por qué el mapa de inicio es 'Simulado'?", answer: "Para respetar la privacidad de los usuarios, no rastreamos ubicaciones reales. El mapa visualiza nuestra misión global de forma abstracta, pero los puntos son aleatorios por estética.", icon: "globe" },
        { question: "¿Puedo confiar en el generador de claves?", answer: "Sí. Utiliza la API `Crypto.getRandomValues()` integrada en tu navegador, que es criptográficamente segura. Como el código es abierto, puedes verificar que no enviamos las contraseñas a ningún lado.", icon: "key" },
        { question: "¿Por qué recomendáis VPNs de pago?", answer: "Porque mantener un servidor VPN cuesta dinero (ancho de banda, electricidad, mantenimiento). Si una VPN es 'gratis', probablemente están vendiendo tus datos de navegación. Solo recomendamos servicios auditados y sostenibles.", icon: "wifi" },
        { question: "¿Qué es el 'Fingerprinting'?", answer: "Es una técnica usada por webs para identificarte sin cookies. Miran tu resolución, fuentes instaladas y hardware para crear una ID única. Nuestra herramienta te muestra lo que ven.", icon: "fingerprint" },
        { question: "¿Es seguro pegar mis contraseñas aquí?", answer: "Técnicamente sí, porque el código es local. Sin embargo, como hábito de seguridad, NO recomendamos pegar contraseñas bancarias reales en ninguna web. Usa el Auditor solo para pruebas.", icon: "shield" },
        { question: "¿Cómo funciona el Limpiador de Enlaces?", answer: "Los correos de marketing añaden parámetros como `?utm_source=...` para rastrearte. Nuestra herramienta analiza la URL y elimina estos parámetros conocidos, dejando el enlace limpio.", icon: "scissors" },
        { question: "¿Puedo usar esto sin internet?", answer: "¡Sí! Una vez cargada la web, puedes desconectarte y todas las herramientas funcionarán perfectamente.", icon: "wifi" },
        { question: "¿Encontré un error, dónde lo reporto?", answer: "Por favor visita nuestro repositorio en GitHub (enlace en el pie de página) y abre un Issue. Agradecemos el feedback de la comunidad.", icon: "code" }
    ],
    contactTitle: "¿Aún tienes dudas?",
    contactBtn: "Contactar en GitHub"
  },
  recs: {
    android: { title: "Blinda tu Android", desc: "Tu dispositivo Android envía muchos datos a Google. Aprende a minimizarlo." },
    updates: { title: "Actualiza tus dispositivos" },
    passwords: { title: "Deja de reutilizar contraseñas" },
    generic: { title: "Mejora tu privacidad", desc: "Revisa nuestras herramientas para aprender más." }
  }
};

export const translations: Record<Language, Translation> = {
  es: baseES,
  en: baseEN,
};

export const LANGUAGES: { code: Language; name: string; flag: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'en', name: 'English', flag: '🇺🇸', dir: 'ltr' },
];
