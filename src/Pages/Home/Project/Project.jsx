import { useEffect, useState } from "react";


const Project = () => {
     const [selectedOption, setSelectedOption] = useState('');
     const [caregory, setCategory] = useState([]);
     useEffect(() => {

          fetch('category.json').then(res => res.json()).then(data => setCategory(data))

     }, [])

     const handleSelectChange = (event) => {
          setSelectedOption(event.target.value);
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          const from = e.target;
          const name = from.name.value;
          const client = from.client.value;
          const Link = from.Link.value;
          const server = from.server.value;
          const image = from.image.value;
          const data = { date: new Date, name, client, server, Link, image, category: selectedOption }

          fetch('https://myportfolio-fawn-five.vercel.app/project', {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
          }).then(result=>{
                console.log(result);
                if(result){
                    from.reset();
                     alert("post success")
                }
          })
          console.log(data);

     }

     return (
          <div className=" mt-10  max-w-[1000px] mx-auto  shadow-lg p-1 md:p-4">
               <h1 className=" text-2xl font-semibold my-8 text-center text-[#582ad8]"> Upload Project</h1>

               <form onSubmit={handleSubmit}>
                    <div>

                         <div className=" boxshadow p-2 rounded-md w-full my-2">
                              <label htmlFor="Name" className=" text-xl font-semibold  mt-3" >Project Name:</label>
                              <input required className="mt-2 w-full     outline rounded-lg outline-[#582ad8] p-2 text-lg font-semibold " type="text" placeholder=" Project name " name="name" id="" />
                         </div>
                         <div className=" boxshadow p-2 rounded-md w-full my-2">
                              <label htmlFor="Name" className=" text-xl font-semibold  mt-3" >Live site</label>
                              <input required className="mt-2 w-full     outline rounded-lg outline-[#582ad8] p-2 text-lg font-semibold " type="text" placeholder=" Live link " name="Link" id="" />
                         </div>
                         <div className=" boxshadow p-2 rounded-md w-full my-2">
                              <label htmlFor="Name" className=" text-xl font-semibold  mt-3" >client site</label>
                              <input required className="mt-2 w-full     outline rounded-lg outline-[#582ad8] p-2 text-lg font-semibold " type="text" placeholder=" client site " name="client" id="" />
                         </div>
                         <div className=" boxshadow p-2 rounded-md w-full my-2">
                              <label htmlFor="Name" className=" text-xl font-semibold  mt-3" >Services site</label>
                              <input required className="mt-2 w-full     outline rounded-lg outline-[#582ad8] p-2 text-lg font-semibold " type="text" placeholder=" server site " name="server" id="" />
                         </div>
                         <div className=" boxshadow p-2 rounded-md w-full my-2">
                              <label htmlFor="Name" className=" text-xl font-semibold  mt-3" > image</label>
                              <input required className="mt-2 w-full     outline rounded-lg outline-[#582ad8] p-2 text-lg font-semibold " type="text" placeholder=" image " name="image" id="" />
                         </div>
                         <div>
                              <label htmlFor="Name" className=" text-xl font-semibold  mt-3" > Category</label>
                              <select className="mt-2 w-full     outline rounded-lg outline-[#582ad8] p-2 text-lg font-semibold " value={selectedOption} onChange={handleSelectChange}>
                                   {
                                        caregory?.map(item => <option key={item._id} value={item?.category}>{item?.category}</option>)
                                   }

                              </select>
                         </div>

                         <div className="  ">
                              <button type="submit" className=" w-full  block buttonBox boxshadow my-3 text-center text-2xl "> Submit Project </button>
                         </div>
                    </div>
               </form>

          </div>
     );
};

export default Project;