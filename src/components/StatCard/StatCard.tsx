import type { IconType } from "react-icons";

interface StatCardProps {
  Icon: IconType;
  bg: string;
  color: string;
  title: string;
  subtitle: string;
  count: number;
}
function HomeStatCard({Icon,bg,color,title,subtitle,count}:StatCardProps) {
  return (
    <div className='w-3/12 h-12/12 md:w-2/12  p-2 gap-1 rounded-xl text-center flex justify-center flex-col items-center bg-white
              text-gray-800 shadow hover:scale-105 dark:bg-(--bg-item-dark) dark:text-(--color-text-bgdark)'>
                <div className={`w-12 aspect-square rounded-full flex items-center justify-center`} style={{backgroundColor: bg}}>
                  <Icon className={`text-2xl `} color={color}/>
                </div>
                  <p>{count}</p>
                  <span className='text-xs  truncate  '>
                  {title}
                  </span>
                  <span className='text-gray-400 text-[11px]'>{subtitle}</span>
              </div>
  )
}

export default HomeStatCard