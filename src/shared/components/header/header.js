import image from './header.png';
import Image from 'next/image'

export const Header = () => {
    return (
        <header className="App-header"
                style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: "10px"}}>
            <Image src={image} alt="fonte-de-pokemon" border="0" width="300px" height="118px" style={{
                margin: "20px",
                borderRadius: "10px"
            }}/>
        </header>
    );
};