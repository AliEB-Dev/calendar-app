import { useTranslation } from "react-i18next"
import type { EditProfileFormProps } from "./types"

function EditProfileForm({name,email,onNameChange,onSave,onRemoveAvatar,onChangeAvatar}:EditProfileFormProps) {
  const { t } = useTranslation()
    return(
      <div className="px-4 pb-4 flex flex-col gap-3 border-t border-gray-100 dark:border-gray-700 pt-4 bg-(--bg-item-litht) dark:bg-(--bg-item-dark) dark:text-(--color-text-bgdark)">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500">{t("settings.profileName")}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="border dark:border-gray-500 rounded-xl px-3 py-2 text-sm outline-none focus:border-(--Primary)"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500">{t("settings.profileEmail")}</label>
          <input
            type="email"
            value={email}
            disabled
            className=" rounded-xl px-3 py-2 text-sm bg-gray-50 text-gray-400 dark:bg-(--bg-item-dark-hover)"
          />
        </div>
        <div className="flex gap-5 justify-center ">
            <button className="bg-red-400 text-white rounded-xl p-1 px-5" onClick={onRemoveAvatar}>{t("settings.removeProfile")}</button>
            <button className="bg-gray-500 p-3 rounded-xl text-white" onClick={(e) => {
                e.stopPropagation()
                onChangeAvatar()
            }}
            > {t("settings.changeProfile")} </button>
        </div>
            <div className="flex justify-center">

        <button
          type="button"
          onClick={onSave}
          className="w-full md:w-7/12 bg-(--Primary) text-white rounded-xl py-2.5 text-sm font-bold mt-1"
        >
          {t("settings.saveChanges")}
        </button>
            </div>

      </div>
    )
}
export default EditProfileForm;