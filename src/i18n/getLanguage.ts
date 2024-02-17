export default function getUserLanguage(){
    const userLanguage = localStorage.getItem('userLanguage') || navigator.language;
    return userLanguage.startsWith('pt') ? 'pt' : 'en'
}