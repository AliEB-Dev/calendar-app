import { Navigate } from "react-router-dom"
import GeneralSection from "../components/Setting/GeneralSection"
import OtherSection from "../components/Setting/OtherSection"
import RemindersSection from "../components/Setting/RemindersSection"
import { useAppSelector } from "../store/hooks"
import  HeaderPage from "../components/Reminder/HeaderPage"
import { CiSettings } from "react-icons/ci"
import ProfileHeader from "../components/Setting/ProfileHeader"

function Setting() {
    const currentUser = useAppSelector((state) => state.auth.currentUser);
  
    if (!currentUser) {
      return <Navigate to="/login" replace />
    }
return (
    <div className="w-full min-h-screen px-4 pb-24">
      <HeaderPage Icon={CiSettings} title="settings.title"/>
      <ProfileHeader/>
      <GeneralSection/>
      <RemindersSection/>
      <OtherSection/>
    </div>
)
}

export default Setting