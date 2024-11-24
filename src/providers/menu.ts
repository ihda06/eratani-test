import { create } from 'zustand'

interface MenuState {
    isOpen: boolean;
    toggleOpen: ()=>void
    hideMenu: ()=>void
  }

const useMenu = create<MenuState>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  hideMenu: () => set(() => ({ isOpen: false })),
}))

export default useMenu