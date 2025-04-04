const PerformanceCard = () => {
  return(
    <div className="p-4 w-full h-full flex flex-col relative">
      <ul className="flex flex-col justify-evenly lg:text-2xl text-lg h-full">
        <li><strong>Maneuverability:</strong> Optimized for stability and endurance rather than agility; not designed for dogfights</li>
          <li><strong>Climb Rate:</strong> Approximately 1,600 feet per minute</li>
          <li><strong>Endurance:</strong> Capable of flying continuously for up to 27 hours</li>
          <li><strong>Operational Effectiveness:</strong> Highly effective in ISR (Intelligence, Surveillance, Reconnaissance) and precision strike missions, with global reach and minimal risk to human operators</li>
      </ul>
      <div className="bg-[url(./assets/images/Reaper8.png)] bg-no-repeat bg-contain bg-center w-120 h-120 hidden 2xl:block absolute right-1/5 translate-x-1/2 translate-y-1/2 absolute transform"></div>
    </div>
  );
}

export default PerformanceCard;
