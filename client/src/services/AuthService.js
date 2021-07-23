import axios from 'axios';

class AuthService {
  static async getAuthenticated(userData) {
    let response = await axios.post(url, {
      username: userData.username,
      password: userData.password
    }).then(data => response = data);
    return response;
  }
}

export default AuthService;