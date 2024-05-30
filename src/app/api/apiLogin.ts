import axios from "axios";

interface LoginResponse {
  // Definisikan struktur data respons dari API
  token: string;
}

export async function ApiLogin(
  email: string,
  password: string
): Promise<LoginResponse> {
  try {
    const response = await axios.post(`{{url_api}}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
