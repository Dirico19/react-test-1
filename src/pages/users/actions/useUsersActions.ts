import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStore"
import { addUser, deleteUserById, getUsers, updateUser } from "../../../redux/users/user.slice";
import { User } from "../../../models";

export const useUsersActions = () => {
    const dispatch = useAppDispatch();
    const { users, loading, error } = useAppSelector(state => state.users);

    const useGetUsers = useCallback(() => {
        dispatch(getUsers());
    }, [dispatch]);
    const useAddUser = useCallback((user: User) => {
        dispatch(addUser(user));
    }, [dispatch]);
    const useUpdateUser = useCallback((user: User) => {
        dispatch(updateUser(user));
    }, [dispatch]);
    const useDeleteUser = (id: string) => {
        dispatch(deleteUserById(id));
    }
    return { 
        users,
        loading,
        error,
        useGetUsers,
        useAddUser,
        useUpdateUser,
        useDeleteUser
    };
}