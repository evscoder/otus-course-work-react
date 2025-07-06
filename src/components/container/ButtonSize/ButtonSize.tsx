import {FC, useRef} from 'react';
import {gameChangeGridSize} from '../../../redux/gameSlice';
import Button from '../../ui/Button/Button';
import {ButtonProps} from '../../../types/types';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import Tooltip from '../../ui/Tooltip/Tooltip';

interface Props extends ButtonProps {
    onCreate: () => void;
    evolveTimeId: any
}

const ButtonSize: FC<Props> = ({title, children, size, color, ...props}) => {
    const {evolve} = useSelector((state: RootState) => state.gameSlice);
    const dispatch = useDispatch();
    const ref = useRef<HTMLButtonElement>(null);

    const onChangeSize = (): void => {
        const button = ref.current as HTMLButtonElement;
        const size = button.dataset.size?.split('_') as string[];

        if (evolve) {
            return;
        }

        dispatch(gameChangeGridSize({
            sizeX: +size[0],
            sizeY: +size[1]
        }));
    };

    return (
        <Tooltip placement={'top'} content={<>{title}</>}>
            <Button {...props} ref={ref} size={size} color={color} onClick={onChangeSize} disabled={evolve}>{children}</Button>
        </Tooltip>
    );
};

export default ButtonSize;
