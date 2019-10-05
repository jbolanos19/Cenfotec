export const CONFIG = {
  patterns: {
    email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
  },

  adminUser: {
    email: "test@ehospital.com",
    password: "123456789" 
  },

  api: {
    basePath: "http://localhost:3000"
  },
  
  pagination: {
    page: 1,
    pageSize: 20,
  }

};
