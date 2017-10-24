import React from 'react';

const Experience = () => {
	return (
      <div className="container-exe">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>台北商業大學畢業</h3>
            <span>會計資訊系</span>
            <p>學生時期，我有在接平面設計案</p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>騏驥坊創客教育公司</h3>
            <span>網站設計與數位行銷</span>
            <p>在新創公司時，協助管理公司網站，與拓展業務以及平面設計等工作</p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>中央大學<br/>電子商務競賽</h3>
            <span>全國第三名</span>
            <p>由於任職的新創公司同事都為中央校友或學生，因此與他們一起於中央大學主辦的電子商務競賽製作prototype並比賽。</p>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>東南旅遊</h3>
            <span>前端工程師</span>
            <p>主要協助開發新網站平台，並在空閒之餘協助製作行銷活動頁面與舊版網站維護</p>
          </div>
        </div>
</div>
	)
}

export default Experience;