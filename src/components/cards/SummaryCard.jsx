const SummaryCard = () => {
  return(
    <div className="p-4 w-full h-full flex flex-col relative">
      <ul className="flex flex-col justify-evenly lg:text-2xl text-lg h-full">
        <li><strong>Name:</strong> MQ-9 Reaper</li>
          <li><strong>Type:</strong> Unmanned Aerial Vehicle (UAV) – Hunter-Killer/Surveillance Drone</li>
          <li><strong>Manufacturer:</strong> General Atomics Aeronautical Systems, Inc. (GA-ASI)</li>
          <li><strong>Introduced:</strong> First flown in 2001, entered service in 2007</li>
          <li><strong>Primary Roles:</strong> Intelligence, Surveillance, Reconnaissance (ISR), and precision strikes</li>
          <li><strong>Key Capabilities:</strong> Long endurance (27+ hours), high-altitude operations, precision-guided munitions</li>
          <li><strong>Global Use:</strong> Operated by the U.S. and allied forces in combat and non-combat missions</li>
          <li><strong>Impact:</strong> Has redefined modern aerial warfare and intelligence gathering</li>
      </ul>
      <div className="bg-[url(./assets/images/Reaper10.png)] bg-no-repeat bg-contain bg-center w-120 h-120 hidden 2xl:block absolute right-1/5 translate-x-1/2 absolute transform"></div>
    </div>
  );
}

export default SummaryCard;
