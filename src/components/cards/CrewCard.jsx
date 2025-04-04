const CrewCard = () => {
  return(
    <div className="p-4 w-full h-full flex flex-col relative">
      <ul className="flex flex-col justify-evenly lg:text-2xl text-lg h-full">
        <li><strong>Crew Size (Remote):</strong> Typically 2 personnel</li>
          <li><strong>Pilot:</strong> Operates the aircraft remotely using a ground control station</li>
          <li><strong>Sensor Operator:</strong> Manages cameras, targeting systems, and weapons</li>
          <li><strong>Support Team:</strong> Includes maintenance crews, intelligence analysts, and mission planners (not onboard)</li>
          <li><strong>Control Station:</strong> Ground-based, often located far from the area of operations</li>
          <li><strong>Launch & Recovery:</strong> Sometimes handled by a separate team using line-of-sight systems at takeoff/landing zones</li>
      </ul>
      <div className="bg-[url(./assets/images/Reaper6.png)] bg-no-repeat bg-contain bg-center w-120 h-120 hidden 2xl:block absolute right-1/5 translate-x-1/2 absolute transform"></div>
    </div>
  );
}

export default CrewCard;
