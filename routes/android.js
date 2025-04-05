import express from "express";
import "../models/sync.js";

import { login_A } from "../controllers/login.js";
import { sign_up_A } from "../controllers/signup.js";
import {
  session,
  create_session,
  update_session,
  delete_session,
  admin_session,
  create_session2,
  super_session,
} from "../controllers/session.js";

const android = express.Router();

android.get("/login_admin", (req, res) => {
  res.render("./form/login_admin");
});

android.get("/sign_up_admin", (req, res) => {
  res.render("./form/sign_up_admin");
});

android.get("/seance/:matricule", session);
android.get("/seances/:username", admin_session);
//administrateur

android.post("/login_admin", login_A);
android.post("/sign_up_admin", sign_up_A);
android.post("/create_seance", create_session);
android.post("/create_seance2", create_session2);
android.put("/update_seance/:id", update_session);
android.delete("/delete_seance/:id", delete_session);
android.get('/seance', super_session)
export default android;
