import React, {useState} from 'react'
import styled from "styled-components"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import { Translate } from '@mui/icons-material';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg"/>
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Panel</a>
        <a href="#">Solar Roof</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>

        <CustomMenu  onClick={()=> setBurgerStatus(true)} />
      
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrap>
           <CustomClose onClick={()=> setBurgerStatus(false)} />
        </CloseWrap>
        <li><a href="#">Existing Inventory</a> </li>
         <li><a href="#">Used Inventory</a>  </li> 
          <li><a href="#">Trade-in</a>       </li>
          <li><a href="#">Test Drive</a>     </li>
          <li><a href="#">Insurance</a>     </li>
          <li><a href="#">CyberTruck</a>     </li>
          <li><a href="#">Roadster</a>      </li>
        <li> <a href="#">Charging</a>      </li>
        <li><a href="#">Commercial Energy</a>     </li>
          <li><a href="#">Powerwall</a>     </li>
          <li><a href="#">Find us</a>      </li>
         <li> <a href="#">Support</a>      </li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
      min-height:60px;
      position:fixed;
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:0 12px;
      width:100% ;
     z-index:1;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    
    a{
      margin: 0 10px;
      padding: 5px 10px;
      font-weight: 600;
      text-transform: uppercase;
      flex-wrap:nowrap;
    }
    a:hover{
      background: rgba(255, 255, 255, 0.19);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    /* border: 1px solid rgba(255, 255, 255, 0.14); */
    }
    @media(max-width:768px){
      display:none;
    }
`
const RightMenu = styled.div`
    display:flex;
    align-items:center;
   a{
     margin-right:12px;
     font-weight: 600;
    text-transform: uppercase;
  }
  a:hover{
    background: rgba(255, 255, 255, 0.19);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  /* border: 1px solid rgba(255, 255, 255, 0.14); */
  }
  // @media(max-width:768px){
  //   display:none;
  // }
`
const CustomMenu = styled(MenuOpenIcon)`
         cursor:pointer;    
`
const BurgerNav = styled.div`
       //showing and hiding//
       
       transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
       
       transition: transform 0.4s ;
        position:fixed;
        top:0;
        bottom:0;
        right:0;
        background:white;
        width:300px;
        z-index:10;
        list-style:none;
        padding:20px;
        display:flex;
        flex-direction:column;
        // align-items:flex-start;
        text-align:left;

        li{
          padding 15px 0;
          border-bottom: 1px solid rgba(0,0,0,0.2);
          a{
            font-weight:600;
          }
        }
`
const CloseWrap = styled.div`
        display :flex;
        justify-content:flex-end;
`
const CustomClose = styled(CloseIcon)`
      cursor:pointer;
`