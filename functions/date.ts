import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale";

const formatDate = (date: string) => {
    return format(parseISO(date), "'Postado em ' dd 'de' MMMM 'de' yyyy", { locale: ptBR })
}

export default formatDate;