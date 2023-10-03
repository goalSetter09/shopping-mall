import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import withReactRouter from "vite-plugin-next-react-router";

export default defineConfig({
  plugins: [react(), withReactRouter()],
});
