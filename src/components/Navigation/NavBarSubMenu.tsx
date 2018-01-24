import * as React from 'react'
import NavBarItem from './NavBarItem'
import { NavBarItemProps } from './NavBarItem'
import { NavBarProps } from './NavBar'

export default class NavBarSubMenu extends React.Component<NavBarProps> {
    constructor(props) {
        super(props);
    }

    generateItem(item) {
        return (
            <NavBarItem text={item.text} url={item.url} submenu={item.submenu} />
        )
    }

    render() {
        var items = this.props.items.map(this.generateItem);
        return (
            <ul className="header__navigation__submenu">
                {items}
            </ul>
        );
    }
}