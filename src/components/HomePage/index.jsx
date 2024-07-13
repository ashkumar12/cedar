import './HomePage.scss';
import { PAGES } from '../../constants';

const HomePage = ({ amountDue, setPageNum }) => {
  return (
    <div className="homepage">
      <div className="homepage--body">
        <div className="homepage--header">Hi, Taylor</div>
        <div className="homepage--text">
          You have 6 medical bills ready from ABC Health System. You can pay
          your bills here or verify your identity to view full bill details.
        </div>
      </div>
      <div className="total-due">
        <div className="total-due--body">
          <div className="balance">
            <span>Total Due</span>
            <div className="money">{amountDue}</div>
          </div>
          <button className="pay-btn" onClick={() => setPageNum(PAGES.PAYMENT)}>
            Pay total
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
