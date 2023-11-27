import { useState } from "react"

const Accordion = ({items}) => {
  
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
       setActiveIndex(index === activeIndex ? 0 : index);
    };

    return (
       <div className="font-bold ">
          {items.map((item, index) => (
             <div key={item.title} className="">
                <button onClick={() =>handleClick(index)} className="bg-yellow">{item.title}</button>
                {index === activeIndex && <p>{item.content}</p>}
             </div>
          ))}
       </div>
    );
 }
 export default Accordion;
























// import { Button } from '@chakra-ui/react'
// import { useState } from "react";
// import Publicprofiletop from "./publicprofiletop";
// import anothermoreicon from "../../assets/anothermoreicon.png";
// import thumbup from "../../assets/thumbup.png";
// import Contentcopy from "../../assets/Contentcopy.png";
// import comments from "../../assets/comments.png";
// import close from "../../assets/Close.png";
// import others from "../../assets/otherusers.png";

// const Tabs = ({ children }) => {
//   const [activeTab, setActiveTab] = useState(children[0].props.label);

//   const handleClick = (e, newActiveTab) => {
//     e.preventDefault();
//     setActiveTab(newActiveTab);
//   };

//   return (
//     <div className="  border-black rounded-2xl  ">
//       <div className="flex border-b border-gray-300 ">
//         {children.map((child) => (
//           <button
//             key={child.props.label}
//             className={`${
//               activeTab === child.props.label
//                 ? "border-b-2 border-purple-500 text-[#166BAA]"
//                 : " "
//             } flex-1 flex-row text-gray-700  font-medium py-2`}
//             onClick={(e) => handleClick(e, child.props.label)}
//           >
//             {child.props.label}
//           </button>
//         ))}
//       </div>
//       <div>
//         {children.map((child) => {
//           if (child.props.label === activeTab) {
//             return <div key={child.props.label}> {child.props.children}</div>;
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// };

// const Tab = ({ label, children }) => {
//   return <div label={label}>{children}</div>;
// };

// const PublicProfile = () => {
//   const [follow, setFollow] = useState("Follow");

//   const handleFollow = () => {
//     setFollow("Following");
//   };
//   const [Like, setLikes] = useState("Like");

//   const handleLikes = () => {
//     setLikes("Unlike");
//   };
//   return (
//     <>
//       <Publicprofiletop />

//       <Tabs>
//         <Tab
//           label="Active Connects"
//           className="text-center 
//           text-[12px] font-[Poppins] 
//         leading-4 font-medium"
//         >
//           <div className=" flex items-center space-x-8 px-8 my-3">
//             <div className=" flex left-5">
//               <div className="user-img">
//                 <img src={others} alt="user-img" className="h-8 w-8" />
//               </div>

//               <div className="">
//                 <div
//                   className="text-[12px] font-[Poppins] 
//             leading-5
//              font-medium px-4"
//                 >
//                   <p className=""> Oladele Ahmad</p>
//                 </div>
//                 <div
//                   className="text-[12px] font-[Poppins] 
//             leading-4 
//             font-normal px-4 py-2"
//                 >
//                   <p> 3mins ago</p>
//                 </div>
//               </div>
//               <div
//                 className=" left-3 text-[#1F96EF] 
//             text-[12px] font-[Poppins] leading-5 
//             font-medium align-right"
//               >
//                 <p onClick={handleFollow}>{follow}</p>
//               </div>
//             </div>
//             <div className="right-[30px] absolute"></div>
//           </div>

//           <div className="space-x-8 px-8 my-3">
//             <p
//               className="text-gray-700  h-[60px] text-[14px]
//              font-[Poppins] leading-5 font-bold text-[#B2B2B2]
//              "
//             >
//               Hi community, I will be travelling from Oshogbo to Lagos on March
//               10,Kindly message me if you have any items to be delivered to this
//               location or its axis.
//             </p>
//           </div>

