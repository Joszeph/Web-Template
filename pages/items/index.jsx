import fetch from 'isomorphic-unfetch'
import Card from '../../components/Card'


 
import styles from './items.module.css'

const Items =({items})=>{
    return(
        <div className={styles.container}>
        <h1>Items Page</h1>
        <div className={styles.itemsList}>
            <Card items={items} />
        </div>
        </div>
    )
}

export async function getServerSideProps(){
    
    const{API_URL}=process.env

    const res = await fetch(`${API_URL}/movies`)
    const data = await res.json()
  
    return{
      props:{
        items:data
      }
    }
}

export default Items