// libs/common-ui/vite.config.ts
import { defineConfig } from "file:///Users/vkonovalchuk/projects/myorg/node_modules/vite/dist/node/index.js";
import react from "file:///Users/vkonovalchuk/projects/myorg/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteTsConfigPaths from "file:///Users/vkonovalchuk/projects/myorg/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///Users/vkonovalchuk/projects/myorg/node_modules/vite-plugin-dts/dist/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "/Users/vkonovalchuk/projects/myorg/libs/common-ui";
var vite_config_default = defineConfig({
  cacheDir: "../../node_modules/.vite/common-ui",
  plugins: [
    dts({
      entryRoot: "src",
      tsConfigFilePath: path.join(__vite_injected_original_dirname, "tsconfig.lib.json"),
      skipDiagnostics: true
    }),
    react(),
    viteTsConfigPaths({
      root: "../../"
    })
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: "src/index.ts",
      name: "common-ui",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["react", "react-dom", "react/jsx-runtime"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGlicy9jb21tb24tdWkvdml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdmtvbm92YWxjaHVrL3Byb2plY3RzL215b3JnL2xpYnMvY29tbW9uLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdmtvbm92YWxjaHVrL3Byb2plY3RzL215b3JnL2xpYnMvY29tbW9uLXVpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy92a29ub3ZhbGNodWsvcHJvamVjdHMvbXlvcmcvbGlicy9jb21tb24tdWkvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgdml0ZVRzQ29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBjYWNoZURpcjogJy4uLy4uL25vZGVfbW9kdWxlcy8udml0ZS9jb21tb24tdWknLFxuXG4gIHBsdWdpbnM6IFtcbiAgICBkdHMoe1xuICAgICAgZW50cnlSb290OiAnc3JjJyxcbiAgICAgIHRzQ29uZmlnRmlsZVBhdGg6IHBhdGguam9pbihfX2Rpcm5hbWUsICd0c2NvbmZpZy5saWIuanNvbicpLFxuICAgICAgc2tpcERpYWdub3N0aWNzOiB0cnVlLFxuICAgIH0pLFxuICAgIHJlYWN0KCksXG4gICAgdml0ZVRzQ29uZmlnUGF0aHMoe1xuICAgICAgcm9vdDogJy4uLy4uLycsXG4gICAgfSksXG4gIF0sXG5cbiAgLy8gVW5jb21tZW50IHRoaXMgaWYgeW91IGFyZSB1c2luZyB3b3JrZXJzLlxuICAvLyB3b3JrZXI6IHtcbiAgLy8gIHBsdWdpbnM6IFtcbiAgLy8gICAgdml0ZVRzQ29uZmlnUGF0aHMoe1xuICAvLyAgICAgIHJvb3Q6ICcuLi8uLi8nLFxuICAvLyAgICB9KSxcbiAgLy8gIF0sXG4gIC8vIH0sXG5cbiAgLy8gQ29uZmlndXJhdGlvbiBmb3IgYnVpbGRpbmcgeW91ciBsaWJyYXJ5LlxuICAvLyBTZWU6IGh0dHBzOi8vdml0ZWpzLmRldi9ndWlkZS9idWlsZC5odG1sI2xpYnJhcnktbW9kZVxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzLlxuICAgICAgZW50cnk6ICdzcmMvaW5kZXgudHMnLFxuICAgICAgbmFtZTogJ2NvbW1vbi11aScsXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcbiAgICAgIC8vIENoYW5nZSB0aGlzIHRvIHRoZSBmb3JtYXRzIHlvdSB3YW50IHRvIHN1cHBvcnQuXG4gICAgICAvLyBEb24ndCBmb3JnZXQgdG8gdXBkYXRlIHlvdXIgcGFja2FnZS5qc29uIGFzIHdlbGwuXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ2NqcyddLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gRXh0ZXJuYWwgcGFja2FnZXMgdGhhdCBzaG91bGQgbm90IGJlIGJ1bmRsZWQgaW50byB5b3VyIGxpYnJhcnkuXG4gICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3QvanN4LXJ1bnRpbWUnXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU8sU0FBUztBQUNoQixZQUFZLFVBQVU7QUFMdEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsVUFBVTtBQUFBLEVBRVYsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsV0FBVztBQUFBLE1BQ1gsa0JBQXVCLFVBQUssa0NBQVcsbUJBQW1CO0FBQUEsTUFDMUQsaUJBQWlCO0FBQUEsSUFDbkIsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLElBQ04sa0JBQWtCO0FBQUEsTUFDaEIsTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBYUEsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUE7QUFBQTtBQUFBLE1BR1YsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3ZCO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxTQUFTLGFBQWEsbUJBQW1CO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
