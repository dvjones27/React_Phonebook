import Background from '../assets/videos/blackPhoneOnLaptop.mp4'

function About() {
    return (
      <div 
      style={{ backgroundImage: `url(${Background})`}} 
      className="flex flex-row justify-center mx-auto bg-cover bg-fixed "
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-30 text-black rounded'>About Page</h3>
        </div>
        
        <br/>
        <div className='flex place-items-center h-screen'>
          <p className='p-5 bg-white bg-opacity-30 text-black rounded'>This is the phonebook. You are able to enter your infomraiton here and create a phonebook. Head over to the <a href="./Dashboard">Dashboard</a> and get started creating your phonebook.</p>
        </div>
        
      </div>
    )
  }
  
  export default About