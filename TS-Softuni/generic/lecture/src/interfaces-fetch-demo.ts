interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function getPosts() {
  const USERS_URL = "https://jsonplaceholder.typicode.com/posts";
  fetch(USERS_URL, { method: "GET" })
    .then((res) => {
      return res.json();
    })
    .then((json: Post[]) => {
      const postId = json.map((post) => {
        console.log(post);
      });
    })
    .catch((err) => console.log(`ERRROR ${err}`));
}

getPosts();
