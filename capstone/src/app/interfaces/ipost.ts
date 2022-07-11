export interface IPost {
  title: string;
  caption: string;
  userid: number
  comments?: {userid: number, comment: string}[]
  id?: number
}
