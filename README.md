# 🌐 [Wordify](https://bihari22.github.io/Wordify/)

## 📋 Overview

This web application allows users to **practice foreign language vocabulary** using flashcards and a quiz format. After completing the quiz, users can **generate a printable PDF certificate** of their performance.

---

## 🛠 Technologies Used

| Layer      | Tools                                                |
| ---------- | ---------------------------------------------------- |
| Frontend   | HTML, CSS, JavaScript                                |
| Styling    | Responsive CSS (vanilla)                             |
| PDF Export | [html2pdf.js](https://github.com/eKoopmans/html2pdf) |

---

## 🎯 Features

* Flashcard-based vocabulary review
* Quiz mode with instant feedback
* Score tracking and quiz progress
* Certificate generator with name, date, and score
* Downloadable PDF certificate
* Input validation and feedback
* Responsive design (mobile-friendly)
* Capitalization of user name input

---

## 🧩 File Structure

```
/language-practice-app
├── index.html
├── styles.css
├── script.js
└── html2pdf.bundle.min.js
```

---

## 🚀 How to Use

### 1. **Start Flashcard Review**

* Opens with flashcards displaying a word, its translation, and the language.
* Click **“Next”** to cycle through all flashcards.

### 2. **Begin Quiz**

* After the last flashcard, the **“Start Quiz”** button appears.
* Enter the translation for each word.
* Click **“Check”** to verify your answer.
* Score updates after each attempt.

### 3. **Finish & See Results**

* Once all quiz questions are answered, a result screen shows:

  * Total score
  * Completion comment (`Mastered` / `Try Again`)

### 4. **Generate Certificate**

* Click **“Print Certificate”**
* Enter your name (auto-capitalized)
* A certificate is generated and downloaded as a **PDF**

---

## ✨ Responsiveness

The app works smoothly on:

* Mobile devices
* Tablets
* Desktops

All layouts adjust automatically using media queries.

---

## 🧪 Input Validation

* Alerts if no answer is provided in quiz input
* Disables check button while feedback is showing
* Capitalizes first letter of user's name automatically

---

## 📦 Dependencies

### External:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
```

---

## 📄 Example Certificate

The certificate includes:

* User’s name
* Score (e.g. 5/5)
* Date
* “Certificate of Achievement” heading
* Automatically downloaded as `Language_Certificate_YourName.pdf`

---

## ⚙ Setup Instructions

### Option 1: Run Locally

1. Download all project files
2. Open `index.html` in a browser
3. No server or database needed

### Option 2: Host Online

* Use [GitHub Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/), or [Vercel](https://vercel.com/)
* Drag and drop or push your repo

---

## 📌 Future Improvements (Optional)

* Add support for multiple languages
* Include audio pronunciations
* User login and progress tracking (requires backend)
* Leaderboards and weekly challenges

---

## 👤 Developed By
**Rahul Kumar**
Language Practice App with Flashcards, Quiz, and Certificat
