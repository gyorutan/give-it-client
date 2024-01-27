import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  auth: boolean;
  login: () => void;
  logout: () => void;

  name: string;
  setName: (name: string) => void;
}

const useAuth = create(
  persist<AuthStore>(
    (set) => ({
      auth: false,
      login: () => set({ auth: true }),
      logout: () => set({ auth: false }),

      name: "",
      setName: (name: string) => set(() => ({ name: name })),
    }),
    {
      name: "auth",
    }
  )
);

export default useAuth;
