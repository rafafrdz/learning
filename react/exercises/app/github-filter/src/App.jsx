import AuthorFilter from "./components/AuthorFilter";
import LabelFilter from "./components/LabelFilter";
import MilestoneFilter from "./components/MilestoneFilter";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold m-5">Github Issue filters</h1>
      <div className="flex gap-4 m-5">
        <AuthorFilter />
        <LabelFilter />
        <MilestoneFilter />
      </div>
    </>
  );
}

export default App;
