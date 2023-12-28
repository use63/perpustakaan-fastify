// app.js
import fastify from "fastify";
import appConfig from "./config/appConfig.js";
import userRoutes from "./routes/userRoutes.js";
import authPlugin from "./plugins/authPlugin.js";
import authMiddleware from "./middlewares/authMiddleware.js";

const app = fastify();

// Register routes
app.register(userRoutes);

// Register plugins
app.register(authPlugin);

// Register middleware
app.addHook("preHandler", authMiddleware);

const start = async () => {
	try {
		await app.listen(appConfig.server);
		console.log(
			`Server started on http://${appConfig.server.host}:${appConfig.server.port}`
		);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

start();
