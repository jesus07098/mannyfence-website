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
    backgroundImage: 'url(images/hero.png)',
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
      backgroundColor: '#B69461',
    },
  },
  descripHero: {
    fontSize: '32px',
    fontWeight: 700,
    textAlign: 'center',
  },
  backgroundHero: {
    background: '#e2b877',
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
  phraseSection:{
    backgroundImage: 'url(images/prhaseSection.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 450,
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#fff',
    fontSize: '8rem',
  },
  titlePrhaseSection: {
    fontSize: '50px',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  descripPrhaseSection:{
    fontSize: '20px',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  testimonial: {
    backgroundColor: "#fff",
    height: 450,
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#fff',
    fontSize: '8rem',
  },
  quotationMark:{
    fontSize: '150px',
    color: '#F4D3A1',
    fontweight: 800,
    bordercolor: '#000'
  },
  testimonialParagraph:{
    fontSize: '20px',
    fontStyle: 'italic',
    color: '#8C8C8C',
    textAlign: 'justify',
    backgroundColor: '#F4F4F4'
  },
  bgTestimonial:{
    display: 'flex',
    backgroundColor:' #F4F4F4',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'  
  }
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
  let url = '';
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
          <Grid item xs={10} md={12}>
            <Typography className={classes.titleHero}>
              Protecting your place
            </Typography>
            <Typography className={classes.descripHero}>
              Protect your homes and businesses with our fences
            </Typography>
            <Box display="flex" justifyContent="center" mt={2}>
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
                    <Box
                      fontWeight={800}
                      fontSize={20}
                      fontFamily="Noto Sans JP"
                      mb={1}
                    >
                      Wood Fence
                    </Box>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Enhance the beauty of your property with cedar fencing...
                    </Typography>
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
                  <img src={url} width="850px" alt="ironFenceImage" />
                </Box>
              </DialogContent>
              <DialogActions></DialogActions>
            </Dialog>

            <Grid item xs={6}>
              <Card className={classes.cardRoot} onClick={handleClickOpen}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Wood Fence"
                    height="450"
                    image="images/ironfence.jpeg"
                    title="Iron Fence"
                  />
                  <CardContent>
                    <Box
                      fontWeight={800}
                      fontSize={20}
                      fontFamily="Noto Sans JP"
                      mb={1}
                    >
                      Aluminum and Iron Fence
                    </Box>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      The classic and timeless beauty of metal fences traditionally...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>

        
      </Container>
      <Box className={classes.phraseSection} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Container>
            <Typography className={classes.titlePrhaseSection}>
            About fences, whatever you want!
            </Typography>
            <Typography className={classes.descripPrhaseSection}>
            We take care of the installation and repair of fences for homes and establishments with our quality equipment.
            </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>

      <Box className={classes.testimonial} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Container>
            <Box className={classes.bgTestimonial}> 
            <Typography className={classes.quotationMark}>
            “
            </Typography>
            <Typography className={classes.testimonialParagraph}>
            I am extremely grateful for the service. My home is safer thanks to the wooden fence installed by Manny's Fence and they also built a house for my dog. - Joseph Smith
            </Typography>
            </Box> 
            </Container>
          </Grid>
        </Grid>
      </Box>

      {/*Footer */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
