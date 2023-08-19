
export function dateStringToFormatDate(dateStr?: string) {
    if (!dateStr)
        return '';
    return new Date(dateStr).toLocaleString();
}
