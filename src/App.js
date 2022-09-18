import './App.css';
import MainHeader from "./components/main-header/MainHeader";
import ItemListContainer from "./components/main-content/item-list-container/ItemListContainer";
import ItemDetailContainer from "./components/main-content/item-detail-container/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Conocenos from "./components/pages/Conocenos";
import Contacto from "./components/pages/Contacto";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import {CartProvider} from "./context/CartContext";

function App() {
    return (
        <BrowserRouter>
            <>
                <CartProvider>
                    <header>
                        <MainHeader/>
                    </header>

                    <main className='main-content'>
                        <section>

                            <Routes>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/conocenos' element={<Conocenos/>}/>
                                <Route path='/contacto' element={<Contacto/>}/>
                                <Route path='/categoria/:coleccion' element={<ItemListContainer/>}/>
                                <Route path='/promociones'
                                       element={<ItemListContainer greeting='Filtrar por promociones'/>}/>
                                <Route path='/producto/:productoId' element={<ItemDetailContainer/>}/>
                                <Route path='/cart' element={<Cart/>}/>
                            </Routes>
                        </section>
                    </main>
                </CartProvider>

                <footer></footer>
            </>
        </BrowserRouter>
    )
}

export default App;
