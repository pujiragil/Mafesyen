import { Button } from "@/components/atoms";

const ProductCheckoutButtons = () => {
  return (
    <div className="flex gap-3.5">
      <Button variant="primary" width="full" className="lg:h-14">
        buy now
      </Button>
      <Button variant="secondary" width="full" className="lg:h-14">
        add to cart
      </Button>
    </div>
  );
};

export default ProductCheckoutButtons
