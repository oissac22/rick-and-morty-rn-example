export class HTTPException extends Error {
    readonly name = 'HTTPException';

    constructor(
        private readonly err: string
    ) {
        super(err);
    }
}
