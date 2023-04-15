import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        email: 'Email',
        phone_number: "Phone Number",
        street_address: "Street Address",
        city: "City",
        state: "State",
        zip: "Zip"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload }, 
        chooseEmail: (state, action) => { state.email = action.payload },
        choosePhone: (state, action) => { state.phone_number = action.payload },
        chooseStreet_Address: (state, action) => { state.street_address = action.payload },
        chooseCity: (state, action) => { state.city = action.payload },
        chooseState: (state, action) => { state.state = action.payload },
        chooseZip: (state, action) => { state.zip = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseEmail, choosePhone, chooseStreet_Address, chooseCity, chooseState, chooseZip } = rootSlice.actions