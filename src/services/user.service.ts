import axios from "axios";
import { User } from "../models";

const apiBaseUrl = "https://665a428f003609eda45d7fea.mockapi.io/test-users/api/";

const apiUsersUrl = apiBaseUrl + "users";

export const getApiUsers = async (): Promise<User[]> => {
    const res = await axios.get(apiUsersUrl);
    return await res.data;
}

export const addApiUser = async (user: User): Promise<User> => {
    const res = await axios.post(apiUsersUrl, user);
    return await res.data;
}

export const updateApiUser = async (user: User): Promise<User> => {
    const res = await axios.put(apiUsersUrl, user);
    return await res.data;
}

export const deleteApiUserById = async (id: string): Promise<User> => {
    const res = await axios.delete(`${apiUsersUrl}/${id}`);
    return await res.data;
}