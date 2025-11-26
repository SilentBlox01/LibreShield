

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/ui/Button';
import { 
  Copy, 
  RefreshCw, 
  Check, 
  Lock, 
  Shield, 
  Settings, 
  Link as LinkIcon, 
  Scissors, 
  Globe, 
  Fingerprint, 
  KeyRound,
  EyeOff,
  AlertTriangle,
  Cpu,
  Wrench,
  ExternalLink,
  Search,
  UserX,
  Zap,
  Battery,
  HardDrive,
  Terminal,
  Maximize,
  Layers,
  FileLock,
  Camera,
  Mic,
  MapPin,
  Bell,
  Wifi,
  Smartphone,
  Loader2,
  Image as ImageIcon,
  Music,
  ShieldCheck,
  ShieldAlert,
  Info,
  X,
  File as FileIcon,
  Download,
  Upload,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';
import { useApp } from '../context/AppContext';

// --- CONSTANTS ---

type ToolCategory = 'keys' | 'privacy' | 'utils';

// Helper: SHA-1 for Pwned Passwords API
async function sha1(str: string) {
  const buffer = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest('SHA-1', buffer);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
}

// Helper: Simple SHA-256 for internal fingerprint hashing
async function sha256(str: string) {
  const buffer = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest('SHA-256', buffer);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Helper: Simple XOR Cipher
const xorCipher = (text: string, pass: string) => {
    if (!pass) return text;
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ pass.charCodeAt(i % pass.length));
    }
    return result;
};

// Helper: Base64 Encode/Decode
const b64Encode = (str: string) => window.btoa(unescape(encodeURIComponent(str)));
const b64Decode = (str: string) => decodeURIComponent(escape(window.atob(str)));

// Helper: CSPRNG Char
const getRandomChar = (source: string) => {
    const values = new Uint32Array(1);
    window.crypto.getRandomValues(values);
    return source[values[0] % source.length];
};

// Helper: Fisher-Yates Shuffle
const secureShuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const jValues = new Uint32Array(1);
        window.crypto.getRandomValues(jValues);
        const j = jValues[0] % (i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
};

// --- UI COMPONENTS ---

const ScoreRing = ({ score, colorClass }: { score: number, colorClass: string }) => {
  const radius = 36;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-24 h-24">
      <svg height={radius * 2} width={radius * 2} className="transform -rotate-90 drop-shadow-sm">
        <circle
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="text-slate-100 dark:text-slate-800"
        />
        <circle
          stroke="currentColor"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 1s ease-out' }}
          strokeLinecap="round"
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className={colorClass}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className={`text-2xl font-black ${colorClass}`}>{score}</span>
      </div>
    </div>
  );
};

