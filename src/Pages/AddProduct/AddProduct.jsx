import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log(name, brandName, type, price, shortDescription, rating, image);
    const product = { name, brandName, type, price, shortDescription, rating };
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="max-w-screen-2xl mx-auto bg-[#FFDA77] h-[90vh] flex flex-col justify-center ">
      <h1 className="text-center text-4xl font-bold pt-12">Add Product</h1>
      <div className="flex justify-center p-12">
        <form
          onSubmit={handleAddProduct}
          className="w-full space-y-6 text-center"
        >
          {/* name, brand name, type */}

          <div className="flex gap-6">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setBrandName(e.target.value)}
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
                defaultValue={"DEFAULT"}
                onChange={(e) => setType(e.target.value)}
                className="select select-bordered w-full "
              >
                <option value={"DEFAULT"} disabled>
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
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="price($)"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                onChange={(e) => setShortDescription(e.target.value)}
                type="text"
                placeholder="short description"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                onChange={(e) => setRating(e.target.value)}
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
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="image"
              className="input input-bordered w-full "
            />
          </div>
          <button className="btn w-11/12 bg-[#FFA45B] text-white border-none">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
