import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { Button, Container, Divider, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react'
import { v4 } from 'uuid'

export default ({data}) => {
    return (
        <Layout>
            <Grid centered>
                <Grid.Column mobile={16} tablet={10} computer={8} widescreen={6}>
                    <Container>
                        <Header as='h1' size='huge'>Portfolio</Header>
                        <Divider/>

                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <Segment raised padded='very' color='olive' key={v4()}>
                                <Header as='h2'>
                                    {node.frontmatter.title}
                                    <Header.Subheader>{node.frontmatter.description}</Header.Subheader>
                                </Header>
                                <Image src={node.frontmatter.image}/>

                                <Button color='olive' href={node.fields.slug} style={{marginTop: '1em'}}><Icon name='folder open'/> View Project</Button>
                            </Segment>
                        ))}
                    </Container>
                </Grid.Column>
            </Grid>
        </Layout>
    )
}

export const PortfolioPageQuery = graphql`
    query {
        allMarkdownRemark (filter: {frontmatter: {templateKey: {eq: "portfolio-post"} } }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        image
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`