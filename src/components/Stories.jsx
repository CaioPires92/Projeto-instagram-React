export default function Stories() {
  const listaStory = [
    {
      id: 1,
      imagem: 'assets/img/9gag.svg',
      usuario: '9gag'
    },
    {
      id: 2,
      imagem: 'assets/img/meowed.svg',
      usuario: 'meowed'
    },
    {
      id: 3,
      imagem: 'assets/img/barked.svg',
      usuario: 'barked'
    },
    {
      id: 4,
      imagem: 'assets/img/barked.svg',
      usuario: 'barked'
    },
    {
      id: 5,
      imagem: 'assets/img/barked.svg',
      usuario: 'barked'
    },
    {
      id: 6,
      imagem: 'assets/img/barked.svg',
      usuario: 'barked'
    },
    {
      id: 7,
      imagem: 'assets/img/barked.svg',
      usuario: 'barked'
    },
    {
      id: 8,
      imagem: 'assets/img/barked.svg',
      usuario: 'barked'
    }
  ]

  return (
    <div className="stories">
      {listaStory.map(story => (
        <div className="story" key={story.id}>
          <div className="imagem">
            <img src={story.imagem} alt={story.usuario} />
          </div>
          <div className="usuario">{story.usuario}</div>
        </div>
      ))}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}
