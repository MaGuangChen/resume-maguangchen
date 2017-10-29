import React from 'react';

const CompanyInfo = () => {
    return (
        <div className="member-center_companyArea_block">
            <div className="member-center_companyArea_block_content">
                <div className="member-center_companyArea_block_content_company-name">
                    測試科技 股份有限公司
                </div>
                <ContentSpan title="職缺內容" text="前端工程師" />
                <ContentSpan 
                  title="面試時間" 
                  text="2017-10-31 星期二 16 : 00" 
                />
                <ContentSpan title="薪資範圍" text="50,000 ~ 56,000" />
                <ContentSpan 
                  title="公司地點" 
                  text="台北市中正區羅斯福路一段83巷2弄38號5樓" 
                />
                <ContentSpan title="公司電話" text="02-25228647" />
                <ContentSpan title="聯絡人" text="人資 馬廣辰 先生" />    
                <ContentSpan title="聯絡信箱" text="kwn791122@gmail.com" />
            </div>
        
        </div>
    );
}

const ContentSpan = (props) => {
    const { title, text } = props;
    return (
        <span>
            <p className="member-center_companyArea_block_content_title">
                { title }:
            </p>
            <p className="member-center_companyArea_block_content_text">
                { text }
            </p>
            
        </span>
    );
}

export default CompanyInfo;