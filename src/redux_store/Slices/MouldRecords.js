import { createSlice } from "@reduxjs/toolkit";

let initialState = [
    {
        partNumber: 'ABCD1234567',
        mouldNum: 3,
        NumOfCavity: 5,
        Desc: "lorem ipsum dollar summet",
        status: 'Completed'
    },
    {
        partNumber: 'ADCD1240000', // Corrected property name
        mouldNum: 4,
        NumOfCavity: 9,
        Desc: " Dolor sit amet, consectetur ",
        status: 'In Progress'
    },
    {
        partNumber: 'CKTD1240000',
        mouldNum: 9,
        NumOfCavity: 1,
        Desc: ' ligula eu turpis feugiat',
        status: 'Pending at Purchase',
    },

]

const MouldRecords = createSlice({
    name: 'MouldRecords',
    initialState : [],
    reducers: {
        addRecord: (state, action) => {
            state.push(action.payload)
        }
    }

})


export default MouldRecords;
export const { addRecord } = MouldRecords.actions;
