var blacklist = ["1512793", "1915144", "1612604", "1513404", "1610107", "1610372", "1611046", "1611712", "1612115", "1614189", "1710094", "1710165", "1711265", "1711680", "1711947", "1712025", "1712393", "1712692", "1712727", "1713148", "1713214", "1713417", "1713669", "1714054", "1810014", "1810299", "1810814", "1810885", "1811669", "1811828", "1812164", "1812778", "1814446", "1814454", "1813159", "1813952", "1813636", "1911262", "1910637", "1913332", "1913102", "1910351", "1915144", "1911437", "1915121", "1710539", "1913678", "1912791", "1910364", "1911285", "1814041", "1914691", "1713743", "1912190", "1811553", "1916022", "1812593", "1812064", "1913774", "1811912", "1712160", "1812502", "1810086", "1810344", "1814182", "1810075", "1710710", "1812227", "1813373", "1814149"]

function getSV1() {
    return data = [
        "137571	Nguyễn Minh Thông",
        "172241	Nguyễn Văn Lạc",
        "266645	Phạm Đăng Hùng Hiệp",
        "290294	Nguyễn Tiến Dũng",
        "294086	Dương Quang Huy",
        "438991	Lê Quốc Đăng",
        "439367	Lê Minh Thanh Tú",
        "439687	Nguyễn Lê Hoàng Nam",
        "439672	Trần Trọng Hiếu",
        "441367	Huỳnh Nhật Nam",
        "441361	Trần Đông Hữu Phú",
        "443914	Nguyễn Văn Biên",
        "443445	Phạm Anh Đức",
        "278343	Phùng Khắc Nhu",
        "428056	Ngô Nguyên Thuận",
        "291527	Trần Cao Bảo Ân",
        "432402	Hoàng Đôn Thiện Hiếu",
        "428867	Phan Thị Mỹ Duyên",
        "438992	Phạm Việt Hưng",
        "439676	Trần Như Anh Vũ",
        "438993	Hồ Đức Thiện",
        "441362	Nguyễn Văn Sỹ",
        "441364	Lê Thủy Triều",
        "442066	Trần Bình Cơ",
        "442075	Lê Tấn Tài",
        "443132	Trương Khải Hoàn",
        "443454	Trần Tiến Phát",
        "436075	Nguyễn Thanh Pháp",
        "443912	Đỗ Tuấn Anh",
        "443446	Nguyễn Trần Anh Tú",
        "280766	Nguyễn Tuấn Minh",
        "274962	Võ Tấn Lực",
        "293354	Lê Hiếu Phương",
        "275313	Nguyễn Nhật Quang",
        "290422	Ngô Thanh Liêm",
        "440041	Võ Tấn Lễ",
        "438438	Lê Phúc Khang",
        "438439	Lâm Nhựt Phúc",
        "441363	Từ Kiến Hoa",
        "442072	Nguyễn Việt Khoa",
        "443131	Trần Đình Tiến",
        "293194	Trần Minh Chiến",
        "Thực tập	Phạm Hoài Phát",
        "293355	Nguyễn Văn Tuân",
        "436370	Lê Công Pha",
        "440333	Hà Minh Hoàng",
        "435270	Đào Anh Tuấn",
        "438436	Nguyễn Văn Anh Thy",
        "440046	Võ Nhựt Luân",
        "440044	Nguyễn Thông Phi Huỳnh",
        "191534	Huỳnh Lê Bảo",
        "292564	Nguyễn Hữu Trung Nhân",
        "290167	Nguyễn Lương Đạt",
        "277516	Nguyễn Đức Thắng",
        "439370	Lê Bảo Long",
        "440338	Trần Phước Hiền",
        "442057	Nguyễn Phúc Minh",
        "441443	Trần Dương Phúc An",
        "438990	Đỗ Quốc Tuấn",
        "443444	Lộ Linh Chi",
        "277668	Nguyễn Hải Dương",
        "431722	Hoàng Văn Dũng",
        "432902	Phạm Bình An",
        "433416	Trần Xuân Hạnh",
        "Thực tập	Nguyễn Thị Thu Thảo",
        "439664	Nguyễn Hồng Quang",
        "429867	Võ Thành Cường",
        "293356	Phạm Nguyễn Xuân Nguyên",
        "429199	Trần Công Minh",
        "292568	Nguyễn Minh Khuê",
        "435204	Huỳnh Khánh Hòa",
        "435262	Hoàng Viễn Duy",
        "436054	Huỳnh Quân",
        "438977	Trần Hoàng Phát",
        "437910	Đỗ Mạnh Quân",
        "440048	Nguyễn Trần Trung",
        "260734	Nguyễn Lê Phan",
        "	Phạm Ngọc Thanh Hưng",
        "443911	Dương Thành Tâm"
    ]
}

