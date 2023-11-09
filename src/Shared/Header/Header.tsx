import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Header.module.scss'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import logoFlask from '../../images/logoFlask.png'
import { Link } from 'react-router-dom'
import { homepage } from '../../routes'
import { Tooltip } from 'antd'

const Header = () => {
    return (
        <div className={styles.container}>
            <Link to={homepage} style={{ height: 26 }}>
                <img src={logoFlask} alt='logo' height={26} className={styles.logo} />
            </Link>
            <div className={styles.linksContainer} >
                <Tooltip title='Source code' placement='bottomRight' arrow={false}>
                    <a href='https://github.com/zzergy/pixel-craft-studio' className={styles.link}>
                        <FontAwesomeIcon icon={faCodeBranch} className={styles.small} />
                    </a>
                </Tooltip>
                <Tooltip title='My GitHub Account 👩‍💻' placement='bottomRight' arrow={false}>
                    <a href='https://github.com/zzergy' className={styles.link}>
                        <FontAwesomeIcon icon={faGithubAlt} className={styles.medium} />
                    </a>
                </Tooltip>
            </div>
        </div>
    )
}

export default Header