const PurposeCard = () => {
  return(
    <div className="p-4 w-full h-full flex flex-col relative">
      <ul className="flex flex-col justify-evenly lg:text-2xl text-lg h-full">
        <li><strong>Primary Role:</strong> Intelligence, Surveillance, and Reconnaissance (ISR)</li>
          <li><strong>Combat Missions:</strong> Precision airstrikes using laser-guided munitions</li>
          <li><strong>Surveillance Operations:</strong> Long-endurance aerial monitoring and target tracking</li>
          <li><strong>Military Support:</strong> Provides real-time battlefield intelligence to ground forces</li>
          <li><strong>Border Security:</strong> Used for monitoring and patrolling national borders</li>
          <li><strong>Disaster Response:</strong> Assists in search-and-rescue and damage assessment</li>
          <li><strong>Global Operations:</strong> Deployed by the U.S. and allies for security and defense missions</li>
      </ul>
      <div className="bg-[url(./assets/images/Reaper3.png)] bg-no-repeat bg-contain bg-center w-120 h-120 hidden 2xl:block absolute right-1/5 translate-x-1/2 translate-y-1/2 absolute transform"></div>
    </div>
  );
}

export default PurposeCard;
