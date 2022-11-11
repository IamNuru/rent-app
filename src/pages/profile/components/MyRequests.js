import React from 'react'
import { filter } from 'lodash';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
// material
import {
    Card,
    Table,
    Stack,
    Button,
    Checkbox,
    TableRow,
    TableBody,
    TableCell,
    Container,
    Typography,
    TableContainer,
    TablePagination,
    Badge,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// components
import RequestListHead from './request/RequestListHead';
import RequestMoreMenu from './request/RequestMoreMenu';
import SearchNotFound from '../../../components/SearchNotFound';
import RequestListToolbar from './request/RequestListToolbar';
// mock
import requests from '../../../_mock/requests'
import { formatDistance } from 'date-fns/esm';

const TABLE_HEAD = [
    { id: 'title', label: 'Title', alignRight: false },
    { id: 'response', label: 'Response', alignRight: false },
    { id: 'date', label: 'Date', alignRight: true },
    { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_request) => _request.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

const MyRequests = () => {

    const [page, setPage] = useState(0);

    const [order, setOrder] = useState('asc');

    const [selected, setSelected] = useState([]);

    const [orderBy, setOrderBy] = useState('title');

    const [filterTitle, setFilterTitle] = useState('');

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, request) => {
        const isAsc = orderBy === request && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(request);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = requests.map((n) => n.title);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, title) => {
        const selectedIndex = selected.indexOf(title);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, title);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleFilterByTitle = (event) => {
        setFilterTitle(event.target.value);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - requests.length) : 0;

    const filteredProperties = applySortFilter(requests, getComparator(order, orderBy), filterTitle);

    const isRequestNotFound = filteredProperties.length === 0;



    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mt={5}>
                <Typography className='sub-header'>
                    My Requests
                </Typography>
                <Button variant="contained" component={RouterLink} to="#" startIcon={<AddCircleOutlineIcon />}>
                    New Request
                </Button>
            </Stack>

            <Card elevation={0}>
                <RequestListToolbar numSelected={selected.length} filterName={filterTitle} onFilterName={handleFilterByTitle} />

                <TableContainer sx={{ minWidth: 800 }}>
                    <Table>
                        <RequestListHead
                            order={order}
                            orderBy={orderBy}
                            headLabel={TABLE_HEAD}
                            rowCount={requests.length}
                            numSelected={selected.length}
                            onRequestSort={handleRequestSort}
                            onSelectAllClick={handleSelectAllClick}
                        />
                        <TableBody>
                            {filteredProperties.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                const { id, title, date } = row;
                                const isItemSelected = selected.indexOf(title) !== -1;

                                return (
                                    <TableRow
                                        hover
                                        key={id}
                                        tabIndex={-1}
                                        role="checkbox"
                                        selected={isItemSelected}
                                        aria-checked={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, title)} />
                                        </TableCell>
                                        <TableCell component="th" scope="row" padding="none">
                                            <Stack direction="row" alignItems="center" spacing={2}>
                                                <Typography variant="subtitle2" noWrap>
                                                    {title}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell align="center">{
                                            <Badge badgeContent={4} color="error">
                                                <MailIcon color="action" />
                                            </Badge>
                                        }</TableCell>
                                        <TableCell align="right">
                                            {formatDistance(date, new Date(), { addSuffix: true })}
                                        </TableCell>

                                        <TableCell align="right">
                                            <RequestMoreMenu />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>

                        {isRequestNotFound && (
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                        <SearchNotFound searchQuery={filterTitle} />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        )}
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={requests.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Card>
        </Container>
    )
}

export default MyRequests;