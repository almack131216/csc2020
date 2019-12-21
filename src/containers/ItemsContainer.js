import React from "react";
import ItemsFilter from "./ItemsFilter";
import ItemsList from "../components/ItemsList";
import { withItemConsumer } from "../Context";
import Loading from "../components/Loading";

function ItemsContainer({ context }) {
  const { loading, sortedItems, items } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ItemsFilter items={items} />
      <ItemsList items={sortedItems} />
    </>
  );
}

export default withItemConsumer(ItemsContainer);

// import React from "react";
// import ItemsFilter from "./ItemsFilter";
// import ItemsList from "./ItemsList";
// import { ItemConsumer } from "../Context";
// import Loading from "../components/Loading";

// export default function ItemsContainer() {
//   return (
//     <ItemConsumer>
//       {value => {
//         console.log("[ItemsContainer] value...", value);
//         const { loading, sortedItems, items } = value;

//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             hello from items container
//             <ItemsFilter items={items} />
//             <ItemsList items={sortedItems} />
//           </div>
//         );
//       }}
//     </ItemConsumer>
//   );
// }
