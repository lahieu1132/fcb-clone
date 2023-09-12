import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import env from "dotenv";

const envToReplace = Object.entries(env.config().parsed).reduce(
  (acc, [key, value]) => {
    if (key.startsWith("REACT_APP_")) {
      acc[`import.meta.env.${key}`] = JSON.stringify(value);
    }
    return acc;
  },
  {}
);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      values: {
        ...envToReplace,
      },
    }),
  ],
});
