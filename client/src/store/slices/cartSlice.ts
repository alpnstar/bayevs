import {createSlice} from "@reduxjs/toolkit";

interface ICartItem {
    id: number,
    img: string,
    price: string,
    title: string,
    quantity: number,
}

interface ICartState {
    cart: ICartItem[],
}

const initialState: ICartState = {
    cart: []
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, {payload}): void {
            state.cart.push(1);
        }
    }
});


// export const updateUser = createAsyncThunk(
//     'user/updateUser',
//     async (payload) => {
//         const res = await axios.put(BASE_URL + '/users/' + payload.id, {...payload.data})
//         return res.data;
//     }
// );


// const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         currentUser: null,
//         cart: [],
//         totalCartQuantity: 0,
//         isLoading: false,
//         formType: "signup",
//         showForm: false,
//     },
//     reducers: {
//         addItemToCart: (state, {payload}) => {
//             const search = state.cart.findIndex(item => item.product.id === payload.product.id);
//             if (search !== -1) {
//                 const item = state.cart[search];
//                 state.cart[search] = {
//                     ...item,
//                     quantity: payload.quantity,
//                 }
//             } else state.cart.push({
//                 quantity: payload.quantity,
//                 product: {
//                     ...payload.product,
//                 }
//             })
//         },
//         removeItemInCart: (state, {payload}) => {
//             state.cart = state.cart.filter(item => item.product.id !== payload);
//         },
//         getCart: (state) => {
//             state.cart = JSON.parse(localStorage.getItem('cart')) || [];
//         },
//         setCart: (state) => {
//             localStorage.setItem('cart', JSON.stringify(state.cart));
//         },
//         setCartTotalQuantity: (state) => {
//             state.totalCartQuantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
//         },
//         toggleForm: (state, {payload}) => {
//             state.showForm = payload;
//         },
//         toggleFormType: (state, {payload}) => {
//             state.formType = payload;
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(createUser.fulfilled, (state, {payload}) => {
//             state.currentUser = payload;
//         })
//         builder.addCase(loginUser.fulfilled, (state, {payload}) => {
//             state.currentUser = payload;
//         })
//         builder.addCase(updateUser.fulfilled, (state, {payload}) => {
//             state.currentUser = payload;
//         })
//     }
// })
// export const {actions: userActions, reducer: userReducer} = userSlice;
