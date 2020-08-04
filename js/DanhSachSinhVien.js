function DanhSachSinhVien ()
{
    this.DSSV = [];
    this.ThemSinhVien = function (svThem)
    {
        this.DSSV.push(svThem);
    }
    this.SuaSinhVien = function (svCapNhat)
    {
        for(let i=0; i<this.DSSV.length; i++)
        {
            let svUpdate = this.DSSV[i];
            if(svCapNhat.MaSV == svUpdate.MaSV)
            {
                svUpdate.HoTen = svCapNhat.HoTen;
                svUpdate.Email = svCapNhat.Email;
                svUpdate.CMND = svCapNhat.CMND;
                svUpdate.SoDT = svCapNhat.SoDT;
            }

        }
    }
    this.XoaSinhVien = function (lstSVXoa)
    {
        for(let i=0;i< lstSVXoa.length ;i++)
        {
            for(let j=0; j < this.DSSV.length ; j++ )
            {
                let sinhvien = this.DSSV[j];
                if(lstSVXoa[i] == sinhvien.MaSV)
                {
                    this.DSSV.splice(j,1);
                }
            }
        }
    }
    this.TimKiemSinhVien = function (tukhoa)
    {
        //List kết quả tìm kiếm : DanhSachSinhVien
        let lstKetQuaTimKiem = new DanhSachSinhVien();
        for(let i=0 ; i< this.DSSV.length ; i++)
        {
            let sinhvien = this.DSSV[i];
            if(sinhvien.HoTen.toLowerCase().trim().search(tukhoa.toLowerCase().trim()) != -1)
            {
                lstKetQuaTimKiem.ThemSinhVien(sinhvien);
            }
        }
        return lstKetQuaTimKiem;
    }
    this.TimSVTheoMa = function(masv)
    {
        for(let i=0; i<this.DSSV.length; i++)
        {
            let sv = this.DSSV[i];
            if(sv.MaSV === masv)
            {
                return sv;
            }
        }
        return null;
    }
}