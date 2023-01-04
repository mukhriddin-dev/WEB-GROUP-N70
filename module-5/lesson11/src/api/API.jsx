export const API = {
  getAllPosts: async () => {
    return fetch("https://jsonplaceholder.typicode.com/comments");
  },
};
