// js/map.js
(function() {
    // 灌云县伊山镇皇冠世纪酒店坐标（需要实际查询）
    // 这里使用灌云县中心坐标作为示例，实际应替换为酒店精确坐标
    const hotelLocation = {
        lng: 119.229186, // 示例经度，需要替换为实际坐标
        lat: 34.289147   // 示例纬度，需要替换为实际坐标
    };

    function initMap() {
        if (typeof AMap === 'undefined') {
            console.error('高德地图API未加载');
            return;
        }

        const map = new AMap.Map('map', {
            zoom: 15,
            center: [hotelLocation.lng, hotelLocation.lat],
            viewMode: '2D'
        });

        const marker = new AMap.Marker({
            position: [hotelLocation.lng, hotelLocation.lat],
            title: '灌云县伊山镇皇冠世纪酒店'
        });

        map.add(marker);

        // 信息窗体
        const infoWindow = new AMap.InfoWindow({
            content: '<div style="padding:10px;"><h4>皇冠世纪酒店</h4><p>灌云县伊山镇</p></div>',
            offset: new AMap.Pixel(0, -30)
        });

        infoWindow.open(map, marker.getPosition());

        marker.on('click', function() {
            infoWindow.open(map, marker.getPosition());
        });
    }

    // 页面加载完成后初始化地图
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMap);
    } else {
        initMap();
    }
})();
