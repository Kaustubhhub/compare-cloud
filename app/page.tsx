import Navbar from "@/components/navbar";
import ShowTable from "@/components/showTable";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-200 w-full h-min-screen">
      <div className="flex justify-center p-4">
        <Navbar />
      </div>
      <div>
        <ShowTable/>
      </div>
    </div>
  );
}
