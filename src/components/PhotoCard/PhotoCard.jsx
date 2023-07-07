import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
import {Button} from '@mui/material';
import './PhotoCard.css';
function PhotoCard({imageGallery}) {



    const [wasClicked=false, clickDescription] = useState()
    const handleClick = () => {
    console.log(imageGallery.title)
    clickDescription(!wasClicked)
    } 


  return (
    <Card sx={{ maxWidth: 345 }} className='cards'>
      <CardActionArea>
        <CardMedia
           component="img"
           height="500"
           image={imageGallery.url}
           alt={imageGallery.title}
           onClick={handleClick}
           key={imageGallery.id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {imageGallery.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {wasClicked ? <>{imageGallery.description}</>  : ''}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          <span>Likes: {imageGallery.likes}</span>
          <span> </span>
            <Button variant="contained" color='success' className='likeButton'>
                Like This Post
            </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PhotoCard
