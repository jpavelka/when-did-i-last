export type Task = {
    id?: string;
    name: string;
    history: Array<string>;
    scheduled: Array<string>;
}