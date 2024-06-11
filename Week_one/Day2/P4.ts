type Day = 'MON' | 'TUE' | 'WEDS' | 'THUR' | 'FRI'
const chooseDeliveryDay = (day: Day) => {
 console.log("Day = ",day);
}
chooseDeliveryDay('MON') // OK
chooseDeliveryDay('FRI') // Not OK