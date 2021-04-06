import moment from 'moment';

const END_DATE = new Date();

export default function GetStartDate() {
    let offset = (7 - moment(END_DATE).subtract(28, 'days').toDate().getDay()) % 7;
    let startDate = moment(END_DATE).subtract(28, 'days').add(offset, 'days').toDate();
    return startDate;
}