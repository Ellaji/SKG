import * as React from 'react'
import AnimateHeight from 'react-animate-height'
import Icon from '../Shared/Icon'

export interface CollapsibleNavProps {
    title: string;
    links: [ {
        url: string,
        text?: string,
        target?: string,
        active?: boolean
    } ];
}

export interface CollapsibleNavState {
    height: any;
}

class CollapsibleNav extends React.Component<CollapsibleNavProps, CollapsibleNavState> {
    constructor(props: CollapsibleNavProps) {
        super(props)

        this.state = {
            height: 0
        }
    }

    toggleHeight() {
        if (this.state.height === 0)
            this.setState({ height: 'auto' })
        else
            this.setState({ height: 0 })
    }

    render() {
        let isCollapsed = this.state.height === 0;
        const asEditable = (value) => { return { __html: value }; }

        return (
            <div className={`o-collapsible-list ${isCollapsed ? 'collapsed' : ''}`}>
                <h6 className="o-collapsible-list__title" onClick={this.toggleHeight.bind(this)} >
                    <span dangerouslySetInnerHTML={asEditable(this.props.title)}></span>
                <Icon name="angle-down" />
                </h6>
                <AnimateHeight
                    height={ this.state.height }
                >
                    <ul className="a-list">
                        {this.props.links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a href={link.url} dangerouslySetInnerHTML={asEditable(link.text)}></a>
                                </li>
                            )
                        })}
                    </ul>
                </AnimateHeight>
            </div>
        )
    }
}

export default CollapsibleNav