import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  const { title, description } = req.body;
  const { video } = req.files as any;

  video.mv(`uploads/${video.name}`);

  console.log(title, description, video);

  res.send("Received");
});

export default router;
