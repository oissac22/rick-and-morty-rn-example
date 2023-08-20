
export class AdminMemoryStack {
    private stack:any[] = [];
    private cursor:number = -1;

    push(value:any):void
    {
        this.stack[++this.cursor] = value;
    }

    pop():any
    {
        if (this.cursor < 0)
            return null;
        const value = this.stack[this.cursor--];
        return value;
    }
}
