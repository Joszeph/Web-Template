import styles from './about.module.css'
import {NextSeo} from 'next-seo'

const About =()=>{

    const SEO = {
        title: 'Template Page | About Page',
        description: 'Template Page',

        openGraph:{
            title: 'Template Page | About Page',
            description: 'Template Page About Page',
        }
    }

    return(
        <>
        <NextSeo {...SEO} />
        <div className={styles.container}>
        <h1>About Page</h1>
        </div>
        </>
    )
}

export default About