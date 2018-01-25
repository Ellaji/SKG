import * as React from 'react'
import LinkProps from '../Interfaces/Link'
import { NavBarLinkProps } from './NavBarLink'
import NavBarLink from './NavBarLink'
import NavBar from './NavBar'
import NavBarSubMenu from './NavBarSubMenu'

export interface NavBarItemProps extends LinkProps {
    submenu?: NavBarItemProps[];
}

export default class NavBarItem extends React.Component<NavBarItemProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <NavBarLink url={this.props.url} text={this.props.text} />
                {this.props.submenu ? <NavBarSubMenu items={this.props.submenu}/> : null }
            </li>
        );
    }
}