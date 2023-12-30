import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const configBabelForDev = () => {
  if (process.env.NODE_ENV !== "development") return;
  return {
    babel: {
      plugins: [
        [
          "babel-plugin-styled-components",
          {
            displayName: true,
            fileName: false,
          },
        ],
      ],
    },
  };
};

export default defineConfig({
  plugins: [react(configBabelForDev())],
  server: { open: true },
});
