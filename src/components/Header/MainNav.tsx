import * as React from 'react'
import Transition from 'react-transition-group/Transition'
import Icon from '../Shared/Icon'
import LinkProps from '../Interfaces/Link'
import LabeledLink from '../Navigation/LabeledLink'

interface MainNavProps {
    links: LinkProps[]
}

interface MainNavState {
    windowWidth: number;
    mobileNavVisible: boolean;
}

export default class MainNav extends React.Component <MainNavProps, MainNavState> {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false
        }
        this.handleResize = this.handleResize.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleResize() {
        this.setState({windowWidth: window.innerWidth});
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    navigationLinks() {
        return (
            <ul>
                {this.props.links.map((item, index) => 
                    <li key={index}>
                        <a href={item.url}>{item.text}
                        </a>
                    </li>
                )}
            </ul>
        )
    }

    renderMobileNav() {
        if(this.state.mobileNavVisible) {
            return this.navigationLinks();
        }
    }

    handleNavClick() {
        this.setState({mobileNavVisible: !this.state.mobileNavVisible});
    }

    renderNavigation() {
        if(this.state.windowWidth <= 1080) {
          return [
            <div className="mobile_nav">
              <p onClick={this.handleNavClick}><i className="material-icons">Hamburger</i></p>
              {this.renderMobileNav()}
            </div>
          ];
        } else {
          return [
            <div key={7} className="nav_menu">
              {this.navigationLinks()}
            </div>
          ]; 
        }
    }

    render() {
        return (
            <div className="nav_container">
                <div className="site_title"><a href="#">WEBSITE TITLE</a>
                </div>
                {this.renderNavigation()}
            </div>
        )
    }
}
