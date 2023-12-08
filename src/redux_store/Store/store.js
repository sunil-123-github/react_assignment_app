import { configureStore } from "@reduxjs/toolkit";
import MouldRecords from "../Slices/MouldRecords";

const store = configureStore({
    reducer : {
      MouldRecords : MouldRecords.reducer,
    }
})

export default store

