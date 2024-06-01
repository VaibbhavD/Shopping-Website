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
import { Auth, fireDB } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import { getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { AuthActions } from "../../redux/AuthSlice";
import { useDispatch } from "react-redux";

const ContextProider = (props) => {
  const dispatch = useDispatch();

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
    SetUser(user);
    startAutoLogoutTimer();
  };

  // Create New User Profile
  const NewUserProfile = async (user) => {
    console.log(user.email);
    const dbref = doc(fireDB, "users", user.email);
    const profileref = collection(dbref, "Profile");
    try {
      await addDoc(profileref, { ...user });
      SetUser({ user: { ...user } });
      GetUserProfile();
    } catch (error) {
      console.log(error);
    }
  };

  // Update User profile
  const UpdateUserProfile = async () => {
    Setloader(true);
    const userEmail = User.user.email;

    const userDocRef = doc(fireDB, "users", userEmail);

    const Profileref = collection(userDocRef, "Profile");
    try {
      await setDoc(doc(Profileref, UserProfile.id), UserProfile);

      GetUserProfile();
      Setloader(false);
    } catch (error) {
      console.log(error);
      Setloader(false);
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
            email: User.user.email,
            ...doc.data(),
          })
      );
      console.log(cartitems);
      SetUserProfile(cartitems);
      SetPageloader(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      SetPageloader(false);
    }
  };

  // Set Verification email
  const VerifyEmail = async () => {
    const password = JSON.parse(localStorage.getItem("Password"));
    console.log(password);
    try {
      // Sign in the user to get the user object
      const userCredential = await signInWithEmailAndPassword(
        Auth,
        UserProfile.email,
        password
      );
      const user = userCredential.user;

      // Send verification email
      await sendEmailVerification(user);
      toast.success("Verification email sent to " + user.email);
    } catch (error) {
      console.log("Error sending email verification:", error);
      toast.error("Try Again After Some Time");
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
  });

  // Add Product
  const AddProduct = async () => {
    Setloader(true);
    if (
      !product.title ||
      !product.price ||
      !product.imageUrl ||
      !product.category ||
      !product.description
    ) {
      Setloader(false);
      return toast.error("Please fill all fields");
    }

    // Reference to the "All" collection within "Products"
    const allProductsRef = collection(fireDB, "Products", "All", "Items");

    // Reference to the specific category collection within "Products"
    const productCategoryRef = collection(
      fireDB,
      "Products",
      product.category,
      "Items"
    );

    try {
      // Add the product to the "All" collection
      await addDoc(allProductsRef, product);

      // Add the product to the specific category collection
      await addDoc(productCategoryRef, product);

      toast.success("Product added successfully");
      Setloader(false);
      getProducts(); // Refresh the product list
      Setproduct("");
    } catch (error) {
      toast.error(error.message);
      Setloader(false);
    }

    // Reset the product state
    // Setproduct("");
  };

  // Products State

  const [products, Setproducts] = useState([]);

  // get All Products

  const getProducts = async () => {
    SetPageloader(true);
    const collref = doc(fireDB, "Products", "All");
    const all = collection(collref, "Items");

    try {
      const querysnap = await getDocs(all);
      const cartitems = [];
      querysnap.docs.map((doc) =>
        cartitems.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      Setproducts(cartitems);
      SetPageloader(false);

      return () => data;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      SetPageloader(False);
    }
  };

  // all Category states
  const [AllProducts, SetAllProducts] = useState({});

  // Get Furniture Products
  const GetFurnitureProduct = async () => {
    SetPageloader(true);
    const firedb = doc(fireDB, "Products", "furniture");
    const furref = collection(firedb, "Items");

    try {
      const all = await getDocs(furref);
      const cartitems = [];
      all.docs.map((doc) =>
        cartitems.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      console.log("1", AllProducts);
      SetAllProducts((prev) => ({ ...prev, furniture: cartitems }));
      SetPageloader(false);
    } catch (error) {
      console.log(error);
      SetPageloader(false);
    }
  };
  // Get Mobiles Products
  const GetMobileProducts = async () => {
    SetPageloader(true);
    const firedb = doc(fireDB, "Products", "mobiles");
    const furref = collection(firedb, "Items");

    try {
      const all = await getDocs(furref);
      const cartitems = [];
      all.docs.map((doc) =>
        cartitems.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      console.log("2", AllProducts);
      SetAllProducts((prev) => ({ ...prev, mobiles: cartitems }));
      SetPageloader(false);
    } catch (error) {
      console.log(error);
      SetPageloader(false);
    }
  };
  // Get Cloths Products
  const GetCloths = async () => {
    SetPageloader(true);
    const firedb = doc(fireDB, "Products", "cloths");
    const furref = collection(firedb, "Items");

    try {
      const all = await getDocs(furref);
      const cartitems = [];
      all.docs.map((doc) =>
        cartitems.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      console.log("3", AllProducts);
      SetAllProducts((prev) => ({ ...prev, cloths: cartitems }));
      SetPageloader(false);
    } catch (error) {
      console.log(error);
      SetPageloader(false);
    }
  };
  // Get Kitchen Products
  const GetElectronicsProducts = async () => {
    SetPageloader(true);
    const firedb = doc(fireDB, "Products", "electronics");
    const furref = collection(firedb, "Items");

    try {
      const all = await getDocs(furref);
      const cartitems = [];
      all.docs.map(
        (doc) =>
          cartitems.push({
            id: doc.id,
            ...doc.data(),
          }),
        console.log(doc)
      );
      console.log("4", AllProducts);
      SetAllProducts((prev) => ({ ...prev, electronics: cartitems }));
      SetPageloader(false);
    } catch (error) {
      console.log(error);
      SetPageloader(false);
    }
  };

  const GetAllCategory = () => {
    GetFurnitureProduct();
    GetMobileProducts();
    GetElectronicsProducts();
    GetCloths();
  };
  // Edit Produst

  const Editproduct = (item) => {
    Setproduct(item);
  };

  // Update Product
  const Updateproduct = async () => {
    Setloader(true);
    const productCategoryDocRef = doc(
      fireDB,
      "Products",
      product.category,
      "Items",
      product.id
    );

    try {
      await updateDoc(productCategoryDocRef, product);
      toast.success("Product Update Successfully");
      GetAllCategory();
      Setloader(false);
    } catch (error) {
      toast.error(error.message);
      Setloader(false);
    }
    Setproduct("");
  };

  // Delete Product

  const Deleteproduct = async (item) => {
    console.log(item.id);
    Setloader(true);
    const dbref = doc(fireDB, "Products", "All");
    const allref = collection(dbref, "Items");
    try {
      await deleteDoc(doc(allref, item.id));
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
    Setloader(true);
    if (!User) {
      toast.warning("Please Login First");
      Setloader(false);
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
      Setloader(false);
    } catch (error) {
      toast.error(error.message);
      Setloader(false);
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
    // SetPageloader(true);
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
      // SetPageloader(false);
    } catch (error) {
      toast.error(error.message);
      // SetPageloader(false);
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

  // All Users State
  const [AllUsers, SetAllUsers] = useState([]);
  const [AllOrders, SetAllOrders] = useState([]);

  // Get All Users

  const GetAllUsers = async () => {
    SetPageloader(true);
    const firedb = collection(fireDB, "Users");
    try {
      const q = await getDocs(firedb);
      const cartitems = [];
      q.forEach((doc) =>
        cartitems.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      console.log(cartitems);
      SetAllUsers(cartitems);
      SetPageloader(false);
    } catch (error) {
      console.log(error);
      SetPageloader(false);
    }
  };

  // Get All Orders
  const GetAllOrders = async () => {
    SetPageloader(true);
    const firedb = collection(fireDB, "Orders");
    try {
      const q = await getDocs(firedb);
      const cartitems = [];
      q.forEach((doc) =>
        cartitems.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      console.log(cartitems);
      SetAllOrders(cartitems);
      SetPageloader(false);
    } catch (error) {
      console.log(error);
      SetPageloader(false);
    }
  };

  //  Auto LogOut
  const startAutoLogoutTimer = () => {
    const TIMEOUT_DURATION = 1 * 60 * 1000; // 30 minutes in milliseconds

    // Clear existing timeout, if any
    clearTimeout(window.logoutTimer);

    // Set a new timeout
    window.logoutTimer = setTimeout(() => {
      // Perform logout actions here
      logout();
    }, TIMEOUT_DURATION);
  };

  // Function to reset the auto logout timer on user activity
  const resetAutoLogoutTimer = () => {
    startAutoLogoutTimer();
  };

  // Function to handle logout
  const logout = () => {
    // Clear timeout
    clearTimeout(window.logoutTimer);

    // Clear user data from local storage
    localStorage.removeItem("User");
    localStorage.removeItem("Password");

    // Perform any additional logout actions
    dispatch(AuthActions.Logout());
  };

  // Add event listeners for user activity
  useEffect(() => {
    document.addEventListener("mousemove", resetAutoLogoutTimer);
    document.addEventListener("keydown", resetAutoLogoutTimer);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("mousemove", resetAutoLogoutTimer);
      document.removeEventListener("keydown", resetAutoLogoutTimer);
    };
  }, []);
  // get Products UseEffect()
  useEffect(() => {
    GetAllCategory();
    GetCart();
    getProducts();
    GetUserProfile();
    GetOrders();
    GetAllUsers();
    GetAllOrders();
  }, [User]);

  return (
    <Context.Provider
      value={{
        UserLogin,
        UserProfile,
        SetUserProfile,
        NewUserProfile,
        UpdateUserProfile,
        GetUserProfile,
        User,
        mode,
        toggle,
        loader,
        Pageloader,
        SetPageloader,
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
        AllProducts,
        VerifyEmail,
        AllUsers,
        AllOrders,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProider;
