import { doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { db } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Shop(props) {

    const product = [
        { id: "1", name: "Nordic Chair", price: "$50.00", img: "assets/images/product-3.png" },
        { id: "2", name: "Kruzo Aero Chair", price: "$75.00", img: "assets/images/product-2.png" },
        { id: "3", name: "Ergonomic Chair", price: "$45.00", img: "assets/images/product-1.png" },
        { id: "4", name: "Nordic Chair", price: "$50.00", img: "assets/images/product-3.png" },
        { id: "5", name: "Kruzo Aero Chair", price: "$75.00", img: "assets/images/product-2.png" },
        { id: "6", name: "Ergonomic Chair", price: "$45.00", img: "assets/images/product-1.png" },
        { id: "7", name: "Nordic Chair", price: "$50.00", img: "assets/images/product-3.png" },
        { id: "8", name: "Kruzo Aero Chair", price: "$75.00", img: "assets/images/product-2.png" }

    ]


    const addProduct = async (data) => {
        
        try {
            let Id = data.id
            await setDoc(doc(db, "Cart", Id), data);
            toast.success(data.name + ' Added Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } catch (error) {
            toast.error('error', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }

    return (


        <div>


            <div className="hero">
                <div className="container">
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    {/* Same as */}
                    <ToastContainer />
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Shop</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">
                        </div>
                    </div>
                </div>
            </div>
            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">
                        {
                            product.map((i) => (
                                <div className="col-12 col-md-4 col-lg-3 mb-5">
                                    <a className="product-item" onClick={() => addProduct(i)}>
                                        <img src={i.img} className="img-fluid product-thumbnail" />
                                        <h3 className="product-title">{i.name}</h3>
                                        <strong className="product-price">{i.price}</strong>
                                        <span className="icon-cross">
                                            <img src="assets/images/cross.svg" className="img-fluid" />
                                        </span>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Shop;