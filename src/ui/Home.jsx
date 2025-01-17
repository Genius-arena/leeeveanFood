import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 text-center sm:my-16 px-4">
      <h1 className=" mb-8 font-semibold text-xl md:text-3xl">
        {/* <h1 className="text-XL text-yellow-400 font-semibold"> */}
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          continue Ordering {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
