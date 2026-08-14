import { Navigate } from "react-router-dom"
import DataBackupSection from "../components/Setting/DataBackupSection"
import GeneralSection from "../components/Setting/GeneralSection"
import OtherSection from "../components/Setting/OtherSection"
import RemindersSection from "../components/Setting/RemindersSection"
import SettingHeader from "../components/Setting/SettingHeader"
import { useAppSelector } from "../store/hooks"

function Setting() {
    const currentUser = useAppSelector((state) => state.auth.currentUser);
  
    if (!currentUser) {
      return <Navigate to="/login" replace />
    }
return (
    <div className="w-full min-h-screen px-4 pb-24">
      <SettingHeader/>
      <GeneralSection/>
      <RemindersSection/>
      <DataBackupSection/>
      <OtherSection/>
    </div>
)
}

export default Setting