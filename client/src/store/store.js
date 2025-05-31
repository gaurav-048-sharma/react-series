import {configureStore} from '@reduxjs/toolkit';
import todosSlice  from '../feature/todo/todoSlice';

export const store = configureStore({
    reducer: todosSlice
})
