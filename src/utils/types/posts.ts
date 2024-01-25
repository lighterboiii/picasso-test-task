export type TPost = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export type TPosts = {
  post: TPost[]
}