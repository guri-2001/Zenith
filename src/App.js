import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dasboard'
import ActiveClients from './pages/ActiveClients'
import AddClient from './pages/AddClient'
import Allclients from './pages/Allclients'
import NonActiveClients from './pages/NonActiveClients'
import NoPage from './pages/NoPage'
import Calendar from './pages/Calendar'
import Gallery from './pages/Gallery'
import Reminders from './pages/Reminders'
import Notifications from './pages/Notifications'
import AddGallery from './pages/AddGallery'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/activeclients' element={<ActiveClients />} />
        <Route path='/addclients' element={<AddClient />} />
        <Route path='/allclients' element={<Allclients />} />
        <Route path='/nonactiveclients' element={<NonActiveClients />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/reminders' element={<Reminders />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/addgallery' element={<AddGallery />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </div>
  )
}

export default App





// function App() {
//   const [image, setImage] = useState(null);
//   const [allImage, setAllImage] = useState(null);
//   const [name, setName] = useState(null);

  // useEffect(() => {
  //   getImage();
  // }, []);
//   const submitImage = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("image", image);
//     formData.append("name", name);

//     const result = await axios.post(
//       "http://localhost:5000/upload-image",
//       formData,
//       {
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//     console.log(result, "result");
//   };



//   const onInputChange = (e) => {
//     console.log(e.target.files[0]);
//     setImage(e.target.files[0]);
//   };

//   const getImage = async () => {
//     const result = await axios.get("http://localhost:5000/get-image");
//     console.log(result);
//     setAllImage(result.data.data);
//   };

//   return (
//     <div>
//       <form onSubmit={submitImage}>
//         <input type="text" onChange={(e) => setName(e.target.value)} />
//         <input type="file" accept="image/*" onChange={onInputChange}></input>
//         <button type="submit">Submit</button>
//       </form>
//       {allImage == null
//         ? ""
//         : allImage.map((data) => {
//           return (
//             <div>
//               <img
//                 src={require(`./images/${data.image}`)}
//                 height={250}
//                 width={250}
//                 alt=""
//               />
//               <h1>{data.name}</h1>
//             </div>
//           );
//         })}
//     </div>
//   );
// }
// export default App;
