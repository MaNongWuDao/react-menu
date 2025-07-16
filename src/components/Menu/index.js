import { formatMenu } from "./utils";
import React, { Component } from "react";
import Menu from "./Menu";
import { ActiveMenuContext } from "./Context";

export default class MenuIndex extends Component {
  state = {
    value: "",
  };

  updateValue(value) {
    console.log("dianji upldate", value);
    this.setState({ value });
  }

  render() {
    const menuList = formatMenu(this.props.menuList);
    console.log("格式化后的菜单数据：", menuList);
    return (
      <ActiveMenuContext.Provider
        value={{
          value: this.state.value,
          updateValue: this.updateValue.bind(this),
          clickMenu: this.props.clickMenu,
        }}
      >
        <Menu menuList={menuList} />
      </ActiveMenuContext.Provider>
    );
  }
}
