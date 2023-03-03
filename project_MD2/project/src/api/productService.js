import { instances } from "./axios";
export const PRO_GET_SERVICE = async () => {
    let response=   await instances.get("product")
    return response.data
  }