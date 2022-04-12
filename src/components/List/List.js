import React from "react";
import "./List.css";

function List() {
  return (
    <div className="list-container">
      <ul>
        <li className="new-li">Work with a realtor. Ask people you trust for referrals to a real estate professional they trust. Interview agents to determine which have expertise in the neighborhoods and type of homes you’re interested in.</li>
        <li className="new-li">Use your priority list to evaluate each property, remembering there’s no such thing as the perfect home.</li>
        <li className="new-li">If you need a second opinion, select one or two people. But remain true to your list of wants and needs so the final decision is based on criteria you’ve identified as important.</li>
        <li className="new-li">Create a budget so you know how much you’re comfortable spending each month on housing. Don’t wait until you’ve found a home and made an offer to investigate financing.</li>
        <li className="new-li">Understand the type of home that suits your personality. Do you prefer a new or existing home? A ranch or a multistory home? If you’re leaning toward a fixer-upper, are you truly handy, or will you need to budget for contractors?</li>
      </ul>
    </div>
  );
}

export default List;