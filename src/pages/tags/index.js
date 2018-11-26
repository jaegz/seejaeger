import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import {
  Container,
  Divider,
  Grid,
  Header,
} from 'semantic-ui-react'

const navbarOffset = {
  paddingTop: '7em'
}

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <Grid centered>
      <Helmet title={`Tags | ${title}`} />
      <Grid.Row style={navbarOffset}>
        <Grid.Column>
          <Container text>
            <Header as='h1' size='huge'>
              Tags
            </Header>

            <Divider/>

            <ul className="taglist">
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
