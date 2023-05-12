// import React, {useState} from 'react';
// import ToDoList from "./ToDoList";
// import uniqID from 'uniqid';

// const ToDo = () => {
//     const [todos, setTodos] = useState([])
//     const [value, setValue] = useState('')
//     const [edit, serEdit] = useState(false)
//     const handleChange = (e) => {
//         setValue(e.target.value)
//     }
//     const handleClick = () => {
//         const newToDo = {
//             id: 1,
//             title: value,
//             isDone: false
//         }
//         setTodos([...todos, newToDo])
//     }
//     const deleteToDo = (id) => {
//         setTodos(todos.filter(el => el.id !== id))
//     }
//
//
//     return (
//         <div>
//             <div className="w-[400px] flex items-center mx-auto mt-24">
//                 <input
//                     onChange={handleChange}
//                     type="text" id="simple-search"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required/>
//
//                 <button>
//                     onClick={() => deleteToDo(el.id)}
//                     className="focus:outline-none mt-2 mx-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">add
//                 </button>
//
//             </div>
//             <div className='w-[400px] mt-10 mx-auto bg-amber-500 px-2 py-1 rounded'>
//                 {
//                     todos.map(el => <ToDoList el={el}/>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default ToDo;