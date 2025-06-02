import { Document, Types } from "mongoose";

export type TUser = {
  id: string;
  userName: string;
  email: string;
  password: string;
  image: string;
};

export type TUsers = TUser[];

export interface IUser extends Document {
  userName: String;
  email: string;
  password: string;
  image: string;
  shelters: Types.ObjectId[];
}
