import { Icomment } from "./icomment";

export interface IPost {
  title: string;
  caption: string;
  userid: number
  comments?: Icomment[]
  id?: number
}
