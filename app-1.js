function MyButton(){
    return(
        <button> Yo soy un boton </button>
    );
}

// una vez declarado MyButton, se puede anidar en otro componente

export default function MyApp() {
    return (
        <div>
            <h1> Welcome to my app</h1>
            <MyButton/>
        </div>
    );
}

// creando botones con js 

function MyButton () {
    return(
        <button>
            yo soy un un boton 
        </button>
    );
}

export default function MyApp(){
    return(
        <div>
            <h1> Welcome to my app</h1>
            <MyButton />
        </div>
    );
}