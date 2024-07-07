import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://7088d9a9cf88757e8752635160ad8bd9@o4507534450163712.ingest.us.sentry.io/4507558294519808",
  // Only needed for SDK versions < 8.0.0
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      enableScreenshot: false,
      isEmailRequired: true,
    }),
  ],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
