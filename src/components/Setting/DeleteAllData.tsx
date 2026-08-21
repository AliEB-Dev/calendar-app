import { useState } from "react"
import { useTranslation } from "react-i18next"
import Swal from "sweetalert2"
import { IoIosTrash } from "react-icons/io"
import SettingItem from "./SettingItem"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { removeTask } from "../../store/slices/tasksSlice"
import { removeEvent } from "../../store/slices/eventsSlice"

function DeleteAllData() {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const tasks = useAppSelector((state) => state.tasks.items)
  const events = useAppSelector((state) => state.events.items)

  const [isBusy, setIsBusy] = useState(false)

  const handleDeleteAll = async () => {
    const result = await Swal.fire({
      title: t("settings.deleteConfirmTitle"),
      text: t("settings.deleteConfirmText"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: t("settings.deleteConfirm"),
      confirmButtonColor:'#DC2626' ,
      cancelButtonText: t("settings.cancel"),
      reverseButtons: true,
    })

    if (!result.isConfirmed) return

    setIsBusy(true)

    try {
      await Promise.all([
        ...tasks.map((task) =>
          dispatch(removeTask(task.id)).unwrap()
        ),

        ...events.map((event) =>
          dispatch(removeEvent(event.id)).unwrap()
        ),
      ])

      await Swal.fire({
        title: t("settings.deleteSuccess"),
        icon: "success",
        confirmButtonText: t("settings.ok"),
        customClass: {
          title: "text-lg!",
        },
      })
    } catch (error) {
      console.error(error)

      await Swal.fire({
        title: t("settings.deleteError"),
        icon: "error",
        confirmButtonText: t("settings.ok"),
      })
    } finally {
      setIsBusy(false)
    }
  }

  return (
      <SettingItem
        icon={IoIosTrash}
        iconBg="#FEE2E2"
        iconColor="#DC2626"
        title={t("settings.deleteAll")}
        subtitle={
          isBusy
            ? t("common.loading")
            : t("settings.deleteConfirmText")
        }
        onClick={handleDeleteAll}
      />
  )
}

export default DeleteAllData;