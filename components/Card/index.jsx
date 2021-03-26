import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card =({items})=>{
    return(
        <>
        {items.map(item=>(
            <div className={styles.card} key={item.id}>
                <Image src={item.Poster.url} alt={item.Title} width={250} height={400}/>
                <div>
                    <h3>{item.Title}</h3>
                    <Link href={`items/${item.slug}`}>  
                        <a>Read more</a>
                    </Link>
                </div>
            </div>
        ))}
        </>
    )
}

export default Card