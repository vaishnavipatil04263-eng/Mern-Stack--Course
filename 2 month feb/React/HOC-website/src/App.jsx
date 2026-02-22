import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsCard from './components/DetailsCard'; //reusable componebt

function App() {

  //javascript
        console.log("vvvvvvvvvvvvvvvvvvvv")
  //veriable
        const name = "hoc"
        let age = 21
        var city = "koregon"
        console.log(name, "name=====>")
        console.log(age, "======>")
  //string
        const a = "hcjjjkkajdanc"
  //array
        const b = ["apple", "banana", "lichi", 1234]
  //object
        const data = {
        name: "vaishu",
        city: "karad"
        };
  //if-else- tarmari oprator
        const fullName = "hoc"
        if (fullName == "hoc") {
            console.log(true)
        } else {
            console.log(false)
        }
 //function
        function addnumber() {
       console.log("click")
  }
 //array of objects
        const carddata = [
    {
      cardtitle: "test 1",
      cardDescriptions: "test Dercriptions 1"

    },

    {
      cardtitle: "test 2",
      cardDescriptions: "test Dercriptions 2"

    },
    
    {
      cardtitle: "test 1",
      cardDescriptions: "test Dercriptions 1"

    },

    {
      cardtitle: "test 2",
      cardDescriptions: "test Dercriptions 2"

    },
   
    {
      cardtitle: "test 1",
      cardDescriptions: "test Dercriptions 1"

    },

    {
      cardtitle: "test 2",
      cardDescriptions: "test Dercriptions 2"

    },
  ];
  console.log(carddata, "=========")
///map
  return (
    <>
      <button className='btn btn-primary' onClick={addnumber}>Click me</button>
      {<div className='container'>
        <div className="row my-2">
           {carddata.map((each) =>
           <div className='col-md-3'>
               {/* cardtitle - props ||cardDescriptions - props || we can add more props also*/}
                <DetailsCard 
                cardtitle={each.cardtitle} 
                cardDescriptions={each.cardDescriptions} />
                 </div>
             )
            }
             </div>
      </div>}
    </>
  );
}

export default App
