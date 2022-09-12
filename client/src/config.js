const DEV_API_URL = "/api";
const PROD_API_URL = process.env.REACT_APP_API_URL;
export const API_URL =
  process.env.NODE_ENV === "production" ? PROD_API_URL : DEV_API_URL;