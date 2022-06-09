export class UserModel {
  constructor(
    public email: string,
    public password: string,
    public sex?: "m" | "f"
  ) {}
}
