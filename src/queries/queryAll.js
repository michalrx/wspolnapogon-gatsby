module.exports = `
    {
        allWordpressPage {
            edges {
                node {
                    id
                    path
                    status
                    template
                }
            }
        }
        
        allWordpressPost {
            edges {
                node {
                    id  
                    path
                    status
                    template
                    format
                    title
                    date
                    featured_media{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: 1920){
                                    src
                                    srcSet
                                    aspectRatio
                                    sizes
                                    base64
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`