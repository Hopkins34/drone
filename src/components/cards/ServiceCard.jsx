const ServiceCard = () => {
  return(
    <div className="p-4 w-full h-full flex flex-col relative">
      <ul className="flex flex-col justify-evenly lg:text-2xl text-lg h-full">
        <li ><strong>Service Life:</strong>
            <ul className="flex flex-col gap-4 p-4">
              <li><strong>Start of Service Life:</strong> 2007 (First operational deployment)</li>
              <li><strong>End of Service Life:</strong> Ongoing (No confirmed end date, still in active service)</li>
            </ul>
          </li>

          <li><strong>Production Life:</strong>
            <ul className="flex flex-col gap-4 p-4">
              <li><strong>Start of Production:</strong> 2001 (Initial development and prototype testing)</li>
              <li><strong>Ongoing Production:</strong> Still in production and upgrades as of 2025</li>
            </ul>
          </li>

          <li><strong>Notable Moments:</strong>
            <ul className="flex flex-col gap-4 p-4">
              <li>2001: First prototype flight of the MQ-9 Reaper</li>
              <li>2007: First operational deployment in Iraq and Afghanistan</li>
              <li>2010: The MQ-9 Reaper becomes fully operational with the U.S. Air Force</li>
              <li>2015: MQ-9 Reaper reaches 1 million flight hours</li>
              <li>2020: Expansion of MQ-9 Reaper deployments with allied nations like the UK and France</li>
              <li>2023: Ongoing service with NATO and other countries</li>
            </ul>
          </li>
      </ul>
      <div className="bg-[url(./assets/images/Reaper4.png)] bg-no-repeat bg-contain bg-center w-200 h-200 hidden 2xl:block absolute right-1/5 translate-x-1/2 absolute transform scale-x-[-1]"></div>
    </div>
  );
}

export default ServiceCard;
