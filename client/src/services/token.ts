interface User {
  email: string;
  password: string;
  refreshToken: string;
  accessToken: string;
}

class TokenService {
  getLocalRefreshToken() {
    const user: User = JSON.parse(
      localStorage.getItem("user") ?? "null"
    ) as User;

    return user?.refreshToken;
  }

  getLocalAccessToken() {
    const user: User = JSON.parse(
      localStorage.getItem("user") ?? "null"
    ) as User;

    return user?.accessToken;
  }

  updateLocalAccessToken(token: string) {
    const user: User = JSON.parse(
      localStorage.getItem("user") ?? "null"
    ) as User;
    user.accessToken = token;
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user") ?? "null") as User;
  }

  setUser(user: User) {
    console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem("user");
  }
}

export default new TokenService();
