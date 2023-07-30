import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Container from '@mui/material/Container';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import CircleIcon from '@mui/icons-material/Circle';


import myimg from "./assets/images/Pronoia.jpg";
import myimg2 from "./assets/images/BTCX.jpg";
import myimg3 from "./assets/images/Farewell17.jpg";


const CarouselTest = () => {
  var items = [
    {
      name: "Pronoia 2023",
      description: "Islamic University of Technology Photographic Society (IUTPS) is proud to present the Intra IUT Photography Exhibition of the year 2023. Pronoia is back on campus after 3 long years. PRONOIA Exhibition Schedule - 13 march to 14 march,2023.                          Exhibition Venue - IUTPS Exhibition Corner.",
      image: myimg
    },
    {
      name: "Throwback to BTCX",
      description: "Well, let's take a moment to look upon the last year's BTCX. Get ready once again to showcase your photography skills and let your creativity shine! Grab your cameras and stay tuned with us. We are ready to welcome you to witness an unforgettable experience of a lifetime. Hope to see all at BTC-XI.",
      image: myimg2
    },
    {
      name: "Farewell",
      description: "Dear 17, It's been an honor to have you all within us and getting indulged into all the fun and 'adda's' just like old times. A big thank you for giving us time for this one last time. Perhaps your journey with IUT has ended. However, the bonding with IUTPS will never end. The million blessings of IUTPS will always be there for you in your future endeavours of excellence and compassion. Tribute to PS'17 farewell...",
      image: myimg3
    }
  ]

  return (
    <Carousel
      IndicatorIcon={<CircleIcon style={{ fontSize: "15px" }} />}
      fullHeightHover={false}     // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: 'cornflowerblue',
          borderRadius: 0
        }
      }}
      navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
          bottom: '0',
          top: 'unset'
        }
      }}
      NextIcon='next'             // Change the "inside" of the next button to "next"
      PrevIcon='prev'   >
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}


function Item(props) {
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Card style={{ height:"40%", width:"85%", marginLeft: "auto", marginRight: "auto"}}>
        <div class="my-img" style={{ height: "80%" }}>
          <img src={props.item.image} alt="Logo" style={{ width: "100vw", height: "100vh" }} />
          <div class='text-on-image' style={{width:"30%"}}>
            <Typography color="#86b349" component="div" variant="h6">
              {props.item.name}
            </Typography>
            <Typography color="#fff" display="block" style={{ fontSize: "14px", marginTop:"10px" }}>
              {props.item.description}
            </Typography>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default CarouselTest;