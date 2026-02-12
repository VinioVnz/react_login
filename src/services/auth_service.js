import { apiFetch } from "./api";

export const loginRequest = async (email, password) => {
  const data = await apiFetch("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  return data;
};