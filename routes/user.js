const { Router } = require("express");
const router = Router();

// Middlewares

// Controllers
const controller = require("../controllers/user");

// Routes

router.post("/", controller.create);
router.get("/",controller.get);
router.delete("/:id",controller.delete);

module.exports = router;
