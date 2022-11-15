import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post iradooooooo!'
  ])
  const [newComment, setNewComment] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewComment() {
    event.target.setCustomValidity('')
    setNewComment(event.target.value);
  }

  function deleteComment(commentDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentDelete;
    })
    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Campo obrigatório!')
  }

  const isNewCommentEmpty = newComment.length == 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
      </header>
      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === 'link') {
            return <p key={item.content}><a href="">{item.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea 
          name="comment"
          value={newComment}
          placeholder="Deixe um comentário"
          onChange={handleNewComment}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button 
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(item => {
          return (
            <Comment 
              key={item} 
              content={item} 
              onDeleteComment={deleteComment} 
            />
          )
        })}
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