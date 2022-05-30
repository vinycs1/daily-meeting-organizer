import {Header} from '../shared/components/header/header'
import {SprintThemeImage} from '../shared/components/sprint-theme/sprint-theme-image'
import {AnwserInput} from '../shared/components/anwser/anwser-input';
import {Result} from '../shared/components/resut/result';


function App() {
    return (
        <div className="App">
            <div>
                <div style={{display: "flex", flexDirection: "column", alignItems: 'center  '}}>
                    <Header/>
                    <SprintThemeImage/>
                    <AnwserInput/>

                    <Result/>
                </div>
            </div>
        </div>
    );
}

export default App;