//           <div
//             className="actions 
//             space-x-[55px]  my-3 flex flex-row justify-center"
//           >
//             <div className="">
//               <span className=" flex">
//                 <img
//                   src={thumbup}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//                 <p className="text-[#DA2525] pl-1 text-[Poppins] text-[12px] leading-4 font-medium">
//                   3
//                 </p>
//               </span>
//               <p className="justify-start" onClick={handleLikes}>
//                 {Like}
//               </p>
//             </div>
//             <div className="">
//               <span className="like-number flex">
//                 <img
//                   src={comments}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//                 <p className="text-[#DA2525] pl-1 text-[Poppins] text-[12px] leading-4 font-medium ">
//                   3
//                 </p>
//               </span>
//               <p className="  ">Comments</p>
//             </div>
//             <div className="">
//               <span className=" flex">
//                 <img
//                   src={Contentcopy}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//               </span>
//               <p className="justify-start">Copy</p>
//             </div>
//             <div className="">
//               <span className=" flex">
//                 <img
//                   src={close}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//               </span>
//               <p className=" justify-start">Hide</p>
//             </div>
//           </div>

//           <div className=" flex items-center space-x-8 px-8 my-3">
//             <div className=" flex left-5">
//               <div className="user-img">
//                 <img src={others} alt="user-img" className="h-8 w-8" />
//               </div>

//               <div className="">
//                 <div
//                   className="text-[12px] font-[Poppins] 
//             leading-5
//              font-medium px-4"
//                 >
//                   <p className=""> Oladele Ahmad</p>
//                 </div>
//                 <div
//                   className="text-[12px] font-[Poppins] 
//             leading-4 
//             font-normal px-4 py-2"
//                 >
//                   <p> 3mins ago</p>
//                 </div>
//               </div>
//               <div
//                 className=" left-3 text-[#1F96EF] 
//             text-[12px] font-[Poppins] leading-5 
//             font-medium align-right"
//               >
//                 <p onClick={handleFollow}>{follow}</p>
//               </div>
//             </div>
//             <div className="right-[30px] absolute">
//               <img src={anothermoreicon} alt="moreicon" className="h-8 w-8" />
//             </div>
//           </div>

//           <div className="space-x-8 px-8 my-3">
//             <p
//               className="text-gray-700  h-[60px] text-[14px]
//              font-[Poppins] leading-5 font-bold text-[#B2B2B2]
//              "
//             >
//               Hi community, I will be travelling from Oshogbo to Lagos on March
//               10,Kindly message me if you have any items to be delivered to this
//               location or its axis.
//             </p>
//           </div>

//           <div
//             className="actions 
//             space-x-[55px]  my-3 flex flex-row justify-center"
//           >
//             <div className="">
//               <span className=" flex">
//                 <img
//                   src={thumbup}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//                 <p className="text-[#DA2525] pl-1 text-[Poppins] text-[12px] leading-4 font-medium">
//                   3
//                 </p>
//               </span>
//               <p className="justify-start">Like</p>
//             </div>
//             <div className="">
//               <span className="like-number flex">
//                 <img
//                   src={comments}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//                 <p className="text-[#DA2525] pl-1 text-[Poppins] text-[12px] leading-4 font-medium ">
//                   3
//                 </p>
//               </span>
//               <p className="  ">Comments</p>
//             </div>
//             <div className="">
//               <span className=" flex">
//                 <img
//                   src={Contentcopy}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//               </span>
//               <p className="justify-start">Copy</p>
//             </div>
//             <div className="">
//               <span className=" flex">
//                 <img
//                   src={close}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//               </span>
//               <p className=" justify-start">Hide</p>
//             </div>
//           </div>

//           <div className=" flex items-center space-x-8 px-8 my-3">
//             <div className=" flex left-5">
//               <div className="user-img">
//                 <img src={others} alt="user-img" className="h-8 w-8" />
//               </div>

