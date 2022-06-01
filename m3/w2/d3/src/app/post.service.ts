export async function getPosts(): Promise<any>{
  return await (await fetch("../../assets/db.json")).json()
}

let posts:any = getPosts()

export function setPosts(id:number){
  return posts = posts.map((p:any) => {
    if(p.id == id){
      let tempP = p
      tempP.active = !tempP.active
      return tempP
    }
    return p
  })
}