import express from "express";
import { ServerResponse } from "http";
import ReviewsCtrl from "./reviews.controller.js";
const router = express.Router();

router.route("/test").get( (req, res) =>
    res.status(500).json({status: "test"}));

router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews);
router.route("/new").post(ReviewsCtrl.apiPostReview);
router.route("/:id")
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiRemoveReview);



export default router;      