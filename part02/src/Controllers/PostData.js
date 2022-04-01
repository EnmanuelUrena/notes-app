import axios from "axios";

export const PostData = (URL, object) => {
  return axios.post(URL, object)
}
