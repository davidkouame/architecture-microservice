import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    products: [],
    productsOrder: [],
    nbreTransactions: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    addProduct: (state, action) => {
        console.log(action.payload)
    },
    addProducts: (state, action) => {
        state.products = action.payload.products
        console.log("product => "+JSON.stringify(state.products))
    },
    addProductsOrder: (state, action) => {
        let productsFilter = state.products.filter(product => product.id == action.payload.product_id)
        console.log("ProductsFilter =>"+JSON.stringify(productsFilter));
        // Check if product exist in products database
        if(productsFilter.length > 0){
            // Check if the product exists in products orders
            let productFilterCheck = state.productsOrder.filter(product => product.id == productsFilter[0].id).length
            console.log("productFilterCheck => "+JSON.stringify(productFilterCheck))
            if(productFilterCheck > 0){
                state.productsOrder
                .filter(product => product.id == productsFilter[0].id)
                .map(product => {
                    product.qte = product.qte + 1 
                    return product
                })
            }else{
                let product = productsFilter[0]
                product.qte = 1
                state.productsOrder.push(product)
            }
        }
        console.log(JSON.stringify(state.productsOrder))
    },
    clearProductsOrder: (state) =>{
      state.productsOrder = []
    },
    pushData: (state, action) => {
      state = {...state,...action.payload}
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addProduct, addProducts, addProductsOrder, clearProductsOrder, pushData } = counterSlice.actions
export const selectCount = (state) => state.value
export const selectProducts = (state) => state.products
export const selectProductsOrder = (state) => state.productsOrder
export const selectTransactionsNbre = (state) => state.nbreTransactions
export const selectData = (state, key) => state[key]


export const NBRE_TRANSACTION = 'NBRE_TRANSACTION'

export default counterSlice.reducer