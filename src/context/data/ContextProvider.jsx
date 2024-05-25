import { useEffect, useState } from "react";
import Context from "./Context";
import {
  QuerySnapshot,
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";

const ContextProider = (props) => {
  const [mode, Setmode] = useState("light");
  const [loader, Setloader] = useState(false);

  const toggle = () => {
    if (mode === "light") {
      Setmode("dark");
      document.body.style.backgroundColor = "rcb (17,24,39)";
    } else {
      Setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  // Product State
  const [product, Setproduct] = useState({
    title: null,
    brand: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const AddProduct = async () => {
    if (
      product.title == null ||
      product.price == null ||
      product.imageUrl == null ||
      product.category == null ||
      product.description == null
    ) {
      return toast.error("Please fill all fields");
    }
    const productref = collection(fireDB, "Products");
    Setloader(true);
    try {
      await addDoc(productref, product);
      toast.success("Product Add Successfully");
      Setloader(false);
    } catch (error) {
      toast.error(error.message);
      Setloader(false);
    }
  };

  const [Products, SetProducts] = useState([]);

  const getProducts = async () => {
    Setloader(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsdata = [];
        QuerySnapshot.forEach((data) => {
          productsdata.push({ ...data, id: data.id });
        });
        SetProducts(productsdata);
        Setloader(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      Setloader(False);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Context.Provider
      value={{
        mode,
        toggle,
        loader,
        Setloader,
        AddProduct,
        Setproduct,
        product,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProider;
