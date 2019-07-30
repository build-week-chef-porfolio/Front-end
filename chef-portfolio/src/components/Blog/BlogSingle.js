import React from 'react'
import { Grid, Image, Header, Segment, Comment, Form, Button } from 'semantic-ui-react'
import BlogCard from '../Blog/BlogCard';

const BlogSingle = () => {
    return (
        <div className="blogsingleWrapper">
         
        <Grid>
        <Grid.Column width={3}>
        <Header as='h4'>
            <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> By Liver Soup Eater
            <br/>
            <p>See my other posts..</p>
            <BlogCard/>
        </Header>
        </Grid.Column>
        <Grid.Column width={13}>
        <Header as='h1'>Why You Should Eat My Liver Soup</Header>
            <Image src='https://s3-alpha-sig.figma.com/img/63a0/c427/a8f9f5748d4674375419167bbfa4f6a3?Expires=1565568000&Signature=RvnNSgHeI82x3oBSycFoydUO~-J20c7uiE9OhfkPOXIt3aJ9SlV5EEGMQ9fRq8zE3RlTmVBkXxI80eQ0oWHbymL3Yjj4cJ-TvoV0KNWaNFbWjkbm4fB9CLXvw0BC87scEaTx58yCfrffg~g0D7kMDOjEYFJVYg~cRidIBkr~F~UolOiep4GaeTvbHiq2UNMrVRyA7N2ei9xW0utMXUFPbTpL0qZpDvCc-VyextCDivoDFad6xD~suqRHfw~afqjc4TlmJFMjzYXM2MfXOsE9B84TGm8fTFuJcS8~5yq5zs7i-khERlgpLJDmXFlsPo-aGqzp-6aIQoKQpD00r-T86w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' fluid />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Tellus molestie nunc non blandit massa enim. Elit eget gravida cum sociis natoque. Auctor neque vitae tempus quam pellentesque. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Ornare suspendisse sed nisi lacus sed viverra. Enim ut sem viverra aliquet eget sit amet. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Et tortor consequat id porta nibh venenatis cras sed. Risus nullam eget felis eget nunc. Quam id leo in vitae turpis massa sed. Ac orci phasellus egestas tellus rutrum tellus pellentesque.</p>

            <p>Sed libero enim sed faucibus turpis in eu mi bibendum. Donec enim diam vulputate ut pharetra sit amet. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Habitasse platea dictumst quisque sagittis purus sit. Sed libero enim sed faucibus turpis. Iaculis urna id volutpat lacus. Nisl vel pretium lectus quam id leo. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Mauris in aliquam sem fringilla ut morbi. Donec massa sapien faucibus et molestie ac feugiat sed lectus.</p>

            <p>Congue nisi vitae suscipit tellus mauris. Morbi tincidunt ornare massa eget egestas. Vestibulum sed arcu non odio euismod lacinia at. Ornare massa eget egestas purus viverra accumsan in. Sed vulputate mi sit amet mauris commodo quis imperdiet. Sit amet facilisis magna etiam tempor. Vitae congue mauris rhoncus aenean vel elit. Laoreet id donec ultrices tincidunt arcu non sodales. Odio ut sem nulla pharetra diam. Amet est placerat in egestas erat imperdiet sed. Blandit libero volutpat sed cras ornare.</p>

            <p>Id leo in vitae turpis massa sed elementum. Non nisi est sit amet facilisis magna. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Tristique senectus et netus et malesuada fames ac. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Risus in hendrerit gravida rutrum quisque. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Netus et malesuada fames ac turpis egestas sed. Tellus integer feugiat scelerisque varius morbi enim nunc. Posuere lorem ipsum dolor sit. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Ut sem viverra aliquet eget sit amet tellus cras. Pharetra et ultrices neque ornare aenean euismod.</p>

            <p>Turpis massa sed elementum tempus egestas sed. Feugiat in fermentum posuere urna nec. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Vitae nunc sed velit dignissim sodales ut eu sem integer. Lectus quam id leo in. Dictum non consectetur a erat nam at. Eu facilisis sed odio morbi quis commodo odio aenean sed. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Nisi lacus sed viverra tellus. Netus et malesuada fames ac. At augue eget arcu dictum varius duis at consectetur. Lectus mauris ultrices eros in cursus. Ut ornare lectus sit amet est placerat. Velit dignissim sodales ut eu sem integer vitae justo. Vel orci porta non pulvinar neque laoreet. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum.</p>
        </Grid.Column>
        <Grid.Column width={13}>
            <Comment.Group minimal>
                <Header as='h3' dividing>
                Comments
                </Header>
            <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>Matt</Comment.Author>
                <Comment.Metadata>
                <span>Today at 5:42PM</span>
                </Comment.Metadata>
                <Comment.Text>How artistic!</Comment.Text>
                <Comment.Actions>
                <a>Reply</a>
                </Comment.Actions>
            </Comment.Content>
            </Comment>
            <Form reply>
            <Form.TextArea />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
        </Comment.Group>
        </Grid.Column>
      </Grid>

      </div>
    )
}

export default BlogSingle
