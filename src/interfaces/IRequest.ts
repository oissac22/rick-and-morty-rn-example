export interface IRequest {
    post(url: string, data: any): Promise<any>;
}
