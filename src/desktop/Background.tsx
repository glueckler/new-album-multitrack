import { Box } from '@mui/material';
import desktopLoadingPic from './assets/Desktop_LoadingPic.png';
import desktopLinerGif from './assets/Desktop_LinerPic.gif';
import desktopQuietGif from './assets/Desktop_QuietPic.gif';
import desktopVioletGif from './assets/Desktop_VioletPic.gif';

import { useBackground, usePlayer } from '../shared/hooks';
import { loadPlayer } from '../shared/player/loadPlayer';

export function Background(): JSX.Element {
  const { display } = useBackground();
  const { setBeganLoadingTrue } = usePlayer();

  const DesktopImgStyles = {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: -100,
    marginTop: '60px',
  };

  return (
    <>
      <Box
        component="img"
        sx={DesktopImgStyles}
        alt="Gavin Bradley"
        src={desktopLoadingPic}
      />
      <Box
        component="img"
        sx={{
          ...DesktopImgStyles,
          display: display('liner-notes'),
        }}
        alt="Gavin Bradley"
        src={desktopLinerGif}
      />
      <Box
        component="img"
        sx={{
          ...DesktopImgStyles,
          display: display('acoustic'),
        }}
        alt="Gavin Bradley"
        src={desktopQuietGif}
      />
      <Box
        component="img"
        sx={{
          ...DesktopImgStyles,
          display: display('synthetic'),
        }}
        alt="Gavin Bradley"
        src={desktopVioletGif}
      />
    </>
  );
}
