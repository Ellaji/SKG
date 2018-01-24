import * as React from 'react'
import { NavBarLinkProps } from './NavBarLink'
import NavBarLink from './NavBarLink'
import NavBar from './NavBar'
import NavBarSubMenu from './NavBarSubMenu'

export interface NavBarItemProps {
    text: string;
    url?: string;
    submenu?: NavBarLinkProps[];
}

export default class NavBarItem extends React.Component<NavBarItemProps> {
    constructor(props) {
        super(props);
    }

    generateLink() {
        return (
            <NavBarLink url={this.props.url} text={this.props.text} />
        );
    }
    
    generateSubmenu() {
        return (
            <NavBarSubMenu items={this.props.submenu} />
        );
    }

    generateContent() {
        var content = [this.generateLink()];
        if(this.props.submenu){
        content.push(this.generateSubmenu());
        }
        return content;
    }

    render() {
        var content = this.generateContent();
        return (
        <li>
            {content}
        </li>
        );
    }
}