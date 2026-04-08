# SmartChefAI

SmartChefAI is a full-stack AI-powered cooking assistant that helps users scan pantry or fridge ingredients, generate personalized recipes, save favorite meals, and discover dishes based on what is already available in the kitchen.

It combines a modern Next.js frontend with a Strapi backend, Clerk authentication, Google Gemini for AI features, Arcjet for protection and rate limiting, and PostgreSQL or SQLite-backed persistence through Strapi.

## What This Project Does

- Scans pantry or fridge images and detects visible ingredients using AI
- Generates detailed recipes with ingredients, instructions, tips, nutrition, and substitutions
- Recommends meals based on items already stored in the user's pantry
- Lets users save recipes to their collection and revisit them later
- Supports free and pro usage tiers with feature-based limits
- Exports recipes as downloadable PDF documents
- Includes curated recipe browsing by category and cuisine

## Tech Stack

### Frontend

- Next.js 16
- React 19
- Tailwind CSS 4
- shadcn/ui
- Clerk Authentication
- React PDF

### Backend

- Strapi 5
- PostgreSQL or SQLite
- Strapi Users & Permissions plugin

### AI and Integrations

- Google Gemini API for recipe generation and image-based ingredient recognition
- Unsplash API for recipe imagery
- TheMealDB API for category, cuisine, and recipe discovery
- Arcjet for bot protection, shielding, and rate limiting

## Key Features

### 1. AI Recipe Generation

Users can enter a recipe name and receive a structured AI-generated recipe with:

- description
- category and cuisine
- prep time and cook time
- ingredient list
- step-by-step instructions
- nutrition details
- cooking tips
- ingredient substitutions

### 2. Pantry Image Scanning

Users can upload a pantry or fridge image, and SmartChefAI will:

- detect visible food ingredients
- estimate quantities
- return confidence-based ingredient suggestions
- allow users to save recognized items into their pantry

### 3. Pantry-Based Meal Suggestions

Using stored pantry ingredients, the app suggests recipes users can cook immediately or with only a few missing staples.

### 4. Saved Recipes and Recipe Details

Users can:

- bookmark recipes
- remove saved recipes
- revisit generated or stored recipes
- view complete recipe metadata and cooking steps

### 5. Tiered Access and Usage Limits

The application supports free and pro plans:

- free users have limited AI scans and recommendations
- pro users get much higher usage limits
- access control is enforced through Clerk plan checks and Arcjet token buckets

## Project Structure

```text
SmartChefAI/
├── frontend/   # Next.js app
└── backend/    # Strapi CMS and API
```

## How It Works

### Frontend

The frontend is built with Next.js App Router and handles:

- authentication and protected UI flows
- pantry management
- recipe browsing and viewing
- calling server actions for AI-powered workflows
- rendering PDF-ready recipe documents

### Backend

The backend is built with Strapi and stores:

- users
- recipes
- pantry items
- saved recipes

Strapi acts as the persistent data layer and API service used by the frontend.

## Environment Variables

Create a `.env` file in `frontend/` and configure the values below:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token
GEMINI_API_KEY=your_gemini_api_key
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
ARCJET_KEY=your_arcjet_key
```

For Clerk, add the required keys used by your Next.js app as well:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

Create a `.env` file in `backend/` or copy from `.env.example`:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
TRANSFER_TOKEN_SALT=your_transfer_token_salt
JWT_SECRET=your_jwt_secret
ENCRYPTION_KEY=your_encryption_key
DATABASE_CLIENT=sqlite
```

If you want PostgreSQL instead of SQLite, configure the Strapi database variables as needed:

```env
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=your_database_name
DATABASE_USERNAME=your_database_user
DATABASE_PASSWORD=your_database_password
DATABASE_SCHEMA=public
DATABASE_SSL=false
```

## Running Locally

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd SmartChefAI
```

### 2. Install dependencies

Install frontend packages:

```bash
cd frontend
npm install
```

Install backend packages:

```bash
cd ../backend
npm install
```

### 3. Configure environment variables

- Set up `frontend/.env`
- Set up `backend/.env`
- Make sure Clerk, Gemini, Arcjet, Unsplash, and Strapi credentials are available

### 4. Start the backend

From the `backend/` folder:

```bash
npm run develop
```

Strapi will run by default at:

```text
http://localhost:1337
```

### 5. Start the frontend

From the `frontend/` folder:

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:3000
```

## Using the Project

After starting both apps:

1. Open `http://localhost:3000`
2. Sign up or sign in with Clerk
3. Add pantry items manually or upload an image for ingredient detection
4. Generate recipes or get pantry-based suggestions
5. Save recipes and export them as PDF

## Deployment

### Local Development

Use the instructions above to run both frontend and backend on your machine.

### Live Demo

If you have deployed the app, add your links here:

- Frontend: `Add your deployed frontend URL`
- Backend / CMS: `Add your deployed backend URL`

If you want to share this project on your resume or portfolio, replacing those placeholders with your live links will make the README much stronger.

## Available Scripts

### Frontend

```bash
npm run dev
npm run build
npm run start
npm run lint
```

### Backend

```bash
npm run develop
npm run build
npm run start
```

## Why This Project Stands Out

SmartChefAI is more than a recipe app. It combines AI-generated content, computer vision style ingredient recognition, authenticated user workflows, subscription-aware limits, and persistent pantry management in one full-stack product experience.

It is a strong showcase project for:

- full-stack development
- AI integration
- authentication and authorization
- CMS-backed data modeling
- product-focused frontend design
- real-world API and rate-limit handling
