import { useState } from 'react'
import Sugestions from './Suggestions'

export default function Sidebar() {
  const [userName, setUserName] = useState('Nome inicial')
  const [perfil, setPerfil] = useState('assets/img/catanacomics.svg')

  function handleIconClick() {
    const newUserName = prompt('Digite seu nome: ')
    if (newUserName) {
      setUserName(newUserName)
    }
  }

  function handleChangePerfil() {
    const newPerfilPicture = prompt('Insira a sua foto de perfil: ')

    if (newPerfilPicture) {
      setPerfil(newPerfilPicture)
    }
  }

  return (
    <div className="sidebar">
      <div className="usuario">
        <img
          data-test="profile-image"
          onClick={handleChangePerfil}
          src={perfil}
          alt="imagem de perfil"
        />
        <div className="texto">
          <span>
            <strong data-test="name">{userName}</strong>
            <ion-icon
              data-test="edit-name"
              name="pencil"
              onClick={handleIconClick}
            ></ion-icon>
          </span>
        </div>
      </div>

      <Sugestions />

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  )
}