function getSV() {
    a = getSV1();
    filtered = a.filter(x => !blacklist.includes(x.substring(0,7)))
    return filtered.map(x => ({
        value: x,
        text: x
    }));
}

jQuery.extend( jQuery.easing, {
    easeOutElastic: function(x, t, b, c, d) {
        var ts=(t/=d)*t;
        var tc=ts*t;
        return b+c*(33*tc*ts + -106*ts*ts + 126*tc + -67*ts + 15*t);
    }
})

var loadout = $("#loadout"),
    shuffled = [],
    easingNames = [
        "easeOutCirc",
        "easeOutCirc",
        "easeOutCirc",
        "easeOutCirc",
        "easeOutCirc",
        "easeOutCirc",
        "easeOutCirc",
        "easeOutBack",
        "easeOutBack",
        "easeOutElasticS"
    ],
    default_maxLength = 1000,
    maxLength = 1000,
    force = 0.1;

$(document).ready(function() {

    Pressure.set('#roll', {
        change: function(_force, event) {
            $("#power-bar > span").width(_force*100 + "%");
            force = _force;
            fireworkStop();
        }
    });

    var roll = function(isInit = false) {
        var users = getSV();

        
        var _force = 1;
        var ease = "easeOutBack";

        if (isInit == "true") {
            _force = 0.02;
            ease = "easeOutCirc";
        }
        else {
            if (force < 0.25)
                ease = "easeOutCirc";
            else if (force == 1)
                ease = "easeOutElasticS";
            else 
                ease = easingNames[Math.floor(Math.random() * easingNames.length)];
            _force =  0.3 + force * force * 0.7;
        }

        $("#roll").attr("disabled",true);
        let shuffled = [];

        for(; shuffled.length < maxLength;) {
            tempUser = users;
            tempUser.shuffle();
            tempUser.forEach(item =>
                shuffled.push({
                    value: item.value,
                    text: item.text
                }))
        }

        shuffled = shuffled.slice(0, maxLength);
        for(var i=0;i<shuffled.length;i++)
            shuffled[i].value = i;
        $(loadout).html("");

        let svSelector = new IosSelector({
            el: '#loadout',
            source: shuffled,
            count: 18,
        });

        var winner = Math.floor(_force * maxLength) - 1;
        console.log(shuffled[winner].value)
        blacklist.push(shuffled[winner].text.substring(0,7));
        setTimeout(function() {
            svSelector.select(shuffled[winner].value, ease, ()=>{
                $("#roll").attr("disabled",false);
                if (isInit != "true") {
                    fireworkStart();
                    setTimeout(fireworkStop, 5000);
                }
            });
        });
    };

    $("#roll").click(roll);

    Array.prototype.shuffle = function() {
        var counter = this.length, temp, index;
        while (counter > 0) {
            index = (Math.random() * counter--) | 0;
            temp = this[counter];
            this[counter] = this[index];
            this[index] = temp;
        }
    }

    roll("true");
});