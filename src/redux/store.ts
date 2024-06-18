import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/user.slice";

// const asyncDatabaseMiddleware: Middleware = () => (next: any) => async (action: any) => {
//     const { type, payload } = action;

//     if (type === 'users/deleteUserById') {
//         const id = payload;
//         try {
//             const res = await deleteApiUserById(id);
//             if (res.status === 200)
//                 return next(action);
//             else
//                 throw new Error(res.data.message);
//         } catch (err: any) {
//             console.error(err.message)
//         }
//     }

// }

export const store = configureStore({
    reducer: {
        users: userReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;