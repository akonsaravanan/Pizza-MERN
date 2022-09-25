const jwt = require("jsonwebtoken");
const authenticateUser = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		if (token) {
			const decodedToken = jwt.verify(token, process.env.secretKey);
			req.user = decodedToken;
			next();
			console.log("TOKEN VALID");
			console.log(req.user);
		} else {
			res.status(403).json("You are not allowed to do this , Token INVALID");
		}
	} catch (error) {
		res.status(500).json({
			message: "Token Not valid",
			error: error.message,
		});
	}
};
module.exports = { authenticateUser };
