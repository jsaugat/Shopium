"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";

interface ProviderProps {
  children: React.ReactNode;
}

export const ReduxProvider = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
