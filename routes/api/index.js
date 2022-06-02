const router = require("express").Router();
const aboutRoutes = require('./about')
const projectsRoutes = require('./projects')

// about routes
router.use('/about', aboutRoutes);
// project routes
router.use("/projects", projectsRoutes);

module.exports = router;