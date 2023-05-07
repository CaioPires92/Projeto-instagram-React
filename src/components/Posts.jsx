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
      likes: 100523,
      isLiked: false,
      isBookmarked: false
    },
    {
      id: 2,
      imagem: 'assets/img/barked.svg',
      nome: 'barked',
      imgConteudo: 'assets/img/dog.svg',
      conteudoName: 'dog',
      imgCurtidas: 'assets/img/adorable_animals.svg',
      nameCurtidas: 'adorable_animals',
      likes: 99159,
      isLiked: false,
      isBookmarked: false
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
      likes: 999999,
      isLiked: false,
      isBookmarked: false
    }
  ]

  let [postBookmarks, setPostBookmarks] = useState(
    listaPost.map(post => ({
      id: post.id,
      isBookmarked: false
    }))
  )
  let [postLikes, setPostLikes] = useState(
    listaPost.map(post => ({
      id: post.id,
      isLiked: false,
      likes: post.likes
    }))
  )

  function handleClickLike(postId) {
    setPostLikes(prevListaPost => {
      return prevListaPost.map(post => {
        if (post.id === postId) {
          const isLiked = !post.isLiked
          const likes = isLiked ? post.likes + 1 : post.likes - 1
          return {
            ...post,
            isLiked,
            likes
          }
        }
        return post
      })
    })
  }

  function handleClickBookmark(postId) {
    setPostBookmarks(prevPostBookmarks => {
      return prevPostBookmarks.map(postBookmark => {
        if (postBookmark.id === postId) {
          return {
            ...postBookmark,
            isBookmarked: !postBookmark.isBookmarked
          }
        }
        return postBookmark
      })
    })
  }

  function handleImageClickLike(postId) {
    setPostLikes(prevPostLikes => {
      return prevPostLikes.map(postLike => {
        if (postLike.id === postId && !postLike.isLiked) {
          return {
            ...postLike,
            isLiked: true,
            likes: postLike.likes + 1
          }
        }
        return postLike
      })
    })
  }

  return (
    <div className="posts">
      {listaPost.map(post => (
        <div data-test="post" className="post" key={post.id}>
          <div className="topo">
            <div className="usuario">
              <img data-test="post-image" src={post.imagem} alt={post.name} />
              {post.name}
            </div>
            <div className="acoes">
              <ion-icon name={'ellipsis-horizontal'}></ion-icon>
            </div>
          </div>

          <div
            className="conteudo"
            onClick={() => handleImageClickLike(post.id)}
          >
            <img src={post.imgConteudo} alt={post.conteudoName} />
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon
                  data-test="like-post"
                  onClick={() => handleClickLike(post.id)}
                  name={
                    postLikes.find(like => like.id === post.id).isLiked
                      ? 'heart'
                      : 'heart-outline'
                  }
                  style={{
                    color: postLikes.find(like => like.id === post.id).isLiked
                      ? 'red'
                      : 'black'
                  }}
                ></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon
                  data-test="save-post"
                  onClick={() => handleClickBookmark(post.id)}
                  name={
                    postBookmarks.find(bookmark => bookmark.id === post.id)
                      .isBookmarked
                      ? 'bookmark'
                      : 'bookmark-outline'
                  }
                ></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src={post.imgCurtidas} alt={post.nameCurtidas} />
              <div className="texto">
                Curtido por <strong>{post.nameCurtidas}</strong> e
                <strong>
                  {' '}
                  outras{' '}
                  <span data-test="likes-number">
                    {postLikes
                      .find(like => like.id === post.id)
                      .likes.toLocaleString('pt-BR')}{' '}
                  </span>
                  pessoas
                </strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
