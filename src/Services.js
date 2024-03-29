export const upload = (jwtToken, formdata) => {
  var myHeaders = new Headers();
  myHeaders.append("Origin", "http://localhost:4004");
  myHeaders.append("Authorization", jwtToken);
  myHeaders.append(
    "User-Agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36"
  );
  myHeaders.append("Sec-Fetch-Mode", "cors");
  myHeaders.append("Referer", "http://localhost:4004/");
  myHeaders.append("Accept-Encoding", "gzip, deflate, br");
  myHeaders.append("Access-Control-Allow-Origin", "*")
  // myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Accept-Language", "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7");
  myHeaders.append(
    "Content-Type",
    "multipart/form-data; boundary=--------------------------187506750321707137228726"
  );
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",

  };
  return fetch(
    "https://match-composer.dash-labs.com/api/upload",
    requestOptions
  )
    .then(response => console.log(response))
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
};

// export const upload = xmlData => {
//   var SftpUpload = require("sftp-upload");
//   // var fs = require("fs");
//   var options = {
//     host: "cimtest@ftp.cicd.cicd-vpc.otvse-cicd.com",
//     password: "cim",
//     remoteDir: "/Input/pmh",
//     path: xmlData
//   };
//   var sftp = new SftpUpload(options);
//   sftp
//     .on("error", function(error) {
//       throw error;
//     })
//     .on("completed", function() {
//       console.log("Completed");
//     })
//     .upload();
// };

export const login = (username, password) => {
  var myHeaders = new Headers();
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append("Pragma", "no-cache");
  myHeaders.append("Cache-Control", "no-cache");
  myHeaders.append("Accept", "application/json, text/plain, */*");
  myHeaders.append("Origin", "http://localhost:4004");
  myHeaders.append(
    "User-Agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36"
  );
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Sec-Fetch-Site", "same-origin");
  myHeaders.append("Sec-Fetch-Mode", "cors");
  myHeaders.append("Referer", "http://localhost:4004/");
  myHeaders.append("Accept-Encoding", "gzip, deflate, br");
  myHeaders.append("Accept-Language", "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7");
  var raw = JSON.stringify({ username: username, password: password });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  return fetch(
    "https://match-composer.dash-labs.com/api/authenticate",
    requestOptions
  )
    .then(response => response.json())

    .catch(error => console.log("error", error));
};
export const message = jwtToken => {
  var myHeaders = new Headers();
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append("Pragma", "no-cache");
  myHeaders.append("Cache-Control", "no-cache");
  myHeaders.append("Accept", "application/json, text/plain, */*");
  myHeaders.append("Authorization", jwtToken);
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append(
    "User-Agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36"
  );
  myHeaders.append("Sec-Fetch-Site", "same-origin");
  myHeaders.append("Sec-Fetch-Mode", "cors");
  myHeaders.append("Referer", "http://localhost:4004/");
  myHeaders.append("Accept-Encoding", "gzip, deflate, br");
  myHeaders.append("Accept-Language", "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  return fetch(
    "https://match-composer.dash-labs.com/api/message",
    requestOptions
  )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
};

// export const
