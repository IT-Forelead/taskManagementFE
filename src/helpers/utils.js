import jwt_decode from "jwt-decode";

export default function decodeJwt(token) {
  return JSON.parse(window.atob(token.split('.')[1]))
}