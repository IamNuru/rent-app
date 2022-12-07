import PropTypes from 'prop-types';
// material
import {
  Box,
  Radio,
  Stack,
  Button,
  Drawer,
  Divider,
  IconButton,
  Typography,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useDispatch } from 'react-redux';
import { propertyActions } from '../../../../redux/slices/propertySlice';


// ----------------------------------------------------------------------

export const SORT_BY_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
];
/* export const FILTER_AMENITIES_OPTIONS = ['kitchen', 'toilet', 'bath']; */
export const FILTER_CATEGORY_OPTIONS = [{value:'', name:'All'}, {value:'rent',name:'For Rent'}, {value:'sale',name:'For Sale'}];
/* export const FILTER_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];
export const FILTER_PRICE_OPTIONS = [
  { value: 'below', label: 'Below $25' },
  { value: 'between', label: 'Between $25 - $75' },
  { value: 'above', label: 'Above $75' },
]; */

// ----------------------------------------------------------------------

PropertiesFilterSidebar.propTypes = {
  isOpenFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function PropertiesFilterSidebar({ isOpenFilter, onOpenFilter, onCloseFilter }) {
  const dispatch = useDispatch();

  const handleTypeChange = (value) =>{
    dispatch(propertyActions.sortByPropertyType(value))
  }

 /*  const handleFilter = (amenity) =>{
    dispatch(propertyActions.filterByAmenities(amenity))
  } */

 
  return (
    <>
      <Button disableRipple color="inherit" endIcon={<FilterListIcon />} onClick={onOpenFilter}>
        Filters&nbsp;
      </Button>

      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 280, border: 'none', overflow: 'hidden' },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            Filters
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <CloseIcon width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />

        <Box>
          <Stack spacing={3} sx={{ p: 3 }}>
            {/* <div>
              <Typography variant="subtitle1" gutterBottom>
                Amenities
              </Typography>
              <FormGroup>
                {FILTER_AMENITIES_OPTIONS.map((amenity) => (
                  <FormControlLabel key={amenity} control={<Checkbox onClick={() => handleFilter(amenity)}/>} label={titleCase(amenity)} />
                ))}
              </FormGroup>
            </div> */}

            <div>
              <Typography variant="subtitle1" gutterBottom>
                Category
              </Typography>
              <RadioGroup>
                {FILTER_CATEGORY_OPTIONS.map((item, index) => (
                  <FormControlLabel 
                  key={index} value={item.value} control={<Radio  onChange={() => handleTypeChange(item.value)} />} label={item.name} />
                ))}
              </RadioGroup>
            </div>

            
            {/* <div>
              <Typography variant="subtitle1" gutterBottom>
                Price
              </Typography>
              <RadioGroup>
                {FILTER_PRICE_OPTIONS.map((item) => (
                  <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
                ))}
              </RadioGroup>
            </div> */}

            {/* <div>
              <Typography variant="subtitle1" gutterBottom>
                Rating
              </Typography>
              <RadioGroup>
                {FILTER_RATING_OPTIONS.map((item, index) => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={
                      <Radio
                        disableRipple
                        color="default"
                        icon={<Rating readOnly value={4 - index} />}
                        checkedIcon={<Rating readOnly value={4 - index} />}
                      />
                    }
                    label="& Up"
                    sx={{
                      my: 0.5,
                      borderRadius: 1,
                      '& > :first-of-type': { py: 0.5 },
                      '&:hover': {
                        opacity: 0.48,
                        '& > *': { bgcolor: 'transparent' },
                      },
                    }}
                  />
                ))}
              </RadioGroup>
            </div> */}
          </Stack>
        </Box>

        {/* <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="outlined"
            startIcon={<ClearAllIcon />}
          >
            Clear All
          </Button>
        </Box> */}
      </Drawer>
    </>
  );
}
