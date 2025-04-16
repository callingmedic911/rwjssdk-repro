import { defineConfig } from "vite";
import { redwood } from "@redwoodjs/sdk/vite";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwind(), redwood()],
});
