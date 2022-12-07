import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tenants:null,
    tenant:null,
}




const tenantSlice = createSlice({
    name: 'tenant',
    initialState,
    reducers: {
        tenants(state, action) {
            const tenants = action.payload.tenants;
            state.tenants = tenants;
        },
        tenant(state, action) {
            const tenant = action.payload.tenant;
            state.tenant = tenant;
        },
    }

})

export const tenantActions = tenantSlice.actions;

export default tenantSlice.reducer;
