// Import the decryptAES function from a CryptoService module.
import { decryptAES } from "../../services/CryptoService";
import SwalAlert from "../../services/swalService/SwalService";
import ToastService from "../../services/toastService/ToastService";

// Function to transform a successful response.
const { error } = SwalAlert();

export const transformSucessResponse = async (response, meta, arg) => {
    let resData = response;
    let apiData = null;
    if (resData?.isEnType) {
        resData = decryptAES(resData);
        apiData = resData;
    }
    else if (meta?.request?.url?.includes("DownloadFile") && arg?.fileName) {
        apiData = resData;
    }
    else if (meta?.request?.url?.includes("Report")) {
        return resData;
    }
    else if (typeof resData?.responseData === "string") {
        try {
            apiData = JSON.parse(resData.responseData);
        } catch (e) {
            console.error("JSON parse failed:", e);
            apiData = null;
        }
    }
    if (!apiData) {
        apiData = resData;
    }
    if (
        meta?.request?.url?.includes("DownloadFile") &&
        meta?.response?.status === 200 &&
        arg?.fileName
    ) {
        return {
            fileName: arg.fileName,
            fileData: apiData
        };
    }
    if (apiData?.statusCode === 200) {
        const content = apiData?.responseItem?.responseContent;
        if (content?.errorMessage) {
            error(content.errorMessage);
        }

        return content ?? null;
    }
    const errMsg = apiData?.responseItem?.responseContent?.errorMessage;

    if (errMsg) {
        error(errMsg);
    } else {
        error("Something went wrong with the API");
    }

    return null;
};

export const transformSucessResponse2 = async (response, meta, arg) => {
    let rData = response && (response.responseData ?? response);
    let apiData = rData;

    // Check if the response is encrypted.
    if (response && response.isEnType) {
        rData = decryptAES(rData); // Decrypt the data.
        apiData = rData
    }
    else if (meta.request.url.includes('DownloadFile') && arg?.fileName) {
        rData = response; // Decrypt the data.
        apiData = rData;
    }
    else if (meta.request.url.includes('Report')) {
        // Decrypt the data.
        return response;
    }
    else {
        try {
            apiData = typeof rData === 'string' ? JSON.parse(rData) : rData;
        } catch (e) {
            apiData = { statusCode: meta?.response?.status || 500, message: 'Parsing error' };
        }
    }

    // Parse the response data into JSON.
    //let apiData = rData;

    // Check if the API response status code is 200 (OK).
    if (meta.request.url.includes('DownloadFile') && meta.response.status === 200 && arg.fileName) {
        const responseData = {
            fileName: arg.fileName,
            fileData: apiData
        }
        return responseData;
    }
    if (apiData && apiData.statusCode === 200) {
        return apiData.data ?? null; // Return the data.
    }
    else {
        // Show a toast or alert with the API error message.
        error(apiData.message ? apiData.message : "Something went wrong with the API");
        return null;
    }
}

// Function to transform an error response.
export const transformErrorResponse = (response, meta, arg) => {
    // Check if the API call encountered a network error.
    if (response.status && response.status === "FETCH_ERROR") {
        // Show a toast or alert for network error.
        // error("Oops! Something went wrong while fetching data from the server. Please try again later.");
        ToastService.error("Oops! Something went wrong while fetching data from the server. Please try again later.");
        return null;
    }

    // Handle HTTP 402 Payment Required (quota/plan issues or metered billing)
    if (response.status === 402) {
        ToastService.error("Access to this resource requires payment or your quota is exceeded. Please check your plan/billing or contact support.");
        return null;
    }

    // Check if the API call encountered a parsing error and has a 500 status code.
    if (response.status && response.status === "PARSING_ERROR" && response.originalStatus === 500) {
        const errorMessage = response.data.toLowerCase(); // Convert to lowercase for case-insensitive matching

        // Check if the error message indicates a SQL Server or connection issue.
        if (errorMessage.includes("sql server") || errorMessage.includes("connection") || errorMessage.includes("provider")) {
            ToastService.error("Oops! There was an issue with the SQL Server or database connection. Please try again later and ensure that the SQL Server is configured correctly.");
            return null;

        } else {
            // Show a toast or alert for a generic parsing error.
            error("Oops! There was an issue processing the server's response. Please try again later.");
            return null;

        }
    }

    // Check if the response contains responseData.
    if (response.status && response.data.responseData) {
        let rData = response.data.responseData;


        // Check if the response is encrypted.
        if (response.data.isEnType) {
            rData = decryptAES(rData); // Decrypt the data.
        } else {
            rData = JSON.parse(rData);
        }

        // Check if the response status code is 400 (Bad Request).
        if (response.status === 400) {
            if (rData.errors) {
                let errorMessage = "Validation Error: " + rData.message;

                // Iterate through the errors and append them to the error message.

                for (const fieldName in rData.errors) {
                    if (rData.errors.hasOwnProperty(fieldName)) {
                        errorMessage += "\n" + fieldName + ": " + rData.errors[fieldName].join("\n");
                    }
                }


                // Show a toast or alert with the validation error message.
                error(errorMessage);
            }
        }
        else if (response.status === 500) {
            let errorMessage = "Somthing wrong in API call!! Please contact your admin";
            error(errorMessage);
        }

    }
    if (meta.request.url.includes("Report") && response.data && response.data.type && response.status === 404) {
        error("No Data found for particular Report", "OOPS! Not Found!");
    }
}
