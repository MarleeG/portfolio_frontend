import { createContext } from "react";

export const UIContext = createContext({
    isDrawerOpen: true,
    openDrawer: () => {
    },
    closeDrawer: () => {
    }
});