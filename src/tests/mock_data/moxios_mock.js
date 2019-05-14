const data = {
  login: {
    success: {
      user: {
        email: "ianemma70@gmail.com",
        username: "ianemma",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJpYW5lbW1hNzBAZ21haWwuY29tIiwiZXhwIjoxNTU3MjQxNDQ4fQ.DBxu7fBjtxiUE59c7_eUP1nk3n_CT-C41gkS3IMcEjU"
      }
    }
  },
  failure: {
    errors: {
      error: ["A user with this email and password was not found."]
    }
  },
  articles: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
  ],
  data: {
    auth_token: {
      email: "cartpix@gmail.com",
      username: "Kisekka David",
      token: "token"
    }
  },
  data2: {
    auth_token: "Kindly log In using the application."
  },
  errors: {
    errors: "Invalid token"
  }
};

export default data;
