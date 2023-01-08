// @mui
import PropTypes from "prop-types";
import { Box, Card, Typography } from "@mui/material";


import LoadingDots from '../../../../components/LoadingDots'

// ----------------------------------------------------------------------

const IconWrapperStyle = {
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: 8,
  height: 8,
  justifyContent: "center",
  marginBottom: 3,
};

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  /* icon: PropTypes.string, */
  title: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({
  title,
  total,
  isLoading,
  icon,
  color = "gray",
  bgColor='white',
  sx,
  ...other
}) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: "center",
        color: color,
        bgcolor: bgColor,
        ...sx,
      }}
      {...other}
    >
      <Box style={IconWrapperStyle}
        sx={{
          color: color,
          backgroundImage: `linear-gradient(135deg, ${(color, 0)} 0%, ${(color, 0.24)} 100%`,
        }}
      >
      </Box>

      <Box>{
        isLoading ? <LoadingDots /> : <Typography variant="h4">{total}</Typography>
      }</Box>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
