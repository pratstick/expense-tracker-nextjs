# Expense Tracker — Next.js

A production-ready personal finance tracker built with **Next.js 14**, **Prisma**, **Clerk**, and **Tailwind CSS**.

---

## ✨ Features

- 🔐 Authentication via [Clerk](https://clerk.com) (sign in / sign up)
- 💰 Add income and expense transactions
- 📊 Real-time balance, total income, and total expense summary
- 🗑 Delete individual transactions (with confirmation)
- ⚡ Server Actions — no dedicated API routes needed
- 🎨 Responsive UI with Tailwind CSS
- ✅ Input validation with [Zod](https://zod.dev)
- 🔄 Optimistic revalidation via `revalidatePath`

---

## 🏗 Architecture

```
expense-tracker-nextjs/
├── app/
│   ├── actions/           # Server Actions (add, delete, fetch transactions)
│   ├── globals.css        # Tailwind directives + minimal overrides
│   ├── layout.tsx         # Root layout with ClerkProvider & ToastContainer
│   └── page.tsx           # Home page with Suspense-wrapped data components
├── components/
│   ├── Header.tsx         # Navigation bar with Clerk auth buttons
│   ├── Guest.tsx          # Landing screen for unauthenticated users
│   ├── Balance.tsx        # Current balance (async server component)
│   ├── IncomeExpense.tsx  # Income/expense summary (async server component)
│   ├── AddTransaction.tsx # Add-transaction form (client component)
│   ├── TransactionList.tsx# Transaction history (async server component)
│   └── TransactionItem.tsx# Single transaction row (client component)
├── lib/
│   ├── db.ts              # Prisma client singleton (dev-safe)
│   ├── CheckUser.ts       # Sync Clerk user ↔ Prisma User table
│   └── utils.ts           # Shared helpers (e.g. addCommas)
├── prisma/
│   ├── schema.prisma      # Data models: User, Transaction
│   └── migrations/        # SQL migration history
├── types/
│   └── Transaction.ts     # Shared TypeScript interface
├── .env.example           # Required environment variables template
└── middleware.ts          # Clerk middleware (protects all routes)
```

---

## 🚀 Getting Started

### 1. Clone & install dependencies

```bash
git clone https://github.com/pratstick/expense-tracker-nextjs.git
cd expense-tracker-nextjs
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in:

| Variable | Where to find it |
|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | [Clerk Dashboard](https://dashboard.clerk.com) → API Keys |
| `CLERK_SECRET_KEY` | Clerk Dashboard → API Keys |
| `DATABASE_URL` | Your Postgres provider (Neon, Supabase, Railway, etc.) |

### 3. Run database migrations

```bash
npx prisma migrate dev
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🗄 Database

The app uses **PostgreSQL** via [Prisma ORM](https://www.prisma.io).

Recommended free-tier providers:
- [Neon](https://neon.tech) (serverless Postgres)
- [Supabase](https://supabase.com)
- [Railway](https://railway.app)

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Auth | [Clerk](https://clerk.com) v5 |
| Database ORM | [Prisma](https://www.prisma.io) v5 |
| Styling | [Tailwind CSS](https://tailwindcss.com) v3 |
| Validation | [Zod](https://zod.dev) v4 |
| Notifications | [react-toastify](https://fkhadra.github.io/react-toastify/) |

---

## 🚢 Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Set the environment variables (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `DATABASE_URL`) in the Vercel project settings.
4. Deploy — Vercel will run `npm run build` automatically.

> The `postinstall` script (`prisma generate`) runs automatically during `npm install`, so Prisma Client is always up to date in CI/CD.

---

## 🧪 Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint check |

---

## 📄 License

MIT — see [LICENSE](LICENSE).

