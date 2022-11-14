export function Post(props) {
  return (
    <div>
      <h2>{props.author}</h2>
      <p>{props.content}</p>
    </div>
  )
}

// Default exports
// -> Export Default Function -> O nome que está importando não necessariamente precisa ser o mesmo que está exportando
// -> Na importação o nome não fica entre chaves -> Componente

// Named Exports
// -> Export Function -> O nome que está importando precisa ser o mesmo que está exportando
// -> Na importação o nome precisa estar entre chaves -> { Componente }

// -- // -- // --

// Propriedades
// Para que eu possa passar informações diferentes para cada componente passo através das propriedades