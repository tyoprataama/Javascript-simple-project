const getSleepHours = (day) => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 8;
    } else if (day === 'wednesday') {
        return 7;
    } else if (day === 'thursday') {
        return 7;
    } else if (day === 'friday') {
        return 7.5;
    } else if (day === 'saturday') {
        return 8;
    } else if (day === 'sunday') {
        return 7;
    }
};
const getActualSleepHours = () => {
    return getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday') +
        getSleepHours('sunday')
};
const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
}
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log(`Congrats!. You got perfect amount of sleep by ${idealSleepHours} hours per week!`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got more time sleep by ${actualSleepHours} hours per week try to decrease it by ${idealSleepHours} hours`)
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`You got less sleep by ${actualSleepHours} hours per week compared to ideal sleep by ${idealSleepHours} hours per week`);
    }
};
calculateSleepDebt();