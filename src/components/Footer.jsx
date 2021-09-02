import React from 'react';
import { makeStyles, Box, Grid, Typography, Container } from '@material-ui/core';
import { Phone, Mail, LocationOn } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#000',
        height: '450px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    titleColumn: {
        fontSize: '24px',
        color: '#F4D3A1',
        fontWeight: 'bold',
        marginBottom: '11px'
    },
    contactTitle: {
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: '21px',
        color: '#FFF',
    },
    contactInfo: {
        display: 'inline',
        fontSize: '21px',
        color: '#FFF',
        marginLeft: '9px',

        alignItems: 'center',
    },
    paragraphAboutus: {
        fontSize: '21px',
        textAlign: 'justify',
        width: '80%'
    },
    imgSocialMedia: {
        marginRight: '10px',
        marginBottom: '10px'

    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.footer}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                        <Box className={classes.columnsFooter}> <Typography className={classes.titleColumn}>About us</Typography> </Box>
                        <Box className={classes.contactTitle}><Typography className={classes.paragraphAboutus}>We are a company that performs all kinds of fence work.</Typography></Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className={classes.columnsFooter}>
                            <Typography className={classes.titleColumn}>Social Media</Typography>
                            <Typography className={classes.contactTitle}> <img src="images/instagramLogo.svg" height="40px" alt="logo_ig" className={classes.imgSocialMedia} /> <Box>mannysfence</Box>
                            </Typography>
                            <Typography className={classes.contactTitle}> <img src="images/facebookLogo.svg" height="40px" alt="logo_ig" className={classes.imgSocialMedia} /> <Box>mannysfence</Box>
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box className={classes.columnsFooter}>
                            <Typography className={classes.titleColumn}>Contact us</Typography>

                            <Typography className={classes.contactTitle}><LocationOn /> <Box className={classes.contactInfo}>Omaha, Nebraska EEUU</Box></Typography>
                            <Typography className={classes.contactTitle}><Phone /> <Box className={classes.contactInfo}>531-329-7893 Manny (English)</Box>
                            </Typography>

                            <Typography className={classes.contactTitle}><Phone /> <Box className={classes.contactInfo}>402-515-9970 Matos (Spanish)</Box></Typography>
                            <Typography className={classes.contactTitle}><Mail /> <Box className={classes.contactInfo}>mannysfence1603@gmail.com</Box></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )


}

export default Footer;