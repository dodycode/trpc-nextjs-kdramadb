# KDRAMADB V2 (WIP)

Still work in progress.

## Project Structure

The project is organized into the following packages:

packages
├─ api
| └─ tRPC v11 router definition
├─ auth
| └─ Authentication using NextAuth
├─ db
| └─ Typesafe db calls using Drizzle & Supabase
└─ ui
└─ Shared UI components using shadcn-ui

## Key Features

- **Data Source**: Utilizes the TMDB API to fetch comprehensive information about Korean dramas.
- **Type-Safe API**: Implements tRPC for end-to-end typesafe API calls.
- **Authentication**: Integrates NextAuth for secure user authentication.
- **Database**: Uses Drizzle ORM with Supabase for efficient and type-safe database operations.
- **UI Components**: Leverages shadcn-ui for a consistent and modern user interface.

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
