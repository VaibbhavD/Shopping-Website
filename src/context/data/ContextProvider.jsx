import { useEffect, useState } from "react";
import Context from "./Context";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
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
    console.log(productref);

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
        console.log(productsdata);
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
  const [Cart, SetCart] = useState([]);

  // Add To Cart
  const AddtoCart = async (product) => {
    if (!User) {
      toast.warning("Please Login First");
      setTimeout(() => {
        window.location.href = "/login";
      }, 500);
      return;
    }
    const userEmail = User.user.email;
    console.log(User);

    const userDocRef = doc(fireDB, "users", userEmail);

    const cartCollectionRef = collection(userDocRef, "Cart");
    const same = Cart.find((pro) => pro.id === product.id);
    console.log(same);
    try {
      // Add the product to the 'Cart' sub-collection
      await addDoc(cartCollectionRef, product);
      toast.success("Product Added Into Cart");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Get Cart

  const GetCart = async () => {
    SetPageloader(true);
    const userEmail = User.user.email;

    const userref = doc(fireDB, "users", userEmail);
    const cartcollection = collection(userref, "Cart");

    try {
      const querysnap = await getDocs(cartcollection);
      const cartitems = [];
      querysnap.docs.map((doc) =>
        cartitems.push({
          id: doc.id,
          Qty: 1,
          ...doc.data(),
        })
      );
      console.log("Cart", cartitems);
      SetCart(cartitems);
      SetPageloader(false);
    } catch (error) {
      toast.error(error.message);
      SetPageloader(false);
    }
  };

  // get Products UseEffect()
  useEffect(() => {
    getProducts();
    GetCart();
  }, []);

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
        Cart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProider;
