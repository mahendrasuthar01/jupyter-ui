import {render} from 'react-dom';
import {Jupyter} from '@datalayer/jupyter-react';
import Layers from './../layout/Layers';
import CellComponents from './cell/CellComponents';

import './../App.css';

const div = document.createElement('div');
document.body.appendChild(div);

render(
  <Jupyter collaborative={false} terminals={false}>
    <Layers />
    <CellComponents />
  </Jupyter>,
  div
);
