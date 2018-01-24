import * as React from 'react'

export interface NavBarLinkProps {
  text: string;
  url: string;
}

const NavBarLink: React.SFC<NavBarLinkProps> = ({text, url}) => {

  return (
    <a href={url}>{text}</a>
  )

}

export default NavBarLink