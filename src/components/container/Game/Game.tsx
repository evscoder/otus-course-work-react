import { FC, useEffect, useRef, useState } from 'react';
import styles from './Game.module.scss';
import Interface from '../Interface/Interface';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../../../redux/store';
import Frame from '../../layout/Frame/Frame';
import Modal, {closeModalAction} from '../../ui/Modal/Modal';
import ModalDismissButton from '../../ui/Modal/ModalDismissButton';
import Help from '../../layout/Help/Help';
import { setCellsActive, setNextCells, setStart } from '../../../redux/gameSlice.tsx';

interface Props {
    title?: string
}

const Game: FC<Props> = () => {
    const [showModal, setModal] = useState<{show: boolean, animate: boolean}>({show: false, animate: false});
    const { cellsActive, grid, shape, color, gridSize } = useSelector((state: RootState) => state.gameSlice);
    const dispatch = useDispatch();
    const gameElement = useRef<HTMLDivElement>(null);
    const frameElement = useRef<HTMLTableElement>(null);

    useEffect(() => {
        const currentCells: number[][] = [];
        const nextCells: number[][] = [];
        const [rows, cols] = gridSize;

        for (let i = 0; i < rows; i++) {
            currentCells[i] = [cols];
            nextCells[i] = [cols];

            for (let j = 0; j < cols; j++) {
                currentCells[i][j] = 0;
                nextCells[i][j] = 0;
            }
        }

        dispatch(setCellsActive(currentCells));
        dispatch(setNextCells(nextCells));
    }, [dispatch, gridSize]);

    const onCreate = (): void => {
        const table = frameElement.current as HTMLTableElement;
        const cells = table.querySelectorAll('.shape');
        const totalCells = cells.length;
        const maxCells = Math.floor(totalCells * 0.35);
        const uniqueSet = new Set<number>();
        const [rows, cols] = gridSize;
        const updatedCells = Array.from({ length: rows }, () => Array(cols).fill(0));

        while (uniqueSet.size < maxCells) {
            const random = Math.floor(Math.random() * totalCells);
            uniqueSet.add(random);
        }

        cells.forEach((el, i: number) => {
            if (!uniqueSet.has(i)) return;

            const [rowStr, colStr] = el.id.split('_');
            const row = +rowStr;
            const col = +colStr;

            if (
                !isNaN(row) &&
                !isNaN(col) &&
                row >= 0 &&
                row < rows &&
                col >= 0 &&
                col < cols
            ) {
                updatedCells[row][col] = 1;
            }
        });

        dispatch(setCellsActive(updatedCells));
        dispatch(setStart(true));
    };

    const onToggleHelp = (): void => {
        setModal({ show: true, animate: true });
    };

    const onCloseModal = () => {
        closeModalAction(setModal);
    };

    return (
        <div ref={gameElement} data-shape={shape} data-color={color} data-grid={grid ? 'off' : 'on'} data-testid={'container'} className={styles['game']}>
            <Frame ref={frameElement} isElements={cellsActive} />
            <Interface onCreate={onCreate} toggleHelp={onToggleHelp}/>
            <Modal isShow={showModal} classNames={styles.demoPanel} type={'compact'} setClose={onCloseModal}
               content={<Help />}
               footer={
                   <ModalDismissButton color={color} closeModal={onCloseModal}>Закрыть</ModalDismissButton>
               }
            />
        </div>
    );
};

export default Game;
