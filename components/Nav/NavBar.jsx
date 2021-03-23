import styled from 'styled-components';
import Burger from './Burger';
import Link from 'next/link';

const NavigationBar = styled.nav`
  width: 100%;
  height: 80px;
  background-color: rgb(25, 60, 105);
  display: flex;
  justify-content: space-around;
a{
  padding: 20px 0;
}
a spam{
    color: red;
    font-weight:bold;
    font-size:30px;
}
`

const Navbar = () => {
  return (
    <NavigationBar>
      <Link href="/">
          <a>
            <spam>LOGO</spam>
          </a>
        </Link>
      <Burger />
    </NavigationBar>
  )
}

export default Navbar