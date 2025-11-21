import { createApi } from "@reduxjs/toolkit/query/react";
import { defaultBaseQuery } from "@/utils/API/fetchBaseQuery";

import { transformRequest } from "@/utils/API/requestMiddleware";
import { transformErrorResponse, transformSucessResponse } from "@/utils/API/responseMiddleware";

const commonAPI = createApi({
    reducerPath: 'commonAPI',
    baseQuery: defaultBaseQuery,

    endpoints: (builder) => ({

        sendUserNavigationData: builder.mutation({
            query: (userDetails) => ({
                url: 'Common/SendUserNavigationData',
                method: 'POST',
                body: transformRequest(userDetails)
            }),
            transformResponse: transformSucessResponse,
            transformErrorResponse: transformErrorResponse
        }),
    }),
});

export const { useSendUserNavigationDataMutation } = commonAPI;

export default commonAPI;