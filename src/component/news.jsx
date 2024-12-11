import React from "react";


const news = [
    {id:1,date:"2024/10/07",tag:"新製品", message:"○○○○が入荷"},
    {id:2,date:"2024/10/04",tag:"Youtube", message:"○○○○をレビューしてみた"},
    {id:3,date:"2024/09/28",tag:"本日発売",message:"○○○○が発売"},
    {id:4,date:"2024/09/28",tag:"本日発売",message:"○○○○が発売"},
]

export default function News() {
    return (
        <div className="news">
            <h2 className="news-title">NEWS</h2>
            <div className="news-wrapper">
                <div className="news-item">
                    {news.map((item) => (
                        <div key={item.id} className="news-item">
                            <p className="news-date">{item.date}</p>
                            <p className="news-tag">{item.tag}</p>
                            <p className="news-message">{item.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
