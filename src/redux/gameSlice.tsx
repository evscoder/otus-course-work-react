import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type gameStateProps = {
    cellsActive: number[][],
    nextCells: number[][],
    gridSize: number[],
    start: boolean,
    activeShape: boolean,
    shape?: string,
    color?: string,
    evolve: boolean,
    theme: boolean,
    grid: boolean,
    timeSpeed: number,
}

const initialState: gameStateProps = {
    cellsActive: [],
    nextCells: [],
    gridSize: [30, 60],
    start: false,
    activeShape: false,
    shape: 'square',
    color: 'purple',
    evolve: false,
    theme: false,
    grid: false,
    timeSpeed: 200
};

const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {
        setCellsActive: (state, action: PayloadAction<number[][]>) => {
            state.cellsActive = action.payload;
        },

        setNextCells: (state, action: PayloadAction<number[][]>) => {
            state.nextCells = action.payload;
        },

        setStart: (state, action: PayloadAction<boolean>) => {
            state.start = action.payload;
        },

        gameReset: (state) => {
            state.start = false;
            state.activeShape = false;
        },

        gameToggleEvolve: (state, { payload }) => {
            state.evolve = payload;
        },

        gameToggleShape: (state, { payload }) => {
            const { row, col } = payload;

            state.cellsActive[row][col] = state.cellsActive[row][col] ? 0 : 1;
            state.activeShape = state.cellsActive.some(rowArr => rowArr.some(cell => cell === 1));
        },
        gameChangeShape: (state, { payload }) => {
            state.shape = payload.shape;
            state.color = payload.color;
        },
        gameToggleGrid: (state) => {
            state.grid = !state.grid;
        },
        gameChangeGridSize: (state, { payload }) => {
            state.gridSize = [payload.sizeX, payload.sizeY];
        },
        gameToggleSpeed: (state, { payload }) => {
            state.timeSpeed = payload;
        }
    }
});

export const {
    setCellsActive,
    setNextCells,
    setStart,
    gameToggleShape,
    gameReset,
    gameChangeShape,
    gameChangeGridSize,
    gameToggleEvolve,
    gameToggleGrid,
    gameToggleSpeed
} = gameSlice.actions;

export default gameSlice.reducer;
