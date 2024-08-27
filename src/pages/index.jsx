// Search hiih - useState map filter

import { useState } from "react";
import css from "styled-jsx/css";

// export default function Home() {
//   const fruits = ["apple", "banana", "cherry", "cucumber"];
//   const [searchValue, setSearchValue] = useState("");
//   const filteredFruits = fruits.filter((fruit) => fruit == searchValue);

//   const handleSearch = (event) => {
//     setSearchValue(event.target.value);
//   };

//   return (
//     <div className="flex justify-center items-center w-full h-screen">
//       <div>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchValue}
//           onChange={handleSearch}
//         />

//         <ul>
//           {filteredFruits.map((fruit, index) => (
//             <li key={index}>{fruit}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

export default function App() {
  const [value, setValue] = useState("");

  const objectList = [
    { title: "HTML Article 6", tag: "html" },
    { title: "CSS Basics 6", tag: "css" },
    { title: "HTML Article 2", tag: "html" },
    { title: "CSS Basics 3", tag: "css" },
    { title: "HTML Article 3", tag: "html" },
    { title: "JavaScript Guide 3", tag: "javascript" },
    { title: "CSS Basics 4", tag: "css" },
    { title: "JavaScript Guide 1", tag: "javascript" },
    { title: "HTML Article 4", tag: "html" },
    { title: "CSS Basics 1", tag: "css" },
    { title: "JavaScript Guide 4", tag: "javascript" },
    { title: "HTML Article 1", tag: "html" },
    { title: "CSS Basics 2", tag: "css" },
    { title: "HTML Article 5", tag: "html" },
    { title: "JavaScript Guide 2", tag: "javascript" },
    { title: "CSS Basics 5", tag: "css" },
    { title: "JavaScript Guide 6", tag: "javascript" },
    { title: "HTML Article 7", tag: "html" },
    { title: "CSS Basics 7", tag: "css" },
    { title: "JavaScript Guide 5", tag: "javascript" },
  ];

  const filteredHtml = objectList.filter((html) => html.tag == value);
  //   const filteredCss = objectList.filter((css) => css.tag == value);
  //   const filteredJavascript = objectList.filter(
  //     (javascript) => javascript.tag == value
  //   );

  const handleTag = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen ">
      {/* {filteredHtml.map((html) => {
        return <p>{html.title}</p>;
      })}
      {filteredCss.map((css) => {
        return <p>{css.title}</p>;
      })}
      {filteredJavascript.map((javascript) => {
        return <p>{javascript.title}</p>;
      })} */}
      <select name="" onChange={handleTag} id="">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
      </select>
      <div>
        {filteredHtml.map((html) => {
          return <p>{html.title}</p>;
        })}
      </div>
    </div>
  );
}
