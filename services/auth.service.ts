import axios from "axios";
import { LoginSchemaType } from "@/schemas/auth.schema";
import { authConstants } from "@/constant/authConstants";

export async function loginUser(payload: LoginSchemaType) {
  const { loginUrl } = authConstants;
  
  // Add 2000ms (2 seconds) delay to simulate loading
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // const { data } = await axios.post(loginUrl, payload);
  const data = {
    token: "mocked-jwt-token",
    user: {
      id: "12345",
      email: payload.email,
    }
  };
  
  return data;
}