import { DataTable } from "../components/data-table";

export default function Page() {
  return (
    <div className="min-w-full my-6">
      <DataTable />

      <div className="flex justify-center mt-4">
        <button className="min-w-[270px] py-3 px-4 bg-[#006BFF] text-white font-semibold rounded-[100px] hover:bg-[#006BFF] transition-colors">
          추가
        </button>
      </div>
    </div>
  );
}
