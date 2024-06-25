const express = require("express");
const router = express.Router();

const credential = {
  email: "adminlogin@gmail.com",
  password: "Asd@123",
};

// Route for login user
router.post("/login", (req, res) => {
  // Log the request body
  console.log('Request Body:', req.body);

  const { email, password } = req.body;

  if (email === credential.email && password === credential.password) {
    req.session.user = email;
    res.redirect('/dashboard')
    // res.send("Login successful");
  } else {
    res.send("Invalid username or password");
  }
});

module.exports = router;
