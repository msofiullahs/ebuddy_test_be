import { User } from "@entities/user";

export default class UserCollection {
  data: Array<User> = [];

  constructor(users: Array<User>) {
    this.data = users;
  }
}
