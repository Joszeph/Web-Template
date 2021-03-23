import styles from './contacts.module.css'
import{NextSeo} from 'next-seo'

const Contacts =()=>{

    const SEO = {
        title: 'Template Page | Contact Us Page',
        description: 'Template Page',

        openGraph:{
            title: 'Template Page | Contact Us Page',
            description: 'Template Page Contact Us Page',
        }
    }

    return(
        <>
        <NextSeo {...SEO} />
        <div className={styles.container}>
        <h1>Contacts Page</h1>
        </div>
        </>
    )
}

export default Contacts