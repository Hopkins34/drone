const SpecificationCard = () => {
  return(
    <div className="p-4 w-full h-full flex flex-col relative">
      <ul className="flex flex-col justify-evenly lg:text-2xl text-lg h-full">
        <li><strong>Max Speed:</strong> Approximately 300 mph (482 km/h)</li>
        <li><strong>Range:</strong> Up to 1,150 miles (1,850 kilometers) without refueling</li>
        <li><strong>Endurance:</strong> Up to 27 hours in the air</li>
        <li><strong>Operational Altitude:</strong> Up to 50,000 feet (15,240 meters)</li>
        <li><strong>Payload Capacity:</strong> Up to 3,800 lbs (1,700 kg) of external ordnance</li>
        <li><strong>Engine Type:</strong> Honeywell TPE331-10 turboprop engine</li>
      </ul>
      <div className="bg-[url(./assets/images/Reaper5.png)] bg-no-repeat bg-contain bg-center w-120 h-120 hidden 2xl:block absolute right-1/5 translate-x-1/2 translate-y-1/2 absolute transform"></div>
    </div>
  );
}

export default SpecificationCard;
