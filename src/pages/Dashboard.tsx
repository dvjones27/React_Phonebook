import DataTable from '../components/DataTable'
import Background2 from '../assets/images/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg';

function Dashboard() {
  return (
   
    
    <div 
      style={{ backgroundImage: `url(${Background2})`}}
      className="flex flex-row justify-center mx-auto bg-fixed bg-cover"
      >
        <div className='flex place-items-center h-screen' >
          <h3 className='p-5 bg-gray bg-opacity-70 text-black rounded'>
            <DataTable/>
          </h3>
        </div>
      </div>
  )
}

export default Dashboard