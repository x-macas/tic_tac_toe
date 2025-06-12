import React from 'react';
import Square from "./Square"

const Board = () => {
    return(
        <div className = "board-container">
            <div classNmae="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div classNmae="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div classNmae="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    );
};

export default Board;