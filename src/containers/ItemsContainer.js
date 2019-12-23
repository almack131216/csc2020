import React from "react";
import ItemsFilter from "./ItemsFilter";
import ItemsList from "../components/Items/ItemsList";
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
