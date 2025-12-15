const { User } = require('../db/models');

class UserService {
  static async getAllUsers() {
    try {
      const users = await User.findAll();
      return users.map((user) => user.get());
    } catch (error) {
      console.log(error);
    }
  }

  static async getUserByEmail(email) {
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) return null;

      return user.get();
    } catch (error) {
      console.log(error);
    }
  }

  static async getUserById(id) {
    try {
      const user = await User.findByPk(id);
      return user.get();
    } catch (error) {
      console.log(error);
    }
  }

  static async createUser({ username, email, password }) {
    try {
      const user = await User.create({ username, email, password, role: 'author' });
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteUser(id) {
    try {
      return await User.destroy({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserService;
