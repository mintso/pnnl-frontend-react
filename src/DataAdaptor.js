import moment from 'moment';

const DEFAULT_DATE = new Date(0);
const ORIGINAL_URL = 'http://18.206.140.125:5000';
let dataObject = {};

export default function DataAdaptor(dataType, startDate, endDate = DEFAULT_DATE) {
    let url = ORIGINAL_URL;
    if (endDate.getTime() === DEFAULT_DATE.getTime()) {
        url += '/day/' + dataType + '/' + moment(startDate).format('YYYY-MM-DD');
    } else {
        url += '/range/' + dataType + '/' + moment(startDate).format('YYYY-MM-DD') + '/' + moment(endDate).format('YYYY-MM-DD');
    }

    function getData(myCallback) {
        let request = new XMLHttpRequest()
        request.open('GET', url, true)
        request.onload = function () {
            let data = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                myCallback(data);
            } else {
            console.log('error');
            }
        }
        request.send();
    }

    function myCallback(data) {
        dataObject = data;
    }

    getData(myCallback);
    return dataObject;
    
}