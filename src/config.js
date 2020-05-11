import { createContext } from "react";
export const URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";
export const adminUID = process.env.REACT_APP_ADMIN_UID;
export const ProfileContext = createContext(null);
