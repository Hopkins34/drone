import HomeCard from "./cards/HomeCard";
import ManufacturerCard from "./cards/ManufacturerCard";
import PurposeCard from "./cards/PurposeCard";
import ServiceCard from "./cards/ServiceCard";
import DesignCard from "./cards/DesignCard";
import SpecificationCard from "./cards/SpecificationCard";
import CrewCard from "./cards/CrewCard";
import CapabilitiesCard from "./cards/CapabilitiesCard";
import PerformanceCard from "./cards/PerformanceCard";
import OperationsCard from "./cards/OperationsCard";
import SummaryCard from "./cards/SummaryCard";
import SourcesCard from "./cards/SourcesCard";

const componentMap = {
  1: <HomeCard />,
  2: <ManufacturerCard />,
  3: <PurposeCard />,
  4: <ServiceCard />,
  5: <DesignCard />,
  6: <SpecificationCard />,
  7: <CrewCard />,
  8: <CapabilitiesCard />,
  9: <PerformanceCard />,
  10: <OperationsCard />,
  11: <SummaryCard />,
  12: <SourcesCard />
};

const Sections = ({ id, title }) => {
  return (
    <div id={id} className="min-w-full h-full snap-center p-2 overflow-hidden">
      <div className="h-full w-full bg-gray-200 flex flex-col">
        <h2 className="text-4xl font-bold w-full p-2 bg-gray-300">{title}</h2>
        {componentMap[id] || <div className="">ERROR</div>}
      </div>
    </div>
  );
};

export default Sections;
