import CryptoJS from 'crypto-js';

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
const aesKey = process.env.NEXT_PUBLIC_AESKEY;
const aesIVKey = process.env.NEXT_PUBLIC_AESIVKEY;

const Key = CryptoJS.enc.Base64.parse(aesKey);
const IV = CryptoJS.enc.Base64.parse(aesIVKey);

function encryptSotrageData(data) {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey);
  return encryptedData.toString();
}

function decryptStorageData(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

// const encryptAES = (data) => {
//   const input = typeof data === 'object' ? JSON.stringify(data) : data.toString();
//   const encrypted = CryptoJS.AES.encrypt(input, Key, {
//     iv: IV,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   });
//   return encrypted.toString();
//   };



// const decryptAES = (encryptedData) => {
//   const decrypted = CryptoJS.AES.decrypt(encryptedData, Key, {
//     iv: IV,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   });

//   const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

//   try {
//     // Attempt to parse decrypted data as JSON
//     const parsedData = JSON.parse(decryptedText);
//     return parsedData;
//   } catch (error) {
//     // If parsing as JSON fails, return the decrypted data as is
//     return decryptedText;
//   }
// };

const encryptAES = (data, string) => {
  // Encrypt
  if (string === 1)
    data = JSON.stringify(data);

  var encprtArray = CryptoJS.enc.Utf8.parse(data);
  var decryptedText = CryptoJS.AES.encrypt(encprtArray, Key,
    {
      iv: IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
  // return decryptedText.ciphertext.toString(CryptoJS.enc.Base64);
  return decryptedText.ciphertext.toString(CryptoJS.enc.Hex);
}


// const encryptAES = (data) => {
//   const input = typeof data === 'object' ? JSON.stringify(data) : data.toString();

//   const encrypted = CryptoJS.AES.encrypt(input, Key, {
//     iv: IV,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   });

//   // return encrypted.toString();
//   return encrypted.ciphertext.toString(CryptoJS.enc.Base64);

//   // return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
// };


const decryptAES = (res) => {
  var response = { ...res };
  if (response.isEnType !== undefined && response.isEnType !== "undefined" && response.isEnType !== "null" && response.isEnType !== null) {
    if (response.isEnType === true) {
      var appkey = Key;
      var appkeyvalue = IV;
      var cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(response.responseData)
      });
      var decryptedText = CryptoJS.AES.decrypt(cipherParams, appkey, {
        iv: appkeyvalue,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      var data = decryptedText.toString(CryptoJS.enc.Utf8)
      if (res.responseType === 0) {
        return { ...JSON.parse(data) };
      }
      else {
        return data.toString();
      }
    }
    else {
      return { ...JSON.parse(res.typeData) };
    }
  }
  else {
    return response;
  }
}

const encryptUrlData = (data) => {
  const encrypted = encryptAES(data).replaceAll('/', 's2e0s21');
  return encrypted;
}

const decryptUrlData = (data) => {
  data = data.replaceAll('s2e0s21', '/');
  const decrypted = decryptAES(data);
  return decrypted;
}

export { encryptSotrageData, decryptStorageData, encryptAES, decryptAES, encryptUrlData, decryptUrlData };
