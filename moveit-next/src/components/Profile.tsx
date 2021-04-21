import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Je-ss.png" alt="Jeane Sousa Santos" />
            <div>
                <strong>Jeane Sousa Santos </strong>
                <p>
                    <img src="icons/level.svg" alt="Level" /> level {level}
                </p>
            </div>
        </div>
    );
}