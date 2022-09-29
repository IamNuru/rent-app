import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const SortProperties = () => {

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="region" control={<Radio />} label="Region" />
        <FormControlLabel value="latest" control={<Radio />} label="Latest" />
        <FormControlLabel value="oldest" control={<Radio />} label="Oldest" />
        <FormControlLabel value="ratings" control={<Radio />} label="Ratings" />
      </RadioGroup>
    </FormControl>
  );
};

export default SortProperties;
