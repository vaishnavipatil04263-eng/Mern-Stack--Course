import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DetailsCard from './components/DetailsCard';

function App() {
  return (
    <>
   { <div className='container'>
        <div className="row my-2">
          <div className='col-md-3'>
                <DetailsCard  cardtitle="HOC" cardDescriptions="Karad"/>
          </div>
           <div className='col-md-3'>
                <DetailsCard  cardtitle="HOC" cardDescriptions="Pune"/>
          </div>
           <div className='col-md-3'>
               <DetailsCard  cardtitle="Hoc" cardDescriptions="Mumbai"/>
          </div>
           <div className='col-md-3'>
                <DetailsCard  cardtitle="Hoc" cardDescriptions="Thane"/>
          </div>
           </div>
      </div> }
    </>
  );
}

export default App
