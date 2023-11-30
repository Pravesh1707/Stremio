import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SettingsIcon from '@mui/icons-material/Settings';
import ExtensionIcon from '@mui/icons-material/Extension';
import "../Css/LeftSide.css";

const LeftSide = () => {
  return (
    <div className='icons'>
      <div>
        <HomeIcon/>
        <p className='iconname'>Home</p>
      </div>
      <div>
        <MyLocationIcon/>
        <p className='iconname'>Discover</p>
      </div>
      <div>
        <VideoLibraryIcon/>
        <p className='iconname'>Library</p>
      </div>
      <div>
        <ExtensionIcon/>
        <p className='iconname'>Addons</p>
      </div>
      <div>
        <SettingsIcon/>
        <p className='iconname'>Setting</p>
      </div>
      {/* <div></div> */}
    </div>
  )
}

export default LeftSide
