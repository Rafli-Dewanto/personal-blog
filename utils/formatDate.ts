import { parseISO, format } from "date-fns";

export default function formatDate(dateString: string) {
    const date = parseISO(dateString);
    return format(date, "MMMM d, yyyy");
}
