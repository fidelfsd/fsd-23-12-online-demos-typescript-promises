import axios from "axios";
import { User } from "./interfaces/User";

const obtenerUsuarioPorId = async (id: number): Promise<User> => {
   const response = await axios.get(`https://dummyjson.com/users/${id}`);

   return response.data;
};

const mostrarUsuario = async (): Promise<void> => {
   const usuario = await obtenerUsuarioPorId(1);
   console.log(usuario.firstName);
   console.log(usuario.age);
};

// Uso de la funcion
mostrarUsuario();
