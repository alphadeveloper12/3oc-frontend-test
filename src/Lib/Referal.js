import { getToken } from "./jwt";
import { getUserId } from "./UserProfile";

export async function getReferalLink() {
  const token = getToken();
  const id = await getUserId();

  // Make a POST request to the backend
  const response = await fetch(
    `http://31.220.56.85/users/${id}/generate-referral-code`,
    {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": `${import.meta.env.VITE_ISDEVELOPMENT}`,
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (response.ok) {
    return {
      success: true,
      referralCode: data.referral_code,
      message: data.message,
    };
  } else {
    return { success: false, message: data.message };
  }
}
