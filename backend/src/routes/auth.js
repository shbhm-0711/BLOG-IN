import { Router } from "express";
import { Errors, Msg } from "../constants/request";
import jwt from "jsonwebtoken";

const router = Router();

/**
 * Login route handler
 */

router.get("/", (req, res) => {
  res.status(400).send({ msg: Msg.WRONG_PATH, error: Errors.WRONG_PATH });
});

// @route POST /api/auth/login
// @desc Log in existing user
router.post("/login", async (req, res) => {
  console.log("🚀 ~ file: auth.js:13 ~ router.post ~  req.body:", req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      msg: Msg.INCORRECT_LOGIN_INFO,
      error: Errors.MISSING_FIELDS,
    });
  }

  try {
    // Check user's information in the database
    let user = await prisma.user.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        msg: Msg.USER_NOT_FOUND,
        error: Errors.AUTHENTICATION_FAILED,
      });
    } else if (!(await user.checkPassword(password))) {
      return res.status(400).json({
        msg: Msg.PASSWORD_IS_WRONG,
        error: Errors.AUTHENTICATION_FAILED,
      });
    }

    // Create token and send it to client-side

    const token = signToken({ id: user.id, username: user.username });
    await prisma.user.update({ where: { id: user.id }, data: { token } });

    res.json({
      user,
      token,
    });
  } catch (err) {
    console.error(`Error on login route: ${err}`);
    res.status(500).send();
  }
});

// @route POST /api/auth/register
// @desc Register a new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Validate fields
  const { error } = User.validate({ name, email, password });
  if (error) {
    return res.status(400).json({
      msg: "Invalid data.",
      errors: error.details.map((detail) => detail.message),
    });
  }

  try {
    let user = await prisma.user.findOne({ where: { email } });

    // If the user already exists, return an error message
    if (user) {
      return res.status(400).json({
        msg: Msg.USERNAME_ALREADY_EXISTS,
        error: Errors.USERNAME_ALREADY_EXISTS,
      });
    }

    // Create new user object with hashed password and save it to database

    user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    // Return the newly created user along with its JWT
    sendToken(user, 201, res);
  } catch (err) {
    console.log(`Error in registration: ${err}`);
    res.status(500).send("Server error");
  }
});

router.post("/login-token", async (req, res) => {
  console.log("🚀 ~ file: auth.js:13 ~ router.post ~  req.body:", req.body);
  const { token } = req.body;
  if (!token)
    return res.status(400).json({ msg: Msg.NO_TOKEN, error: Errors.NO_TOKEN });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findOne({ where: { id: payload.id } });

    // Check if user still exists in DB
    if (!user)
      return res
        .status(400)
        .json({ msg: Msg.INVALID_TOKEN, error: Errors.INVALID_TOKEN });

    // Send back the user details and a fresh JWT
    sendToken(user, 200, res);
  } catch (e) {
    res.status(400).json({ msg: e.message, error: Errors.INVALID_TOKEN });
  }
});

// @route   POST api/auth/refresh
// @desc    Refresh access token
// @access  Private
router.post("/refresh", auth, async (req, res) => {
  const user = req.user;
  // Send back the user details and a new access token
  sendToken(user, 200, res);
});

function sendToken(user, statusCode, res) {
  // Create the Payload which will be signed by the secret key
  const payload = {
    id: user.id,
    username: user.username,
  };

  // Sign the Payload with the Secret Key
  const token = signToken(payload);
  // Return the JSON response to the client
  res.status(statusCode).json({
    token, // The Access Token
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
    },
    msg: "Logged In!",
  });
}

function signToken({ id, username }) {
  return jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
}

export default router;
