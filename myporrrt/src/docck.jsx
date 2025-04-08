import React from 'react';
import Dock from './Dock';
import {VscHome, VscGithub, VscRepo, VscStarFull, VscVersions,} from "react-icons/vsc";

  const items = [
    { icon: <VscHome size={18}  color="white"/>, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscGithub size={18} color="white"/>, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscRepo size={18} color="white"/>, label: 'Projects', onClick: () => alert('Projects!') },
    { icon: <VscStarFull size={18} color="white"/>, label: 'Experience', onClick: () => alert('Experience!') },
    { icon: <VscVersions size={18} color="white"/>, label: 'More', onClick: () => alert('More!') },
  ];

  const DockComp =()=>{
    return(
       <Dock
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />
    );
  };


  export default DockComp;