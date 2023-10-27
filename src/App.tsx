import ColorPicker from './Pages/ColorPicker/ColorPicker';
import styles from './App.module.scss'
import PixelCanvas from './Pages/Canvas/PixelCanvas';
import { useState } from 'react';
import { CanvasParameters } from './types';
import { ColorResult } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const App = () => {
  const initialCanvasParameters: CanvasParameters = {
    rows: 15,
    columns: 15,
    baseColor: 'white',
    gridColor: '#ededed'
  }

  const [canvasParameters, setCanvasParameters] = useState<CanvasParameters>(initialCanvasParameters)
  const [drawingColor, setDrawingColor] = useState<string>('#ededed')

  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faEnvelope} size='2x' color='blue' />
      <ColorPicker drawingColor={drawingColor} setDrawingColor={setDrawingColor} />
      <PixelCanvas drawingColor={drawingColor} canvasParameters={canvasParameters} />
    </div>
  );
}

export default App;
