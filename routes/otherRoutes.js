import express from "express";
import {
  contact,
  courseRequest,
  getDashboardStats,
} from "../controllers/otherControllers.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.route("/contact").post(contact);

router.route("/courserequest").post(courseRequest);

//get admin dashboard status
router
  .route("/admin/stats")
  .get(isAuthenticated, authorizeAdmin, getDashboardStats);
export default router;
