const Nav = () => {
  return (
    <nav className="flex justify-between max-w-screen-2xl m-auto h-[4.5rem]  text-ctYel pt-4">
      <div>
        <img src="/images/brand_logo.png"></img>
      </div>
      <ul className="flex">
        <li className="mr-6 font-semibold">MENU</li>
        <li className="mr-6 font-semibold">LOCATION</li>
        <li className="mr-6 font-semibold">ABOUT</li>
        <li className="mr-6 font-semibold">CONTACT</li>
      </ul>
      <button className="  bg-ctPur font-semibold h-10 w-20 ">Login</button>
    </nav>
  );
};

export default Nav;
