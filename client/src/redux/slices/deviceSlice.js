import {createSlice} from "@reduxjs/toolkit";

export const deviceSlice = createSlice({
    name: 'devices',
    initialState: {
        brands: [],
        types: [],
        devices: [],
        selectedType: {},
        selectedBrand: {}
    },
    reducers: {
        addBrand: (state, action) => {
            state.brands.push(action.payload)
        },
        addType: (state, action) => {
            state.types.push(action.payload)
        },
        setTypes: (state, action) => {
          state.types = action.payload
        },
        setBrands: (state, action) => {
          state.brands = action.payload
        },
        setDevices: (state, action) => {
          state.devices = action.payload
        },
        selectType: (state, action) => {
            state.selectedType = action.payload
        },
        selectBrand: (state, action) => {
            state.selectedBrand = action.payload
        }
    }
})

export const {selectType, setDevices, selectBrand, setTypes, setBrands, addType, addBrand} = deviceSlice.actions
export default deviceSlice.reducer