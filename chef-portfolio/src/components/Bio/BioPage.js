import React from 'react';
import { Grid, Column, Image } from 'semantic-ui-react';

const BioPage = () => {
    return (
        <div className="biopageWrapper">
            <Grid>
            <Grid.Column width={6}>
            <Image src='https://s3-alpha-sig.figma.com/img/1b74/06e4/82ee991d203dc647c27d7b9de9835dfc?Expires=1565568000&Signature=dhkPX6OZRvX2QZIa1vG2dGfhhi~ucANVNiepsP~q9fRrXgdUbx0XXnCVk2yqb2rmbgg16JcEbnlZ1c9oZ88n-tuOYABUgNa-2JaIQYKVzjR5795u0H5mCsFvf4HfvfpU1DMn1ROCx6cO4F~sABwBOFKuG7tY5Sr9iyuM~-Reh9aFilMrtDg7m727cUTE2f0-lPa3u3GpIVdPaL~C~xf-tlmsD5J4W9FLbmaH5YJRJflMwOCCQhv7aGXXBYqUrwns-qGLAD7BFNAWQkVIOTMdl6Zr42h9Y8JjsMhuDujIZvMqo~Rog1Uoul46C-CuDhazvTelBX9Y1XVoo9hz1s4jVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
            </Grid.Column>
            <Grid.Column width={7}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet venenatis urna. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Congue nisi vitae suscipit tellus. Senectus et netus et malesuada fames ac turpis. Faucibus purus in massa tempor nec feugiat. Volutpat diam ut venenatis tellus. Risus ultricies tristique nulla aliquet enim. Id venenatis a condimentum vitae sapien pellentesque habitant. Tempus urna et pharetra pharetra. Quis enim lobortis scelerisque fermentum dui.</p>

                <p>Nisi lacus sed viverra tellus in. At consectetur lorem donec massa sapien. Viverra justo nec ultrices dui sapien eget. Ac turpis egestas sed tempus urna et pharetra pharetra. Tellus mauris a diam maecenas sed enim ut sem viverra. Neque laoreet suspendisse interdum consectetur libero id faucibus. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Enim ut sem viverra aliquet eget sit amet tellus. Ornare quam viverra orci sagittis.</p>

                <p>Urna condimentum mattis pellentesque id nibh tortor id. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Aliquam faucibus purus in massa tempor nec feugiat. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Pellentesque elit eget gravida cum sociis natoque. Turpis egestas sed tempus urna et pharetra. Sed id semper risus in hendrerit gravida rutrum quisque non. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Purus in mollis nunc sed id semper risus.</p>
            </Grid.Column>
            <Grid.Column width={3}>
            <h4>Awards/Highlights</h4>
            <p>2000 Chef of the Year</p>
            <p>2000 Chef of the Year</p>
            <p>2000 Chef of the Year</p>
            <p>2000 Chef of the Year</p>
            </Grid.Column>
            </Grid>
      </div>
    )
}

export default BioPage