import React from 'react'
//import Helmet from 'react-helmet'
//import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { Button, Container, Grid, Header, Icon, Segment } from 'semantic-ui-react'
import { v4 } from 'uuid'

const navbarOffset = {
    paddingTop: '7em'
}

export default ({data}) => {
    return (
    <Layout>
        <Grid centered>
            <Grid.Row style={navbarOffset}>
                <Grid.Column>
                    <Container text>
                        <Header as='h1' size='huge'>Blog</Header>

                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <Segment raised padded='very' color='green' key={v4()}>
                                <Header as='h2'>
                                    {node.frontmatter.title}
                                    {/* <Header.Subheader>{node.frontmatter.description}</Header.Subheader> */}
                                </Header>
                                {/* <Image src={node.frontmatter.image}/> */}

                                <Button color='green' href={node.fields.slug} style={{ marginTop: '1em' }}><Icon name='file alternate' /> Read More</Button>
                            </Segment>
                        ))}
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Layout>
    )
}

export const BlogPageQuery = graphql`
    query {
        allMarkdownRemark (filter: {frontmatter: {templateKey: {eq: "blog-post"} } }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`