export class AuthResponse {
  constructor (
    public email: string,
    public username:string,
    public token: string,
    public role: string,
    ){

    }
}
