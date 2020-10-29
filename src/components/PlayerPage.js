import React from 'react'
import { Grid } from '@material-ui/core'
import UserInfo from './UserInfo'
function PlayerPage() {
    return (
        <Grid
            justify="center"
            alignItems="center"      
            container
            direction="row" 
            spacing={24}
         >
            <Grid item md={3}>
                <UserInfo />
            </Grid>
            
        </Grid>
    )
}

export default PlayerPage
