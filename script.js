const themeSwitcher=document.querySelector('#themeSwitcher');
const defaultTheme=localStorage.getItem('theme-key') || 'theme-light';
setTheme(defaultTheme);
themeSwitcher.addEventListener('change',(event)=>{
event.preventDefault();
setTheme(event.target.value);
})
function setTheme(theme){
    theme=theme || 'theme-light';
    localStorage.setItem('theme-key',theme);
  document.documentElement.className=theme;
  themeSwitcher.value=theme;
}