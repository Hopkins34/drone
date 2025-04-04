const CapabilitiesCard = () => {
  return(
    <div className="p-4 w-full h-full flex flex-col relative">
      <ul className="flex flex-col justify-evenly lg:text-2xl text-lg h-full">
        <li><strong>Surveillance & Reconnaissance:</strong> High-resolution cameras and radar provide real-time intelligence</li>
          <li><strong>Precision Strikes:</strong> Capable of engaging ground targets with Hellfire missiles and smart bombs</li>
          <li><strong>Persistent Loitering:</strong> Can remain over a target area for more than 24 hours</li>
          <li><strong>Multi-Target Tracking:</strong> Simultaneously monitors and engages multiple targets</li>
          <li><strong>Data Relay:</strong> Functions as a communications relay between forces and command centers</li>
          <li><strong>Remote Operation:</strong> Can be flown and operated from thousands of miles away</li>
          <li><strong>Interoperability:</strong> Shares data with other air, land, and sea assets in real time</li>
      </ul>
      <div className="bg-[url(./assets/images/Reaper7.png)] bg-no-repeat bg-contain bg-center w-120 h-120 hidden 2xl:block absolute right-3/20 translate-x-1/2 translate-y-1/2 absolute transform"></div>
    </div>
  );
}

export default CapabilitiesCard;
