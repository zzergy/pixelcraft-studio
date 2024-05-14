export interface CanvasPosition {
    x: number,
    y: number
}

export interface CanvasData {
    rows: number,
    columns: number,
    baseColor: string,
    gridColor: string,
    drawingColor: string,
    pixelsGrid: string[][],
    canvasPosition: CanvasPosition
}

export interface ModalStates {
    deleteCanvasModal?: boolean,
    createCanvasModal?: boolean,
    clearCanvasModal?: boolean
}

export enum ModalTypes {
    clear = 'clearCanvasModal',
    create = 'createCanvasModal',
    delete = 'deleteCanvasModal'
}

export interface CanvasActionTools {
    isDrawingMode: boolean,
    isEraseMode: boolean,
    isColorFillMode: boolean,
    isCanvasDragMode: boolean,
    canvasHistory: string[][][],
    historyIndex: number
}

export const PIXEL_WIDTH = 10
export const PIXEL_HEIGHT = 10
export const LEFT_NAV_WIDTH = 40
export const TOP_NAV_HEIGHT = 40

//allows you to get a property from another interface into your type
export type Dimensions = Pick<CanvasData, "rows" | 'columns'>
