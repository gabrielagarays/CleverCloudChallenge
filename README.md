# 🚀 Clever Cloud Challenge

Interactive web application built with **HTML, CSS, and JavaScript** that solves three core algorithmic challenges with a clean UI and user-friendly experience.

---

## ✨ Overview

This project is part of a technical challenge focused on problem-solving, clean logic, and front-end implementation.

It includes:

- 🔢 **Digits Sum** — calculates the sum of digits of an integer  
- 🔁 **Palindrome Checker** — validates if a word reads the same forwards and backwards  
- 📊 **Integer Sorting** — sorts a list of numbers using a custom algorithm (Bubble Sort, no native `.sort()`)

---

## 🧠 Key Highlights

- Clean and modular JavaScript logic  
- Input validation and error handling  
- Custom sorting algorithm implementation (no built-in methods)  
- Responsive UI using Flexbox  
- Separation of concerns (HTML / CSS / JS)  
- Improved UX through flexible input parsing (commas or spaces)

---

## 🛠️ Technologies

- HTML5  
- CSS3 (Flexbox, responsive design)  
- JavaScript (ES6)

---

## ⚙️ How It Works

### 1. Digits Sum
Extracts each digit from an integer and calculates the total sum.

Example:Input: 12345
Output: 15
---

### 2. Palindrome Checker
Normalizes the input string and compares it with its reversed version.

Example:Input: “salas”
Output: true
---

### 3. Integer Sorting (Bubble Sort)
Implements a manual sorting algorithm without using native methods like `.sort()`.

Example:Input: 5, -2, 10, 0, 3
Output: -2, 0, 3, 5, 10
---

## 🎯 Challenges & Learnings

One key challenge was debugging why the sorting algorithm returned the same input.

✔ Root cause: input format (missing separators)  
✔ Solution: improved parsing logic to support commas and spaces  

This reinforced an important principle:

> Most bugs are not in the algorithm, but in how data is handled.

---

## 💡 Improvements Implemented

- Flexible input parsing:

```js
.split(/[, ]+/)
Clear user feedback for invalid inputs
Cleaner event handling using addEventListener instead of inline HTML

⸻

📌 Future Improvements
	•	Add animations to visualize sorting
	•	Improve accessibility (ARIA, keyboard navigation)
	•	Deploy live demo (GitHub Pages)
	•	Enhance UI interactions and transitions

⸻

👩‍💻 Author

Gabriela Garay
Frontend & UX/UI Designer

⸻

🔗 Repository

https://github.com/gabrielagarays/CleverCloudChallenge

⸻

💬 Final Note

This project reflects not only problem-solving skills, but also attention to user experience, debugging ability, and code clarity — all essential for building scalable and user-centered applications.