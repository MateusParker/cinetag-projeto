import { Link } from 'react-router-dom';
import { Children } from 'react';
import styles from './CabacalhoLink.module.css';
function CabacalhoLink(
    {url,children}
){
    return (
       <Link to={url} className={styles.link}>
        {children}
       </Link>
    )
}
export default CabacalhoLink;