import Swal from 'sweetalert2'



const AddProduct = () => {

    const token = localStorage.getItem("token");

    const handleAddProduct = async (e) => {
        e.preventDefault();
        console.log(e);
        const form = e.target;
        const name = form.name.value;
        const imageLink = form.imageLink.value;
        // const brand = form.brand.value;
        const price = form.price.value;
        const details = form.productDetails.value;

        const data = { name, imageLink, price, details };
        // console.log(data);

        await fetch("http://localhost:5000/ebike", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    Swal.fire({
                        title: "Successfully Added",
                        timer: 1500,
                        showConfirmButton: false,
                        // text: "You clicked the button!",
                        icon: "success",
                    });
                    // toast.success("Sucessfully Added");
                    e.target.reset();
                }
            });
    }
    return (
        <div>
            <div className="mt-5 mx-5 ">
                <h1 className=" text-2xl font-semibold text-center ">Add Product </h1>
            </div>

            <form onSubmit={handleAddProduct} className=" md:w-3/4 lg:w-2/3 mx-auto card-body">

                <div className="form-control">

                    <input type="text" required name="name" placeholder="Product Name" className="input input-bordered" />
                </div>

                <div className="form-control">

                    <input type="number" required name="price" placeholder="Product Price" className="input input-bordered" />
                </div>
                <div className="form-control">

                    <input type="text" required name="imageLink" placeholder="Product Image URL" className="input input-bordered" />
                </div>
                {/* <div className="form-control">
                    <input type="text" required name="brand" placeholder="Product Brand Name" className="input input-bordered" />
                </div> */}

                <div className="form-control">

                    <textarea type="text" required name="productDetails" placeholder="Product details" className="textarea textarea-bordered textarea-lg p-2 text-base" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-gray-600 hover:bg-gray-700 text-white">Add Product</button>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;