import express from "express";
import {
  addToPlayList,
  changePassword,
  deleteMyProfile,
  deleteUser,
  forgotPassword,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
  updateUserRole,
} from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

//register
router.route("/register").post(singleUpload, register);

//login
router.route("/login").post(login);

// logout
router.route("/logout").get(logout);

// get my profile
router.route("/me").get(isAuthenticated, getMyProfile);

// delete  my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);

// change password
router.route("/changepassword").put(isAuthenticated, changePassword);

// update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

//update profile picture
router
  .route("/updateprofilepicture")
  .put(singleUpload, isAuthenticated, updateProfilePicture);

//forget password
router.route("/forgetpassword").post(forgotPassword);

//reset password
router.route("/resetpassword/:token").put(resetPassword);

//add to playlist
router.route("/addtoplaylist").post(isAuthenticated, addToPlayList);

//remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

//Admin Routes get all users
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);

router
  .route("/admin/users/:id")
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUser);
export default router;
