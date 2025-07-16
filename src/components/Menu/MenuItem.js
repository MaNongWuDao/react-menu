import React, { Component } from "react";
import Menu from "./Menu";
import { ActiveMenuContext } from "./Context";

export default class MenuItem extends Component {
  state = {
    isShowSub: false,
  };
  itemClick() {
    this.setState(
      {
        isShowSub: !this.state.isShowSub,
      },
      () => {
        const { updateValue, clickMenu } = this.context;
        updateValue(this.props.item.title);
        clickMenu(this.props.item);
      }
    );
  }
  static contextType = ActiveMenuContext;
  render() {
    const { item } = this.props;
    const isChildMenu = item.children && item.children.length > 0;
    const showToggleIcon = isChildMenu ? "show" : "hide";
    const isExpand = this.state.isShowSub && isChildMenu; // 子菜单是否是展开状态
    const isActiveItem = this.context.value === item.title && !isChildMenu;
    console.log(isActiveItem, item.level);
    return (
      <ActiveMenuContext.Consumer>
        {() => {
          return (
            <li>
              <p
                className={
                  isExpand || isActiveItem
                    ? showToggleIcon + " active"
                    : showToggleIcon
                }
                onClick={this.itemClick.bind(this)}
                style={{ paddingLeft: item.level * 20 + "px" }}
              >
                <i
                  className={"menu-icon"}
                  style={{
                    backgroundImage: `url(${
                      isExpand || isActiveItem ? item.activeIcon : item.icon
                    })`,
                  }}
                ></i>
                {item.title}
              </p>
              {isChildMenu && (
                <Menu
                  menuList={item.children}
                  className={this.state.isShowSub ? "show" : "hide"}
                />
              )}
            </li>
          );
        }}
      </ActiveMenuContext.Consumer>
    );
  }
}
