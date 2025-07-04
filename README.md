# Applicant-Agent

**This Repository is a showcase repo for the dashboard part of an AI Agent for resume tailoring and coverletter generation.**

**Applicant-Agent** is an AI-powered dashboard and frontend system that automates tailoring resumes for job applications. The core goal is to simplify and enhance the job application process using LLM agents, enabling users to customize their resumes for different job postings with ease.

## Used technologies

- **_React_** is used as the UI Library.
- **_TypeScript_** is used as main programming languge because of its type safty.
- **_ShadCn_** and **_Taliwindcss_** are used as design system and styling tool.
- **_Zustand_** library made it much easier to manage the complex states.
- **_Docker_** is used for deployment.
  - The container leverages an **_Nginx_** based image to serve built files including the eniter built application.

---

## 📦 Installation & Setup

1. **Clone repository**

```bash
   git clone https://github.com/Amin-Zahed/Applicant-Agent.git
   cd Applicant-Agent

   docker build -t apollo:dashboard .
   docker run --rm --name "apollo-dashboard" -p 8080:80 apollo:dashboard
```
