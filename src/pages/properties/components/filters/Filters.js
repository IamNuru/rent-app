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

import { useIsTabletScreen } from "../../../../hooks/useMediaScreens";
import FilterProperties from "./FilterProperties";
import SortProperties from "./SortProperties";

const SortingProperties = () => {
  const isTabletScreen = useIsTabletScreen();

  return (
    <Container maxWidth="md" mt={4}>
      <Accordion defaultExpanded={isTabletScreen}>
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
              <Typography sx={{ color: "gray" }}>Sort:</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <SortProperties />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={isTabletScreen} sx={{mt:1}}>
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
    </Container>
  );
};

export default SortingProperties;
