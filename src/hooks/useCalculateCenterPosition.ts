import { LEFT_NAV_WIDTH, PIXEL_HEIGHT, PIXEL_WIDTH, TOP_NAV_HEIGHT } from "../types";

/**
 * Calculates the center posiition of the canvas
 * @param rows number of canvas rows 
 * @param columns number of canvas columns
 */
const useCalculateCenterPosition = (rows: number, columns: number) => {
    const centerX = (window.innerWidth - rows * PIXEL_WIDTH) / 2 - LEFT_NAV_WIDTH;
    const centerY = (window.innerHeight - columns * PIXEL_HEIGHT) / 2 - TOP_NAV_HEIGHT;

    return { centerX, centerY };
}

export default useCalculateCenterPosition;