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
  updateDoc,
  where,
} from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";

const ContextProider = (props) => {
  const loginuser = JSON.parse(localStorage.getItem("User"));
  const Mode = localStorage.getItem("Mode");

  const [User, SetUser] = useState(loginuser);

  // User Profile
  const [UserProfile, SetUserProfile] = useState({
    FirstName: null,
    LastName: null,
    PhoneNo: null,
    AddressLine: null,
    State: null,
    City: null,
    ZipCode: null,
  });

  const UserLogin = (user) => {
    console.log(user.user.email);
    SetUser(user);
  };

  // Add User profile
  const AddUserProfile = async () => {
    SetPageloader(true);
    const userEmail = User.user.email;

    const userDocRef = doc(fireDB, "users", userEmail);

    const Profileref = collection(userDocRef, "Profile");
    try {
      // await setDoc(doc(Profileref, UserProfile.id), UserProfile);
      if (UserProfile.id) {
        console.log("User Already Exist");
      } else {
        console.log("User Already Not Exist");
      }

      GetUserProfile();
    } catch (error) {
      console.log(error);
      SetPageloader(false);
    }
  };

  // Get User Profile
  const GetUserProfile = async () => {
    SetPageloader(true);
    const userEmail = User.user.email;

    const userDocRef = doc(fireDB, "users", userEmail);

    const Profileref = collection(userDocRef, "Profile");
    try {
      const querysnap = await getDocs(Profileref);
      console.log(querysnap);
      let cartitems = {};
      querysnap.docs.map(
        (doc) =>
          (cartitems = {
            id: doc.id,
            ...doc.data(),
          })
      );
      console.log(cartitems);
      SetUserProfile(cartitems);
      SetPageloader(false);
    } catch (error) {
      console.log(error);
      SetPageloader(false);
    }
  };

  // Loader
  const [loader, Setloader] = useState(false);
  const [Pageloader, SetPageloader] = useState(false);

  // Dark Mode Method
  const [mode, Setmode] = useState(Mode);

  const toggle = () => {
    if (mode === "dark") {
      Setmode("light");
      localStorage.setItem("Mode", "light");
      document.body.style.backgroundColor = "white";
    } else {
      Setmode("dark");
      localStorage.setItem("Mode", "dark");
      document.body.style.backgroundColor = "rcb (17,24,39)";
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
    console.log(product);

    const userDocRef = doc(fireDB, "users", userEmail);

    const cartCollectionRef = collection(userDocRef, "Cart");

    try {
      // Query is product already exsist
      const q = query(cartCollectionRef, where("id", "==", product.id));
      const querysnapshot = await getDocs(q);

      if (!querysnapshot.empty) {
        const existproduct = querysnapshot.docs[0];
        const existproductdata = existproduct.data();
        const newQty = existproductdata.Qty + (product.Qty || 1);

        GetCart();
        await updateDoc(existproduct.ref, { Qty: newQty });
        toast.success("Product Added Into Cart");
      } else {
        // Add the product to the 'Cart' sub-collection
        await setDoc(doc(cartCollectionRef, product.id), {
          ...product,
          Qty: 1,
        });

        GetCart();
        toast.success("Product Added Into Cart");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Remove Cart
  const DeleteToCart = async (product) => {
    const UserEmail = User.user.email;

    const userdb = doc(fireDB, "users", UserEmail);
    const cartproductref = collection(userdb, "Cart");
    try {
      await deleteDoc(doc(cartproductref, product.id));
      toast.success("Product Removed");
      GetCart();
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
      SetCart(cartitems);
      console.log(cartitems);
      SetPageloader(false);
    } catch (error) {
      toast.error(error.message);
      SetPageloader(false);
    }
  };

  // Order States
  const [Orders, SetOrders] = useState([]);

  // Get Orders
  const GetOrders = async () => {
    SetPageloader(true);
    const DBref = doc(fireDB, "users", User.user.email);
    const ordersref = collection(DBref, "Orders");

    try {
      const snapshot = await getDocs(ordersref);
      const Ordersarr = [];
      snapshot.docs.map((doc) =>
        Ordersarr.push({
          id: doc.id,
          ...doc.data(),
        })
      );

      SetOrders(Ordersarr);
      console.log(Ordersarr);
      SetPageloader(false);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      SetPageloader(false);
    }
  };

  // get Products UseEffect()
  useEffect(() => {
    GetCart();
    getProducts();
    GetUserProfile();
    GetOrders();
  }, [User]);

  return (
    <Context.Provider
      value={{
        UserLogin,
        UserProfile,
        SetUserProfile,
        AddUserProfile,
        GetUserProfile,
        User,
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
        GetCart,
        DeleteToCart,
        Orders,
        GetOrders,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProider;
