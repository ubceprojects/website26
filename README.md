# eProjects UBC — Website

The official marketing and information website for eProjects UBC, a student entrepreneurship club at the University of British Columbia.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Content:** Markdown / MDX
- **Hosting:** [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
git clone https://github.com/eprojects-ubc/website26.git
cd website26
npm install
npm run dev
```

The site will be running at `http://localhost:3000`.

## Project Structure

```
/
├── app/              # Next.js app router pages
├── components/       # Reusable UI components
├── content/          # Markdown/MDX files (events, blog posts)
├── public/           # Static assets (images, fonts)
└── styles/           # Global styles
```

## Contributing

1. Branch off `main` — use the format `feature/your-feature-name`
2. Make your changes
3. Open a pull request and request a review before merging
4. Do not push directly to `main`

## Environment Variables

Create a `.env.local` file in the root directory. Never commit this file — it is already listed in `.gitignore`.

```env
# Add any environment variables here
```

## Deployment

The site auto-deploys to Vercel on every push to `main`. Preview deployments are created for every pull request.

## Related Repos

- `website` — original eProjects website
- `website25` — 2025 website iteration
- `portal` — applicant/member portal (private)

## Team

Built and maintained by the eProjects UBC Tech Team.

---

*eProjects UBC — Building the next generation of entrepreneurs.*
