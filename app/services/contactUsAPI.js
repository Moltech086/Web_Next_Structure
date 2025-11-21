import { createApi } from "@reduxjs/toolkit/query/react";
import { transformSucessResponse, transformErrorResponse } from "../../utils/API/responseMiddleware";
import {  encryptQueryString, transformRequest, transformRequestwithoutEncryption } from "../../utils/API/requestMiddleware"
import { customFetchBase, fileUploadQuery } from '../../utils/API/fetchBaseQuery';


const contactUsAPI = createApi({
    reducerPath: 'contactUsAPI',
    baseQuery: customFetchBase,
 
    tagTypes: ['User'],
    endpoints: (builder) => ({

        // Add User 
        addContactUs: builder.mutation({
            query: (userDetails) => ({
                url: 'ContactUs/AddContactUs',
                method: 'POST',
                body: transformRequest(userDetails)
            }),
            transformResponse: transformSucessResponse,
            transformErrorResponse: transformErrorResponse
        }),

        // uploadContactUsFile: builder.mutation({
        //     query: (request) => {
                 
        //         let formData = new FormData();
        //         formData.append("file", request.file);
        //         formData.append("storagePath", request.filename);

                
        //         return {
        //             url: 'ContactUs/UploadContactUsFile',
        //             method: 'POST',
        //             body: transformRequestwithoutEncryption(formData),   
        //             baseQuery: fileUploadQuery,
                     
        //         };
        //     },
        //     transformResponse: transformSucessResponse,
        //     transformErrorResponse: transformErrorResponse
        // }),

        getAllCityInCareer: builder.query({
            query: () => ({
                url: encryptQueryString('/Career/GetAllCityInCareer'),
                method: 'GET',
            }),
            transformResponse: transformSucessResponse,
            transformErrorResponse: transformErrorResponse,
        }),

        getTechnology: builder.query({
            query: () => ({
                url: encryptQueryString('/JobCareer/GetTechnology'),
                method: 'GET',
            }),
            transformResponse: transformSucessResponse,
            transformErrorResponse: transformErrorResponse,
        }),

        getAllJobCareerList: builder.query({
            query: (request) => ({
                url: `/JobCareer/GetAllJobCareerList/?searchText=${request.searchText}&technologyId=${request.technologyId}`,
                Method: 'GET',
            }),
            transformResponse: transformSucessResponse,
            transformErrorResponse: transformErrorResponse
        }),
        getJobCareerDetailsById: builder.query({
            query: (request) => ({
                url: `/JobCareer/GetJobCareerDetailsById/?id=${request}`,
                method: 'GET',
            }),
            transformResponse: transformSucessResponse,
            transformErrorResponse: transformErrorResponse,
        }),
    })
})
export const { 
    useAddContactUsMutation,
    // useUploadContactUsFileMutation,
    useLazyGetAllCityInCareerQuery,
    useLazyGetTechnologyQuery,
    useLazyGetAllJobCareerListQuery,
    useLazyGetJobCareerDetailsByIdQuery,


} = contactUsAPI;

export default contactUsAPI;