import { useLocation, useSearchParams } from "react-router-dom";

export function AddLocalStorage(data) {
  localStorage.setItem("auth", JSON.stringify(data));
}

export function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
export function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

export function GetFetchData(url, accessToken) {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: accessToken,
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
}

export function PostData(url, data, accessToken) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: accessToken,
    },
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
}
export function UpdateData(url, data, accessToken) {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: accessToken,
    },
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
}
export function DeleteData(url, accessToken) {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: accessToken,
    },
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
}

export function GetSearchParam(name) {
  const [searchParams] = useSearchParams();
  return searchParams.get(name);
}
export function GetPathName() {
  const location = useLocation();
  return location.pathname;
}
