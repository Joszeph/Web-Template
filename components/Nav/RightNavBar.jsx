import styled from 'styled-components';
import Link from 'next/link'
import { useRouter } from "next/router";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  li {
    padding:15px;
  }
  li a{
    text-transform: uppercase;
    color: rgb(175, 175, 175);
    font-weight: bold;
  }
  li a:hover{
    color: rgb(165, 224, 248);
  }

  .active a{
    color: rgb(165, 224, 248);
  }

  @media (max-width: 768px) {
    flex-flow: column;
    background-color:rgb(25, 60, 105);
    position: fixed;
    z-index:1;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 500px;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNavBar = (props) => {

  const router = useRouter();

  const{open, setOpen} = props

  return (
    <Ul open={open}>
      <li className={router.pathname == "/" ? "active" : ""}><Link href="/" ><a onClick={() => setOpen(!open)}>Home</a></Link></li>
      <li className={router.pathname == "/items" ? "active" : ""}><Link href="/items"><a onClick={() => setOpen(!open)}>Item list</a></Link></li>
      <li className={router.pathname == "/about" ? "active" : ""}><Link href="/about"><a onClick={() => setOpen(!open)}>About</a></Link></li>
      <li className={router.pathname == "/contacts" ? "active" : ""}><Link href="/contacts"><a onClick={() => setOpen(!open)}>Contact us</a></Link></li>
    </Ul>
  )
}

export default RightNavBar