const Widget = ({ icon, label, value, color }: { icon: any, label: string, value: any, color: string }) => (
    <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl flex items-center gap-4 hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md group">
        <div className={`p-3 rounded-xl ${color} text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </div>
        <div className="overflow-hidden">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">{label}</p>
            <p className="text-slate-800 dark:text-slate-200 font-semibold truncate" title={typeof value === 'string' ? value : ''}>{value}</p>
        </div>
    </div>
);

export const Tools: React.FC = () => {
  const { t } = useApp();
  const [activeCategory, setActiveCategory] = useState<ToolCategory>('keys');

  // --- Password Generator State ---
  const [genLength, setGenLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [generatedPass, setGeneratedPass] = useState('');
  const [passCopied, setPassCopied] = useState(false);

  // --- Auditor State (Entropy & Pwned) ---
  const [testPass, setTestPass] = useState('');
  const [isCheckingPwned, setIsCheckingPwned] = useState(false);
  const [pwnedCount, setPwnedCount] = useState<number | null>(null);
  const [entropy, setEntropy] = useState(0);
  const [crackTime, setCrackTime] = useState<string>('');
  
  // --- Link Cleaner State ---
  const [dirtyLink, setDirtyLink] = useState('');
  const [cleanLink, setCleanLink] = useState('');
  const [paramsRemoved, setParamsRemoved] = useState(0);
  const [linkAnalysis, setLinkAnalysis] = useState<{score: number, label: string, color: string, ringColor: string, flags: string[]} | null>(null);

  // --- Device Info State ---
  const [deviceInfo, setDeviceInfo] = useState<any>(null);
  const [loadingFingerprint, setLoadingFingerprint] = useState(true);

  // --- Token Generator State ---
  const [tokenLength, setTokenLength] = useState(32);
  const [tokenOpts, setTokenOpts] = useState({ upper: true, lower: true, numbers: true, symbols: true });
  const [generatedToken, setGeneratedToken] = useState('');
  const [tokenCopied, setTokenCopied] = useState(false);

  // --- Secure Message State ---
  const [msgMode, setMsgMode] = useState<'encrypt' | 'decrypt'>('encrypt');
  const [msgInput, setMsgInput] = useState('');
  const [msgKey, setMsgKey] = useState('');
  const [msgOutput, setMsgOutput] = useState('');
  const [msgCopied, setMsgCopied] = useState(false);

  // --- File Vault State ---
  const [vaultFile, setVaultFile] = useState<File | null>(null);
  const [vaultPass, setVaultPass] = useState('');
  const [vaultProcessing, setVaultProcessing] = useState(false);
  const [vaultResultUrl, setVaultResultUrl] = useState<string | null>(null);
  const [vaultResultName, setVaultResultName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Permissions Scanner State ---
  const [perms, setPerms] = useState<any[]>([]);

  // --- INIT ---
  useEffect(() => {
    generatePassword();
    generateToken();
    getFingerprint();
    checkPermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- Auditor Logic (Pwned + Entropy) ---
  useEffect(() => {
    const checkPwned = async () => {
      if (!testPass) {
        setPwnedCount(null);
        setEntropy(0);
        setCrackTime('');
        return;
      }
      
      // Calculate Entropy
      const len = testPass.length;
      let pool = 0;
      if (/[a-z]/.test(testPass)) pool += 26;
      if (/[A-Z]/.test(testPass)) pool += 26;
      if (/\d/.test(testPass)) pool += 10;
      if (/[^a-zA-Z0-9]/.test(testPass)) pool += 33; // Symbols
      
      const entropyBits = Math.floor(len * Math.log2(Math.max(1, pool)));
      setEntropy(entropyBits);

      // Estimate Crack Time (Realistic GPU Cluster / Specialized Hardware)
      // Assuming a high-end Multi-GPU rig can do ~500 Billion Hashes/sec (e.g. NTLM/MD5 on multiple RTX 4090s)
      // This is a conservative "Worst Case" (Fast Hash) scenario.
      const guessesPerSec = 500_000_000_000; 
      
      const seconds = Math.pow(2, entropyBits) / guessesPerSec;
      let timeString = t.tools.instant;
      
      if (seconds > 0.000001) {
          if (seconds < 60) timeString = `~${Math.ceil(seconds)}s`;
          else if (seconds < 3600) timeString = `~${Math.ceil(seconds/60)}m`;
          else if (seconds < 86400) timeString = `~${Math.ceil(seconds/3600)}h`;
          else if (seconds < 2592000) timeString = `~${Math.ceil(seconds/86400)}d`; // days
          else if (seconds < 31536000) timeString = `~${Math.ceil(seconds/2592000)}mo`; // months
          else if (seconds < 3153600000) timeString = `~${Math.ceil(seconds/31536000)}y`; // years
          else timeString = "> 100y"; // centuries
      }
      
      setCrackTime(timeString);
      
      setIsCheckingPwned(true);
      try {
        const hash = await sha1(testPass);
        const prefix = hash.substring(0, 5);
        const suffix = hash.substring(5);
        
        const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
        if (!response.ok) throw new Error('API Error');
        
        const text = await response.text();
        const lines = text.split('\n');
        const match = lines.find(line => line.startsWith(suffix));
        
        if (match) {
          const count = parseInt(match.split(':')[1], 10);
          setPwnedCount(count);
        } else {
          setPwnedCount(0);
        }
      } catch (error) {
        setPwnedCount(null);
      } finally {
        setIsCheckingPwned(false);
      }
    };

    const timeoutId = setTimeout(() => {
        if(testPass.length > 0) checkPwned();
        else {
            setPwnedCount(null);
            setEntropy(0);
            setCrackTime('');
        }
    }, 500); 

    return () => clearTimeout(timeoutId);
  }, [testPass, t]);

  const checkPermissions = async () => {
    if (!navigator.permissions) return;
    
    const permissionsToCheck = [
        { name: 'camera', label: t.tools.perms.camera, icon: <Camera size={18} /> },
        { name: 'microphone', label: t.tools.perms.mic, icon: <Mic size={18} /> },
        { name: 'geolocation', label: t.tools.perms.location, icon: <MapPin size={18} /> },
        { name: 'notifications', label: t.tools.perms.notifications, icon: <Bell size={18} /> },
    ];

    const results = await Promise.all(permissionsToCheck.map(async (p) => {
        try {
            // @ts-ignore
            const status = await navigator.permissions.query({ name: p.name });
            return { ...p, state: status.state };
        } catch (e) {
            return { ...p, state: 'unsupported' };
        }
    }));
    setPerms(results);
  };

  // ... (Fingerprinting Functions preserved) ...
  const getCanvasFingerprint = async () => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return 'Not Supported';
      
      ctx.textBaseline = "top";
      ctx.font = "14px 'Arial'";
      ctx.textBaseline = "alphabetic";
      ctx.fillStyle = "#f60";
      ctx.fillRect(125, 1, 62, 20);
      ctx.fillStyle = "#069";
      ctx.fillText("LibreShield", 2, 15);
      ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
      ctx.fillText("LibreShield", 4, 17);
      
      const dataURI = canvas.toDataURL();
      const hash = await sha256(dataURI);
      return hash.substring(0, 16);
    } catch (e) {
      return 'Error';
    }
  };

  const getAudioFingerprint = async () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return 'Not Supported';
      
      const context = new AudioContext();
      const fingerprintString = `${context.state}-${context.sampleRate}-${context.destination.maxChannelCount}`;
      const hash = await sha256(fingerprintString);
      
      context.close();
      return hash.substring(0, 16);
    } catch (e) {
        return 'Error';
    }
  };

  const getWebGLRenderer = () => {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return 'Not Supported';
        const debugInfo = (gl as any).getExtension('WEBGL_debug_renderer_info');
        if (!debugInfo) return 'Masked';
        const renderer = (gl as any).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        return renderer || 'Generic WebGL';
    } catch (e) {
        return 'Blocked';
    }
  };

  const getFingerprint = async () => {
    setLoadingFingerprint(true);
    const ua = navigator.userAgent;
    let os = t.tools.deviceInfo.os;
    if (ua.indexOf("Win") !== -1) os = "Windows";
    if (ua.indexOf("Mac") !== -1) os = "macOS";
    if (ua.indexOf("Linux") !== -1) os = "Linux";
    if (ua.indexOf("Android") !== -1) os = "Android";
    if (ua.indexOf("iPhone") !== -1) os = "iOS";

    let browser = t.tools.deviceInfo.browser;
    if (ua.indexOf("Firefox") !== -1) browser = "Firefox";
    else if (ua.indexOf("Chrome") !== -1) browser = "Chrome";
    else if (ua.indexOf("Safari") !== -1) browser = "Safari";
    else if (ua.indexOf("Edg") !== -1) browser = "Edge";

    const canvasHash = await getCanvasFingerprint();
    const audioHash = await getAudioFingerprint();
    const webGLRenderer = getWebGLRenderer();

    let batteryLevel = '?';
    if ((navigator as any).getBattery) {
        try {
            const battery = await (navigator as any).getBattery();
            batteryLevel = `${Math.round(battery.level * 100)}%`;
        } catch (e) {}
    }

    let connectionType = '?';
    const conn = (navigator as any).connection;
    if (conn) {
        connectionType = conn.effectiveType || '4g';
    }

    setDeviceInfo({
        browser,
        os,
        deviceType: /Mobile|Android|iP(hone|od)/.test(ua) ? t.tools.deviceInfo.mobile : t.tools.deviceInfo.desktop,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        cores: navigator.hardwareConcurrency || '?',
        memory: (navigator as any).deviceMemory ? `~${(navigator as any).deviceMemory} GB` : '?',
        canvasHash,
        audioHash,
        webGL: webGLRenderer,
        battery: batteryLevel,
        connection: connectionType,
        doNotTrack: navigator.doNotTrack || 'No',
    });
    setLoadingFingerprint(false);
  };

  // --- Logic ---
  const generateString = (length: number, useLower: boolean, useUpper: boolean, useNum: boolean, useSym: boolean) => {
    const lowers = 'abcdefghijklmnopqrstuvwxyz';
    const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let chars = '';
    if (useLower) chars += lowers;
    if (useUpper) chars += uppers;
    if (useNum) chars += numbers;
    if (useSym) chars += symbols;
    
    if (chars === '') return '';

    let resultArr = [];
    if(useLower) resultArr.push(getRandomChar(lowers));
    if(useUpper) resultArr.push(getRandomChar(uppers));
    if(useNum) resultArr.push(getRandomChar(numbers));
    if(useSym) resultArr.push(getRandomChar(symbols));

    while (resultArr.length < length) {
        resultArr.push(getRandomChar(chars));
    }

    return secureShuffle(resultArr);
  };

  const copyToClipboard = (text: string, setCopiedFn: (val: boolean) => void) => {
    if (!text || text === 'Selecciona opciones') return;
    navigator.clipboard.writeText(text);
    setCopiedFn(true);
    setTimeout(() => setCopiedFn(false), 2000);
  };

  const generatePassword = () => {
    if (!useUpper && !useLower && !useNumbers && !useSymbols) {
        setGeneratedPass('...');
        return;
    }
    const pass = generateString(genLength, useLower, useUpper, useNumbers, useSymbols);
    setGeneratedPass(pass);
    setPassCopied(false);
  };

  const generateToken = () => {
    const token = generateString(tokenLength, tokenOpts.lower, tokenOpts.upper, tokenOpts.numbers, tokenOpts.symbols);
    setGeneratedToken(token);
    setTokenCopied(false);
  };

  const analyzeUrl = () => {
    if (!dirtyLink) return;
    try {
        let urlString = dirtyLink;
        if (!urlString.startsWith('http://') && !urlString.startsWith('https://')) {
            urlString = 'http://' + urlString;
        }
        
        const url = new URL(urlString);
        const paramsToDelete: string[] = [];
        const trackingParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid', 'ref', 'si', 'igsh', 'share_id', '_hsenc', '_hsmi', 'mc_cid', 'mc_eid'];
        
        url.searchParams.forEach((_, key) => {
            if (trackingParams.some(p => key.startsWith(p))) {
            paramsToDelete.push(key);
            }
        });

        paramsToDelete.forEach(p => url.searchParams.delete(p));
        setParamsRemoved(paramsToDelete.length);
        setCleanLink(url.toString());

        // Heuristic
        let riskScore = 100; 
        let flags: string[] = [];

        if (url.protocol === 'http:') {
            riskScore -= 30;
            flags.push('No Encriptado (HTTP)');
        }
        if (/^(\d{1,3}\.){3}\d{1,3}$/.test(url.hostname)) {
            riskScore -= 40;
            flags.push('Host es IP (Sospechoso)');
        }
        if (url.hostname.length > 40) {
            riskScore -= 15;
            flags.push('URL muy larga');
        }
        if (urlString.includes('@')) {
            riskScore -= 25;
            flags.push('Contiene "@"');
        }
        const riskyTLDs = ['.xyz', '.top', '.work', '.loan', '.click'];
        if (riskyTLDs.some(tld => url.hostname.endsWith(tld))) {
            riskScore -= 20;
            flags.push(`Dominio de riesgo (${url.hostname.split('.').pop()})`);
        }

        let label = t.tools.riskSafe;
        let color = 'text-emerald-500';
        let ringColor = 'text-emerald-500';
        
        if (riskScore < 50) {
            label = t.tools.riskDangerous;
            color = 'text-red-500';
            ringColor = 'text-red-500';
        } else if (riskScore < 80) {
            label = t.tools.riskSuspicious;
            color = 'text-amber-500';
            ringColor = 'text-amber-500';
        }

        setLinkAnalysis({ score: Math.max(0, riskScore), label, color, ringColor, flags });

    } catch (e) {
        setCleanLink("URL no válida");
        setParamsRemoved(0);
        setLinkAnalysis(null);
    }
  };

  const processSecureMessage = () => {
    if (!msgInput || !msgKey) {
        setMsgOutput(t.tools.msgErrorKey);
        return;
    }
    try {
        if (msgMode === 'encrypt') {
            const encoded = b64Encode(xorCipher(msgInput, msgKey));
            setMsgOutput(encoded);
        } else {
            try {
                const decoded = xorCipher(b64Decode(msgInput), msgKey);
                setMsgOutput(decoded);
            } catch (e) {
                setMsgOutput(t.tools.msgErrorInvalid);
            }
        }
    } catch (e) {
        setMsgOutput("Error");
    }
    setMsgCopied(false);
  };

  // --- FILE VAULT CRYPTO LOGIC ---
  async function getPasswordKey(password: string) {
    const enc = new TextEncoder();
    return window.crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveKey"]);
  }
  
  async function deriveKey(passwordKey: CryptoKey, salt: Uint8Array, usage: KeyUsage[]) {
    return window.crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: salt, iterations: 100000, hash: "SHA-256" },
      passwordKey,
      { name: "AES-GCM", length: 256 },
      false,
      usage
    );
  }

  const processVaultFile = async (mode: 'encrypt' | 'decrypt') => {
      if (!vaultFile || !vaultPass) return;
      setVaultProcessing(true);
      setVaultResultUrl(null);
      
      try {
        const fileData = await vaultFile.arrayBuffer();
        
        if (mode === 'encrypt') {
            const salt = window.crypto.getRandomValues(new Uint8Array(16));
            const iv = window.crypto.getRandomValues(new Uint8Array(12));
            const passwordKey = await getPasswordKey(vaultPass);
            const aesKey = await deriveKey(passwordKey, salt, ["encrypt"]);
            const encryptedContent = await window.crypto.subtle.encrypt(
                { name: "AES-GCM", iv: iv },
                aesKey,
                fileData
            );
            
            const buffer = new Uint8Array(salt.byteLength + iv.byteLength + encryptedContent.byteLength);
            buffer.set(salt, 0);
            buffer.set(iv, 16);
            buffer.set(new Uint8Array(encryptedContent), 28);
            
            const blob = new Blob([buffer], { type: "application/octet-stream" });
            setVaultResultUrl(URL.createObjectURL(blob));
            setVaultResultName(vaultFile.name + ".enc");
        } else {
            const arr = new Uint8Array(fileData);
            const salt = arr.slice(0, 16);
            const iv = arr.slice(16, 28);
            const data = arr.slice(28);
            
            const passwordKey = await getPasswordKey(vaultPass);
            const aesKey = await deriveKey(passwordKey, salt, ["decrypt"]);
            const decryptedContent = await window.crypto.subtle.decrypt(
                { name: "AES-GCM", iv: iv },
                aesKey,
                data
            );
            
            const blob = new Blob([decryptedContent], { type: "application/octet-stream" });
            setVaultResultUrl(URL.createObjectURL(blob));
            setVaultResultName(vaultFile.name.replace(".enc", ""));
        }
      } catch (e) {
        alert(t.tools.vaultError);
      }
      setVaultProcessing(false);
  };

  const ToggleSwitch = ({ label, checked, onChange }: { label: string, checked: boolean, onChange: (val: boolean) => void }) => (
    <div 
      onClick={() => onChange(!checked)}
      className={`flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer border transition-all duration-200 active:scale-[0.95] ${
        checked 
        ? 'bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-500/30' 
        : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
      }`}
    >
      <span className="font-bold text-lg">{label}</span>
      <div className={`w-full h-1 mt-2 rounded-full ${checked ? 'bg-white/50' : 'bg-transparent'}`}></div>
    </div>
  );

  const CategoryTab = ({ id, label, icon }: { id: ToolCategory, label: string, icon: React.ReactNode }) => (
    <button
      onClick={() => setActiveCategory(id)}
      className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-bold text-sm md:text-base ${
        activeCategory === id 
          ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg transform scale-105' 
          : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">{t.tools.title}</h1>
        <div className="flex justify-center flex-wrap gap-4">
            <CategoryTab id="keys" label={t.tools.tabKeys} icon={<KeyRound size={18} />} />
            <CategoryTab id="privacy" label={t.tools.tabPrivacy} icon={<Fingerprint size={18} />} />
            <CategoryTab id="utils" label={t.tools.tabUtils} icon={<Wrench size={18} />} />
        </div>
      </div>

      {/* Content Area */}
      <div className="animate-fade-in min-h-[600px]">
        
        {/* === KEYS === */}
        {activeCategory === 'keys' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-up">
            {/* Generator */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-full">
              <div className="p-8 pb-0">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3.5 bg-gradient-to-br from-primary-400 to-primary-600 text-white rounded-2xl shadow-lg shadow-primary-500/30">
                        <RefreshCw size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.tools.genTitle}</h2>
                </div>

                <div 
                    className="bg-slate-900 dark:bg-black h-40 rounded-[2rem] relative overflow-hidden group cursor-pointer flex items-center justify-center p-6 text-center shadow-inner" 
                    onClick={() => copyToClipboard(generatedPass, setPassCopied)}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-purple-900/20"></div>
                    <p className="relative z-10 font-mono text-3xl text-white break-all tracking-wider font-bold group-hover:scale-105 transition-transform duration-300">
                        {generatedPass}
                    </p>
                    <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-xl text-white/70 hover:bg-white/20 hover:text-white transition-all">
                        {passCopied ? <Check size={20} /> : <Copy size={20} />}
                    </div>
                </div>
              </div>

              <div className="p-8 space-y-8 flex-grow">
                <div>
                    <div className="flex justify-between mb-4 text-sm font-bold text-slate-500 uppercase tracking-wider">
                        <span>{t.common.all === 'Todos' ? 'Longitud' : 'Length'}</span>
                        <span>{genLength}</span>
                    </div>
                    <input 
                        type="range" min="8" max="32" value={genLength} 
                        onChange={(e) => { setGenLength(parseInt(e.target.value)); setPassCopied(false); }}
                        className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-primary-600"
                    />
                </div>
                
                <div className="grid grid-cols-4 gap-3">
                    <ToggleSwitch label="ABC" checked={useUpper} onChange={(v) => { setUseUpper(v); setPassCopied(false); }} />
                    <ToggleSwitch label="abc" checked={useLower} onChange={(v) => { setUseLower(v); setPassCopied(false); }} />
                    <ToggleSwitch label="123" checked={useNumbers} onChange={(v) => { setUseNumbers(v); setPassCopied(false); }} />
                    <ToggleSwitch label="#@&" checked={useSymbols} onChange={(v) => { setUseSymbols(v); setPassCopied(false); }} />
                </div>
              </div>
              
              <div className="p-6 border-t border-slate-100 dark:border-slate-800">
                <Button fullWidth onClick={generatePassword} className="py-4 text-lg rounded-2xl">{t.tools.regenerate}</Button>
              </div>
            </div>

            {/* Auditor with Entropy Meter */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-full">
              <div className="p-8 pb-0">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3.5 bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-500/30">
                        <Shield size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.tools.auditTitle}</h2>
                </div>

                <div className="relative mb-8">
                    <Lock size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                        type="text" 
                        value={testPass}
                        onChange={(e) => setTestPass(e.target.value)}
                        placeholder="Auditar..."
                        className="w-full pl-14 pr-12 py-5 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all text-lg font-bold"
                    />
                    {isCheckingPwned && <Loader2 size={24} className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-500 animate-spin" />}
                </div>
              </div>

              <div className="p-8 pt-0 flex-grow">
                {testPass ? (
                    <div className="space-y-6 animate-fade-in">
                        {/* Real-time Pwned Check */}
                        {pwnedCount !== null && pwnedCount > 0 && (
                             <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-100 dark:border-red-900/50 flex items-start gap-4 animate-shake">
                                <AlertTriangle className="text-red-600 dark:text-red-400 shrink-0" size={28} />
                                <div>
                                    <h3 className="text-xl font-black text-red-700 dark:text-red-400 mb-1">{t.tools.compromised}</h3>
                                    <p className="text-red-600 dark:text-red-300 text-sm font-medium leading-relaxed">
                                        {pwnedCount.toLocaleString()} hits found in data breaches.
                                    </p>
                                </div>
                             </div>
                        )}
                        
                        {/* Entropy Meter (Always visible) */}
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-1 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{t.tools.entropyBits}</p>
                                    <p className={`text-2xl font-black ${entropy < 45 ? 'text-red-500' : entropy < 70 ? 'text-amber-500' : 'text-emerald-500'}`}>
                                        {entropy} <span className="text-sm text-slate-400 font-medium">bits</span>
                                    </p>
                                </div>
                                <div className="flex-1 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{t.tools.crackTime}</p>
                                    <p className="text-xl font-bold text-slate-700 dark:text-slate-200">{crackTime}</p>
                                </div>
                            </div>
                            
                            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full transition-all duration-500 ${entropy < 45 ? 'bg-red-500' : entropy < 70 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                                    style={{ width: `${Math.min(100, entropy)}%` }}
                                ></div>
                            </div>
                            <p className="text-center text-sm font-medium text-slate-500">
                                {entropy < 45 ? t.tools.weak : entropy < 70 ? t.tools.medium : t.tools.excellent}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-40 text-slate-300 dark:text-slate-700">
                        <KeyRound size={48} strokeWidth={1} className="mb-2" />
                        <p className="font-medium text-sm opacity-50">...</p>
                    </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* === PRIVACY === */}
        {activeCategory === 'privacy' && (
           <div className="grid grid-cols-1 gap-8 animate-fade-in-up">
              
              {/* Social Shortcuts */}
              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 p-8">
                  <div className="flex items-center gap-4 mb-8">
                      <div className="p-3.5 bg-gradient-to-br from-blue-400 to-sky-600 text-white rounded-2xl shadow-lg shadow-blue-500/30">
                          <ExternalLink size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.tools.socialTitle}</h2>
                        <p className="text-slate-500 dark:text-slate-400">{t.tools.socialDesc}</p>
                      </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <a href="https://myaccount.google.com/data-and-privacy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-100 dark:border-slate-700 transition-all group">
                          <div className="bg-white p-2 rounded-full shadow-sm text-blue-500"><Search size={20} /></div>
                          <span className="font-bold text-slate-700 dark:text-slate-200">Google Privacy</span>
                          <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                      </a>
                      <a href="https://www.facebook.com/settings?tab=privacy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-100 dark:border-slate-700 transition-all group">
                          <div className="bg-blue-600 p-2 rounded-full shadow-sm text-white"><Facebook size={20} /></div>
                          <span className="font-bold text-slate-700 dark:text-slate-200">Facebook</span>
                          <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                      </a>
                      <a href="https://www.instagram.com/accounts/privacy_and_security/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-pink-50 dark:hover:bg-pink-900/20 border border-slate-100 dark:border-slate-700 transition-all group">
                          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-2 rounded-full shadow-sm text-white"><Instagram size={20} /></div>
                          <span className="font-bold text-slate-700 dark:text-slate-200">Instagram</span>
                          <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-pink-500" />
                      </a>
                      <a href="https://twitter.com/settings/privacy_and_safety" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-900/20 border border-slate-100 dark:border-slate-700 transition-all group">
                          <div className="bg-black p-2 rounded-full shadow-sm text-white"><Twitter size={20} /></div>
                          <span className="font-bold text-slate-700 dark:text-slate-200">X (Twitter)</span>
                          <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-sky-500" />
                      </a>
                      <a href="https://www.linkedin.com/psettings/data-privacy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-slate-100 dark:border-slate-700 transition-all group">
                          <div className="bg-blue-700 p-2 rounded-full shadow-sm text-white"><Linkedin size={20} /></div>
                          <span className="font-bold text-slate-700 dark:text-slate-200">LinkedIn</span>
                          <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                      </a>
                  </div>
              </div>

              {/* Fingerprint */}
              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 p-8">
                  <div className="flex items-center gap-4 mb-8">
                      <div className="p-3.5 bg-gradient-to-br from-amber-400 to-orange-600 text-white rounded-2xl shadow-lg shadow-amber-500/30">
                          <Fingerprint size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.tools.fingerprintTitle}</h2>
                        <p className="text-slate-500 dark:text-slate-400">{t.tools.fingerprintDesc}</p>
                      </div>
                  </div>

                  {loadingFingerprint ? (
                      <div className="flex justify-center py-12"><Loader2 className="animate-spin text-amber-500" size={40} /></div>
                  ) : deviceInfo ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          <Widget icon={<Globe size={20} />} label={t.tools.deviceInfo.browser} value={deviceInfo.browser} color="bg-blue-500" />
                          <Widget icon={<Cpu size={20} />} label={t.tools.deviceInfo.os} value={deviceInfo.os} color="bg-slate-600" />
                          <Widget icon={<Maximize size={20} />} label={t.tools.deviceInfo.screen} value={deviceInfo.screenSize} color="bg-purple-500" />
                          <Widget icon={<Battery size={20} />} label={t.tools.deviceInfo.battery} value={deviceInfo.battery} color="bg-green-500" />
                          <Widget icon={<Wifi size={20} />} label={t.tools.deviceInfo.connection} value={deviceInfo.connection} color="bg-sky-500" />
                          <Widget icon={<Layers size={20} />} label="Cores / RAM" value={`${deviceInfo.cores} / ${deviceInfo.memory}`} color="bg-indigo-500" />
                          <Widget icon={<ImageIcon size={20} />} label="Canvas ID" value={deviceInfo.canvasHash.substring(0, 8)} color="bg-pink-500" />
                          <Widget icon={<Music size={20} />} label="Audio ID" value={deviceInfo.audioHash.substring(0, 8)} color="bg-rose-500" />
                      </div>
                  ) : null}
              </div>

              {/* Leaks & Permissions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 p-8">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                          <UserX className="text-red-500" /> {t.tools.leaksTitle}
                      </h3>
                      <div className="space-y-3">
                          <a href="https://haveibeenpwned.com/" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-900/20 border border-slate-100 dark:border-slate-700 transition-all group">
                              <div className="flex justify-between items-center">
                                  <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-red-600">Have I Been Pwned?</span>
                                  <ExternalLink size={18} className="text-slate-400 group-hover:text-red-500" />
                              </div>
                          </a>
                          <a href="https://monitor.firefox.com/" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-orange-50 dark:hover:bg-orange-900/20 border border-slate-100 dark:border-slate-700 transition-all group">
                              <div className="flex justify-between items-center">
                                  <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-orange-600">Firefox Monitor</span>
                                  <ExternalLink size={18} className="text-slate-400 group-hover:text-orange-500" />
                              </div>
                          </a>
                      </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 p-8">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                          <Lock className="text-teal-500" /> {t.tools.permissionsTitle}
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                          {perms.map(p => (
                              <div key={p.name} className={`p-3 rounded-xl border ${p.state === 'granted' ? 'bg-red-50 border-red-100 dark:bg-red-900/10 dark:border-red-900/30' : 'bg-slate-50 border-slate-100 dark:bg-slate-800 dark:border-slate-700'}`}>
                                  <div className="flex justify-between items-start mb-2">
                                      <span className={p.state === 'granted' ? 'text-red-500' : 'text-slate-400'}>{p.icon}</span>
                                      <div className={`w-2 h-2 rounded-full ${p.state === 'granted' ? 'bg-red-500 animate-pulse' : 'bg-slate-300'}`}></div>
                                  </div>
                                  <p className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">{p.label}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
           </div>
        )}

        {/* === UTILS === */}
        {activeCategory === 'utils' && (
           <div className="grid grid-cols-1 gap-8 animate-fade-in-up">
               
               {/* File Vault */}
               <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden p-8">
                   <div className="flex items-center gap-4 mb-8">
                       <div className="p-3.5 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white rounded-2xl shadow-lg shadow-emerald-500/30">
                           <FileLock size={24} />
                       </div>
                       <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.tools.vaultTitle}</h2>
                            <p className="text-slate-500 dark:text-slate-400">{t.tools.vaultDesc}</p>
                       </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="border-4 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center cursor-pointer hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-all flex flex-col items-center justify-center min-h-[200px]"
                       >
                           <input type="file" ref={fileInputRef} onChange={(e) => setVaultFile(e.target.files?.[0] || null)} className="hidden" />
                           {vaultFile ? (
                               <>
                                   <FileIcon size={40} className="text-emerald-500 mb-4" />
                                   <span className="font-bold text-lg text-slate-900 dark:text-white break-all">{vaultFile.name}</span>
                                   <span className="text-sm text-slate-500">{(vaultFile.size / 1024).toFixed(2)} KB</span>
                               </>
                           ) : (
                               <>
                                   <Upload size={40} className="text-slate-300 dark:text-slate-600 mb-4" />
                                   <span className="font-bold text-slate-500 dark:text-slate-400">{t.tools.vaultDrop}</span>
                               </>
                           )}
                       </div>

                       <div className="space-y-6 flex flex-col justify-center">
                           <div className="space-y-2">
                               <input 
                                   type="password" 
                                   value={vaultPass}
                                   onChange={(e) => setVaultPass(e.target.value)}
                                   placeholder={t.tools.vaultPassPlaceholder}
                                   className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-emerald-500 focus:outline-none"
                               />
                               <p className="text-xs text-slate-400 flex items-center gap-1"><Info size={12} /> {t.tools.vaultDesc}</p>
                           </div>
                           
                           <div className="grid grid-cols-2 gap-4">
                               <Button 
                                    onClick={() => processVaultFile('encrypt')} 
                                    disabled={!vaultFile || !vaultPass || vaultProcessing}
                                    variant="primary" 
                                    className="bg-emerald-600 hover:bg-emerald-700"
                               >
                                   {vaultProcessing ? <Loader2 className="animate-spin" /> : t.tools.vaultEncryptBtn}
                               </Button>
                               <Button 
                                    onClick={() => processVaultFile('decrypt')} 
                                    disabled={!vaultFile || !vaultPass || vaultProcessing}
                                    variant="outline"
                                    className="border-slate-200 hover:border-emerald-500 hover:text-emerald-600"
                               >
                                   {vaultProcessing ? <Loader2 className="animate-spin" /> : t.tools.vaultDecryptBtn}
                               </Button>
                           </div>

                           {vaultResultUrl && (
                               <a href={vaultResultUrl} download={vaultResultName} className="block mt-4">
                                   <Button fullWidth className="bg-slate-900 text-white hover:bg-black gap-2">
                                       <Download size={18} /> {t.tools.vaultDownload}
                                   </Button>
                               </a>
                           )}
                       </div>
                   </div>
               </div>

               {/* Link Cleaner Pro */}
               <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden p-8">
                   <div className="flex items-center gap-4 mb-8">
                       <div className="p-3.5 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/30">
                           <Scissors size={24} />
                       </div>
                       <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.tools.cleanerTitle}</h2>
                   </div>

                   <div className="flex flex-col lg:flex-row gap-8 items-start">
                       {/* Input Section */}
                       <div className="w-full lg:w-1/2 space-y-6">
                           <div className="relative group">
                               <div className="absolute left-5 top-5 text-slate-400"><LinkIcon size={20} /></div>
                               <textarea 
                                   value={dirtyLink}
                                   onChange={(e) => setDirtyLink(e.target.value)}
                                   placeholder={t.tools.cleanerPlaceholder}
                                   className="w-full pl-14 pr-4 py-4 min-h-[140px] bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none transition-all font-medium text-lg resize-none"
                               />
                           </div>
                           <Button onClick={analyzeUrl} fullWidth className="py-4 text-lg rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20">
                               {t.tools.analyze}
                           </Button>
                       </div>

                       {/* Results Section */}
                       <div className="w-full lg:w-1/2 min-h-[200px] bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 flex flex-col justify-center">
                           {!cleanLink ? (
                               <div className="text-center text-slate-400">
                                   <Search size={48} className="mx-auto mb-3 opacity-20" />
                                   <p>{t.tools.cleanerResults}</p>
                               </div>
                           ) : (
                               <div className="space-y-6 animate-fade-in">
                                   {/* Score Header */}
                                   <div className="flex items-center gap-6">
                                       {linkAnalysis && <ScoreRing score={linkAnalysis.score} colorClass={linkAnalysis.ringColor} />}
                                       <div>
                                           <h3 className={`text-2xl font-bold ${linkAnalysis?.color}`}>{linkAnalysis?.label}</h3>
                                           <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{paramsRemoved} {t.tools.paramsRemoved}</p>
                                       </div>
                                   </div>

                                   {/* Clean Link Box */}
                                   <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex gap-3 items-center group">
                                       <p className="font-mono text-sm text-slate-600 dark:text-slate-300 break-all flex-grow line-clamp-2">
                                           {cleanLink}
                                       </p>
                                       <button 
                                           onClick={() => copyToClipboard(cleanLink, () => {})} 
                                           className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors shrink-0"
                                       >
                                           <Copy size={20} />
                                       </button>
                                   </div>

                                   {/* Flags */}
                                   {linkAnalysis && linkAnalysis.flags.length > 0 && (
                                       <div className="space-y-2">
                                           {linkAnalysis.flags.map((flag, i) => (
                                               <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 px-3 py-2 rounded-lg border border-slate-100 dark:border-slate-800">
                                                   <Info size={16} className="text-amber-500" /> {flag}
                                               </div>
                                           ))}
                                       </div>
                                   )}
                               </div>
                           )}
                       </div>
                   </div>
               </div>

               {/* Additional Utils */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {/* Secure Message */}
                   <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 p-8">
                       <div className="flex items-center gap-4 mb-6">
                           <div className="p-3 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-2xl">
                               <FileLock size={24} />
                           </div>
                           <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.tools.msgTitle}</h3>
                       </div>
                       <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-4">
                           <button onClick={() => setMsgMode('encrypt')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${msgMode === 'encrypt' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500'}`}>{t.tools.encrypt}</button>
                           <button onClick={() => setMsgMode('decrypt')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${msgMode === 'decrypt' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500'}`}>{t.tools.decrypt}</button>
                       </div>
                       <textarea 
                           value={msgInput}
                           onChange={(e) => setMsgInput(e.target.value)}
                           placeholder={msgMode === 'encrypt' ? t.tools.msgPlaceholderEnc : t.tools.msgPlaceholderDec}
                           className="w-full p-3 mb-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-violet-500 focus:outline-none text-sm min-h-[80px]"
                       />
                       <input 
                           type="text"
                           value={msgKey}
                           onChange={(e) => setMsgKey(e.target.value)}
                           placeholder={t.tools.msgKeyPlaceholder}
                           className="w-full p-3 mb-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-violet-500 focus:outline-none text-sm" 
                       />
                       <Button onClick={processSecureMessage} fullWidth variant="primary" size="sm" className="bg-violet-600 hover:bg-violet-700 mb-4">
                           {t.tools.msgProcess}
                       </Button>
                       {msgOutput && (
                           <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl relative group">
                               <p className="font-mono text-xs break-all pr-6 text-slate-600 dark:text-slate-300">{msgOutput}</p>
                               <button onClick={() => copyToClipboard(msgOutput, setMsgCopied)} className="absolute top-2 right-2 text-slate-400 hover:text-violet-600"><Copy size={14} /></button>
                           </div>
                       )}
                   </div>

                   {/* Token Generator */}
                   <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 p-8">
                       <div className="flex items-center gap-4 mb-6">
                           <div className="p-3 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-2xl">
                               <Terminal size={24} />
                           </div>
                           <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.tools.tokenTitle}</h3>
                       </div>
                       <div className="bg-slate-900 p-4 rounded-xl mb-4 relative group min-h-[60px] flex items-center">
                           <p className="font-mono text-pink-400 text-sm break-all w-full">{generatedToken}</p>
                           <button onClick={() => copyToClipboard(generatedToken, setTokenCopied)} className="absolute top-2 right-2 text-slate-500 hover:text-white"><Copy size={16} /></button>
                       </div>
                       <div className="flex items-center gap-4 mb-4">
                           <span className="text-xs font-bold text-slate-400 uppercase">Len: {tokenLength}</span>
                           <input type="range" min="16" max="64" value={tokenLength} onChange={(e) => setTokenLength(parseInt(e.target.value))} className="flex-grow h-1 bg-slate-200 rounded-full accent-pink-600" />
                       </div>
                       <Button onClick={generateToken} fullWidth variant="outline" size="sm" className="border-pink-200 text-pink-600 hover:bg-pink-50">{t.tools.regenerate}</Button>
                   </div>
               </div>
           </div>
        )}

      </div>
    </div>
  );
};