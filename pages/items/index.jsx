import fetch from 'isomorphic-unfetch'
import Card from '../../components/Card'

import {NextSeo} from 'next-seo'
 
import styles from './items.module.css'

import {motion} from 'framer-motion'

const Items =({items})=>{

  const SEO = {
    title: 'Template Page | Items Page',
    description: 'Template Page',

    openGraph:{
        title: 'Template Page | Items Page',
        description: 'Template Page Items Page',
    }
}

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

    return(
      <>
        <NextSeo {...SEO} />
        <div className={styles.container}>
        <h1>Items Page</h1>
        <motion.div className={styles.itemsList} initial="hidden" animate="visible" variants={variants} transition={{duration:1}}>
            <Card items={items} />
        </motion.div>
        </div>motion.
      </>
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