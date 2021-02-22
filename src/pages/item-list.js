import React from "react";
import "../components/styles/itemlist.css";
import { Redirect } from "react-router-dom";

const elements = [
  {
    name: "item 1",
    price: "10 dkk",
    description: "this is an item",
  },
  {
    name: "item 2",
    price: "15 dkk",
    description: "this is an item",
  },
  {
    name: "item 3",
    price: "100 dkk",
    description: "this is an item",
  },
  {
    name: "item 4",
    price: "1000 dkk",
    description: "this is an item",
  },
];

const items = [];
const details = [];

for (const [index, value] of elements.entries()) {
  items.push(
    <div className="item-list" key={index}>
      <div className="item">
        <div className="name">{value.name}</div>
        <div>{value.price}</div>
        <div>{value.description}</div>
      </div>
      <div className="check-box">
        <label className="checkbox-container">
          <input
            type="checkbox"
            className="input-box"
            name="checkbox"
            value={[value.name, value.price, value.description]}
          ></input>
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
}

function takeCheckedItems() {
  var checkboxes = document.getElementsByName("checkbox");

  for (var checkbox of checkboxes) {
    if (checkbox.checked) {
      const itemSplit = checkbox.value.split(",");
      const detail = {
        name: itemSplit[0],
        price: itemSplit[1],
        description: itemSplit[2],
        detail: "this is the detail for the item : " + itemSplit[0],
      };
      details.push(
        <div className="item-list" key={detail.name}>
          <div className="item">
            <div className="name">{detail.name}</div>
            <div>{detail.price}</div>
            <div>{detail.description}</div>
            <div>{detail.detail}</div>
          </div>
        </div>
      );
    }
    checkbox.checked = false;
  }

  alert("Your items have been added");
}

function ItemList(props) {
  if (sessionStorage.getItem("user") === null) return <Redirect to="/login" />;
  else {
    if (props.name === "details") {
      if (details.length === 0)
        return (
          <div>
            <h1>No items found</h1>
          </div>
        );
      else {
        return <div>{details}</div>;
      }
    }
    return (
      <div className="item-container">
        {items}
        <div className="submit-container">
          <button className="submit-button" onClick={() => takeCheckedItems()}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default ItemList;
