import React from "react";

function WishListFrame() {
    return (
        <div className="bg-white rounded-xl p-8 w-full max-w-6xl mx-auto shadow mb-8">
            <h2 className="text-center text-lg font-semibold mb-6">찜한 맛집</h2>
            <div className="flex justify-between gap-8">
                {[1, 2, 3, 4, 5].map((_, idx) => (
                    <div
                        key={idx}
                        className="w-64 h-80 bg-gray-100 rounded-2xl flex flex-col items-center justify-center shadow-md"
                    >
                        {/* 이미지 자리 */}
                        <div className="w-full h-44 bg-gray-300 rounded-xl mb-4"></div>
                        {/* 이름 자리 */}
                        <div className="text-base font-bold mt-2 text-center">맛집 이름</div>
                        {/* 설명 자리 */}
                        <div className="text-xs text-gray-500 mt-1 text-center">설명</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WishListFrame;