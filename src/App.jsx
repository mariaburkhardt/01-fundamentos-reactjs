import { Header } from "./components/Header";
import { Post} from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import './global.css'

//precisa de informações do 
// author: { avatarUrl: '', name'', role: '' }
//publishedAt: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mariaburkhardt.png', 
      name: 'Maria Burkhardt', 
      role: 'Designer e desenvolvedora'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de mais um projemeu portifa.projeto que fNLW Return, evenRocketseat. O noprojeto é Docto🚀' },
      { type: 'paragraph', content: '👉' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-01-09 17:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/mariaburkhardt.png', 
      name: 'Az Larah', 
      role: 'Designer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de mais um projemeu portifa.projeto que fNLW Return, evenRocketseat. O noprojeto é Docto🚀' },
      { type: 'paragraph', content: '👉' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-01-08 20:00:00'),
  },
]

//iteração - usar map pq tem retorno forEach nao

export function App() {
  return (
    <div>
      <Header/>
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
          <Post 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
          )
          })}
      </main>
    
    </div>
  </div>
  )
}

