import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';


const MainHeader = (props) => {


  return (
    <header className={classes.header}>
      <div>
      <h1>Shopping App</h1>
      </div>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
