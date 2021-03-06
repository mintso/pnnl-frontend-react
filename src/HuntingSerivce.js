import './App.css';
import React, {useEffect} from 'react';
import {DataGrid, GridRowsProp, GridColDef} from '@material-ui/data-grid';
import {GridCellParams} from "@material-ui/data-grid";
import {Button, makeStyles, Modal} from "@material-ui/core";
import HuntingServiceModal from './HuntingServiceModal';
import HuntingServiceDataAdaptor from "./HuntingServiceDataAdaptor";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 1300,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

export default function HuntingService(): React.Component {
    const [huntingServiceData, setHuntingSerivceData] = React.useState({});
    const [openIdx, setOpenIdx] = React.useState(-1);
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let data = await HuntingServiceDataAdaptor();
        setHuntingSerivceData(data);
    }

    const handleOpen = (id) => {
        setOpenIdx(id);
    };

    const handleClose = () => {
        setOpenIdx(-1);
    };

    const dataset = [];
    let i = 1;
    for (let x in huntingServiceData) {
        const parts = x.split(' - ', 2);
        if (parts[1] == null) continue;
        const deviceName = parts[1].toUpperCase();
        const timeStamp = parts[0];
        const currentNum = i;
        const detailButton =
            (
                <>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        font="serif"
                        style={{marginLeft: 16}}
                        onClick={() => handleOpen(currentNum)}
                    >
                        Details
                    </Button>
                    <Modal
                        open={openIdx == currentNum? true : false}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2 id="simple-modal-title"></h2>
                            <p id="simple-modal-description">
                                Building Alert Details
                            </p>
                            <HuntingServiceModal data={huntingServiceData[x]}/>
                        </div>
                    </Modal>
                </>
            );

        dataset.push({
            id: i,
            col1: deviceName,
            col2: timeStamp,
            col3: detailButton
        });
        i++;
    }

    const rows: GridRowsProp = dataset;
    const columns: GridColDef[] = [
        {field: 'col1', headerName: 'Device Name', width: 300},
        {field: 'col2', headerName: 'Timestamp', width: 300},
        {
            field: 'col3', headerName: 'Detail', width: 300, renderCell: (params: GridCellParams) => (
                <strong>
                    <div>
                        {params.value}
                    </div>
                </strong>
            ),
        },
    ];

    return (
        <div className="border" style={{height: 800, width: '100%'}}>
            <DataGrid rows={rows} columns={columns} filterModel={{
                items: [
                    {columnField: 'col1', operatorValue: 'contains', value: 'VAV'},
                ],
            }} hideFooter={true}/>
        </div>
    );
}
