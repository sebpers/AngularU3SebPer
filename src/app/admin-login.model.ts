// A model for required stuff an admin need to login
export class AdminLogin {
  constructor(
    public email: string,
    public password: string
  ) { }
}