import React, { useEffect, useState } from 'react';


const SectionBar = (props) => {


    return (
    <div class="section-bar">
      <div class="latest-news">
          <span><b>LATEST NEWS</b></span>
      </div>
      <div class="featured">
          <span><b>FEATURED</b></span>
      </div>
      <div class="key-metrics">
          <span><b>KEY METRICS</b></span> 
      </div>
    </div>
    
    )
}

export default SectionBar;