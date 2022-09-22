import { Box } from '@mui/material';
import desktopLoadingGif from './assets/Desktop_Loading.gif';
import desktopPlayGif from './assets/Desktop_PlayPrompt.gif';
import desktopNamePic from './assets/Desktop_Name.png';
import desktopNotesTitle from './assets/Desktop_NotesTitle.png';
import desktopQuietTitle from './assets/Desktop_QuietTitle.png';
import desktopVioletTitle from './assets/Desktop_VioletTitle.png';

import { useInfoDisplay, usePlayer } from '../shared/hooks';
import { LoadingBar } from '../shared/components/LoadingBar';

export function HeaderInfo(): JSX.Element {
  const { handleOnPlay, currentTrackLoaded, currentTrack } = usePlayer();
  const height = '35px';
  const { loading, play, violetLife, quietLife, linerNotes } = useInfoDisplay();
  return (
    <Box sx={{ display: 'flex', mb: '6px' }}>
      <Box
        sx={{ height }}
        component="img"
        src={desktopNamePic}
        alt="Gavin Bradley"
      />
      <Box
        sx={{ height, display: loading }}
        component="img"
        src={desktopLoadingGif}
        alt="loading"
      />

      <Box
        sx={{ height, cursor: 'pointer', display: play }}
        component="img"
        src={desktopPlayGif}
        alt="play"
        onClick={handleOnPlay}
      />

      <Box
        sx={{ height, display: linerNotes }}
        component="img"
        src={desktopNotesTitle}
        alt="play"
      />

      <Box
        sx={{ height, display: quietLife }}
        component="img"
        src={desktopQuietTitle}
        alt="play"
      />

      <Box
        sx={{ height, display: violetLife }}
        component="img"
        src={desktopVioletTitle}
        alt="play"
      />
      <Box sx={{ ml: '-20px' }}>
        <LoadingBar finished={currentTrackLoaded} currentTrack={currentTrack} />
      </Box>
    </Box>
  );
}
