"use client";

import { createContext, type PropsWithChildren, useContext } from "react";

import { useAuthState } from "@/utils/hooks/authState";
import { auth } from "@/lib/firebase/config";
import { type User } from "firebase/auth";

export const AuthCtx = createContext<{ user: User | null } | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { user } = useAuthState(auth);
  return <AuthCtx.Provider value={{ user }}>{children}</AuthCtx.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthCtx);
  if (!context) throw new Error();
  return context;
};
