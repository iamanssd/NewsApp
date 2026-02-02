Vibe Coding Notes

1. Install fnm (Node version manager)
    
    ```winget install Schniz.fnm```

2. Install Node 20 LTS for runtime

    ```fnm install 20``` 

3. Lock Node.js version to the project

    ```node -v > .node-version```

    Best Professional habit to create easy ways to locate and use node versions

4. Scaffolding the Application (Vite + React ***Framework*** + TypeScript ***Variant***)

    ```npm create vite@latest .```
- Why TypeScript is better than JavaScript?
    - Detect errors at ***compile-time*** rather than ***runtime***
    - Scaling: type def safer collab bigger projects

- Why Vite instead of Create Reactapp? ***(Cached progress, modular replacement)***
    - Fast Startup - using ***Native ES modules*** (Native ESM) and ***caching*** for devs (Native ESM = std way modern js handles modules in import/export) (when saving a file, Hot Module Replacement for instant reloading and updates for modular development)
    - ***HMR (Hot Module Replacement)*** - faster and smoother than reactapp

- ***PWA*** (Progressive Webapp) functionality: ```npm install vite-plugin-pwa```

```npm run dev``` - localhost | ```npm run build``` - generates ```/dist``` to deploy

# Design Notes

## Creation of Logo

### Favicon: https://realfavicongenerator.net/

Add these to the ```<head>```:

```xml
<link rel="icon" type="image/png" href="/pwa-logo/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/pwa-logo/favicon.svg" />
<link rel="shortcut icon" href="/pwa-logo/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/pwa-logo/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="NewsApp" />
<link rel="manifest" href="/pwa-logo/site.webmanifest" />
```