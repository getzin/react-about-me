import data from "./data/profile.json";

import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <AboutMe data={data} />
    </div>
  );
}

export default App;