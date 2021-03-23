import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
   <div className={styles.container}>
    <h1>Hello World</h1>
      <section className={styles.textBlock}>
        <div>
          <h2>What is Lorem Ipsum?</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div>
          <h2>What is Lorem Ipsum?</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div>
          <h2>What is Lorem Ipsum?</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
      </section>
   </div>
   <section className={styles.banner}>
      <h1>Why do we use it?</h1>
      <h2>Where can I get some?</h2>
      <p>There are many variations of passages of Lorem Ipsum available,<br/>
         but the majority have suffered alteration in some form, by injected humour,<br />
         or randomised words which don't look even slightly believable.</p>
   </section>
   <section className={styles.pictureBlock}>
        <div className={styles.card}>
          <Image src="/cat.webp" alt="cat" width={288} height={216}/>
          <h2>What is Lorem Ipsum?</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className={styles.card}>
          <Image src="/cat.webp" alt="cat" width={288} height={216}/>  
          <h2>What is Lorem Ipsum?</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    </section>
   </>
  )
}
