import { gameToggleEvolve, setCellsActive } from '../redux/gameSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import React, { useCallback } from 'react';

const useStartEvolve = (timeoutRef: React.MutableRefObject<any>) => {
    const { timeSpeed, gridSize, cellsActive } = useSelector((state: RootState) => state.gameSlice);
    const dispatch = useDispatch();

    return useCallback(() => {
        dispatch(gameToggleEvolve(true));

        const [rows, cols] = gridSize;

        const step = (current: number[][]) => {
            const next = Array.from({ length: rows }, () => Array(cols).fill(0));

            const get = (r: number, c: number): number =>
                r >= 0 && r < rows && c >= 0 && c < cols ? current[r][c] : 0;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const neighbors =
                        get(r - 1, c - 1) + get(r - 1, c) + get(r - 1, c + 1) +
                        get(r, c - 1) + get(r, c + 1) +
                        get(r + 1, c - 1) + get(r + 1, c) + get(r + 1, c + 1);

                    next[r][c] = current[r][c] === 1
                        ? (neighbors === 2 || neighbors === 3 ? 1 : 0)
                        : (neighbors === 3 ? 1 : 0);
                }
            }

            dispatch(setCellsActive(next));
            timeoutRef.current = setTimeout(() => step(next), timeSpeed);
        };

        step(cellsActive);
    }, [dispatch, timeSpeed, gridSize, timeoutRef, cellsActive]);
};

export default useStartEvolve;
