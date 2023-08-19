
export class DelayCallback {
    private time:NodeJS.Timeout | null = null;
    execute(callback:()=>any, time:number)
    {
        if(this.time)
            clearTimeout(this.time);
        this.time = setTimeout(callback, time);
    }
}