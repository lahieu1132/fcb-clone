class TokenService {
  getLocalRefreshToken() {
    const refreshToken = JSON.parse(
      localStorage.getItem("refreshToken") ?? "null"
    );

    return refreshToken;
  }

  getLocalAccessToken() {
    const accessToken = JSON.parse(
      localStorage.getItem("accessToken") ?? "null"
    );

    return accessToken;
  }

  updateLocalAccessToken(token: string) {
    localStorage.setItem("accessToken", JSON.stringify(token));
  }

  removeUser() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}

export default new TokenService();
