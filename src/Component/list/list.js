import React from 'react'
import useStyle from './styles'
import PlaceDetails from '../details/details'
import {Typography, Grid, FormControl } from '@material-ui/core'

const List = ({places}) => {
    const classes = useStyle()
   
   
    return (
        <div className={classes.container}>
            <Typography variant='h5'>Restaurants around you</Typography>
           
                <div>
            <FormControl className={classes.formControl}>
            </FormControl>
            <FormControl className={classes.formControl}>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />

                    </Grid>
                ))}

            </Grid>
           
            
</div>
</div>
    )
    
                }

export default List