import React from 'react'
import NavLogo from '../components/NavLogo/NavLogo'
import '../TemporaryHomePage/HomePageTemp.css'

function HomePageTemp() {
   const redirectToNewPage = () => {
      window.location.href = 'nolej-react-app\src\Materials\Materials'; // Replace '/new-page' with the desired URL
   };

   return (
      <>
         <NavLogo />
         <main>
            <label >Приветствую тебя в NOLEJ дорогой ученик!</label>
            <button onClick={redirectToNewPage}>Материалы</button>
            <a rel="noreferrer" target=" _blank" href='https://calendly.com/liljdbfhv'><button>Связь с учителями</button></a>
            <a rel="noreferrer" target=" _blank" href='https://calendly.com/liljdbfhv'><button>Связь с выпускниками</button></a>
            <a rel="noreferrer" target=" _blank" href='https://calendly.com/liljdbfhv'><button>Профиль</button></a>
         </main >
      </>
   )
}

export default HomePageTemp