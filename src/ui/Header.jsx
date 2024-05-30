import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-500 uppercase border-b border-stone-300 px-4 py-3 sm:px-6 font-pizza">
      <Link to="/" className="-tracking-widest">
        Fast React Pizza Co.
      </Link>
      {/* <h1 className="text-xl text-yellow-400 font-semibold">Gregfhk</h1> */}
      <SearchOrder />
     < Username/>
    </header>
  );
}

export default Header;
