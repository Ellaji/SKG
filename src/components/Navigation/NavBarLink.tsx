import * as React from 'react'

export interface NavBarLinkProps {
  text: string;
  url: string;
  target?: string;
  active?: boolean;
}

const NavBarLink: React.SFC<NavBarLinkProps> = ({text, url}, index) => {

  return (
    <a key={index} href={url}>{text}</a>
  )

}

export default NavBarLink