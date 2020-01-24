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
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Sec-Fetch-Site", "same-origin");
myHeaders.append("Sec-Fetch-Mode", "cors");
myHeaders.append("Referer", "http://localhost:4004/");
myHeaders.append("Accept-Encoding", "gzip, deflate, br");
myHeaders.append("Accept-Language", "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7");

export const login = (username, password) => {
  var raw = JSON.stringify({ username: username, password: password });
 
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  return fetch("http://esercizio.verdesca.ovh/api/authenticate", requestOptions)
    .then(response => response.json())

    .catch(error => console.log("error", error));
};
