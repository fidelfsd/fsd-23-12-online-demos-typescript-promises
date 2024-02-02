import axios from "axios";

interface Post {
   userId: number;
   id: number;
   title: string;
   body: string;
}

const obtenerPostsDeUsuario = async (): Promise<Post[]> => {
   const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
   );

   return response.data;
};

const mostrarPosts = async (): Promise<void> => {
   const posts = await obtenerPostsDeUsuario();
   console.log(posts[0].title);
};

// Uso de la funcion mostrarPosts
mostrarPosts();
