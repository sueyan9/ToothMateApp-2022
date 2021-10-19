import createDataContext from "./createDataContext";
import axiosApi from "../api/axios";
import { navigate } from "../navigationRef";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../api/axios";

const accountReducer = (state, action) => {
  switch (action.type) {
    case "user":
      return { errorMessage: "", token: action.payload };
  }
};

const user = (dispatch) => async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await axiosApi.post("/user", token);
    dispatch({ type: "user", payload: response.data.user });
  } catch (err) {}
};

export const { Provider, Context } = createDataContext(
  accountReducer,
  { user },
  { token: null, errorMessage: "" }
);
