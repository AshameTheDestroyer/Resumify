import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";

export default defineConfig({
    base: "./",
    plugins: [
        // react(),
        // @ts-ignore
        tailwind(),
    ],
});