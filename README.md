# GreenGrowth AI Tax Review Platform

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite&logoColor=white)

GreenGrowth AI Tax Review Platform is a polished frontend prototype for an AI-assisted CPA tax-review workflow. Built for an AI Engineer Case Study, it demonstrates how explainable AI, source traceability, and human oversight can work together in a professional enterprise workspace.

## Problem Statement

Tax reviewers need to work quickly without treating AI output as a black box. GreenGrowth addresses this by combining an actionable review queue with transparent AI recommendations, source-document evidence, confidence factors, and explicit human decisions.

- AI-assisted tax review
- Explainable AI recommendations
- Human-in-the-loop review and override
- Source-document traceability
- Efficient reviewer workflow

## Selected Challenges

### Fully covered

- Challenge 01 – Source Document Traceability
- Challenge 07 – Actionable Dashboard
- Challenge 10 – Trustworthy AI

### Partial support

- Challenge 04 – Client Workspace
- Challenge 06 – Document Repository
- Challenge 08 – Responsive Enterprise UX
- Challenge 09 – Accessibility and reviewer controls

## Features

### Dashboard

- KPI cards, priority summaries, AI performance, and workload charts
- Interactive Review Queue with search, combined filters, and tri-state sorting
- Alerts, recent activity, Quick Actions, and AI Insights
- Refresh feedback with loading state and toast confirmation

### AI Review Workspace

- AI recommendation with confidence, risk, evidence, and plain-language explanation
- Evidence Drawer with source snippet, extracted value, confidence, and field mapping
- Tax field comparison, traceability table, confidence factors, and recommendation timeline
- Alternative recommendation, AI limitations, reviewer override, and decision banner

### Clients

- Client directory with live search and combined risk, reviewer, and industry filters
- Client details with return navigation into the review workflow

### Documents

- Searchable document repository with type and processing-status filters
- Document metadata, mock OCR extracted fields, simplified preview, and evidence navigation

### Engineering

- Responsive desktop, tablet, and mobile layouts
- Keyboard navigation, ARIA semantics, focus management, and reduced-motion support
- Skeleton loading states and subtle Framer Motion interactions
- Lazy-loaded Dashboard and Review Workspace routes with code splitting

## Architecture

The application uses a feature-first frontend architecture. Pages compose feature components; mock data is separated from presentation; reusable UI primitives provide consistent behavior, typography, and accessibility.

```text
React + Vite
│
├── App providers
│   ├── Theme context
│   └── Mock authentication context
│
├── Application shell
│   ├── Sidebar
│   ├── Top navigation
│   └── Breadcrumbs
│
├── Pages
│   ├── Dashboard
│   ├── Clients / Client Detail
│   ├── Documents / Document Detail
│   └── AI Review Workspace
│
├── Features
│   ├── dashboard
│   ├── review
│   └── auth
│
├── Reusable UI
│   ├── Cards, buttons, badges, inputs, overlays
│   ├── Data table and form primitives
│   └── Loading skeletons
│
└── Mock data and typed domain models
```

## Folder Structure

```text
src/
├── app/                 # Layouts, router, providers
├── components/          # Shared UI, navigation, skeletons, common primitives
├── context/             # Theme context
├── data/                # Typed mock application data
├── features/
│   ├── auth/            # Mock authentication and protected routing
│   ├── dashboard/       # Dashboard-specific components and types
│   └── review/          # Explainable AI review components and types
├── hooks/               # Shared React hooks
├── lib/                 # Reusable animation definitions
├── pages/               # Route-level composition
├── types/               # Shared domain types
└── utils/               # Helpers, constants, routes, legacy motion helpers
```

## AI Review Workflow

```text
Dashboard
   ↓
Clients
   ↓
Client Detail / Returns
   ↓
AI Review Workspace
   ↓
Evidence Drawer
   ↓
Human Decision

Documents
   ↓
Document Detail
   ↓
Evidence
   ↓
AI Review Workspace
```

