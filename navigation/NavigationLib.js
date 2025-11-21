import { useRouter } from "next/navigation";
// import { IsQueryParamsEncryption } from '../utils/AppSetting';
//import { encryptionData, decryptionData } from "../utils/Encryption";

//application routes
export const Routes = {

  WarehouseApp: {
    rawPath: "/portfolio/features/WarehouseApp",
    urlPath: "/portfolio/features/WarehouseApp",
    isQueryParams: false,
    isEncryptParams: false,
  },

  CapitaLand: {
    rawPath: "/portfolio/features/CapitaLand",
    urlPath: "/portfolio/features/CapitaLand",
    isQueryParams: false,
    isEncryptParams: false,
  },
 
  SgTech: {
    rawPath: "/portfolio/features/SgTech",
    urlPath: "/portfolio/features/SgTech",
    isQueryParams: false,
    isEncryptParams: false,
  },

  Csa: {
    rawPath: "/portfolio/features/Csa",
    urlPath: "/portfolio/features/Csa",
    isQueryParams: false,
    isEncryptParams: false,
  },
  
  BrightLogix: {
    rawPath: "/portfolio/features/BrightLogix",
    urlPath: "/portfolio/features/BrightLogix",
    isQueryParams: false,
    isEncryptParams: false,
  },

  Scal: {
    rawPath: "/portfolio/features/Scal",
    urlPath: "/portfolio/features/Scal",
    isQueryParams: false,
    isEncryptParams: false,
  },

  Edo: {
    rawPath: "/portfolio/features/Edo",
    urlPath: "/portfolio/features/Edo",
    isQueryParams: false,
    isEncryptParams: false,
  },

  BoysTown: {
    rawPath: "/portfolio/features/BoysTown",
    urlPath: "/portfolio/features/BoysTown",
    isQueryParams: false,
    isEncryptParams: false,
  },

  Rpa: {
    rawPath: "/portfolio/features/Rpa",
    urlPath: "/portfolio/features/Rpa",
    isQueryParams: false,
    isEncryptParams: false,
  },

  Qvisa: {
    rawPath: "/portfolio/features/Qvisa",
    urlPath: "/portfolio/features/Qvisa",
    isQueryParams: false,
    isEncryptParams: false,
  },

  Acca: {
    rawPath: "/portfolio/features/Acca",
    urlPath: "/portfolio/features/Acca",
    isQueryParams: false,
    isEncryptParams: false,
  },

  Clixz: {
    rawPath: "/portfolio/features/Clixz",
    urlPath: "/portfolio/features/Clixz",
    isQueryParams: false,
    isEncryptParams: false,
  },

  KbCouriers: {
    rawPath: "/portfolio/features/KbCouriers",
    urlPath: "/portfolio/features/KbCouriers",
    isQueryParams: false,
    isEncryptParams: false,
  },

  
  AssemblyBlocks: {
    rawPath: "/portfolio/features/AssemblyBlocks",
    urlPath: "/portfolio/features/AssemblyBlocks",
    isQueryParams: false,
    isEncryptParams: false,
  },

  
  AccaEvoting: {
    rawPath: "/portfolio/features/AccaEvoting",
    urlPath: "/portfolio/features/AccaEvoting",
    isQueryParams: false,
    isEncryptParams: false,
  },

  
  CakeShop: {
    rawPath: "/portfolio/features/CakeShop",
    urlPath: "/portfolio/features/CakeShop",
    isQueryParams: false,
    isEncryptParams: false,
  },

  
  FlyingCape: {
    rawPath: "/portfolio/features/FlyingCape",
    urlPath: "/portfolio/features/FlyingCape",
    isQueryParams: false,
    isEncryptParams: false,
  },

  Ecertificate: {
    rawPath: "/portfolio/features/Ecertificate",
    urlPath: "/portfolio/features/Ecertificate",
    isQueryParams: false,
    isEncryptParams: false,
  },

  
  PemmasaniLlc: {
    rawPath: "/portfolio/features/PemmasaniLlc",
    urlPath: "/portfolio/features/PemmasaniLlc",
    isQueryParams: false,
    isEncryptParams: false,
  },


  AccaAssessmentSite: {
    rawPath: "/portfolio/features/AccaAssessmentSite",
    urlPath: "/portfolio/features/AccaAssessmentSite",
    isQueryParams: false,
    isEncryptParams: false,
  },

  CareerNurtureCraft: {
    rawPath: "/portfolio/features/CareerNurtureCraft",
    urlPath: "/portfolio/features/CareerNurtureCraft",
    isQueryParams: false,
    isEncryptParams: false,
  },

  Oms: {
    rawPath: "/portfolio/features/Oms",
    urlPath: "/portfolio/features/Oms",
    isQueryParams: false,
    isEncryptParams: false,
  },

  Kcs: {
    rawPath: "/portfolio/features/Kcs",
    urlPath: "/portfolio/features/Kcs",
    isQueryParams: false,
    isEncryptParams: false,
  },

  FlyingCapeApp: {
    rawPath: "/portfolio/features/FlyingCapeApp",
    urlPath: "/portfolio/features/FlyingCapeApp",
    isQueryParams: false,
    isEncryptParams: false,
  },

  QrCodeScannerApp: {
    rawPath: "/portfolio/features/QrCodeScannerApp",
    urlPath: "/portfolio/features/QrCodeScannerApp",
    isQueryParams: false,
    isEncryptParams: false,
  },

  Cirlinq: {
    rawPath: "/portfolio/features/Cirlinq",
    urlPath: "/portfolio/features/Cirlinq",
    isQueryParams: false,
    isEncryptParams: false,
  },

  BeverageWrx: {
    rawPath: "/portfolio/features/BeverageWrx",
    urlPath: "/portfolio/features/BeverageWrx",
    isQueryParams: false,
    isEncryptParams: false,
  },

};

//Common navigation method
export const Navigate = (routePath, params = []) => {
    if (routePath) {
      if (params.length > 0) {
        let queryParams = "";
        // if (IsQueryParamsEncryption && routePath.isEncryptParams) {
        //   params.forEach(element => {
        //     queryParams = queryParams + "/" + encryptionData(element, 0);
        //   });
        // }
        // else {
        params.forEach((element) => {
          (queryParams = queryParams + "/" + element), 0;
        });
        //}
        Router.push(routePath.rawPath, routePath.urlPath + queryParams);
      } else {
        Router.push(routePath.rawPath, routePath.urlPath);
      }
    } else {
      //TODO: Redirect to page not found
    }
  };
  
  //Common navigation method
  export const NavigateBack = () => {
    Router.back();
  };
  
  export const GetRouteParams = (isEncryptedParams = false) => {
    //if (isEncryptedParams && IsQueryParamsEncryption) {
    // let params = Router.query;
    // if (params) {
    //   Object.keys(params).forEach((key) => {
    //     params[key] = decryptionData(params[key], false);
    //   })
    // }
    // return params;
    //}
    //else {
    //  return Router.query;
    //}
  };
  