import * as React from 'react'
import Icon from '../Shared/Icon'

export interface LabeledLinkProps {
    link: {
        title: string;
        text: string;
        url: string;
        target?: string;
    }
}

const LabeledLink: React.SFC<LabeledLinkProps> = ({link}) => {
    return (
        <a href={link.url} target={link.target} className="a-labeled-link">
            <span className="a-labeled-link__title">{link.title}</span> 
            <span className="a-labeled-link__text">{link.text}</span>
            <Icon name="arrow-right" />
        </a>
    )
}

export default LabeledLink