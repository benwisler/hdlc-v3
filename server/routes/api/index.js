const router = require("express").Router();
const workOrderRoutes = require("./workOrders");

router.use("/workOrders", workOrderRoutes);
const profileRoutes = require("./profile");
// Book routes
// router.use("/users", userRoutes);
// router.use("/message", messageRoutes);

router.use("/profiles", profileRoutes);

// return router;

module.exports = router;
