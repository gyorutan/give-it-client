// "use client";

// import { api } from "@/helper/api";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import StuffItem from "../../stuff/_components/stuff-item";
// import Link from "next/link";
// import useAuth from "@/store/useAuth";

// interface Stuff {
//   _id: string;
//   title: string;
//   content: string;
//   userId: string;
//   imageUrl: string;
//   createdAt: Date;
// }

// const MyStuffList = () => {
//   const auth = useAuth();
//   const [stuffs, setStuffs] = useState<Stuff[] | null>(null);
//   const fetchMyStuff = async () => {
//     const data = await axios
//       .get(`${api}/posts/myposts`, {
//         headers: {
//           Authorization: auth.token,
//         },
//       })
//       .then((res) => res.data);
//     setStuffs(data.posts);
//   };
//   useEffect(() => {
//     fetchMyStuff();
//   }, []);

//   return (
//     <div>
//       {stuffs?.map((stuff) => (
//           <Link href={`/stuff/${stuff._id}`} key={stuff?._id}>
//             <StuffItem post={stuff} />
//           </Link>
//         ))}
//     </div>
//   );
// };

// export default MyStuffList;
