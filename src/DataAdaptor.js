import moment from 'moment';

const DEFAULT_DATE = new Date(0);
const ORIGINAL_URL = 'https://www.pnnl-react-backend.tk';

export default async function DataAdaptor(dataType, startDate, endDate = DEFAULT_DATE) {

    let url = ORIGINAL_URL;
    if (endDate.getTime() === DEFAULT_DATE.getTime()) {
        url += '/day/' + dataType + '/' + moment(startDate).format('YYYY-MM-DD');
    } else {
        url += '/range/' + dataType + '/' + moment(startDate).format('YYYY-MM-DD') + '/' + moment(endDate).format('YYYY-MM-DD');
    }

    async function getData() {
        let result = await (await fetch(url)).json();
        return result;
    }

    let data = await getData();
    return data;
    
}