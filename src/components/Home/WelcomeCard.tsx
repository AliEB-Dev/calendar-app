
import { useTranslation } from 'react-i18next';
import CalendarImg from '../../assets/img/calender.png'
import { useAppSelector } from '../../store/hooks'

function WelcomeCard() {
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const { t } = useTranslation();
  
  return (
    <div className='w-full  flex'>
          <div className='flex items-center  justify-between'>
                <div className='w-4/12'>
                    <img className="w-12/12" src={CalendarImg} alt="calender image" />  
                </div>
                <div className='flex flex-col gap-1 w-7/12'>
                    <h1 className='text-xl '>{t("home.greeting", { name: currentUser?.name ?? t("common.user") })}</h1>
                    <p className="text-sm text-gray-500 whitespace-nowrap">{t("home.tagline")}</p>
                </div>
          </div>
    </div>
  )
}

export default WelcomeCard