const dateFormat = (d) => {
    return `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
}

// Adds a cadence duration to a YYYYMMDD date string, returns YYYYMMDD.
const addCadence = (dateStr: string, cadence: { value: number; unit: 'days' | 'weeks' | 'months' }): string => {
    const year = parseInt(dateStr.slice(0, 4));
    const month = parseInt(dateStr.slice(4, 6)) - 1;
    const day = parseInt(dateStr.slice(6, 8));
    const d = new Date(Date.UTC(year, month, day));
    if (cadence.unit === 'days') d.setUTCDate(d.getUTCDate() + cadence.value);
    else if (cadence.unit === 'weeks') d.setUTCDate(d.getUTCDate() + cadence.value * 7);
    else if (cadence.unit === 'months') d.setUTCMonth(d.getUTCMonth() + cadence.value);
    else if (cadence.unit === 'years') d.setUTCFullYear(d.getUTCFullYear() + cadence.value);
    return d.toISOString().slice(0, 10).replaceAll('-', '');
};

export { dateFormat, addCadence }