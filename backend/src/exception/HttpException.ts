export class HttpException {
    public status: number;
    public error: string;
    public errorDesc?: string;
    constructor(status: number, error: string, errorDesc?: string) {
        this.errorDesc = errorDesc || "";
        this.error = error;
        this.status = status;
    }
}