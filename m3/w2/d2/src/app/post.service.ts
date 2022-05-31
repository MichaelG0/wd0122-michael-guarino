export async function getPosts(): Promise<any>{
  return await (await fetch("../../assets/db.json")).json()
}
