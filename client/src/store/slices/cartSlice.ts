import {createAsyncThunk, createSlice, Middleware, PayloadAction} from "@reduxjs/toolkit";
import {ICart, ICartItem, IOrderData} from "../../types/types";
import {RootState} from "../rootReducer";
import {SizesState} from "../../components/ProductSingle/ProductSingle";
import axios from "axios";
import {BASE_URL} from "../../utils/CONSTS";


const initialState: ICart = {
    items: [],
    orderData: {products: []},
    totalSum: 0,

};
type changeCartType = ReturnType<typeof cartSlice.actions.addItem>;
export const onChangeCart: Middleware<object, RootState> = store => next => (action) => {
    const typedAction = action as { type: string };
    next(action);
    if (
        typedAction.type === cartActions.addItem.type
        || typedAction.type === cartActions.setProductSizes.type
        || typedAction.type === cartActions.removeItem.type
        || typedAction.type === cartActions.setCartState.type
    ) {
        store.dispatch(cartActions.setTotals());
        localStorage.setItem("cart", JSON.stringify(store.getState().cartReducer));
        store.dispatch(cartActions.setOrderData());

    }
};

function calculateTotalCount(sizes: SizesState): number {
    return Object.values(sizes).reduce((acc, item) => acc += +item.count, 0);
}

export const sendOrder = createAsyncThunk<
    any,                // Тип данных, возвращаемых при успешном выполнении
    { data: IOrderData, token: string },          // Тип аргументов, передаваемых в thunk
    { state: RootState }>(
    'cart/sendOrder',
    async (payload) => {
        const res = await axios.post(BASE_URL + '/api/orders', payload.data, {
            headers: {
                Authorization: `Bearer ${payload.token}`,
            }
        });
        return res.data;
    }
);


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<ICartItem>) {
            const search: number = state.items.findIndex(item => item.id === action.payload.id);
            if (search !== -1) {
                const newSizes: SizesState = {};
                Object.keys(action.payload.addedSizes).forEach(key => {
                    newSizes[key] = {
                        ...action.payload.addedSizes[key],
                        count: action.payload.addedSizes[key].count + (state.items[search].addedSizes[key].count || 0)
                    };
                })
                state.items[search] = {
                    ...state.items[search],
                    addedSizes: {
                        ...state.items[search].addedSizes,
                        ...newSizes,
                    }
                }
                return;
            }
            state.items.push({...action.payload});
            state.items
            return state;
        },
        setProductSizes(state, action: PayloadAction<{ id: string, sizes: any }>) {
            const search: number = state.items.findIndex(item => item.id === action.payload.id);
            Object.keys(action.payload.sizes).forEach(key => {
                state.items[search].addedSizes[key] = {
                    ...state.items[search].addedSizes[key],
                    count: action.payload.sizes[key],
                }
            })
            return state;
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.id !== action.payload);
            return state;
        },
        setOrderData(state) {
            const newProducts:any[] = [];
            state.items.forEach(item => {
                const product = {
                    sku_uuid: item.attributes.skus[0].id,
                    sku_code: item.attributes.skus[0].attributes.code,
                    sizes: Object.keys(item.addedSizes).map(key => {
                        return {
                            size_uuid: item.addedSizes[key].name,
                            quantity: item.addedSizes[key].count
                        }
                    }),
                    product_name: item.attributes.name,
                };
                newProducts.push(product);
            })
            state.orderData.products = [...newProducts];
        },
        setTotals(state) {

            calculate();


            function calculate(): void {
                calculateSum();
                calculateProductSum();

                function calculateSum(): void {
                    state.totalSum = state.items.reduce((acc, item) => {
                        const price: number = item.attributes.skus[0].attributes.price.amount
                        const total: number = calculateTotalCount(item.addedSizes) * price;
                        return total / 100;
                    }, 0)
                }

                function calculateProductSum(): void {
                    state.items.forEach((item, index) => {
                        const total = calculateTotalCount(item.addedSizes);
                        state.items[index].totalProductSum = total * item.attributes.skus[0].attributes.price.amount / 100;
                    })
                }


            }
        },
        setCartState(state, action: PayloadAction<ICart>) {
            return state = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(sendOrder.fulfilled, (state, {payload}) => {
            alert('Заказ оформлен!\n\nС вами свяжется менеджер для подтверждения.');
        })
    }
});


export const {actions: cartActions, reducer: cartReducer} = cartSlice;
// export const updateUser = createAsyncThunk(
//     'user/updateUser',
//     async (payload) => {
//         const res = await axios.put(CONSTS + '/users/' + payload.id, {...payload.data})
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
