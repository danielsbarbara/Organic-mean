
import { toLocalTranslation } from '../i18n/toLocalTranslation';

interface ILanguageSwitch {
    onClick?: (e: React.MouseEvent<HTMLElement>) => any
}


export function LanguageSwitch({onClick}: ILanguageSwitch){


  const currentLanguage = localStorage.getItem('userLanguage') || navigator.language;
  const isPortuguese = currentLanguage.startsWith('pt');

  const changeLanguage = () => {
 
    const currentLanguage = localStorage.getItem('userLanguage') || navigator.language;
    const isPortuguese = currentLanguage.startsWith('pt');

    if(isPortuguese) {
      localStorage.setItem('userLanguage', 'en')
    } else {
      localStorage.setItem('userLanguage', 'pt')
    }
window.location.reload()
  }
  return (  
    <div className="flex items-center space-x-4">

      <button onClick={() => changeLanguage()} className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-normal rounded-full text-xs px-3 b py-2.5 text-center items-center dark:focus:[#24292F] dark:hover:bg-[#050708]/30 cursor-pointer">
        {isPortuguese ? 'EN' : 'PT'}
      </button>

    </div>
    )
}
