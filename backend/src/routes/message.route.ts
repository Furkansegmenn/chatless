import { Router } from 'express';
import { Routes } from '../interfaces/common.interfaces';
import { protectRoute } from '../middleware/auth.middleware';

class MessagesRoute implements Routes {
    public router = Router();
    public path = '/auth';

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/register', protectRoute);
        this.router.post('/login', protectRoute);
    }


}

export default MessagesRoute;


