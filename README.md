# Piyush Kumar Mishra – Portfolio

A responsive, dark/light themed personal portfolio built with **React 18, Vite, Tailwind CSS, Framer Motion and Lucide React**.
It presents education, skills, one internship, three certifications and exactly three projects.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # serve the production build locally
```

Requires Node.js 18 or newer.

## Add your own files

| File | Purpose |
| --- | --- |
| `public/profile.png` | Your professional photo (navy suit, white shirt, tie). Portrait, about 800×960 px works well. Until it exists, the hero shows a "PM" placeholder. |
| `public/resume.pdf` | Resume used by the **Download Resume** button (the ATS version is already included). |
| `public/certificates/` | Optional certificate PDFs or images. |

## Content is data-driven

Edit text in `src/data/`:

- `profile.js` – name, links, about text, education, internship
- `projects.js` – the three projects (title, description, features, tech, GitHub link)
- `skills.js` – skill groups
- `certifications.js` – certificates

**Certificate buttons** appear only when a real `url` is set (for example `'/certificates/sql.pdf'` or the official credential link). The same applies to `internship.certificateUrl` in `profile.js`. Nothing is invented.

## Contact form (EmailJS)

1. Create a free account at <https://www.emailjs.com>, add an email service and a template.
2. In the template use the variables `from_name`, `from_email`, `subject`, `message`.
3. Copy `.env.example` to `.env` and fill in the three `VITE_EMAILJS_*` values.
4. Restart `npm run dev`.

Only EmailJS **public** identifiers belong in the frontend. Never put a private key in this project.
If the variables are empty, the form falls back to opening the visitor's email app with the message pre-filled.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On <https://vercel.com> choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`).
4. Under **Settings → Environment Variables** add the three `VITE_EMAILJS_*` values, then redeploy.

## Project structure

```text
public/        profile.png, resume.pdf, certificates/, favicon.svg
src/components Navbar, Hero, About, Education, Skills, Projects, Experience,
               Certifications, CodingProfiles, Contact, Footer (+ Section, Loader, Background)
src/data       profile.js, projects.js, skills.js, certifications.js
src/hooks      useTyping.js
```

## Notes

- No fake statistics, skill percentages or model scores are shown.
- LeetCode/GitHub statistics are intentionally not displayed; only profile links.
- Respects `prefers-reduced-motion` and uses semantic, keyboard-accessible components.
