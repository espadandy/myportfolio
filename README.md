# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Generate a amplify_outputs.json for other apps (ios) to use:

    npx ampx generate outputs --app-id dbvdz77y4msbb --branch main

Generate classes for ios to use:

    npx ampx generate graphql-client-code --format modelgen --model-target swift

Deployed domain: https://main.dbvdz77y4msbb.amplifyapp.com

iOS app: https://github.com/espadandy/catdiary