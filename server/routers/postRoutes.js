const express = require("express");
const { getPosts, createPost, updatePost, deletePost, getPost } = require("../controllers/postController.js");
const postRouter = express.Router();

postRouter.get("/getPosts", getPosts)
postRouter.post("/getPost", getPost)
postRouter.post("/createPost", createPost)
postRouter.patch("/updatePost/:id", updatePost)
postRouter.delete("/deletePost/:id", deletePost)

module.exports = postRouter