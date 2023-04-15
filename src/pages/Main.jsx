import Sidebar_1 from "../components/Sidebar_1";

export default function Main() {
  return (
    // <div className="drawer drawer-mobile border-2">
    //   <div className="drawer-content">
    //     <div className="w-11/12 mx-auto my-5">
    //       <label
    //         className="btn btn-square btn-ghost drawer-overlay"
    //         htmlFor="my-drawer"
    //       >
    //         X
    //       </label>
    //     </div>
    //   </div>
    //   {/* <Sidebar_1 props={"data"} /> */}
    //   <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-side border-r-2 bg-black">
    //     <label htmlFor="my-drawer" className="drawer-overlay"></label>
    //     <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    //       <li>
    //         <a href="">NathaShop</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
