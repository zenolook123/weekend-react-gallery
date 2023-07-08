import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
import {Button} from '@mui/material';
import './PhotoCard.css';
function PhotoCard({imageGallery, likePost}) {



    const [wasClicked=false, clickDescription] = useState()
    const handleClick = () => {
    console.log(imageGallery.title)
    clickDescription(!wasClicked)
    }

    const handleLike = () => {
        likePost(imageGallery.id)
    }

    const handleDelete = () => {
        alert("You can take my pride but you wont take my cats.")
    }


  return (
    <Card sx={{ maxWidth: 345 }} className='cards'>
      <CardActionArea>
        <CardMedia
           component="img"
           height="500"
           image={imageGallery.url}
           alt={imageGallery.title}
           onClick ={handleClick}
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
            <Button variant="contained" color='success' onClick={handleLike}>
                Like This Post
            </Button>
            <div className='delete-div'>
            <Button variant="contained" color='error' onClick={handleDelete}>
                Delete
            </Button>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PhotoCard
