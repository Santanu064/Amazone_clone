function handleCredentialResponse(response) {
  function decodeJwtResponse(token) {
    var base64Url = token.split(".")[1];
    return JSON.parse(atob(base64Url));
  }
  const responsePayload = decodeJwtResponse(response.credential);
  let obj = JSON.stringify(responsePayload);
    localStorage.setItem('user',obj)
    window.location.href="index.html"
}


