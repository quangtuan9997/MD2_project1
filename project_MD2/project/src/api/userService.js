import { instances } from "./axios"
export const USER_GET_SERVICE = async () => {
  let response=   await instances.get("user")
  return response.data
}
export const USER_POST_SERVICE =async(newUser)=>{
 await instances.post("user",newUser)

}