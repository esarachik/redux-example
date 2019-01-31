const BASE_URL = "http://localhost:3000/";

export const get = path =>
  fetch(`${BASE_URL}${path}`)
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });

export const post = (path, body) =>
  fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });

export const postMultipart = (path, body) => {
  return fetch(`${BASE_URL}${path}`, {
    method: "POST",
    body
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });
};
