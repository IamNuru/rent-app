// material
import { Badge, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// ----------------------------------------------------------------------

const RootStyle = {
  zIndex: 999,
  right: 0,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: 128,
  height:40,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 10,
  boxShadow: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 20px 40px -4px;',
  color: 'rgb(33, 43, 54)',
  backgroundColor: 'rgb(255, 255, 255)',
  borderTopLeftRadius: 16,
  borderBottomLeftRadius: 16,
  transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': { opacity: 0.72 }
};

// ----------------------------------------------------------------------

export default function CartWidget() {
  return (
    <Box style={RootStyle}>
      <Badge showZero badgeContent={0} color="error" max={99}>
        <ShoppingCartIcon width={24} height={24} />
      </Badge>
    </Box>
  );
}
