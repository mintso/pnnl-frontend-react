import './App.css';
import React from 'react';
import {DataGrid, GridRowsProp, GridColDef} from '@material-ui/data-grid';
import {GridCellParams} from "@material-ui/data-grid";
import {Button, makeStyles, Modal} from "@material-ui/core";


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
        width: 550,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


export default function HuntingServiceModal(): React.Component {


    const rows: GridRowsProp = [
        {id: 1, col1: 'VAV100', col2: '2021-04-02T10:31:00.000+00:00', col3: '76.0'},
        {id: 2, col1: 'VAV100', col2: '2021-04-02T10:35:00.000+00:00', col3: '76.0'},
        {id: 3, col1: 'VAV100', col2: '2021-04-02T10:36:00.000+00:00', col3: '76.0'},
        {id: 4, col1: 'VAV100', col2: '2021-04-02T10:38:00.000+00:00', col3: '76.0'},
        {id: 5, col1: 'VAV100', col2: '2021-04-02T10:40:00.000+00:00', col3: '76.0'},
        {id: 6, col1: 'VAV100', col2: '2021-04-02T10:42:00.000+00:00', col3: '76.0'},
        {id: 7, col1: 'VAV100', col2: '2021-04-02T10:44:00.000+00:00', col3: '76.0'},
        {id: 8, col1: 'VAV100', col2: '2021-04-02T11:31:00.000+00:00', col3: '76.0'},
        {id: 9, col1: 'VAV100', col2: '2021-04-02T11:31:00.000+00:00', col3: '76.0'},
        {id: 10, col1: 'VAV100', col2: '2021-04-02T11:40:00.000+00:00', col3: '76.0'},
        {id: 11, col1: 'VAV100', col2: '2021-04-02T11:50:00.000+00:00', col3: '76.0'},
        {id: 12, col1: 'VAV110', col2: '2021-04-02T12:00:00.000+00:00', col3: '76.0'},
    ];

    const columns: GridColDef[] = [
        {field: 'col1', headerName: 'Valve Name', width: 300},
        {field: 'col2', headerName: 'Time', width: 300},
        {field: 'col3', headerName: 'Value', width: 300},
    ];

    return (
        <div style={{height: 800, width: '100%'}}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}
