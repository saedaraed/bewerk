import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container w-[85%] mx-auto flex justify-between items-center">
      <div className="logo">
        <h4>Bewerk</h4>
      </div>

      {/* navigation */}
      <div className="">
        <ul className="flex gap-4">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Services</Link>
          </li>
          <li>
            <Link href="">Branches</Link>
          </li>
          <li>
            <Link href="">Job</Link>
          </li>
          <li>
            <Link href="">Patner Job</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </div>
      
      {/* lang */}
      <div className="flex gap-1">
        <button>DE</button>
        <span>/</span>
        <button>EN</button>
      </div>
    </div>
  );
};

export default Navbar;
