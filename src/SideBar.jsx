import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex 
                    flex-col bg-discordGray text-discordPurple shadow">

      <SideBarIcon icon={<FaFire size="28"/>}></SideBarIcon>
      <Divider />
      <SideBarIcon icon={<BsPlus size="32"/>}></SideBarIcon>
      <SideBarIcon icon={<BsFillLightningFill size="20"/>}></SideBarIcon>
      <Divider />
      <SideBarIcon icon={<FaPoo size="20"/>}></SideBarIcon>
    
    </div>
  )
}


//sidebar-icon is a custom class I make from tailwind 
const SideBarIcon = ({ icon, text = 'Brian Burrous 🤮' }) => (
  <div className="sidebar-icon group"> 
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
)


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar