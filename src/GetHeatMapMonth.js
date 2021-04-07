import moment from 'moment';
const xLabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const DAYS_PER_WEEK = 7;

export default  function GetHeatMapMonth(data, LABELS_IDX) { 
    const NUM_WEEKS = 4;
    let series = [] // represents data for one week
    let k = 0;
    for (let i=0; i<NUM_WEEKS; i++) {
        let newRow = []
        let newName = '';
        const data_keys = Object.keys(data);
        const data_values = Object.values(data);
        
        for (let j=0; j<DAYS_PER_WEEK; j++) {   // create dates on y axis
            
            if (j === 0) {
                const dateEnd = moment(new Date(data_keys[k])).add(7, 'days').toDate();
                newName = data_keys[k] + ' to ' + dateEnd.getFullYear() + '-' + formatMonth(dateEnd) + '-' + formatDate(dateEnd);
            }
            const labels = data_values[k]
            newRow.push({
                x: xLabel[j],
                y: findMax(labels, LABELS_IDX)
            });
            
            k++; // increment one to iterate through all data values
        }
        series.push(
                {
                    name: newName,
                    data: newRow
                }
            );
    }
    return series.reverse();
}

const findMax = (labels, LABELS_IDX) => { // if a label exists, find the most frequent label
    let maxLabel = ['-1',-1]
    if (labels) {
        for (const key in labels) {
            if (parseInt(labels[key]) > maxLabel[1]) {
                maxLabel = [key, labels[key]]
            }
        }
        return LABELS_IDX[maxLabel[0]];
        
    } else {
        return LABELS_IDX['-1']; // return '-1' as a label if there is no data  
    }
}

const formatDate = (date) => { return ("0" + date.getDate()).slice(-2) } // format date to have 0 in front if single digit

const formatMonth = (date) => { return ("0" + (date.getMonth() + 1)).slice(-2) } // format month to have 0 in front if single digit
