import './App.css';
import MainHeader from "./components/main-header/MainHeader";
import ItemListContainer from "./components/main-content/item-list-container/ItemListContainer";
import ItemDetailContainer from "./components/main-content/item-detail-container/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Conocenos from "./components/pages/Conocenos";
import Contacto from "./components/pages/Contacto";

function App() {
    return (
        <BrowserRouter>
            <>
                <header>
                    <MainHeader/>
                </header>

                <main className='main-content'>
                    <section>
                        <Routes>
                            <Route path='/' element={<ItemListContainer greeting='Página principal'/>}/>
                            <Route path='/conocenos' element={<Conocenos/>}/>
                            <Route path='/contacto' element={<Contacto/>}/>
                            <Route path='/categoria' element={<ItemListContainer greeting='Filtrar por categoría'/>}/>
                            <Route path='/promociones' element={<ItemListContainer greeting='Filtrar por promociones'/>}/>
                            <Route path='/item/code' element={<ItemDetailContainer greeting='Detalle item'/>}/>
                        </Routes>
                    </section>
                </main>

                <footer></footer>
            </>
        </BrowserRouter>
    )
}

export default App;
