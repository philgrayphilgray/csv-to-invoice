import { format } from "date-fns";
export default date => format(new Date(date), "MM/DD/YYYY");
