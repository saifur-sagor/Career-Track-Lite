import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { router } from "./routes/Router.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
const GOOGLE_CLIENT_ID = "135180288284-ddhsj2j720rmo3c40i0cmr1v3ifro36l.apps.googleusercontent.com";
createRoot(document.getElementById("root")).render(
  <StrictMode>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
        </GoogleOAuthProvider>
  </StrictMode>,
);
