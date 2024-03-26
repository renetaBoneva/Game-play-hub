import styles from './Loading.module.css'

export function Loading() {
    return (
    <div className='contentWrapper'>
        <div className={styles.loader}></div>
    </div>)
}