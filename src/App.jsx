import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import theme from './themeConfig';
import {
  makeStyles,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: 'url(images/hero.jpeg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 850,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '8rem',
  },
  titleHero: {
    fontSize: '100px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonHero: {
    backgroundColor: '#EBBF5F00',
    fontWeight: 'bold',
    color: '#fff',
    borderColor: '#fff',
    fontSize: '40px',
    borderRadius: 20,
    '&:hover': {
      backgroundColor: '#C08F24',
    },
  },
  descripHero: {
    fontSize: '32px',
    fontWeight: 700,
    textAlign: 'center',
  },
  cardPictures: {
    height: 750,
    display: 'flex',
    alignItems: 'center',
  },
  cardRoot: {
    margin: 0,
    padding: theme.spacing(1),
  },
  dialogContent: {
    width: '1800px',
  },
}));

//Contact us scroll To Bottom
const scrollToBottom = () =>
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
//Dialog Transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  let url = "";
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      {/* 1st Section: Main Cover */}
      <Box className={classes.hero}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.titleHero}>
              Protecting your place
            </Typography>
            <Typography className={classes.descripHero}>
              Protect your homes and businesses with our fences
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Button
                variant="outlined"
                className={classes.buttonHero}
                onClick={scrollToBottom}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Container>
        {/*2nd Section: Card Pictures */}

        <Box className={classes.cardPictures}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card className={classes.cardRoot} onClick={handleClickOpen}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Wood Fence"
                    height="450"
                    image="images/woodfence.jpeg"
                   
                    title="Wood Fence"
                  />
                  <CardContent>
                    <Box fontWeight={800} fontSize={24}>
                      Wood Fence
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Dialog
              maxWidth={'md'}
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogContent>
                <Box>
                  <img
                    src={url}
                    width="850px"
                    alt="ironFenceImage"
                  />
                </Box>
              </DialogContent>
              <DialogActions></DialogActions>
            </Dialog>

            <Grid item xs={6}>
              <Card onClick={handleClickOpen}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Iron Fence"
                    height="450"
                    image="images/ironfence.jpeg"
                    title="Iron Fence"
                  />
                  <CardContent>
                    <Box fontWeight={800} fontSize={24}>
                      Iron Fence
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/*Footer */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
