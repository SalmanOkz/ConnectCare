# ConnectCare

A healthcare application frontend built with **Next.js, React, TypeScript, and Material UI**.

ConnectCare explores the interface for connecting patients and healthcare providers. This public repository currently contains an early frontend scaffold centered on a login screen, reusable layout components, and registration form components.

## Current implementation

- The home route renders the login interface from `app/src/loginpage.tsx`.
- The login UI includes email/password inputs, password visibility, and a remember-me checkbox.
- Shared UI components and layout code live in `app/src/@core/`.
- Multi-step registration components live in `app/src/views/pages/auth/register-multi-steps/`.

**Implementation boundary:** the login form currently prevents submission and the social sign-in buttons are placeholders. Their presence does not indicate working authentication. This repository does not include a backend API or database implementation.

## Technology stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15, App Router |
| UI | React 19, Material UI 7, Emotion |
| Language | TypeScript |
| Styling | Tailwind CSS 4 and component styles |
| Icons | Iconify |

Versions reflect the declarations in [package.json](package.json).

## Local development

Use a Node.js version compatible with the Next.js version in `package.json`, and npm.

```bash
git clone https://github.com/SalmanOkz/ConnectCare.git
cd ConnectCare
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with Turbopack |
| `npm run build` | Create a production build with Turbopack |
| `npm start` | Serve a successful production build |

No test or lint scripts are currently declared in `package.json`. Installation and build commands are provided for contributors; this documentation does not assert that the current scaffold passes a production build.

## Repository map

| Path | Purpose |
| --- | --- |
| [app/page.tsx](app/page.tsx) | Home route |
| [app/layout.tsx](app/layout.tsx) | App Router root layout |
| [app/src/loginpage.tsx](app/src/loginpage.tsx) | Login interface |
| [app/src/@core](app/src/@core) | Shared components and layouts |
| [app/src/configs](app/src/configs) | UI and authentication-related configuration |
| [app/src/views/pages/auth](app/src/views/pages/auth) | Authentication UI components |
| [public](public) | Static assets |

## Suggested next steps

- Connect the login interface to a server-side authentication flow.
- Add validation, loading indicators, and accessible error feedback.
- Wire registration components into explicit application routes.
- Add automated checks and document required environment variables when backend integrations are introduced.

These are planned improvements, not completed features.

## Contributing

Open an issue describing the problem or proposed improvement, then submit a focused pull request. Include screenshots for UI changes and explain how you verified the behavior.
