import React from 'react';
import { Image, Card, Grid } from '@aws-amplify/ui-react'

const GalleryView: React.FC = () => {
    const style = { color: 'black' };
    return (
        <Grid
            columnGap="0.5rem"
            rowGap="0.5rem"
            templateColumns="1fr 1fr 1fr"
            templateRows="1fr 3fr 1fr"
            style = {style}
        >
            <Card
                columnStart="1"
                columnEnd="-1"
            >
                <Image src="/IMG_8860.jpeg" alt="hello"/>
            </Card>
            <Card
                columnStart="1"
                columnEnd="2"
            >
                <Image src="/IMG_0352.JPG" alt="hello"/>
            </Card>
            <Card
                columnStart="2"
                columnEnd="3"
            >
                <Image src="/IMG_8836.jpeg" alt="hello"/>
            </Card>
            <Card
                columnStart="3"
                columnEnd="4"
            >
                <Image src="/IMG_0188.JPG" alt="hello"/>
            </Card>
        </Grid>
    );
}

export default GalleryView;