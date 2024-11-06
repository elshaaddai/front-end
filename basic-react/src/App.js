import Header from './components/header/index.js';
import Hero from './components/hero/index.js';
import Clients from './components/clients/index.js';
import Features from './components/features/index.js';
import Pricing from './components/pricing/index.js';
import Footer from './components/footer/index.js';

const App = () => {
  return (
  <div className="body-wrap">
    <Header />
    <main className="site-content">
    <Hero />
    <Clients />
    <Features />
    <Pricing />
    </main>
    <Footer />
  </div>
  )
};
export default App;


































{/* 
// import Hello from './component/hello'
// import World from './component/world'
// import Users from './component/Users'
// // hooks merubah component menjadi functional component
// import {useState} from 'react';

// const App = () => { */}
{/* //   // variable biasa
//   // let hai = "hello world";

//   // variable state
//   const [hello, setHello] = useState("Selamat Datang");

//   const handleClick = () => { */}
{/* //     setHello("Welcome")
//     console.log(hello)
//   }
//   return(
//     // JSX
//     // div adalah parent element
//     // <></>disebut fragment
//     <div> 
//       <h1>{hello}</h1>
//       <h1>Hello React</h1>
//       <Hello text="Hello 1" number={20}/>
//       <Hello text="Hello 2" number={30}/>
//       <World />
//       <Users />

//       <button onClick={handleClick}>button</button>
//     </div>
//   );
// };

// export default App; */}
