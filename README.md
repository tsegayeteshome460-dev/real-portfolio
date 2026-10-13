# Professional React Developer Portfolio

A responsive six-page developer portfolio built with React, Vite, React Router, Lucide icons, and custom CSS.

## Pages
- Home
- About
- Skills
- Projects (with category filters)
- Experience & Education
- Contact (opens the visitor's email app)

## Requirements
- Node.js LTS
- npm
- VS Code (recommended)

## Run on Windows
1. Extract this ZIP file.
2. Open the extracted `professional-react-portfolio` folder in VS Code.
3. In VS Code choose **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints, usually `http://localhost:5173`.

## Important: personalize before applying for jobs
Search `src/App.jsx` and replace:
- `Your Name`
- `hello@example.com` (also update the mailto link in Contact)
- GitHub and LinkedIn profile URLs
- The sample project links and descriptions
- The education/experience timeline with accurate details

Add your real CV PDF at `public/resume.pdf` (create the `public` folder if needed). Do not claim skills or work experience you do not have.

## Contact form note
The current form uses `mailto:` and opens the visitor's default email application. It does not send or store submissions on a server. For a production contact form, connect a backend or a form service.

## Production build
```bash
npm run build
npm run preview
```

## Project structure
```text
professional-react-portfolio/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```
