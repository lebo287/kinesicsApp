import { Dimmer , Loader , Image ,  Segment } from 'semantic-ui-react'

const Loaders = () => (
  <Segment>
       <Dimmer active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default Loaders


