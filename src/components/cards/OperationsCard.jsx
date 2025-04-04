const OperationsCard = () => {
  return(
    <div className="p-4 w-full h-full flex flex-col relative">
      <ul className="flex flex-col justify-evenly lg:text-2xl text-lg h-full">
        <li><strong>Combat Use:</strong> Extensively used in operations across Afghanistan, Iraq, Syria, and other regions</li>
        <li><strong>Surveillance Missions:</strong> Conducts persistent ISR (Intelligence, Surveillance, Reconnaissance) for military and border security</li>
        <li><strong>Global Reach:</strong> Operated by the U.S. Air Force and allied nations worldwide</li>
        <li><strong>Remote Deployment:</strong> Controlled from U.S. bases while physically deployed overseas</li>
        <li><strong>Targeted Strikes:</strong> Supports counterterrorism missions with precision-guided weapons</li>
        <li><strong>Joint Operations:</strong> Works alongside manned aircraft, satellites, and ground forces</li>
        <li><strong>Emergency Support:</strong> Occasionally used in disaster response and search-and-rescue operations</li>
      </ul>
      <div className="bg-[url(./assets/images/Reaper9.png)] bg-no-repeat bg-contain bg-center w-120 h-120 hidden 2xl:block absolute right-1/5 translate-x-1/2 translate-y-1/2 absolute transform"></div>
    </div>
  );
}

export default OperationsCard;
