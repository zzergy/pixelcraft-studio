import { useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import styles from './ColorPicker.module.scss'
// import classNames from 'classnames/bind';

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState<string>()

    const handleColorChange = (color: ColorResult) => {
        setSelectedColor(color.hex)
    }

    console.log(selectedColor)

    return (
        <ChromePicker
            color={selectedColor}
            onChange={handleColorChange}
        />
    )
}

export default ColorPicker;
