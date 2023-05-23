import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from '../utils/StatusCode'
const productSlice = createSlice({
    name: 'products',
    initialState: {
        data:[],
        status: StatusCode.IDEL
    },
    reducers: {
    //    fetchProducts(state, action){
    //     state.data = action.payload
    //    }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending,(status,action)=>{
            status.status = StatusCode.LOADING
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.status = StatusCode.IDEL
        })
        .addCase(getProducts.rejected,(status,action)=>{
            status.status = StatusCode.ERROR
        })
    }
});
export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;
export const getProducts = createAsyncThunk('products/get',async()=>{
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json()
    return result;
})
// export function getProducts(){
//     return async function getProductsThunk(dispatch, getState){
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json();
//         dispatch(fetchProducts(result));
//     }
// }