'use client';
import { FC } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Item: FC = (props: {}) => {
    return (
        <Box sx={{ minHeight: '200px', background: '#D9D9D9' }}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

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
            swipe
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
                    bottom: 20,
                },
            }}
        >
            {items.map((item, i) => (
                <Item item={item} key={i} />
            ))}
        </Carousel>
    );
};