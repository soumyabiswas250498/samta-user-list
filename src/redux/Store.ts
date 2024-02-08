import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './reducers/UserSlice';

const store = configureStore({
  reducer: {
    UserData: UserSlice,
  },
});

export default store;
