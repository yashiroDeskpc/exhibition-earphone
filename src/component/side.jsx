import React from "react";
import weekly from "../img/mini_weekly_rank.webp";
import kaitorileft from "../img/kaitori_left.webp";
import campaign from "../img/mini_campaign.webp";
import member from "../img/mini_web_member.webp";
import miniline from "../img/mini_line.webp";
import minirecruit from "../img/mini_recruit_400_160.webp";

const photoin = [
    { id: 0, leftbanner: weekly , alt: "週間ランキング" },
    { id: 1, leftbanner: kaitorileft, alt: "買取強化キャンペーン" },
    { id: 2, leftbanner: campaign, alt: "開催中のキャンペーン" },
    { id: 3, leftbanner: miniline, alt: "公式LINE" },
    { id: 4, leftbanner: member, alt: "会員募集中" },
    { id: 5, leftbanner: minirecruit, alt: "スタッフ大募集" },
];

function Side({ leftbanner, alt }) {
    return (
        <div className="leftbandiv">
            <img className="leftbanner" src={leftbanner} alt={alt} />
        </div>
    );
}

export function Leftcate() {
    return (
        <div className="left_categ">
            {photoin.map((photo) => (
                <Side key={photo.id} leftbanner={photo.leftbanner} alt={photo.alt} />
            ))}
        </div>
    );
}

export default Leftcate;
