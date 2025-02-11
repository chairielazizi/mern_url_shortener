export const API_URL = "https://mern-url-shortener-48rm.onrender.com/api";
export const API_URL_LOCAL = "http://localhost:3000/api";

export interface UrlData {
  _id: string;
  originalURL: string;
  shortURL: string;
  clicks: number;
  createdAt: Date;
  updatedAt: Date;
}
