import { Container, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from "@mui/material";

const SortingProperties = () => {
  return (
    <Container maxWidth="md" mt={4}>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Sort By:</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="Region" control={<Radio />} label="region" />
          <FormControlLabel value="Latest" control={<Radio />} label="latest" />
          <FormControlLabel value="Oldest" control={<Radio />} label="oldest" />
          <FormControlLabel value="Ratings" control={<Radio />} label="ratings" />
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default SortingProperties;
