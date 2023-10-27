import React from 'react'
import NavLogo from '../components/NavLogo/NavLogo'
import '../components/NavLogo/NavLogo.css'

function HomePageTemp() {
   return (
      <>
         <NavLogo />
         <main>
            <label>Приветствую тебя дорогой ученик!
               давай продолжим нашу регистрацию в NOLEJ!</label>
            <label>1) Пройди специализированный опрос от нас
            </label>
            <a target="_blank" href='https://forms.microsoft.com/Pages/ResponsePage.aspx?id=yVLbOR7jwkKAg3U1W3KN472I37MOhjBDge5TgatWlqNUQUdRUEw5NTBUTTVMQUVMSzYwUjNQVEhGQi4u'><button>Опрос</button></a>
            <label>2) пройди специальную консультацию от нашего психолога
            </label>
            <a target="_blank" href='https://calendly.com/liljdbfhv'><button>Запись на консультацию</button></a>
         </main>
      </>
   )
}

export default HomePageTemp