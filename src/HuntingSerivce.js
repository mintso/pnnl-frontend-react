import './App.css';
import React from 'react';
import {DataGrid, GridRowsProp, GridColDef} from '@material-ui/data-grid';
import {GridCellParams} from "@material-ui/data-grid";
import {Button, makeStyles, Modal} from "@material-ui/core";
import HuntingServiceModal from './HuntingServiceModal'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 1000,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


export default function HuntingService(): React.Component {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title"></h2>
            <p id="simple-modal-description">
                Building Alert Details
            </p>
            <HuntingServiceModal />
        </div>
    );

    const rows: GridRowsProp = [
        {id: 1, col1: 'VAV100', col2: '2021-04-02T10:31:00.000+00:00' },
        {id: 2, col1: 'VAV100', col2: '2021-04-02T10:35:00.000+00:00' },
        {id: 3, col1: 'VAV100', col2: '2021-04-02T10:36:00.000+00:00' },
        {id: 4, col1: 'VAV100', col2: '2021-04-02T10:38:00.000+00:00' },
        {id: 5, col1: 'VAV100', col2: '2021-04-02T10:40:00.000+00:00' },
        {id: 6, col1: 'VAV100', col2: '2021-04-02T10:42:00.000+00:00' },
        {id: 7, col1: 'VAV100', col2: '2021-04-02T10:44:00.000+00:00' },
        {id: 8, col1: 'VAV100', col2: '2021-04-02T11:31:00.000+00:00' },
        {id: 9, col1: 'VAV100', col2: '2021-04-02T11:31:00.000+00:00' },
        {id: 10, col1: 'VAV100', col2: '2021-04-02T11:40:00.000+00:00' },
        {id: 11, col1: 'VAV100', col2: '2021-04-02T11:50:00.000+00:00' },
        {id: 12, col1: 'VAV110', col2: '2021-04-02T12:00:00.000+00:00' },
    ];

    const columns: GridColDef[] = [
        {field: 'col1', headerName: 'Device Name', width: 300},
        {field: 'col2', headerName: 'Timestamp', width: 300},
        {
            field: 'col3', headerName: 'Detail', width: 300, renderCell: (params: GridCellParams) => (
                <strong>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            font="serif"
                            style={{marginLeft: 16}}
                            onClick={handleOpen}
                        >
                            Details
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            {body}
                        </Modal>
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
            }} hideFooter={true} />
        </div>
    );
}
