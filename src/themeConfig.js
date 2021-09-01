import { createMuiTheme } from '@material-ui/core/styles/';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
  typography: {
    fontFamily: [
      '"Noto Sans JP"',
      '"Helvetica Neue"',
      '"Segoe UI Emoji"',
      '"Apple Color Emoji"',
      '"Roboto"',
    ].join(','),
  },
});

export default theme;
