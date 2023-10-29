import styles from './PixelButton.module.scss'

interface PixelButtonProps {
    label: string
    onClick: () => void
    size?: 'md' | 'lg'
}

const PixelButton = ({ label, size = 'md', onClick }: PixelButtonProps) => {
    const cn = require('classnames')
    return (
        <button className={cn(styles.button, styles[size])} onClick={onClick}>{label}</button>
    )
}

export default PixelButton;