
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

export const forgotPassword = async (email) => {
  const res = await fetch(`${baseUrl}/api/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return await res.json();
};

export const resetPassword = async (token, lozinka) => {
  const res = await fetch(`${baseUrl}/api/reset-password/${token}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lozinka }),
  });
  return await res.json();
};

export async function generateReport(prompt) {
  const response = await fetch(`${baseUrl}/api/generate-report`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // ⬅️ cookie-based auth
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Network response was not ok: ${response.status} - ${errorText}`
    );
  }

  const data = await response.json();
  return data.report;
}

export async function sendReport(email, pdfBlob) {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("pdf", pdfBlob, "izvestaj.pdf");

  const response = await fetch(`${baseUrl}/api/send-report`, {
    method: "POST",
    credentials: "include", // ⬅️ cookie-based auth
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to send report");
  }
}

export const sendContactMessage = async ({ name, email, message }) => {
  try {
    const res = await fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Slanje poruke nije uspelo");
    }

    return data;
  } catch (err) {
    throw err;
  }
};

