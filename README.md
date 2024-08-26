# Company Profile: New Insights

This project includes the following pages:

1. **Home**: A landing page for the company.
2. **Product Page**: Displays products using data fetched via an API.
3. **About Us**:
   - **Contact Information**: Includes contact details.
   - **Google Maps**: Displays company address on Google Maps.
   - **Additional Company Profile Information**: Provides other relevant details.
   - **Contact Form**: Allows visitors to send messages.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Redux**: A predictable state container for JavaScript apps.

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
