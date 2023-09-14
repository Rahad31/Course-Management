import "./App.css";
import Courses from "./components/courses/courses";
function App() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center my-12">
          Course Registration
        </h1>
        <section className="mx-[76px]">
          <div>
            <Courses></Courses>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
