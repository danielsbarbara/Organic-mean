// Criar uma função que lê do localstorage a lingua do utilizador, vamo chamar-lhe "toLocaleTranslation"

// Essa função recebe como argumento uma string que é o nome do texto que se quer traduzir.

// As diferentes traduções devem ficar num ficheiro json que é lido pela "toLocaleTranslation".

// export function toLocaleTranslation(): string{
// let language = navigator.language || '';
// return language;
// }

// const browserLanguage: string = toLocaleTranslation();
// console.log('Browser Language:', browserLanguage)
import t from "./Translation.json"
import getUserLanguage from "./getLanguage"
const translations = t as any

export function toLocalTranslation(textKey: string): string {
    try {
  
      //const userLanguage = localStorage.getItem('userLanguage') || navigator.language;
      const languagePrefix = getUserLanguage() //userLanguage.startsWith('pt') ? 'pt' : 'en';
  
      if (translations[textKey] && translations[textKey][languagePrefix]) {
        return translations[textKey][languagePrefix];
      } else {
        return `Translation not found for key '${textKey}' in '${languagePrefix}'`;
      }
    } catch (error) {
      console.error('Error fetching or processing translations:', error);
      return '';
    }
  }

  // PT - descripton ENG - descriptionEng