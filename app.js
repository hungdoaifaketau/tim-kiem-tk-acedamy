const csvData = `
Tên học sinh,Tên đăng nhập,Mật khẩu
Võ Hà An,vohaan6,toan8h2425
Hồ Hà Anh,hohaanh8,toan8h2425
Phan Thảo Hiền Anh,phanthaohienanh7,toan8h2425
Võ Trần Thiên Bảo,votranthienbao4,toan8h2425
Trần Ngọc Khánh Bình,tranngockhanhbinh6,toan8h2425
Dương Khánh Chi,duongkhanhchi04,toan8h2425
Phan Hùng Dũng,phanhungdung5,toan8h2425
Mai Anh Dức,maianhduc22,toan8h2425
Nguyễn Ngọc Hà,nguyenngocha6579,toan8h2425
Võ Nam Hải,vonamhai6,toan8h2425
Lê Dình Hoàng,ledinhhoang0,toan8h2425
Nguyễn Lê Hoàng,nguyenlehoang79,toan8h2425
Trần Huy Hoàng,tranhuyhoang489,toan8h2425
Võ Gia Huy,vogiahuy43,toan8h2425
Lê Bá Minh Hưng,lebaminhhung1,toan8h2425
Nguyễn Hoàng Quỳnh Hương,nguyenhoangquynhhuon0,toan8h2425
Nguyễn Cao Ngân Khánh,nguyencaongankhanh1,toan8h2425
Phan Gia Khánh,phangiakhanh7,toan8h2425
Nguyễn Gia Kiên,nguyengiakien0,toan8h2425
Phan Trung Kiên,phantrungkien83,toan8h2425
Nguyễn Khánh Linh,nguyenkhanhlinh5538,toan8h2425
Trương Thị Thảo Ly,truongthithaoly2,toan8h2425
Lê Dức Minh,leducminh228,toan8h2425
Nguyễn Lê Thảo My,nguyenlethaomy25,toan8h2425
Nguyễn Phan Thiên Ngân,nguyenphanthienngan0,toan8h2425
Phan Thị Bảo Ngọc,phanthibaongoc707,toan8h2425
Dào Yến Nhi,daoyennhi8,toan8h2425
Trần Lê Hoàng Nhi,tranlehoangnhi4,toan8h2425
Lê Thị Hồng Nhung,lethihongnhung73,toan8h2425
Nguyễn Lê Gia Như,nguyenlegianhu2,toan8h2425
Lê Nguyển Minh Phát,lenguyenminhphat7,toan8h2425
Võ An Phú,voanphu7,toan8h2425
Doàn Xuân Phúc,doanxuanphuc6,toan8h2425
Nguyễn Khánh Phương,nguyenkhanhphuong89,toan8h2425
Nguyễn Mai Phương,nguyenmaiphuong875,toan8h2425
Trần Minh Quân,tranminhquan319,toan8h2425
Trương Minh Quân,truongminhquan72,toan8h2425
Lê Nhật Quỳnh,lenhatquynh5,toan8h2425
Nguyễn Quốc Thái,nguyenquocthai21,toan8h2425
Lê Nguyễn Phước Thành,lenguyenphuocthanh2,toan8h2425
Lê Nhân Thành,lenhanthanh5,toan8h2425
Cao Duy Phước Thịnh,caoduyphuocthinh7,toan8h2425
Lê Dức Tiến,leductien2,toan8h2425
Nguyễn Ngô Bảo Trân,nguyenngobaotran2,toan8h2425
Trịnh Dình Trọng,trinhdinhtrong5,toan8h2425
Lê Cát Tường,lecattuong0,toan8h2425
Lê Thị Xuân Yên,lethixuanyen0,toan8h2425
`;

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const studentName = document.getElementById('student-name').value.trim().toLowerCase();
    if (!studentName) {
        alert("Vui lòng nhập tên học sinh.");
        return;
    }

    const rows = csvData.trim().split('\n');
    const resultTable = document.getElementById('result-table');
    const resultBody = document.getElementById('result-body');
    resultBody.innerHTML = ''; 

    let found = false;
    for (let i = 1; i < rows.length; i++) {
        const [name, username, password] = rows[i].split(',');
        if (name && name.toLowerCase().includes(studentName)) {
            found = true;
            resultBody.innerHTML += `
                <tr>
                    <td>${name}</td>
                    <td>${username}</td>
                    <td>${password}</td>
                </tr>
            `;
        }
    }

    if (found) {
        resultTable.style.display = 'table';
    } else {
        resultTable.style.display = 'none';
        alert("Không tìm thấy học sinh.");
    }
});
