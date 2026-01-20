import App from "./app";
import AuthRoute from "./routes/auth.route";
import MessagesRoute from "./routes/message.route";

const app = new App([
    new AuthRoute(),
    new MessagesRoute(),
]);

app.listen();