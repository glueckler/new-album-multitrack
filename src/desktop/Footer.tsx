import { Box } from '@mui/material';
import desktopCredits from './assets/Desktop_Credits.png';

export function Footer(): JSX.Element {
  return (
    <Box
      sx={{ position: 'fixed', bottom: 0, mb: '27px', width: 500 }}
      component={'img'}
      src={desktopCredits}
      alt="production credits"
    />
  );
}
