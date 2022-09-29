import * as React from 'react';
import { FormControl, FormGroup, FormControlLabel, Checkbox} from '@mui/material';


const FilterProperties =() =>{
  const [state, setState] = React.useState({
    verified: true,
    rated: false,
    kitchen: false,
    toilet: false,
    bath: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { verified, rated, kitchen, toilet, bath } = state;

  return (
      <FormControl component="fieldset" variant="standard">
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox checked={verified} onChange={handleChange} name="verified" />
            }
            label="Verified"
          />
          <FormControlLabel
            control={
              <Checkbox checked={rated} onChange={handleChange} name="rated" />
            }
            label="Rated"
          />
          <FormControlLabel
            control={
              <Checkbox checked={kitchen} onChange={handleChange} name="kitchen" />
            }
            label="Kitchen"
          />
          <FormControlLabel
            control={
              <Checkbox checked={toilet} onChange={handleChange} name="toilet" />
            }
            label="Toilet"
          />
          <FormControlLabel
            control={
              <Checkbox checked={bath} onChange={handleChange} name="bath" />
            }
            label="Bath"
          />
        </FormGroup>
      </FormControl>
  );
}


export default FilterProperties;
