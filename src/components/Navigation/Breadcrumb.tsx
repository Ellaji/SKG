import * as React from 'react'
import LinkProps from '../Interfaces/Link'

export interface BreadcrumbProps {
    links: LinkProps[]
}

const Breadcrumb = ({links} : BreadcrumbProps) => {
    let mobileItem = links.length > 1 ? links[links.length - 2] : links[0]

    if (!links.length) return null;

    return (
        <div>
            <div className="m-breadcrumb m-breadcrumb--desktop">
                <ul itemScope itemType="http://schema.org/BreadcrumbList" className="a-list a-list--hor">
                    {links.map((link, index) => {
                        let Element = index+1 === links.length ? 'span' : 'a';
                        return (
                            <li key={index} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                <Element href={Element === 'a'? link.url:null} target={Element === 'a'? link.target:null} itemProp="item">{link.text}</Element>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="m-breadcrumb m-breadcrumb--mobile">
                <ul className="a-list a-list--hor">
                    <li>
                        <a href={mobileItem.url} target={mobileItem.target}>
                            {mobileItem.text}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb