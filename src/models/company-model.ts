export class Company {
    id: number;
    name: string;
    initialHourMorning: number;
    initialMinuteMorning: number;
    finalHourMorning: number;
    finalMinuteMorning: number;
    initialHourAfternoon: number;
    initialMinuteAfternoon: number;
    finalHourAfternoon: number;
    finalMinuteAfternoon: number;
    initialHourWeekend: number;
    initialMinuteWeekend: number;
    finalHourWeekend: number;
    finalMinuteWeekend: number;
    noWorkingDays: Object;
    phone: string;
    info: string;
    image: string;
    isActive: boolean = true;
}