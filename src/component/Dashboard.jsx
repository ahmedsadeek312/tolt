import React from "react";
import "../styles/Dashboard.css"

function Dashboard(){
    return(
        <>
        <div class="container">
  <div class="sidebar">
    <div class="logo">
      <img src="" alt="Logo" />
    </div>
    <select>
      <option>CodeStorm's Affiliate Program</option>
    </select>
    <ul class="menu">
      <li>Home</li>
      <li>Affiliates</li>
      <li>Referred Users</li>
      <li class="menu-header">Affiliate Program</li>
      <li>Program Settings</li>
      <li>Payouts</li>
      <li>Assets</li>
      <li>Emails</li>
      <li class="menu-header">Support</li>
      <li>Help</li>
      <li>Account Settings</li>
      <li>Log Out</li>
    </ul>
  </div>

  <div class="affiliate-form">
    <h2>Affiliate Program Information</h2>
    <form>
      <label>Program Name*</label>
      <input type="text" placeholder="CodeStorm's Affiliate Program" />
      <label>Subdomain*</label>
      <input type="text" placeholder="codestorm.tolt.io" />
      <label>Currency*</label>
      <select>
        <option value="USD">USD</option>
      </select>
      <label>Auto Approve Affiliates*</label>
      <select>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label>Reward*</label>
      <div class="reward-options">
        <button type="button" class="percentage">Percentage</button>
        <button type="button" class="fixed">Fixed</button>
      </div>
      <label>Commission Rate*</label>
      <input type="number" placeholder="15%" />
      <label>Number of Payments Limit*</label>
      <select>
        <option value="all">All Payments</option>
      </select>
      <label>Number of Months Limit*</label>
      <select>
        <option value="lifetime">Lifetime</option>
      </select>
      <button type="submit">Continue</button>
    </form>
  </div>
</div>
        </>
    )
}

export default Dashboard