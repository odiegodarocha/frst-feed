import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="http://github.com/odiegodarocha.png" />
          <div className={styles.authorInfo}>
            <strong>Diego da Rocha</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 14h" dateTime="2022-05-11 14:00:00">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>👉 <a href="">jane.design/doctorcare</a></p>
          <p><a href="">#novoprojeto</a><a href=""> #nlw</a><a href=""> #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea 
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
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