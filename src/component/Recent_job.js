import React from "react";

export default function RecentJob() {
  return (
    <div className="flex justify-center py-4 max-w-6xl">
     

      <div>
        <h4>
          <strong>specification Enginner</strong>
        </h4>
        <ul className="inline-flex space-x-6">
          <li>
            <i className="fa fa-clock-o"></i>Freelincer
          </li>
          <li>
            <i className="fa fa-briefcase"></i>Leviton
          </li>
          <li>
            <i className="fa fa-map-marker"></i>Seatle
          </li>
          <li>
            <i className="fa fa-money"></i>€34-667/ hour
          </li>
        </ul>

        <div>
          <ul className="inline-flex space-x-6">
            <li>
              <i className="fa fa-money"></i>€34-667/ hour
            </li>
            <li>
              <i className="fa fa-map-marker"></i>Posted 6 year ago/ closes 30
              november 2025
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}