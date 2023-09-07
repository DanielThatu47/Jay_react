import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Marquee from "react-fast-marquee";
const CardContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
});

export default function MediaCard() {
  return (<>
  <div class="container py-4">
                <h2 class="text-center">Our Services</h2>
                <p class="text-center">We offer a variety of services to meet your pet's needs.</p>
                <Marquee><CardContainer sx={{py:1}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Daycare
        </Typography>
        <Typography variant="body2" color="text.secondary">
        We provide a safe and fun environment for your pet to play and socialize with other pets while you are away.
        </Typography>
      </CardContent>
      
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Grooming
        </Typography>
        <Typography variant="body2" color="text.secondary">
        We provide professional grooming services for your pet, including bathing, brushing, trimming, nail clipping, and more.
        </Typography>
      </CardContent>
      
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Boarding
        </Typography>
        <Typography variant="body2" color="text.secondary">
        We offer comfortable and cozy accommodations for your pet to stay overnight or longer. We also provide daily walks, meals, and treats.
        </Typography>
      </CardContent>
     
    </Card></CardContainer></Marquee></div>
    </>
  );
}