//               <div className="">
//                 <div
//                   className="text-[12px] font-[Poppins] 
//             leading-5
//              font-medium px-4"
//                 >
//                   <p className=""> Oladele Ahmad</p>
//                 </div>
//                 <div
//                   className="text-[12px] font-[Poppins] 
//             leading-4 
//             font-normal px-4 py-2"
//                 >
//                   <p> 3mins ago</p>
//                 </div>
//               </div>
//               <div
//                 className=" left-3 text-[#1F96EF] 
//             text-[12px] font-[Poppins] leading-5 
//             font-medium align-right"
//               >
//                 <p onClick={handleFollow}>{follow}</p>
//               </div>
//             </div>
//             <div className="right-[30px] absolute">
//               <img src={anothermoreicon} alt="moreicon" className="h-8 w-8" />
//             </div>
//           </div>

//           <div className="space-x-8 px-8 my-3">
//             <p
//               className="text-gray-700  h-[60px] text-[14px]
//              font-[Poppins] leading-5 font-bold text-[#B2B2B2]
//              "
//             >
//               Hi community, I will be travelling from Oshogbo to Lagos on March
//               10,Kindly message me if you have any items to be delivered to this
//               location or its axis.
//             </p>
//           </div>

//           <div
//             className="actions 
//             space-x-[55px]  my-3 flex flex-row justify-center"
//           >
//             <div className="">
//               <span className=" flex">
//                 <img
//                   src={thumbup}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//                 <p className="text-[#DA2525] pl-1 text-[Poppins] text-[12px] leading-4 font-medium">
//                   3
//                 </p>
//               </span>
//               <p className="justify-start">Like</p>
//             </div>
//             <div className="">
//               <span className="like-number flex">
//                 <img
//                   src={comments}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//                 <p className="text-[#DA2525] pl-1 text-[Poppins] text-[12px] leading-4 font-medium ">
//                   3
//                 </p>
//               </span>
//               <p className="  ">Comments</p>
//             </div>
//             <div className="">
//               <span className=" flex">
//                 <img
//                   src={Contentcopy}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//               </span>
//               <p className="justify-start">Copy</p>
//             </div>
//             <div className="">
//               <span className=" flex">
//                 <img
//                   src={close}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//               </span>
//               <p className=" justify-start">Hide</p>
//             </div>
//           </div>

//           <div className=" flex items-center space-x-8 px-8 my-3">
//             <div className=" flex left-5">
//               <div className="user-img">
//                 <img src={others} alt="user-img" className="h-8 w-8" />
//               </div>

//               <div className="">
//                 <div
//                   className="text-[12px] font-[Poppins] 
//             leading-5
//              font-medium px-4"
//                 >
//                   <p className=""> Oladele Ahmad</p>
//                 </div>
//                 <div
//                   className="text-[12px] font-[Poppins] 
//             leading-4 
//             font-normal px-4 py-2"
//                 >
//                   <p> 3mins ago</p>
//                 </div>
//               </div>
//               <div
//                 className=" left-3 text-[#1F96EF] 
//             text-[12px] font-[Poppins] leading-5 
//             font-medium align-right"
//               >
//                 <p onClick={handleFollow}>{follow}</p>
//               </div>
//             </div>
//             <div className="right-[30px] absolute">
//               <img src={anothermoreicon} alt="moreicon" className="h-8 w-8" />
//             </div>
//           </div>

//           <div className="space-x-8 px-8 my-3">
//             <p
//               className="text-gray-700  h-[60px] text-[14px]
//              font-[Poppins] leading-5 font-bold text-[#B2B2B2]
//              "
//             >
//               Hi community, I will be travelling from Oshogbo to Lagos on March
//               10,Kindly message me if you have any items to be delivered to this
//               location or its axis.
//             </p>
//           </div>

