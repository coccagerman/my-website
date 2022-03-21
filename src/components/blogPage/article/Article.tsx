import ReactMarkdown from 'react-markdown'

import Accordion from 'react-bootstrap/Accordion'

interface Props {
    blogArticle : {
        __typename: string,
        title: string,
        dateAdded: string,
        coverImage: string,
        contentMarkdown: string
    }
    index: number
}

const Article: React.FC<Props> = ({ blogArticle, index }) => {

    const eventKey = index.toString()

    return (
        <Accordion.Item eventKey={eventKey} className='article'>
            <Accordion.Header className='article-header'>
                <h1>{blogArticle.title}</h1>
                <p>{blogArticle.dateAdded.slice(0, 10)}</p>
            </Accordion.Header>
            <Accordion.Body>
                <img src={blogArticle.coverImage} alt="Cover" />
                <ReactMarkdown children={blogArticle.contentMarkdown} />    
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Article