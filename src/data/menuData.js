function getImageUrl(imageName) {
  return require(`../assets/images/menu/${imageName}`);
}
const menuList = [
  {
    title: "菜单一级",
    icon: getImageUrl("menu-1.svg"),
    activeIcon: getImageUrl("menu-1-on.svg"),
    children: [
      {
        title: "菜单二级1",
        icon: getImageUrl("menu-1-1.svg"),
        activeIcon: getImageUrl("menu-1-1-on.svg"),
      },
      {
        title: "菜单二级2",
        icon: getImageUrl("menu-1-2.svg"),
        activeIcon: getImageUrl("menu-1-2-on.svg"),
      },
      {
        title: "菜单二级3",
        icon: getImageUrl("menu-1-3.svg"),
        activeIcon: getImageUrl("menu-1-3-on.svg"),
        children: [
          {
            title: "菜单三级1",
            icon: getImageUrl("menu-1-3-1.svg"),
            activeIcon: getImageUrl("menu-1-3-1-on.svg"),
          },
          {
            title: "菜单三级2",
            icon: getImageUrl("menu-1-3-2.svg"),
            activeIcon: getImageUrl("menu-1-3-2-on.svg"),
          },
        ],
      },
    ],
  },
  {
    title: "菜单一级2",
    icon: getImageUrl("menu-2.svg"),
    activeIcon: getImageUrl("menu-2-on.svg"),
    children: [
      {
        title: "菜单二级2-1",
        icon: getImageUrl("menu-2-1.svg"),
        activeIcon: getImageUrl("menu-2-1-on.svg"),
      },
    ],
  },
  {
    title: "菜单一级3",
    icon: getImageUrl("menu-3.svg"),
    activeIcon: getImageUrl("menu-3-on.svg"),
  },
  {
    title: "菜单一级4",
    icon: getImageUrl("menu-4.svg"),
    activeIcon: getImageUrl("menu-4-on.svg"),
  },
];

export default menuList;
