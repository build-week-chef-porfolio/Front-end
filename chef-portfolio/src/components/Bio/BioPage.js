import React from 'react';
import { Grid, Column, Image } from 'semantic-ui-react';

const BioPage = () => {
    return (
        <div className="biopageWrapper">
            <Grid>
            <Grid.Column width={4}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column width={9}>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column width={3}>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            </Grid>
      </div>
    )
}

export default BioPage