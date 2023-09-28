import TokenService from "./token.ts";

export default function authHeader() {
  const token = TokenService.getLocalAccessToken();

  if (token) {
    return { Authorization: "Bearer " + token }; // for Spring Boot back-end
    // return { 'x-access-token': token };       // for Node.js Express back-end
  } else {
    return {};
  }
}
