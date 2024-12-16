import logo from "./logo.svg";
import "./App.css";
import StudentDetails from "./components/StudentDetails";
import MarkSheet from "./Classes/MarkSheet";

function App() {
  let sravya = new MarkSheet("Vinitha", 88, 99, 88, 77, 66, 99);
  sravya.TotalResult();
  let Indu = new MarkSheet();

  Indu.Name = "Indu";
  Indu.Telugu = "99";
  Indu.English = "88";
  Indu.Hindi = "99";
  Indu.Maths = "100";
  Indu.Science = "88";
  Indu.Social = "100";
  return (
    <div className="App">
      <h1 className="head">OOPS</h1>
      <StudentDetails
        Name="Sravya"
        Telugu="90"
        Hinid="90"
        English="90"
        Maths="80"
        Science="70"
        Social="60"
      ></StudentDetails>
      <StudentDetails
        Name="Indu"
        Telugu="80"
        Hinid="60"
        English="90"
        Maths="100"
        Science="99"
        Social="88"
      ></StudentDetails>
    </div>
  );
}

export default App;
