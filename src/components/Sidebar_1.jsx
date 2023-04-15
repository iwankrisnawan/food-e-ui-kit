export default function Sidebar_1({ props }) {
  return (
    <div className="drawer-side border-r-2 bg-black">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <li>
          <a href="">NathaShop</a>
        </li>
      </ul>
    </div>
  );
}
