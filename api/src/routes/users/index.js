const { validationResult, body } = require("express-validator");
const { validate } = require("../../middlewares/validation");

const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUsers,
  updateUsers,
  DeleteUsers,
  getUser,
} = require("./user.controller");

router.get("/", getUsers);
router.get("/:id", getUser);

router.post(
  "/",
  [
    body("email", "email must be valid").isEmail(),
    body("first_name", "first name cant be empty").notEmpty(),
    body("last_name", "last name cant be empty").notEmpty(),
  ],
  validate,
  createUsers
);

router.put(
  "/:id",
  [
    body("email", "email must be valid").isEmail(),
    body("first_name", "first name cant be empty").notEmpty(),
    body("last_name", "last name cant be empty").notEmpty(),
  ],
  validate,
  updateUsers
);

router.delete("/:id", DeleteUsers);

module.exports = router;
