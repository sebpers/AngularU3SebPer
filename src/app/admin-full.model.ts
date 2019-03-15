// A model for new users, must have.
export class AdminFull {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string
  ) { }
}
