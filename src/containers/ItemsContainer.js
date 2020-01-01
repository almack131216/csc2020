import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ItemsFilter from "./ItemsFilter/ItemsFilter";
import ItemsList from "../components/Items/ItemsList";
import { withItemConsumer } from "../Context";
import Loading from "../components/Loading";

function ItemsContainer({ context }) {
  const { loading, sortedItems, items } = context;
  // console.log("[ItemsContainer.js] slug...");

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Breadcrumbs />
      <ItemsFilter items={items} />
      <ItemsList items={sortedItems} />
    </>
  );
}

export default withItemConsumer(ItemsContainer);
