import {
  Container,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from '@mui/icons-material/Sort';

import FilterProperties from "./FilterProperties";
import SortProperties from "./SortProperties";
import PriceRange from "./PriceRange";

const SortingProperties = () => {

  return (
    <Container maxWidth="md" sx={{mt:2}}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid container spacing={2}>
            <Grid item>
              <SortIcon fontSize="small"/>
            </Grid>
            <Grid item>
              <Typography sx={{ color: "gray" }}>Order By:</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <SortProperties />
        </AccordionDetails>
      </Accordion>
      
      <Accordion sx={{mt:1}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Grid container spacing={2}>
            <Grid item>
              <FilterAltIcon fontSize="small"/>
            </Grid>
            <Grid item>
              <Typography sx={{ color: "gray" }}>Filter:</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <FilterProperties />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{mt:1}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Grid container spacing={2}>
            <Grid item>
              <FilterAltIcon fontSize="small"/>
            </Grid>
            <Grid item>
              <Typography sx={{ color: "gray" }}>Price Range:</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <PriceRange />
        </AccordionDetails>
      </Accordion>

    </Container>
  );
};

export default SortingProperties;
