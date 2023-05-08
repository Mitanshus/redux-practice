import { useDispatch } from "react-redux"

import {configureStore} from "@reduxjs/toolkit"
import { useSelector } from "react-redux/es/exports"
import { PersonSlice } from "./personSlice"
import { TypedUseSelectorHook } from "react-redux/es/types"


export const store=configureStore({
    reducer :{
        person:PersonSlice.reducer
    }
})

export const useAppDispatch :() => typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
