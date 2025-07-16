import React, { Component } from "react";
import MenuItem from "./MenuItem";
import "../../assets/css/menu.css";
export default class Menu extends Component {
  render() {
    let menuList = this.props.menuList;

    return (
      <ul className={"menu " + (this.props.className || "")}>
        {menuList.map((item) => {
          return <MenuItem key={item.title} item={item}></MenuItem>;
        })}
      </ul>
    );
  }
}
