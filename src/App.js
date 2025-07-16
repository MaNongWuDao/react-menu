import Menu from "./components/Menu/index";
import menuList from "./data/menuData";

function App() {
  function clickMenu(item) {
    // 这里处理用户点击后的逻辑
    console.log(item, "---item");
  }
  return (
    <div className="App">
      <Menu menuList={menuList} clickMenu={clickMenu} />
    </div>
  );
}

export default App;
