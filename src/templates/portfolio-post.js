import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { 
  Button, 
  Container, 
  Divider, 
  Grid, 
  Header, 
  Icon, 
  Image
} from 'semantic-ui-react'

const navbarOffset = {
  paddingTop: '7em'
}

export const PortfolioPostTemplate = ({
  content,
  contentComponent,
  title,
  description,
  projectUrl,
  blogpostUrl,
  image,
  imageAlt,
  tags,
  helmet,
}) => {
    const PostContent = contentComponent || Content

    return (
      <Grid centered>
        {helmet || ''}
        {/* <Helmet title={`${title} | Front End Development Portfolio`} /> */}
        <Grid.Row style={navbarOffset}>
          <Grid.Column>
            <Container text>
              <Header as='h1' size='huge'>
                {title}
                <Header.Subheader>{description}</Header.Subheader>

                <Divider />

                {projectUrl &&
                  <Button color='olive' href={projectUrl}><Icon name='external' />Visit the website </Button>
                }

                {blogpostUrl &&
                  <Button color='green' href={blogpostUrl}><Icon name='file alternate' />Read write-up </Button>
                }
              </Header>

              <Image src={image} alt={imageAlt} fluid style={{ marginBottom: '2em'}}/>

              <PostContent content={content} />

              <Header as='h2'>
                Technology Used
              </Header>

              <Divider />

              {tags && tags.length ? (
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

PortfolioPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  projectUrl: PropTypes.string,
  blogpostUrl: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  helmet: PropTypes.object,
}

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PortfolioPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        helmet={
          <Helmet 
            titleTemplate="%s | Portfolio"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`}/>
          </Helmet>
        }
        projectUrl={post.frontmatter.projectUrl}
        blogpostUrl={post.frontmatter.blogpostUrl}
        image={post.frontmatter.image}
        imageAlt={post.frontmatter.imageAlt}
        tags={post.frontmatter.tags}
      />
    </Layout>
  )
}

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PortfolioPost

export const portfolioPostQuery = graphql`
  query PortfolioPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        projectUrl
        blogpostUrl
        image
        imageAlt
        description
        tags
      }
    }
  }
`
