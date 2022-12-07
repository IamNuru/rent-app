import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    properties: null,
    property: null,
    filteredProperties: null,
}




const propertySlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        properties(state, action) {
            const properties = action.payload;
            state.properties = properties;
        },

        property(state, action) {
            const property = action.payload.property;
            state.property = property;
        },

        filterProperties(state, action) {
            state.filteredProperties = state.properties.filter((property) => {
                const regex = new RegExp(`${action.payload}`, "gi");
                return (
                    property.title.match(regex) ||
                    property.description.match(regex) ||
                    property.type.match(regex)
                );
            });
        },

        sortPropertiesByPriceLowToHigh(state, action) {
            const items = state.properties;
            state.filteredProperties = items.sort((a, b) => a.price - b.price)
        },

        sortPropertiesByPriceHighToLow(state, action) {
            const items = state.properties;
            state.filteredProperties = items.sort((a, b) => b.price - a.price)
        },

        sortPropertiesByNewest(state, Action){
            const items = state.properties;
            state.filteredProperties = items.sort((a, b) => b.id - a.id)
        },

        sortPropertiesByOldest(state, Action){
            const items = state.properties;
            state.filteredProperties = items.sort((a, b) => a.id - b.id)
        },

        sortByPropertyType(state, action){
            const items =  state.properties;
            state.filteredProperties = items.filter((property) => {
                const regex = new RegExp(`${action.payload}`, "gi");
                return (
                    property.type.match(regex)
                );
            });
        },

        filterByAmenities(state, action){
            const items = state.properties;
            state.filteredProperties = state.properties.map((p) =>{
                return p?.amenities?.length > 0 ? items.p?.amenities?.filter((el) => el.toLowerCase().includes(action.payload.toLowerCase())) : items
            })
        },


    }

})

export const propertyActions = propertySlice.actions;

export default propertySlice.reducer;
