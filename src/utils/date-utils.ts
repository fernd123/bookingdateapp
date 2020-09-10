export class DateUtils{
    static days: String[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    static months: String[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    public static getDateName(value: any){
        let date = new Date(value);
        let dayName = this.days[date.getDay()-1];
        let dayNumber = date.getDate();
        let monthName = this.months[date.getMonth()-1];
        let year = date.getFullYear();
        
        return `${dayName} ${dayNumber} de ${monthName} de ${year}`;
    }
}