# Neatly – Men's Dating Safety & Advice

A modern, supportive platform for men to share dating experiences, flag red flags, and move with intention—not fear.

## 🚀 Features
- Anonymous forum for sharing experiences
- Real-time alerts for flagged keywords
- Voting and polls on posts
- Secure authentication (NextAuth.js, email + password)
- User profiles and dashboard
- Modular, clean codebase with TypeScript
- Responsive UI with Tailwind CSS & Shadcn/ui

## 🛠️ Tech Stack
- [Next.js 14 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [Shadcn/ui](https://ui.shadcn.com/)
- [NextAuth.js](https://authjs.dev/) (email + password, Prisma adapter)
- [Prisma ORM](https://www.prisma.io/) + PostgreSQL
- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [GitHub Actions](https://github.com/features/actions)

## 📦 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/neatly-dating-advice.git
   cd neatly-dating-advice
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your values.
4. **Set up the database:**
   ```bash
   npx prisma migrate dev
   ```
5. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
6. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## 📝 Scripts
- `dev` – Start Next.js in development mode
- `build` – Build for production
- `start` – Start production server
- `lint` – Run ESLint
- `prisma` – Prisma CLI

## 🧑‍💻 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## 📄 License
[MIT](LICENSE)

---

> Built with ❤️ for a safer, more supportive dating experience for men.
