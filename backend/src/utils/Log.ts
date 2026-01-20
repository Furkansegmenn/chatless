import chalk from "chalk";
const Log = (string: string, color: "RED" | "GREEN" | "YELLOW" | "BLUE" | "CYAN" | "MAGENTA" | "GRAY", isJson?: Boolean) => {
    let stringValue = ""
    if (isJson) {
        stringValue = JSON.stringify(string, null, 2);
    }
    else {
        stringValue = string;
    }
    if (color == "RED") {
        console.log(chalk.red(stringValue));
    }
    else if (color == "GREEN") {
        console.log(chalk.green(stringValue));
    }
    else if (color == "YELLOW") {
        console.log(chalk.yellow(stringValue));
    }
    else if (color == "BLUE") {
        console.log(chalk.blue(stringValue));
    }
    else if (color == "MAGENTA") {
        console.log(chalk.magenta(stringValue));
    }
    else if (color == "CYAN") {
        console.log(chalk.cyan(stringValue));
    }
    else if (color == "GRAY") {
        console.log(chalk.gray(stringValue));
    }
};
export default class log {
    public static error(string: string, isJson?: Boolean) {
        Log(string, "RED", isJson);
    }
    public static success(string: string | any, isJson?: Boolean) {
        Log(string, "GREEN", isJson);
    }
    public static warn(string: string | any, isJson?: Boolean) {
        Log(string, "YELLOW", isJson);
    }
    public static info(string: string | any, isJson?: Boolean) {
        Log(string, "BLUE", isJson);
    }
    // public static magenta(string: string | any, isJson?: Boolean) {
    //     Log(string, "MAGENTA", isJson);
    // }
    // public static cyan(string: string | any, isJson?: Boolean) {
    //     Log(string, "CYAN", isJson);
    // }
    // public static gray(string: string | any, isJson?: Boolean) {
    //     Log(string, "GRAY", isJson);
    // }
}