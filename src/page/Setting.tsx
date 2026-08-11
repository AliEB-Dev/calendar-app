import AuthGate from "../components/auth/AuthGate"
import DataBackupSection from "../components/Setting/DataBackupSection"
import GeneralSection from "../components/Setting/GeneralSection"
import OtherSection from "../components/Setting/OtherSection"
import RemindersSection from "../components/Setting/RemindersSection"
import SettingHeader from "../components/Setting/SettingHeader"

function Setting() {
  return (
    <AuthGate>
    <div className="w-full min-h-screen px-4 pb-24">
      <SettingHeader/>
      <GeneralSection/>
      <RemindersSection/>
      <DataBackupSection/>
      <OtherSection/>
    </div>
    </AuthGate>
  )
}

export default Setting