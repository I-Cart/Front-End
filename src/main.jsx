import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "./components/ui/toaster";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>Loading</p>} persistor={persistor}>
        <AppRouter />
        <Toaster />
      </PersistGate>
    </Provider>
  </StrictMode>
);
