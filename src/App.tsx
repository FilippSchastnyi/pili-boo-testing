import React from 'react';
import './App.css';
import {Button, Input} from 'pili-boo-ui'

function App() {
    return (
        <div className="App">
            WORK!
            <Button
                color={'green'}
                big>
                Кнопочка
            </Button>
            <Input
            placeholder = 'текст'
            label = 'тестовый текст'
            big>
            </Input>
        </div>
    );
}

export default App;
