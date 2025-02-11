import express from "express";
import {
  createURL,
  deleteURL,
  getAllURL,
  getURLById,
} from "../controllers/ShortURLController";

const router = express.Router();

router.post("/shortUrl", createURL);
router.get("/shortUrl", getAllURL);
router.get("/shortUrl/:id", getURLById);
router.delete("/shortUrl/:id", deleteURL);

export default router;
