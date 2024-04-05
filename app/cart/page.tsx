import { ItemList } from "./_component/item-list";

export default function CartPage() {
  return (
    <div className="w-full grid grid-cols-3 gap-x-5 h-[83vh] mt-5">
      <div className="col-span-2 bg-slate-100 rounded-md p-3 overflow-auto">
        <ItemList />
      </div>
      <div className="bg-slate-100 rounded-md p-3">
        <div className="bg-white h-full p-3 rounded-md">
          <h1 className="text-2xl text-center font-semibold">My Cart</h1>
        </div>
      </div>
    </div>
  );
}
