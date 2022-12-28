import { LinearProgress } from '@mui/material';

function FallbackSpinner() {
  return (
    <div 
    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#E6F0FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <LinearProgress />
    </div>
  );
}

export default FallbackSpinner;
