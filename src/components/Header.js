import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import LoginForm from '../pages/user/LoginForm';
import JoinForm from '../pages/user/JoinForm';
import { ListItemText, Menu, MenuItem } from '@material-ui/core';
import Account from '../pages/user/Account';
import PtHome from '../pages/PtHome';
import MenuBtn from './MenuBtn';



const linkStyle = {
    fontSize:"1px",
}

const listStyle ={
    left:"10%",
}

const navbarSearch={
   
}

const searchStyle ={
    
}

const searchBlank={

}

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

    
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);


const Header = (props) => {

  

    const classes = useStyles();
   
    //Modal
    const [modalStyle] = React.useState(getModalStyle);
    const [loginopen, setloginOpen] = React.useState(false);
    const [joinopen, setjoinOpen] = React.useState(false);
    const [accountopen, setaccountOpen] = React.useState(false);
  
    
    const loginOpen = () => {
        setloginOpen(true);
    };
    const joinOpen = () => {
        setjoinOpen(true);
    };
    const accountOpen = () => {
        setaccountOpen(true);
    };
  
    const loginClose = () => {
        setloginOpen(false);
    };
    const joinClose = () => {
        setjoinOpen(false);
    };
    const accountClose = () => {
        setaccountOpen(false);
    };
  
    const loginbody = (
      <div style={modalStyle} className={classes.paper}>
        
        <LoginForm />
      </div>
    );

    const joinbody = (
        <div style={modalStyle} className={classes.paper}>
          
          <JoinForm />
        </div>
      );
      const accountbody = (
        <div style={modalStyle} className={classes.paper}>
          
          <Account />
        </div>
      );


      
      //Mypage Modal
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //Logout

  // const {login} = this.props;

  const userlogout = () =>{
      // this.setState({login:false, user_ip:""})
      localStorage.removeItem("Authorization");
      
  }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <ul className="navbar-nav">
                        <li><MenuBtn/></li>
                        <li class="nav-item active">
                        <Link to="/" className="navbar-brand" >PT</Link>
                        </li>
                        <li class="nav-item active">
                        <span className="navbar-brand">&</span>
                        </li>
                        <li class="nav-item">
                        <Link to="/profilehome" className="navbar-brand" >Profile</Link>
                        </li>
                    </ul>
                    
                   
                    <div className="collapse navbar-collapse" id="navbarResponsive" style={listStyle}>
                        <div style={navbarSearch}>
                            
                            <div style={searchBlank}>  
                                <input type="search" placeholder="Search"></input>
                            </div>
                        </div>
                        <ul className="navbar-nav ml-auto" style={linkStyle}>
                            <li className="nav-item">
                                <button type="button" onClick={loginOpen}>로그인</button>
                                
                            </li>
                            <Modal
                                open={loginopen}
                                onClose={loginClose}
          
                            >
                                {loginbody}
                            </Modal>
                            <li className="nav-item">
                            <button type="button" onClick={joinOpen}>회원가입</button>
                            </li>   
                            
                            <Modal
                                open={joinopen}
                                onClose={joinClose}
          
                            >
                                {joinbody}
                            </Modal>

                            
                            <li className="nav-item">                                
                                <AccountCircleIcon
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant="contained"
                                onClick={handleClick}
                                />                                                            
                            </li> 

                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
        <StyledMenuItem>
            <Link to="/orderPage">
          <ListItemText primary="Order" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
        <Link to="/cart">
          <ListItemText primary="Cart" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
        <button onClick={accountOpen}>
          <ListItemText primary="Account" />
          </button>
        </StyledMenuItem>
        <Modal
            open={accountopen}
            onClose={accountClose}       
            >
            {accountbody}
        </Modal>
        <StyledMenuItem> 
          <ListItemText onClick={userlogout} primary="Logout"/>
        </StyledMenuItem>
      </StyledMenu>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
    );
};

export default Header;