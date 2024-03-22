import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoginResponseDto } from '@/interfaces/Response/LoginResponseDto';
import { LoginStatePayload } from '@/interfaces/StateManagement/LoginStatePayload';

import { RootState } from '../store';

interface ProjectDetailSlice {
    loginData: LoginResponseDto | null;
}

const initState: ProjectDetailSlice = {
    loginData: null,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState: initState,
    reducers: {
        addLoginData(state: ProjectDetailSlice, action: PayloadAction<Pick<LoginStatePayload, 'loginData'>>) {
            state.loginData = action.payload.loginData;
        },
    },
});

export const { addLoginData } = loginSlice.actions;
export const selectLoginData = (state: RootState) => {
    return state.login;
};
export default loginSlice.reducer;
