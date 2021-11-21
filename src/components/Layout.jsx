import { Container } from 'semantic-ui-react'

const Layout = (props) => {
    return (
        <div className="layout-container">
            <Container>
            {props.children}
            </Container>
        </div>
    )
}

export default Layout
