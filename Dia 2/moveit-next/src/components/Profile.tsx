import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/tomsales92.png" alt="Everton Sales"/>
           <div>
           <strong>Everton Sales</strong>
           <p>
               <img src="icons/level.svg" alt="Level"/>
               Level 1</p>
           </div>
        </div>
        

    );
}