import Student from './components/students'

function App() {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Leadersboard</h1>
      <Student name='Ahmed' uni='SMIU' score={345} />
      <Student name= 'Ali' uni='NUST' score={342} />
      <Student  name= 'Waleed' uni='NED'score={340} />
      <Student  name= 'Shayan' uni='FUAST' score={346} />
      <Student  name= 'Ahsan' uni='PIAIC' score={341} />
    </div>
  );
}

export default App;
