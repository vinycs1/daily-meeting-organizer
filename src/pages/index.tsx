import {Header} from '../shared/components/header/header'
import {SprintThemeImage} from '../shared/components/sprint-theme/sprint-theme-image'
import {AnwserInput} from '../shared/components/anwser/anwser-input';
import {Result} from '../shared/components/resut/result';


function App() {
    return (
        <div className="App">

                <div style={{display: "flex", flexDirection: "column", alignItems: 'center  '}}>
                    <Header/>
                    <SprintThemeImage/>
                    <AnwserInput/>

                    <Result/>
                </div>
            <div style={{position: "absolute", color: "white" , top: 10, left: 20}}>

                <div>Importante:</div>
                <ul>
                    <li></li>
                    <li>Abrir Insights do Jira</li>
                    <li>Cards estão na coluna correta?</li>
                    <li>PRs possuem revisores?</li>
                    <li>Beber água</li>
                </ul>
            </div>
            <div style={{position: "absolute", color: "yellow" , top: 10, left: "80%"}}>
                <a style={{marginRight: 10}} href={'https://wordwall.net/pt/resource/12875104/roleta-sorteio-de-letras'} target={"_blank"}>Roleta</a>
                <a style={{marginRight: 10}} href={'https://paretoio.atlassian.net/jira/software/c/projects/TESS/boards/6'} target={"_blank"}>Jira Tess</a>
                <a href={'https://paretoio.atlassian.net/jira/software/projects/ALPHA/boards/12'} target={"_blank"}>Jira Alpha</a>
            </div>


        </div>
    );
}

export default App;
