import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import PieChart from './PieChart'
const columns = [
  { id: 'monday', label: 'Monday', minWidth: 170 },
  { id: 'tuesday', label: 'Tuesday', minWidth: 170 },
  {
    id: 'wednesday',
    label: 'Wednesday',
    minWidth: 170,
  },
  {
    id: 'thursday',
    label: 'Thursday',
    minWidth: 170,
  },
  {
    id: 'friday',
    label: 'Friday',
    minWidth: 170,
  },
  {
    id: 'saturday',
    label: 'Saturday',
    minWidth: 170,
  },
  {
    id: 'sunday',
    label: 'Sunday',
    minWidth: 170,
  },
];

const rows = [
    {week: 1},
    {week: 2},
    {week: 3},
    {week: 4},
    {week: 5}
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function CalendarTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.week}>
                  {columns.map((column) => {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <PieChart />
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

