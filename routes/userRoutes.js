// userRoutes.js
import { getUser, createUser } from "../controllers/userController.js";

async function userRoutes(fastify, options) {
	fastify.get("/users/:id", getUser); // Menggunakan parameter ":id"
	fastify.post("/users", createUser);
}

export default userRoutes;
