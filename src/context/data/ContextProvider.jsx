import { useEffect, useState } from "react";
import Context from "./Context";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { json } from "react-router-dom";

const ContextProider = (props) => {
  const User = JSON.parse(localStorage.getItem("User"));

  // Loader
  const [loader, Setloader] = useState(false);
  const [Pageloader, SetPageloader] = useState(false);

  // Dark Mode Method
  const [mode, Setmode] = useState("light");

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

  // Add Product
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
      window.location.href = "/dashboard";
    } catch (error) {
      toast.error(error.message);
      Setloader(false);
    }
    Setproduct("");
  };

  // Products State

  const [products, Setproducts] = useState([]);

  // get Products

  const getProducts = async () => {
    SetPageloader(true);
    try {
      const q = query(collection(fireDB, "Products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsdata = [];
        QuerySnapshot.forEach((doc) => {
          productsdata.push({ ...doc.data(), id: doc.id });
        });
        Setproducts(productsdata);
        SetPageloader(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      SetPageloader(False);
    }
  };

  // get Products UseEffect()
  useEffect(() => {
    getProducts();
  }, []);

  // Edit Produst

  const Editproduct = (item) => {
    Setproduct(item);
  };

  // Update Product
  const Updateproduct = async () => {
    Setloader(true);

    try {
      await setDoc(doc(fireDB, "Products", product.id), product);
      toast.success("Product Update Successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
      getProducts();
      Setloader(false);
      Setproduct("");
    } catch (error) {
      toast.error(error.message);
      Setloader(false);
    }
  };

  // Delete Product

  const Deleteproduct = async (item) => {
    Setloader(true);
    try {
      await deleteDoc(doc(fireDB, "Products", item.id));
      toast.success("Product Delete Successfully");
      Setloader(false);
      getProducts();
    } catch (error) {
      toast.error(error.message);
      Setloader(false);
    }
  };

  // Cart States
  const { Cart, SetCart } = useState([]);

  // Add To Cart
  const AddtoCart = async (product) => {
    if (!User) {
      toast.warning("Please Login First");
      setTimeout(() => {
        window.location.href = "/login";
      }, 500);
    }
    const userEmail = User.user.email;
    console.log(User);

    const userDocRef = doc(fireDB, "users", userEmail);

    const cartCollectionRef = collection(userDocRef, "Cart");

    try {
      // Add the product to the 'Cart' sub-collection
      await addDoc(cartCollectionRef, product);
      toast.success("Product Added Into Cart");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Context.Provider
      value={{
        mode,
        toggle,
        loader,
        Pageloader,
        Setloader,
        AddProduct,
        Setproduct,
        product,
        products,
        Editproduct,
        Updateproduct,
        Deleteproduct,
        AddtoCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProider;
