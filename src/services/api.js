const API_URL = import.meta.env.VITE_API_BASE;

export const api = {
  get: async (endpoint) => {
    const res = await fetch(`${API_URL}${endpoint}`);
    return res.json();
  },

  post: async (endpoint, data) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },
};

export const safeCall = async (fn) => {
  try {
    return await fn();
  } catch (err) {
    console.error(err);
  }
};