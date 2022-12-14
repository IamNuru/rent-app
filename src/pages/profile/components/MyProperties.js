import React from 'react'
import { filter } from 'lodash';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// components
import PropertyListHead from './property/PropertyListHead';
import PropertyMoreMenu from './property/PropertyMoreMenu';
import SearchNotFound from '../../../components/SearchNotFound';
import EmptyList from '../../../components/EmptyList';
import PropertyListToolbar from './property/PropertyListToolbar';

const TABLE_HEAD = [
    { id: 'title', label: 'Title', alignRight: false },
    { id: 'type', label: 'Type', alignRight: false },
    { id: 'price', label: 'Price', alignRight: true },
    { id: 'title', label: 'Actions', alignRight: true },
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

function applySortFilter(array = [], comparator, query) {
    const stabilizedThis = array?.map((el, index) => [el, index]);
    stabilizedThis?.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_property) => _property.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis?.map((el) => el[0]);
}

const MyProperties = ({ query: { data, isLoading, isError, error, refetch }, ...others }) => {
    const userProperties = data ? data.properties : null;

    const [page, setPage] = useState(0);

    const [order, setOrder] = useState('asc');

    const [selected, setSelected] = useState([]);

    const [orderBy, setOrderBy] = useState('title');

    const [filterTitle, setFilterTitle] = useState('');

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = userProperties.map((n) => n.id);
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

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userProperties.length) : 0;

    const filteredProperties = applySortFilter(userProperties, getComparator(order, orderBy), filterTitle);

    const isPropertyNotFound = filteredProperties?.length === 0;



    return (
        <Container sx={{ px: { xs: 0, sm: 0, md: 2 } }} {...others}>
            <Stack sx={{backgroundColor:'#ededed', px:1, py:1.5}} direction="row" alignItems="center" justifyContent="space-between" mt={5}>
                <Typography className='sub-header2'>
                    My Properties
                </Typography>
                <Button variant="contained" size='small' component={RouterLink} to="/dashboard/add-property" startIcon={<AddCircleOutlineIcon />}>
                    New Property
                </Button>
            </Stack>

            {
                isLoading ? (<span>Loading data</span>) :
                    userProperties?.length > 0 ? (
                        <Card elevation={0}>
                            <PropertyListToolbar selectedIds={selected}
                                numSelected={selected.length} filterName={filterTitle}
                                onFilterName={handleFilterByTitle} refetch={refetch} setSelectedIds={setSelected}/>

                            <TableContainer className='custom-scroll-bar'>
                                <Table>
                                    <PropertyListHead
                                        order={order}
                                        orderBy={orderBy}
                                        headLabel={TABLE_HEAD}
                                        rowCount={userProperties.length}
                                        numSelected={selected.length}
                                        onRequestSort={handleRequestSort}
                                        onSelectAllClick={handleSelectAllClick}
                                    />
                                    <TableBody>
                                        {filteredProperties.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                            const { id, title, type, price } = row;
                                            const isItemSelected = selected.indexOf(id) !== -1;

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
                                                        <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, id)} />
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" padding="none">
                                                        <Stack direction="row" alignItems="center" spacing={2}>
                                                            <Typography variant="subtitle2" noWrap>
                                                                {title}
                                                            </Typography>
                                                        </Stack>
                                                    </TableCell>
                                                    <TableCell align="center">{'For ' + type}</TableCell>
                                                    <TableCell align="right">
                                                        {price}
                                                    </TableCell>

                                                    <TableCell align="right">
                                                        <PropertyMoreMenu refetch={refetch} id={id}/>
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

                                    {isPropertyNotFound && (
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
                                count={userProperties.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Card>
                    ) : (
                        <EmptyList title="No properties"
                            description="You have no properties Yet. Add a property"
                            sx={{ height: '15rem !important', mt: 1 }}
                        />
                    )
            }
        </Container>
    )
}

export default MyProperties;