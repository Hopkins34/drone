const ManufacturerCard = () => {
  return(
    <div className="p-4 w-full h-full flex flex-col relative">
      <div className="h-20 w-4/5 mx-auto bg-[url(./assets/images/GAA.png)] bg-no-repeat bg-contain bg-center m-4 flex-shrink-0"></div>
      <ul className="flex flex-col justify-evenly text-lg lg:text-2xl h-full">
        <li><strong>Manufacturer:</strong> General Atomics Aeronautical Systems, Inc. (GA-ASI)</li>
        <li><strong>Headquarters:</strong> Poway, California, USA</li>
        <li><strong>Production Facility:</strong> Assembled and tested in San Diego County, California</li>
        <li><strong>Engineering & Integration:</strong> Systems like sensors and communications integrated on-site</li>
        <li><strong>U.S.-Made Components:</strong> Parts sourced from domestic defense suppliers</li>
        <li><strong>Quality Control:</strong> Each drone undergoes rigorous testing before delivery</li>
        <li><strong>Delivery & Support:</strong> GA-ASI provides ongoing logistical and maintenance support</li>
      </ul>
      <div className="bg-[url(./assets/images/Reaper2.png)] bg-no-repeat bg-contain bg-center w-100 h-100 hidden 2xl:block absolute right-1/5 top-1 translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
}

export default ManufacturerCard;