//           <div
//             className="actions 
//             space-x-[55px]  my-3 flex flex-row justify-center"
//           >
//             <div className="">
//               <span className=" flex">
//                 <img
//                   src={thumbup}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//                 <p className="text-[#DA2525] pl-1 text-[Poppins] text-[12px] leading-4 font-medium">
//                   3
//                 </p>
//               </span>
//               <p className="justify-start">Like</p>
//             </div>
//             <div className="">
//               <span className="like-number flex">
//                 <img
//                   src={comments}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//                 <p className="text-[#DA2525] pl-1 text-[Poppins] text-[12px] leading-4 font-medium ">
//                   3
//                 </p>
//               </span>
//               <p className="  ">Comments</p>
//             </div>
//             <div className="">
//               <span className=" flex">
//                 <img
//                   src={Contentcopy}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//               </span>
//               <p className="justify-start">Copy</p>
//             </div>
//             <div className="">
//               <span className=" flex">
//                 <img
//                   src={close}
//                   alt="thumbup"
//                   className=" w-6 h-6 text-[#8E8E8E]"
//                 />
//               </span>
//               <p className=" justify-start">Hide</p>
//             </div>
//           </div>
//         </Tab>
//         <Tab
//           label="Dropper Requests"
//           className=" 
//         text-center  text-[12px] 
//         font-[Poppins] leading-4 font-medium"
//         >
//           <div className="py-3">
//             <h2 className="text-md font-medium mb-2">Dropper Requests</h2>
//             <p className="text-gray-700">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
//               mollitia, molestiae quas vel sint commodi repudiandae consequuntur
//               voluptatum laborum numquam blanditiis harum quisquam eius sed odit
//               fugiat iusto fuga praesentium optio, eaque rerum! Provident
//               similique accusantium nemo autem. Veritatis obcaecati tenetur iure
//               eius earum ut molestias architecto voluptate aliquam nihil,
//               eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
//               tenetur error, harum nesciunt ipsum debitis quas aliquid.
//               Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
//               laudantium molestias eos sapiente officiis modi at sunt excepturi
//               expedita sint? Sed quibusdam recusandae alias error harum maxime
//               adipisci amet laborum.
//             </p>
//           </div>
//         </Tab>

//         <Tab
//           label="Picker Replies"
//           className="h-4 w-[81px] text-center  text-[12px] font-[Poppins] leading-4 font-medium"
//         >
//           <div className="py-3">
//             <h2 className="text-md font-medium mb-2">Picker Replies</h2>
//             <p className="text-gray-700">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
//               mollitia, molestiae quas vel sint commodi repudiandae consequuntur
//               voluptatum laborum numquam blanditiis harum quisquam eius sed odit
//               fugiat iusto fuga praesentium optio, eaque rerum! Provident
//               similique accusantium nemo autem. Veritatis obcaecati tenetur iure
//               eius earum ut molestias architecto voluptate aliquam nihil,
//               eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
//               tenetur error, harum nesciunt ipsum debitis quas aliquid.
//               Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
//               laudantium molestias eos sapiente officiis modi at sunt excepturi
//               expedita sint? Sed quibusdam recusandae alias error harum maxime
//               adipisci amet laborum.
//             </p>
//           </div>
//         </Tab>

//         <Tab
//           label="Reviews"
//           className="h-4 w-[48px] text-center
//           text-[#166BAA] text-[12px] font-[Poppins]
//            leading-4 font-medium"
//         >
//           <div className="py-3 ">
//             <h2 className="text-md font-medium mb-2">Reviews</h2>
//             <p className="text-gray-700">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
//               mollitia, molestiae quas vel sint commodi repudiandae consequuntur
//               voluptatum laborum numquam blanditiis harum quisquam eius sed odit
//               fugiat iusto fuga praesentium optio, eaque rerum! Provident
//               similique accusantium nemo autem. Veritatis obcaecati tenetur iure
//               eius earum ut molestias architecto voluptate aliquam nihil,
//               eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
//               tenetur error, harum nesciunt ipsum debitis quas aliquid.
//               Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
//               laudantium molestias eos sapiente officiis modi at sunt excepturi
//               expedita sint? Sed quibusdam recusandae alias error harum maxime
//               adipisci amet laborum.
//             </p>
//           </div>
//         </Tab>
//       </Tabs>
//     </>
//   );
// };

// // eslint-disable-next-line
// export default PublicProfile;
