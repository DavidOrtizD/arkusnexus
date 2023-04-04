import { UserData } from ".";

export interface LoginResponse {
  usrData: UserData;
  access_token: string;
}