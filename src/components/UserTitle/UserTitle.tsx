import { LocalGithubUser } from 'types';
import styles from './UserTitle.module.scss';

interface UserTitleProps extends Pick<LocalGithubUser, 'name' | 'login' | 'created'> { }

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

export const UserTitle = ({ name, login, created }: UserTitleProps) => {

  const joinedDate = localDate.format(new Date(created))

  return (
    <div className={styles.userTitle}>
      <h2>{name ? name : 'There is no name in this profile =('}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  )
};
