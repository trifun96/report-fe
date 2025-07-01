
import { baseUrl } from "./config";

export const registerUser = async (userData) => {
  try {
    const res = await fetch(`${baseUrl}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Registracija nije uspela");
    }

    return data;
  } catch (err) {
    throw err;
  }
};

export const loginUser = async (credentials) => {
  try {
    const res = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Prijava nije uspela");
    }

    return data;
  } catch (err) {
    throw err;
  }
};

export const logoutUser = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/logout`, {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Logout nije uspeo");
    }

    return data;
  } catch (err) {
    throw err;
  }
};
