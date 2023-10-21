import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const ProductUpdate = () => {
  const [product, setProduct] = useState("");
  const navigate = useNavigate();
  const { image, name, brandName, type, price, rating } = product;
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedName = form.name.value;
    const updatedBrandName = form.brandName.value;
    const updatedType = form.type.value;
    const updatedPrice = form.price.value;
    const updatedRating = form.rating.value;
    const updatedImage = form.image.value;
    console.log(
      updatedName,
      updatedBrandName,
      updatedType,
      updatedPrice,
      updatedRating,
      updatedImage
    );
    e.preventDefault();
    const updatedProductData = {
      updatedName,
      updatedBrandName,
      updatedType,
      updatedPrice,
      updatedRating,
      updatedImage,
    };
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProductData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Updated Successfully!");
          navigate("/");
        }
      });
  };

  return (
    <div className="max-w-screen-2xl mx-auto bg-[#FFDA77] h-[90vh] flex flex-col justify-center ">
      <h1 className="text-center text-4xl font-bold pt-12">
        Update Product Info
      </h1>
      <div className="flex justify-center p-12">
        <form onSubmit={handleUpdate} className="w-full space-y-6 text-center">
          {/* name, brand name, type */}

          <div className="flex gap-6">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                defaultValue={name}
                type="text"
                placeholder="name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                name="brandName"
                defaultValue={brandName}
                type="text"
                placeholder="brand name"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <select
                defaultValue={type}
                name="type"
                className="select select-bordered w-full "
              >
                <option value={type} disabled>
                  Product Category
                </option>
                <option value={"Soft Drink"}>Soft Drink</option>
                <option value={"Fast Food"}>Fast Food</option>
                <option value={"Coffee"}>Coffee</option>
                <option value={"Others"}>Others</option>
              </select>
            </div>
          </div>
          {/* price, short description, rating */}
          <div className="flex gap-6">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                defaultValue={price}
                type="text"
                placeholder="price($)"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                name="rating"
                defaultValue={rating}
                type="text"
                placeholder="rating"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/* image */}

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              name="image"
              defaultValue={image}
              type="text"
              placeholder="image"
              className="input input-bordered w-full "
            />
          </div>
          <button className="btn w-11/12 bg-[#FFA45B] text-white border-none">
            Update
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductUpdate;
