import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Diego" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia incidunt suscipit quod quo tempore optio culpa, aut ipsum labore aperiam! Quod!"
          />
          <Post 
            author="Teste" 
            content="Novo Quia incidunt suscipit quod quo tempore optio culpa, aut ipsum labore aperiam! Quod!"
          />
        </main>
      </div>
    </>
  )
}