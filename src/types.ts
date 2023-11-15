export interface CanvasParameters {
    rows: number,
    columns: number,
    baseColor: string,
    gridColor: string,
    pixelsGrid: string[][]
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

//allows you to get a property from another interface into your type
export type Dimentions = Pick<CanvasParameters, "rows" | 'columns'>
