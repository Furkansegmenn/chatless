
import express from "express";
import helmet from "helmet";
import cors from "cors";
import errorMiddleware from "./middleware/error.middleware"
import { NODE_ENV, PORT } from "./config/index";
// import log from "./utils/Log";
import { Routes } from "./interfaces/common.interfaces";

import path from 'path';

class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV;
        this.port = PORT;
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.InitializeErrorHandling();
        // this.connectToDatabase();
        // this.initializeCronJobs();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`<====================================>`);
            console.log(`<========== ENV: ${this.env} ========>`);
            console.log(`🚀 App listening on the port ${this.port}`);
            console.log(`<====================================>`);
        });
        // cron.schedule("*/5 * * * * *", () => {
        //     console.log("Her 5 saniyede bir çalışan bir görev");
        // });

    }

    public getServer() {
        return this.app;
    }

    // private initializeCronJobs() {
    //     cron.schedule("0 * * * *", () => {
    //         // log.success("🔑 ClearOldRecords job is running");
    //         // UserService.clearOldRecords();
    //     });
    //     cron.schedule("* * * * *", () => {
    //         // log.success("🔑 CheckExpiredReservations job is running");
    //         // ReservationsService.CheckExpiredReservations();
    //     });
    // }

    // private connectToDatabase() {

    // force true dersek yapısını değiştirir.
    // force false dersek var mı yok mu bakar yoksa oluşturur.

    // DB.sequelize.sync({ force: false })
    //     .then(() => {
    //         log.success('Connected to the database successfully.');
    //     })
    //     .catch((error) => {
    //         log.error('Database not connected !');
    //     });
    // DB.sequelize.authenticate()
    //     .then(() => {
    //         log.success('✅ Connected to the database successfully.');
    //     })
    //     .catch((error) => {
    //         log.error('❌ Database not connected !');
    //     });
    // DB.sequelize.authenticate()
    // DB.sequelize.authenticate()
    // }

    private initializeMiddlewares() {
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        // this.app.use(morgan("dev"));
        this.app.use(cors({ origin: '*' }));
        // this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use('/api/', route.router);
        });

        if (this.env === 'production') {
            const __dirname = path.resolve();
            this.app.use(express.static(path.join(__dirname, '../frontend/out')));

            this.app.get('*', (req, res) => {
                res.sendFile(path.resolve(__dirname, '../frontend/out', 'index.html'));
            })
        }
    }
    private InitializeErrorHandling() {
        this.app.use(errorMiddleware);
    }
}

export default App;

