import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './ToolButton.module.scss'

interface ToolButtonProps {
    icon: IconProp,
    onClick: () => void,
    isActive?: boolean,
    isDisabled?: boolean
}

const ToolButton = ({ icon, onClick, isActive, isDisabled }: ToolButtonProps) => {
    const classnames = require('classnames')
    return (
        <button
            disabled={isDisabled}
            className={classnames(styles.button, isActive && styles.active)}
            onClick={() => onClick()}
        >
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}

export default ToolButton