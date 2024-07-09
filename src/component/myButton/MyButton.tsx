import { useTranslation } from 'react-i18next'

const MyButton = () => {
    const { t } = useTranslation()
    return (
        <div className='justify-end'>
            <button title={t("learn_more")} className="border-[0.5px] cursor-pointer border-[#00000029] hover:bg-primary hover:text-white hover:transition-all transition-all w-[100px] lg:w-[135px] h-[40px] lg:h-[54px] text-primary font-normal font-sf-pro-display leading-8 lg:text-xl text-sm">
                {t("learn_more")}
            </button>
        </div>
    )
}

export default MyButton