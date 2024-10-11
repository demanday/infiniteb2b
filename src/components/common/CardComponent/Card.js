import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { FaBookmark } from 'react-icons/fa'; // React icon for bookmark
// import { Document, Page } from 'react-pdf';
import pdfUrl from "../../../Asset/dummypdf.pdf"
const CarouselCard = ({ title, type, description, author, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345, position: 'relative' }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={imageUrl}
      />
      {/* <div style={{ height: '200px', overflow: 'hidden' }}>
        <Document file={pdfUrl}>
          <Page pageNumber={1} />
        </Document>
      </div> */}
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary" component="p">
          {type}
        </Typography>
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {author}
        </Typography>
      </CardContent>

      {/* Right-side icon */}
      <IconButton
        aria-label="bookmark"
        sx={{ position: 'absolute', bottom: 10, right: 10 }}
      >
        <FaBookmark />
      </IconButton>
    </Card>
  );
};

export default CarouselCard;
