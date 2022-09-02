import './App.css';
import MainHeader from "./components/main-header/MainHeader";
import ItemListContainer from "./components/main-content/item-list-container/ItemListContainer";

function App() {
    return (
        <>
            <header>
                <MainHeader/>
            </header>

            <main className='main-content'>
                <nav></nav>
                <aside></aside>
                <section>
                    <ItemListContainer greeting={'categoría'}/>
                </section>
                <footer></footer>
            </main>
        </>
    );
}

export default App;
