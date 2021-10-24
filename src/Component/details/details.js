import React from 'react'
import { Typography, Card, CardMedia, CardContent } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Phone from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'
import useStyles from './styles'
import {

    FacebookShareButton,
    LinkedinShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinIcon



} from "react-share";


const Details = ({ place, selected, refProp }) => {
    const classes = useStyles()

    if (selected) {
        refProp.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    return (
        <Card elevation={6} key={place._id}>
            <CardMedia style={{ height: 350, paddingTop: '56.25%' }}
                image={place.photoUrl}
                title={place.title}
            />
            <CardContent>
                <Typography variant='h5'>
                    {place.title}
                </Typography>
                <Typography variant='subtitle2' color='textSecondary'>{place.desc}</Typography>
                <Typography variant='h3' color='textSecondary' style={{textAlign:'center'}}>Menu</Typography>
                <div className={classes.menu}>
                    <img className={classes.imageMenu} 
                    src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg?w=1155&h=1528"
                    alt="" />
                    <Typography gutterBottom variant='body2' color='secondary' className={classes.subtitle}>
                       Salad
                    </Typography>
                </div>
                <div className={classes.menu}>
                    <img className={classes.imageMenu} 
                    src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg?w=1155&h=1528"
                    alt="" />
                    <Typography gutterBottom variant='body2' color='secondary' className={classes.subtitle}>
                       Salad
                    </Typography>
                </div>
                <div className={classes.menu}>
                    <img className={classes.imageMenu} 
                    src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg?w=1155&h=1528"
                    alt="" />
                    <Typography gutterBottom variant='body2' color='secondary'className={classes.subtitle}>
                       Salad
                    </Typography>
                </div>
                <a href="#" style={{marginTop:"4px"}}>more</a>
                {place.address && (
                    <Typography gutterBottom variant='body2' color='secondary' className={classes.subtitle}>
                        <LocationOnIcon />{`Nave shaana ${place.address}`}
                    </Typography>

                )}

                {place.phone && (
                    <Typography gutterBottom variant='body2' color='textSecondary' className={classes.subtitle}>
                        <a href={`tel:${place.phone}`}><Phone /> </a> <a className={classes.phoneCall} href={`tel:${place.phone}`}> {`Phone: ${place.phone}`}</a>
                    </Typography>
                )}
                < FacebookShareButton
                style={{margin:"8px"}}
                    url={place.photoUrl}
                    quote={'#Explore  NEVE-SHAANAN Restaurants'}
                    hashtag={place.title}
                >
                    < FacebookIcon size='23' />
                </FacebookShareButton>
                < LinkedinShareButton
                   style={{margin:"8px"}}
                    url={place.photoUrl}
                    quote={place.title}
                    hashtag={place.title}
                >
                    < LinkedinIcon size='23' />
                </ LinkedinShareButton>
                < WhatsappShareButton
                   style={{margin:"8px"}}
                    url={place.photoUrl}
                    quote={place.title}
                    
                >
                    < WhatsappIcon size='23' />
                </ WhatsappShareButton>
            </CardContent>
            <Rating size="small" value={place.rating} />

        </Card>
    )
}

export default Details
