import React from 'react'
import { filter } from 'lodash';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
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
import TenantListHead from './tenant/TenantListHead';
import TenantMoreMenu from './tenant/TenantMoreMenu';
import SearchNotFound from '../../../components/SearchNotFound';
import TenantListToolbar from './tenant/TenantListToolbar';
// mock
import tenants from '../../../_mock/tenant'
import EmptyList from '../../../components/EmptyList';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'gender', label: 'Gender', alignRight: false },
  { id: 'phone', label: 'Phone', alignRight: false },
  { id: 'amount', label: 'Owing', alignRight: true },
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
    return filter(array, (_tenant) => _tenant.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

const MyTenants = () => {

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, tenant) => {
    const isAsc = orderBy === tenant && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(tenant);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = tenants.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tenants.length) : 0;

  const filteredProperties = applySortFilter(tenants, getComparator(order, orderBy), filterName);

  const isTenantNotFound = filteredProperties.length === 0;



  return (
    <Container sx={{px: { xs: 0.25, sm: 0, md: 2 }}}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mt={5}>
        <Typography className='sub-header2'>
          My Tenants
        </Typography>
        <Button variant="contained" size='small' component={RouterLink} to="#" startIcon={<AddCircleOutlineIcon />}>
          New Tenant
        </Button>
      </Stack>

      {
        tenants?.length > 0 ? (
          <Card elevation={0}>
            <TenantListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TenantListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tenants.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredProperties.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, avatarUrl, status, gender, phone, amount } = row;
                    const isItemSelected = selected.indexOf(name) !== -1;

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
                          <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, name)} />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={name} src={avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{status}</TableCell>
                        <TableCell align="left">{gender}</TableCell>
                        <TableCell align="left">{phone}</TableCell>
                        <TableCell align="left">{amount}</TableCell>

                        <TableCell align="right">
                          <TenantMoreMenu />
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

                {isTenantNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={tenants.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        ) : (
          <EmptyList title="No Tenants"
            description="You currently don't have any client/tenant"
            sx={{ height: '15rem !important', mt:1 }}
          />
        )
      }

    </Container>
  )
}

export default MyTenants;