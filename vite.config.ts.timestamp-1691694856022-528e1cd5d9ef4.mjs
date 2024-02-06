// vite.config.ts
import { defineConfig } from "file:///C:/Users/VALKI/Desktop/code/react-carmarketplace/carmarketplace/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/VALKI/Desktop/code/react-carmarketplace/carmarketplace/node_modules/@vitejs/plugin-react/dist/index.mjs";
import replace from "file:///C:/Users/VALKI/Desktop/code/react-carmarketplace/carmarketplace/node_modules/@rollup/plugin-replace/dist/es/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      "process.env.REACT_APP_FIREBASE_API_KEY": JSON.stringify(process.env.REACT_APP_FIREBASE_API_KEY),
      "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
      "process.env.REACT_APP_FIREBASE_PROJECT_ID": JSON.stringify(process.env.REACT_APP_FIREBASE_PROJECT_ID),
      "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
      "process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
      "process.env.REACT_APP_FIREBASE_APP_ID": JSON.stringify(process.env.REACT_APP_FIREBASE_APP_ID)
    })
  ],
  build: {
    sourcemap: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxWQUxLSVxcXFxEZXNrdG9wXFxcXGNvZGVcXFxccmVhY3QtY2FybWFya2V0cGxhY2VcXFxcY2FybWFya2V0cGxhY2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFZBTEtJXFxcXERlc2t0b3BcXFxcY29kZVxcXFxyZWFjdC1jYXJtYXJrZXRwbGFjZVxcXFxjYXJtYXJrZXRwbGFjZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVkFMS0kvRGVza3RvcC9jb2RlL3JlYWN0LWNhcm1hcmtldHBsYWNlL2Nhcm1hcmtldHBsYWNlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCByZXBsYWNlIGZyb20gJ0Byb2xsdXAvcGx1Z2luLXJlcGxhY2UnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHJlYWN0KCksXG4gICAgICAgIHJlcGxhY2Uoe1xuICAgICAgICBwcmV2ZW50QXNzaWdubWVudDogdHJ1ZSxcbiAgICAgICAgJ3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9BUElfS0VZJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQSV9LRVkpLFxuICAgICAgICAncHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX0FVVEhfRE9NQUlOJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX0FVVEhfRE9NQUlOKSxcbiAgICAgICAgJ3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9QUk9KRUNUX0lEJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX1BST0pFQ1RfSUQpLFxuICAgICAgICAncHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VUKSxcbiAgICAgICAgJ3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQpLFxuICAgICAgICAncHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQUF9JRCc6IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9BUFBfSUQpLFxuICAgICAgICB9KSxcbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZYLFNBQVMsb0JBQW9CO0FBQzFaLE9BQU8sV0FBVztBQUNsQixPQUFPLGFBQWE7QUFHcEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ1IsbUJBQW1CO0FBQUEsTUFDbkIsMENBQTBDLEtBQUssVUFBVSxRQUFRLElBQUksMEJBQTBCO0FBQUEsTUFDL0YsOENBQThDLEtBQUssVUFBVSxRQUFRLElBQUksOEJBQThCO0FBQUEsTUFDdkcsNkNBQTZDLEtBQUssVUFBVSxRQUFRLElBQUksNkJBQTZCO0FBQUEsTUFDckcsaURBQWlELEtBQUssVUFBVSxRQUFRLElBQUksaUNBQWlDO0FBQUEsTUFDN0csc0RBQXNELEtBQUssVUFBVSxRQUFRLElBQUksc0NBQXNDO0FBQUEsTUFDdkgseUNBQXlDLEtBQUssVUFBVSxRQUFRLElBQUkseUJBQXlCO0FBQUEsSUFDN0YsQ0FBQztBQUFBLEVBR0w7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxFQUNiO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K