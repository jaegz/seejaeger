import React from 'react'
//import Helmet from 'react-helmet'
//import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
//import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import { 
    Button, 
    Container, 
    Grid, 
    Header, 
    Icon, 
    Image,
    Segment
} from 'semantic-ui-react'

const navbarOffset = {
    //paddingTop: '4.3em',
    paddingTop: '7em',
}

export default class PortfolioPage extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
            <Layout>
                <Grid centered>
                    <Grid.Row style={navbarOffset}>
                        <Grid.Column>
                            <Container text>
                                <Header as='h1' size='huge'>Front End Development Portfolio</Header>

                                {posts.map(({ node: post }) => (
                                    <Segment raised padded='very' color='green' key={post.id}>
                                        <Header as='h2'>
                                            {post.frontmatter.title}
                                            <Header.Subheader>{post.frontmatter.description}</Header.Subheader>
                                        </Header>
                                        <Image src={post.frontmatter.image}/>
                                        {/* <PreviewCompatibleImage imageInfo={post.frontmatter.image} alt={post.frontmatter.imageAlt} /> */}
                                        
                                        <Button color='green' href={post.fields.slug} style={{marginTop: '1em'}}><Icon name='folder open'/> View Project</Button>
                                    </Segment>
                                ))}
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        )
    }
}

// Currently throwing a graphQL error
// PropTypes for
// gatsby-transformer-remark 
// gatsby-remark-relative-images 
// gatsby-remark-images gatsby-remark-
// PortfolioPage.propTypes = {
//     data: PropTypes.shape({
//         allMarkdownRemark: PropTypes.shape({
//             edges: PropTypes.arrayOf(
//                 PropTypes.shape({
//                     node: PropTypes.shape({
//                         id: PropTypes.string,
//                         frontmatter: PropTypes.shape({
//                             title: PropTypes.string,
//                             description: PropTypes.string,
//                             image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//                             imageAlt: PropTypes.string,
//                         }),
//                         fields: PropTypes.shape({
//                             slug: PropTypes.string,
//                         }),
//                     }),
//                 })
//             ),
//         }),
//     }),
// }
// and the image query
// image {
//     childImageSharp {
//         fluid(maxWidth: 2048, quality: 100) {
//          ...GatsbyImageSharpFluid
//         }
//     }
// }


export const PortfolioPageQuery = graphql`
    query PortfolioQuery {
        allMarkdownRemark(
            filter: {frontmatter: {templateKey: {eq: "portfolio-post"} } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        image
                        imageAlt
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`