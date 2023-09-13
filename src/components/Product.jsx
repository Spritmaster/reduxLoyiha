import { useDispatch } from 'react-redux';
import { ordered ,decreament,remove } from '../redux/features/basketSlice';
import '../App.css'
function Product({ name, amount, price, image,id }) {
  const dispatch=useDispatch()
  return (
    <div className="flex justify-between mb-5 item-box mt-[2rem ] bg-[#fff] px-[1rem] ">
      <div className="flex gap-14">
        <img src={image} alt={name + " glasses"} className="w-40" />

        <div className="flex flex-col gap-1 ">
          <p className="font-medium ">{name}</p>
          <p className="font-medium">${price}</p>
          <button className="text-red-500 tracking-wider" onClick={()=>{dispatch(remove(id))}}>Remove</button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={()=>{dispatch(amount ==1 ?remove(id):decreament(name))}}>-</button>
        <p>{amount}</p>
        <button onClick={()=>{dispatch(ordered(name))}}>+</button>
      </div>
    </div>
  );
}

export default Product;
