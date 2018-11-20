import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { v4 } from 'uuid'
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
  title,
  description,
  projectUrl,
  blogpostUrl,
  image,
  imageAlt,
  summary,
  techlist,
}) => (
    <Grid centered>
      <Helmet title={`${title} | Front End Development Portfolio`}/>
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
                    <Button color='green' href={blogpostUrl}><Icon name='file alternate'/>Read write-up </Button>
                  }
                </Header>

                <Image src={image} alt={imageAlt} fluid/>

                <Header as='h2'>
                  Project Summary
                </Header>
                <Divider/>
                <p>{summary}</p>

                <Header as='h2'>
                  Technology Used
                </Header>
                <Divider />

                <ul> 
                    {techlist.map(item => ( 
                      <li key={v4()}>
                        {item.name}
                      </li>
                    ))}
                </ul>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
)

PortfolioPostTemplate.propTypes = {
  title: PropTypes.string,
  projectUrl: PropTypes.string,
  blogpostUrl: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  description: PropTypes.string,
  summary: PropTypes.string,
  // techlist: PropTypes.array,
}

const PortfolioPost = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PortfolioPostTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        projectUrl={frontmatter.projectUrl}
        blogpostUrl={frontmatter.blogpostUrl}
        image={frontmatter.image}
        imageAlt={frontmatter.imageAlt}
        summary={frontmatter.summary}
        techlist={frontmatter.techlist}
      />
    </Layout>
  )
}

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PortfolioPost

export const portfolioPostQuery = graphql`
  query PortfolioPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        projectUrl
        blogpostUrl
        image
        imageAlt
        description
        summary
        techlist {
          name
        }
      }
    }
  }
`
