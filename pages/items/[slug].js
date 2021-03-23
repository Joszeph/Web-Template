import fetch from 'isomorphic-unfetch'
import styles from './details.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Details = ({item}) =>{
    return(
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
    )
}

export async function getServerSideProps(context) {
    const{API_URL} = process.env
    const { slug } = context.query

    const res = await fetch(`${API_URL}/movies?slug=${slug}`)
    
    const data = await res.json()
    return {
        props: {
            item: data[0]
        },
    }
}

export default Details