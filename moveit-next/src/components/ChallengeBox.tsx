import { useContext } from 'react';
import { ChallengeContext} from '../context/ChallengeContext';
import { CountDownContext } from '../context/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
  const { resetCountDown } = useContext(CountDownContext);
  
  
  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountDown(); 
  }
 
  function handleChallengeFailed() {
    resetChallenge();
    resetCountDown(); 
  }


  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount}</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
        
          <footer>
            <button 
              type="button"
              className={styles.challengeFaieldButton}
              onClick={handleChallengeFailed}              
              >
                Falhei
            </button>

            <button 
              type="button"
              className={styles.challengeSucceededButton}  
              onClick={handleChallengeSucceeded}
            >
              Completei
              </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong> 
           <p>
             <img src="icons/level-up.svg" alt="Level-Up"/>
            Avance de level completando desafios.
           </p>
         </div>
      ) }
    </div>
  );
}