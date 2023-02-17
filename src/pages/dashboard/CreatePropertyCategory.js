import { useState } from 'react';
import {Button, Card, Checkbox, Container, Stack, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, Typography } from '@mui/material'
/* import DeleteIcon from '@mui/icons-material/Delete';
import { Alert, Box, Button, Card, Checkbox, CircularProgress, Container, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, TextField, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { useFormik } from 'formik'
import { useAddCategoryMutation, useUpdateCategoryMutation } from '../../features/api/propertyApiService'
import * as Yup from 'yup' */
import { filter } from "lodash"
import {useGetCategoriesQuery } from '../../features/api/propertyApiService'
/* import isEmptyObject from '../../utils/isEmptyObject'
import RenderServerErrorMessage from '../../components/RenderServerErrorMessage' */
import CategoryListToolbar from "../dashboard/categories/CategoryListToolbar";
import { CategoryListHead, CategoryMoreMenu } from './categories';
import SearchNotFound from '../../components/SearchNotFound';
/* import { Link as RouterLink } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; */
import EmptyList from '../../components/EmptyList';
import CategoryFormDialog from './categories/CategoryFormDialog';


const TABLE_HEAD = [
  { id: 'title', label: 'Title', alignRight: false },
  { id: '', label: 'No. of Properties', alignRight: true },
  { id: '' },
];

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


const CreatePropertyCategory = () => {

  const { data, refetch, isLoading } = useGetCategoriesQuery()

  const [edit, setEdit] = useState(false)
  const [open, setOpen] = useState(false)

  



  const userProperties = data ? data.categories : null;

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


  const handleClickOpen = () => {
    setEdit(false)
    setOpen(true)
  }

  /* const handleClickOpenEdit = () => {
    setEdit(true)
    setOpen(true)
  } */


  return (
    <Container sx={{ px: { xs: 0, sm: 0, md: 2 } }} >
      <Stack sx={{ backgroundColor: '#ededed', px: 1, py: 1.5 }} direction="row" alignItems="center" justifyContent="space-between" mt={5}>
        <Typography className='sub-header2'>
          Categories
        </Typography>
        <Button variant="contained" onClick={handleClickOpen}>
          New Category
        </Button>
      </Stack>
      <CategoryFormDialog open={open} setOpen={setOpen} edit={edit} refetch={refetch} />

      {
        isLoading ? (<span>Loading data</span>) :
          userProperties?.length > 0 ? (
            <Card elevation={0}>
              <CategoryListToolbar selectedIds={selected}
                numSelected={selected.length} filterName={filterTitle}
                onFilterName={handleFilterByTitle} refetch={refetch} setSelectedIds={setSelected} />

              <TableContainer className='custom-scroll-bar'>
                <Table>
                  <CategoryListHead
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
                      const { id, title } = row;
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
                          <TableCell align="right">{20}</TableCell>


                          <TableCell align="right">
                            <CategoryMoreMenu refetch={refetch} id={id} />
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
            <EmptyList title="No Categories"
              description="There are no categories. Add a property category"
              sx={{ height: '15rem !important', mt: 1 }}
            />
          )
      }
    </Container>
  )
}



export default CreatePropertyCategory