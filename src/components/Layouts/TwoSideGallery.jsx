import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TwoSideGallery = ({media}) => {
  return (
    <Box sx={{ width: '85%', margin: 'auto', marginTop: '50px' }}>
      <Grid container spacing={4}>
        {media.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={image.url} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
              <Typography variant="body1" sx={{ marginTop: '8px' }}>
                {image.alt}
              </Typography>
              <Typography variant="body2">{image.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TwoSideGallery;
