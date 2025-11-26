# 🛡️ LibreShield

> **Reclaim your digital privacy and security. Free, open-source, and local-first.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status: Active](https://img.shields.io/badge/Status-Active-brightgreen.svg)](#)
[![Built with React](https://img.shields.io/badge/Built%20with-React%2019-61dafb.svg)](https://react.dev)

---

## 🎯 About LibreShield

LibreShield is a comprehensive, interactive educational platform designed to help users understand and protect their digital privacy. In an era of rampant data collection, surveillance, and cyber threats, LibreShield provides accessible, actionable guidance to everyone—regardless of technical expertise.

We believe **privacy is a fundamental human right**, not a luxury. Our mission is to democratize digital security education and empower people to take control of their online presence.

### Core Values

- **🔒 Privacy First** – We don't collect data. All analysis happens locally on your device.
- **🔓 Completely Open Source** – Our code is public and auditable. Transparency over obscurity.
- **💰 Free Forever** – No subscriptions, no paywalls, no ads. Just pure education.
- **📚 Education, Not Fear** – We empower through knowledge, not manipulation.

---

## ✨ Features

### 🔍 Privacy Audit
A comprehensive 15-point assessment that evaluates your digital security posture across:
- Operating systems and devices
- Update and backup habits
- Browser and search engine choices
- Email and social media exposure
- Messaging and cloud storage
- Authentication methods (passwords, 2FA)
- Phishing awareness and defensive habits

Get personalized recommendations based on your responses.

### 🛠️ Cyber Tools
A suite of practical utilities including:
- **Password Strength Checker** – Verify if your passwords have been compromised
- **Device Fingerprint Analyzer** – See what data websites can collect about your device
- **URL Decoder** – Clean tracking parameters from suspicious links
- **Hash Generator** – Create cryptographic hashes for verification
- **And more** – Additional security utilities for everyday protection

### 🏠 Privacy Hub
A curated directory of **open-source and privacy-respecting alternatives** to mainstream apps:
- Email providers
- Cloud storage services
- Messaging apps
- Search engines
- Browsers
- VPN providers
- And more

Each recommendation includes why it's better for privacy and how to get started.

### 🖼️ Image Lab
Remove sensitive metadata (EXIF data, GPS coordinates) from photos before sharing them online. Protect your location and device information.

### 🎣 Phishing Trainer
Interactive training scenarios to help you recognize and avoid:
- Phishing emails and fake login pages
- Social engineering tactics
- Unsafe WiFi networks
- Common scams and exploits

### 📖 Educational Resources
- **In-depth Guides** – Learn about various privacy and security topics
- **FAQ Section** – Common questions answered
- **About Section** – LibreShield's mission and values
- **Multi-language Support** – Available in multiple languages

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation & Setup

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/your-repo/libreshield.git
   cd libreshield
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in your browser**
   Navigate to `http://localhost:5000`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🏗️ Project Structure

```
libreshield/
├── components/              # Reusable React components
│   ├── ui/                 # UI components (Button, etc.)
│   └── Layout.tsx          # Main layout wrapper
├── pages/                  # Page components
│   ├── Home.tsx            # Landing page
│   ├── Assessment.tsx      # Privacy audit questionnaire
│   ├── Results.tsx         # Assessment results & recommendations
│   ├── Tools.tsx           # Security tools suite
│   ├── PrivacyHub.tsx      # Alternative apps directory
│   ├── ImageLab.tsx        # Photo metadata remover
│   ├── Phishing.tsx        # Phishing training scenarios
│   ├── FAQ.tsx             # Frequently asked questions
│   ├── Guides.tsx          # Educational guides
│   ├── About.tsx           # About and mission
│   └── Legal.tsx           # Terms and privacy policy
├── context/                # React Context for state management
│   └── AppContext.tsx      # Global app state
├── data/                   # Static data and content
│   ├── content.ts          # Educational content
│   └── locales.ts          # Multi-language translations
├── types.ts                # TypeScript type definitions
├── App.tsx                 # Main app component
├── index.tsx               # React entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19+ | UI framework |
| **TypeScript** | 5.8+ | Type-safe JavaScript |
| **Vite** | 6+ | Fast build tool & dev server |
| **React Router** | 7+ | Client-side routing |
| **Lucide React** | Latest | Beautiful icon library |
| **Tailwind CSS** | Latest | Utility-first CSS |

---

## 🌍 Multi-Language Support

LibreShield includes built-in translations for:
- English (EN)
- Spanish (ES)
- French (FR)
- German (DE)
- Italian (IT)
- Portuguese (PT)
- And more...

Language selection is persistent and can be changed anytime from the navigation menu.

---

## 🤝 Contributing

We welcome contributions from the community! Whether you're interested in:
- **Bug fixes** – Found an issue? Help us squash it!
- **New features** – Have an idea? We'd love to hear it.
- **Translations** – Help us reach more people in their language.
- **Content** – Share knowledge about privacy and security.
- **Testing** – Improve our quality assurance.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes with clear, descriptive commits
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request with a description of your changes

Please ensure your code follows our existing style and includes appropriate documentation.

---

## 🐛 Bug Reports & Feedback

Found a bug or have a suggestion? We'd love to hear from you!

- **Report Issues** – Open an issue on our GitHub repository
- **Feature Requests** – Share your ideas in the discussions section
- **Security Concerns** – Please email security@libreshield.org for sensitive matters

---

## 📄 License

LibreShield is released under the **MIT License**. See the LICENSE file for details. You're free to use, modify, and distribute this software for personal or commercial purposes.

---

## 🎓 Learning Resources

Want to learn more about digital privacy and security?

- **Electronic Frontier Foundation (EFF)** – https://www.eff.org
- **Techlore** – Privacy and security guides
- **OWASP** – Web application security
- **Have I Been Pwned** – Check if your data was compromised
- **Privacy Guides** – https://www.privacyguides.org

---

## 🙏 Acknowledgments

LibreShield stands on the shoulders of giants. We're grateful to:
- The open-source community for amazing tools and libraries
- Privacy advocates and security researchers
- Our contributors and community members
- Everyone working to make the internet safer

---

## 💬 Community

Join our community to discuss digital privacy and security:

- **GitHub Discussions** – Ask questions and share ideas
- **GitHub Issues** – Report bugs and request features
- **Email** – hello@libreshield.org

---

## 🔮 Roadmap

Upcoming features we're working on:

- [ ] Browser extension for privacy tips while browsing
- [ ] Mobile app version
- [ ] Advanced cryptography tools
- [ ] Network security scanner
- [ ] VPN and proxy comparison tool
- [ ] API for third-party integrations
- [ ] Dark web resource guide

---

## 📊 Statistics

- ✅ **100% Open Source** – All code available for review
- ✅ **0 Trackers** – No analytics or data collection
- ✅ **Fully Local** – Everything runs on your device
- ✅ **Zero Dependencies on External Services** – Except where specifically noted
- ✅ **Mobile Responsive** – Works on all devices

---

## 🚦 Development Status

**LibreShield is actively maintained and under active development.**

- Stable core features
- Regular security updates
- Community-driven improvements
- New content added regularly

---

## ⚖️ Legal

- **Terms of Service** – See the Terms page in the app
- **Privacy Policy** – See the Privacy page in the app
- **License** – MIT License (see LICENSE file)

---

## 🌟 Support This Project

If LibreShield has helped you:

- ⭐ **Star this repository** – It helps others discover us
- 📢 **Share with friends and family** – Spread awareness about digital privacy
- 🐛 **Report bugs** – Help us improve the quality
- 💡 **Contribute code or content** – Make it better
- 💬 **Provide feedback** – Tell us what you think

---

**Made with ❤️ by privacy advocates, for everyone.**

*Last updated: November 2025*
