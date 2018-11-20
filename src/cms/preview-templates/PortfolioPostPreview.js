import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioPostTemplate } from '../../templates/portfolio-post'

const PortfolioPostPreview = ({ entry, widgetFor }) => (
    <PortfolioPostTemplate
        // content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        // tags={entry.getIn(['data', 'tags'])}
        title={entry.getIn(['data', 'title'])}
        projectUrl={entry.getIn(['data', 'projectUrl'])}
        blogpostUrl={entry.getIn(['data', 'blogpostUrl'])}
        image={entry.getIn(['data', 'image'])}
        imageAlt={entry.getIn(['data', 'imageAlt'])}
        summary={entry.getIn(['data', 'summary'])}
        techlist={entry.getIn(['data', 'techlist'])}
    />
)

PortfolioPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default PortfolioPostPreview
