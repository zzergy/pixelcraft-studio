import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Header.module.scss'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { Popup } from 'semantic-ui-react'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind';
import logoFlask from '../../images/logoFlask.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className={styles.container}>
            <Link to={'/homepage'} style={{ height: 26 }}>
                <img src={logoFlask} alt='logo' height={26} className={styles.logo} />
            </Link>
            <div className={styles.linksContainer} >
                <Popup content='Source code'
                    trigger={
                        <a href='https://github.com/zzergy/pixel-craft-studio' className={styles.link}>
                            <FontAwesomeIcon icon={faCodeBranch} className={styles.small} />
                        </a>
                    }
                    position='bottom right'
                    size='small'
                    style={{ padding: '4px 6px' }}
                />

                <Popup content='My GitHub Account 👩‍💻'
                    trigger={
                        <a href='https://github.com/zzergy' className={styles.link}>
                            <FontAwesomeIcon icon={faGithubAlt} className={styles.medium} />
                        </a>
                    }
                    position='bottom right'
                    size='small'
                    offset={[8, 0]}
                    style={{ padding: '4px 6px' }}
                />
            </div>
        </div>
    )
}

export default Header