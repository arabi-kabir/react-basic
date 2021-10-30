import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Service";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Analysis from "./components/Analysis/Analysis";

function App() {
    return (
        <div>
            <TopNavigation />
            <TopBanner />
            <Services />
            <Analysis />
        </div>
    );
}

export default App;
