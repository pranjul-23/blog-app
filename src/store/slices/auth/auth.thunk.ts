import { signupApi } from "../../../utils/apis.utils";
import authAxios from "../../../api/auth.axios";
import type { UserTypes } from "./auth.types";

export const signupUser = async (data: UserTypes, thunkAPI: any) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await authAxios.post(signupApi, {
      ...data,
    });
    return response?.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Something went wrong");
  }
};
