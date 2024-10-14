import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import marketingImage from "../../Asset/marketingImg.png";

export default function SolutionComp({ image, title, subtitle }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div">
            {title} {/* Changed from {{title}} to {title} */}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {subtitle} {/* This is correct */}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img" // Use "img" since you are passing an image URL
        sx={{ width: 100 }}
        image={marketingImage} // Correctly use the image prop here
        alt={title} // Set alt text to title
      />
    </Card>
  );
}
