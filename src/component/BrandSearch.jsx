import React from "react";


// 20件
const brandcon = [
    { id: 0, brandname: "ブランド名A" },
    { id: 1, brandname: "ブランド名B" },
    { id: 2, brandname: "ブランド名C" },
    { id: 3, brandname: "ブランド名D" },
    { id: 4, brandname: "ブランド名E" },
    { id: 5, brandname: "ブランド名F" },
    { id: 6, brandname: "ブランド名G" },
    { id: 7, brandname: "ブランド名H" },
    { id: 8, brandname: "ブランド名I" },
    { id: 9, brandname: "ブランド名J" },
    { id: 10, brandname: "ブランド名K" },
    { id: 11, brandname: "ブランド名L" },
    { id: 12, brandname: "ブランド名M" },
    { id: 13, brandname: "ブランド名N" },
    { id: 14, brandname: "ブランド名O" },
    { id: 15, brandname: "ブランド名P" },
    { id: 16, brandname: "ブランド名Q" },
    { id: 17, brandname: "ブランド名R" },
    { id: 18, brandname: "ブランド名S" },
    { id: 19, brandname: "ブランド名T" },
];

function Brandnamesearch({ brandname }) {
    return (
        <div className="side-brandid">
            <a href="#" className="brandname">
               {brandname}
            </a>
        </div>
    );
}

function Brand_search() {
    return (
        <div className="brandcol">
            <h2 className="info-title">ブランドから探す</h2>
            <h3 className="info-title">ブランド一覧から探す</h3>
            <div className="sidecategbrand">
                {brandcon.map((brand) => (
                    <Brandnamesearch key={brand.id} brandname={brand.brandname} />
                ))}
            </div>
        </div>
    );
}

const announcements = [
    {
        date: "2024/11/26",
        message: "システムメンテナンスのお知らせ",
    },
    {
        date: "2024/11/20",
        message: "新製品発売のお知らせ",
    },
    {
        date: "2024/11/15",
        message: "システムメンテナンスのお知らせ",
    },
];

function InformationBox() {
    return (
        <div className="info-box">
            <h2 className="info-title" id="infomation">
                INFORMATION <br /><span className="info-subtitle">お知らせ</span>
            </h2>
            <div className="info-content">
                {announcements.map((announcement, index) => (
                    <div key={index} className="info-item">
                        <p className="info-date">{announcement.date}</p>
                        <p className="info-message">{announcement.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function BrandSearch() {
    return (
        <div className="brandsearch">
            <Brand_search />
            <InformationBox />
            <div className="brandsearch">
                <h2 className="info-title"></h2>
            </div>
        </div>
    );
}