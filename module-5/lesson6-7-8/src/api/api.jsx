let baseURL = "http://localhost:8080";
let URL = "https://jsonplaceholder.typicode.com";

export const api = {
  getPosts: async () => {
    const response = await fetch(`${URL}/posts`);
    const result = await response.json();
    return result;
  },

  getUser: async () => {
    const response = await fetch(`${baseURL}/users`);
    const result = await response.json();
    return result;
  },

  addUser: (params) => {
    fetch(`${baseURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
  },

  getUserItem: async (id) => {
    const response = await fetch(`${baseURL}/users/${id}`);
    const result = await response.json();
    return result;
  },

  removeUser: (id) => {
    fetch(`${baseURL}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
  },

  updateUser: (id, params) => {
    fetch(`${baseURL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ params }),
    });
  },


  
};
