import * as React from 'react'
import NavBarItem from './NavBarItem'
import { NavBarItemProps } from './NavBarItem'

export interface NavBarProps {
    items: NavBarItemProps[];
}

export default class NavBar extends React.Component<NavBarProps> {
    constructor(props) {
        super(props);
    }

    generateItem(item, index) {
        return (
            <NavBarItem key={index} text={item.text} url={item.url} submenu={item.submenu} />
        )
    }

    render() {
        var items = this.props.items.map(this.generateItem);
        return (
            <ul className="header__navigation">
                {items}
            </ul>
        );
    }
}