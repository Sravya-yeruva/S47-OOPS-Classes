class MarkSheet {
  constructor(Name, Telugu, English, Hindi, Maths, Science, Social) {
    console.log(" Student MarkSheet");
    this.Name = Name;
    this.Telugu = Telugu;
    this.English = English;
    this.Hindi = Hindi;
    this.Maths = Maths;
    this.Science = Science;
    this.Social = Social;
    console.log(Name, Telugu, English, Hindi, Maths, Science, Social);
  }

  TotalResult = () => {
    console.log("TotalResult");
    console.log(this.Name);
    console.log(this.Telugu);
    console.log(this.English);
    console.log(this.Hindi);
    console.log(this.Maths);
    console.log(this.Science);
    console.log(this.Social);
  };
}

export default MarkSheet;
