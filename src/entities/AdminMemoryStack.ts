
export class AdminMemoryStack {
    private stack:any[] = [];
    private cursor:number = -1;

    push(value:any):void
    {
        this.stack.push(value);
        this.cursor++;
    }

    pop():any
    {
        if (this.cursor < 0)
            return null;
        const value = this.stack[this.cursor];
        this.cursor--;
        return value;
    }
}
