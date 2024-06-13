import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './ToolButton.module.scss'
import { Tooltip } from "antd"

interface ToolButtonProps {
    icon: IconProp,
    onClick: (e: any) => void,
    isActive?: boolean,
    isDisabled?: boolean,
    tooltipText?: string
}

const ToolButton = ({ icon, onClick, isActive, isDisabled, tooltipText }: ToolButtonProps) => {
    const classnames = require('classnames')
    return (
        <Tooltip placement="right" title={tooltipText} mouseLeaveDelay={0.2}>
            <button
                disabled={isDisabled}
                className={classnames(styles.button, isActive && styles.active, isDisabled && styles.disabled)}
                onClick={(e) => onClick(e)}
            >
                <FontAwesomeIcon icon={icon} />
            </button >
        </Tooltip>
    )
}

export default ToolButton