import { useEffect, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '../../contexts/ThemeContext';

import MenuIcon from '@mui/icons-material/Menu';

import "../../assets/layouts/header.css";
import CloseIcon from '@mui/icons-material/Close';

function isMobileWidth() {
    return window.innerWidth < 1100;
}

function Header() {
  const { currentTheme, setCurrentTheme } = useTheme();

  const [backgroundcolor, setBackgroundColor] = useState("#f5f5f5");
  const [color, setColor] = useState("black");

  const [visible, setVisible] = useState("none");

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY > window.innerHeight / 1.4){
        setVisible("flex");
      } else {
        setVisible("none");
      }
    })
  })

  useEffect(()=> {
    if (currentTheme == "Dark") {
      setBackgroundColor("#323232");
      setColor("white")
    } else {
      setBackgroundColor("#f5f5f5");
      setColor("black");
    }
  }, [currentTheme]);

  if(!isMobileWidth()) {

  return (
    <div className= "header">
      <ul className='header-items' style={{ backgroundColor: backgroundcolor, color: color, display: visible }}>
        <li className='header-item'>
          <button style={{ backgroundColor: backgroundcolor, color: color }}>
            <a href='#home' style={{ backgroundColor: backgroundcolor, color: color }}>Home</a>
          </button>
        </li>
        <li className='header-item'>
          <button style={{ backgroundColor: backgroundcolor, color: color }}>
            <a href='#about' style={{ backgroundColor: backgroundcolor, color: color }}>About</a>
          </button>
        </li>
        <li className='header-item'>
          <button style={{ backgroundColor: backgroundcolor, color: color }}>
            <a href='#work' style={{ backgroundColor: backgroundcolor, color: color }}>Work</a>
          </button>
        </li>
        <li className='header-item'>
          <button style={{ backgroundColor: backgroundcolor, color: color }}>
            <a href='#contact' style={{ backgroundColor: backgroundcolor, color: color }}>Contact</a>
          </button>
        </li>
      </ul>
      <div className='theme'>
        <button 
          className='theme-selector'
          style={{ backgroundColor: backgroundcolor }}
          onClick={(e) => {
            if(currentTheme === "Light"){
              setCurrentTheme("Dark");
            } else {
              setCurrentTheme("Light")
            }  
          }}
        >
          {currentTheme === "Dark" ? 
        <LightModeIcon style={{ color: 'white'}}/>
        :
        <DarkModeIcon />  
        }
        </button>
      </div>
    </div>
  );
  } 
  return (
    <div className='mobile-header'>
      <div className='Navbar'>
        {showMenu == true ? 
      <>
      <button 
      onClick={() => ( setShowMenu(!showMenu))}
      style={{ backgroundColor: backgroundcolor }}
      >
      <CloseIcon sx={{fontSize: 30}} />
      </button>
      </>
      :
      <button
        onClick={() => setShowMenu(!showMenu)}
        style={{ backgroundColor: backgroundcolor }}
        >
          <MenuIcon sx={{fontSize: 30}} />
          
        </button>
      }
        

      </div>
      {showMenu && (
        <div className='nav'>
          <a href='#home'
          onClick={() => setShowMenu(false)}
          >Home</a>
          <a href='#about'
          onClick={() => setShowMenu(false)}
          >About</a>
          <a href='#work'
          onClick={() => setShowMenu(false)}
          >Work</a>
          <a href='#contact'
          onClick={() => setShowMenu(false)}
          >Contact</a>
        </div>
      )}
      <div className='theme'>
        <button 
          className='theme-selector'
          style={{ backgroundColor: backgroundcolor }}
          onClick={(e) => {
            if(currentTheme === "Light"){
              setCurrentTheme("Dark");
            } else {
              setCurrentTheme("Light")
            }  
          }}
        >
          {currentTheme === "Dark" ? 
        <LightModeIcon style={{ color: 'white'}}/>
        :
        <DarkModeIcon />  
        }
        </button>
      </div>
    </div>
  )
}

export default Header