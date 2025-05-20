export class User {
  public userId: string;
  public password: string;
  public firstName: string;
  public lastName: string;

  constructor(
    userId: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    this.userId = userId;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
