import { useState } from "react"

interface IconHover {
    file: boolean
}

const initialIconHoverState: IconHover = {
    file: false,
}

/**
 * When a user hovers over an icon in the left navigation, it transitions to its hover state.
 */
const useIconHover = () => {
    const [iconHover, setIconHover] = useState<IconHover>(initialIconHoverState)

    const handleMouseOver = (iconName: string) => {
        setIconHover({ ...iconHover, [iconName]: true });
    };

    const handleMouseOut = (iconName: string) => {
        setIconHover({ ...iconHover, [iconName]: false });
    };

    return { iconHover, handleMouseOver, handleMouseOut }
}

export default useIconHover