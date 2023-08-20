
export function dateStringToFormatDate(dateStr?: string) {
    if (!dateStr)
        return '';
    const date = new Date(dateStr);
    return date.toLocaleString();
}
