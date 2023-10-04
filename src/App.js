import { useState, useEffect } from "react";
import "./CSS/App.css";
import Item from "./Components/Item";
import FinalDiv from "./Components/FinalDiv";
import { dummyData } from "./Utils/utils";

function App() {
  const [total, setTotal] = useState(0);
  const [withVAT, setWithVat] = useState(0);
  const [afterVAT, setafterVAT] = useState(0);
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    function findTotal() {
      const totalAmount = data?.reduce((acc, itr) => {
        return acc + itr.cost;
      }, 0);
      setTotal(totalAmount);
    }
    findTotal();
  }, [data]);

  useEffect(() => {
    function withVATFunc() {
      const withVATAmount = total * 0.18;
      setWithVat(withVATAmount);
    }
    withVATFunc();
  }, [total]);

  useEffect(() => {
    function afterVAT() {
      const afterVATAmount = total + withVAT;
      setafterVAT(afterVATAmount);
    }
    afterVAT();
  }, [withVAT]);

  return (
    <div className="App">
      <h1 className="text-7xl font-bold mb-4"> Your basket</h1>
      <p className="text-xl">
        Items you have added to your basket has shown below.
        <br />
        Adjust the quantities or remove items before continuing your purchase.
      </p>
      <div className="billingHeading flex justify-between mt-12 border-b-2 border-black">
        <div className="text-2xl font-bold align-left ml-12 ">Product</div>
        <div className="flex text-2xl font-bold mr-12">
          <p>Price</p>
          <p className="mx-12">Qty</p>
          <p>Cost</p>
        </div>
      </div>
      {data.map((item) => {
        return <Item key={item.name} item={item} changeData={setData} data={data}/>;
      })}
      <FinalDiv name="Subtotal" amount={total} />
      <FinalDiv name="VAT@18%" amount={withVAT} /> 
      <FinalDiv name="Total" amount={afterVAT} /> 
      <div className="flex justify-end mr-8 mb-8 ">
        <button className="bg-blue-700 rounded-md py-4 px-6 mt-12  text-3xl text-white font-bold shadow-2xl">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default App;
