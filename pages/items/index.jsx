import fetch from 'isomorphic-unfetch'
import Card from '../../components/Card'

import {NextSeo} from 'next-seo'
 
import styles from './items.module.css'

const Items =({items})=>{

  const SEO = {
    title: 'Template Page | Items Page',
    description: 'Template Page',

    openGraph:{
        title: 'Template Page | Items Page',
        description: 'Template Page Items Page',
    }
}
    return(
      <>
        <NextSeo {...SEO} />
        <div className={styles.container}>
        <h1>Items Page</h1>
        <div className={styles.itemsList}>
            <Card items={items} />
        </div>
        </div>
      </>
    )
}

export async function getStaticProps(){
    
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