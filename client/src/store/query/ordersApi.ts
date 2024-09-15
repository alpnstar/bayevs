import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL, ORDERS_PER_PAGE} from "../../utils/CONSTS";
import {ApiResponse, ApiResponseExtended, ItemsApiParams, OrderItem} from "../../types/types";
import {buildUrl, clearParams} from "../../utils/common";
import {RootState} from "../rootReducer";

export const ordersApi = createApi({
    reducerPath: 'orders',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/api/customers`,
        prepareHeaders: (headers, { getState }) => {
            // Добавляем токен авторизации из состояния, если он есть
            const token = (getState() as RootState).userReducer.accessToken;
            console.log(token)
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            // Устанавливаем заголовок Content-Type
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getOrderById: builder.query<ApiResponse<OrderItem>, string>({
            query: (id) => `/orders/${id}`,  // используем id в качестве строки
        }),
        getOrders: builder.query<ApiResponse<OrderItem[]>, {
            params?: ItemsApiParams,
        }>({
            query: ({params = {}}) => buildUrl(`/orders`, clearParams({
                // 'pagination[per_page]': ORDERS_PER_PAGE,
                ...params,
            })),
        }),
    }),
});
export const {
    useGetOrdersQuery,
    useGetOrderByIdQuery,
} = ordersApi;