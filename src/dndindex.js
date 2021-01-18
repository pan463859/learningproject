import React from 'react';
import ReactDom from 'react-dom';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Board from './pages/DnD/Board'
import { observe } from './pages/DnD/Game'
import '../mock/mock.js';
const root = document.getElementById('app')
observe((knightPosition) =>
    ReactDom.render(
        <DndProvider backend={HTML5Backend}>
            <Board knightPosition={knightPosition} />
        </DndProvider>
        , root)
)