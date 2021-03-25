import fetch from 'isomorphic-unfetch'
import styles from './details.module.css'
import Image from 'next/image'
import Link from 'next/link'

import {NextSeo} from 'next-seo'

const Details = ({item}) =>{

    const SEO = {
        title: `Template Page | ${item.Title} Page`,
        description: 'Template Page',

        openGraph:{
            title: `Template Page | ${item.Title} Page`,
            description: `Template Page ${item.Title} Page`,
        }
    }

    return(
        <>
        <NextSeo {...SEO} />
        <div className={styles.container}>
            <div className={styles.article}>
            <Image src={item.Poster.url} alt={item.Title} width={250} height={400}/>
                <div className={styles.description}>
                    <h1>{item.Title}</h1>
                    <p dangerouslySetInnerHTML={{__html: item.description}} />
                    <Link href="/items">
                        <a>Go back</a>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

// export async function getServerSideProps(context) {
//     const{API_URL} = process.env
//     const { slug } = context.query

//     const res = await fetch(`${API_URL}/movies?slug=${slug}`)
    
//     const data = await res.json()
//     return {
//         props: {
//             item: data[0]
//         },
//     }
// }

export async function getStaticPaths() {
    const{API_URL} = process.env
    const { slug } = context.query
    const res = await fetch(`${API_URL}/movies?slug=${slug}`)
    const data = await res.json()
    return {
        props: {
            item: data[0]
        },
      fallback: true,
    }
  }


  export async function getStaticProps(context){
    
    const slug = context.params.slug;
    const{API_URL}=process.env

    const res = await fetch(`${API_URL}/movies?slug=${slug}`)
    const data = await res.json()
  
    return{
      props:{
        items:data
      }
    }
}
export default Details