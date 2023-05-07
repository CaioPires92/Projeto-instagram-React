export default function Sugestions() {
  const sugestoesDoPerfil = [
    {
      id: 1,
      nome: 'bad.vibes.memes',
      imagem: 'assets/img/bad.vibes.memes.svg',
      razao: 'Segue você'
    },
    {
      id: 2,
      nome: 'bad.vibes.memes',
      imagem: 'assets/img/bad.vibes.memes.svg',
      razao: 'Segue você'
    },
    {
      id: 3,
      nome: 'bad.vibes.memes',
      imagem: 'assets/img/bad.vibes.memes.svg',
      razao: 'Segue você'
    }
  ]

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoesDoPerfil.map(sugestao => (
        <div key={sugestao.id} className="sugestao">
          <div className="usuario">
            <img src={sugestao.imagem} alt={sugestao.nome} />
            <div className="texto">
              <div className="nome">{sugestao.nome}</div>
              <div className="razao">{sugestao.razao}</div>
            </div>
          </div>
          <div className="seguir">Seguir</div>
        </div>
      ))}
    </div>
  )
}
