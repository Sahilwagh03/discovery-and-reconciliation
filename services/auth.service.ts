import api from "@/lib/axios";
import { LoginSchemaType } from "@/schemas/auth.schema";
import { authConstants } from "@/constant/authConstants";

export async function loginUser(payload: LoginSchemaType) {
  const { loginUrl } = authConstants;
  const username = payload.email;
  const password = payload.password;
  const basicToken = btoa(`${username}:${password}`);

  const { data } = await api.get(loginUrl, {
    headers: {
      Authorization: `Basic ${basicToken}`,
    },
  });

  return data;
}
