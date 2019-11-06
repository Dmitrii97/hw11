var weekDay = prompt('Please enter week day');
var weekDayResult;

switch (weekDay) {
    case 'Saturday':
    case 'Sunday':
        weekDayResult = 'Weekend';
        break;

    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        weekDayResult = 'Working Day';
        break;

    default:
        weekDayResult = 'Can not define, please try another value';
        break;
}

alert(weekDayResult);