import { useAppDispatch } from "../../../hooks/useStore"
import { deleteUserById, getUsers } from "../../../redux/users/user.slice";

export const useUsersActions = () => {
    const dispatch = useAppDispatch();
    const getAllUsers = () => {
        dispatch(getUsers());
    }
    const removeUser = (id: string) => {
        dispatch(deleteUserById(id));
    }
    return { dispatch, getAllUsers, removeUser };
}