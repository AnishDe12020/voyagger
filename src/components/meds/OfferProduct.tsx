import { PlusIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Currency from "react-currency-formatter";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";

interface FoodItemProps {
  image: string;
  name: string;
  price: number;
  id: string;
}

const OfferProduct: React.FC<FoodItemProps> = ({ name, price, image, id }) => {
  const dispatch = useDispatch();

  const addItemTobasket = () => {
    const product = {
      name,
      price,
      image,
      id,
    };

    dispatch(addToBasket(product));
    toast.success("Added item to basket", {
      style: {
        borderRadius: "100px",
      },
    });
  };

  return (
    <motion.div
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center -mt-2 cursor-pointer w-60 "
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="z-20 bg-white rounded-full drop-shadow-xl"
      >
        <Image
          height={160}
          width={160}
          objectFit="contain"
          src={image}
          alt="salad"
          className="z-10 object-contain w-40 h-40 rounded-full "
        />
      </motion.div>
      <div className="w-52 p-5 bg-white pt-20 -mt-16 rounded-3xl">
        <h3 className="text-lg font-semibold text-center">{name}</h3>
        <div className="flex justify-between">
          <Currency quantity={price} currency="INR" />
          <PlusIcon
            onClick={addItemTobasket}
            className={`h-8 w-8 rounded-full cursor-pointer
              green-gradient text-white`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default OfferProduct;
