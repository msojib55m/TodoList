import { createRoot } from 'react-dom/client'
import "./assets/style.css";
import { RouterProvider } from 'react-router';
import router from './router';
import api from './api';

api.get("/todos").then(response => {
  console.log("API Status:", response.data);
}).catch(error => {
  console.error("API Error:", error);
});
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
