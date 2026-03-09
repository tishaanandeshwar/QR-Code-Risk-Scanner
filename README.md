# QR Risk Scanner 

QR Risk Scanner is an AI-powered web application that scans QR codes and analyzes the URLs inside them to detect potential security risks such as phishing, malicious websites, or suspicious links.

The system uses real-time QR detection and AI analysis to warn users before they open unsafe links.

---

#  Features

### Real-Time QR Code Scanning

The application uses the device camera to instantly detect and read QR codes.

### AI-Powered Risk Detection

After scanning a QR code, the extracted URL is analyzed using Google Gemini AI to determine if the link is safe or potentially dangerous.


### Privacy Focused

No user data is stored. The URL is analyzed in real-time and discarded immediately after the analysis.

---

#  Tech Stack

Frontend

* React
* TypeScript
* Tailwind CSS

QR Detection

* jsQR

AI Analysis

* Google Gemini Flash API

Other Tools

* Web Audio API
* Node.js

---

#  Project Structure

```
QR-Code-Risk-Scanner
│
├── src
│   ├── App.tsx                # Main application logic
│   ├── services
│   │     └── aiService.ts     # Gemini AI integration
│   ├── lib
│   │     └── audio.ts         # Audio feedback system
│   └── index.css              # Tailwind styling
│
├── .env.example               # Environment variable template
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```
git clone https://github.com/tishaanandeshwar/QR-Code-Risk-Scanner.git
```

## 2️⃣ Open the Project

Open the folder in VS Code.

```
cd QR-Code-Risk-Scanner
```

## 3️⃣ Install Dependencies

```
npm install
```

---

# 🔑 Configure API Key

Create a `.env` file in the root folder and add your Gemini API key.

```
GEMINI_API_KEY=your_api_key_here
```

You can get your API key from
https://aistudio.google.com/app/apikey

---

#  Run the Project

Start the development server:

```
npm run dev
```

Now open your browser and go to:

```
http://localhost:3000
```

---

# Troubleshooting

### Camera Not Working

Make sure your browser allows camera access.

### API Error

Check if your Gemini API key is correctly added in the `.env` file.

---

#  Use Case

QR Risk Scanner helps users stay safe from malicious QR codes commonly found in:

* Fake payment QR codes
* Phishing websites
* Malicious downloads
* Public posters and ads

---

#  Author

Tisha Nandeshwar
Purva Injalkar
Pratiksha Bobde
pratiksha Yelne

GitHub
https://github.com/tishaanandeshwar

---

#  Future Improvements

* Browser extension
* Mobile application
* Phishing database integration
* Risk scoring system
* Screenshot and reporting feature
