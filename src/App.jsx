import AppHeader from './components/AppHeader.jsx'
import AppMain from './components/AppMain.jsx'
import AppBuyBar from './components/AppBuyBar.jsx'
import AppFooter from './components/AppFooter.jsx'

function App() {
  // Fragment: i component sono fratelli, così non aggiungo un div inutile al DOM
  return (
    <>
      <AppHeader />
      <AppMain />
      <AppBuyBar />
      <AppFooter />
    </>
  );
}

export default App