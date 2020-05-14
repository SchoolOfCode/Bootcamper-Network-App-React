import { createContext } from "react";
export const URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";
export const MAPAPIKEY = process.env.REACT_APP_MAPS_API_KEY;
export const adminUID = process.env.REACT_APP_ADMIN_UID;
export const ProfileContext = createContext(null);
