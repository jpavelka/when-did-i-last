export type CadenceUnit = 'days' | 'weeks' | 'months' | 'years';

export type Cadence = {
    value: number;
    unit: CadenceUnit;
};

export type Task = {
    id?: string;
    name: string;
    history: Array<string>;
    scheduled: Array<string>;
    cadence?: Cadence | null;
}