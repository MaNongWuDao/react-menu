export function formatMenu(menuList, level = 1) {
  let currMemnList = menuList.map((item) => {
    const newItem = {
      ...item,
      level,
    };
    if (item.children && item.children.length > 0) {
      newItem.children = formatMenu(item.children, level + 1);
    }
    return newItem;
  });
  return currMemnList;
}
