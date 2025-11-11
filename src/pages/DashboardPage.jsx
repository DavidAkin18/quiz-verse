import DashboardCharts from "../components/DashboardCharts";
function DashboardPage(){
    return(
        <div className="min-h-screen bg-gradient-to-r from-[#3550DC] to-[#27E9F7] flex items-center justify-center p-6">
            <DashboardCharts/>
        </div>
    )
}
export default DashboardPage;