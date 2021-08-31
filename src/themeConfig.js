import { createMuiTheme } from '@material-ui/core/styles/';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
  typography: {
    fontFamily: ['"Roboto"', '"Segoe UI Emoji"', '"Helvetica Neue"'].join(','),
  },
});

export default theme;
