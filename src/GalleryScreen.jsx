import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import theme from './themeConfig';
import Gallery from 'react-grid-gallery';
import { makeStyles, Box, Grid, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title:{
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    textTransform: 'uppercase',
    fontSize: 1500
  },
  gallery: {
    paddingBottom: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
    fontFamily: 'Noto Sans JP',
  },
}));

const GalleryScreen = () => {
  const classes = useStyles();
  const IMAGES = [
    {
      src: 'images/gallery/woodFence.jpeg',
      thumbnail: 'images/gallery/woodFence.jpeg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: 'Boats (Jeshu John - designerspics.com)',
    },
    {
      src: 'images/gallery/woodFence1.jpeg',
      thumbnail: 'images/gallery/woodFence1.jpeg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,

      caption: 'Boats (Jeshu John - designerspics.com)',
    },
    {
      src: 'images/gallery/woodFence2.jpeg',
      thumbnail: 'images/gallery/woodFence2.jpeg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,

      caption: 'Boats (Jeshu John - designerspics.com)',
    },
    {
      src: 'images/gallery/woodFence3.jpeg',
      thumbnail: 'images/gallery/woodFence3.jpeg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,

      caption: 'Boats (Jeshu John - designerspics.com)',
    },
    {
      src: 'images/gallery/woodFence4.jpeg',
      thumbnail: 'images/gallery/woodFence4.jpeg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,

      caption: 'Boats (Jeshu John - designerspics.com)',
    },
    {
      src: 'images/woodSimulation.jpeg',
      thumbnail: 'images/woodSimulation.jpeg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,

      caption: 'Boats (Jeshu John - designerspics.com)',
    },
    {
      src: 'images/gallery/columns.jpeg',
      thumbnail: 'images/gallery/columns.jpeg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,

      caption: 'Boats (Jeshu John - designerspics.com)',
    },
    {
      src: 'images/gallery/columnsIron.jpeg',
      thumbnail: 'images/gallery/columnsIron.jpeg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,

      caption: 'Boats (Jeshu John - designerspics.com)',
    },
    {
      src: 'images/gallery/ironFenceTruck.jpeg',
      thumbnail:'images/gallery/ironFenceTruck.jpeg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,

      caption: 'Boats (Jeshu John - designerspics.com)',
    },
    {
      src: 'images/gallery/woodFence5.jpeg',
      thumbnail:'images/gallery/woodFence5.jpeg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,

      caption: 'Boats (Jeshu John - designerspics.com)',
    },
    

  ];

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box m={18}></Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className={classes.gallery} flexWrap="noWrap">
      <Container>
            <Box className={classes.title}><Typography variant="h5">Gallery</Typography></Box>
            <Gallery images={IMAGES} />
      </Container>
          </Box>
        </Grid>
      </Grid>
      {/*Footer */}
      <Footer/>
    </ThemeProvider>
  );
};

export default GalleryScreen;
