import express from "express";
import createClientController from "../controllers/client/createClientController";
import updateClientController from "../controllers/client/updateClientController";
import deleteClientController from "../controllers/client/deleteClientController";
import getAllClientController from "../controllers/client/getAllClientController";
const router = express.Router();

router.get("/", getAllClientController);
router.get("/create", createClientController);
router.post("/update/:id", updateClientController);
router.post("/delete/:id", deleteClientController);

export default router;
