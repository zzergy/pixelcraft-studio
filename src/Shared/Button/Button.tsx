import styles from './Button.module.scss'

interface ButtonProps {
    label: string,
    onClick: () => void,
    size?: 'md'
}

const Button = ({ label, size, onClick }: ButtonProps) => {
    const classnames = require('classnames')
    return (
        <button className={classnames(styles.button, styles[size])} onClick={onClick}>{label}</button>
    )

}

export default Button;