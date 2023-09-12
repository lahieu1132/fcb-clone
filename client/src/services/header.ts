interface User {
  email: string;
  password: string;
  refreshToken: string;
  accessToken: string;
}

export default function authHeader() {
  const user: User = JSON.parse(localStorage.getItem("user") ?? "null") as User;
  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
