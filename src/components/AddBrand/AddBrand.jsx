import Swal from "sweetalert2";
import Navbar from "../../Shared/Navbar/Navbar";


const AddBrand = () => {
    const handleBrads = e => {
        e.preventDefault()
        const form = e.target;
        const brandName = form.brand.value;
        const photo = form.photo.value;
        const brand = { brandName, photo }
        console.log(brand);
        fetch(`https://automobile-project-server-m8p4aqcrp-shohaib-hossains-projects.vercel.app/brands`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(brand)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Brand Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-slate-300">
            <div className="bg-black"><Navbar></Navbar></div>
            <h1 className="text-2xl font-bold text-center pt-5">Add A Brand</h1>
            <form onSubmit={handleBrads} className=" space-y-2 pt-12 pb-12">
                <div className="form-control max-w-md mx-auto">
                    <label className="label">
                        <span className="label-text text-2xl font-bold">Brand Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control max-w-md mx-auto">
                    <label className="label">
                        <span className="label-text text-2xl font-bold">Brand Logo</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="photo" placeholder="Brand Logo URL" className="input input-bordered w-full mb-5" />
                    </label>
                </div>
                <div className="form-control max-w-md mx-auto">
                    
                    <label className="input-group">
                        
                    <input type="submit" value="Add Brand" className="input input-bordered w-full font-bold hover:bg-yellow-400"/>
                    </label>
                </div>
                
            </form>
        </div>
    );
};

export default AddBrand;