import {createSlice, Middleware, PayloadAction} from "@reduxjs/toolkit";
import {ICart, ICartItem} from "../../types/types";
import {RootState} from "../rootReducer";


const initialState: ICart = {
    items: [],
    totalQuantity: 0,
    totalSum: 0,
};
type changeCartType = ReturnType<typeof cartSlice.actions.addItem>;
export const onChangeCart: Middleware<object, RootState> = store => next => (action) => {
    const typedAction = action as changeCartType;
    next(action);
    if (typedAction.type === cartActions.addItem.type
        || typedAction.type === cartActions.incrementItem.type
        || typedAction.type === cartActions.decrementItem.type) {

        store.dispatch(cartActions.setTotals());
        localStorage.setItem("cart", JSON.stringify(store.getState().cartReducer));
    }
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<ICartItem>) {
            const search: number = state.items.findIndex(item => item.id === action.payload.id);
            if (search !== -1) {
                state.items[search] = {
                    ...state.items[search],
                    quantity: state.items[search].quantity + 1,
                }
                return;
            }
            state.items.push({...action.payload});
            return state;
        },

        decrementItem(state, action: PayloadAction<{
            id: number,
            quantity: number,
        }>) {
            const elemIndex = state.items.findIndex(item => item.id === action.payload.id);
            const elem = state.items[elemIndex];
            if (elem.quantity - action.payload.quantity !== 0) {
                state.items[elemIndex] = {
                    ...elem,
                    quantity: elem.quantity - action.payload.quantity,
                }
                return state;
            }
            state.items = state.items.filter(item => item.id !== action.payload.id);
            return state;
        },
        incrementItem(state, action: PayloadAction<{
            id: number,
            quantity: number,
        }>) {
            const elemIndex = state.items.findIndex(item => item.id === action.payload.id);
            const elem = state.items[elemIndex];
            // if (elem.quantity - action.payload.quantity !== 0) {
            state.items[elemIndex] = {
                ...elem,
                quantity: elem.quantity + action.payload.quantity,
            }
            return state;
        },
        setTotals(state) {

            calculate();

            function calculate(): void {
                calculateSum();
                calculateQuantity();

                function calculateSum(): void {
                    state.totalSum = state.items.reduce((acc, item) => acc += item.price * item.quantity, 0)
                }

                function calculateQuantity(): void {
                    state.totalQuantity = state.items.reduce((acc, item) => acc += item.quantity, 0)
                }
            }
        },
        setCartState(state, action: PayloadAction<ICart>) {
            return state = action.payload;
        }
    }
});


export const {actions: cartActions, reducer: cartReducer} = cartSlice;

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
