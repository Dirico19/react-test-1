import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models";
import { addApiUser, deleteApiUserById, getApiUsers, updateApiUser } from "../../services";


interface UsersState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
}

export const getUsers = createAsyncThunk('users/getUsers', async (_, { rejectWithValue }) => {
    try {
        return await getApiUsers();
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const addUser = createAsyncThunk('users/addUser', async (user: User, { rejectWithValue }) => {
    try {
        return await addApiUser(user);
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const updateUser = createAsyncThunk('users/updateUser', async (user: User, { rejectWithValue }) => {
    try {
        return await updateApiUser(user);
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const deleteUserById = createAsyncThunk('users/deleteUserById', async (id: string, { rejectWithValue }) => {
    try {
        return await deleteApiUserById(id);
    } catch (error: any) {
        console.log(error);
        return rejectWithValue(error.response.data);
    }
});

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(addUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(addUser.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user);
            })
            .addCase(updateUser.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(deleteUserById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUserById.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.users = state.users.filter(user => user.id !== action.payload.id);
            })
            .addCase(deleteUserById.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default userSlice.reducer;