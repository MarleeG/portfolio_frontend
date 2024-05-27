import { createContext } from "react";

export const ProjectContext = createContext({
    isDrawerOpen: true,
    openDrawer: () => {
    },
    closeDrawer: () => {
    }
});