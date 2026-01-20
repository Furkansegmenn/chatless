import { HttpException } from '../exception/HttpException';
import { NextFunction, Request, Response } from 'express';
import log from '../utils/Log';

const errorMiddleware = async (err: HttpException, req: Request, res: Response, next: NextFunction) => {
    try {
        const status: number = err.status || 500;
        const error: string = err.error || "Sunucuda bilinmeyen bir hata oluştu.";
        const errorDesc = err.errorDesc || null;
        const message = error;
        const messageDesc = errorDesc;
        if (status == 500) {
            console.log("### 500 ERROR ###")
            console.log(err)
            console.log("--- 500 ERROR ---")
        }
        log.error(`[${req.method}] ${req.path} >> Status: ${status}, Message: ${message}, Message Desc: ${messageDesc}`);
        res.status(status).json({ messageDesc, message, status });
    } catch (error) {
        next(error);
    }
};

export default errorMiddleware;
