import axios from "axios";

export default {
  getGoogleBooks: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
  }
};