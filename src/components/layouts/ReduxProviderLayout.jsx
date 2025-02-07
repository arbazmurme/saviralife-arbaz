"use client"; // This is required because Redux Provider uses client-side context

import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function ReduxProviderLayout({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

