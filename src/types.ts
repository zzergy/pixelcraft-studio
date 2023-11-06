export interface CanvasParameters {
    rows: number,
    columns: number,
    baseColor: string,
    gridColor: string,
    pixels: string[][]
}

//allows you to get a property from another interface into your type
export type Dimentions = Pick<CanvasParameters, "rows" | 'columns'>
