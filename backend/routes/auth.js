const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { regVal, logVal, passVal } = require("./val");
const verify = require("./verifyToken");

// REGISTERING A NEW USER
router.post("/register", async (req, res) => {
  // Validates using Joi that information in the request is valid
  const { error } = regVal(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checks for an existing user in database
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already exists");

  //Hashes Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //Creates user in collection
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    await user.save();
    res.send({
      user: user._id,
    });
  } catch {
    res.status(400).send(err);
  }
});

// LOGGING IN A NEW USER
router.post("/login", async (req, res) => {
  // Validating that the username is entered
  const { error } = logVal(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking to see email exists in collection
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email not found");

  // Checking to confirm if password is correct by comparing req.body password to the collection's email password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    return res
      .status(400)
      .send("Password does not match the password for this email");

  // Creating and assigning a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  // Creates auth header token and adding the token to the header of the response
  res.header("auth-token", token).send(token);
});

// LOGGING A USER OUT
router.delete("/logout", verify, async (req, res) => {
  // Removes the auth token from the header
  const user = await User.findOne({ _id: req.user });
  let tokenRemoval = (process.env.TOKEN_SECRET = "");

  try {
  res.header('auth-token', tokenRemoval).send({
      message: `${user.username} has signed out`
  });
}
catch (err) {
    res.status(400).send("this failed")
}
});

module.exports = router;
