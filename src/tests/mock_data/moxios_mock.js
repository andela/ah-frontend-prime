const data = {
  login: {
    success: {
      user: {
        email: "ianemma70@gmail.com",
        username: "ianemma",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJpYW5lbW1hNzBAZ21haWwuY29tIiwiZXhwIjoxNTU3MjQxNDQ4fQ" +
          ".DBxu7fBjtxiUE59c7_eUP1nk3n_CT-C41gkS3IMcEjU"
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
      slug: "dkaole-ld",
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      description:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnos" +
        "trum rerum est autem sunt rem eveniet architecto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeAkfnCCPYnxmFYG60WKSsDJrduVtI6qgyZAJs-IAf6G1JywnZg",
      createdAt: "2019-05-17T04:38:14.045441Z",
      author: {
        username: "random"
      }
    },

    {
      slug: "kdaf-alpha",
      id: 2,
      title: "qui est esse",
      description:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnost" +
        "rum rerum est autem sunt rem eveniet architecto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeAkfnCCPYnxmFYG60WKSsDJrduVtI6qgyZAJs-IAf6G1JywnZg",
      createdAt: "2019-05-17T04:38:14.045441Z",
      author: {
        username: "random"
      }
    }
  ],

  article: {
    id: 2,
    author: {
      username: "patritsfitz",
      bio: "",
      email: "patrick.okosu@andela.com",
      full_name: "",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ah-frontend-prime.appspot.com/o/images%2F100_1655.JPG?" +
        "alt=media&token=08c9e580-a9c2-4121-8fd1-c4e9a236e943",
      followers_no: 1,
      following_no: 0,
      favorite_articles: "No favorite articles"
    },
    title: "This",
    average_rating: 0,
    description: "is",
    body: "the new Article",
    image: "",
    createdAt: "2019-05-13T15:18:22.258778Z",
    updatedAt: "2019-05-16T09:18:52.697507Z",
    slug: "cedes-alpha",
    tagList: [],
    likes: 0,
    dislikes: 0,
    reading_time: " less than a minute read",
    favorite_count: 0
  },
  article1: {
    title: "This",
    description: "afdfasdfass",
    body: "daffasdfas"
  },
  article_no_data: {
    title: "",
    description: "",
    body: ""
  },
  data: {
    auth_token: {
      email: "cartpix@gmail.com",
      username: "Kisekka David",
      token: "token"
    },
    profile: {
      message: "You have followed ianemma"
    }
  },
  data3: {
    profile: {
      message: "You have unfollowed ianemma"
    }
  },
  data2: {
    auth_token: "Kindly log In using the application."
  },
  errors: {
    errors: "Invalid token"
  },
  errors1: {
    title: ["This field may not be blank."],
    description: ["This field may not be blank."],
    body: ["This field may not be blank."]
  }
};

export default data;
