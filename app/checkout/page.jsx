import BillingDetails from "./billing-details";
import Order from "./order";

const Checkout = () => {
  return (
    <div className="container flex flex-col md:flex-row gap-4 my-12">
      <div className="flex-1">
        <BillingDetails />
      </div>
      <div className="flex-1">
        <Order />
      </div>
    </div>
  );
};

export default Checkout;
