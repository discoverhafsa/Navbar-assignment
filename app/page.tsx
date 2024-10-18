
export default function Home() {
  return (
   <main>
   
    <div className="flex w-full justify-center mt-20 space-x-4 px-10">
    <div className="bg-yellow-400 h-32 w-4/12"></div>
    <div className="bg-pink-400 h-32 w-4/12"></div>
    <div className="bg-orange-400 h-32 w-4/12"></div>
    </div>
   
   {/* for 2 row */}
   <div className="flex w-full justify-center mt-6 space-x-4 px-10">
   <div className="bg-red-400 h-32 w-4/12"></div>
    <div className="bg-slate-600 h-32 w-4/12"></div>
    </div>
   
  </main>
  );
}

