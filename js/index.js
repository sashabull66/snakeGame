import {game} from "./game.js";

const root = document.querySelector('#root');
const canvas = document.createElement('canvas');
canvas.id = 'canvas';

root.append(canvas)

window.addEventListener('load', () => {
    ;
});

game.start()
