# KDRAMADB V2 (WIP)

Still work in progress.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment variables (refer to .env.example)
4. Run the development server:

```bash
   pnpm dev
```

## Package Details

### API (@kdramadb/api)

Contains the tRPC router definitions for type-safe API calls.

### Auth (@kdramadb/auth)

Handles authentication using NextAuth, providing secure user sessions.

### Database (@kdramadb/db)

Manages database operations using Drizzle ORM with Supabase, ensuring type-safe queries.

### UI (@kdramadb/ui)

Houses shared UI components built with shadcn-ui for a consistent look across the application.
