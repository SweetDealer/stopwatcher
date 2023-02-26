import styles from './Watch.module.scss'

const Watch = props => {

    const time = new Date(props.millis);
    const milliseconds = new String(time.getUTCMilliseconds()).padStart(3, '0');
    const seconds = new String(time.getUTCSeconds()).padStart(2, '0'); 
    const minutes = new String(time.getUTCMinutes()).padStart(2, '0');
    const hours = new String(time.getUTCHours()).padStart(2, '0');
  
    return <div className={styles.watch}>
        {hours}:{minutes}:{seconds}.{milliseconds}
    </div>
}

export default Watch;