'use client';
import { FC } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface ItemProps {
    name: string;
    description: string;
}

const Item: FC<ItemProps> = ({ name, description }) => {
    return (
        <Box
            sx={{
                boxSizing: "border-box",
                padding:4,
                background: '#D9D9D9',
                width:"100vw"
            }}
        >
            <h2>{name}</h2>
            <p>{description}</p>

            <Button className="CheckButton">Check it out!</Button>
        </Box>
    );
};

export const HomeCarousel: FC = () => {
    const items = [
        {
            name: 'Random Name #1',
            description: 'Probably the most random thing you have ever seen!',
        },
        {
            name: 'Random Name #2',
            description: 'Hello World!',
        },
    ];

    return (
        <Carousel
            NextIcon={<NavigateNextIcon />}
            PrevIcon={<NavigateBeforeIcon />}
            swipe={false}
            navButtonsAlwaysVisible
            navButtonsProps={{
                style: {
                    background: 'none',
                },
            }}
            indicatorIconButtonProps={{
                style: {
                    zIndex: 10,
                },
            }}
            indicatorContainerProps={{
                style: {
                    position: 'relative',
                    bottom: 30,
                },
            }}
            sx={{ display:"flex",placeItems:"center",flexDirection:"column"}}
        >
            {items.map((item, i) => (
                <Item name={item.name} description={item.description} key={i} />
            ))}
        </Carousel>
    );
};
