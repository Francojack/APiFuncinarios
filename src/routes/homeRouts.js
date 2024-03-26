import { Router } from 'express';
import homecontrolle from "../controllers/HomeController";
const router = new Router();

router.get('/', homecontrolle.index);
export default router;
