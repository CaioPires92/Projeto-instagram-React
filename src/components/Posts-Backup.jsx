import { useState } from 'react'

export default function Posts() {
  const listaPost = [
    {
      id: 1,
      imagem: 'assets/img/meowed.svg',
      name: 'meowed',
      imgConteudo: 'assets/img/gato-telefone.svg',
      conteudoName: 'gato-telefone',
      imgCurtidas: 'assets/img/respondeai.svg',
      nameCurtidas: 'respondeai',
      qtsCurtidas: 101.523
    },
    {
      id: 2,
      imagem: 'assets/img/barked.svg',
      nome: 'barked',
      imgConteudo: 'assets/img/dog.svg',
      conteudoName: 'dog',
      imgCurtidas: 'assets/img/adorable_animals.svg',
      nameCurtidas: 'adorable_animals',
      qtsCurtidas: 99.159
    },
    {
      id: 3,
      imagem: 'assets/img/barked.svg',
      nome: 'barked',
      imgConteudo:
        'https://yt3.googleusercontent.com/ytc/AGIKgqO2qHe9qouBJGnalRrf1en7ISDlHvibvlOVu3xj=s900-c-k-c0x00ffffff-no-rj',
      conteudoName: 'dog',
      imgCurtidas: 'assets/img/adorable_animals.svg',
      nameCurtidas: 'adorable_animals',
      qtsCurtidas: 999.999
    }
  ]

  let [isClicked, setIsClicked] = useState(false)
  let [isClickedLike, setIsClickedLike] = useState(false)
  let [imagemClicked, setImagemClicked] = useState(false)

  function handleClickBookmark() {
    setIsClicked(!isClicked)
  }

  const iconColor = isClicked ? 'black' : 'black'
  const iconName = isClicked ? 'bookmark' : 'bookmark-outline'

  const iconStyle = {
    color: iconColor
  }

  function handleClickLike() {
    setIsClickedLike(!isClickedLike)
  }

  const likeColor = isClickedLike ? 'red' : 'black'
  const likeIconName = isClickedLike ? 'heart' : 'heart-outline'

  const iconHeartStyle = {
    color: likeColor
  }

  function handleImagemClick() {
    setImagemClicked(!imagemClicked)
    setIsClickedLike(true)
  }



  return (
    <div className="posts">
      {listaPost.map(post => (
        <div className="post" key={post.id}>
          <div className="topo">
            <div className="usuario">
              <img src={post.imagem} alt={post.name} />
              {post.name}
            </div>
            <div className="acoes">
              <ion-icon name={'ellipsis-horizontal'}></ion-icon>
            </div>
          </div>

          <div className="conteudo" onClick={handleImagemClick}>
            <img src={post.imgConteudo} alt={post.conteudoName} />
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon
                  onClick={handleClickLike}
                  name={likeIconName}
                  style={iconHeartStyle}
                ></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div onClick={handleClickBookmark}>
                <ion-icon name={iconName} style={iconStyle}></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src={post.imgCurtidas} alt={post.nameCurtidas} />
              <div className="texto">
                Curtido por <strong>{post.nameCurtidas}</strong> e
                <strong> outras {post.qtsCurtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
