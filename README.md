# Company Profile: New Insights

This project includes the following pages:

1. **Home**: A landing page for the company.
2. **Product Page**: Displays products using data fetched via an API.
3. **About Us**:
   - **Contact Information**: Includes contact details.
   - **Google Maps**: Displays company address on Google Maps.
   - **Additional Company Profile Information**: Provides other relevant details.
   - **Contact Form**: Allows visitors to send messages.

Feel free to adjust and extend the pages and configuration as needed for your application.

This template provides a minimal setup to get React working with Vite, including Hot Module Replacement (HMR) and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Installation

To get started with this template, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KodingAffanMaulana/Project-4-Compro.git
   cd Project-4-Compro
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   Or if you prefer using Yarn:

   ```bash
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Or with Yarn:

   ```bash
   yarn dev
   ```

   This will start the development server and you can view your app in the browser at `http://localhost:5173/`.

## Expanding the ESLint Configuration

For production applications, it's recommended to update the ESLint configuration to enable type-aware lint rules:

1. Configure the top-level `parserOptions` property:

   ```js
   // eslint.config.js
   import tseslint from 'eslint-config-ts';

   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.url,
       },
     },
   });
   ```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
3. Optionally, add `...tseslint.configs.stylisticTypeChecked`.
4. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

   ```js
   // eslint.config.js
   import react from 'eslint-plugin-react';
   import tseslint from 'eslint-config-ts';

   export default tseslint.config({
     settings: { react: { version: '18.3' } },
     plugins: {
       react,
     },
     rules: {
       ...react.configs.recommended.rules,
       ...react.configs['jsx-runtime'].rules,
     },
   });
   ```
