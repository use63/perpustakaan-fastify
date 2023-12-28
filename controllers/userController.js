// userController.js
const getUser = async (request, reply) => {
	const userId = request.params.id; // Mendapatkan nilai parameter dari URL
	return { message: `Get user with ID: ${userId}` };
};

const createUser = async (request, reply) => {
	// Handle user creation logic
	return { message: "User created successfully" };
};

export { getUser, createUser };
