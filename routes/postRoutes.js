const express = require("express");
const { requireSingIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostController,
  getUserPostsController,
  deletePostController,
  updatePostController,
} = require("../controllers/postController");

//router object
const router = express.Router();

// Create Post || Post
router.post("/create-post", requireSingIn, createPostController);

//Get All Posts
router.get("/get-all-posts", getAllPostController);

//Get user Posts
router.get("/get-user-posts", requireSingIn, getUserPostsController);

//Delete post
router.delete("/delete-post/:id", requireSingIn, deletePostController);

//update post
router.put("/update-post/:id", requireSingIn, updatePostController);

//export
module.exports = router;
