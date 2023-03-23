import { LocalGithubUser } from 'types';
import styles from './UserStat.module.scss';

export interface UserStatProps extends Pick<LocalGithubUser, 'repos' | 'followers' | 'following'> { }

export const UserStat = ({ repos, followers, following }: UserStatProps) => {

  return (
    <div className={styles.userStat}>

      <div className={styles.info}>
        <h3 className={styles.infoTitle}>Repos</h3>
        <div className={styles.infoNumber}>{repos}</div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.infoTitle}>Following</h3>
        <div className={styles.infoNumber}>{following}</div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.infoTitle}>Followers</h3>
        <div className={styles.infoNumber}>{followers}</div>
      </div>

    </div>
  )
};
