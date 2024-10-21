# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

For local dev, run:
    - run once: npx ampx sandbox secret set OPENAI_API_KEY
    - run in 1st tab every time: npx ampx sandbox
    - run in 2nd tab very time: npm run dev

Generate a amplify_outputs.json (production) for other apps (ios) to use:

    npx ampx generate outputs --app-id dc57w24mt3g8s --branch main

Generate data schema and classes for ios to use:

    npx ampx generate graphql-client-code --format modelgen --model-target swift

If you encounter any problems with `npx ampx`, please check the local AWS profile.

Deployed domain: https://main.dc57w24mt3g8s.amplifyapp.com

iOS app: https://github.com/espadandy/catdiary