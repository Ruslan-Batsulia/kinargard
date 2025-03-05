const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export async function signIn(
  email: string,
  password: string
) {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Authorization error:", error);
    return null;
  }
}
