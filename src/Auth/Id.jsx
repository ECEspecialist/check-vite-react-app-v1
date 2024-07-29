import create from 'zustand';
import { persist } from 'zustand/middleware';

const useId = create(
  persist(
    (set) => ({
      username: "whoami",
      isLogin: false,
      isAdmin: false,
      keepMeLogin: false,
      setIsLogin: (newState) => set(({ isLogin: newState })),
      setIsAdmin: (newState) => set(({ isAdmin: newState })),
      setUsername: (newState) => set(({ username: newState })),
      setKeepMeLogin:(newState)=> set(({ keepMeLogin: newState }))
    }),
    {
      name: "persistedStore",
      getStorage: () => localStorage,
    }
  )
);

export default useId;
