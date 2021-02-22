import React from "react";
import ItemList from "./item-list";
import { Redirect } from "react-router-dom";
class ItemDetail extends React.Component {
  render() {
    console.log(sessionStorage.getItem("user"));

    if (sessionStorage.getItem("user") === null)
      return <Redirect to="/login" />;
    return (
      <div>
        <ItemList name="details" />
      </div>
    );
  }
}

function ItemDetails() {
  return (
    <div>
      <ItemDetail />
    </div>
  );
}

export default ItemDetails;