## Tech Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS and shadcn/ui conventions
- React Router DOM
- Framer Motion
- Lucide React icons
- Recharts
- Sonner

## Accessibility

- Logical keyboard navigation and visible focus rings
- ARIA labels, live regions, semantic tables, and sortable column metadata
- Focus trapping, Escape close, and focus restoration for the Evidence Drawer
- Accessible validation feedback for reviewer overrides
- `prefers-reduced-motion` support for motion-enhanced components
- Responsive layouts designed for narrow touch devices through large desktop screens

## Performance

- Lazy-loaded Dashboard and Review Workspace routes
- Route-level Suspense fallbacks using matching skeleton layouts
- Recharts isolated in a dedicated production chunk
- Memoized chart components and memoized filter/sort computation
- Reusable UI and loading primitives to reduce duplicated rendering logic

## Local Setup

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
```

### Demo Credentials

| Field | Value |
| --- | --- |
| Email | `reviewer@greengrowth.com` |
| Password | `password123` |

Use **Continue as Demo Reviewer** for immediate mock access.

## Deployment

This Vite application can be deployed to Vercel:

1. Push the repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Select the Vite framework preset.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy. Configure SPA rewrites if your hosting provider does not automatically serve `index.html` for client-side routes.

## Screenshots

Add final screenshots to `docs/screenshots/` and update the image paths below before submission.

### Dashboard

_Enterprise command center showing KPIs, prioritization, workload charts, and the interactive Review Queue._

`docs/screenshots/dashboard.png`

### Review Workspace

_Explainable AI recommendation with confidence, evidence, and reviewer controls._

`docs/screenshots/review-workspace.png`

### Evidence Drawer

_Source traceability view showing the matched document field, values, confidence, and snippet._

`docs/screenshots/evidence-drawer.png`

### Clients

_Client directory with live search and combined reviewer, risk, and industry filters._

`docs/screenshots/clients.png`

### Client Detail

_Client context and return links into the AI review workflow._

`docs/screenshots/client-detail.png`

### Documents

_Document repository with OCR status, confidence, and processing filters._

`docs/screenshots/documents.png`

### Document Detail

_Mock document metadata, extracted fields, preview panel, and evidence navigation._

`docs/screenshots/document-detail.png`

### Override Workflow

_Human-in-the-loop override with validation, saved decision state, and audit-style banner._

`docs/screenshots/override-workflow.png`

### Mobile Dashboard

_Responsive mobile layout with stacked controls, cards, and contained table scrolling._

`docs/screenshots/mobile-dashboard.png`

## Demo Flow

Use this 5–7 minute walkthrough for a case-study presentation:

1. Sign in as the Demo Reviewer and introduce the Dashboard as the CPA command center.
2. Show KPIs, priorities, charts, and the searchable/filterable Review Queue.
3. Open **Clients**, filter the directory, and open Acme Logistics.
4. From Client Detail, open a return in the AI Review Workspace.
5. Explain the recommendation, confidence factors, traceability table, and Evidence Drawer.
6. Demonstrate an accept or override decision and the resulting decision banner.
7. Open **Documents**, inspect document metadata and extracted fields, then navigate back to evidence and review.
8. Close by summarizing human oversight, accessibility, responsive behavior, and the mock-data boundary.

## What's Real vs Simulated

### Real

- Frontend application architecture and protected navigation
- Search, filtering, sorting, local reviewer decisions, and mock session persistence
- Responsive layouts, accessibility behavior, loading states, motion, and lazy loading
- Evidence Drawer interaction, focus management, and route transitions

### Simulated

- AI recommendations and confidence scores
- OCR processing and extracted values
- Backend services, APIs, database, and tax calculations
- Authentication verification and authorization
- Document rendering, real source highlights, and external IRS integrations

## Future Improvements

- Backend API and secure authentication
- Database persistence and audit logs
- Real OCR/document ingestion pipeline
- AI model integration with reviewer feedback loops
- Role-based access control and client permissions
- Collaboration, comments, assignments, and notifications
- Tax validation rules, calculations, and filing integrations
