import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ImageCard = () => {
  return (
    <Grid container spacing={5} display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" >
      <Grid item display="flex" justifyContent="center" alignItems="center" pb={5} sx={{
        transform: {md : 'translateY(-150px)',xl : 'translateY(70px)'},
    }}>
        <Image src="/card/card1.png" alt="placeholder" width={245} height={350} layout='responsive'/>
      </Grid>
      <Grid item>
        <Grid container display="flex" flexDirection="column" spacing={5} sx={{
        transform: {md : 'translateY(-200px)',xl : 'translateY(70px)'},
      }}>
          <Grid item>
            <Image src="/card/card2.png" alt="placeholder" width={337} height={194} layout='responsive'/>
          </Grid>
          <Grid item>
            <Image src="/card/card3.png" alt="placeholder" width={337} height={194} layout='responsive' />
          </Grid>
          <Grid item>
            <Image src="/card/card4.png" alt="placeholder" width={337} height={194} layout='responsive'/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{
        transform: {md : 'translateY(-250px)',xl : 'translateY(0px)'},
      }}>
        <Grid container display="flex" flexDirection="column" spacing={5}>
          <Grid item mb={5}>
            <Image src="/card/card5.png" alt="placeholder" width={245} height={194} layout='responsive'/>
          </Grid>
          <Grid item>
            <Image src="/card/card6.png" alt="placeholder" width={337} height={194} layout='responsive'/>
          </Grid>
          <Grid item>
            <Image src="/card/card7.png" alt="placeholder" width={337} height={194} layout='responsive'/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ImageCard;
